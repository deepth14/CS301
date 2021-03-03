function revers(n){
    let result = ''
    while(n > 0){
        result += n %10;
        n = Math.floor(n / 10 );
    }
    return result
}console.log(revers(12345))