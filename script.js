let choice;
let playerSelection;
let computerChoice;
let playerChoice;
let result;
let buttonClicked;
let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);                                                       // this block of code
    const maxFloored = Math.floor(max);                                                     // is copypasted from
    choiceNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)     // mdn web docs
    switch (choiceNumber) {
        case 0:
            choice = "rock";
            break;
    
        case 1:
            choice = "paper";
            break;

        case 2:
            choice = "scissors";
    }
    return computerChoice = choice;
}

function getPlayerChoice(btn){
    return playerChoice = btn.toLowerCase();
    }

function playRound(){
    getPlayerChoice(this.textContent);
    getComputerChoice(0, 2);

    if (playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore){
            return resultBox.textContent = `You have won the game! Your score is ${playerScore} vs ${computerScore}`
        }
        return resultBox.textContent = `You have lost the game! Your score is ${playerScore} vs ${computerScore}`
    }

    if(playerChoice === "rock" && computerChoice === "scissors"){
        ++playerScore;
        return resultBox.textContent = `You won. Your score is ${playerScore} vs ${computerScore}`;
    } else if(playerChoice === "rock" && computerChoice === "paper"){
        ++computerScore;
        return resultBox.textContent = `You lost. Your score is ${playerScore} vs ${computerScore}`;
    }
    
    if(playerChoice === "paper" && computerChoice === "rock"){
        ++playerScore;
        return resultBox.textContent = `You won. Your score is ${playerScore} vs ${computerScore}`;
    } else if(playerChoice === "paper" && computerChoice === "scissors"){
        ++computerScore;
        return resultBox.textContent = `You lost. Your score is ${playerScore} vs ${computerScore}`;
    }

    if(playerChoice === "scissors" && computerChoice === "paper"){
        ++playerScore;
        return resultBox.textContent = `You won. Your score is ${playerScore} vs ${computerScore}`;
    } else if(playerChoice === "scissors" && computerChoice === "rock"){
        ++computerScore;
        return resultBox.textContent = `You lost. Your score is ${playerScore} vs ${computerScore}`;
    }

    if(playerChoice === computerChoice) {
        return resultBox.textContent = `Thats a draw. Scores remain unchanged. Your score is ${playerScore} vs ${computerScore}`;
    }
}

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

const resultBox = document.querySelector(".result-box");
