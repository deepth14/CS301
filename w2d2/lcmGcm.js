let GCM = function(a, b){  
        let num; 
       for(let i=1; i<=a && i<=b; i++){
         if(a%i===0 && b%i===0){
           num = i
         }
       }
       return num
     }
     console.log(GCM(6,8))
    //  Call back function
const LCM = function(a,b){
    let lcm = GCM(a,b)
    let result = a*b/lcm
    return result
  }
  console.log(LCM(6,8))
  