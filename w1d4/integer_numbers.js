
// let value =444
// sum = 0;
// const alert = require("")
// while (value) {
// sum += value % 10;
// value = Math.floor(value / 10);
// }

// alert(sum);
const prompt = require("prompt-sync")();
let a = +prompt("enter first number: " );
let b = +prompt("enter second number: ");
 sum(a);

function sum(num1, num2=5){
    let sum = num1 + num2;
    console.log(sum);
     return sum;
}
// console.log();