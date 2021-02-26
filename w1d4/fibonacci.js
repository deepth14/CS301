
/*Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
being positive integer from user input. 
input:postive intigers
   procedure  :fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
   output:The Fibonacci series of the number
*/
 const prompt = require("prompt-sync")();
const number = +prompt('Enter the number of terms: ');
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
