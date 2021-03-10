"use strict"

let fliter = [1,2,3,4,6,7]
let range = filterRange(fliter,2,7)
console.log("range")

function filterRange(arr,a,b){
    let resulte;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>= a && arr[i] <=b)
        resulte.add(arr[i])
    }
    return resulte;
}