//Write a JavaScript Program to check whether the given number is Armstrong Number or NOT.
/*
 * 	Armstrong Number
 *
 * A positive number is called Armstrong number
 * if it is equal to the
 * sum of cubes of its digits
 * for example 0, 1, 153, 370, 371, 407 etc.
 *
 * 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * 370 = 3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370
 * 371 = 3^3 + 7^3 + 1^3 = 27 + 343 + 1 = 371
 */
var num="370";
var sum=0;
var noOfDigits= num.length;
var temp=num;
while(num > 0){
    sum=sum+(num%10)**noOfDigits;
    num=Math.floor(num/10);
}
if(sum==temp)
{
    console.log(temp + " " + "is  a armstrong value");
}
else{
    console.log(temp +" "+"is not a armstrong value");
}
