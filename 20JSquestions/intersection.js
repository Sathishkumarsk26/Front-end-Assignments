//Write a JavaScript Program to find the Intersection of two arrays
//method 1
let array1 = [1, 3, 4, 5, 8];
let array2 = [3, 5, 7, 9];
var result= function findIntersection(array1,array2){
let arr3=[];
for(i=0;i<array1.length;i++){
  for(j=0;j<array1.length;j++){
    if(array1[i]==array2[j]){
      arr3.push(array1[i]);
    }
}
}
return arr3;
}
console.log(result(array1,array2))//output=[3,5]

//method 2
let arr1 = [1, 3, 4, 5, 8];
let arr2 = [3, 5, 7, 9];
let arr3 = arr1.filter(ele=>arr2.includes(ele))
console.log(arr3)//output=[3,5]