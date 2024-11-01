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
    const getHand = prompt("Choose rock, paper or scissors.", "");
    switch (getHand) {
        case "rock":
            console.log("rock");
            break;
            
        case "paper":
            console.log("paper");
            break;

        case "scissors":
            console.log("scissors");
            break;
        
        default:
            console.log("Invalid hand");
    }
}

getHumanChoice ();