/* Write a program that helps a user choose the correct footwear for the day’s weather based on
the table shown below. If the user enters any other weather type, your program should output
“sneakers”

Weather   Footwear
hot       sandals
rain      galoshes
snow      boots */

"use strict";

const prompt = require("prompt-sync")();

let weather = prompt("Please enter the weather  type today: ");


if (weather === 'hot') {
   console.log("sandels");
} else if (weather === 'rain') {
  console.log("galoshes");
} else if (weather === 'snow') {
  console.log("boots") 
} else {
  console.log("jordans");
}

