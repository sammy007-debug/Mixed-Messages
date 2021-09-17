const quotes = [
    ["moon","star", "sun"],
     ["good luck", "Bad luck", "ok luck"],
    ["not read this", "trust no one", "go out and eat"]
    ]
    
function randomNumber(arr){
    return arr[Math.floor(Math.random()*arr.length)]
    }


let array = ["Your sign right now is a ", "You are having: ", "You should: " ]
let newArr = []
for(let i= 0; i < quotes.length; i++){

newArr.push(array[i] + randomNumber(quotes[i]))

}
console.log(newArr.join(" \n"))