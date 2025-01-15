const MAX_ROUND = 5;

let round = 1;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
        default:
            break;
    }
}

function getHumanChoice() {
    let choice = "";
    while (true) {
        choice = prompt("Choose [rock, paper, scissors]: ")
        switch (choice) {
            case 'rock':
                return choice;
            case 'scissors':
                return choice;
            case 'paper':
                return choice;
            default:
                console.log("Please don't be dumb and try again!");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a Tie!");
        return;
    }
    else if (humanChoice == 'rock' && computerChoice != 'paper') {
        humanScore++;
        console.log("Human Wins!");
        return;
    } else if (humanChoice == 'paper' && computerChoice != 'scissors') {
        humanScore++;
        console.log("Human Wins!");
        return;
    } else if (humanChoice == 'scissors' && computerChoice != 'rock') {
        humanScore++;
        console.log("Human Wins!");
        return;
    } else {
        computerScore++;
        console.log("Computer Wins!");
        return;
    }
}

function playGame() {
    while (round <= MAX_ROUND) {
        console.log("Round " + round)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("Human select: " + humanSelection);
        console.log("Computer select: " + computerSelection);

        playRound(humanSelection, computerSelection);

        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
        round++;
    }

    if (humanScore == computerScore) {
        console.log("No one wins!");
    } else if (humanScore > computerScore) {
        console.log("Human wins!");
    } else {
        console.log("Computer wins! Suck it human.");
    }
}

playGame();

