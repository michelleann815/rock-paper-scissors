//Create function named getComputerChoice
//make an array of choices (strings) of 'Rock', 'Paper', or 'Scissors'
//use Math random and Math floor JavaScript functions
//randomly return answer of 'Rock','Paper', or 'Scissors' (strings)

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choiceIndex = Math.floor(Math.random() * choices.length);
  alert(choices[choiceIndex]);
}

const computerSelection = getComputerChoice();

//if playerSelection is equal to computerSelection, alert tie
//if playerSelection is  rock and computerSelection is paper, alert you lose
//if playerSelection is paper and computerSelection is scissors, alert you lose
//if playerSelection is scissors and computerSelection is rock, alert you lose
//all else, alert you win
const playerSelection = "rock";



function playRound(playerSelection, computerSelection) {}
console.log(playRound(playerSelection, computerSelection));
