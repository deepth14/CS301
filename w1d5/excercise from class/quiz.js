// for(let i=0; i>10; i++){
//     console.log(i);
//    }
// let i =1;
// while(i<10){
//  console.log(i);
// }
//

// 
//

// let i =1;
// while(i<10){
//  console.log(i);
//  i--;
// }
//
for(let i=1; i<10; i++){
    if(i%3===0){
        i = 10;
     break;
    }
    console.log(i);
   }
   let i = 1;
   let flag = true;
   while (i < 10 && flag)
{
    if(i%3===0){
        flag = false;
    }
}


//
// for(let i=1; i<10; i++){
//     if(i%3===0) continue;
//     console.log(i);
//    }