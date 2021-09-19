function activity(){
    fetch("https://www.boredapi.com/api/activity/")
     .then(res => res.json())
     .then(data => console.log(`Todays Activity: ${data.activity}`))
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
         console.log(`Quote Of The Day: Unknown ~ ${data[randomQuote].text}`)
         }
       else {
         console.log(`Quote Of The Day: ${data[randomQuote].author} ~ ${data[randomQuote].text}`)
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
      .then(data => console.log(`Joke Of The Day: ${data.joke}`))
      .catch((error) => {
      console.error('Error:', error);
    })
    }
    
    
    function compliment(){
      fetch('https://complimentr.com/api').then(res => res.json())
      .then(data => console.log(`Compliment Of The Day: ${data.compliment.charAt(0).toUpperCase() + data.compliment.slice(1)}`))
      .catch((error) => {
      console.error('Error:', error);
    })
    }
    
    compliment()
    
    quotes()
    activity()
    getJokes()
