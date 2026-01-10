// 1. Code to be executed when the page has finished loading
// 2. Code to be executed when the user clicks a button.

// Wait for the DOM to finish loading before running the game.
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })   
    }

    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer ha been processed.
 */
function runGame(gameType){
    //creates two random numbers between 1 and 25.
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
        // let correctAnswer = calculateCorrectAnswer();
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer array
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();

    if(userAnswer === calculatedAnswer[0]){
        alert("You got it right! Que grande eres!!");
    } else {
        alert("You didnt get it right this time. You can keep trying you luck!")
    }
}

/**
 * Gets the operands (the numberss) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplement operator ${operator}`);
        throw `Unimplement operator ${operator}. Aborting!`;
    }
}

function incrementScore(){
    
}

function incrementWrongAnswer(){
    
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

function displayDivisionQuestion(){
    
}