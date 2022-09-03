const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const sci = document.querySelector('.sci');
let playerWinCount = 0, aiWinCount = 0;

const scoreTracker = document.querySelector('#scoreBoard');
const playerScore = document.createElement('div');
const aiScore = document.createElement('div');

playerScore.classList.add('playerScore');
aiScore.classList.add('aiScore');



rock.addEventListener('click', () => {
    let choice = "rock";
    playGame(choice);
});

paper.addEventListener('click', () => {
    let choice = "paper";
    playGame(choice);
});

sci.addEventListener('click', () => {
    let choice = "sci"
    playGame(choice);
});

function playGame(playerChoice){
    let aiChoice = ai();

    if(playerChoice === "rock" && aiChoice === "paper"){
        aiWinCount++;
    }else if(playerChoice === "rock" && aiChoice === "sci"){
        playerWinCount++;
    }

    if(playerChoice === "paper" && aiChoice === "sci"){
        aiWinCount++;
    }else if(playerChoice === "paper" && aiChoice === "rock"){
        playerWinCount++;
    }

    if(playerChoice === "sci" && aiChoice === "paper"){
        playerWinCount++;
    }else if(playerChoice === "sci" && aiChoice === "rock"){
        aiWinCount++;
    }

    updateScore();

    setTimeout(function (){
        checkWin();
    }, 0)

}

function updateScore(){
    playerScore.textContent = "Player Win Count: " + playerWinCount;
    aiScore.textContent = "AI Win Count: " + aiWinCount;
    scoreTracker.append(playerScore, aiScore);
}

function checkWin(){
    if(playerWinCount === 5){
        alert("You have bested the AI ! ! !");
        location.reload();
    }else if(aiWinCount === 5){
        alert("AI dominance is near... you lost.")
        location.reload();
    }
}

// 0 = rock, 1 = paper, 2 = scisscors
function ai(){
    let choice = Math.floor(Math.random() * 3);
    
    if(choice === 0){
        choice = "rock";
    }else if(choice === 1){
        choice = "paper";
    }else{
        choice = "sci"
    }

    return choice;
}
