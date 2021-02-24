
/* quarts to liter conversion*/


const prompt = require('prompt-sync')();

let user = prompt("put volume in quarts: ")
user = parseFloat(user)





function convertVolume(input){
    let volumeInLiters = input *0.946353;
    return volumeInLiters
}

console.log(convertVolume(user))

 
