//Write a javaScript program to Reverse a given number
let  num=56789;
let rev=0;
while(num>0){
    rev=rev*10+num%10;
    num=Math.floor(num/10);
}
console.log(rev)//output 98765