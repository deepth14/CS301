/*Write JavaScript program to compute the mileage of a vehicle.*/

const prompt = require("prompt-sync")()
let intialMile = prompt("enter beigning milage: ");
let finalMile = prompt("enter ending milage: ");
let gas = prompt("number of gallons gas used: ");
let cityMilage = (finalMile -intialMile) / gas;
console.log(cityMilage, "miles per gallon");
