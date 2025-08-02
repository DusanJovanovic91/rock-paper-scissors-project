//function that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
    let randomNumber = Math.random() * 3

      if (randomNumber <= 1) {
          return "rock"
      }

      else if (randomNumber <= 2) {
          return "paper"
      }

      else {
          return "scissors"
      }
}
//function that will return one of the valid choices depending on what the user inputs. 
function getHumanChoice() {
    let choice = prompt("Choose: rock, paper, or scissors")
     return choice;
}

//Declare the players score variables
let humanScore = 0;
let computerScore = 0;

