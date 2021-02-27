"use stric"
function testPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;

        }
    }
    return true;

}
console.log("expect true for 5; ", testPrime(6));
console.log("expect false for 5; ", testPrime(66));

