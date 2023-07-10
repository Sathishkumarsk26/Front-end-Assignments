//Write a JavaScript Program to find the Factorial of given number.
let number=prompt("enter a number");
let mul=1;
for(i=1;i<=number;i++){
  mul*=i
}
console.log("The Factorial of given number is : "+ mul)