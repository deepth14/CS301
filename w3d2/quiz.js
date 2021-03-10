"use strict";
// let person1={
//     name:"alien",
//     age:23,
//     employee: true,
// }
// let person2= person1;
// console.log(person1===person2);
// person1.salary=5000;
// person1.age =35;
// console.log(person2.salary);
// console.log(person2.age);
// delete person2.salary;
// console.log(person1.salary);
// person2.salary = 3000;
// console.log(person1.salary);
//
let person1={
    name:"alien",
    age:23,
    employee: true,
}
let person2={
    name:"alien",
    age:23,
    employee: true,
}
console.log(person1===person2);
person1.age =35;
console.log(person2.age);
person2.salary=5000;
console.log(person1.salary);
//


let a = 5;
let b = 7;
console.log(a,b);
swap1(a,b);
console.log(a,b)

let arr = [1,2,3];
console.log(arr);
swap2(arr, 0, 2);
console.log(arr);

function swap1(a,b){
    let temp = a;
    a=b;
    b=temp;
}

function swap2(arr, i, j){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
}
