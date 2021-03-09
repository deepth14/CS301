"use strict";

exports.isPersonEqual = isPersonEqual;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.titleCase = titleCase;
exports.sumFirst = sumFirst;

/**
 * 1,
 */
let car = {
make:"toyota",
model:"camry"
}
console.log(car);
car.model="Rav 4";
console.log(car.model);
delete car.make;
console.log(car);
/*
2.	Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It can assume that the only properties it needs to check are name and age

 * @param{object} obj1 is a person
 * @param{object} obj2 is a person
 * @return{boolean} true if value equal  
 * 
 */
const sam1 = {
    name: "sam",
    age: 10
};
const sam2 = {
    name: "sam",
    age: 10
};
const john = {
    name: "john",
    age: 10
}
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true
    } else {
        return false;
    }
}
console.log("expect true: ",isPersonEqual(sam1,sam2));
console.log('expect false: ',isPersonEqual(sam1,john));
// 
/**
 *3, Write the function countProperties(obj) which returns number of properties of an object.
 * 
 */
const bob = {
    name: "bob",
    age: "10"
}
Object.keys(bob).length
console.log(Object.keys(bob).length)

/*4,Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false.
 * @param{string}-str 
 * @return{boolean}-true if str contains "lottery"or"prize
 */
function checkSpam(str) {
    if (str.includes("lottery") || str.includes("prize")) {
        return true;
    }
    return false
}
console.log(checkSpam(str));

/*
5.	Write a function named suffix that returns the common suffix of two strings. For example, the common suffix of “swimming” 
and “walking” is “ing”. This function takes two parameters and returns the common suffix.
*/



function suffix(wordA, wordB) {
    let a = wordA.split("");
    let b = wordB.split("");
    let suffix = [];

    for (let i = a.length - 1, j = b.length - 1; i >= 0 && j >= 0; j--, i--) {
        if (a[i] == b[j]) {
            suffix.unshift(b[j]);
        }
        else {
            break;
        }

    }
    console.log("Final suffix: " + suffix);
    return suffix.join("");
}


let result = suffix("johnson", "johmson");
console.log(result);
/**
 * 6,Write a function named titleCase with one parameter named s. This function returns a copy of s but with the first letter of each word capitalized
 * 
 */

function titleCase(s) {
    let fistInx = s.substr(0, 1).toUpperCase()
    let lastInx = s.substr(1, s.length).toLowerCase()
    let title = fistInx + lastInx
    return title;
}
console.log(titleCase(s));
/*
7.	Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.
Use for .. of
*/
function getAverageAge(users){
    let avgAge = 0;
    for(let key of users){
        avgAge = key.age + key.age / 2
    }
    return avgAge;
}




/* 8.	Write a function, sumFirst, to return the sum of the first elements of the inner arrays for arrays with the following structure. 
Use a for .. of loop.  
arr = [[1, 2], [3, 4], [5, 6]]  
*/

function sumFirst(arr){
    let sum=0;
    let i,j;
    for(i=0;i<arr.length;i++){
    
    for(j=0;j<arr[i].length-1;j++){
    sum+=arr[i][j];
    }
    }
    return sum;
    }
    console.log(sumFirst([[1,2],[3,4],[5,6]]))