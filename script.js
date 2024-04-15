let choice;
let playerSelection;
let result;

function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
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

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) { // i should keep i mind that indexing begins from zero next time
        playRound();
        if(result === "You won.") {
            ++playerScore;
            console.log(`You have won the round. Your score is ${playerScore} against ${computerScore}`);
        } else if(result === "You lost."){
            ++computerScore;
            console.log(`You have lost the round. Your score is ${playerScore} against ${computerScore}`);
        } else if(result === "Thats a draw."){
            console.log(`This is a draw. Scores remain unchanged. Your score is ${playerScore} against ${computerScore} `)
        }

        if(playerScore > computerScore && i == 4){
            console.log(`You have won the game! Your score was ${playerScore} against ${computerScore}!`);
        } else if(playerScore < computerScore && i == 4){
            console.log(`You have lost the game! Your score was ${playerScore} against ${computerScore}!`);
        } else if(playerScore === computerScore && i == 4){
            console.log(`Game ended with a draw! Your score was ${playerScore} against ${computerScore}!`)
        }
    }
}