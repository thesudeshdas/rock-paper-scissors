//track wins
let playerWin = 0;
let computerWin = 0;
let x = 5;

// create objects for choice
const computerChoices = [
    {
        'choice': 'rock',
        'pic': ''
    }
]

//get the button
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// generate random choice for pc
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//function for 1 round
function playRound(playerSelection) {
    let computerSelection = computerChoice();

    //initialise result as a string
    let result = ''

    //compare and return result
    if(playerSelection == computerSelection) {
        result = "Its a tie, both called " + playerSelection;
      }

      else if(playerSelection == 'rock' && computerSelection == 'scissors' 
            || playerSelection == 'paper'  && computerSelection == 'rock'
            || playerSelection == 'scissors' &&  computerSelection == 'paper') {
              result = 'You Win, ' + playerSelection + ' beats ' + computerSelection;
              playerWin++;
            }
          
      else {
        result = 'You Lose, ' + computerSelection + ' beats ' + playerSelection;
        computerWin++;
      }

      return result
}



//compare for 5 points - game function
function game(e) {
    const player = e.target.value

    const para = document.querySelector('#result-para');
    let p = document.createElement('div');
    
    // check for 5 wins
    if(playerWin < 5 && computerWin < 5) {
        const roundResult = playRound(player);
        const scoreBoard = "; Your score is: " + playerWin + " ; Computer's score is: " + computerWin;


        p.textContent = roundResult + scoreBoard;
    } else {
        if(playerWin > computerWin) {
            p.textContent = "You are the winner, reload to play again"
        } else {
            p.textContent = "Computer is the winner, reload to play again"
        }
    }



    //showing result in para div
    para.appendChild(p)
    
}


//check buttons are clicked
const buttons = document.querySelectorAll('button')

buttons.forEach(function(button) {
    button.addEventListener('click', game);
})