
// Selectors
const complimentButton = document.querySelector("#complimentButton"); 
const jokesButton = document.querySelector("#jokesButton");
const quotesButton = document.querySelector("#quotesButton"); 
const fortunesButton = document.querySelector("#fortunesButton");
const textBox = document.querySelector("#textBox"); 
const refresh = document.querySelector("#refresh");
let lists = document.querySelectorAll("li");

lists.forEach(list => {
list.addEventListener("click", function(){
  lists.forEach(btn => btn.classList.remove("active"));
  this.classList.add('active');
});
});



//Event Listeners
document.addEventListener("DOMContentLoaded", compliment);
complimentButton.addEventListener("click", compliment);
jokesButton.addEventListener("click", getJokes);
quotesButton.addEventListener("click",  quotes);
fortunesButton.addEventListener("click", activity );
refresh.addEventListener("click", refresher);


// refresh button function
function refresher(){
  location.reload();
}



// API
function activity(){

    fetch("https://www.boredapi.com/api/activity/")
     .then(res => res.json())
     .then(data => textBox.innerHTML = `Todays Activity: ${data.activity}`)
     .catch((error) => {
      console.error('Error:', error);
    })
    
    }
    
    function quotes(){
    fetch("https://type.fit/api/quotes")
     .then(res => res.json())
     .then(data => {
       
       let randomQuote = Math.floor(Math.random()*data.length);
       if(data[randomQuote].author === null){
         textBox.innerHTML = `Quote Of The Day: Unknown ~ ${data[randomQuote].text}`
         }
       else {
         textBox.innerHTML = `Quote Of The Day: ${data[randomQuote].text} ~ ${data[randomQuote].author}`
         }
       
       })
       
    
     .catch((error) => {
      console.error('Error:', error);
    
        })}
    
    
    
    function getJokes(){
     fetch("https://icanhazdadjoke.com/", {
      headers: {
        'Accept':'application/json'
      }
    }).then(res => res.json())
      .then(data => textBox.innerHTML = `Joke Of The Day: ${data.joke}`)
      .catch((error) => {
      console.error('Error:', error);
    })
    }
    
    
    function compliment(){
      fetch('https://complimentr.com/api').then(res => res.json())
      .then(data => textBox.innerHTML = `Compliment Of The Day: ${data.compliment.charAt(0).toUpperCase() + data.compliment.slice(1)}`)
      .catch((error) => {
      console.error('Error:', error);
    })
    }