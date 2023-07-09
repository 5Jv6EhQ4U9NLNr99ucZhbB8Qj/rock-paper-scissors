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

function getComputerChoice() {
    let computerChoiceValue = Math.random();
    if (computerChoiceValue < 1/3) {
        return computerChoice = 'Rock';
    } else if  (1/3 < computerChoiceValue < 2/3) {
        return computerChoice = 'Paper';
    } else if (computerChoiceValue > 2/3) {
        return computerChoice = 'Scissors';
    }
}