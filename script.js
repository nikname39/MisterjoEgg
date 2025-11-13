// 필요한 HTML 요소들을 가져옵니다.
const mijoImage = document.getElementById('mijo-image');
const eggCountDisplay = document.getElementById('egg-count');
const eggSpawnArea = document.getElementById('egg-spawn-area');
const gameContainer = document.querySelector('.game-container'); // (추가) 말풍선 기준점

// (추가) 말풍선에 들어갈 랜덤 문구 배열
const phrases = [
    "뭐해",
    "벌려",
    "강원랜드가 이 모양인데 가긴 어딜 가",
    "???(강원랜드 -7퍼): 분할매수 하라니까??",
    "???(강원랜드 -7퍼): 아직 난 물린게 아니라고",
    "하나 둘 셋"
];

// 알 개수를 저장할 변수 (0부터 시작)
let eggCount = 0;

// 미조 이미지를 클릭했을 때 실행할 함수를 연결합니다.
mijoImage.addEventListener('click', () => {
    
    // 1. 알 개수 1 증가
    eggCount++;
    
    // 2. 화면에 알 개수 업데이트
    eggCountDisplay.textContent = eggCount;
    
    // 3. '알 낳는 모션' 실행
    mijoImage.classList.add('laying-motion');
    setTimeout(() => {
        mijoImage.classList.remove('laying-motion');
    }, 300); // 0.3초

    // 4. 알 이미지 생성
    const newEgg = document.createElement('img');
    newEgg.src = 'egg.png';
    newEgg.classList.add('egg-image');
    eggSpawnArea.appendChild(newEgg);
    
    // 5. 1초 뒤 알 이미지 제거
    setTimeout(() => {
        newEgg.remove();
    }, 1000); // 1초

    // --- (새로 추가된 부분) ---
    // 6. 랜덤 말풍선 생성
    
    // (1) 랜덤 문구 하나 선택
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    // (2) 말풍선 HTML 요소 생성
    const newBubble = document.createElement('div');
    newBubble.classList.add('speech-bubble');
    newBubble.textContent = randomPhrase;
    
    // (3) 말풍선을 게임 컨테이너에 추가
    gameContainer.appendChild(newBubble);
    
    // (4) 1.5초 뒤(애니메이션 종료 후) 말풍선 제거
    setTimeout(() => {
        newBubble.remove();
    }, 1500); // 1.5초 (CSS 애니메이션 시간과 동일)
    // --- (여기까지 추가) ---
});