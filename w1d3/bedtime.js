/*  Write a defining table and then a program that determines what time a child should go to bed.
Your program must read a child’s age and the season (winter, spring, summer, or fall) from the
keyboard and output the child’s bedtime according to this table:
input:            operation/selection:       output:

age/season            &&                         bed time






*/
const prompt = require("prompt-sync")();
let age = prompt('enter your age: ');
let season = prompt('entert season: ');
let bedTime;
if(age > 0 && age <= 5){
    if(season === 'summer' ||  season === 'fall'){
        console.log('bed time is 8:30 pm ')
    }
else if(season === 'winter' || season === 'spring'){
    console.log("bed time is 8:00 pm ")
}
    
}
else if (age >= 6 && age <= 12){
    if(season === 'summer'){
        console.log("bed time is 9:30 pm ")
    }
    else if (season !== 'summer' ){
        console.log("bed time is 8:30 pm ")
    }
}
else if (age>= 13 ){
    if(season === 'summer'){
        console.log("bed time is 10:30 pm")
    }
    else if(season !==  'summer'){
        console.log("bed time is 9:30 pm ")
    }
}
