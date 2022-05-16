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

let playerScore = "";
let computerScore = "";

//function to play single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return "You win!";
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
        computerScore++;
        return "You lose!";
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
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        
    })
});




