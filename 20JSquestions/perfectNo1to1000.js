//Write a JavaScript Program to print Perfect Numbers between 1 to 1000.
let num=1000;
let sum=0;
for(i=1; i<=num; i++){
  sum=0;
  for(j=1; j<i; j++){
    if(i%j===0){
      sum=sum+j;
    }
  }
  if(sum===i){
    console.log(i);
}
}