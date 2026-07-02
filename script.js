const routineGroups = [
  {
    id: "chest",
    name: "가슴",
    subtitle: "필수 2종",
    accent: "#ef5b4c",
    exercises: [
      {
        id: "pushup-standard",
        level: "기본",
        name: "푸쉬업바 일반 푸쉬업",
        sequence: 1,
        target: "가슴, 삼두, 코어",
        reps: "8-15회",
        sets: 3,
        rest: 60,
        image: "assets/pushup-bar-pushup.webp",
        equipment: "푸쉬업바",
        notes: ["필수 운동", "손목 중립", "몸통 일직선"],
        intro:
          "푸쉬업바를 잡고 하는 기본 가슴 운동입니다. 손목 부담을 줄이면서 가슴, 삼두, 코어를 함께 씁니다.",
        steps: [
          "시작: 푸쉬업바를 어깨보다 약간 넓게 두고 머리부터 발뒤꿈치까지 일직선을 만듭니다.",
          "내릴 때: 팔꿈치를 몸통에서 45도 정도로 유지하며 가슴을 바닥 쪽으로 천천히 내립니다.",
          "도착: 가슴이 바닥과 가까워지고 어깨가 앞으로 말리지 않는 지점에서 멈춥니다.",
          "올릴 때: 손잡이를 바닥으로 밀어 가슴과 삼두 힘으로 몸 전체를 한 덩어리처럼 올립니다.",
          "느낌: 가슴 중앙과 삼두에 힘이 들어오고 배와 엉덩이는 몸통을 고정하는 느낌이면 좋습니다.",
        ],
        watch: ["허리가 아래로 처지지 않게 배와 엉덩이에 힘을 줍니다.", "팔꿈치가 어깨선까지 과하게 벌어지지 않게 합니다."],
        scale: "8회가 어렵다면 무릎 푸쉬업바 푸쉬업으로 줄이고, 15회씩 3세트가 쉬워지면 내려가는 속도를 더 천천히 하세요.",
      },
      {
        id: "dumbbell-floor-press",
        level: "필수 보완",
        name: "덤벨 플로어 프레스",
        sequence: 2,
        target: "가슴, 삼두, 어깨 전면",
        reps: "8-12회",
        sets: 3,
        rest: 60,
        image: "assets/dumbbell-floor-press.webp",
        equipment: "7kg 덤벨 2개, 매트 또는 수건",
        notes: ["필수 운동", "바닥에서 누워 밀기", "팔꿈치 과하강 방지"],
        intro:
          "벤치 없이 바닥에서 하는 덤벨 프레스입니다. 푸쉬업과 다른 각도로 가슴을 밀어 주며, 바닥이 팔꿈치 과하강을 막아 초보자가 자세를 잡기 좋습니다.",
        steps: [
          "시작: 무릎을 세우고 바닥에 누워 덤벨을 가슴 옆에 둔 뒤 손목을 팔꿈치 위에 맞춥니다.",
          "밀 때: 덤벨을 가슴 위쪽으로 수직에 가깝게 밀어 올리며 팔꿈치가 옆으로 과하게 벌어지지 않게 합니다.",
          "도착: 덤벨이 가슴 위에서 서로 너무 부딪히지 않는 지점, 팔꿈치가 살짝 남은 지점에서 멈춥니다.",
          "내릴 때: 팔꿈치가 바닥에 가볍게 닿기 전까지 천천히 내리고 어깨가 으쓱하지 않게 합니다.",
          "느낌: 가슴 앞쪽이 밀어내고 삼두가 보조하며, 어깨 앞쪽 통증 없이 안정적인 압력이 느껴져야 합니다.",
        ],
        watch: ["허리를 크게 띄우지 말고 갈비뼈가 들리지 않게 합니다.", "어깨 앞쪽이 찌릿하면 가동 범위를 줄이거나 무게를 내려놓습니다."],
        scale: "7kg이 무겁다면 반복 수를 6-8회로 낮추고, 12회씩 3세트가 편해지면 내려가는 속도를 3초로 늦추세요.",
      },
    ],
  },
  {
    id: "back",
    name: "등",
    subtitle: "필수 2종",
    accent: "#119a8d",
    exercises: [
      {
        id: "band-lat-pulldown",
        level: "상단 고정",
        name: "밴드 랫 풀다운",
        sequence: 3,
        target: "광배근, 등 넓이",
        reps: "10-15회",
        sets: 3,
        rest: 60,
        image: "assets/band-lat-pulldown.gif",
        equipment: "튜빙밴드, 도어앵커",
        notes: ["필수 운동", "상단 고정점 확인", "목 뒤가 아닌 가슴 앞으로"],
        intro:
          "튜빙밴드를 높은 곳에 고정하고 팔꿈치를 아래로 당겨 광배근을 쓰는 등 넓이 운동입니다. 집에서 위에서 아래로 당기는 자극을 만들기 좋습니다.",
        steps: [
          "시작: 도어앵커를 문 위쪽에 고정하고 팔을 위로 뻗어 밴드 손잡이를 잡은 뒤 가슴을 살짝 듭니다.",
          "당길 때: 손으로만 당기지 말고 팔꿈치를 옆구리와 바지 주머니 방향으로 끌어내립니다.",
          "도착: 손이 가슴 앞쪽 또는 어깨 아래쪽에 오고, 겨드랑이 아래 등 근육이 조이는 지점에서 멈춥니다.",
          "올릴 때: 팔을 위로 천천히 되돌리되 어깨가 귀 쪽으로 딸려 올라가지 않게 버팁니다.",
          "느낌: 팔보다 겨드랑이 아래 광배근이 먼저 조이고, 목 뒤나 승모근이 뻐근하지 않아야 합니다.",
        ],
        watch: ["고정점이 풀리지 않는지 매 세트 전에 확인합니다.", "목 뒤로 당기지 말고 가슴 앞쪽으로 당깁니다."],
        scale: "너무 쉽다면 밴드를 짧게 잡거나 한 걸음 뒤로 가고, 너무 어렵다면 무릎을 세우고 가까이에서 시작하세요.",
      },
      {
        id: "bent-over-row",
        level: "초보 기본",
        name: "벤트오버 로우",
        sequence: 4,
        target: "광배근, 등 중부",
        reps: "10-15회",
        sets: 3,
        rest: 60,
        image: "assets/bent-row.png",
        equipment: "7kg 덤벨 2개",
        notes: ["필수 운동", "상체 약 45도", "팔꿈치를 뒤 주머니로"],
        intro:
          "7kg 덤벨로 등 두께를 만드는 기본 당기기 운동입니다. 상체 각도를 고정하고 팔꿈치를 뒤로 보내는 감각이 핵심입니다.",
        steps: [
          "시작: 엉덩이를 뒤로 빼며 상체를 약 45도 숙이고, 등은 평평하게 둔 채 덤벨을 정강이 앞쪽에 둡니다.",
          "당길 때: 덤벨을 45도 방향 그대로 끌기보다 팔꿈치를 뒤 주머니로 보낸다는 느낌으로 옆구리 쪽으로 당깁니다.",
          "도착: 덤벨이 배꼽 옆 또는 옆구리 근처에 오고, 견갑골이 가볍게 모이는 지점에서 멈춥니다.",
          "내릴 때: 팔만 툭 떨어뜨리지 말고 덤벨을 정강이 앞쪽으로 천천히 되돌리며 상체 각도를 유지합니다.",
          "느낌: 허리보다 등 중부와 겨드랑이 아래쪽이 당겨지고, 목은 편안하게 바닥 앞을 보는 느낌이면 좋습니다.",
        ],
        watch: ["허리가 둥글게 말리면 무게를 줄입니다.", "목을 들지 말고 시선은 바닥 앞쪽에 둡니다."],
        scale: "7kg이 무겁게 느껴지면 한쪽씩 원암 로우로 바꾸고, 15회씩 3세트가 쉬워지면 상단에서 1초 멈추세요.",
      },
    ],
  },
  {
    id: "shoulder",
    name: "어깨",
    subtitle: "필수 1종",
    accent: "#d89a18",
    exercises: [
      {
        id: "band-side-lateral-raise",
        level: "필수 기본",
        name: "밴드 사이드 레터럴 레이즈",
        sequence: 5,
        target: "측면 어깨",
        reps: "12-20회",
        sets: 3,
        rest: 60,
        image: "assets/band-lateral-raise.webp",
        equipment: "튜빙밴드",
        notes: ["필수 운동", "가볍게, 천천히", "어깨 높이까지만"],
        intro:
          "튜빙밴드로 어깨 측면을 천천히 들어 올리는 운동입니다. 7kg 덤벨 사레레보다 초보자에게 부담 조절이 쉽습니다.",
        steps: [
          "시작: 밴드 가운데를 발로 밟고 손잡이를 잡은 뒤 팔꿈치를 살짝 굽혀 손을 허벅지 옆에 둡니다.",
          "올릴 때: 손보다 팔꿈치가 옆 벽을 밀고 나간다는 느낌으로 양팔을 옆으로 들어 올립니다.",
          "도착: 손과 팔꿈치가 어깨 높이 부근에 오면 멈추고 어깨를 귀 쪽으로 으쓱하지 않습니다.",
          "내릴 때: 밴드에 끌려 내려가지 말고 2-3초 동안 천천히 허벅지 옆으로 되돌립니다.",
          "느낌: 목이 아니라 어깨 옆면이 뜨겁게 타는 느낌이 나고, 허리를 젖히거나 반동이 없어야 합니다.",
        ],
        watch: ["반동으로 들어 올리지 않습니다.", "목이나 승모근이 먼저 힘들면 밴드를 길게 잡아 저항을 줄입니다."],
        scale: "20회씩 3세트가 안정되면 밴드를 조금 짧게 잡고, 목이 먼저 뻐근하면 반복 수보다 자세를 우선하세요.",
      },
    ],
  },
  {
    id: "abs",
    name: "복근",
    subtitle: "필수 + 선택",
    accent: "#6a5acd",
    exercises: [
      {
        id: "ab-wheel-rollout",
        level: "필수 기본",
        name: "AB슬라이드",
        sequence: 6,
        target: "복직근, 코어 안정성",
        reps: "5-10회",
        sets: 3,
        rest: 60,
        image: "assets/ab-wheel-rollout.webp",
        equipment: "AB슬라이드, 무릎 매트",
        notes: ["필수 운동", "복부 힘 유지", "허리 꺾이면 즉시 중단"],
        intro:
          "AB슬라이드는 복근이 몸통을 버티는 힘을 크게 요구합니다. 멀리 굴리는 것보다 허리가 안전한 범위를 지키는 것이 먼저입니다.",
        steps: [
          "시작: 무릎을 매트에 대고 AB슬라이드 손잡이를 잡은 뒤 갈비뼈를 내리고 배와 엉덩이에 힘을 줍니다.",
          "밀 때: 팔만 뻗는 것이 아니라 몸통이 길어진다는 느낌으로 휠을 앞쪽으로 천천히 굴립니다.",
          "도착: 허리가 꺾이기 직전이 아니라 복부 힘으로 버틸 수 있는 안전한 거리에서 멈춥니다.",
          "당길 때: 손으로만 끌지 말고 배를 짧게 접는 느낌으로 휠을 무릎 쪽으로 되돌립니다.",
          "느낌: 허리 통증이 아니라 배 앞쪽 전체가 강하게 버티고 떨리는 느낌이면 충분합니다.",
        ],
        watch: ["허리가 아래로 꺾이면 즉시 범위를 줄입니다.", "어깨나 손목 통증이 있으면 그 세트는 중단합니다."],
        scale: "5회가 안정되면 8-10회로 늘리고, 그래도 쉽다면 굴리는 거리를 조금씩 늘리세요.",
      },
      {
        id: "side-plank-reach",
        level: "선택 옆구리",
        name: "사이드 플랭크 리치스루",
        sequence: 8,
        target: "외복사근, 측면 코어",
        reps: "좌우 8-12회",
        sets: 3,
        rest: 45,
        image: "assets/side-plank-reach.png",
        equipment: "매트",
        optional: true,
        notes: ["선택 운동", "골반 높이 유지", "허리 비틀림 과도 금지"],
        intro:
          "필수 7종목 뒤 컨디션이 좋을 때 더하는 선택 복근 운동입니다. 옆구리와 몸통 회전 안정성을 함께 훈련합니다.",
        steps: [
          "시작: 팔꿈치를 어깨 아래에 두고 옆으로 버티며 머리부터 발까지 긴 선을 만듭니다.",
          "당길 때: 위쪽 팔을 몸 아래 공간으로 천천히 넣으며 가슴과 몸통을 바닥 쪽으로 회전합니다.",
          "도착: 골반이 떨어지지 않는 범위에서 옆구리가 늘어나는 지점까지만 들어갑니다.",
          "돌아올 때: 위쪽 팔을 천장 방향으로 열며 몸통을 다시 정면 옆 자세로 세웁니다.",
          "느낌: 아래쪽 옆구리가 버티고 위쪽 옆구리가 회전하며, 어깨 관절이 찝히지 않아야 합니다.",
        ],
        watch: ["어깨가 아프면 정지 사이드 플랭크로 바꿉니다.", "허리를 크게 비틀기보다 몸통 전체를 천천히 회전합니다."],
        scale: "어렵다면 무릎을 바닥에 대고 진행하고, 쉬우면 정지 시간을 1-2초 추가하세요.",
      },
    ],
  },
  {
    id: "legs",
    name: "하체",
    subtitle: "필수 + 선택",
    accent: "#2e9d5b",
    exercises: [
      {
        id: "band-squat",
        level: "필수 하체",
        name: "밴드 스쿼트",
        sequence: 7,
        target: "하체 전반, 둔근, 무릎 정렬",
        reps: "10-15회",
        sets: 3,
        rest: 60,
        image: "assets/band-squat.png",
        equipment: "고리형 밴드",
        notes: ["필수 운동", "무릎 위에 밴드", "무릎 안쪽 무너짐 방지"],
        intro:
          "고리형 밴드를 무릎 위에 걸고 하는 스쿼트입니다. 밴드 저항 때문에 무릎 정렬과 둔근 사용을 더 의식하기 좋습니다.",
        steps: [
          "시작: 고리형 밴드를 무릎 바로 위 허벅지에 걸고 발을 어깨너비로 둡니다.",
          "내릴 때: 무릎을 밴드에 맞서 살짝 바깥으로 유지하며 엉덩이를 뒤로 보내 앉습니다.",
          "도착: 허리가 말리기 전, 발바닥 전체가 바닥을 누르는 깊이에서 멈춥니다.",
          "올릴 때: 발바닥 전체로 바닥을 밀며 무릎이 안쪽으로 모이지 않게 일어섭니다.",
          "느낌: 허벅지 앞쪽만이 아니라 엉덩이 옆과 뒤쪽이 같이 켜지는 느낌이면 좋습니다.",
        ],
        watch: ["무릎이 안쪽으로 모이면 깊이를 줄입니다.", "허리가 말리기 전까지만 내려갑니다."],
        scale: "15회씩 3세트가 쉬우면 천천히 내려가거나 하단에서 1초 멈추세요.",
      },
      {
        id: "band-glute-bridge",
        level: "선택 둔근",
        name: "밴드 글루트 브릿지",
        sequence: 9,
        target: "둔근, 햄스트링, 허리 안정성",
        reps: "10-15회",
        sets: 3,
        rest: 60,
        image: "assets/band-glute-bridge.png",
        equipment: "고리형 밴드, 매트 또는 수건",
        optional: true,
        notes: ["선택 운동", "무릎 위 밴드", "엉덩이로 들어 올리기"],
        intro:
          "필수 하체 운동 뒤 컨디션이 좋을 때 더하는 선택 둔근 운동입니다. 매트가 없으면 두꺼운 수건을 등과 어깨 아래에 깔아도 됩니다.",
        steps: [
          "시작: 밴드를 무릎 위에 걸고 누워 발을 골반 너비로 둔 뒤 갈비뼈를 내리고 배에 가볍게 힘을 줍니다.",
          "올릴 때: 무릎을 살짝 바깥으로 밀며 엉덩이를 천장 방향으로 들어 올립니다.",
          "도착: 어깨, 골반, 무릎이 사선으로 이어지고 허리를 꺾지 않는 지점에서 1초 멈춥니다.",
          "내릴 때: 엉덩이에 힘을 유지한 채 바닥으로 천천히 내려오고 무릎이 안쪽으로 모이지 않게 합니다.",
          "느낌: 허리보다 엉덩이 아래쪽과 옆쪽이 조여야 하며, 허리 압박이 느껴지면 높이를 줄입니다.",
        ],
        watch: ["허리로 꺾어 올리지 않습니다.", "상단에서 허리보다 엉덩이에 힘이 들어오는지 확인합니다."],
        scale: "15회씩 3세트가 쉬우면 상단에서 2초 멈추거나 밴드 저항을 높이세요.",
      },
    ],
  },
];

