
/**
 * 1,
 * Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers
as an argument and returns true if the sum of all the prime elements in the given array is
even otherwise returns false. If the array is empty or if the array does not contain any
prime element it should return false.
 * 
 * 
 * 
 * 
 */
 function isSumOfPrimeEven(arr) {
    let sum = 0;
    for (const element of arr) {
        if (isprime(element)) {
            sum += element;
        }
    }
} if (sum % 2 === 0) {
    return true;
} else {
    return false;
}
function isprime(n) {
    if ([2, 3, 5, 7, 11,13].includes(n)) {
        return true;
    } else {
        return false;
    }
}
console.log(isSumOfPrimeEven(arr));
/*
An array is called a perfectly odd array if every element at the odd indices of the array is
also odd. Write a function named isPerfectlyOdd that takes an array of integers as a
parameter and checks whether it is perfectly odd. Return false if the array is an empty array.

*/



function oddindixe(arr) {
    if (arr.length == 0) {
        return false
    }

    for (i = 1; i < arr.length; i = i + 2) {
        if (arr[i] % 2 == 0) {
            return false;
        }
    }
    return true;
}
console.log(oddindixe([1, 3, 4, 5, 5, 7]))//true
console.log(oddindixe([]))//false
console.log(oddindixe([2, 3, 4, 5, 7, 8]))//false
console.log(oddindixe([3, 9, 9, 5, 5, 7, 9]))// true

/**
 * 3. Write a function that given an array of integers returns the sum of elements at the prime
indices. For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 which are values
at the prime indices of the array
 *
 */
function testPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;

        }
    }
    return true;

}
//console.log(testPrime(number))




function sumOfPrimeIndice(arr) {
    let sum = 0

    for (let i = 2; i <arr.length; i++) {

        if (testPrime(i)) {
            sum += arr[i]

        }
        console.log(i);
    }
    return sum;
}
console.log(sumOfPrimeIndice([1, 5, 6, 7, 8, 3]))



/**
 * 4. Write a function that takes a string parameter and returns the middle character of the
string. If string is of even length then function should return the middle two characters.
 * 
 */
function middle(str) {
    const length = str.length;
    const midPoint = Math.floor(length / 2);
    if (length % 2 === 0) {
        return str[midPoint - 1] + str[midPoint]
    } else {
        return str[midPoint];
    }
}
console.log("expect b: ", middle("abc"));
console.log("expect bc: ", middle("abcd"));

/**
 * 5. Write a function isSumEqual that takes two array parameters and returns true if the
sum of elements in both arrays are equal.
 */
function isSumEqual(arr1, arr2) {

    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    for (let j = 0; j < arr2.length;j++){
        sum2+=arr2[j];
    }
    if(sum1===sum2){
        return true;
    }else {
        return false;
    }


}
console.log(isSumEqual([1,2,3],[4,2,1]));


/**
 * 6,// output= 10;
 * 
 * 7,// output= 5;
 * 
 * 
 */