"use stric"

//A
 /* 
 * @param {number} number is any integer
 * @returns {boolean} true or false 
 * - loop from 2 to number and check for factors
 */
 //let number = +prompt("enter a number: ");
// function checkPrime(number) {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;

//         }
//     }
//     return true;

// }
// console.log("expect true for 6; ", checkPrime(6));
// console.log("expect false for 6; ", checkPrime(66));
//B
/* input: user enter a number 
 *  output:@returns {boolean} true or false 
 * -:loop from 2 to number and check for factors */

const prompt = require("prompt-sync")();
let number = +prompt("enter a number: ");


let isPrime = checkPrime(number);
if(isPrime){
    console.log(" true");
}
else {
    console.log(" false ; ");
}
function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
            
        }
    }
    return true;
  
    
}