const appVersion = "2.3.0";
const assetVersion = "beginner-equipment-20260702";
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

const exercises = routineGroups
  .flatMap((group, groupIndex) =>
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
      fallbackSequence: groupIndex * 100 + exerciseIndex,
    }))
  )
  .sort((a, b) => (a.sequence ?? a.fallbackSequence) - (b.sequence ?? b.fallbackSequence))
  .map((exercise, order) => ({
    ...exercise,
    order,
  }));

const archivedExercises = [
  {
    id: "pushup-decline",
    name: "디클라인 푸쉬업",
    reps: "6-12회",
    sets: 3,
    group: { id: "chest", name: "가슴", subtitle: "이전 루틴", accent: "#ef5b4c", order: 89 },
    order: 0,
  },
  {
    id: "pushup-incline",
    name: "인클라인 푸쉬업",
    reps: "6-12회",
    sets: 3,
    group: { id: "chest", name: "가슴", subtitle: "이전 루틴", accent: "#ef5b4c", order: 90 },
    order: 0,
  },
  {
    id: "lat-pulldown",
    name: "비하인드 랫 풀다운",
    reps: "15회",
    sets: 3,
    group: { id: "back", name: "등", subtitle: "이전 루틴", accent: "#119a8d", order: 91 },
    order: 0,
  },
  {
    id: "side-lateral-raise",
    name: "사이드 레터럴 레이즈",
    reps: "12-20회",
    sets: 3,
    group: { id: "shoulder", name: "어깨", subtitle: "이전 루틴", accent: "#d89a18", order: 92 },
    order: 0,
  },
  {
    id: "superman-crunch",
    name: "전신 크런치",
    reps: "15회",
    sets: 3,
    group: { id: "abs", name: "복근", subtitle: "이전 루틴", accent: "#6a5acd", order: 92 },
    order: 0,
  },
  {
    id: "side-toe-touch",
    name: "사이드 토터치",
    reps: "왕복 15회",
    sets: 3,
    group: { id: "abs", name: "복근", subtitle: "이전 루틴", accent: "#6a5acd", order: 93 },
    order: 1,
  },
  {
    id: "bodyweight-squat",
    name: "맨몸 스쿼트",
    reps: "8-15회",
    sets: 3,
    group: { id: "legs", name: "하체", subtitle: "이전 루틴", accent: "#2e9d5b", order: 94 },
    order: 0,
  },
  {
    id: "glute-bridge",
    name: "글루트 브릿지",
    reps: "10-15회",
    sets: 3,
    group: { id: "legs", name: "하체", subtitle: "이전 루틴", accent: "#2e9d5b", order: 95 },
    order: 1,
  },
];

