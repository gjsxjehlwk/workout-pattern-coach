# 운동 패턴 코치 서비스 및 배포 안내

## 구현된 서비스

이 웹앱은 사진 속 운동 루틴을 가슴, 등, 어깨, 복근, 하체 순서로 따라가도록 만든 정적 웹앱입니다. GitHub Pages에 그대로 올릴 수 있고, Google Apps Script를 연결하면 Google Sheets에 매일의 운동 기록이 저장됩니다.

현재 구현된 기능은 다음과 같습니다.

- 월, 수, 금 운동 일정 표시
- 운동 순서: 푸시업, 등, 어깨, 복근, 하체
- 각 운동별 이미지, 목표 부위, 반복 횟수, 세트, 휴식 시간 표시
- 세트별 실제 수행 횟수 입력
- 세트 완료, 휴식 타이머, 오늘 운동 완료 기록
- 일별 기록, 달력 기록, CSV/JSON 백업
- Google Sheets 동기화 상태 표시
- Google 로그인 기반 계정 연동
- Apps Script URL 저장 후 자동 동기화 및 수동 동기화
- Google Sheets 원격 기록 불러오기

이번 버전의 핵심 변경 사항은 다음과 같습니다.

- `벤트오버 물병 로우`를 `벤트오버 로우`로 변경
- `물병 레터럴 레이즈`를 `사이드 레터럴 레이즈`로 변경
- `assets/bent-row.png`, `assets/lateral-raise.png`를 영상 프레임 기반 중앙 크롭 이미지로 교체
- 운동 이름이 바뀌어도 기록이 깨지지 않도록 고정 `exerciseId` 추가
- `completedSets` 중심 기록을 `setRecords` 기반 기록으로 변경
- 중간 운동을 눌러 이동해도 앞 운동이 완료 처리되지 않도록 수정
- Google Identity Services 로그인 추가
- Google ID 토큰을 Apps Script에서 검증하고 `google:sub`를 사용자 ID로 사용
- Apps Script 전송 실패 시 `syncQueue`에 남기고 재시도
- Google 로그인 토큰이 없거나 만료되면 큐를 비우지 않고 대기
- CSV 내보내기 값 이스케이프 처리
- JSON 백업 복원 시 데이터 검증
- `lucide@latest` 대신 버전 고정 CDN 사용

## 기록 구조

브라우저에는 즉시 `localStorage`로 저장됩니다. Apps Script URL을 연결하면 세트 완료나 오늘 운동 완료 시 Google Sheets 전송 대기열이 만들어지고, 네트워크와 로그인 상태가 준비되면 순서대로 전송됩니다.

Google 로그인을 하지 않은 상태에서는 브라우저별 임시 `userId`가 사용됩니다. Google 로그인을 하면 Google ID 토큰의 고유 계정값인 `sub`를 기반으로 `google:...` 형태의 `userId`가 사용됩니다. 따라서 Chrome, Edge, 휴대폰 브라우저가 달라도 같은 Google 계정으로 로그인하면 같은 Google Sheets 기록을 불러오고 이어 쓸 수 있습니다.

세트 기록은 다음 구조입니다.

```json
{
  "id": "google-user:2026-06-30:bent-over-row:1",
  "userId": "google-user",
  "date": "2026-06-30",
  "exerciseId": "bent-over-row",
  "exerciseName": "벤트오버 로우",
  "groupId": "back",
  "groupName": "등",
  "setNumber": 1,
  "reps": 15,
  "completedAt": "2026-06-30T00:00:00.000Z"
}
```

## Google Sheets 구조

Apps Script는 스프레드시트에 아래 두 시트를 자동으로 만듭니다.

### SetLogs

| 컬럼 | 설명 |
| --- | --- |
| id | 중복 저장 방지용 고유 기록 ID |
| userId | 브라우저 임시 ID 또는 Google 로그인 ID |
| date | 운동 날짜 |
| exerciseId | 고정 운동 ID |
| exerciseName | 운동 이름 |
| groupId | 운동 그룹 ID |
| groupName | 운동 그룹 이름 |
| setNumber | 세트 번호 |
| reps | 수행 횟수 |
| completedAt | 세트 완료 시각 |
| syncedAt | 시트에 저장된 시각 |

