//function to randomly return either rock, paper or scissors
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

//function to play single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "TIE";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "WIN";
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
        return "LOSE";
    }
}

//function to play five rounds
// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Rock, Paper or Scissors?", "");
//         const computerSelection = computerPlay();
//         console.log("Computer:", computerSelection);
//         console.log("Player:", playerSelection);
//         console.log(playRound(playerSelection, computerSelection));
//     }

//     if (playerScore > computerScore) {
//         console.log("WINNER!");
//     } else {
//         console.log("LOSER!");
//     }
// }

// game();

let computerSelection = "";
let playerSelection = "";

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playerSelection = button.id;
        computerSelection = computerPlay();

        const result = document.getElementById('result');
        const playerScr = document.getElementById('playerScr');
        const computerScr = document.getElementById('computerScr');

        if (playRound(playerSelection, computerSelection) == "WIN") {
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;;
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) == "LOSE") {
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++
        } else if (playRound(playerSelection, computerSelection) == "TIE") {
            result.textContent = `It's a tie! you both chose ${computerSelection}`;
        }

        playerScr.textContent = `Player score: ${playerScore}`;
        computerScr.textContent = `Computer score: ${computerScore}`;

        const winner = document.getElementById('winner');


        if (playerScore === 5) {
            winner.textContent = "You won the game! Reload the page to play again";
            disabledButtons();
        } 

        if (computerScore === 5) {
            winner.textContent = "You lost the game! Reload the page to play again";
            disabledButtons();
        }
    })
});

//function to disable the buttons
function disabledButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    })
}