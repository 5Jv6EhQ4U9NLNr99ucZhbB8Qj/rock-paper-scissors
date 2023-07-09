/* 
Rock, Paper, Scissors! Logic
Player chooses to use rock, paper, or scissors.
Computer will choose to use rock, paper, or scissors. Probability should be equal across the three options.
Script will compare player choice and Computer choice.
Display win or lose depending on player-computer choice pairs.
Choice to play again.
Possibly keep track of score.
*/
let computerChoice;
let playerChoice;

startGame(getPlayerChoice(), getComputerChoice());

function getPlayerChoice() {
    playerChoice = prompt('What is your choice?');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

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

function startGame(playerSelection, computerSelection) {
}