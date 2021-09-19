import axios from 'axios'


// START QUOTES

const insult = () => {
    axios
        .get('https://api.themotivate365.com/stoic-quote')
        .then(response => console.log(response.data.data.quote))
        .catch(err => console.log(err))
};

insult();



// START JOKES

const jokes = () => {
    axios
        .get('https://icanhazdadjoke.com/')
        .then(response => console.log(response))
        .catch(err => console.log(err))
};

// jokes();


// START COMPLIMENTS

const compliments = () => {
    axios
        .get('https://complimentr.com/api')
        .then(response => console.log(response.data.compliment))
        .catch(err => console.log(err))
};

compliments();