var array = [1,20,65,4,8,75,99,6,5,78]
var val=array.filter((ele)=>{
    var val2=ele*2
    console.log(val2)
    return (ele>10);
});
console.log(val)


// var myFun=(a,b)=>a*b;
// console.log(myFun(4,5))
// var sum=0;
// var num=[10,20,30,40,50]
// num.forEach(ele =>{
//     sum=sum+ele;
// })
// console.log(sum);

// var arr=[10,20,30,40,50];
// var arrMap=arr.map(ele=>
//     ele>25?ele*3:ele*4);
// var val2=arrMap.filter(ele=>ele<90)
// console.log(arrMap)
// console.log(val2);

// var arr=[21,22,23,24,25,26]
// var result=arr.filter(ele=>ele%2===0)
//     .map(ele=>ele*2)
    // var val=arr.reduce((a,b)=>a-b)
    // console.log(val)    
    // console.log(result);
//     .forEach(n=>{
//     console.log(n)
// })

