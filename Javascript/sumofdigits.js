var value = 2867;
var sum = 0;

while (value>0) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);