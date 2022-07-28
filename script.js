// 0 = rock, 1 = paper, 2 = scisscors
function ai(){
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function player(){
    let playerInput = window.prompt("Enter rock, paper, or scisscors to play: ");
    let num;

    if(playerInput == "rock"){
        num = 0;
    }else if(playerInput == "paper"){
        num = 1;
    }else if(playerInput == "scisscors"){
        num = 2;
    }else{
        alert("Please re-enter your choice.");
        playerInput = 0;
        return player();
    }

    return num;
}

// 3 = win, 4 = lose, 5 = draw
function calculate(playerChoice, aiChoice){
    let result;

    if(playerChoice == 0 && aiChoice == 1){
        result = "Your choice: Rock \n AI choice: Paper \n Result: You Lose! Paper beats Rock.";
        aiWinCount++;
    }else if(playerChoice == 0 && aiChoice == 2){
        result = "Your choice: Rock \n AI choice: Paper \n Result: You Win! Rock beats Scisscors.";
        playerWinCount++;
    }else if(playerChoice == 0 && aiChoice == 0){
        result = "Your choice: Rock \n AI choice: Rock \n Result: Draw! Both choose Rock.";
    }

    if(playerChoice == 1 && aiChoice == 1){
        result = "Your choice: Paper \n AI choice: Paper \n Result: Draw! Both choose Paper.";
    }else if(playerChoice == 1 && aiChoice == 2){
        result = "Your choice: Paper \n AI choice: Scisscors \n Result: You Lose! Scisscors beats Paper.";
        aiWinCount++;
    }else if(playerChoice == 1 && aiChoice == 0){
        result = "Your choice: Paper \n AI choice: Rock \n Result: You Win! Paper beats Rock.";
        playerWinCount++;
    }

    if(playerChoice == 2 && aiChoice == 1){
        result = "Your choice: Scisscors \n AI choice: Paper \n Result: You Win! Scisscors beats Paper.";
        playerWinCount++;
    }else if(playerChoice == 2 && aiChoice == 2){
        result = "Your choice: Scisscors \n AI choice: Scisscors \n Result: Draw! Both choose Scisscors.";
    }else if(playerChoice == 2 && aiChoice == 0){
        result = "Your choice: Scisscors \n AI choice: Rock \n Result: You Lose! Rock beats Scisscors.";
        aiWinCount++;
    }

    return result;
}

// global tracker
let playerWinCount = 0, aiWinCount = 0;

function playGame(){
    let gameResult;

    for(let i = 0; i < 5; i++){
        let result = calculate(player(), ai());
        alert(result);
    }

    if(playerWinCount > aiWinCount){
        gameResult = "You are the victor! You won " + playerWinCount + " and the AI won " + aiWinCount + ".";
    }else if(playerWinCount == aiWinCount){
        gameResult = "Draw! Both you and the ai won equal amount of games at " + playerWinCount + ".";
    }else{
        gameResult = "You are the loser! You won " + playerWinCount + " and the AI won " + aiWinCount + ".";
    }

    return gameResult;
}

alert(playGame());