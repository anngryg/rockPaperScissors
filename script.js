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

function playRound(playerSelection, computerSelection){
    let result=winner(playerSelection, computerSelection);
    
    if(result=="Error"){
        return `Wrong input`
    }else if (result=="Tie"){
        return "It's a Tie!"
    }else if (result=="Player"){
        return `You win, ${playerSelection} beats ${computerSelection}!`
    }else{
        return `You lose, ${computerSelection} beats ${playerSelection}!`
    }
}



function game(){
    let computerScore=0;
    let playerScore=0;
    for(let i=0; i<5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
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