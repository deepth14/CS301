/* kilometer to mile conversion*/

const prompt = require('prompt-sync')();

let user = prompt("whats the distance in Km: ")
user= parseFloat(user)
function convertInMile(input){

let distanceInMile = input * 0.621371;
return distanceInMile
}
console.log(convertInMile(user))