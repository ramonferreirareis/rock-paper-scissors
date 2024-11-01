const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice () {
    const getHand = Math.floor(Math.random() * 3);
    switch (getHand) {
        case rock:
            return "rock";
        
        case paper:
            return "paper";
        
        case scissors:
            return "scissors";

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

function playRound(humanChoice, computerChoice) {
   if (humanChoice === computerChoice ) {
        console.log("It's a tie");

   } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You've won");
        humanScore++;

   } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You've lost");
        computerScore++;

   } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You've won");
        humanScore++;

   } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You've lost");
        computerScore++;

   } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You've won");
        humanScore++;

   } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You'lost");
        computerScore++;
        
   }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); 