### DailySummary

| 컬럼 | 설명 |
| --- | --- |
| key | `userId:date` 형식의 고유 키 |
| userId | 브라우저 임시 ID 또는 Google 로그인 ID |
| date | 날짜 |
| completed | 오늘 운동 완료 여부 |
| totalSets | 전체 세트 수 |
| completedSets | 완료 세트 수 |
| sessionSeconds | 총 운동 시간 |
| updatedAt | 요약 갱신 시각 |
| stateJson | 날짜별 상태 백업 |
| syncedAt | 시트에 저장된 시각 |

## GitHub Pages 등록 방법

1. GitHub에서 새 저장소를 만듭니다.
2. `workout-pattern-coach` 폴더 안의 파일을 저장소에 올립니다.
3. 저장소의 `Settings`로 이동합니다.
4. 왼쪽 메뉴에서 `Pages`를 선택합니다.
5. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
6. Branch를 `main`, 폴더를 `/root`로 선택하고 저장합니다.
7. 배포가 끝나면 `https://계정명.github.io/저장소명/` 주소로 접속합니다.

이 앱은 정적 파일만 사용하므로 별도 서버가 필요 없습니다. `index.html`, `styles.css`, `script.js`, `assets/`, `apps-script/Code.gs`, `SERVICE_AND_DEPLOYMENT.md`가 함께 올라가면 됩니다.

## Google 로그인 등록 방법

Google 로그인을 쓰려면 Google Cloud에서 OAuth Web Client ID를 만들어야 합니다.

