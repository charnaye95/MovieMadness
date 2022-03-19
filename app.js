//selecting elements to manipulate
let open = document.querySelector('.opener');
let player = document.querySelector('#player');
let scoreboard = document.querySelector('#score');
let question = document.querySelector('#question');
let choices = document.querySelectorAll('.answers');
let nextButton = document.querySelector('#next');
let resetButton = document.querySelector('#reset');
let score = 0;
let noRepeatQs = [];

filmQuestionsArr = [
    "Which film did Leonardo Dicaprio win his first Oscar for Best Actor?",
    "What is the highest-grossing box office film of all time?",
    "Who below, is an EGOT winner, meaning they have received an Emmy, Grammy, Oscar, and Tony Award?",
    "Who below, has NOT acted as the Joker in a film?",
    "Who is the voice of Anna in Frozen?",
    "Which actress starred in Breakfast at Tiffany's?",
    "Who directed Fight Club?",
    "What genre has made the most revenue over the last 10 years?",
    "Who has Will Smith, NOT portrayed in a biopic?",
    "What company owns Marvel?"
];

filmAnswers = [
    [
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
    ],
    [
        {text: "A: Meryl Streep", correct: false},
        {text: "B: Rita Moreno", correct: true},
        {text: "C: Denzel Washington", correct: false},
        {text: "D: Robert De Niro", correct: false}
    ],
    [
        {text: "A: Willem Dafoe", correct: true},
        {text: "B: Heath Ledger", correct: false},
        {text: "C: Joaquin Phoenix", correct: false},
        {text: "D: Jared Leto", correct: false}
    ],
    [
        {text: "A: Scarlett Johansson", correct: false},
        {text: "B: Idina Menzel", correct: false},
        {text: "C: Reese Witherspoon", correct: false},
        {text: "D: Kristen Bell", correct: true}
    ],
    [
        {text: "A: Jane Fonda", correct: false},
        {text: "B: Audrey Hepburn", correct: true},
        {text: "C: Marilyn Monroe", correct: false},
        {text: "D: Julie Andrews", correct: false}
    ],
    [
        {text: "A: Christopher Nolan", correct: false},
        {text: "B: David Fincher", correct: true},
        {text: "C: Quentin Tarantino", correct: false},
        {text: "D: Martin Scorsese", correct: false}
    ],
    [
        {text: "A: Drama", correct: false},
        {text: "B: Comedy", correct: false},
        {text: "C: Action", correct: false},
        {text: "D: Adventure", correct: true} 
    ],
    [
        {text: "A: Muhammad Ali", correct: false},
        {text: "B: Richard Williams", correct: false},
        {text: "C: Chris Gardner", correct: false},
        {text: "D: Malcolm X", correct: true}
    ],
    [
        {text: "A: Sony", correct: false},
        {text: "B: Paramount", correct: false},
        {text: "C: Disney", correct: true},
        {text: "D: Netflix", correct: false}
    ],

]

//click to hide open
open.addEventListener('click', (event, playerName) => {
    event.target.hidden = true;
    playerName = prompt("What is you name?");
    player.innerHTML = playerName;
    document.body.children[2].style.visibility = "visible";
    document.body.children[3].style.visibility = "visible";
    document.body.children[5].style.visibility = "visible";
    document.body.children[6].style.visibility = "visible";
})

//creating a function for questions and answers to appear each time
let playerAnswer;
let random = Math.floor(Math.random() * (filmQuestionsArr.length))

function playGame() {
    random = Math.floor(Math.random() * (filmQuestionsArr.length))
    if (noRepeatQs.includes(random)) {
        playGame();
        return
    }
    noRepeatQs.push(random);
    question.innerHTML = filmQuestionsArr[random];
    for (let i = 0; i < 4; i++) {
        choices[i].innerHTML = filmAnswers[random][i].text;
    }
    return random
}

playGame();

//function to check the answer is right or wrong to a question
function checkAnswer(event) {
       let index = parseInt(event.target.id)       
    if (filmAnswers[random][index].correct === true) {
             event.target.style.backgroundColor = "green"
                scoreboard.innerHTML = `BANK $${score += 100}`;
                alert("That is correct! Click next!")
                for (let j = 0; j < choices.length; j++) {
                    choices[j].disabled = true;
        }
    }  else {
                alert("Incorrect. Better luck next time. Click next!")
                for (let k = 0; k < choices.length; k++) {
                    choices[k].disabled = true;
            }
        }
        win();
    }


//trying to tie a function to clicking the next button that will then show the next randomized question in the array
function nextQuestion() {
        playGame(); 
for (let l = 0; l < choices.length; l++) {
            choices[l].disabled = false;
            choices[l].style.backgroundColor = "rgb(221, 69, 22";
        }
    }

// winning conditons
function win() {
    if (noRepeatQs.length == 10 && score === 800 || noRepeatQs.length == 10 && score === 900) {
    alert(`You finished with a score of ${score} and WON! You are a true film buff! Try for a higher score by clicking reset.`)
} else if (noRepeatQs.length == 10 && score < 800) { 
    alert(`You finished with a score of ${score} and lost. Try again by clicking reset.`)
    } else if (noRepeatQs.length == 10 && score === 1000) {
        alert("You have finished with a score of 1000!!! You are a master cinema enthusiast")
    }
}

function resetGame() {
    noRepeatQs = [];
    scoreboard.innerHTML = `BANK $${score = 0}`;
        playGame();
    for (let m = 0; m < choices.length; m++) {
        choices[m].disabled = false;
        choices[m].style.backgroundColor = "rgb(221, 69, 22";
    }
}