const legacyExerciseMigrationOrder = [
  "pushup-standard",
  "pushup-decline",
  "pushup-incline",
  "lat-pulldown",
  "bent-over-row",
  "side-lateral-raise",
  "superman-crunch",
  "side-toe-touch",
  "bodyweight-squat",
];
const exerciseDefinitions = [...exercises, ...archivedExercises];
const exerciseById = new Map(exerciseDefinitions.map((exercise) => [exercise.id, exercise]));
const exerciseIndexById = new Map(exercises.map((exercise, index) => [exercise.id, index]));
const archivedExerciseIndexById = new Map(
  archivedExercises.map((exercise, index) => [exercise.id, exercises.length + index])
);
const activeExerciseIdSet = new Set(exercises.map((exercise) => exercise.id));
const requiredExercises = exercises.filter((exercise) => !exercise.optional);
const requiredExerciseIdSet = new Set(requiredExercises.map((exercise) => exercise.id));
const requiredTotalSets = requiredExercises.reduce((sum, exercise) => sum + exercise.sets, 0);
const allExerciseSets = exercises.reduce((sum, exercise) => sum + exercise.sets, 0);
const totalSets = requiredTotalSets;
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
let editingSyncSettings = false;

const els = {
  todayCard: document.querySelector("#todayCard"),
  weekStrip: document.querySelector("#weekStrip"),
  totalProgressText: document.querySelector("#totalProgressText"),
  progressBar: document.querySelector("#progressBar"),
  sequenceList: document.querySelector("#sequenceList"),
  exerciseInfoBtn: document.querySelector("#exerciseInfoBtn"),
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
  syncPanel: document.querySelector(".sync-panel"),
  syncConfigSummary: document.querySelector("#syncConfigSummary"),
  syncConfigFields: document.querySelector("#syncConfigFields"),
  appsScriptUrlInput: document.querySelector("#appsScriptUrlInput"),
  googleClientIdInput: document.querySelector("#googleClientIdInput"),
  googleAccountText: document.querySelector("#googleAccountText"),
  googleSignInButton: document.querySelector("#googleSignInButton"),
  googleSignOutBtn: document.querySelector("#googleSignOutBtn"),
  editSyncSettingsBtn: document.querySelector("#editSyncSettingsBtn"),
  saveSyncSettingsBtn: document.querySelector("#saveSyncSettingsBtn"),
  syncNowBtn: document.querySelector("#syncNowBtn"),
  pullRemoteBtn: document.querySelector("#pullRemoteBtn"),
  syncStatusText: document.querySelector("#syncStatusText"),
  syncQueueText: document.querySelector("#syncQueueText"),
  exerciseInfoDialog: document.querySelector("#exerciseInfoDialog"),
  exerciseInfoCloseBtn: document.querySelector("#exerciseInfoCloseBtn"),
  exerciseInfoImage: document.querySelector("#exerciseInfoImage"),
  exerciseInfoTitle: document.querySelector("#exerciseInfoTitle"),
  exerciseInfoSubtitle: document.querySelector("#exerciseInfoSubtitle"),
  exerciseInfoSummary: document.querySelector("#exerciseInfoSummary"),
  exerciseInfoMeta: document.querySelector("#exerciseInfoMeta"),
  exerciseInfoSteps: document.querySelector("#exerciseInfoSteps"),
  exerciseInfoWatch: document.querySelector("#exerciseInfoWatch"),
  exerciseInfoScale: document.querySelector("#exerciseInfoScale"),
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
    const legacyExerciseId = legacyExerciseMigrationOrder[Number(legacyIndex)];
    const exercise = exerciseById.get(legacyExerciseId) || exercises[Number(legacyIndex)];
    if (!exercise || !Array.isArray(reps)) return;
    reps.forEach((rep, setIndex) => {
      const globalSetNumber = getLegacySetsBefore(Number(legacyIndex)) + setIndex + 1;
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

function getLegacySetsBefore(index) {
  return legacyExerciseMigrationOrder.slice(0, index).reduce((sum, exerciseId) => {
    const exercise = exerciseById.get(exerciseId);
    return sum + (exercise?.sets || 0);
  }, 0);
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

function getCompletedRecordMap(dateState = state, activeOnly = false) {
  const map = new Map();
  dateState.setRecords.forEach((record) => {
    if (activeOnly && !activeExerciseIdSet.has(record.exerciseId)) return;
    const key = getSetKey(record.exerciseId, record.setNumber);
    map.set(key, record);
  });
  return map;
}

function getSetKey(exerciseId, setNumber) {
  return `${exerciseId}:${setNumber}`;
}

function getCompletedSetCount(dateState = state, activeOnly = false) {
  return getCompletedRecordMap(dateState, activeOnly).size;
}

function getCompletedActiveSetCount(dateState = state) {
  return getCompletedSetCount(dateState, true);
}

function getCompletedRequiredSetCount(dateState = state) {
  const map = new Map();
  dateState.setRecords.forEach((record) => {
    if (!requiredExerciseIdSet.has(record.exerciseId)) return;
    map.set(getSetKey(record.exerciseId, record.setNumber), record);
  });
  return map.size;
}

function hasRequiredExerciseMinimum(dateState = state) {
  return requiredExercises.every((exercise) => getCompletedCountForExercise(exercise.id, dateState) > 0);
}

function getCompletedAllSetCount(dateState = state) {
  return getCompletedActiveSetCount(dateState);
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
  const orderA = exerciseIndexById.get(a.exerciseId) ?? archivedExerciseIndexById.get(a.exerciseId) ?? 999;
  const orderB = exerciseIndexById.get(b.exerciseId) ?? archivedExerciseIndexById.get(b.exerciseId) ?? 999;
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
        completedSets: getCompletedRequiredSetCount(dateState),
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
      const recordsByExercise = new Map();
      [...day.setRecords].sort(compareRecords).forEach((record) => {
        if (!recordsByExercise.has(record.exerciseId)) recordsByExercise.set(record.exerciseId, []);
        recordsByExercise.get(record.exerciseId).push(record);
      });
      const detailsHtml = [...recordsByExercise.entries()]
        .map(([exerciseId, records]) => {
          const exercise = exerciseById.get(exerciseId);
          const firstRecord = records[0] || {};
          const groupName = firstRecord.groupName || exercise?.group?.name || "기록";
          const exerciseName = firstRecord.exerciseName || exercise?.name || exerciseId;
          const repsChips = records
            .map((record) => `<span class="history-rep-chip">${record.setNumber}S: ${record.reps}회</span>`)
            .join("");
          return `
            <div class="history-exercise-item">
              <strong class="history-exercise-name">${escapeHtml(groupName)} · ${escapeHtml(exerciseName)}</strong>
              <div class="history-reps-list">${repsChips}</div>
            </div>
          `;
        })
        .join("");

      const stampHtml = day.completed
        ? `<span class="stamp-badge"><i data-lucide="trophy"></i> 완료</span>`
        : `<span class="history-rep-chip">필수 ${day.completedSets}세트 진행</span>`;
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
      const typeLabel = exercise.optional ? "선택" : "필수";
      return `
        <button class="sequence-item ${isActive ? "is-active" : ""} ${exercise.optional ? "is-optional" : ""}" style="--accent:${exercise.group.accent}" data-index="${index}" type="button">
          <span>
            <small>${exercise.group.name} · ${typeLabel} · ${exercise.level}</small>
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
  els.exerciseInfoBtn.setAttribute("aria-label", `${exercise.name} 운동 소개 열기`);
  els.groupPill.textContent = `${exercise.group.name} · ${exercise.group.subtitle}`;
  els.groupPill.style.background = exercise.group.accent;
  els.levelPill.textContent = exercise.level;
  els.exerciseName.textContent = exercise.name;
  els.exerciseName.classList.toggle("long-name", exercise.name.length >= 8);
  els.targetText.textContent = exercise.target;
  els.repsText.textContent = exercise.reps;
  els.setText.textContent = `${state.setNumber} / ${exercise.sets} 세트 목표${exercise.optional ? " · 선택" : " · 필수"}`;
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
  const completedRequiredCount = getCompletedRequiredSetCount();
  const requiredMinimumDone = hasRequiredExerciseMinimum();
  const progress = Math.round((Math.min(completedRequiredCount, totalSets) / totalSets) * 100);
  els.progressBar.style.width = `${progress}%`;
  els.totalProgressText.textContent = `필수 ${completedRequiredCount} / ${totalSets} 세트`;
  els.timerBoard.classList.toggle("is-rest", state.phase === "rest");
  els.timerBoard.classList.toggle("is-complete", state.phase === "complete");
  els.timerText.textContent = formatStopwatchTime(state.sessionSeconds);

  if (state.phase === "complete") {
    els.phaseLabel.textContent = "완료";
    els.nextCue.textContent = "오늘 루틴 완료";
  } else if (state.phase === "rest") {
    els.phaseLabel.textContent = state.running ? "휴식 중" : "휴식 대기";
    els.nextCue.textContent =
      state.setNumber < exercise.sets
        ? `휴식 ${formatTime(state.restRemaining)} 남음 · 다음: ${exercise.name} ${state.setNumber + 1}세트`
        : `휴식 ${formatTime(state.restRemaining)} 남음 · 다음: ${exercises[state.exerciseIndex + 1]?.name ?? "마무리"}`;
  } else {
    els.phaseLabel.textContent = state.running ? "전체 운동 중" : "전체 시간 대기";
    els.nextCue.textContent = `${exercise.reps} · ${state.setNumber}/${exercise.sets}세트`;
  }

  const stopwatchNode = els.totalStopwatchText.querySelector(".stopwatch-time");
  if (stopwatchNode) {
    stopwatchNode.textContent = formatStopwatchTime(state.sessionSeconds);
  } else {
    els.totalStopwatchText.innerHTML = `<i data-lucide="clock"></i> <span class="stopwatch-time">${formatStopwatchTime(state.sessionSeconds)}</span>`;
  }

  const startLabel = state.running ? "일시정지" : state.sessionSeconds > 0 ? "계속" : "시작";
  els.startPauseBtn.innerHTML = `<i data-lucide="${state.running ? "pause" : "play"}"></i><span>${startLabel}</span>`;
  els.completeSetBtn.disabled = state.phase === "rest" || state.phase === "complete";
  els.skipRestBtn.disabled = state.phase !== "rest";
  els.startPauseBtn.disabled = state.phase === "complete";

  if (state.completed || state.phase === "complete") {
    els.finishWorkoutBtn.disabled = true;
    els.finishWorkoutBtn.querySelector("span").textContent = "오늘 운동 완료됨";
    els.finishWorkoutBtn.style.opacity = "0.7";
  } else {
    els.finishWorkoutBtn.disabled = !requiredMinimumDone;
    els.finishWorkoutBtn.querySelector("span").textContent = requiredMinimumDone
      ? "필수 완료로 오늘 운동 완료"
      : `필수 운동 진행 중 ${completedRequiredCount}/${totalSets}`;
    els.finishWorkoutBtn.style.opacity = requiredMinimumDone ? "1" : "0.62";
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
  const isBusy = syncInProgress || remoteImportInProgress;
  const configSaved = Boolean(settings.appsScriptUrl.trim() && settings.googleClientId.trim());
  const collapseConfig = configSaved && !editingSyncSettings;
  const lastSync = settings.lastSyncAt ? ` · 마지막 ${formatShortDateTime(settings.lastSyncAt)}` : "";
  const error = settings.lastSyncError ? ` · 오류: ${settings.lastSyncError}` : "";
  const authNotice = requiresGoogleAuthForSync() && !isAuthSessionFresh() ? " · Google 로그인 필요" : "";
  els.syncStatusText.textContent = isBusy
    ? remoteImportInProgress
      ? "Google Sheets 기록을 불러오는 중입니다..."
      : `동기화 중입니다... ${pending ? `${pending}건 처리 중` : "잠시만 기다려주세요"}`
    : hasUrl
      ? pending
        ? `동기화 대기 ${pending}건${authNotice}${error}`
        : `동기화 준비됨${lastSync}${authNotice}${error}`
      : "Apps Script URL을 입력하면 Google Sheets 동기화가 켜집니다.";
  els.syncStatusText.classList.toggle("is-error", Boolean(settings.lastSyncError) && !isBusy);
  els.syncQueueText.textContent = isBusy ? "동기화 중" : pending ? `${pending}건 대기` : "대기 없음";
  els.syncQueueText.classList.toggle("is-working", isBusy);
  els.googleAccountText.textContent = getGoogleAccountLabel();
  els.syncPanel.classList.toggle("is-busy", isBusy);
  els.syncPanel.classList.toggle("is-config-collapsed", collapseConfig);
  els.syncConfigSummary.hidden = !collapseConfig;
  els.syncConfigFields.hidden = collapseConfig;
  els.saveSyncSettingsBtn.disabled = isBusy;
  els.syncNowBtn.disabled = isBusy;
  els.pullRemoteBtn.disabled = isBusy;
  els.editSyncSettingsBtn.disabled = isBusy;

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
  const keepTimerRunning = state.running;

  const completedCount = getCompletedAllSetCount();
  if (completedCount >= allExerciseSets) {
    state.phase = "complete";
    state.completed = true;
    state.running = false;
  } else {
    state.phase = "rest";
    state.restRemaining = exercise.rest;
    state.running = keepTimerRunning;
  }

  queueSync("upsertSetLog", record);
  queueDailySummary();
  saveState();
  render();
  flushSyncQueue();
}

function advanceAfterRest() {
  const exercise = getCurrentExercise();
  const keepTimerRunning = state.running;
  const nextSetInExercise = findNextIncompleteSetNumber(exercise, state.setNumber);
  if (nextSetInExercise) {
    state.setNumber = nextSetInExercise;
  } else {
    const nextPosition = getNextIncompletePosition((state.exerciseIndex + 1) % exercises.length);
    state.exerciseIndex = nextPosition.exerciseIndex;
    state.setNumber = nextPosition.setNumber;
  }
  state.phase = keepTimerRunning ? "work" : "ready";
  state.running = keepTimerRunning;
  state.restRemaining = 0;
  render();
}

function jumpToExercise(index) {
  state.exerciseIndex = clampNumber(index, 0, exercises.length - 1, 0);
  state.setNumber = getFirstIncompleteSetNumber(getCurrentExercise());
  state.phase = state.running ? "work" : "ready";
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
  if (!hasRequiredExerciseMinimum()) {
    alert("오늘 운동 완료는 필수 7종목을 최소 1세트씩 기록한 뒤 사용할 수 있습니다.");
    return;
  }
  if (!confirm("선택 운동을 못했더라도 필수 루틴을 기준으로 오늘 운동을 완료할까요?")) return;
  state.phase = "complete";
  state.completed = true;
  state.running = false;
  state.restRemaining = 0;
  saveState();
  enqueueDateStateForSync(state);
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
    completedSets: getCompletedRequiredSetCount(dateState),
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

function enqueueDateStateForSync(dateState = state) {
  dateState.setRecords.forEach((record) => queueSync("upsertSetLog", record));
  queueDailySummary(dateState);
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
    enqueueDateStateForSync(dateState);
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
    }, 45000);

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

  syncInProgress = true;
  settings.lastSyncError = "";
  saveSettings();
  renderSyncPanel();
  try {
    if (authPayload) {
      await verifyRemoteAuth(authPayload);
    }
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
  } catch (error) {
    settings.lastSyncError = error.message || "동기화 실패";
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
  editingSyncSettings = false;
  saveSettings();
  renderSyncPanel();
  flushSyncQueue();
}

function editSyncSettings() {
  editingSyncSettings = true;
  renderSyncPanel();
  window.setTimeout(() => els.appsScriptUrlInput.focus(), 0);
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
  renderSyncPanel();
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
      renderSyncPanel();
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
  state.sessionSeconds += 1;
  if (state.phase === "rest") {
    state.restRemaining -= 1;
    if (state.restRemaining <= 0) {
      advanceAfterRest();
      return;
    }
  }
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

function renderInfoList(items) {
  return (items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function openExerciseInfo() {
  const exercise = getCurrentExercise();
  els.exerciseInfoImage.src = `${exercise.image}?v=${assetVersion}`;
  els.exerciseInfoImage.alt = exercise.name;
  els.exerciseInfoTitle.textContent = exercise.name;
  els.exerciseInfoSubtitle.textContent = `${exercise.group.name} · ${exercise.target}`;
  els.exerciseInfoSummary.textContent = exercise.intro || "자세를 유지할 수 있는 범위에서 천천히 진행하세요.";
  els.exerciseInfoMeta.innerHTML = [
    `<span><i data-lucide="${exercise.optional ? "circle-dashed" : "badge-check"}"></i>${exercise.optional ? "선택 운동" : "필수 운동"}</span>`,
    `<span><i data-lucide="repeat"></i>${escapeHtml(exercise.reps)} · 목표 ${exercise.sets}세트</span>`,
    `<span><i data-lucide="timer"></i>휴식 ${exercise.rest}초</span>`,
    `<span><i data-lucide="package"></i>${escapeHtml(exercise.equipment || "맨몸")}</span>`,
  ].join("");
  els.exerciseInfoSteps.innerHTML = renderInfoList(exercise.steps);
  els.exerciseInfoWatch.innerHTML = renderInfoList(exercise.watch);
  els.exerciseInfoScale.textContent = exercise.scale || "처음엔 1세트만 정확히 끝내고, 여유가 생기면 2세트와 3세트로 늘리세요.";

  if (typeof els.exerciseInfoDialog.showModal === "function") {
    els.exerciseInfoDialog.showModal();
  } else {
    els.exerciseInfoDialog.setAttribute("open", "");
  }
  refreshIcons();
}

function closeExerciseInfo() {
  if (typeof els.exerciseInfoDialog.close === "function") {
    els.exerciseInfoDialog.close();
  } else {
    els.exerciseInfoDialog.removeAttribute("open");
  }
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
els.exerciseInfoBtn.addEventListener("click", openExerciseInfo);
els.exerciseInfoCloseBtn.addEventListener("click", closeExerciseInfo);
els.exerciseInfoDialog.addEventListener("click", (event) => {
  if (event.target === els.exerciseInfoDialog) closeExerciseInfo();
});
els.clearHistoryBtn.addEventListener("click", clearAllHistory);
els.tabDailyBtn.addEventListener("click", () => switchTab("daily"));
els.tabCalendarBtn.addEventListener("click", () => switchTab("calendar"));
els.exportCsvBtn.addEventListener("click", exportHistoryCsv);
els.exportJsonBtn.addEventListener("click", exportHistoryJson);
els.importJsonBtn.addEventListener("click", () => els.importJsonFile.click());
els.importJsonFile.addEventListener("change", importHistoryJson);
els.saveSyncSettingsBtn.addEventListener("click", saveSyncSettingsFromUi);
els.editSyncSettingsBtn.addEventListener("click", editSyncSettings);
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
