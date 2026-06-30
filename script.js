const routineGroups = [
  {
    id: "chest",
    name: "가슴",
    subtitle: "푸시업",
    accent: "#ef5b4c",
    exercises: [
      {
        id: "pushup-standard",
        level: "레벨 1",
        name: "일반 푸쉬업",
        target: "가슴 중간 (볼륨)",
        reps: "10-15회",
        sets: 3,
        rest: 60,
        image: "assets/pushup-standard.png",
        notes: ["초보자는 무릎 대고 수행", "몸통 일직선 유지"],
      },
      {
        id: "pushup-decline",
        level: "레벨 2",
        name: "디클라인 푸쉬업",
        target: "가슴 상부 (라인)",
        reps: "8-12회",
        sets: 3,
        rest: 60,
        image: "assets/pushup-decline.png",
        notes: ["발을 의자에 올림", "가슴을 바닥 쪽으로"],
      },
      {
        id: "pushup-incline",
        level: "레벨 3",
        name: "인클라인 푸쉬업",
        target: "가슴 하부 (데피니션)",
        reps: "최대",
        sets: 2,
        rest: 60,
        image: "assets/pushup-incline.png",
        notes: ["손을 의자에 올림", "마지막 한계까지"],
      },
    ],
  },
  {
    id: "back",
    name: "등",
    subtitle: "넓이 · 두께",
    accent: "#119a8d",
    exercises: [
      {
        id: "lat-pulldown",
        level: "레벨 1",
        name: "비하인드 랫 풀다운",
        target: "등 넓이",
        reps: "15회",
        sets: 3,
        rest: 60,
        image: "assets/lat-pulldown.png",
        notes: ["의자 활용", "팔꿈치를 아래로 당김"],
      },
      {
        id: "bent-over-row",
        level: "레벨 2",
        name: "벤트오버 로우",
        target: "등 두께",
        reps: "15회",
        sets: 3,
        rest: 60,
        image: "assets/bent-row.png",
        notes: ["물병 사용 가능", "허리 중립 유지"],
      },
    ],
  },
  {
    id: "shoulder",
    name: "어깨",
    subtitle: "측면",
    accent: "#d89a18",
    exercises: [
      {
        id: "side-lateral-raise",
        level: "단일 루틴",
        name: "사이드 레터럴 레이즈",
        target: "측면 어깨",
        reps: "20-25회",
        sets: 3,
        rest: 60,
        image: "assets/lateral-raise.png",
        notes: ["셔츠 핏 포인트", "어깨 높이까지만"],
      },
    ],
  },
  {
    id: "abs",
    name: "복근",
    subtitle: "전면 · 옆구리",
    accent: "#6a5acd",
    exercises: [
      {
        id: "superman-crunch",
        level: "레벨 1",
        name: "전신 크런치",
        target: "상·하복부 전면",
        reps: "15회",
        sets: 3,
        rest: 40,
        image: "assets/superman-crunch.png",
        notes: ["플랭크와 병행 좋음", "복부 텐션 유지"],
      },
      {
        id: "side-toe-touch",
        level: "레벨 2",
        name: "사이드 토터치",
        target: "옆구리 (외복사근)",
        reps: "왕복 15회",
        sets: 3,
        rest: 40,
        image: "assets/side-toe-touch.png",
        notes: ["좌우를 1회로 계산", "목 힘 빼기"],
      },
    ],
  },
  {
    id: "legs",
    name: "하체",
    subtitle: "전반",
    accent: "#2e9d5b",
    exercises: [
      {
        id: "bodyweight-squat",
        level: "단일 루틴",
        name: "맨몸 스쿼트",
        target: "하체 전반 (대퇴사두, 둔근)",
        reps: "15회",
        sets: 3,
        rest: 60,
        image: "assets/squat.png",
        notes: ["엉덩이를 뒤로", "무릎 방향 유지"],
      },
    ],
  },
];

const appVersion = "2.0.0";
const assetVersion = "youtube-frames-20260630";
const storagePrefix = "workoutPatternCoach:";
const settingsKey = `${storagePrefix}settings`;
const userKey = `${storagePrefix}userId`;
const authSessionKey = `${storagePrefix}authSession`;
const syncQueueKey = `${storagePrefix}syncQueue`;
const workDays = new Set([1, 3, 5]);
const weekLabels = [
  ["일", "Sun"],
  ["월", "Mon"],
  ["화", "Tue"],
  ["수", "Wed"],
  ["목", "Thu"],
  ["금", "Fri"],
  ["토", "Sat"],
];

const exercises = routineGroups.flatMap((group, groupIndex) =>
  group.exercises.map((exercise, exerciseIndex) => ({
    ...exercise,
    group: {
      id: group.id,
      name: group.name,
      subtitle: group.subtitle,
      accent: group.accent,
      order: groupIndex,
    },
    order: exerciseIndex,
  }))
);
const exerciseById = new Map(exercises.map((exercise) => [exercise.id, exercise]));
const exerciseIndexById = new Map(exercises.map((exercise, index) => [exercise.id, index]));
const totalSets = exercises.reduce((sum, exercise) => sum + exercise.sets, 0);
const todayKey = getLocalDateKey(new Date());
const storageKey = getStorageKey(todayKey);
const settings = loadSettings();
const fallbackUserId = loadUserId();
let userId = settings.activeUserId || fallbackUserId;
let authSession = loadAuthSession();
let syncQueue = loadSyncQueue();
const state = loadState(todayKey);
let tickId = null;
let syncInProgress = false;
let remoteImportInProgress = false;
let renderedGoogleClientId = "";

