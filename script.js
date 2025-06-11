const backgrounds = [
    'background.png',
    'background2.png',
    'background3.png',
    'background4.png',
    'background5.png',
    'background6.png',
    'background7.png'
];

const fanBackgrounds = [
    'fan_background.png',
    'fan_background2.png',
    'fan_background3.png',
    'fan_background4.png',
    'fan_background5.png',
    'fan_background6.png',
    'fan_background7.png'
];

// Text for each fan background
const fanBackgroundTexts = [
    'u/Neftall',
    'u/Neftall',
    'u/Jupiter1234567890',
    'u/kylgher ',
    'u/sekora2000',
    'u/dbrnx21',
    '@MikeTTF'
];

// Trivia questions
const triviaQuestions = [
    {
        question: "What city is expected to be a key setting in GTA 6?",
        answers: ["a) Los Santos", "b) Vice City", "c) Liberty City"],
        correct: "b"
    },
    {
        question: "Which game engine is rumored to power GTA 6?",
        answers: ["a) Unreal Engine", "b) RAGE Engine", "c) Unity"],
        correct: "b"
    },
    {
        question: "What year was GTA 6 first announced?",
        answers: ["a) 2020", "b) 2021", "c) 2022"],
        correct: "c"
    },
    {
        question: "Which of these features is confirmed for GTA 6?",
        answers: ["a) Open-world weather", "b) First-person only", "c) Single-player DLC"],
        correct: "a"
    },
    {
        question: "What is the rumored number of playable characters in GTA 6?",
        answers: ["a) 1", "b) 2", "c) 3"],
        correct: "b"
    },
    {
        question: "Which state is Vice City based on in GTA 6?",
        answers: ["a) California", "b) Florida", "c) New York"],
        correct: "b"
    },
    {
        question: "What type of gameplay is expected to return in GTA 6?",
        answers: ["a) Space missions", "b) Heists", "c) Underwater combat"],
        correct: "b"
    },
    {
        question: "Which company developed GTA 6?",
        answers: ["a) Ubisoft", "b) Rockstar Games", "c) EA"],
        correct: "b"
    },
    {
        question: "What is a rumored new feature for GTA 6's map?",
        answers: ["a) Dynamic time travel", "b) Time of day cycles", "c) Infinite terrain"],
        correct: "b"
    },
    {
        question: "Which genre of music is heavily featured in GTA 6 trailers?",
        answers: ["a) Rock", "b) Hip-hop", "c) Classical"],
        correct: "b"
    }
];

// Update log entries
const updateLog = [
    "June 5, 2025: Removed 'clear_message' console command.",
    "June 5, 2025: Added console command 'clear_chat' to clear chat messages.",
    "June 5, 2025: Updated chat filter to block links.",
    "June 5, 2025: Added 'More Options' button with chat access.",
    "June 5, 2025: Added basic profanity filter to community chat."
];

// Banned words for chat filter
const bannedWords = [
    "damn",
    "hell",
    "ass",
    "bitch",
    "fuck",
    "shit",
    "crap"
];

// Initialize with a random original background
let currentOriginalIndex = Math.floor(Math.random() * backgrounds.length);
let currentFanIndex = 0;
let isFanBackground = false;
document.body.style.backgroundImage = `url('${backgrounds[currentOriginalIndex]}')`;
document.querySelectorAll('.dot')[currentOriginalIndex].classList.add('active');

// Elements
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const toggleBtn = document.getElementById('toggleBackgroundBtn');
const fanTextElement = document.getElementById('fanBackgroundText');
const emojiContainer = document.getElementById('emojiContainer');
const triviaBtn = document.getElementById('triviaBtn');
const triviaPopup = document.getElementById('triviaPopup');
const closePopup = document.getElementById('closePopup');
const submitAnswer = document.getElementById('submitAnswer');
const triviaQuestion = document.getElementById('triviaQuestion');
const triviaAnswers = document.getElementById('triviaAnswers');
const triviaResult = document.getElementById('triviaResult');
const updateLogBtn = document.getElementById('updateLogBtn');
const updateLogPopup = document.getElementById('updateLogPopup');
const closeUpdateLog = document.getElementById('closeUpdateLog');
const updateLogList = document.getElementById('updateLogList');
const moreOptionsBtn = document.getElementById('moreOptionsBtn');
const moreOptionsPopup = document.getElementById('moreOptionsPopup');
const closeMoreOptions = document.getElementById('closeMoreOptions');
const chatBtn = document.getElementById('chatBtn');
const chatPopup = document.getElementById('chatPopup');
const closeChat = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');

