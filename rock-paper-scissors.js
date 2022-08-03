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

function getPlayerChoice() {
  return prompt('Please enter \'Rock\', \'Paper\', or \'Scissors\'.').toLowerCase();
}

function playRound(playerChoice, computerChoice) {
  let winner;

  if (playerChoice === 'rock' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'scissors' ||
    playerChoice === 'scissors' && computerChoice == 'rock') {
      winner = 'computer'
    } else if (playerChoice === computerChoice) {
      return;
    } else {
      winner = 'player'
    }
  return winner;
}

function showChoices(playerChoice, computerChoice) {
  console.log(`Player chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
}

function showRoundWinner(winner, playerChoice, computerChoice) {
  if (winner === 'player') {
    console.log(`${playerChoice} beats ${computerChoice}!`);
  } else if (winner === 'computer') {
    console.log(`${computerChoice} beats ${playerChoice}!`)
  } else {
    console.log('Tie');
  }
}

function showGameWinner(playerWins, computerWins) {
  if (playerWins > computerWins) {
    console.log('\n\nlayer wins!');
  } else if (playerWins < computerWins) {
    console.log('\n\nComputer wins!');
  } else {
    console.log('\n\nPlayer and Computer tied!');
  }
}

function game() {
  let winner;
  let playerWinCount = 0;
  let computerWinCount = 0;
  let playerChoice;
  let computerChoice;

  for (i = 0; i < 5; i++) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    showChoices(playerChoice, computerChoice);
    let winner = playRound(playerChoice, computerChoice);
    showRoundWinner(winner, playerChoice, computerChoice);

    if (winner === 'player') {
      playerWinCount++;
    } else if (winner === 'computer') {
      computerWinCount++;
    }
  }
  showGameWinner(playerWinCount, computerWinCount);
}
