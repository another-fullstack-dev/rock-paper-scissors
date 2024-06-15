// im sorry

/*
*  This is by far my worst project ever.
*  Everything about it is ugly.
*  While its true that such results are expected from someone
*  who is just starting out, i still can't help but feel bad
*  about it.
*  At first i came here to see how can i slightly improve it
*  by applying newer knowledge i learned but now coming back
*  to it i can't do a thing. This whole code needs to be
*  killed with fire.
*  It's probably better and easier to rewrite this from scratch,
*  but i don't care.
*
*  Thanks for coming to my TED talk.
*  - 06.15.2024
*/

// bro thinks he is writing c++
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

    // im not particularly smart nor do i pretend to be. this works and thats all that matters. *copium*
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
