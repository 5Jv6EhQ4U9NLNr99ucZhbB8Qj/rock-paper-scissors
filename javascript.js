/* 
Rock, Paper, Scissors!
Player chooses to use rock, paper, or scissors.
Computer will choose to use rock, paper, or scissors based on probability.
Script will compare player choice and Computer choice.
Display win or lose depending on player-computer choice pairs.
*/

let computerChoice;
let playerScore = 0;
let computerScore = 0;

// Generates computerChoice
function getComputerChoice() {
    let computerChoiceValue = Math.random();
    if (computerChoiceValue < 1/3) {
        return computerChoice = 'rock';
    } else if  (1/3 < computerChoiceValue && computerChoiceValue < 2/3) {
        return computerChoice = 'paper';
    } else if (computerChoiceValue > 2/3) {
        return computerChoice = 'scissors';
    }
}

// Starts a round and determines win/lose based on playerChoice and computerChoice; tracks winning through score++
function playRound(playerSelection, computerSelection) {   
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose rock! It\'s a tie!';
                    break;

                case 'paper':
                    computerScore++;
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose paper! You lose!';
                    break;

                case 'scissors':
                    playerScore++;
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose scissors! You win!';
                    break;
            }
        break;

        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    playerScore++;
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose rock! You win';
                    break;

                case 'paper':
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose paper! It\'s a tie!';
                    break;

                case 'scissors':
                    computerScore++;
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose Scissors! You lose!';
                    break;
            }
        break;

        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    computerScore++;
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose rock! You lose';
                    break;

                case 'paper':
                    playerScore++;
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose paper! You win!';
                    break;

                case 'scissors':
                    scoreBox.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    messageBox.textContent = 'Computer chose Scissors! It\'s a tie!';
                    break;
            }
        break;
    }
    
    if (playerScore === 5 | computerScore ===  5) {
        if (playerScore === 5) {
            messageBox.textContent = `You won ${playerScore} to ${computerScore}! Click to play again!`;
        }
        if (computerScore === 5) {
            messageBox.textContent = `You lost ${playerScore} to ${computerScore}! Click to play again!`;
        }
        scoreBox.textContent = '';
        playerScore = 0;
        computerScore = 0;
    }
}

// Button event listener to start game when clicked
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', event => playRound(event.target.id, getComputerChoice())));

// Div containing score/messages
const messageBox = document.querySelector('#message-box');
const scoreBox = document.querySelector('#score-box');
