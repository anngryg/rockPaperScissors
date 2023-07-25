let options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let randomChoice = options[(Math.floor(Math.random() * options.length))]
    return randomChoice;
};

computerSelection = getComputerChoice();
console.log(computerSelection);

let playerInput = prompt("Rock, paper or scissors?");
let playerSelection = playerInput.toLowerCase();

function game(playerSelection,computerSelection) {
    if (playerSelection!=="rock" && playerSelection!=="paper" && playerSelection!=="scissors"){
        alert("Wrong input!")
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
    }else if(computerSelection==="paper"){
        if (computerSelection==="rock"){
            alert("You win! Paper beats rock!")
        }else{
            alert("You loose! Scissors beat paper!")
        }
    }else{
        alert("go home")
    }
};

game(playerSelection,computerSelection)