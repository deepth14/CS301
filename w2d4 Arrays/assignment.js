"use strict"
exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.rotateNRight = rotateNRight;
/**
 * 
 * @param {Array} arr is array of nums
 * @returns {number} sum of two elements
 */
function addends(arr) {
    let sum = arr[0] + arr[arr.length - 1];
    return sum;
}
addends([-1, -100, 1, 2, 3, -55])

/**
 * @param {Array} arr is an array of nums
 * @returns {number} average of the two middle elements
 */
function getMiddle(arr) {
    let middle;
    if (arr.length % 2 !== 0) {
        return middle = arr[Math.round((arr.length - 1) / 2)]
    } else {
        let m = arr[Math.round((arr.length) / 2)] + arr[Math.round((arr.length) / 2) - 1]
        return middle = m / 2
    }
}
getMiddle([-1, -100, 1, 2, 3, -55])

/**
 * @param {Array} arr is array of nums
 * @returns {number} an array that rotates to the left by 1
 */
function rotateLeft(arr) {
    let newArr = []
    let lastArr = arr[0];
    console.log(lastArr)
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i])
    }

    return newArr = [...newArr, lastArr]
}
rotateLeft([-1, -100, 1, 2, 3, -55]);

/**
 * @param {Array} arr is array of nums
 * @returns {number} an array that rotates to the right by 1
 */
function rotateRight(arr) {
    let newArr = []
    let lastArr = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i])
    }
    return newArr = [lastArr, ...newArr]
}
rotateRight([-1, -100, 1, 2, 3, -55]); //[-55, -1, -100, 1, 2, 3]

/**
* @param {Array} arr is array of nums
* @returns {number} an array that rotates to the right by n times
*/
function rotateNRight(arr, n) {
    let newArr = [];
    let lastArr = [];
    for (let i = 0; i < n; i++) {
        lastArr.push(arr[i])
    }
    console.log(lastArr)
    for (let i = n; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr = [...newArr, ...lastArr]
}
//  console.log(rotateNRight([-10, 2, 3, 4, 20], 4))// [2, 3, 4, 20, -10])

/**
 * @param {String} -string of  numbers as comma separated values
 * @returns {number} - sum of the positive elements
 */
function fmrString(arr){
    let total =0
    let sum =[];
    for(let i=0; i<arr.length; i++){
       if(arr[i]>0){
           sum.push(arr[i])
       }
    }
   sum= sum.toString().split('') 
   for(let ele of sum){
       if(ele!==','){
           total += Number(ele)
       }
   } 
   return total  
}
let arr=[32,105,-22]


//console.log(filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]))
/**
 * @param {arr, arr} num - matrix array of numbers
 * @returns {Array} num - addition of matrix numbers of two arrays
 */


    /**
     * @param{​​​​​Array}​​​​​ - takes an array
     * @returns{​​​​​Array}​​​​​ - palindrome array
     */

//     function filterPalindromes(arr) {
//         let str = []
//         let word;
//         for (let ele of arr) {
//             word = ele.split("").reverse().join("")
//             if (word === ele) {
//                 str.push(word)
//             }
//         }
//         return str
//     }


// console.log(filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]))

/**
 * @param{Array}​​​​​ - matrix1  is 2d array 
 * @param{Array} -matrix2 is 2d array
 *  @returns{​​​​​Array}​​​​​ sum array - addition of matrix of two arrays
 */
// function matrixAddition(arr, arr1) {
//    sumMatrix = [[],[]];
   
//     for (leti = 0; i < maxtrix1.length; i++) {
//         for (letj = 0; j < matrix1.length; j++) {
//             sumMatrix[i][j] = matrix1[i][j]+ matrix1[i][j];
            
//         }
//     }
//     console.log(sumMatrix);
//     return sumMatrix;
// }
// console.log(matrixAddition([[0, 1, 2], [9, 8, 7]], [[6, 5, 4], [3, 4, 5]]))//, [[6, 6, 6], [12, 12, 12]]

