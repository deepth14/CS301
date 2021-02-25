const prompt = require('prompt-sync')();

let sales = +prompt("Please enter the sales: ");
let salaried = prompt("is this salaried? yes or no ");


if (salaried === "yes") { // determine the salaried commission
    if (sales < 300) {
        console.log("no commission, sorry.");
    } else if (sales < 500) {
        console.log("1 percent commission", .01 * sales);
    } else {
        console.log("2 percent commission", .02 * sales);
    }


} else { //determine commission for hourly
    if (sales < 300) {
        console.log("no commission, sorry.");
    } else if (sales < 500) {
        console.log("2 percent commission", .02 * sales);
    } else {
        console.log("3 percent commission", .03 * sales);
    }
}