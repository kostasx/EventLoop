SUBMIT: https://stackoverflow.com/questions/28737679/rock-paper-scissor-javascript-using-arrays-beginner

SUBMIT: https://stackoverflow.com/questions/33049702/rock-paper-scissors-javascript-using-matrix

Build a Rock, Paper, Scissors Game - JavaScript Tutorial
https://www.youtube.com/watch?v=HcppIYQLTxY

3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!)
https://www.youtube.com/watch?v=RwFeg0cEZvQ

https://medium.com/@dubbsong/rockpaperscissors-js-8kyu-23-faea43895af9

STUDENT CODE:

```js
const computerChoiceDisplay = document.getElementById("computer-choice-display");
const playerChoiceDisplay = document.getElementById("player-choice-display");
const resultDisplay = document.getElementById("result");
const possibleChoices= document.querySelectorAll("button");
let playerChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerChoice= e.target.id
    playerChoiceDisplay.innerHTML= playerChoice

    generateComputerChoice()
    getResult()
}))
     
function generateComputerChoice() {
   const randomNumber= Math.floor(Math.random() * possibleChoices.length)+1
   if(randomNumber === 1) {
       computerChoice ="rock";
   } 
   if(randomNumber === 2) {
       computerChoice = "scissors";
   }
   if(randomNumber ===3) {
       computerChoice = "paper";
   }
   computerChoiceDisplay.innerHTML= computerChoice

}
function getResult() {
    if (computerChoice === playerChoice) {
        result= "it is a draw"
    }
    if (computerChoice ==="rock" && playerChoice ==="paper") {
        result= "You win"
    }
    if (computerChoice==="rock" && playerChoice =="scissors") {
        result = "You lost"
    }
    if (computerChoice ==="paper" && playerChoice ==="scissors") {
        result= "You win"
    }
    if (computerChoice==="paper" && playerChoice =="rock") {
        result = "You win"
    }
    if (computerChoice ==="scissors" && playerChoice ==="paper") {
            result= "You win"
    }
    if (computerChoice==="scissors" && playerChoice =="rock") {
            result = "You lost"
    }
     
    resultDisplay.innerHTML = result
}
```

```js
const tolowerUcFirst = v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()

const answer = prompt(
  'Do you want to play Rock Paper Scissors? Type yes or no!'
)

if (answer && ['Y', 'YES'].includes(answer.toUpperCase())) {
  let board = ['ROCK', 'PAPER', 'SCISSORS']
  let answer = prompt('Rock, Paper, or Scissors?')

  if (board.includes(answer.toUpperCase())) {
    let them = board[Math.floor(Math.random() * 3)]
    let you = answer.toUpperCase()

    if (them === you) {
      console.log('draw', you, them)
      alert(`Draw, they choose ${tolowerUcFirst(them)} too!`)
    } else {
      // win rules
      if (
        // SCISSORS
        (you === 'SCISSORS' && them === 'PAPER') ||
        // PAPER
        (you === 'PAPER' && them === 'ROCK') ||
        // ROCK
        (you === 'ROCK' && them === 'SCISSORS')
      ) {
        console.log('you win', you, them)
        alert(`You win, they choose ${tolowerUcFirst(them)}!`)
      } else {
        console.log('you lose', you, them)
        alert(`You lose, they choose ${tolowerUcFirst(them)}!`)
      }
    }
  }
}
```