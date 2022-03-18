//selecting elements to manipulate
let open = document.querySelector('.opener');
let player = document.querySelector('#player');
let scoreboard = document.querySelector('#score');
let question = document.querySelector('#question');
let choices = document.querySelectorAll('.answers');
let nextButton = document.querySelector('.next');
let score = 0;
let noRepeatQs = [];

//click to hide open
open.addEventListener('click', (event, playerName) => {
    event.target.hidden = true;
    playerName = prompt("What is you name?");
    player.innerHTML = playerName;
    document.body.children[2].style.visibility = "visible";
    document.body.children[3].style.visibility = "visible";
    document.body.children[5].style.visibility = "visible";
})


filmQuestionsArr = [
    "Which film did Leonardo Dicaprio win his first Oscar for Best Actor?",
    "What is the highest-grossing box office film of all time?",
    "Who of these is an EGOT winner, meaning they have received an Emmy, Grammy, Oscar, and Tony Award?",
    "Who of these has NOT acted as the Joker in a film?",
    " ",
    "Which actress starred in Breakfast at Tiffany's?",
    " ",
    "What genre has made the most revenue over the last 10 years?",
    "Who has Will Smith, NOT portrayed in a biopic?",
    "What company owns Marvel?"];

filmAnswers = [
    [
        { text: "A: The Revenant", correct: true },
        { text: "B: What's Eating Gilbert Grape", correct: false },
        { text: "C: Titanic", correct: false },
        { text: "D: The Wolf of Wall Street", correct: false }
    ],
    [
        { text: "A: Avengers: Endgame", correct: false },
        { text: "B: Frozen", correct: false },
        { text: "C: Avatar", correct: true },
        { text: "D: Star Wars: The Force Awakens", correct: false }
    ],
    [
        { text: "A: Meryl Streep", correct: false },
        { text: "B: Rita Moreno", correct: true },
        { text: "C: Denzel Washington", correct: false },
        { text: "D: Robert De Niro", correct: false }
    ],
    [
        { text: "Willem Dafoe", correct: false },
        { text: "Heath Ledger", correct: false },
        { text: "Joaquin Phoenix", correct: true },
        { text: "Jared Leto", correct: false }
    ],
    [
        { text: "A: hytde", correct: false },
        { text: "B: Fdf", correct: false },
        { text: "C: Avase", correct: true },
        { text: "D: Staraaece Awakens", correct: false }
    ],
    [
        { text: "Jane Fonda", correct: false },
        { text: "Audrey Hepburn", correct: true },
        { text: "Marilyn Monroe", correct: false },
        { text: "Julie Andrews", correct: false }
    ],

    [
        { text: "6", correct: false },
        { text: "33n", correct: false },
        { text: "Cvvvvssssdddd", correct: true },
        { text: "wwerttyyy", correct: false },
    ],
    [
        { text: "A: Drama", correct: false },
        { text: "B: Comedy", correct: false },
        { text: "C: Action", correct: false },
        { text: "D: Adventure", correct: true }
    ],
    [
        { text: "Muhammad Ali", correct: false },
        { text: "Richard Williams", correct: false },
        { text: "Chris Gardner", correct: false },
        { text: "Malcolm X", correct: true}
    ],
    [
        { text: "Sony", correct: false },
        { text: "Paramount", correct: false },
        { text: "Disney", correct: true },
        { text: "Netflix", correct: false }
    ],

]

//creating a function for questions and answers to appear each time
let playerAnswer = null;
function playGame() {
    let random = Math.floor(Math.random() * (filmQuestionsArr.length))
    if (noRepeatQs.includes(random)) {
        playGame();
        return
    }
    noRepeatQs.push(random);
    console.log(noRepeatQs);
    question.innerHTML = filmQuestionsArr[random];
    for (let i = 0; i < 4; i++) {
        choices[i].innerHTML = filmAnswers[random][i].text;
    }
    choices.forEach((elem, index) => {
        elem.addEventListener('click', (event) => {
            playerAnswer = index;
            console.log(filmAnswers[random][playerAnswer].correct);
            if (filmAnswers[random][playerAnswer].correct === true) {
                scoreboard.innerHTML = `BANK $${score += 100}`;
                event.target.style.backgroundColor = "green";           
                for (let j=0; j < choices.length; j++) {
                    choices[j].disabled = true;
                }
                alert("That is correct! Click next!")
                // nextQuestion();
            } else {
                alert("Incorrect. Better luck next time. Click next!")
                for (let k=0; k < choices.length; k++) {
                    choices[k].disabled = true;
                }
            }
        })
    })
}
playGame();


//function to check the answer is right or wrong to a question
// function checkAnswer() {

// }
// checkAnswer();

//trying to tie a function to clicking the next button that will then show the next randomized question in the array
function nextQuestion() {
    nextButton.addEventListener('click', () => {
        for (let l=0; l < choices.length; l++) {
        choices[l].disabled = false;
        choices[l].style.backgroundColor = "rgb(221, 69, 22";
        }
        if (noRepeatQs.length === 9) {
            win();
        }
        playGame();

    })
}
nextQuestion();

// winning conditons
// function win() {
// if (scoreboard.innerHTML === 800) {
//     window.prompt("You are a true film buff!")
// } else {
//     window.prompt("Try again.")
//     }
// }
// win();

