// Guess the words using single words as input
// get the number of lives
// get a reset button
// pop up the win or lose 
// each worng guess will delete the alphabet form the list and decrease a life

// capturing the HTML Classes
const letterDiv = document.querySelector('.letter-div');
const wordDiv = document.querySelector('.word-div');
const liveSpan = document.querySelector('.lives');
const resetButton = document.querySelector('.reset-btn');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const playAgain = document.querySelector('.notif-btn')

let letters;

let lives = 5

const words = [
    'please',
    'let',
    'this',
    'work'
]
// get random word for words list

function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// random word will be chosen on every start and reset
let selectWord;

function alphabet(gameState) {
    wordDiv.innterHTML = '';
    if (gameState === 'start') {
        // putting letters in html
        for (const i of 'abcdefghijklmnopqrstuvwxyz') {
            let html = `<button class="alpha">${i.toUpperCase()}</button>`;
            letterDiv.insertAdjacentHTML('beforeend', html);
        }
    } else if (gameState === 'reset') {
        letters.forEach(btn => {
            btn.classlist.remove('disabled');
        });
        notif.classList.add('hidden');
    }
};

// capturing letters div

letters = document.querySelectorAll('.alpha');
liveSpan.textContent = lives;

selectWord = randomWord(words)
// grabing selected word
for (let i = 0; i < selectWord.length; i++) {
    let html = `<p class='word'>_</p>`;
    wordDiv.insertAdjacentHTML('beforeend', html);
}

alphabet('start')