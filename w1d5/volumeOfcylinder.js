/*
Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
of the areaOfCircle function.
*/
const prompt = require("prompt-sync")();
let radius = +prompt("enter radius: ");
let height = +prompt("enter height: ")

function volumeOfCylinder(height) {
   let volume = areaOfCircle(radius) * height;
   return volume;
} 
function areaOfCircle(radius) {
    let area = radius * radius * Math.PI
    return area;

}

console.log(volumeOfCylinder(height))
