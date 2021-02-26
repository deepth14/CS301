"use strict";
// A
for(let i =1; i<=5;i++){
    let count = "";
    for(let j = 0;j<i ;j++){
        count+=i;
    }
    console.log(count)
}


//B

for (let i = 1; i <= 5; i++) {
    let count = "";
    for (let j = 1; j <= i; j++) {
        count += j + " ";
    }
    console.log(count);
}
//c
for (let i=5;i>=1;i--){
    let count = "";
    for(let j= 0; j<i; j++){
        count+=i;
    }
    console.log(count);
}