// Track current question index
let currentQuestionIndex = 0;

function updateBackground() {
    const currentArray = isFanBackground ? fanBackgrounds : backgrounds;
    const currentIndex = isFanBackground ? currentFanIndex : currentOriginalIndex;
    document.body.style.backgroundImage = `url('${currentArray[currentIndex]}')`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');

    if (isFanBackground) {
        fanTextElement.style.display = 'block';
        fanTextElement.textContent = fanBackgroundTexts[currentFanIndex];
    } else {
        fanTextElement.style.display = 'none';
    }
}

prevBtn.addEventListener('click', () => {
    if (isFanBackground) {
        currentFanIndex = (currentFanIndex - 1 + fanBackgrounds.length) % fanBackgrounds.length;
    } else {
        currentOriginalIndex = (currentOriginalIndex - 1 + backgrounds.length) % backgrounds.length;
    }
    updateBackground();
});

nextBtn.addEventListener('click', () => {
    if (isFanBackground) {
        currentFanIndex = (currentFanIndex + 1) % fanBackgrounds.length;
    } else {
        currentOriginalIndex = (currentOriginalIndex + 1) % backgrounds.length;
    }
    updateBackground();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        if (isFanBackground) {
            currentFanIndex = index;
        } else {
            currentOriginalIndex = index;
        }
        updateBackground();
    });
});

toggleBtn.addEventListener('click', () => {
    isFanBackground = !isFanBackground;
    if (isFanBackground) {
        currentFanIndex = 0;
        toggleBtn.textContent = 'Revert to Original Backgrounds';
    } else {
        toggleBtn.textContent = 'Toggle Fan Background';
    }
    updateBackground();
});

function createFallingEmojis() {
    const emoji = '🎉';
    const numberOfEmojis = 50;

    for (let i = 0; i < numberOfEmojis; i++) {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('falling-emoji');
        emojiElement.textContent = emoji;

        emojiElement.style.left = `${Math.random() * 100}vw`;
        emojiElement.style.animationDelay = `${Math.random() * 3}s`;

        emojiContainer.appendChild(emojiElement);
    }
}

function stopFallingEmojis() {
    emojiContainer.innerHTML = '';
}

let isEmojiFalling = false;

window.end_countdown = function() {
    isEmojiFalling = !isEmojiFalling;
    if (isEmojiFalling) {
        createFallingEmojis();
        console.log('Emoji animation started!');
    } else {
        stopFallingEmojis();
        console.log('Emoji animation stopped!');
    }
};

function setDailyTrivia() {
    const questionData = triviaQuestions[currentQuestionIndex];

    triviaQuestion.textContent = questionData.question;
    triviaAnswers.innerHTML = '';
    questionData.answers.forEach(answer => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${answer.charAt(0)}"> ${answer}<br>`;
        triviaAnswers.appendChild(label);
    });
}

window.change_question = function() {
    currentQuestionIndex = (currentQuestionIndex + 1) % triviaQuestions.length;
    console.log('Question changed to:', triviaQuestions[currentQuestionIndex].question);
    if (triviaPopup.style.display === 'flex') {
        setDailyTrivia();
    }
};

triviaBtn.addEventListener('click', () => {
    setDailyTrivia();
    triviaPopup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    triviaPopup.style.display = 'none';
    document.getElementById('triviaResult').textContent = '';
    const answers = document.getElementsByName('answer');
    answers.forEach(answer => answer.checked = false);
});

