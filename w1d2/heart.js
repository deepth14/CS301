
const prompt = require("prompt-sync")()
let age = parseInt(prompt("enter your age:"));
let maxHeartRate = (220 - age);
let low = maxHeartRate * 65 / 100;
let high = maxHeartRate * 85 / 100;


console.log(low);
console.log(high)

