//Create function named getComputerChoice
//make an array of choices (strings) of 'Rock', 'Paper', or 'Scissors'
//use Math random and Math floor JavaScript functions
//randomly return answer of 'Rock','Paper', or 'Scissors' (strings)

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choiceIndex = Math.floor(Math.random() * choices.length);
  alert(choices[choiceIndex]);
}

function playRound(playerSelection, computerSelection) {}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
