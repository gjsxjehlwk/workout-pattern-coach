# 운동 패턴 코치 서비스 및 배포 안내

## 구현된 서비스

이 웹앱은 초보자가 집에서 가슴, 등, 어깨, 복근, 하체 순서로 전신 운동을 따라가도록 만든 정적 웹앱입니다. GitHub Pages에 그대로 올릴 수 있고, Google Apps Script를 연결하면 Google Sheets에 매일의 운동 기록이 저장됩니다.

현재 구현된 기능은 다음과 같습니다.

- 월, 수, 금 운동 일정 표시
- 운동 순서: 가슴, 등, 어깨, 복근, 하체
- 홈트 장비 반영 9종 루틴: 일반 푸쉬업, 디클라인 푸쉬업, 밴드 랫 풀다운, 벤트오버 로우, 사이드 레터럴 레이즈, AB슬라이드 기본형, 사이드 플랭크 리치스루, 밴드 스쿼트, 밴드 글루트 브릿지
- 각 운동별 이미지, 목표 부위, 반복 횟수, 목표 세트, 휴식 시간 표시
- 운동 이미지를 클릭하면 운동 소개, 방법, 주의점, 초보자 조절법 표시
- 세트별 실제 수행 횟수 입력
- 전체 운동 시간 시작/일시정지, 세트 완료, 휴식 타이머, 성공한 세트 기준 오늘 운동 완료 기록
- 일별 기록, 달력 기록, CSV/JSON 백업
- Google Sheets 동기화 상태 표시
- Google 로그인 기반 계정 연동
- Apps Script URL 저장 후 자동 동기화 및 수동 동기화
- Google Sheets 원격 기록 불러오기
- `시작` 버튼은 세트별 운동 시간을 재는 버튼이 아니라 오늘 전체 운동 시간을 재는 버튼입니다.

이번 버전의 핵심 변경 사항은 다음과 같습니다.

- 사용자의 현재 수행 가능 수준과 고리형 밴드를 반영해 하루 루틴을 9개 운동으로 개편
- 모든 운동은 3세트를 목표로 하되, 1-2세트만 성공해도 오늘 운동 완료 가능
- 가슴 운동을 `일반 푸쉬업`, `디클라인 푸쉬업` 2종으로 변경
- 고리형 밴드를 활용하도록 `밴드 랫 풀다운`, `밴드 스쿼트`, `밴드 글루트 브릿지` 추가
- 복근을 `AB슬라이드 기본형`, `사이드 플랭크 리치스루` 2종으로 변경
- `assets/ab-wheel-rollout.png`, `assets/band-glute-bridge.png`를 Wikimedia Commons 공개 라이선스 이미지 기반으로 교체
- `assets/band-lat-pulldown.svg`, `assets/band-squat.svg`, `assets/side-plank-reach.svg` 직접 제작 이미지 추가
- 운동 이미지를 클릭하면 소개 모달이 열리도록 개선
- 루틴에서 빠진 예전 운동도 보관 정의로 유지해 과거 기록이 사라지지 않도록 개선
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

## 초보자 루틴 구성

현재 앱의 기본 운동 순서는 아래와 같습니다.

| 순서 | 운동 | 목표 반복 | 목표 세트 | 장비 |
| --- | --- | --- | --- | --- |
| 1 | 일반 푸쉬업 | 8-15회 | 3세트 | 맨몸, 푸시업바 선택 |
| 2 | 디클라인 푸쉬업 | 6-12회 | 3세트 | 튼튼한 의자, 벤치 |
| 3 | 밴드 랫 풀다운 | 10-15회 | 3세트 | 고리형 밴드, 상단 고정점 |
| 4 | 벤트오버 로우 | 10-15회 | 3세트 | 물병, 백팩, 덤벨 |
| 5 | 사이드 레터럴 레이즈 | 12-20회 | 3세트 | 작은 물병, 가벼운 덤벨 |
| 6 | AB슬라이드 기본형 | 5-10회 | 3세트 | AB슬라이드, 무릎 매트 |
| 7 | 사이드 플랭크 리치스루 | 좌우 8-12회 | 3세트 | 매트 |
| 8 | 밴드 스쿼트 | 10-15회 | 3세트 | 고리형 밴드 |
| 9 | 밴드 글루트 브릿지 | 10-15회 | 3세트 | 고리형 밴드, 매트 |

운동 초보자는 모든 운동을 처음부터 3세트씩 채우지 않아도 됩니다. 앱은 세트 완료를 누른 기록만 저장하므로, 자세가 무너지거나 피로가 크면 1-2세트만 수행한 뒤 `성공한 세트로 오늘 완료`를 눌러도 됩니다.

AB슬라이드는 허리가 꺾이지 않는 짧은 범위에서 시작합니다. 허리, 어깨, 손목에 통증이 있으면 해당 세트는 중단하고 다음 운동으로 넘어갑니다.

## 이미지 출처와 라이선스

아래 이미지는 공개 라이선스 자료를 사용했습니다.

| 파일 | 출처 | 라이선스 |
| --- | --- | --- |
| `assets/ab-wheel-rollout.png` | Wikimedia Commons `Ab-rollout-on-knees-1.png` | CC BY-SA 계열, Everkinetic |
| `assets/band-glute-bridge.png` | Wikimedia Commons `Bridge-1.png` | CC BY-SA 3.0, Everkinetic |

아래 이미지는 이 프로젝트용으로 직접 제작했습니다.

- `assets/band-lat-pulldown.svg`
- `assets/band-squat.svg`
- `assets/side-plank-reach.svg`

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
- 동기화가 진행되는 동안 앱에는 `동기화 중입니다...` 상태가 표시되고 관련 버튼이 잠시 비활성화됩니다.
- Apps Script URL과 Google OAuth Client ID는 저장 후 기본 화면에서 접혀 보이지 않습니다. 수정이 필요할 때만 `설정 수정`을 누릅니다.
- Apps Script는 같은 `id`나 `key`가 이미 있으면 새 행을 추가하지 않고 기존 행을 갱신합니다.
- Google 로그인 모드에서는 Apps Script가 클라이언트의 `userId`를 그대로 믿지 않고 검증된 `google:sub` 기준으로 ID를 다시 만듭니다.
- `불러오기`는 Apps Script의 JSONP 응답으로 Google Sheets 기록을 다시 브라우저에 병합합니다.

## 주의할 점

- GitHub Pages는 저장 서버가 아닙니다. 실제 장기 기록은 Google Sheets 쪽에 보관합니다.
- Google 로그인은 `file://`에서 안정적으로 테스트하기 어렵습니다. GitHub Pages 또는 `localhost` 서버에서 테스트하세요.
- Google ID 토큰은 만료됩니다. 시간이 지나면 다시 로그인해야 동기화됩니다.
- Google OAuth Client ID는 비밀키가 아닙니다. 프론트엔드 Google 로그인에 필요한 공개 식별자입니다. 보안은 Google Cloud의 허용 origin 설정과 Apps Script의 ID 토큰 검증으로 지켜집니다.
- Apps Script 웹앱 URL도 비밀번호처럼 취급되는 값은 아니지만, 화면 공유 중 불필요한 노출을 줄이기 위해 앱에서는 저장 후 숨깁니다.
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