1. [Google Cloud Console](https://console.cloud.google.com/)에 접속합니다.
2. 새 프로젝트를 만들거나 기존 프로젝트를 선택합니다.
3. `APIs & Services` > `OAuth consent screen`에서 앱 이름과 이메일을 입력합니다.
4. 테스트 중이면 게시 상태를 `Testing`으로 두고 테스트 사용자에 본인 Google 계정을 추가합니다.
5. `APIs & Services` > `Credentials`로 이동합니다.
6. `Create Credentials` > `OAuth client ID`를 선택합니다.
7. Application type은 `Web application`으로 선택합니다.
8. `Authorized JavaScript origins`에 GitHub Pages 주소를 추가합니다.

예시:

```text
https://계정명.github.io
```

저장소별 Pages 주소가 `https://계정명.github.io/저장소명/`이어도 origin은 도메인까지만 등록합니다.

로컬 테스트가 필요하면 파일을 직접 여는 `file://` 방식이 아니라 간단한 로컬 서버를 쓰고 아래 origin을 추가합니다.

```text
http://localhost:8080
```

생성된 OAuth Client ID는 아래 두 곳에 넣습니다.

- 운동 앱의 `Google OAuth Client ID` 입력칸
- `apps-script/Code.gs` 상단의 `GOOGLE_CLIENT_ID`

Google 로그인은 [Google Identity Services](https://developers.google.com/identity/gsi/web)를 사용합니다.

## Apps Script 등록 방법

1. Google Drive에서 새 Google Sheets 파일을 만듭니다.
2. 메뉴에서 `확장 프로그램` > `Apps Script`를 엽니다.
3. 기본 `Code.gs` 내용을 삭제합니다.
4. 이 프로젝트의 `apps-script/Code.gs` 내용을 붙여 넣습니다.
5. `Code.gs` 상단의 `GOOGLE_CLIENT_ID`에 Google OAuth Web Client ID를 입력합니다.
6. 스프레드시트에 묶인 Apps Script라면 `SPREADSHEET_ID`는 비워 둡니다.
7. 독립형 Apps Script 프로젝트를 쓰는 경우에는 `SPREADSHEET_ID`에 스프레드시트 ID를 입력합니다.
8. 저장합니다.
9. `배포` > `새 배포`를 누릅니다.
10. 유형 선택에서 `웹 앱`을 고릅니다.
11. 실행 사용자는 `나`로 둡니다.
12. 액세스 권한은 테스트 목적이면 `모든 사용자` 또는 `링크가 있는 모든 사용자`로 설정합니다.
13. 배포 후 나오는 `/exec`로 끝나는 웹앱 URL을 복사합니다.
14. 운동 앱의 기록 영역에서 `Apps Script 웹앱 URL`에 붙여 넣습니다.
15. 운동 앱의 `Google OAuth Client ID`에도 같은 OAuth Client ID를 붙여 넣습니다.
16. `저장`을 누르고 Google 계정으로 로그인합니다.
17. `동기화`를 눌러 기존 로컬 기록을 전송합니다.

Apps Script 웹앱은 [Apps Script Web Apps](https://developers.google.com/apps-script/guides/web) 구조를 사용합니다.

## 동기화 동작 방식

- 세트 완료 시 `SetLogs`로 전송할 항목이 큐에 들어갑니다.
- 오늘 운동 완료 시 `DailySummary`로 요약이 큐에 들어갑니다.
- 앱은 먼저 브라우저에 저장하고, 이후 Apps Script로 전송합니다.
- 전송 실패 시 큐에 남겨 다음 실행이나 수동 동기화 때 재시도합니다.
- Google 로그인 모드에서는 동기화 전에 Apps Script `verify` 요청으로 토큰 검증을 먼저 확인합니다.
- Google 토큰이 없거나 만료되면 큐를 비우지 않고 `Google 로그인 필요` 상태로 남깁니다.
- Apps Script는 같은 `id`나 `key`가 이미 있으면 새 행을 추가하지 않고 기존 행을 갱신합니다.
- Google 로그인 모드에서는 Apps Script가 클라이언트의 `userId`를 그대로 믿지 않고 검증된 `google:sub` 기준으로 ID를 다시 만듭니다.
- `불러오기`는 Apps Script의 JSONP 응답으로 Google Sheets 기록을 다시 브라우저에 병합합니다.

## 주의할 점

- GitHub Pages는 저장 서버가 아닙니다. 실제 장기 기록은 Google Sheets 쪽에 보관합니다.
- Google 로그인은 `file://`에서 안정적으로 테스트하기 어렵습니다. GitHub Pages 또는 `localhost` 서버에서 테스트하세요.
- Google ID 토큰은 만료됩니다. 시간이 지나면 다시 로그인해야 동기화됩니다.
- 타이머 매초마다 서버에 전송하지 않습니다. Apps Script 할당량을 아끼기 위해 세트 완료와 운동 완료 이벤트만 전송합니다.
- 개인정보나 민감정보는 기록하지 않는 것을 권장합니다.
- 한 브라우저에서 여러 Google 계정을 번갈아 쓰는 용도는 최소화하는 것이 좋습니다.

## 문제 해결

- Google 로그인 버튼이 안 보일 때: OAuth Client ID를 입력하고 `저장`을 눌렀는지 확인합니다.
- 로그인 후 `origin` 오류가 날 때: Google Cloud의 `Authorized JavaScript origins`에 GitHub Pages 도메인을 추가했는지 확인합니다.
- 동기화가 안 될 때: Apps Script URL이 `/exec`로 끝나는지 확인합니다.
- `Google 로그인 필요`가 계속 뜰 때: Google 버튼으로 다시 로그인한 뒤 `동기화`를 누릅니다.
- 시트가 비어 있을 때: 앱에서 `동기화` 버튼을 한 번 누릅니다.
- 불러오기가 실패할 때: Apps Script 배포 권한이 외부 접근을 허용하는지 확인합니다.
- URL을 바꾼 뒤에도 실패할 때: Apps Script를 수정했다면 `새 배포` 또는 기존 배포의 새 버전을 만들어야 합니다.
- OAuth Client ID를 바꾼 뒤 실패할 때: 앱 입력칸과 `Code.gs`의 `GOOGLE_CLIENT_ID`가 같은 값인지 확인합니다.
