/**
 * Workout Pattern Coach backend for Google Apps Script.
 *
 * Deploy this project as a Web App and paste the /exec URL into the GitHub
 * Pages app. For easiest setup, bind this script to the target spreadsheet.
 * If you use a standalone Apps Script project, set SPREADSHEET_ID.
 * For Google Sign-In, set GOOGLE_CLIENT_ID to the OAuth Web Client ID.
 */
const SPREADSHEET_ID = "";
const GOOGLE_CLIENT_ID = "";
const SET_LOGS_SHEET = "SetLogs";
const DAILY_SUMMARY_SHEET = "DailySummary";

const SET_LOG_HEADERS = [
  "id",
  "userId",
  "date",
  "exerciseId",
  "exerciseName",
  "groupId",
  "groupName",
  "setNumber",
  "reps",
  "completedAt",
  "syncedAt",
];

const DAILY_SUMMARY_HEADERS = [
  "key",
  "userId",
  "date",
  "completed",
  "totalSets",
  "completedSets",
  "sessionSeconds",
  "updatedAt",
  "stateJson",
  "syncedAt",
];

function doPost(e) {
  try {
    const message = parsePostBody_(e);
    const auth = getRequestAuth_(message);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      ensureSheets_();
      const result = routePost_(message, auth);
      return jsonResponse_({ ok: true, result, authUser: auth ? auth.publicProfile : null });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function doGet(e) {
  try {
    ensureSheets_();
    const action = String((e.parameter && e.parameter.action) || "health");
    const callback = e.parameter && e.parameter.callback;
    const auth = getRequestAuth_(e.parameter || {});
    let payload;

    if (action === "list") {
      const userId = auth ? auth.userId : String((e.parameter && e.parameter.userId) || "");
      if (!userId) throw new Error("userId is required");
      payload = listUserData_(userId);
      payload.authUser = auth ? auth.publicProfile : null;
    } else if (action === "verify") {
      if (!auth) throw new Error("idToken is required");
      payload = { ok: true, authUser: auth.publicProfile };
    } else {
      payload = {
        ok: true,
        service: "workout-pattern-coach",
        timestamp: new Date().toISOString(),
      };
    }

    return jsonResponse_(payload, callback);
  } catch (error) {
    const callback = e && e.parameter && e.parameter.callback;
    return jsonResponse_({ ok: false, error: String(error && error.message ? error.message : error) }, callback);
  }
}

function routePost_(message, auth) {
  const action = String(message.action || "");
  const payload = message.payload || {};

  if (action === "upsertSetLog") {
    return upsertSetLog_(payload, auth);
  }

  if (action === "upsertDailySummary") {
    return upsertDailySummary_(payload, auth);
  }

  if (action === "batch" && Array.isArray(message.items)) {
    return message.items.map(function(item) {
      return routePost_(item, auth);
    });
  }

  throw new Error("Unsupported action: " + action);
}

function upsertSetLog_(record, auth) {
  const sheet = getSpreadsheet_().getSheetByName(SET_LOGS_SHEET);
  const now = new Date().toISOString();
  const userId = auth ? auth.userId : requireText_(record.userId, "userId");
  const date = requireText_(record.date, "date");
  const exerciseId = requireText_(record.exerciseId, "exerciseId");
  const setNumber = Number(record.setNumber || 0);
  const id = auth
    ? buildSetLogId_(userId, date, exerciseId, setNumber)
    : requireText_(record.id, "id");
  const values = {
    id,
    userId,
    date,
    exerciseId,
    exerciseName: String(record.exerciseName || ""),
    groupId: String(record.groupId || ""),
    groupName: String(record.groupName || ""),
    setNumber,
    reps: Number(record.reps || 0),
    completedAt: String(record.completedAt || now),
    syncedAt: now,
  };
  upsertByKey_(sheet, SET_LOG_HEADERS, id, values);
  return { id };
}

function upsertDailySummary_(summary, auth) {
  const sheet = getSpreadsheet_().getSheetByName(DAILY_SUMMARY_SHEET);
  const now = new Date().toISOString();
  const userId = auth ? auth.userId : requireText_(summary.userId, "userId");
  const date = requireText_(summary.date, "date");
  const key = auth ? buildDailySummaryKey_(userId, date) : requireText_(summary.key, "key");
  const values = {
    key,
    userId,
    date,
    completed: Boolean(summary.completed),
    totalSets: Number(summary.totalSets || 0),
    completedSets: Number(summary.completedSets || 0),
    sessionSeconds: Number(summary.sessionSeconds || 0),
    updatedAt: String(summary.updatedAt || now),
    stateJson: String(summary.stateJson || ""),
    syncedAt: now,
  };
  upsertByKey_(sheet, DAILY_SUMMARY_HEADERS, key, values);
  return { key };
}

function listUserData_(userId) {
  return {
    ok: true,
    userId,
    setLogs: readObjects_(getSpreadsheet_().getSheetByName(SET_LOGS_SHEET), SET_LOG_HEADERS)
      .filter(function(row) { return row.userId === userId; }),
    dailySummaries: readObjects_(getSpreadsheet_().getSheetByName(DAILY_SUMMARY_SHEET), DAILY_SUMMARY_HEADERS)
      .filter(function(row) { return row.userId === userId; }),
  };
}

function getRequestAuth_(source) {
  const idToken = source && source.idToken ? String(source.idToken) : "";
  if (!idToken) return null;
  const providedClientId = source && source.googleClientId ? String(source.googleClientId) : "";
  return verifyGoogleIdToken_(idToken, providedClientId);
}

function verifyGoogleIdToken_(idToken, providedClientId) {
  const expectedClientId = String(GOOGLE_CLIENT_ID || providedClientId || "").trim();
  if (!expectedClientId) {
    throw new Error("GOOGLE_CLIENT_ID or googleClientId is required");
  }

  const response = UrlFetchApp.fetch(
    "https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(idToken),
    { muteHttpExceptions: true }
  );
  const status = response.getResponseCode();
  if (status < 200 || status >= 300) {
    throw new Error("Google idToken verification failed");
  }

  const token = JSON.parse(response.getContentText());
  if (token.aud !== expectedClientId) {
    throw new Error("Invalid Google token audience");
  }
  if (token.iss !== "accounts.google.com" && token.iss !== "https://accounts.google.com") {
    throw new Error("Invalid Google token issuer");
  }
  if (Number(token.exp || 0) * 1000 < Date.now()) {
    throw new Error("Expired Google token");
  }
  if (!token.sub) {
    throw new Error("Google token is missing subject");
  }

  return {
    userId: "google:" + token.sub,
    publicProfile: {
      userId: "google:" + token.sub,
      email: token.email || "",
      name: token.name || "",
      picture: token.picture || "",
    },
  };
}

function buildSetLogId_(userId, date, exerciseId, setNumber) {
  return [userId, date, exerciseId, setNumber].join(":");
}

function buildDailySummaryKey_(userId, date) {
  return userId + ":" + date;
}

function parsePostBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Missing POST body");
  }
  return JSON.parse(e.postData.contents);
}

