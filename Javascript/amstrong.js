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