let choice;
let playerSelection;
let result;

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
    return choice;
}

getComputerChoice(0, 2);

function getPlayerChoice(){
    playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
    }

playerSelection = "paper";

function playRound(playerChoice = playerSelection, computerChoice = choice){
    getPlayerChoice();

    playerSelection = playerSelection.toLowerCase();
    if(playerChoice === "rock" && computerChoice === "scissors"){
        return result = "You won.";
    } else if(playerChoice === "rock" && computerChoice === "paper"){
        return result = "You lost.";
    }
    
    if(playerChoice === "paper" && computerChoice === "rock"){
        return result = "You won.";
    } else if(playerChoice === "paper" && computerChoice === "scissors"){
       return result = "You lost.";
    }

    if(playerChoice === "scissors" && computerChoice === "paper"){
        return result = "You won.";
    } else if(playerChoice === "scissors" && computerChoice === "rock"){
       return result = "You lost.";
    }

    if(playerChoice === computerChoice) {
        return result = "Thats a draw.";
    }
}

