//track wins
let playerWin = 0;
let computerWin = 0;

// create objects for choice
const choices = [
    {
        'choice': 'rock',
        'pic': '/images/rock.svg',
    }, 
    {
        'choice': 'paper',
        'pic': '/images/paper.svg',
    },{
        'choice': 'scissors',
        'pic': '/images/scissors.svg',
    }
]

//get the button
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// generate random choice for pc
const computerChoice = () => choices[Math.floor(Math.random() * choices.length)].choice;


// show choices
const showChoice = (playerChoice, computerChoice) => {
    // show images for choices
    const playerChoiceDiv = document.querySelector('#player-choice-div');
    const computerChoiceDiv = document.querySelector('#computer-choice-div');
    
    choices.forEach(sign => {
        if (sign.choice == playerChoice) {
            playerChoiceDiv.innerHTML = `
                <img src="${sign.pic}" alt="${sign.choice}">
          `
        }
        
        if (sign.choice == computerChoice) {
            computerChoiceDiv.innerHTML = `
                <img src="${sign.pic}" alt="${sign.choice}">
          `
        }
    })
}

// check game over
const checkGameOver = () => {
    if (playerWin == 5 || computerWin == 5) {
        alert ('game over');
    }
}

//function for 1 round
function playRound(playerSelection) {
    let computerSelection = computerChoice();
    
    // get the element to show player & computer score
    const playerScoreEl = document.querySelector('#player-score');
    const computerScoreEl = document.querySelector('#computer-score');
    
    showChoice(playerSelection, computerSelection);
    
    //compare and return result
    if(playerSelection == computerSelection) {
        result = "Its a tie, both called " + playerSelection;
      }

      else if(playerSelection == 'rock' && computerSelection == 'scissors' 
            || playerSelection == 'paper'  && computerSelection == 'rock'
            || playerSelection == 'scissors' &&  computerSelection == 'paper') 
            {
                playerWin++;
                playerScoreEl.innerHTML = `Score: ${playerWin}`;
            }
      else {
        computerWin++;
        computerScoreEl.innerHTML = `Score: ${computerWin}`
      }
      
      checkGameOver();
}



//compare for 5 points - game function
function game() {
    const playGame = e => {
        const player = e.target.parentElement.value;
        setTimeout(function() { playRound(player); }, 500);
    }
    
    //check buttons are clicked
    const buttons = document.querySelectorAll('button')
    buttons.forEach(function(button) {
        button.addEventListener('click', playGame);
    })  
}

game();