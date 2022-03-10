//Urls
const filmUrl = 'https://opentdb.com/api.php?amount=10&category=11&type=multiple'
const musicUrl = 'https://opentdb.com/api.php?amount=10&category=12&type=multiple'
const tvUrl = 'https://opentdb.com/api.php?amount=10&category=14&type=multiple'
const vgUrl = 'https://opentdb.com/api.php?amount=10&category=15&type=multiple'

// multiple urls in one fetch
Promise.all([
    fetch(filmUrl).then(res => res.json()).then(res => console.log('success!', res)).catch(err => console.log('something went wrong', err)),
    fetch(musicUrl).then(res => res.json()).then(res => console.log('success!', res)).catch(err => console.log('something went wrong', err)),
    fetch(tvUrl).then(res => res.json()).then(res => console.log('success!', res)).catch(err => console.log('something went wrong', err)),
    fetch(vgUrl).then(res => res.json()).then(res => console.log('success!', res)).catch(err => console.log('something went wrong', err))
])

//selecting elements to manipulate
let scoreboard = document.querySelector('#score');
let filmButton = document.querySelector('#film');
let musicButton = document.querySelector('#music');
let tvButton = document.querySelector('#television');
let vgButton = document.querySelector('#videoGames');

// add Event Listeners
filmButton.addEventListener('click', (event) => {
    console.log(event);
})
musicButton.addEventListener('click', (event) => {
    console.log(event);
})
tvButton.addEventListener('click', (event) => {
    console.log(event);
})
vgButton.addEventListener('click', (event) => {
    console.log(event);
})

//function to hide buttons
function hideButtons() {

}

//function for question and multiple choice answers to appear

//function to increase amount to scoreboard