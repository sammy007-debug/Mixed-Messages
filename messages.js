// Logging one of each message type would be tiring for the user to read everytime they request a random message so I thought it would be less exhausting & more engaging if the 
// user can choose if they want a compliment, prediction, an activity, a joke, quote, etc
// I put getters to prevent our other code from editing the already set messages by mistake
// This file started to get long already so I decided we should put the functions in a separate file to make it a bit more maintainable

module.exports = {
    _compliments: [
        'You have a great sense of humor.', 
        'You have impeccable manners.', 
        'Is that your picture next to "charming" in the dictionary?', 
        'You are beautiful on the inside and outside.', 
        'You were cool way before hipsters were cool.', 
        'That thing you don\'t like about yourself is what makes you really interesting.', 
        'You\'re inspiring.', 
        'I bet you do crossword puzzles in ink.', 
        'You\'re an awesome friend.', 
        'You look great today.', 
        'That color is perfect on you.', 
        'Has anyone ever told you that you have great posture?', 
        'You\'re one of a kind.', 
        'In high school, I bet you were voted "most likely to continue being awesome."', 
        'You look so young!', 
        'You are stunning.', 
        'You are one of the bravest people I know.'
    ],
    get compliments () {
        return this._compliments ? this._compliments : null
    },
    _predictions: [ // Disclaimer, these predictions are for entertainment purposes and should not be taken seriously
        // affirmative answers
        'It is certain.',
        'Without a doubt.',
        'You may rely on it.',
        'Most likely.',
        'Outcome is good.',
        'Yes.',
        //neutral answers
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        // negative answers
        'Don\'t count on it.',
        'My reply is no.',
        'My sources say no.',
        'Very doubtful.',
        'Outlook not so good.'
    ],
    get predictions () {
        return this._predictions ? this._predictions : null
    },
    _activities: [
        'Make homemade ice cream',
        'Do something you used to do as a kid',
        'Wash your car',
        'Uninstall unused apps from your devices',
        'Watch a movie you\'d never usually watch',
        'Wash the dishes',
        'Try a food you don\'t like',
        'Research a topic you\'re interested in',
        'Learn a new programing language',
        'Write a short story'
    ],
    get activities () {
        return this._activities ? this._activities : null
    },
    _quotes: [
        {
            author: 'Mahatma Gandhi',
            quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
        },
        {
            author: 'Friedrich Nietzsche',
            quote: 'That which does not kill us makes us stronger.'
        },
        {
            author: 'Bernard M. Baruch',
            quote: 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.'
        },
        {
            author: 'Albert Einstein',
            quote: 'Strive not to be a success, but rather to be of value.'
        },
        {
            author: 'Maya Angelou', 
            quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
        },
        {
            author: 'Amelia Earhart',
            quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.'
        },
        {
            author: 'Charles Swindoll',
            quote: 'Life is 10% what happens to me and 90% of how I react to it. '
        },
        {
            author: 'Christopher Columbus',
            quote: 'You can never cross the ocean until you have the courage to lose sight of the shore'
        },
        {
            author: 'Unknown',
            quote: 'You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.'
        },
        {
            author: 'Steve Jobs',
            quote: 'The only way to do great work is to love what you do.'
        }
    ],
    get quotes () {
        return this._quotes ? this._quotes : null
    },
    _jokes: [
        'You sound like you could survive a zombie apocalypse :)', 
        'Why can’t a bike stand on its own? It’s two tired.', 
        ' I submitted ten puns to a pun contest hoping that one would win, but no pun in ten did.', 
        ' I told my doctor that I broke my arm in two places. He told me to stop going to those places.', 
        'You don\'t need a parachute to go skydiving — you need a parachute to go skydiving twice.', 
        'A nurse told me, "Sorry for the wait!" I replied, "It\'s alright, I\'m patient."', 
        'Working in a mirror factory is something I could totally see myself doing.', 
        'What do you call a cheese that’s not yours?\nNacho cheese!', 
        'What’s orange and sounds like a parrot?\nA carrot.', 
        'Why does Humpty Dumpty love autumn?\nBecause he always has a great fall.', 
        'Where to spaghetti and sauce go to dance?\nThe meat ball.', 
        'When the bottle of Pepsi hit me, I didn\'t cry. It was a soft drink.'
    ],
    get jokes () {
        return this._jokes ? this._jokes : null
    }
}