function getSpreadsheet_() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (!active) {
    throw new Error("No active spreadsheet. Bind this script to a Sheet or set SPREADSHEET_ID.");
  }
  return active;
}

function ensureSheets_() {
  const ss = getSpreadsheet_();
  ensureSheet_(ss, SET_LOGS_SHEET, SET_LOG_HEADERS);
  ensureSheet_(ss, DAILY_SUMMARY_SHEET, DAILY_SUMMARY_HEADERS);
}

function ensureSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const needsHeader = headers.some(function(header, index) {
    return firstRow[index] !== header;
  });
  if (needsHeader) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function upsertByKey_(sheet, headers, key, values) {
  const row = headers.map(function(header) {
    return values[header] === undefined ? "" : values[header];
  });
  const existingRow = findRowByFirstColumn_(sheet, key);
  if (existingRow) {
    sheet.getRange(existingRow, 1, 1, headers.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }
}

function findRowByFirstColumn_(sheet, key) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;
  const finder = sheet.getRange(2, 1, lastRow - 1, 1).createTextFinder(String(key)).matchEntireCell(true);
  const match = finder.findNext();
  return match ? match.getRow() : 0;
}

function readObjects_(sheet, headers) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const values = sheet.getRange(2, 1, lastRow - 1, headers.length).getValues();
  return values.map(function(row) {
    const obj = {};
    headers.forEach(function(header, index) {
      obj[header] = row[index];
    });
    return obj;
  });
}

function jsonResponse_(payload, callback) {
  const json = JSON.stringify(payload);
  const output = callback
    ? ContentService.createTextOutput(String(callback) + "(" + json + ");")
    : ContentService.createTextOutput(json);
  output.setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
  return output;
}

function requireText_(value, fieldName) {
  const text = String(value || "").trim();
  if (!text) throw new Error(fieldName + " is required");
  return text;
}