submitAnswer.addEventListener('click', () => {
    const answers = document.getElementsByName('answer');
    let selectedAnswer = '';
    answers.forEach(answer => {
        if (answer.checked) selectedAnswer = answer.value;
    });

    const result = document.getElementById('triviaResult');
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        result.textContent = 'Correct! ' + currentQuestion.question.split('?')[0] + ' is ' + currentQuestion.answers.find(a => a.charAt(0) === currentQuestion.correct).slice(3) + '.';
        result.style.color = 'green';
    } else if (selectedAnswer) {
        result.textContent = 'Wrong! The correct answer is ' + currentQuestion.answers.find(a => a.charAt(0) === currentQuestion.correct).slice(3) + '.';
        result.style.color = 'red';
    } else {
        result.textContent = 'Please select an answer!';
        result.style.color = 'yellow';
    }
});

updateLogBtn.addEventListener('click', () => {
    updateLogPopup.style.display = 'block';
    updateLogList.innerHTML = '';
    updateLog.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        updateLogList.appendChild(li);
    });
});

closeUpdateLog.addEventListener('click', () => {
    updateLogPopup.style.display = 'none';
});

moreOptionsBtn.addEventListener('click', () => {
    moreOptionsPopup.style.display = 'block';
});

closeMoreOptions.addEventListener('click', () => {
    moreOptionsPopup.style.display = 'none';
});

// Chat functionality
chatBtn.addEventListener('click', () => {
    chatPopup.style.display = 'block';
    loadChatMessages();
    moreOptionsPopup.style.display = 'none';
});

function loadChatMessages() {
    if (!chatMessages) {
        console.error('chatMessages element not found.');
        return;
    }
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    chatMessages.innerHTML = '';
    messages.forEach(msg => {
        const p = document.createElement('p');
        p.textContent = `[${new Date(msg.timestamp).toLocaleTimeString()}] ${msg.text}`;
        chatMessages.appendChild(p);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function containsBannedContent(text) {
    // Check for banned words
    const words = text.toLowerCase().split(/\s+/);
    const hasBannedWord = bannedWords.some(banned => words.includes(banned));

    // Check for links using a simple regex
    const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([^\s]+\.(com|org|net|co|io|me))/i;
    const hasLink = urlPattern.test(text);

    return hasBannedWord || hasLink;
}

function saveChatMessage(text) {
    if (!chatMessages) {
        console.error('chatMessages element not found.');
        return;
    }

    if (containsBannedContent(text)) {
        const p = document.createElement('p');
        p.textContent = `[${new Date().toLocaleTimeString()}] [System] Message blocked due to profanity or links.`;
        p.style.color = 'red';
        chatMessages.appendChild(p);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return;
    }

    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push({ text, timestamp: Date.now() });
    if (messages.length > 50) messages.shift();
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    loadChatMessages();
}

closeChat.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});

sendChat.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        saveChatMessage(message);
        chatInput.value = '';
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChat.click();
    }
});

setInterval(loadChatMessages, 2000);

// Add console command to clear chat
window.clear_chat = function() {
    if (!chatMessages) {
        console.error('chatMessages element not found.');
        return;
    }
    chatMessages.innerHTML = '';
    localStorage.removeItem('chatMessages');
    console.log('Chat messages cleared.');
};

// Countdown and Notification logic
const countdownDate = new Date('May 26, 2026 00:00:00').getTime();
let notificationSent = false;
let celebrationTriggered = false;

if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
        } else {
            console.log("Notification permission denied.");
        }
    });
}

const updateCountdown = () => {
    const now = new Date();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const weeks = Math.round(days / 7);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('weeks').textContent = `${weeks} Weeks`;

    if (weeks < 50 && "Notification" in window && Notification.permission === "granted" && !notificationSent) {
        new Notification("GTA 6 Countdown", {
            body: "Less than 50 weeks until GTA 6 release!",
            icon: "./icon.png"
        });
        notificationSent = true;
        console.log("Notification sent.");
    }

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h2>GTA 6 is Out Now!</h2>';
        document.getElementById('weeks').textContent = '0 Weeks';

        if (!celebrationTriggered) {
            createFallingEmojis();
            celebrationTriggered = true;
            isEmojiFalling = true;
        }
    }
};

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
