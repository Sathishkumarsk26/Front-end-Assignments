function reversal(num){
    let rev=0;
    let arr2=[];
for(let i=0;i<num.length;i++){
    num1=num[i];
    if(num1<0){
        num2=-num1;
    }
    else{
        num2=num1;
    }
while(num2>0){
    rev=rev*10+num2%10;
    num2=Math.floor(num2/10);
}
    arr2.push(num1<0?-rev:rev);
    rev=0;
}
return arr2;
}
let num=[-234,854,-6978,254,-456]
let rev1=reversal(num);
console.log(rev1);