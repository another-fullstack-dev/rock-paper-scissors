let choice;
let playerSelection;
let computerChoice;
let playerChoice;
let result;
let buttonClicked;

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

    if(playerChoice === "rock" && computerChoice === "scissors"){
        return console.log(result = "You won.");
    } else if(playerChoice === "rock" && computerChoice === "paper"){
        return console.log(result = "You lost.");
    }
    
    if(playerChoice === "paper" && computerChoice === "rock"){
        return console.log(result = "You won.");
    } else if(playerChoice === "paper" && computerChoice === "scissors"){
       return console.log(result = "You lost.");
    }

    if(playerChoice === "scissors" && computerChoice === "paper"){
        return console.log(result = "You won.");
    } else if(playerChoice === "scissors" && computerChoice === "rock"){
       return console.log( result = "You lost.");
    }

    if(playerChoice === computerChoice) {
        return console.log(result = "Thats a draw.");
    }
}

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);