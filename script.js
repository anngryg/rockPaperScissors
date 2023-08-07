let rpsButton = document.querySelector('.buttons')
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let par = document.querySelector(".outcomePar");
let playerScoreSpan = document.querySelector('#playerScore');
let computerScoreSpan = document.querySelector('#computerScore');
let tiesScore = document.querySelector('#ties');

let options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let randomChoice = options[(Math.floor(Math.random() * options.length))]
    return randomChoice;
};

function winner(playerSelection, computerSelection){

    if (playerSelection!=="rock" && playerSelection!=="paper" && playerSelection!=="scissors"){
       return "Error";
    }
    if(computerSelection==playerSelection){
            return "Tie";
    }else if (playerSelection=="rock"){
        if(computerSelection=="scissors"){
            return "Player";
        }else{
            return "Computer";
        }
    }else if (playerSelection=="scissors"){
        if (computerSelection=="paper"){
            return "Player";
        }else{
            return "Computer";
        }
    }else if(playerSelection=="paper"){
        if (computerSelection=="rock"){
            return "Player";
        }else{
            return "Computer";
        }
    }else{
        return "XOXO";
    }
}

let playerScore= 0;
let computerScore=0;
let tie = 0;

function playRound(playerSelection, computerSelection){

    let result=winner(playerSelection, computerSelection);

    if (result=="Tie"){
        par.innerHTML = `It's a Tie! You both picked ${playerSelection}.`;
        tie++;
    }else if (result=="Player"){
        par.innerHTML = `You win, ${playerSelection} beats ${computerSelection}!`
        playerScore++;
    }else{
        par.innerHTML = `You lose, ${computerSelection} beats ${playerSelection}!`
        computerScore++;
    }
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    tie = 0;

}


function checkForWinner(playerScore,computerScore){
    
    if (playerScore==5){

        par.innerHTML = `You won the game!`;
        par.style.color = 'green';
        resetGame()

    }else if (computerScore==5){

        par.innerHTML = `You lost the game!`;
        par.style.color = 'red';
        resetGame()
        
    }else{
        par.style.color ='rgb(255, 255, 44)';
        
    }
    

};



const updateScores = (playerScore,computerScore)=>{
    playerScoreSpan.innerHTML = `${playerScore}`;
    computerScoreSpan.innerHTML = `${computerScore}`;
    tiesScore.innerHTML = `${tie}`;
}



rockBtn.addEventListener('click', ()=>{
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    updateScores(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
});


paperBtn.addEventListener('click', ()=>{
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    updateScores(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
});

scissorsBtn.addEventListener('click', ()=>{
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
    updateScores(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
});






/*

function game(){
    let computerScore=0;
    let playerScore=0;
    for(let i=0; i<5; i++){
        let computerSelection = getComputerChoice();
        
        let playerSelection = document.querySelectorAll(`[data-selection]`);

        playerSelection.forEach(rpsButton => {
        rpsButton.addEventListener('click', e =>{
        const selectionName = rpsButton.dataset.selection;
        makeSelection(selectionName);
        return selectionName
             })
             
        })


        console.log(playRound(playerSelection, computerSelection))
        if(winner(playerSelection,computerSelection)=="Player"){
            playerScore++;
        }else if(winner(playerSelection,computerSelection)=="Computer"){
            computerScore++;
        }
    }
    if(playerScore==computerScore){
        console.log(`It's a tie! Your score: ${playerScore}, computer score: ${computerScore}. Try again!`)
    }else if(playerScore>computerScore){
        console.log(`You won! Your score: ${playerScore}, computer score: ${computerScore} `)
    }else if(playerScore<computerScore){
        console.log(`You lose! Your score: ${playerScore}, computer score: ${computerScore} `)
    }
}
game()

*/