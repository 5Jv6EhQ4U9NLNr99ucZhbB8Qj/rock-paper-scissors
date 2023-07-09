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
let score = 0;

// Runs Rock, Paper, Scissors game
game();

// Prompts for playerChoice
function getPlayerChoice() {
    playerChoice = prompt('What is your choice?');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

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
                    return alert('Computer chose rock! It\'s a tie!');
                case 'paper':
                    return alert('Computer chose paper! You lose!');
                case 'scissors':
                    score++;
                    return alert('Computer chose scissors! You win!')
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    score++;
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
                    score++;
                    return alert('Computer chose paper! You win!');
                case 'scissors':
                    return alert('Computer chose Scissors! It\'s a tie!');
            }
    }
}

// Runs playRound() 5 times; tells player final score; option to play again by running game()
function game() {
    for (let roundCounter = 0; roundCounter < 5; roundCounter++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if (confirm(`You won ${score}/5 rounds! Play again?`)) {
        return game();
    } else {
        return alert('Thanks for playing!');
    }
}