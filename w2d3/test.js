"use strict";
exports.checkPrime = checkPrime;
exports.areaOfCirlce = areaOfCircle;
/**
 * 
 * @param {int} n - postive
 * @return {boolean} true / false
 * 
 */
function checkPrime(n){
    for(let i=2; i<n; i++){
        if(n%i!==0){
            console.log(true)
            return true
        }
        console.log(false)
        return false
    }
    }
    checkPrime(9)
    /**
     * 
     * @param {int} n - postive integers
     * @return {int} - area of circle
     * @process - multipy value of PI withsquare of radiu
     */
    function  areaOfCircle(r){
        return (Math.PI * r *r).toFixed(2)
        }
        
    console.log("expect area of circle: ", areaOfCircle(1));






    