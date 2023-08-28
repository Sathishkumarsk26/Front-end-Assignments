let num=12345;
let rev=0;
while(0<num)
{
    rev=rev*10+num%10;//2//20+1=21
    num=Math.floor(num/10);//1=0
}
console.log(rev);
// function reversal(num)
// let rev=0;
// let rev2=rev;
// {
// while(num>0){
//     rev=rev*10+num%10;
//     num=Math.floor(num/10);
// }
// }
// console.log(rev2)