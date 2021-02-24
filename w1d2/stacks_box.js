let boxInEachStack = 6
let totalBox = 74

let x = totalBox / boxInEachStack

console.log(parseInt(x) + Number(totalBox%boxInEachStack != 0))
let excess = (totalBox % boxInEachStack) 
console.log("There are " + parseInt(x) + " full stacks.");
console.log("The last stack has " + excess + " boxes.");

// let count = 0;

// // while( totalBox > 0){
// //     //totalBox -= boxInEachStack;
// //     totalBox = totalBox - boxInEachStack;
// //     count++;
// // }
// // console.log(count);


// if( totalBox % boxInEachStack != 0 ){
//     console.log(parseInt(x) + 1);

// console.log(43);
// }
// // else{
// //     console.log(parseInt(x));
// // }