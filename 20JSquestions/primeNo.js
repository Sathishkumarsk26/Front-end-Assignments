//Write a JavaScript Program to print Prime Numbers from 1 to N.
var number=prompt("enter a number");
var count=0;
for(i=2; i<=number; i++){
  for(j=1;j<=i;j++){
    if(i%j===0){
      count++;
    }
  }
    if(count===2){
      console.log(i);
    }
    count=0;
  }