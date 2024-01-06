//Find the missing Number in the given array of 1 to N.
let arr=[1,2,3,5]
let sum1=0;//11
let sum2=0;//15
for(i=0;i<arr.length;i++){
  sum1=sum1+arr[i];
}
for(j=1;j<=5;j++){
  sum2=sum2+j;
}
var mis=sum2-sum1;
console.log(mis)//output=4