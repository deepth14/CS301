function second(a, b, c) {
    if (a < b) {
        if (c < a) {
            return a;
        } else {
            if (b < c) {
                return b;
            } else {
                return c;
            }
        }
     }
    // else if (c < b) {
    //     return b;
    // } else if (a < c) {  //a > b and c > b
    //     return a;
    // } else {
    //     return c;

    // }
}
console.log(second(-1, 2, 1));