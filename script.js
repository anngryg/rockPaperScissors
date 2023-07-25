let options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let randomChoice = options[(Math.floor(Math.random() * options.length))]
    return randomChoice;
};

computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound (computerSelection) {

    let playerInput = prompt("Rock, paper or scissors?");
    let playerSelection = playerInput.toLowerCase();

    if (playerSelection!=="rock" && playerSelection!=="paper" && playerSelection!=="scissors"){
        alert("Wrong input!");
        playRound(computerSelection);
    }
    else if(computerSelection===playerSelection){
        alert("It's a tie. Try again!")
    }else if (playerSelection==="rock"){
        if(computerSelection==="scissors"){
            alert("You win! Rock beats scissors!")
        }else{
            alert("You loose! Paper beats rock!")
        }
    }else if (playerSelection==="scissors"){
        if (computerSelection==="paper"){
            alert("You win! Scissors beat paper!")
        }else{
            alert("You loose! Rock beats scissors!")
        }
    }else if(playerSelection==="paper"){
        if (computerSelection==="rock"){
            alert("You win! Paper beats rock!")
        }else{
            alert("You loose! Scissors beat paper!")
        }
    }else{
        alert("Error")
    }
};

function game(){
    for (i=0; i<5; i++){
        playRound(computerSelection)}
    alert("GAME OVER")
}

game()