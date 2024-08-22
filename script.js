const ranNum = parseInt(Math.random() * 100 + 1);

const guesses = document.querySelector('#guess');
const submit = document.querySelector('#subt');
const guessField = document.querySelector('#guessField');
const guessNo = document.querySelector('.guesses');
const remResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        const guess = parseInt(guessField.value);
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert("Please Enter a number between 1 and 100")
    }
    else {
        if (guesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over`)
            endGame()
        }
        else {
            displayGuess()
            checkGuess()
        }
    }
}

function checkGuess(guess){
    if(guess === ranNum){
        displayMessage(`Good`);
        endGame();
    }
    else if(guess > ranNum){
        displayMessage("LOWWW")
    }
    else if(guess < ranNum){
        displayMessage("HIGHHH")
    }
}
function displayGuess(guess){
    guessField.value = ''
    guesses.innerHTML += `${guess}`
    numGuess++;
    remResult.innerHTML = `${11 - guess}`
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}
function endGame(){

}
function newGame(){

}