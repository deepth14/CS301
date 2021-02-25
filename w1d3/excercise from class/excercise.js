/* Write a program that asks user to enter weather for today and print
"Get an umbrella" if weather is rainy.*/
"use strict";

const prompt = require("prompt-sync")();

// const weather = prompt("whats the weather today: ");
// if (weather === "rainy" || weather ==="rainy"){
//     console.log("get an umbriela");
// }

/*• Write a program that asks user to enter a number between 1 to 10,
and print "Bingo!" if user enters 7 otherwise prints "Try again.".
• Use === for comparison not == */


const guess = prompt("enter numbers between 1 and 10: ");
guess = number(guess);
if (guess ===7){
console.log("bingo!");
} else{
    console.log("try again");
}