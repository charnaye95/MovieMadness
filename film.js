const filmUrl = 'https://opentdb.com/api.php?amount=10&category=11&type=multiple'


function getQuestion (event) {
    event.preventDefault()

let filmButton = document.querySelector('#film')


fetch(filmUrl)
.then(res => res.json())
.then(res => 
    
    console.log('success!', res))
    .catch(err => console.log('something went wrong', err))
}
