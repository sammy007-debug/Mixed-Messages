function getActivity() {
    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => console.log('Activity: ' + data.activity))
    .catch(error => console.error('Error: ' + error))
}

function getJoke() {
    const options = {
        headers: {
            'Accept':'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', options)
    .then(res => res.json())
    .then(data => console.log('Joke: ' + data.joke))
    .catch(error => console.error('Error: ' + error))
}

function getCompliment() {
    fetch('https://complimentr.com/api')
    .then(res => res.json())
    .then(data => displayedMessage.innerHTML = data.compliment)
    .catch(error => console.error('Error: ' + error))
}

// we don't have a good API for quotes yet!!!
function getQuote() {
    fetch('https://inspiration.goprogram.ai/')
    .then(res => res)
    .then(data => console.log('Quote: ' + data.quote + ' ~ ' + data.author))
    .catch(error => console.error('Error: ' + error))
}
