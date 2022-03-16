//selecting elements to manipulate
let open = document.querySelector('.opener');
let player = document.querySelector('#player');
let scoreboard = document.querySelector('#score');
let question = document.querySelector('#question');
let answerA = document.querySelector('#choiceA');
let answerB = document.querySelector('#choiceB');
let answerC = document.querySelector('#choiceC');
let answerD = document.querySelector('#choiceD');
let choices = document.querySelectorAll('.answers');
let nextButton = document.querySelector('.next');

//click to hide open
open.addEventListener('click', (event,playerName) => {
    event.target.hidden = true;
    playerName = prompt("What is you name?");
    player.innerHTML = playerName;
    document.body.children[2].style.visibility = "visible";
    document.body.children[3].style.visibility = "visible";
    document.body.children[5].style.visibility = "visible";
})


filmQuestionsArr = ["1. Which film did Leonardo Dicaprio win his first Oscar for Best Actor?", "2. What is the highest-grossing box office film of all time?", "3.", "4. ", "5. ", "6. ", "7. ", "8. ", "9. ", "10. "];
filmAnswers = [
                {text: "A: The Revenant", correct: true},
                {text: "B: What's Eating Gilbert Grape", correct: false},
                {text: "C: Titanic", correct: false},
                {text: "D: The Wolf of Wall Street", correct: false}
            ], 
            [
                {text: "A: Avengers: Endgame", correct: false},
                {text: "B: Frozen", correct: false},
                {text: "C: Avatar", correct: true},
                {text: "D: Star Wars: The Force Awakens", correct: false}

            ]
   // add Event Listeners
   
        
       for (let i=0; i<filmAnswers.length; i++) {
        question.innerHTML = filmQuestionsArr[0];
        choices[i].innerHTML = filmAnswers[i].text;
        // console.log(filmAnswers[i].text);
       } 
        // console.log(event.target.innerHTML)
        choices.forEach(elem => {
            elem.addEventListener('click', () => {
        //    document.body.children[5].style.color = "white";
    })
}) 

function checkAnswer() {

}

function nextQuestion() {

}
//winning condiitons


