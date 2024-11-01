const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice () {
    const getHand = Math.floor(Math.random() * 3);
    switch (getHand) {
        case rock:
            console.log("rock");
            break;
        
        case paper:
            console.log("paper");
            break;
        
        case scissors:
            console.log("scissors");
            break;
    }
}

function getHumanChoice () {
    const getHand = prompt("Choose rock, paper or scissors.", "").toLowerCase();
    switch (getHand) {
        case "rock":
            return "rock";

        case "paper":
            return "paper";

        case "scissors":
            return "scissors";
        
        default:
            console.log("Invalid hand");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    
}








