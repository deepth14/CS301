/*  Write a program that calculates down payment for a home loan based on following rules. 

cost of house           down payment

$0<cost<50k$        5% of the housecost
$50k<cost<$100k     $1000 + 10%(housecost-$50k)
$100k<cost<$200k    $2000 + 15%(housecost-$100k)
cost=>$200k         $5000 +10%(housecost-$200k)

*/
const prompt = require("prompt-sync")();

let houseCost = parseInt(prompt('enter house cost: '))
let downPayment;
if(houseCost > 0 && houseCost <= 50000){
    downPayment = 5 / 100 * houseCost;
    console.log(downPayment)
}
else if(houseCost > 50000 && houseCost < 100000){
    downPayment = 1000 + 10 / 100 * (houseCost-50000);
    console.log(downPayment)
}
else if(houseCost > 100000 && houseCost < 200000){
    downPayment = 2000 + 15 / 100 * (houseCost-100000);
    console.log(downPayment)
}
else if(houseCost >= 200000 ){
    downPayment = 5000 + 10 / 100 * (houseCost-200000);
    console.log(downPayment)
}


