var arr=[2,3,4,5,6,7,8,9,10,97,33];
var arr2=[];
var prime=false;
for(var i=0; i<arr.length;i++){
    for(var j=2; j<arr[i];j++){
    if(arr[i]%j==0){
    prime=true;
    break;
}
}
if(prime==false){
    arr2.push(arr[i]);
}
prime=false;
}
console.log(arr2)
