const MAX_ROUND = 5;

let round = 1;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return choice === 0 ? 'rock' : choice === 1 ? 'paper' : choice === 2 ? 'scissors' : null;
}

function getHumanChoice() {
    let choice = "";
    while (true) {
        choice = prompt("Choose [rock, paper, scissors]: ").toLowerCase();
        if (choice !== 'rock' && choice !== 'scissors' && choice !== 'paper') {
            console.log("Please don't be dumb and try again!");
            continue;
        }
        return choice;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a Tie!");
        return;
    }

    const winningCondition = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper',
    }

    if (winningCondition[humanChoice] === computerChoice) {
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
        console.log(`${'='.repeat(20)} ROUND ${round} ${'='.repeat(20)}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Human select: ${humanSelection}`);
        console.log(`Computer select: ${computerSelection}`);

        playRound(humanSelection, computerSelection);

        round++;
        console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore === computerScore) {
        console.log("No one wins!");
    } else if (humanScore > computerScore) {
        console.log("Human wins!");
    } else {
        console.log("Computer wins! Suck it human.");
    }
}

playGame();

