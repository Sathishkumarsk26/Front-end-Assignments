var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [];
var sum = 0;
var n=5;
for (var i = 0; i < arr.length; i++) {
  if (i < n) {
    sum = sum + arr[i];
    if (i == (n-1)) {
      arr2.push(sum);
    }
    } 
  else {
    arr2.push(arr[i]);
  }
}
console.log(arr2);
