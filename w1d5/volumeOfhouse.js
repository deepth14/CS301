/*Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in
figure below. Write code to call and test your function.
   houseVolume = livingVolume + roofVolume
  livingVolume = width * height * depth
  roofVolume = triangleArea*depth
  triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2

*/
const prompt = require("prompt-sync")();
let width = +prompt("enter width: ");
let height = +prompt("enter height: ");
let depth = +prompt("enter depth: ");

let s = (width + height + depth) / 2
let triangleArea = Math.sqrt(s * (s - width) * (s - height) * (s - depth));

function livingVolume(width, height, depth) {
    let volume = width * height * depth
    return volume;
}
function roofVolume(triangleArea, depth) {
    roofV = triangleArea * depth
    return roofV;

}

let rV = roofVolume(triangleArea, depth)
let lV = livingVolume(width, height, depth)
console.log(lV)
console.log(rV)

function houseVol(roofVol, livingVol) {
    return roofVol + livingVol;
}

console.log(houseVol(rV, lV));

