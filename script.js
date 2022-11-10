let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    let humanDif;
    let computerDif;
    
    if ((targetGuess - humanGuess) >= 0) {
        humanDif = targetGuess - humanGuess;
    } else {
        humanDif = humanGuess - targetGuess;
    }

    if ((targetGuess - computerGuess) >= 0) {
        computerDif = targetGuess - computerGuess;
    } else {
        computerDif = computerGuess - targetGuess;
    }

    if (humanDif <= computerDif) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}