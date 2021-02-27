/* . Write a function, areaOfCircle, that computes and returns area of a circle based on the
value of input radius.
*/
const prompt = require("prompt-sync")();
radius = +prompt("enter radius: ");
let calculateArea = areaOfCircle(radius);
 function areaOfCircle(radius){
     return radius * radius *Math.PI
 }
 console.log(calculateArea);
