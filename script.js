function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let choice;
    choiceNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    switch (choiceNumber) {
        case 0:
            choice = "Rock";
            break;
    
        case 1:
            choice = "Paper";
            break;

        case 2:
            choice = "Scissors";
    }
    return choice;
}