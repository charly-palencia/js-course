window.addEventListener('load', function() {
  const max = 100;
  const min = 1;

  //1. Generate a random number between 1 and 100.
  let randonNumber = Math.floor(Math.random() * Math.floor(max)) + min;
  //2. Record the turn number the player is on. Start it on 1.
  let turnNumber = 1;
  let previousGuesses = [];

  //get the guessed number input node
  const guessInput = document.querySelector('#guessInput');
  const submitButton = document.querySelector('#guessSubmit');

  //get output elements
  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  function disableGame() {
    guessSubmit.disabled=true;
    guessInput.disabled=true;
  }

  function resetGame(){
    turnNumber = 0;
    guessSubmit.disabled=false;
    guessInput.disabled=false;
    previousGuesses = [];
    const elements = document.querySelectorAll('p');
    elements.forEach(function(element){
      element.textContent = "";
    });
    document.body.removeChild(this);
    lastResult.style.backgroundColor = 'white';
  }

  function printResults(resultText, resultColor, guessText){
    lowOrHi.textContent= guessText;
    lastResult.style.backgroundColor = resultColor;
    lastResult.textContent= resultText;
  }

  function addResetButton(){
    const resetButton = document.createElement('button');
    resetButton.textContent = "Start new game";
    resetButton.addEventListener('click', resetGame);
    document.body.appendChild(resetButton);
  }

  function checkGuess(){
    const guessValue = Number(guessInput.value);
    guessInput.value = "";
    previousGuesses.push(guessValue);
    guesses.textContent = previousGuesses.join(',');
    let guessText = '';
    let resultColor = 'red';
    let resultText = 'Wrong!';

    if(guessValue === randonNumber){
      resultText = `Congrats ${guessValue} is the number`;
      resultColor = 'green';
      disableGame();
      addResetButton();
    }

    if(guessValue < randonNumber){
      guessText = `is greater than ${guessValue}`;
    }else{
      guessText = `is lower than ${guessValue}`;
    }

    if(turnNumber === 10){
      resultText = 'Game over!';
      guessText = '';
      disableGame();
      addResetButton();
    }

    turnNumber+=1;
    printResults(resultText, resultColor, guessText);
  }

  //add event listener for button
  submitButton.addEventListener('click', checkGuess);
}, false);
