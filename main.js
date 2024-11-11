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



function playRound(humanChoice, computerChoice) {
   if (humanChoice === computerChoice ) {
        resultText.textContent = "It's a tie";

   } else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultText.textContent = "You've won";
        humanScore++;

   } else if (humanChoice === "rock" && computerChoice === "paper") {
        resultText.textContent = "You've lost";
        computerScore++;

   } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultText.textContent = "You've won";
        humanScore++;

   } else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultText.textContent = "You've lost";
        computerScore++;

   } else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultText.textContent = "You've won";
        humanScore++;

   } else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultText.textContent = "You've lost";        computerScore++;   
   }

   if (humanScore === 5) {
    alert("You won 5 matches");
    humanScore = 0;
    computerScore = 0;

   } else if (computerScore === 5) {
    alert("You lost 5 matches");
    humanScore = 0;
    computerScore = 0;
}

}

let humanScore = 0;
let computerScore = 0;

// function playGame (numberOfMatches) {
//     for (i = 0; i < numberOfMatches; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection); 
//     }
//     console.log("Your score is: " + humanScore);
//     console.log("The computer score is: " + computerScore);
// }

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultText = document.querySelector("#result");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    showScore();
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    showScore();
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    showScore();
});

const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");

function showScore() {
    humanScoreDisplay.textContent = "Your score: " + humanScore;
    computerScoreDisplay.textContent = "Computer score: " + computerScore;
}









