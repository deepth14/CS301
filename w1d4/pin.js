/* Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.”*/


let prompt = require("prompt-sync")();

for(let i = 0; i < 3; i++){
const pin = 0000;
    
    let pinUser = +prompt("Enter  pin: ");
    
    console.log(pinUser)
    
    if (pinUser === pin){
        console.log("Correct, welcome back.");
        break;
    }
    
    if(i==2){
        console.log("Sorry but you have been locked out");
        continue;
    }

    console.log("Incorrect, try again!");
}