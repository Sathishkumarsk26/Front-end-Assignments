//Find the second largest number in the given array.
let arr=[44,97,85,52,43];
arr.sort(function(a,b){
  return b-a;
})
console.log(arr[1])//output=85
