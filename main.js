//SELECTORS
const btnColor = document.querySelectorAll('li')
const btnRefresh = document.querySelector('#refresh') 
const msgField = document.querySelector('#textField')
const complBtn = document.querySelector('#complBtn')
const jokesBtn = document.querySelector('#jokesBtn')
const quotesBtn = document.querySelector('#quotesBtn')
const fortBtn = document.querySelector('#fortBtn')


//REFRESH API
btnRefresh.addEventListener('click', function () {
    location.reload(false)
})
//CHANGE BTN BACKGROUND-COLOR 
btnColor.forEach(btn => {
    btn.addEventListener("click", function(){
        btnColor.forEach(btn => btn.classList.remove("active"));
        this.classList.add('active');
    });
});

//API URL

const quotes = 'https://type.fit/api/quotes';
const jokes = 'https://icanhazdadjoke.com/';
const compliment = 'https://complimentr.com/api'
const activity = 'https://www.boredapi.com/api/activity/';


// API GET

function getCompliments() {
    fetch(compliment)
        .then(res => res.json())
        .then(data => {
            msgField.innerHTML = data.compliment.charAt(0).toUpperCase() + data.compliment.slice(1)
        })
        .catch(err => console.error(err))
}


function getJokes() {
    fetch(jokes, {headers: {'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => {
            console.log(data)
            msgField.innerHTML = data.joke
        })
        .catch(err => console.error(err))
}


function getQuotes() {
  fetch(quotes)
  .then(res => res.json())
  .then(data => {
    
    let randomQuote = Math.floor(Math.random()*data.length);
    if(data[randomQuote].author === null){
        msgField.innerHTML = `Quote Of The Day: Unknown ~ ${data[randomQuote].text}`
      }
    else {
        msgField.innerHTML = `Quote Of The Day: ${data[randomQuote].text} ~ ${data[randomQuote].author}`
      }
    
    })
    
 
    .catch(err => console.error(err))}



function getActivity() {
    fetch(activity)
        .then(res => res.json())
        .then(data => {
            msgField.innerHTML = data.activity
        })
        .catch(err => console.error(err))
}


//EVENT LISTENER
complBtn.addEventListener('click', getCompliments)
jokesBtn.addEventListener('click', getJokes)
quotesBtn.addEventListener('click', getQuotes)
fortBtn.addEventListener('click', getActivity)

//COMPLIMENT START FIRST
getCompliments()