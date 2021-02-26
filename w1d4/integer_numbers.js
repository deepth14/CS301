
let value =444
sum = 0;

while (value) {
sum += value % 10;
value = Math.floor(value / 10);
}

console.log(sum);