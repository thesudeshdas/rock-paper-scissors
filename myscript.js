//check buttons are clicked
const buttons = document.querySelectorAll('button')

buttons.forEach(function(button) {
    button.addEventListener('click', userSelection());
})

function userSelection(e) {
    selectedChoice = e.target.value;

    return selectedChoice;
}

function computerSelection() {
    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length)]; // generating random choice
}

function showResult() {
    //get the result paragrapgh div to show the result

    const para = document.querySelector('#result-para');
    let p = document.createElement('div');

    p.textContent = `You called: ${selectedChoice}, Computer called: ${computerSelection()}`;

    para.appendChild(p)
}



//write function for one round
function playRound() {
    if(selectedChoice == computerSelection) {
        console.log('Hello')
    }
    // console.log(userSelection())
    
}

