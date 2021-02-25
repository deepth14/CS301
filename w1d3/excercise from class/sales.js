"use stric";

/* Write a program to compute sales commission based on following
rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
• 3% for sales above $500 */

const prompt = require("prompt-sync")();

let sale = +prompt("Pleas enter the sale:  ");
let salaried = prompt("is this salaried? yes or no ");
if (salaried){
    console.log("determine the salaried commision")
    if(salaried<300){
        console.log("no comussion, sorry");
        } else if(sale<500){
            console.log("1 percent commision ", .01*sale);
        }else{
            console.log("2 percent commission", .02*sale);
        }
        
}
 else { //determine commission for hourly
    if (sales < 300) {
        console.log("no commission, sorry.");
    } else if (sales < 500) {
        console.log("2 percent commission", .02 * sales);
    } else {
        console.log("3 percent commission", .03 * sales);
    }
}
 