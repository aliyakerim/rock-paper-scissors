

let result = prompt("rock paper or scisoor?");


function computerPlay() {
    const choice = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('You tie!');
    } else if (playerSelection == "rock" && computerSelection =="paper" ||
    playerSelection == "paper" && computerSelection =="scissor" ||
    playerSelection == "scissor" && computerSelection =="rock") {
        console.log("You snoose, you loose");
    } else if (playerSelection == "scissor" && computerSelection =="paper" ||
    playerSelection == "rock" && computerSelection =="scissor" ||
    playerSelection == "paper" && computerSelection =="rock") {
        console.log("Smooth like honey!");
    }
}

let playerSelection = "rock";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
  

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
