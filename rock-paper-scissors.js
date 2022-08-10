function getComputerChoice() {
  let computerChoice;
  let num = getRandomNumber();
  if (num < 33) {
    computerChoice = 'rock';
  } else if (num > 67) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

function getRandomNumber() {
  return Math.random() * 100;
}

function playRound(playerChoice, computerChoice) {
  let roundWinner;
  clearWinnerDisplay();
  showChoices(playerChoice, computerChoice);

  if (playerChoice === 'rock' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'scissors' ||
    playerChoice === 'scissors' && computerChoice == 'rock') {
      roundWinner = 'computer'
    } else if (playerChoice === computerChoice) {
      roundWinner = '';
    } else {
      roundWinner = 'player'
    }
  updateWinCount(roundWinner);
  showScore();
  
  if(checkWinner()) {
    displayWinner(roundWinner);
    playerWinCount = 0;
    computerWinCount = 0;
  }
}

function showChoices(playerChoice, computerChoice) {
  const player = document.querySelector('.player');
  player.textContent = `Player chose: ${playerChoice}`;

  const computer = document.querySelector('.computer');
  computer.textContent = `Computer chose: ${computerChoice}`;
}

function updateWinCount(winner) {
  if (winner === 'player') {
    playerWinCount++;
  } else if (winner === 'computer') {
    computerWinCount++;
  }
}

function showScore() {
  const score = document.querySelector('.score');
  score.textContent = `Player: ${playerWinCount} - Computer: ${computerWinCount}`;
}

function checkWinner() {
  if (playerWinCount === 5 || computerWinCount === 5) {
    return true;
  }
}

function displayWinner(roundWinner) {
  const winner = document.querySelector('.winner');
  roundWinner = roundWinner[0].toUpperCase() + roundWinner.substring(1);
  winner.textContent = `${roundWinner} wins! Select Rock, Paper, or Scissors to play again.`;
}

function clearWinnerDisplay() {
  const winner = document.querySelector('.winner');
  if (winner.textContent !== '') {
    winner.textContent = '';
  }
}

function initializeGame() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      playRound(e.target.className, getComputerChoice());
    });
  });
}

let playerWinCount = 0;
let computerWinCount = 0;

initializeGame();

