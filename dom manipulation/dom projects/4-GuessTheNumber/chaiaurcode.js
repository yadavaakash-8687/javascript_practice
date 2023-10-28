const randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum)
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('#gusses');
const remaining = document.querySelector('.lastResult');
const lowerHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const para = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess() {}
