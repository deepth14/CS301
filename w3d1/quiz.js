"use strict"
/**
 *1, distructive array method
--push,pop,shift,splice,reverse sort
/** safe :concat join for each
 */
/**
 * 2,
 */
const arr = [7, 10, 3, 88, 4];
function findMin(arr) {
    let min = infinity
   
    for (let element of arr) {
        if (element<min);
        min = element;
    }
return min
}
console.log(findMin);

//
/**3. Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
of values on the odd indices. 
 * 
 * 
 * 
 */


    function sumOddIndicesValues(arr1, arr2) {
        let sumArr = [];
    
        
        for (let i = 0; i < arr1.length; i++) {
            sumArr.push([]);
        }
    
        for (let i = 0; i < arr1.length; i++) {  
            for (let j = 0; j < arr1[i].length; j++) { 
                sumArr[i][j] = arr1[i][j] + arr2[i][j];
            }
        }
        console.log(sumArr);
        return sumArr;
    
    }
    /**
     * 4,Write a function sumArrays, that takes two arrays as parameters (you can assume of same
length) then returns a new array by adding two array values at the corresponding indices
     * 
     * 
     */

     function sumArray(arr1,arr2){
       let sumArray = [];  
     for (let i=0;i<arr1.length;i++){
         sumArray[i]=arr[i]+arr2[i]
     }
    return sumArray;
    }

