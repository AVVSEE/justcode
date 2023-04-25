let score = 0;

function wrongAnswer(){
    alert("WRONG ANSWER!"); //notifies user
    score--; //score down
}

function rightAnswer(){
    alert("RIGHT ANSWER!"); //notifies user
    score++; //score up
}

//create a function that will ask the user a question on a button press
//if the user gets the question right, add a point to the score
//if the user gets the question wrong, subtract a point from the score
//if the score is 0 or less, tell the user to try again
//if the score is 5, tell the user they got a perfect score
//otherwise, tell the user their score


//one function per button
//one button per question
function questionOne(){
    let answer = prompt("What is 2+2?");
    if(answer == 4){
        rightAnswer();
        turnButtonGreenOne();
    }else{
        wrongAnswer();
        turnButtonRedOne();
    }
}

function questionTwo(){
    let answer = prompt("What is 5+2?");
    if(answer == 7){
        rightAnswer();
        turnButtonGreenTwo();
    }else{
        wrongAnswer();
        turnButtonRedTwo();

    }
}

function questionThree(){
    let answer = prompt("What is 10+2?");
    if(answer == 12){
        rightAnswer();
        turnButtonGreenThree();
    }else{
        wrongAnswer();
        turnButtonRedThree();
    }
}

function questionFour(){
    let answer = prompt("What is 20+2?");
    if(answer == 22){
        rightAnswer();
        turnButtonGreenFour();
    }else{
        wrongAnswer();
        turnButtonRedFour();

    }
}

function questionFive(){    //this function is the same as the others, but with score p at the end
    let answer = prompt("What is 50+2?");
    if(answer == 52){
        rightAnswer();
        turnButtonGreenFive();
    }else{
        wrongAnswer();
        turnButtonRedFive();
    }
    let scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = "Your score is: " + score;
    document.body.appendChild(scoreParagraph);
    scoreParagraph.style.textDecoration = "underline";
    scoreParagraph.style.display = "flex";
    scoreParagraph.style.justifyContent = "center";
}

//functions that turn the respective buttons red or green depending on the answer being wrong or right

function turnButtonRedOne(){
    document.getElementById("questionOne").style.backgroundColor = "red";
}

function turnButtonGreenOne(){
    document.getElementById("questionOne").style.backgroundColor = "green";
}

function turnButtonRedTwo(){
    document.getElementById("questionTwo").style.backgroundColor = "red";
}

function turnButtonGreenTwo(){
    document.getElementById("questionTwo").style.backgroundColor = "green";
}

function turnButtonRedThree(){
    document.getElementById("questionThree").style.backgroundColor = "red";
}

function turnButtonGreenThree(){
    document.getElementById("questionThree").style.backgroundColor = "green";
}

function turnButtonRedFour(){
    document.getElementById("questionFour").style.backgroundColor = "red";
}

function turnButtonGreenFour(){
    document.getElementById("questionFour").style.backgroundColor = "green";
}

function turnButtonRedFive(){
    document.getElementById("questionFive").style.backgroundColor = "red";
}

function turnButtonGreenFive(){
    document.getElementById("questionFive").style.backgroundColor = "green";
}

//function that create a paragraph with the score after the user has answered all the questions
function showScore(){
    let scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = "Your score is: " + score;
    document.body.div.appendChild(scoreParagraph);
}

const buttons = document.querySelectorAll('.color-button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'turquoise';
  });
  
  button.addEventListener('mouseout', () => {
    if(button.style.backgroundColor === 'turquoise')
    button.style.backgroundColor = 'whitesmoke';
  });
});

function resetScore(){  //resets the color of the buttons and calls deleteScore() score
    score = 0;
    document.getElementById("questionOne").style.backgroundColor = "whitesmoke";
    document.getElementById("questionTwo").style.backgroundColor = "whitesmoke";
    document.getElementById("questionThree").style.backgroundColor = "whitesmoke";
    document.getElementById("questionFour").style.backgroundColor = "whitesmoke";
    document.getElementById("questionFive").style.backgroundColor = "whitesmoke";
    deleteScore();
}

function deleteScore(){
    let scoreParagraph = document.querySelector("p"); //selects the score paragraph
    document.body.removeChild(scoreParagraph); //deletes the score paragraph
    alert("Score reset!")   //notifies user
}
