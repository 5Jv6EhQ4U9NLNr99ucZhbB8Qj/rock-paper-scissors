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
let score = 0;

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
    console.log(playerSelection, computerSelection)
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    messageBox.textContent = 'Computer chose rock! It\'s a tie!';
                    break;
                case 'paper':
                    messageBox.textContent = 'Computer chose paper! You lose!';
                    break;
                case 'scissors':
                    score++;
                    messageBox.textContent = 'Computer chose scissors! You win!';
                    break;
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    score++;
                    messageBox.textContent = 'Computer chose rock! You win';
                    break;
                case 'paper':
                    messageBox.textContent = 'Computer chose paper! It\'s a tie!';
                    break;
                case 'scissors':
                    messageBox.textContent = 'Computer chose Scissors! You lose!';
                    break;
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    messageBox.textContent = 'Computer chose rock! You lose';
                    break;
                case 'paper':
                    score++;
                    messageBox.textContent = 'Computer chose paper! You win!';
                    break;
                case 'scissors':
                    messageBox.textContent = 'Computer chose Scissors! It\'s a tie!';
                    break;
            }
    }
}

// Runs playRound() 5 times; tells player final score; option to play again by running game()
function game(playerChoice) {
    playRound(playerChoice, getComputerChoice());
}

// Button event listener to start game when clicked
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', event => game(event.target.id)));

// Div containing score/messages
const messageBox = document.querySelector('#messageBox');
