//Urls
const filmUrl = 'https://opentdb.com/api.php?amount=10&category=11&type=multiple'
const musicUrl = 'https://opentdb.com/api.php?amount=10&category=12&type=multiple'
const tvUrl = 'https://opentdb.com/api.php?amount=10&category=14&type=multiple'
const vgUrl = 'https://opentdb.com/api.php?amount=10&category=15&type=multiple'


//selecting elements to manipulate
let open = document.querySelector('.opener')
let player = document.querySelector('#player')
let scoreboard = document.querySelector('#score');
let question = document.querySelector('#question');
let answerA = document.querySelector('#choiceA');
let answerB = document.querySelector('#choiceB');
let answerC = document.querySelector('#choiceC');
let answerD = document.querySelector('#choiceD');
let buttons = document.querySelectorAll('.category');
let choices = document.querySelectorAll('.answers')
let answersarray = [];

//click to hide open
open.addEventListener('click', (event) => {
    event.target.hidden = true;
    document.body.children[2].style.visibility = "visible";
    document.body.children[3].style.visibility = "visible";
    
    console.log("begin hidden and show top row and categories");

//prompt for player's name
playerName = prompt("What is you name?");
player.innerHTML = playerName

console.log(answerA.innerHTML) //this is here in an effort to test pulling answers for the questions when clicked

//function to grab data needed from API
    function getData(id) {
        // fetch based off of id number which represents category number in the API
        fetch(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`
        ).then(res => res.json())
            .then(res => {
                answersarray.push(res.results); // in an effor to use outside fetch for answers to manipulate later for functions to determing if answer is correct then what vs if wrong then what
                question.innerHTML = res.results[0].question //questions appearing where they should be
                // inncorrectarranswerA.innerHTML = res.results[0].incorrect_answers this is when i was trying to put the answers.innerhtml in my fetch so they would show up where the a b c and d are but wasn't figuring it out
            })
            .catch(err => console.log('something went wrong', err))
    }
    // add Event Listeners
    buttons.forEach(elem => {
        elem.addEventListener('click', (event) => {
            document.body.children[3].style.visibility = "hidden";
            document.body.children[4].style.visibility = "visible";
            getData(event.target.id)
            // console.log(event.target.innerHTML)
        })
    })
})
console.log(answersarray);

//shot in the dark here 
function displayAnswers() {
for (let i=0; i < answersarray.length; i++) {
     answersarray[0] = choices.innerHTML
console.log(answersarray[i]);
}
}
displayAnswers();
// function for question and multiple choice answers to appear


// function to increase amount to scoreboard

//function to determine which answer is correct vs it not being correct