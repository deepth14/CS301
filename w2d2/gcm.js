// let GCM = function(a, b){  
//     let num; 
//    for(let i=1; i<=a && i<=b; i++){
//      if(a%i===0 && b%i===0){
//        num = i
//      }
//    }
//    return num
//  }
//  console.log(GCM(6,9))

let GCM = function(a, b){  
    let num; 
   for(let i=1; i<=a && i<=b; i++){
     if(a%i===0 && b%i===0){
       num = i
     }
    }
    return num
}

console.log(GCM(6,12))
