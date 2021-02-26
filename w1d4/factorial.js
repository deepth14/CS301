/* Write a Java program to calculate the factorial value of a given number. E.g., factorial 4 =
4*3*2*1 = 24 */
" use strict";
let number = 4;
let factorial = 1;
if (number < 0) {
    console.log("can't find factorial for negative number");
}
else {
    for (let num = 2; num <= number; num++) {
        factorial = factorial * num;
    }
    console.log(`${number}!= ${factorial}`);
}

