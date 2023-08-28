function calculate(num)
{
  let sum = a+b;
  a = a+5;
  console.log(sum);
  let val1 = num + sum;
  let calc= a*b;
  console.log(calc);
  return Math.floor(val1/2);
}
let a=10;
let b=20;
let val=calculate(5)

console.log(a)
console.log(math(plus,minus,mul,div))
console.log(calculate(5))

 
  function plus(num1)
{
  let cal=num1+15;
  console.log (cal);
  return Math.pow(cal,2);
}
function minus(q,w)
{
  console.log(q*w);
  return Math.pow(q*w/4);
}

 function math(html,css,java,console)
{
  let arr=[5,6,7,8,10,15.42,89]
  let c =arr.slice(2,3);
  let d =arr.splice(1,4);
  console.log(d);
 console.log(c);
  let val2=java(8,4);
  console.log(val2/2);
  let val3=console(15,10,7);
  console.log(val3/c)
  let val4=html(5)
  let val5=css(2,8);
  return val4
}
function mul(e,f)
{
  let code = e*f;
  console.log(code);
  return code;
 }
function div(y,o,u)
{
  return Math.floor(y*o/u);
}