const els = {
  todayCard: document.querySelector("#todayCard"),
  weekStrip: document.querySelector("#weekStrip"),
  totalProgressText: document.querySelector("#totalProgressText"),
  progressBar: document.querySelector("#progressBar"),
  sequenceList: document.querySelector("#sequenceList"),
  exerciseImage: document.querySelector("#exerciseImage"),
  groupPill: document.querySelector("#groupPill"),
  levelPill: document.querySelector("#levelPill"),
  exerciseName: document.querySelector("#exerciseName"),
  targetText: document.querySelector("#targetText"),
  repsText: document.querySelector("#repsText"),
  setText: document.querySelector("#setText"),
  restText: document.querySelector("#restText"),
  noteList: document.querySelector("#noteList"),
  timerBoard: document.querySelector("#timerBoard"),
  phaseLabel: document.querySelector("#phaseLabel"),
  timerText: document.querySelector("#timerText"),
  nextCue: document.querySelector("#nextCue"),
  startPauseBtn: document.querySelector("#startPauseBtn"),
  completeSetBtn: document.querySelector("#completeSetBtn"),
  skipRestBtn: document.querySelector("#skipRestBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  repInput: document.querySelector("#repInput"),
  repDecBtn: document.querySelector("#repDecBtn"),
  repIncBtn: document.querySelector("#repIncBtn"),
  finishWorkoutBtn: document.querySelector("#finishWorkoutBtn"),
  clearHistoryBtn: document.querySelector("#clearHistoryBtn"),
  tabDailyBtn: document.querySelector("#tabDailyBtn"),
  tabCalendarBtn: document.querySelector("#tabCalendarBtn"),
  dailyHistoryView: document.querySelector("#dailyHistoryView"),
  calendarHistoryView: document.querySelector("#calendarHistoryView"),
  exportCsvBtn: document.querySelector("#exportCsvBtn"),
  exportJsonBtn: document.querySelector("#exportJsonBtn"),
  importJsonBtn: document.querySelector("#importJsonBtn"),
  importJsonFile: document.querySelector("#importJsonFile"),
  timerProgressCircle: document.querySelector("#timerProgressCircle"),
  totalStopwatchText: document.querySelector("#totalStopwatchText"),
  appsScriptUrlInput: document.querySelector("#appsScriptUrlInput"),
  googleClientIdInput: document.querySelector("#googleClientIdInput"),
  googleAccountText: document.querySelector("#googleAccountText"),
  googleSignInButton: document.querySelector("#googleSignInButton"),
  googleSignOutBtn: document.querySelector("#googleSignOutBtn"),
  saveSyncSettingsBtn: document.querySelector("#saveSyncSettingsBtn"),
  syncNowBtn: document.querySelector("#syncNowBtn"),
  pullRemoteBtn: document.querySelector("#pullRemoteBtn"),
  syncStatusText: document.querySelector("#syncStatusText"),
  syncQueueText: document.querySelector("#syncQueueText"),
};

function getStorageKey(dateKey) {
  return `${storagePrefix}${dateKey}`;
}

function getLocalDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadUserId() {
  const existing = localStorage.getItem(userKey);
  if (existing) return existing;
  const randomPart =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const created = `user-${randomPart}`;
  localStorage.setItem(userKey, created);
  return created;
}

function safeJsonParse(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function loadSettings() {
  return {
    appsScriptUrl: "",
    googleClientId: "",
    activeUserId: "",
    lastGoogleEmail: "",
    lastGoogleName: "",
    autoSync: true,
    lastSyncAt: "",
    lastSyncError: "",
    ...safeJsonParse(localStorage.getItem(settingsKey), {}),
  };
}

function saveSettings() {
  localStorage.setItem(settingsKey, JSON.stringify(settings));
}

function loadAuthSession() {
  try {
    const parsed = safeJsonParse(sessionStorage.getItem(authSessionKey), null);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function saveAuthSession() {
  try {
    if (authSession) {
      sessionStorage.setItem(authSessionKey, JSON.stringify(authSession));
    } else {
      sessionStorage.removeItem(authSessionKey);
    }
  } catch {
    // Private or locked-down browsers can block sessionStorage; local recording still works.
  }
}

function isGoogleUserId(value) {
  return String(value || "").startsWith("google:");
}

function getGoogleClientId() {
  return String(settings.googleClientId || "").trim();
}

function isAuthSessionFresh() {
  return Boolean(
    authSession &&
      authSession.idToken &&
      authSession.userId === userId &&
      Number(authSession.expiresAt || 0) > Date.now() + 60000
  );
}

function requiresGoogleAuthForSync() {
  return Boolean(getGoogleClientId() || isGoogleUserId(userId));
}

function getGoogleAuthPayload() {
  if (!isAuthSessionFresh()) return null;
  return {
    idToken: authSession.idToken,
    googleClientId: authSession.clientId || getGoogleClientId(),
  };
}

function loadSyncQueue() {
  const parsed = safeJsonParse(localStorage.getItem(syncQueueKey), []);
  return Array.isArray(parsed) ? parsed : [];
}

function saveSyncQueue() {
  localStorage.setItem(syncQueueKey, JSON.stringify(syncQueue));
}

function defaultState(dateKey) {
  const now = new Date();
  return {
    version: 2,
    date: dateKey,
    exerciseIndex: 0,
    setNumber: 1,
    phase: "ready",
    running: false,
    workSeconds: 0,
    restRemaining: 0,
    inputReps: {},
    setRecords: [],
    completed: false,
    sessionSeconds: 0,
    activeHistoryTab: "daily",
    currentCalendarYear: now.getFullYear(),
    currentCalendarMonth: now.getMonth(),
  };
}

function loadState(dateKey) {
  return loadStateForDate(dateKey);
}

function loadStateForDate(dateKey) {
  const saved = safeJsonParse(localStorage.getItem(getStorageKey(dateKey)), null);
  return normalizeState(saved, dateKey);
}

function normalizeState(saved, dateKey) {
  const base = defaultState(dateKey);
  if (!saved || typeof saved !== "object") return base;

  if (saved.version === 2 && Array.isArray(saved.setRecords)) {
    return {
      ...base,
      ...saved,
      date: saved.date || dateKey,
      exerciseIndex: clampNumber(saved.exerciseIndex, 0, exercises.length - 1, 0),
      setNumber: clampNumber(saved.setNumber, 1, getCurrentExerciseFromIndex(saved.exerciseIndex).sets, 1),
      inputReps: sanitizeInputReps(saved.inputReps),
      setRecords: sanitizeRecords(saved.setRecords, saved.date || dateKey),
      running: false,
    };
  }

  return migrateLegacyState(saved, dateKey);
}

function migrateLegacyState(saved, dateKey) {
  const migrated = {
    ...defaultState(dateKey),
    exerciseIndex: clampNumber(saved.exerciseIndex, 0, exercises.length - 1, 0),
    setNumber: clampNumber(saved.setNumber, 1, getCurrentExerciseFromIndex(saved.exerciseIndex).sets, 1),
    phase: saved.phase === "complete" ? "complete" : "ready",
    completed: Boolean(saved.completed || saved.phase === "complete"),
    sessionSeconds: Number.isFinite(saved.sessionSeconds) ? saved.sessionSeconds : 0,
    activeHistoryTab: saved.activeHistoryTab === "calendar" ? "calendar" : "daily",
    currentCalendarYear: Number.isFinite(saved.currentCalendarYear)
      ? saved.currentCalendarYear
      : new Date().getFullYear(),
    currentCalendarMonth: Number.isFinite(saved.currentCalendarMonth)
      ? saved.currentCalendarMonth
      : new Date().getMonth(),
    inputReps: {},
    setRecords: [],
  };

  const legacyCompletedSets = Number.isFinite(saved.completedSets) ? saved.completedSets : 0;
  const repsHistory = saved.repsHistory && typeof saved.repsHistory === "object" ? saved.repsHistory : {};

  Object.entries(repsHistory).forEach(([legacyIndex, reps]) => {
    const exercise = exercises[Number(legacyIndex)];
    if (!exercise || !Array.isArray(reps)) return;
    reps.forEach((rep, setIndex) => {
      const globalSetNumber = getSetsBefore(Number(legacyIndex)) + setIndex + 1;
      const wasActuallyReached = saved.completed || legacyCompletedSets >= globalSetNumber;
      if (!wasActuallyReached) return;
      const record = createSetRecord({
        dateKey,
        exercise,
        setNumber: setIndex + 1,
        reps: clampNumber(rep, 0, 999, getDefaultReps(exercise.reps)),
        completedAt: `${dateKey}T12:00:00.000`,
      });
      upsertRecord(migrated, record);
    });
  });

  if (migrated.setRecords.length >= totalSets) {
    migrated.completed = true;
    migrated.phase = "complete";
  }

  return migrated;
}

function sanitizeInputReps(inputReps) {
  if (!inputReps || typeof inputReps !== "object") return {};
  return Object.fromEntries(
    Object.entries(inputReps)
      .filter(([key, value]) => typeof key === "string" && Number.isFinite(Number(value)))
      .map(([key, value]) => [key, clampNumber(Number(value), 0, 999, 0)])
  );
}

function sanitizeRecords(records, fallbackDateKey) {
  return records
    .map((record) => sanitizeRecord(record, fallbackDateKey))
    .filter(Boolean)
    .sort(compareRecords);
}

function sanitizeRecord(record, fallbackDateKey) {
  if (!record || typeof record !== "object") return null;
  const exercise = exerciseById.get(record.exerciseId);
  if (!exercise) return null;
  const setNumber = clampNumber(record.setNumber, 1, exercise.sets, 1);
  const dateKey = /^\d{4}-\d{2}-\d{2}$/.test(record.date || "") ? record.date : fallbackDateKey;
  const id = record.id || buildRecordId(dateKey, exercise.id, setNumber);
  return {
    id,
    userId: record.userId || userId,
    date: dateKey,
    exerciseId: exercise.id,
    exerciseName: exercise.name,
    groupId: exercise.group.id,
    groupName: exercise.group.name,
    setNumber,
    reps: clampNumber(Number(record.reps), 0, 999, getDefaultReps(exercise.reps)),
    completedAt: record.completedAt || new Date().toISOString(),
  };
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, Math.trunc(number)));
}

function saveState(dateState = state) {
  const cleanState = {
    ...dateState,
    version: 2,
    running: false,
    setRecords: sanitizeRecords(dateState.setRecords, dateState.date),
  };
  localStorage.setItem(getStorageKey(cleanState.date), JSON.stringify(cleanState));
}

function getCurrentExerciseFromIndex(index) {
  return exercises[clampNumber(index, 0, exercises.length - 1, 0)];
}

function getCurrentExercise() {
  return getCurrentExerciseFromIndex(state.exerciseIndex);
}

function getSetsBefore(index) {
  return exercises.slice(0, index).reduce((sum, exercise) => sum + exercise.sets, 0);
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.trunc(seconds || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const restSeconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(restSeconds).padStart(2, "0")}`;
}

function formatStopwatchTime(seconds) {
  const safeSeconds = Math.max(0, Math.trunc(seconds || 0));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;
  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function getLocalDateKeyForDayOfWeek(targetDayOfWeek) {
  const now = new Date();
  const targetDate = new Date(now);
  targetDate.setDate(now.getDate() + (targetDayOfWeek - now.getDay()));
  return getLocalDateKey(targetDate);
}

function getCompletedRecordMap(dateState = state) {
  const map = new Map();
  dateState.setRecords.forEach((record) => {
    const key = getSetKey(record.exerciseId, record.setNumber);
    map.set(key, record);
  });
  return map;
}

function getSetKey(exerciseId, setNumber) {
  return `${exerciseId}:${setNumber}`;
}

function getCompletedSetCount(dateState = state) {
  return getCompletedRecordMap(dateState).size;
}

function getCompletedCountForExercise(exerciseId, dateState = state) {
  return [...getCompletedRecordMap(dateState).keys()].filter((key) => key.startsWith(`${exerciseId}:`)).length;
}

function getRecordForSet(exerciseId, setNumber, dateState = state) {
  return getCompletedRecordMap(dateState).get(getSetKey(exerciseId, setNumber));
}

function findFirstIncompleteSetNumber(exercise, dateState = state) {
  for (let setNumber = 1; setNumber <= exercise.sets; setNumber += 1) {
    if (!getRecordForSet(exercise.id, setNumber, dateState)) return setNumber;
  }
  return 0;
}

function findNextIncompleteSetNumber(exercise, afterSetNumber, dateState = state) {
  for (let setNumber = afterSetNumber + 1; setNumber <= exercise.sets; setNumber += 1) {
    if (!getRecordForSet(exercise.id, setNumber, dateState)) return setNumber;
  }
  return 0;
}

function getFirstIncompleteSetNumber(exercise, dateState = state) {
  return findFirstIncompleteSetNumber(exercise, dateState) || 1;
}

function getNextIncompletePosition(startIndex, dateState = state) {
  const safeStartIndex = clampNumber(startIndex, 0, exercises.length - 1, 0);
  for (let offset = 0; offset < exercises.length; offset += 1) {
    const exerciseIndex = (safeStartIndex + offset) % exercises.length;
    const exercise = exercises[exerciseIndex];
    const setNumber = findFirstIncompleteSetNumber(exercise, dateState);
    if (setNumber) return { exerciseIndex, setNumber };
  }
  return {
    exerciseIndex: safeStartIndex,
    setNumber: exercises[safeStartIndex].sets,
  };
}

function isDateCompleted(dateKey) {
  const dateState = loadStateForDate(dateKey);
  return Boolean(dateState.completed);
}

function compareRecords(a, b) {
  const orderA = exerciseIndexById.get(a.exerciseId) ?? 999;
  const orderB = exerciseIndexById.get(b.exerciseId) ?? 999;
  if (orderA !== orderB) return orderA - orderB;
  return a.setNumber - b.setNumber;
}

function renderWeek() {
  const now = new Date();
  const today = now.getDay();
  const cards = [1, 2, 3, 4, 5, 6, 0].map((day) => {
    const isWorkout = workDays.has(day);
    const dateKey = getLocalDateKeyForDayOfWeek(day);
    const isCompleted = isDateCompleted(dateKey);
    const [ko, en] = weekLabels[day];
    const icon = isCompleted ? "trophy" : isWorkout ? "dumbbell" : "moon";
    return `
      <div class="day-card ${isWorkout ? "is-workout" : ""} ${today === day ? "is-today" : ""} ${isCompleted ? "is-completed" : ""}">
        <i data-lucide="${icon}"></i>
        <span>${ko} (${en})</span>
        <strong>${isCompleted ? "완료!" : isWorkout ? "운동" : "휴식"}</strong>
      </div>
    `;
  });
  els.weekStrip.innerHTML = cards.join("");

  const todayIsWorkout = workDays.has(today);
  const todayIsCompleted = isDateCompleted(getLocalDateKey(now));
  els.todayCard.classList.toggle("is-completed", todayIsCompleted);
  els.todayCard.innerHTML = `
    <span>${weekLabels[today][0]}요일</span>
    <strong>${todayIsCompleted ? "오늘 운동 완료!" : todayIsWorkout ? "운동하는 날" : "쉬는 날"}</strong>
  `;
}

function getAllHistory() {
  const historyList = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(storagePrefix)) continue;
    const dateStr = key.replace(storagePrefix, "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) continue;
    const dateState = loadStateForDate(dateStr);
    if (dateState.setRecords.length || dateState.completed || dateState.sessionSeconds > 0) {
      historyList.push({
        date: dateStr,
        completed: dateState.completed,
        completedSets: getCompletedSetCount(dateState),
        sessionSeconds: dateState.sessionSeconds,
        setRecords: dateState.setRecords,
      });
    }
  }
  return historyList.sort((a, b) => b.date.localeCompare(a.date));
}

function getLocalHistoryDateKeys() {
  const dateKeys = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(storagePrefix)) continue;
    const dateKey = key.replace(storagePrefix, "");
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) dateKeys.push(dateKey);
  }
  return [...new Set(dateKeys)];
}

function reassignLocalRecordsToUser(nextUserId) {
  getLocalHistoryDateKeys().forEach((dateKey) => {
    const dateState = loadStateForDate(dateKey);
    const updatedRecords = [];
    dateState.setRecords.forEach((record) => {
      const exercise = exerciseById.get(record.exerciseId);
      if (!exercise) return;
      const setNumber = clampNumber(record.setNumber, 1, exercise.sets, 1);
      updatedRecords.push({
        ...record,
        id: buildRecordIdForUser(nextUserId, dateKey, exercise.id, setNumber),
        userId: nextUserId,
        date: dateKey,
        exerciseId: exercise.id,
        exerciseName: exercise.name,
        groupId: exercise.group.id,
        groupName: exercise.group.name,
        setNumber,
      });
    });
    dateState.setRecords = updatedRecords;
    saveState(dateState);
  });
  Object.assign(state, loadStateForDate(todayKey));
}

function renderHistory() {
  if (!els.dailyHistoryView) return;
  const historyData = getAllHistory();

  if (historyData.length === 0) {
    els.dailyHistoryView.innerHTML = `
      <div class="history-empty">
        <i data-lucide="dumbbell"></i>
        <p>기록된 운동이 없습니다.</p>
        <small>세트 완료 또는 오늘 운동 완료를 누르면 기록이 남습니다.</small>
      </div>
    `;
    refreshIcons();
    return;
  }

  els.dailyHistoryView.innerHTML = historyData
    .map((day) => {
      const detailsHtml = exercises
        .map((exercise) => {
          const records = day.setRecords
            .filter((record) => record.exerciseId === exercise.id)
            .sort((a, b) => a.setNumber - b.setNumber);
          if (!records.length) return "";
          const repsChips = records
            .map((record) => `<span class="history-rep-chip">${record.setNumber}S: ${record.reps}회</span>`)
            .join("");
          return `
            <div class="history-exercise-item">
              <strong class="history-exercise-name">${escapeHtml(exercise.group.name)} · ${escapeHtml(exercise.name)}</strong>
              <div class="history-reps-list">${repsChips}</div>
            </div>
          `;
        })
        .join("");

      const stampHtml = day.completed
        ? `<span class="stamp-badge"><i data-lucide="trophy"></i> 완료</span>`
        : `<span class="history-rep-chip">${day.completedSets}/${totalSets}세트 진행</span>`;
      const [, month, date] = day.date.split("-");
      const formattedDate = `${month}월 ${date}일`;
      return `
        <article class="history-card" data-date="${day.date}">
          <div class="history-card-header">
            <span class="date">${formattedDate}</span>
            ${stampHtml}
          </div>
          <div class="history-card-body">
            <p class="history-time">총 운동 ${formatStopwatchTime(day.sessionSeconds)}</p>
            ${detailsHtml || `<p class="history-muted">완료된 세트 기록이 없습니다.</p>`}
          </div>
        </article>
      `;
    })
    .join("");
  refreshIcons();
}

function renderCalendar() {
  if (!els.calendarHistoryView) return;
  const year = state.currentCalendarYear;
  const month = state.currentCalendarMonth;
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthTotalDays = new Date(year, month, 0).getDate();
  const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const dayCells = [];

  for (let i = firstDayIndex - 1; i >= 0; i -= 1) {
    dayCells.push(`<div class="day-cell other-month">${prevMonthTotalDays - i}</div>`);
  }

  const today = new Date();
  for (let day = 1; day <= totalDays; day += 1) {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const isCompleted = isDateCompleted(dateKey);
    const isTodayCell = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    dayCells.push(`
      <div class="day-cell ${isTodayCell ? "today" : ""} ${isCompleted ? "completed" : ""}" data-date="${dateKey}">
        <span>${day}</span>
      </div>
    `);
  }

  while (dayCells.length < 42) {
    dayCells.push(`<div class="day-cell other-month">${dayCells.length}</div>`);
  }

  els.calendarHistoryView.innerHTML = `
    <div class="calendar-header">
      <button type="button" id="calPrevBtn"><i data-lucide="chevron-left"></i> 이전달</button>
      <span>${year}년 ${monthNames[month]}</span>
      <button type="button" id="calNextBtn">다음달 <i data-lucide="chevron-right"></i></button>
    </div>
    <div class="calendar-grid">
      ${weekdays.map((day) => `<div class="week-day">${day}</div>`).join("")}
      ${dayCells.join("")}
    </div>
  `;

  document.querySelector("#calPrevBtn").addEventListener("click", () => {
    state.currentCalendarMonth -= 1;
    if (state.currentCalendarMonth < 0) {
      state.currentCalendarMonth = 11;
      state.currentCalendarYear -= 1;
    }
    saveState();
    renderCalendar();
  });

  document.querySelector("#calNextBtn").addEventListener("click", () => {
    state.currentCalendarMonth += 1;
    if (state.currentCalendarMonth > 11) {
      state.currentCalendarMonth = 0;
      state.currentCalendarYear += 1;
    }
    saveState();
    renderCalendar();
  });

  document.querySelectorAll(".calendar-grid .day-cell:not(.other-month)").forEach((cell) => {
    cell.addEventListener("click", () => {
      const clickedDate = cell.dataset.date;
      switchTab("daily");
      setTimeout(() => {
        const card = document.querySelector(`.history-card[data-date="${clickedDate}"]`);
        if (!card) {
          const [, monthText, dateText] = clickedDate.split("-");
          alert(`${monthText}월 ${dateText}일에는 완료된 세트 기록이 없습니다.`);
          return;
        }
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.style.outline = "2px solid var(--coral)";
        setTimeout(() => {
          card.style.outline = "none";
        }, 2000);
      }, 100);
    });
  });

  refreshIcons();
}

function switchTab(tabName) {
  state.activeHistoryTab = tabName;
  saveState();
  const isDaily = tabName === "daily";
  els.tabDailyBtn.classList.toggle("active", isDaily);
  els.tabCalendarBtn.classList.toggle("active", !isDaily);
  els.dailyHistoryView.classList.toggle("active", isDaily);
  els.calendarHistoryView.classList.toggle("active", !isDaily);
  if (isDaily) renderHistory();
  else renderCalendar();
}

function renderSequence() {
  els.sequenceList.innerHTML = exercises
    .map((exercise, index) => {
      const isActive = index === state.exerciseIndex && state.phase !== "complete";
      const doneCount = getCompletedCountForExercise(exercise.id);
      const isDone = doneCount >= exercise.sets;
      return `
        <button class="sequence-item ${isActive ? "is-active" : ""}" style="--accent:${exercise.group.accent}" data-index="${index}" type="button">
          <span>
            <small>${exercise.group.name} · ${exercise.level}</small>
            <span>${exercise.name}</span>
          </span>
          <em>${isDone ? "완료" : `${doneCount}/${exercise.sets}`}</em>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".sequence-item").forEach((button) => {
    button.addEventListener("click", () => jumpToExercise(Number(button.dataset.index)));
  });
}

function getDefaultReps(repsText) {
  const match = String(repsText).match(/\d+/);
  return match ? Number(match[0]) : 10;
}

function getInputKey(exerciseId, setNumber) {
  return `${exerciseId}:${setNumber}`;
}

function getRepsForCurrentSet() {
  const exercise = getCurrentExercise();
  const inputKey = getInputKey(exercise.id, state.setNumber);
  if (state.inputReps[inputKey] !== undefined) return state.inputReps[inputKey];

  const existingRecord = getRecordForSet(exercise.id, state.setNumber);
  if (existingRecord) return existingRecord.reps;

  const previousRecord = getRecordForSet(exercise.id, state.setNumber - 1);
  if (previousRecord) return previousRecord.reps;

  return getDefaultReps(exercise.reps);
}

function renderExercise() {
  const exercise = getCurrentExercise();
  document.documentElement.style.setProperty("--accent", exercise.group.accent);
  els.exerciseImage.src = `${exercise.image}?v=${assetVersion}`;
  els.exerciseImage.alt = exercise.name;
  els.groupPill.textContent = `${exercise.group.name} · ${exercise.group.subtitle}`;
  els.groupPill.style.background = exercise.group.accent;
  els.levelPill.textContent = exercise.level;
  els.exerciseName.textContent = exercise.name;
  els.exerciseName.classList.toggle("long-name", exercise.name.length >= 8);
  els.targetText.textContent = exercise.target;
  els.repsText.textContent = exercise.reps;
  els.setText.textContent = `${state.setNumber} / ${exercise.sets} 세트`;
  els.restText.textContent = `${exercise.rest}초`;
  els.noteList.innerHTML = exercise.notes.map((note) => `<span>${escapeHtml(note)}</span>`).join("");
  els.repInput.value = getRepsForCurrentSet();
}

function updateTimerProgress() {
  if (!els.timerProgressCircle) return;
  const totalCircumference = 389.56;
  if (state.phase === "rest") {
    const exercise = getCurrentExercise();
    const ratio = Math.max(0, Math.min(1, state.restRemaining / (exercise.rest || 60)));
    els.timerProgressCircle.style.strokeDashoffset = `${totalCircumference * (1 - ratio)}`;
  } else {
    els.timerProgressCircle.style.strokeDashoffset = "0";
  }
}

function renderTimer() {
  const exercise = getCurrentExercise();
  const completedCount = getCompletedSetCount();
  const progress = Math.round((completedCount / totalSets) * 100);
  els.progressBar.style.width = `${progress}%`;
  els.totalProgressText.textContent = `${completedCount} / ${totalSets} 세트`;
  els.timerBoard.classList.toggle("is-rest", state.phase === "rest");
  els.timerBoard.classList.toggle("is-complete", state.phase === "complete");

  if (state.phase === "complete") {
    els.phaseLabel.textContent = "완료";
    els.timerText.textContent = "끝";
    els.nextCue.textContent = "오늘 루틴 완료";
  } else if (state.phase === "rest") {
    els.phaseLabel.textContent = "휴식";
    els.timerText.textContent = formatTime(state.restRemaining);
    els.nextCue.textContent =
      state.setNumber < exercise.sets
        ? `다음: ${exercise.name} ${state.setNumber + 1}세트`
        : `다음: ${exercises[state.exerciseIndex + 1]?.name ?? "마무리"}`;
  } else {
    els.phaseLabel.textContent = state.running ? "운동 중" : "대기";
    els.timerText.textContent = formatTime(state.workSeconds);
    els.nextCue.textContent = `${exercise.reps} · ${state.setNumber}/${exercise.sets}세트`;
  }

  const stopwatchNode = els.totalStopwatchText.querySelector(".stopwatch-time");
  if (stopwatchNode) {
    stopwatchNode.textContent = formatStopwatchTime(state.sessionSeconds);
  } else {
    els.totalStopwatchText.innerHTML = `<i data-lucide="clock"></i> <span class="stopwatch-time">${formatStopwatchTime(state.sessionSeconds)}</span>`;
  }

  const startLabel = state.running ? "일시정지" : state.phase === "rest" ? "휴식 시작" : "시작";
  els.startPauseBtn.innerHTML = `<i data-lucide="${state.running ? "pause" : "play"}"></i><span>${startLabel}</span>`;
  els.completeSetBtn.disabled = state.phase === "rest" || state.phase === "complete";
  els.skipRestBtn.disabled = state.phase !== "rest";
  els.startPauseBtn.disabled = state.phase === "complete";

  if (state.completed || state.phase === "complete") {
    els.finishWorkoutBtn.disabled = true;
    els.finishWorkoutBtn.querySelector("span").textContent = "오늘 운동 완료됨";
    els.finishWorkoutBtn.style.opacity = "0.7";
  } else {
    els.finishWorkoutBtn.disabled = false;
    els.finishWorkoutBtn.querySelector("span").textContent = "오늘 운동 완료하기";
    els.finishWorkoutBtn.style.opacity = "1";
  }
}

function decodeJwtPayload(token) {
  const payloadPart = String(token || "").split(".")[1];
  if (!payloadPart) throw new Error("Google 로그인 토큰 형식이 올바르지 않습니다.");
  const normalized = payloadPart.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function getGoogleAccountLabel() {
  if (isAuthSessionFresh()) {
    return authSession.email || authSession.name || "Google 로그인됨";
  }
  if (isGoogleUserId(userId)) {
    return settings.lastGoogleEmail || settings.lastGoogleName
      ? `${settings.lastGoogleEmail || settings.lastGoogleName} · 다시 로그인 필요`
      : "Google 다시 로그인 필요";
  }
  return getGoogleClientId() ? "로그인 전" : "Client ID 필요";
}

function activateGoogleUser(profile) {
  const nextUserId = `google:${profile.sub}`;
  const changedUser = userId !== nextUserId;
  userId = nextUserId;
  settings.activeUserId = nextUserId;
  settings.lastGoogleEmail = profile.email || "";
  settings.lastGoogleName = profile.name || "";
  settings.lastSyncError = "";
  saveSettings();

  if (changedUser) {
    reassignLocalRecordsToUser(nextUserId);
    syncQueue = [];
    saveSyncQueue();
  }

  enqueueAllLocalHistory();
}

function handleGoogleCredential(response) {
  try {
    const credential = response && response.credential;
    if (!credential) throw new Error("Google 로그인 토큰을 받지 못했습니다.");
    const profile = decodeJwtPayload(credential);
    const clientId = getGoogleClientId();
    if (clientId && profile.aud !== clientId) {
      throw new Error("OAuth Client ID와 로그인 토큰 대상이 다릅니다.");
    }

    authSession = {
      idToken: credential,
      clientId: profile.aud || clientId,
      userId: `google:${profile.sub}`,
      sub: profile.sub,
      email: profile.email || "",
      name: profile.name || "",
      picture: profile.picture || "",
      expiresAt: Number(profile.exp || 0) * 1000,
      signedInAt: new Date().toISOString(),
    };
    saveAuthSession();
    activateGoogleUser(profile);
    render();
    flushSyncQueue();
  } catch (error) {
    settings.lastSyncError = error.message || "Google 로그인 실패";
    saveSettings();
    renderSyncPanel();
    alert(`Google 로그인에 실패했습니다. ${settings.lastSyncError}`);
  }
}

function renderGoogleSignInButton() {
  if (!els.googleSignInButton) return;
  const clientId = getGoogleClientId();
  const showSignIn = Boolean(clientId && !isAuthSessionFresh());
  els.googleSignInButton.style.display = showSignIn ? "" : "none";
  els.googleSignOutBtn.hidden = !isGoogleUserId(userId);

  if (!clientId) {
    renderedGoogleClientId = "";
    els.googleSignInButton.innerHTML = "";
    return;
  }

  if (!showSignIn) return;

  if (!window.google || !window.google.accounts || !window.google.accounts.id) {
    els.googleSignInButton.textContent = "로그인 모듈 로딩 중";
    return;
  }

  if (renderedGoogleClientId === clientId && els.googleSignInButton.childElementCount > 0) return;
  renderedGoogleClientId = clientId;
  els.googleSignInButton.innerHTML = "";
  window.google.accounts.id.initialize({
    client_id: clientId,
    callback: handleGoogleCredential,
    auto_select: false,
  });
  window.google.accounts.id.renderButton(els.googleSignInButton, {
    theme: "outline",
    size: "medium",
    text: "signin_with",
    shape: "rectangular",
    width: 220,
  });
}

function signOutGoogle() {
  authSession = null;
  saveAuthSession();
  if (window.google && window.google.accounts && window.google.accounts.id) {
    window.google.accounts.id.disableAutoSelect();
  }
  settings.lastSyncError = isGoogleUserId(userId) ? "Google 다시 로그인 필요" : "";
  saveSettings();
  render();
}

function renderSyncPanel() {
  if (!els.syncStatusText) return;
  const hasUrl = Boolean(settings.appsScriptUrl.trim());
  const pending = syncQueue.length;
  const lastSync = settings.lastSyncAt ? ` · 마지막 ${formatShortDateTime(settings.lastSyncAt)}` : "";
  const error = settings.lastSyncError ? ` · 오류: ${settings.lastSyncError}` : "";
  const authNotice = requiresGoogleAuthForSync() && !isAuthSessionFresh() ? " · Google 로그인 필요" : "";
  els.syncStatusText.textContent = hasUrl
    ? pending
      ? `동기화 대기 ${pending}건${authNotice}${error}`
      : `동기화 준비됨${lastSync}${authNotice}${error}`
    : "Apps Script URL을 입력하면 Google Sheets 동기화가 켜집니다.";
  els.syncStatusText.classList.toggle("is-error", Boolean(settings.lastSyncError));
  els.syncQueueText.textContent = pending ? `${pending}건 대기` : "대기 없음";
  els.googleAccountText.textContent = getGoogleAccountLabel();

  if (document.activeElement !== els.appsScriptUrlInput) {
    els.appsScriptUrlInput.value = settings.appsScriptUrl;
  }
  if (document.activeElement !== els.googleClientIdInput) {
    els.googleClientIdInput.value = settings.googleClientId;
  }
  renderGoogleSignInButton();
}

function render() {
  renderExercise();
  renderSequence();
  renderTimer();
  updateTimerProgress();
  renderWeek();
  renderSyncPanel();
  if (state.activeHistoryTab === "calendar") {
    switchTab("calendar");
  } else {
    switchTab("daily");
  }
  saveState();
  refreshIcons();
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function toggleStartPause() {
  if (state.phase === "complete") return;
  if (state.phase === "ready") state.phase = "work";
  state.running = !state.running;
  render();
}

function adjustReps(amount) {
  const current = clampNumber(els.repInput.value, 0, 999, 0);
  setCurrentInputReps(current + amount);
}

function setCurrentInputReps(value) {
  const exercise = getCurrentExercise();
  const reps = clampNumber(value, 0, 999, 0);
  els.repInput.value = reps;
  state.inputReps[getInputKey(exercise.id, state.setNumber)] = reps;
  saveState();
}

function buildRecordIdForUser(ownerId, dateKey, exerciseId, setNumber) {
  return `${ownerId}:${dateKey}:${exerciseId}:${setNumber}`;
}

function buildRecordId(dateKey, exerciseId, setNumber) {
  return buildRecordIdForUser(userId, dateKey, exerciseId, setNumber);
}

function createSetRecord({ dateKey, exercise, setNumber, reps, completedAt }) {
  return {
    id: buildRecordId(dateKey, exercise.id, setNumber),
    userId,
    date: dateKey,
    exerciseId: exercise.id,
    exerciseName: exercise.name,
    groupId: exercise.group.id,
    groupName: exercise.group.name,
    setNumber,
    reps,
    completedAt,
  };
}

function upsertRecord(dateState, record) {
  const normalized = sanitizeRecord(record, dateState.date);
  if (!normalized) return;
  const existingIndex = dateState.setRecords.findIndex(
    (item) => item.exerciseId === normalized.exerciseId && item.setNumber === normalized.setNumber
  );
  if (existingIndex >= 0) {
    dateState.setRecords[existingIndex] = normalized;
  } else {
    dateState.setRecords.push(normalized);
  }
  dateState.setRecords.sort(compareRecords);
}

function completeSet() {
  if (state.phase === "rest" || state.phase === "complete") return;
  const exercise = getCurrentExercise();
  const reps = clampNumber(els.repInput.value, 0, 999, getDefaultReps(exercise.reps));
  const record = createSetRecord({
    dateKey: state.date,
    exercise,
    setNumber: state.setNumber,
    reps,
    completedAt: new Date().toISOString(),
  });

  upsertRecord(state, record);
  state.inputReps[getInputKey(exercise.id, state.setNumber)] = reps;
  state.workSeconds = 0;
  state.running = false;

  const completedCount = getCompletedSetCount();
  if (completedCount >= totalSets) {
    state.phase = "complete";
    state.completed = true;
  } else {
    state.phase = "rest";
    state.restRemaining = exercise.rest;
    state.running = true;
  }

  queueSync("upsertSetLog", record);
  queueDailySummary();
  saveState();
  render();
  flushSyncQueue();
}

function advanceAfterRest() {
  const exercise = getCurrentExercise();
  const nextSetInExercise = findNextIncompleteSetNumber(exercise, state.setNumber);
  if (nextSetInExercise) {
    state.setNumber = nextSetInExercise;
  } else {
    const nextPosition = getNextIncompletePosition((state.exerciseIndex + 1) % exercises.length);
    state.exerciseIndex = nextPosition.exerciseIndex;
    state.setNumber = nextPosition.setNumber;
  }
  state.phase = "ready";
  state.running = false;
  state.workSeconds = 0;
  state.restRemaining = 0;
  render();
}

function jumpToExercise(index) {
  state.exerciseIndex = clampNumber(index, 0, exercises.length - 1, 0);
  state.setNumber = getFirstIncompleteSetNumber(getCurrentExercise());
  state.phase = "ready";
  state.running = false;
  state.workSeconds = 0;
  state.restRemaining = 0;
  render();
}

function resetWorkout() {
  if (!confirm("오늘 화면을 초기화할까요? 이미 Google Sheets에 동기화된 기록은 자동 삭제되지 않습니다.")) return;
  Object.assign(state, defaultState(todayKey));
  saveState();
  render();
}

function completeWorkout() {
  if (!confirm("오늘 운동을 완료하고 기록하시겠습니까?")) return;
  state.phase = "complete";
  state.completed = true;
  state.running = false;
  state.restRemaining = 0;
  queueDailySummary();
  saveState();
  render();
  flushSyncQueue();
}

function clearAllHistory() {
  if (!confirm("정말로 이 브라우저의 모든 운동 기록을 삭제하시겠습니까? Google Sheets 기록은 삭제되지 않습니다.")) return;
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key && key.startsWith(storagePrefix) && /^\d{4}-\d{2}-\d{2}$/.test(key.replace(storagePrefix, ""))) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach((key) => localStorage.removeItem(key));
  Object.assign(state, defaultState(todayKey));
  render();
}

function buildDailySummary(dateState = state) {
  return {
    key: `${userId}:${dateState.date}`,
    userId,
    date: dateState.date,
    completed: Boolean(dateState.completed),
    totalSets,
    completedSets: getCompletedSetCount(dateState),
    sessionSeconds: dateState.sessionSeconds || 0,
    updatedAt: new Date().toISOString(),
    stateJson: JSON.stringify({
      version: 2,
      date: dateState.date,
      completed: Boolean(dateState.completed),
      sessionSeconds: dateState.sessionSeconds || 0,
      setRecords: dateState.setRecords || [],
    }),
  };
}

function queueDailySummary(dateState = state) {
  queueSync("upsertDailySummary", buildDailySummary(dateState));
}

function queueSync(action, payload) {
  const id = `${action}:${payload.id || payload.key}`;
  const existingIndex = syncQueue.findIndex((item) => item.id === id);
  const item = {
    id,
    action,
    payload,
    createdAt: new Date().toISOString(),
    attempts: existingIndex >= 0 ? syncQueue[existingIndex].attempts : 0,
    lastError: "",
  };
  if (existingIndex >= 0) {
    syncQueue[existingIndex] = item;
  } else {
    syncQueue.push(item);
  }
  saveSyncQueue();
  renderSyncPanel();
}

function enqueueAllLocalHistory() {
  getAllHistory().forEach((historyItem) => {
    const dateState = loadStateForDate(historyItem.date);
    dateState.setRecords.forEach((record) => queueSync("upsertSetLog", record));
    queueDailySummary(dateState);
  });
}

function requestJsonp(url, prefix = "workoutCoachJsonp") {
  return new Promise((resolve, reject) => {
    const callbackName = `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const script = document.createElement("script");
    let timeoutId = null;

    function cleanup() {
      delete window[callbackName];
      script.remove();
      if (timeoutId) window.clearTimeout(timeoutId);
    }

    window[callbackName] = (data) => {
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error("Apps Script 응답을 받지 못했습니다."));
    };
    timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error("Apps Script 응답 시간이 초과되었습니다."));
    }, 15000);

    url.searchParams.set("callback", callbackName);
    script.src = url.toString();
    document.body.appendChild(script);
  });
}

async function verifyRemoteAuth(authPayload) {
  const url = new URL(settings.appsScriptUrl.trim());
  url.searchParams.set("action", "verify");
  url.searchParams.set("idToken", authPayload.idToken);
  url.searchParams.set("googleClientId", authPayload.googleClientId || "");
  const data = await requestJsonp(url, "workoutCoachVerify");
  if (!data || data.ok === false) {
    throw new Error(data?.error || "Google 로그인 검증 실패");
  }
  return data;
}

async function flushSyncQueue() {
  if (syncInProgress) return;
  if (!settings.appsScriptUrl.trim()) {
    renderSyncPanel();
    return;
  }
  if (!syncQueue.length) {
    settings.lastSyncError = "";
    saveSettings();
    renderSyncPanel();
    return;
  }
  const authPayload = requiresGoogleAuthForSync() ? getGoogleAuthPayload() : null;
  if (requiresGoogleAuthForSync() && !authPayload) {
    settings.lastSyncError = getGoogleClientId() ? "Google 로그인 필요" : "Google OAuth Client ID 필요";
    saveSettings();
    renderSyncPanel();
    return;
  }
  if (authPayload) {
    try {
      await verifyRemoteAuth(authPayload);
    } catch (error) {
      settings.lastSyncError = error.message || "Google 로그인 검증 실패";
      saveSettings();
      renderSyncPanel();
      return;
    }
  }

  syncInProgress = true;
  try {
    const remaining = [];
    for (const item of syncQueue) {
      try {
        await postAppsScript({
          action: item.action,
          userId,
          payload: item.payload,
          appVersion,
          ...authPayload,
        });
      } catch (error) {
        remaining.push({
          ...item,
          attempts: item.attempts + 1,
          lastError: error.message || "sync failed",
        });
      }
    }
    syncQueue = remaining;
    settings.lastSyncAt = new Date().toISOString();
    settings.lastSyncError = remaining.length ? remaining[0].lastError : "";
  } finally {
    syncInProgress = false;
    saveSyncQueue();
    saveSettings();
    renderSyncPanel();
  }
}

async function postAppsScript(message) {
  const response = await fetch(settings.appsScriptUrl.trim(), {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...message,
      sentAt: new Date().toISOString(),
    }),
  });
  return response;
}

function saveSyncSettingsFromUi() {
  const nextGoogleClientId = els.googleClientIdInput.value.trim();
  const googleClientChanged = settings.googleClientId !== nextGoogleClientId;
  settings.appsScriptUrl = els.appsScriptUrlInput.value.trim();
  settings.googleClientId = nextGoogleClientId;
  if (googleClientChanged) {
    authSession = null;
    renderedGoogleClientId = "";
    saveAuthSession();
  }
  settings.lastSyncError = "";
  saveSettings();
  renderSyncPanel();
  flushSyncQueue();
}

function syncNow() {
  enqueueAllLocalHistory();
  flushSyncQueue();
}

function pullRemoteRecords() {
  if (remoteImportInProgress) return;
  if (!settings.appsScriptUrl.trim()) {
    alert("먼저 Apps Script 웹앱 URL을 저장해주세요.");
    return;
  }
  const authPayload = requiresGoogleAuthForSync() ? getGoogleAuthPayload() : null;
  if (requiresGoogleAuthForSync() && !authPayload) {
    settings.lastSyncError = getGoogleClientId() ? "Google 로그인 필요" : "Google OAuth Client ID 필요";
    saveSettings();
    renderSyncPanel();
    alert(settings.lastSyncError);
    return;
  }

  remoteImportInProgress = true;
  const callbackName = `workoutCoachJsonp_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const script = document.createElement("script");
  let url;
  try {
    url = new URL(settings.appsScriptUrl.trim());
  } catch {
    remoteImportInProgress = false;
    settings.lastSyncError = "Apps Script URL 형식 오류";
    saveSettings();
    renderSyncPanel();
    alert("Apps Script 웹앱 URL 형식을 확인해주세요.");
    return;
  }
  url.searchParams.set("action", "list");
  if (authPayload) {
    url.searchParams.set("idToken", authPayload.idToken);
    url.searchParams.set("googleClientId", authPayload.googleClientId);
  } else {
    url.searchParams.set("userId", userId);
  }
  url.searchParams.set("callback", callbackName);

  window[callbackName] = (data) => {
    try {
      if (!data || data.ok === false) {
        throw new Error(data?.error || "원격 기록을 불러오지 못했습니다.");
      }
      mergeRemoteData(data);
      settings.lastSyncError = "";
      settings.lastSyncAt = new Date().toISOString();
      saveSettings();
      Object.assign(state, loadStateForDate(todayKey));
      render();
      alert("Google Sheets 기록을 불러왔습니다.");
    } catch (error) {
      settings.lastSyncError = error.message;
      saveSettings();
      renderSyncPanel();
      alert(error.message);
    } finally {
      delete window[callbackName];
      script.remove();
      remoteImportInProgress = false;
    }
  };

  script.onerror = () => {
    delete window[callbackName];
    script.remove();
    remoteImportInProgress = false;
    settings.lastSyncError = "원격 기록 불러오기 실패";
    saveSettings();
    renderSyncPanel();
    alert("원격 기록을 불러오지 못했습니다. Apps Script 배포 URL을 확인해주세요.");
  };

  script.src = url.toString();
  document.body.appendChild(script);
}

function mergeRemoteData(data) {
  const summariesByDate = new Map();
  (data.dailySummaries || []).forEach((summary) => {
    if (summary.date) summariesByDate.set(summary.date, summary);
  });

  (data.setLogs || []).forEach((remoteRecord) => {
    const dateKey = remoteRecord.date;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey || "")) return;
    const dateState = loadStateForDate(dateKey);
    const record = sanitizeRecord(remoteRecord, dateKey);
    if (!record) return;
    upsertRecord(dateState, record);
    saveState(dateState);
  });

  summariesByDate.forEach((summary, dateKey) => {
    const dateState = loadStateForDate(dateKey);
    if (summary.completed === true || summary.completed === "TRUE" || summary.completed === "true") {
      dateState.completed = true;
      dateState.phase = "complete";
    }
    const sessionSeconds = Number(summary.sessionSeconds);
    if (Number.isFinite(sessionSeconds)) {
      dateState.sessionSeconds = Math.max(dateState.sessionSeconds || 0, sessionSeconds);
    }
    saveState(dateState);
  });
}

function exportHistoryCsv() {
  const historyData = getAllHistory();
  if (historyData.length === 0) {
    alert("내보낼 운동 기록이 없습니다.");
    return;
  }

  const rows = [["날짜", "완수여부", "운동그룹", "운동ID", "운동이름", "세트번호", "수행횟수", "완료시각"]];
  historyData.forEach((day) => {
    day.setRecords.forEach((record) => {
      rows.push([
        day.date,
        day.completed ? "완료" : "미완료",
        record.groupName,
        record.exerciseId,
        record.exerciseName,
        `${record.setNumber}세트`,
        `${record.reps}회`,
        record.completedAt,
      ]);
    });
  });

  const csvContent = `\ufeff${rows.map((row) => row.map(csvCell).join(",")).join("\n")}`;
  downloadBlob(csvContent, "text/csv;charset=utf-8;", `workout_history_${getLocalDateKey(new Date())}.csv`);
}

function exportHistoryJson() {
  const backupData = {
    version: 2,
    exportedAt: new Date().toISOString(),
    userId,
    settings: {
      appsScriptUrl: settings.appsScriptUrl,
      autoSync: settings.autoSync,
    },
    entries: {},
  };
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key && key.startsWith(storagePrefix) && /^\d{4}-\d{2}-\d{2}$/.test(key.replace(storagePrefix, ""))) {
      backupData.entries[key] = localStorage.getItem(key);
    }
  }
  downloadBlob(
    JSON.stringify(backupData, null, 2),
    "application/json",
    `workout_coach_backup_${getLocalDateKey(new Date())}.json`
  );
}

function importHistoryJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (loadEvent) => {
    try {
      const data = JSON.parse(loadEvent.target.result);
      const entries = data.entries || data;
      if (!entries || typeof entries !== "object") throw new Error("백업 데이터 형식이 올바르지 않습니다.");
      if (!confirm("백업 파일 데이터를 가져오시겠습니까? 기존 로컬 기록과 병합됩니다.")) return;
      Object.entries(entries).forEach(([key, value]) => {
        if (!key.startsWith(storagePrefix)) return;
        const dateKey = key.replace(storagePrefix, "");
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) return;
        const imported = normalizeState(safeJsonParse(value, null), dateKey);
        localStorage.setItem(getStorageKey(dateKey), JSON.stringify(imported));
      });
      Object.assign(state, loadStateForDate(todayKey));
      render();
      alert("백업 파일 복구가 완료되었습니다.");
    } catch (error) {
      alert(`백업 파일 파싱에 실패했습니다. ${error.message}`);
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function csvCell(value) {
  const text = String(value ?? "");
  const safeText = /^[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safeText.replace(/"/g, '""')}"`;
}

function downloadBlob(content, type, filename) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function tick() {
  if (!state.running) return;
  if (state.phase === "rest") {
    state.restRemaining -= 1;
    if (state.restRemaining <= 0) {
      advanceAfterRest();
      return;
    }
  } else if (state.phase === "work") {
    state.workSeconds += 1;
  }
  state.sessionSeconds += 1;
  renderTimer();
  updateTimerProgress();
  saveState();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatShortDateTime(isoText) {
  const date = new Date(isoText);
  if (Number.isNaN(date.getTime())) return "";
  return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

els.startPauseBtn.addEventListener("click", toggleStartPause);
els.completeSetBtn.addEventListener("click", completeSet);
els.skipRestBtn.addEventListener("click", advanceAfterRest);
els.resetBtn.addEventListener("click", resetWorkout);
els.repDecBtn.addEventListener("click", () => adjustReps(-1));
els.repIncBtn.addEventListener("click", () => adjustReps(1));
els.repInput.addEventListener("input", () => setCurrentInputReps(els.repInput.value));
els.finishWorkoutBtn.addEventListener("click", completeWorkout);
els.clearHistoryBtn.addEventListener("click", clearAllHistory);
els.tabDailyBtn.addEventListener("click", () => switchTab("daily"));
els.tabCalendarBtn.addEventListener("click", () => switchTab("calendar"));
els.exportCsvBtn.addEventListener("click", exportHistoryCsv);
els.exportJsonBtn.addEventListener("click", exportHistoryJson);
els.importJsonBtn.addEventListener("click", () => els.importJsonFile.click());
els.importJsonFile.addEventListener("change", importHistoryJson);
els.saveSyncSettingsBtn.addEventListener("click", saveSyncSettingsFromUi);
els.syncNowBtn.addEventListener("click", syncNow);
els.pullRemoteBtn.addEventListener("click", pullRemoteRecords);
els.googleSignOutBtn.addEventListener("click", signOutGoogle);

window.addEventListener("online", flushSyncQueue);
window.addEventListener("google-identity-loaded", () => {
  renderedGoogleClientId = "";
  renderSyncPanel();
});
render();
tickId = window.setInterval(tick, 1000);
flushSyncQueue();
