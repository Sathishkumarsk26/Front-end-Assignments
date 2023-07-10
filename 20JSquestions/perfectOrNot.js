
//Write a JavaScript Program to check whether the given number is Perfect Number or NOT.

/*
 * Perfect Number
 * ---------------
 * Perfect number is a positive integer that is
 * equal to the sum of its proper positive divisors,
 * that is, the sum of its positive divisors excluding
 * the number itself.
 *
 * Following are the examples of perfect number.
 * 6 = 1+2+3
 * 28= 1+2+4+7+14
 * 496= 1+2+4+8+16+31+62+124+248
 *
 */

let num=596;
let sum=0;
for(i=1; i<=num; i++){
  sum=0;
  for(j=1; j<i; j++){
    if(i%j===0){
      sum=sum+j;
    }
  }
}
  if(sum===num){
    console.log(num+" is a perfect number");
  }
  else{
        console.log(num+" is not a perfect number");
 }