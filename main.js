const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice () {
    const getHand = Math.floor(Math.random() * 3);
    switch (getHand) {
        case rock:
            console.log("You got rock");
            break;
        
        case paper:
            console.log("You got paper");
            break;
        
        case scissors:
            console.log("You got scissors");
            break;
    }
}

getComputerChoice();