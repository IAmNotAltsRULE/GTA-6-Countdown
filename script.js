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
    "June 11, 2025: Refined mobile responsiveness with additional media queries.",
    "June 11, 2025: Optimized website for mobile responsiveness.",
    "June 5, 2025: Removed 'clear_message' console command.",
    "June 5, 2025: Added console command 'clear_chat' to clear chat messages.",
    "June 5, 2025: Updated chat filter to block links."
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
const chatMessages = document
