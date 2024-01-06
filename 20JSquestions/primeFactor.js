// Write a JavaScript Program to print all the Prime Factors of the Given Number.
let number=prompt("enter a number");
let arr=[];
for(i=2; i<=number;i++){
  if(number%i===0){
    arr.push(i);
    number=math.floor(number/i);
    i--;
  }
}
console.log(`The factors of given number is : ` + arr)