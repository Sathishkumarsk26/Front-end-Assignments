//normal function
// let sum=function(a,b){
//     console.log(a+b); 
// }
// sum(25,175)

//arrow function

// let sum=(a,b)=>a+b;
// console.log(sum(24,6));

let sathish = (data)=>{
    // let val = data;
    let sum = 10+data;
    console.log(sum);
    console.log("I am inside the function sathish")
    return sum > 20 ? 50/2 : (42%3 === 0) ? 22:98
  }
  console.log(sathish(4))