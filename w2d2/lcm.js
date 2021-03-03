// Finding LCM 
const LCM = (a, b)=>{
    let num;
    for(let i=1; i<=a && i<=b; i++){
        if(a%i===0 && b%i===0){
            num = i
        }
    }
    return a*b/num;
}
console.log(LCM(6,8))

