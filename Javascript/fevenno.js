var arr=[10,55,88,91,104,203]
var arr2=[]
var count=0
for(var i=0; i<=arr.length; i++){
    if(arr[i]%2==0){
        arr2.push(arr[i]);
        count++;
     }
}
console.log(count);
console.log(arr2)


