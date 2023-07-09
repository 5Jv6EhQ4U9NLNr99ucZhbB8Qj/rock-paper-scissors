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

playRound(getPlayerChoice(), getComputerChoice());

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

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return alert('Computer chose rock! It\'s a tie!');
                case 'paper':
                    return alert('Computer chose paper! You lose!');
                case 'scissors':
                    return alert('Computer chose scissors! You win!')
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return alert('Computer chose rock! You win');
                case 'paper':
                    return alert('Computer chose paper! It\'s a tie!');
                case 'scissors':
                    return alert('Computer chose Scissors! You lose!')
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return alert('Computer chose rock! You lose');
                case 'paper':
                    return alert('Computer chose paper! You win!');
                case 'scissors':
                    return alert('Computer chose Scissors! It\'s a tie!');
            }
    }
}