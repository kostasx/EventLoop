/* eslint-disable */

// Side-effects and external variables: roundResult, roundScoreMe, roundScoreComputer, computerScore
// What if we mispell "rocK" or " paper" or "scisors"?
function playRound(playerSelection, computerSelection) {     
  if (computerSelection === "rock") {
      if (playerSelection === "rock") {
          roundResult.textContent = "Rock for both! Draw again."
      } else if (playerSelection === "paper") {
          roundScoreMe.textContent = playerScore++;
          roundResult.textContent = "Rock for the computer, paper for you, YOU WON THE ROUND!"
      } else if (playerSelection === "scissors") {
          roundScoreComputer.textContent = computerScore++
          roundResult.textContent = "Rock for the computer, scissors for you, YOU LOST THE ROUND..."
      };
  };
  if (computerSelection === "paper") {
      if (playerSelection === "paper") {
          roundResult.textContent = "Paper for both! Draw again."
      } else if (playerSelection === "rock") {
          roundScoreComputer.textContent = computerScore++
          roundResult.textContent = "Paper for the computer, rock for you, YOU LOST THE ROUND..."
      } else if (playerSelection === "scissors") {
          roundScoreMe.textContent = playerScore++
          roundResult.textContent = "Paper for the computer, scissors for you, YOU WON THE ROUND!"
      };
  }; 
  if (computerSelection === "scissors") {
      if (playerSelection === "scissors") {
          roundResult.textContent = "Scissors for both! Draw again."
      } else if (playerSelection === "paper") {
          roundScoreComputer.textContent = computerScore++
          roundResult.textContent = "Scissors for the computer, paper for you, YOU LOST THE ROUND..."
      } else if (playerSelection === "rock") {
          roundScoreMe.textContent = playerScore++
          roundResult.textContent = "Scissors for the computer, rock for you, YOU WON THE ROUND!"
      };
  };
};

function playRound_ (playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
   if (computerSelection === "Rock") {
       if (playerSelection === "rock") {
           draws++
            return "Oh heck! draw again"
       } else if (playerSelection === "scissors") {
           computerScore++
            return "Haha you lost!"
       }else if (playerSelection === "paper") {
           playerScore++
            return "Oh you won!"
       }
   }
   if (computerSelection === "Scissors") {
       if (playerSelection === "scissors") {
           draws++
            return "Oh heck! draw again"
       } else if (playerSelection === "rock") {
           playerScore++
            return "Oh you won!"
       } else if (playerSelection === "paper") {
           computerScore++
            return "Haha you lost!"
       }
   }  
   if (computerSelection === "Paper") {
       if (playerSelection === "paper") {
           draws++
            return "Oh heck! draw again"
       } else if (playerSelection === "rock") {
           computerScore++
            return "Haha you lost!"
       } else if (playerSelection === "scissors") {
           playerScore++
            return "Oh you won!"
       }
   }
   // console.log(playerScore);
}


// Single Responsibility Principle, Pure Fuctions avoid side-effects and external variables
function getResult() {

  // What if we want to rename these 3 global variables?
  if (computerChoice === playerChoice) {
      result= "it is a draw"
  }
  if (computerChoice ==="rock" && playerChoice ==="paper") {
      result= "You win"
  }
  // Prefer === and !===
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

  // What if we decide to change the way the result is displaed?
  resultDisplay.innerHTML = result
}