var count = 0;
var count1=0;
for (var i = 2; i <= 100; i++) {
  for (var j = 1; j <= i; j++) {
    if (i % j == 0) count++;
  }
  if (count != 2) {
    console.log(i);
    count1++;
  }
  count = 0;
}
console.log("Total no. of prime numbers between 1 to 100 "+'='+count1)
