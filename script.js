const cheerMessages = [
    "오늘도 정말 고생 많았어요! 당신은 충분히 잘하고 있어요.",
    "당신의 노력은 결코 헛되지 않을 거예요. 조금만 더 힘내요!",
    "지금 있는 그대로의 모습으로도 당신은 충분히 빛나요.",
    "힘들 땐 잠시 쉬어가도 괜찮아요. 당신은 여전히 소중하니까요.",
    "내일은 오늘보다 더 좋은 일이 기다리고 있을 거예요.",
    "당신은 생각보다 훨씬 더 강하고 멋진 사람이에요.",
    "포기하지 마세요. 당신의 꿈은 꼭 이루어질 거예요.",
    "오늘 하루도 버텨낸 당신, 정말 대단해요!",
    "당신의 작은 노력이 모여 큰 기적을 만들 거예요.",
    "온 세상이 당신을 응원하고 있다는 걸 잊지 마세요!"
];

const messageText = document.getElementById('message-text');
const refreshButton = document.getElementById('refresh-button');

function getRandomMessage() {
    let currentText = messageText.innerText.replace(/"/g, '');
    let randomMessage = currentText;
    
    while (randomMessage === currentText) {
        randomMessage = cheerMessages[Math.floor(Math.random() * cheerMessages.length)];
    }
    
    // Trigger fade animation
    messageText.classList.remove('animate-fade-in');
    
    // Trigger a reflow to reset CSS transition animation
    void messageText.offsetWidth;
    
    messageText.classList.add('animate-fade-in');
    messageText.innerText = `"${randomMessage}"`;
}

if (refreshButton) {
    refreshButton.addEventListener('click', getRandomMessage);
}
