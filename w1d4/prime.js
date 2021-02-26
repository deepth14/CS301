

"use strict";
/*   a, with out using break*/

const prompt = require("prompt-sync")();

let number = prompt("Please enter a number to test if it is prime: ");
let isPrime = true;
let i = 2;

// while (i < number && isPrime === true){
//   if (number % i == 0) {
//     isPrime = false;
//   }
//   i = i + 1;
// }


// console.log(isPrime);

/*  b,using break */

for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  
  
  console.log(isPrime);