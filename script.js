let computerChoice = ['Rock', 'Paper', 'Scissors'];

//function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    let random = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    return random;
}