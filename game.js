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


//write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement. 
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    
        if (humanChoice === "rock" && computerChoice === "paper")  {
            computerScore++;
        console.log("You lose! Rock loses to paper");
        return computerScore;

}
        if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
        console.log("You lose! Paper loses to scissors");
        return computerScore;
}
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
        console.log("You win! Rock wins scissors");
        return humanScore;
}
        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
        console.log("You win! Paper wins rock");
        return humanScore;
}
        if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
        console.log("You win! Scissors wins paper");
        return humanScore;
}
          if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
        console.log("You lose! Scissors loses to rock");
        return computerScore;
}

        if (humanChoice === computerChoice) {
            console.log("It is a tie")
            return computerScore;
        }
    }

       const humanSelection = getHumanChoice();
       const computerSelection = getComputerChoice();
       playRound(humanSelection, computerSelection);
