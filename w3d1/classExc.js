"use strict";
/**
 /* eslint-disable */
// const sam1 = {
//     name: "sam",
//     age: 10
// };
// const sam2 = {
//     name: "sam",
//     age: 10
// };
// const john = {
//     name: "john",
//     age: 10
// };
// /**
//  * @param{object} obj1 is a person
//  * @param{object} obj2 is a person
//  * @return{boolean} true if value equal 
// * 
//  * 
//  */
// function isPersonEqual(obj1, obj2) {
//     if (obj1.name === obj2.name && obj1.age === obj2.age) {
//         return true
//     } else {
//         return false;
//     }
// }
// console.log("expect true: ",isPersonEqual(sam1,sam2));
// console.log('expect false: ',isPersonEqual(sam1,john));

// /** pill point
//  * 
//  * 
//  * 
//  */
// // afternoon class
// /**
//  * Exercise: refactor the for loop to use an index instead of for..of
//  */
// for(let i=0;i<"hello".length;i++){
//     console.log("hello"[i]);
//}
/**
 * Write a program that keeps on asking for user input and prints it, until
user types the word "stop" (without quotes). "Stop" word can be in
any case (small, capital or mixed)
• 
• Write a function to replace the first occurrence of "for" in an input
string with 4
 * 
 * 
 * 
 * 
 * 
 * 
//  */
// const prompt=require("prompt-sync")();
// do{
//     const input= prompt("say something;");
//     input=input.toLocaleLowerCase();
// }
// while(input!=="stop");

/**Write a function that takes a comma separated string of words and
converts it into an array of words and prints in reverse order.
 * 
 * 
 * 
 */
// function reversedStringWord(str) {
//     const wordArray = str.split(",");
//     wordArray.reverse();
//     for (word of wordArray) {
//         console.log(word);
//     }
// }
// console.log(reversedStringWord("today,is,hot!!"))
/**
 * Write a function to replace the first occurrence of "for" in an input
string with 4
 * 
 */
// function replace(str){
//     const fIndex=str.indexOf("for");
//     const subString1=str.substr(0,fIndex);
//     const subString2=str.substr(fIndex + 3,str.length-1);
//     return subString1 + 4 +subString2;
// }
// const testString = "find the first for in this forString";
// console.log(replace(testString));

// const arr = [[1, 2], [3, 4], [5, 6]]

function sumFin(arr){
    let sum=0;
    
    for(let i=0;i<arr.length;i++){
    //sum=0
    for(let j=0;j<arr[i].length;j++){
    sum+=arr[i][j];
    }
    }
    return sum;
    }
    console.log(matrixSum([[1,2,3],[3,4,5],[5,6,6]]))