let num=515;
let rev=0;
let val=num;
while(0<num)
{
    rev=rev*10+num%10;
    num=Math.floor(num/10);
}
if(rev==val)
{
    console.log(val + " " + "is a palindrome");
}
else{
    console.log(val + " " + "is not a palindrome");
}
