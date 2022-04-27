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

    lives = 5;
    //capturing letters div
    letters = document.querySelectorAll('.alpha');
    liveSpan.textContent = lives;

    selectWord = randomWord(words)
    // grabing selected word
    for (let i = 0; i < selectWord.length; i++) {
        let html = `<p class='word'>_</p>`;
        wordDiv.insertAdjacentHTML('beforeend', html);
    }

};

// check if we get complete word
function checkWord() {
    let val = true;
    for (let i = 0; i < wordDiv.children.length; i++) {
        if (wordDiv.children[i].textContent === '_') {
            val = false;
        }
    }
    return val;
}

// get mutilples matching indexes of press letter
// to the selected word
function getIndexes(letter) {
    let indexes = [];
    [...selectWord].forEach((val, i) => {
        if (val === letter) {
            let index = i;
            indexes.push(index);
        }
    });
    // console.log(indexes)
    return indexes;
}

// show notifaction
function showNotIf(message) {
    notif.classList.remove('hidden');
    notifSpan.textContent = selectWord;
    notifContent.textContent = `You ${message}`;
};

// decrease life
function decreaseLife() {
    lives--;
    liveSpan.textContent = lives;
    if (lives === 0) {
        showNotIf('lost');
    }
};

// letters event listener function
function letterPress() {
    let letter = this.textContent.toLowerCase();

    if (selectWord.includes(letter)) {
        let indexes_list = getIndexes(letter)
        indexes_list.forEach((val) => {
            wordDiv.children[val].textcontent = this.textContent;
            
        });
        if (checkWord()) showNotIf('won')
    } else {
        decreaseLife();
    }
    this.classList.add('disabled')
};

alphabet('start')

// adding listeners to letter buttons presses
letters.forEach(btn => {
    btn.addEventListener('click', letterPress)
});

// adding event listeners to reset and play again buttons
document.querySelector('.reset-btn').addEventListener('click', function(){
    window.location.reload();
    return false;;
})

document.querySelector('.notif-btn').addEventListener('click', function(){
    window.location.reload();
    return false;;
})
