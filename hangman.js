let words = [
    "test",
    "miami",
    "please",
    "work"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordToBeGuessed = null;

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}

function letterButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
    <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="()"
      >
        ` + letter + `
    </button>
    `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

randomWord()
letterButtons()
