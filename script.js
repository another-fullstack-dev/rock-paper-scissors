function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let choice;
    choiceNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
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

function playRound(playerChoice, computerChoice = getComputerChoice(0, 2)){
    playerChoice.toLowerCase();
    let result;

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