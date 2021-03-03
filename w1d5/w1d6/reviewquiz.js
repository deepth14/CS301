"use strict"

// /*  


//  input:number
//  output: ttrue if prime
//  process:
//  --frist reverse a number
//  -- get a digit
//  -- get the quetient
//  --save the reverseddNum as we go
//  -- with each new digit multiply  reversedNum  by 10 and add 10
 
//  --then check prime and return true if it is
//  */
// function reverse(number){
//     let reversedNum = 0;
//     while  (number > 0){
//         const digit= number % 10;
//         const quotient = Math.floor(number/10);
//         reversedNum = (reversedNum * 10) + digit;
//     }
//     return reversedNum;
// }
// console.log("expect 4321:", reverse(1234));
let x=null;
let y;
console.log(typeof(x));
console.log(typeof(y));
console.log(x++);
y++;
console.log(x,y);
y=false;
console.log(x<y);
x+="2";
console.log(x);
console.log(x>y);