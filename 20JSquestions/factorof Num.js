//Write a JavaScript Program to print all the Factors of any Given number.
let number=prompt("enter a number");
for(i=1; i<=number;i++){
  if(number%i===0){
    console.log(`The factors of given number is : ${i}`)
  }
}
