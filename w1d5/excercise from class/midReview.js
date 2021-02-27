// let x = 0;
//  x++;
//  console.log(x);
//  ++x;
//  console.log(x);
//  console.log(++x);
//  console.log(x);
//  console.log(x++);
//  console.log(x);
// function f() {
//     let a = 1, b = 20, c;
//     console.log(a + " " + b + " " + c); // 1 20 undefined
//     function g() {
//     let b = 300, c = 4000;
//     console.log(a + " " + b + " " + c); // 1 300 4000
//     a = a + b + c;
//     console.log(a + " " + b + " " + c); // 4301 300 4000
//     }
//     console.log(a + " " + b + " " + c); // 1 20 undefined
//     g();
//     console.log(a + " " + b + " " + c); // 4301 20 undefined
//     }
//     f();
//
let x = 10;
function main() {
let x = 0;
console.log("x1 is " + x);
x = 20;
console.log("x2 is " + x);
if (x > 0) {
x = 30;
console.log("x3 is " + x);
}
console.log("x4 is " + x);
function f(x) {
console.log("x5 is " + x);
}
f(50);
console.log("x6 is " + x);
}
main();
console.log("x7 is " + x);