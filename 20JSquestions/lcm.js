//Write a javaScript program to LCM of TWO given number
let num1=6;
let num2=8;
var count=0;
for(i=1;i<=num1&&i<=num2;i++){
  if(num1%i===0&&num2%i===0){
    count++;
  }
}
let val=num1*num2/count;
console.log(val)