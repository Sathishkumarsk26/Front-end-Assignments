//simple for loop display elements in array
var arr=[10,20,30,40,50]
for(i=0;i<arr.length;i++){
    console.log(arr[i])
  }

// foreach loop to display array elements

var data=["Idly","Dosa","Poori","Vada","Meals"]
data.forEach(function myFood(vik,index){
console.log(index,vik)
})
//foreach loop to display array elements using arrow function

var beta=["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
beta.forEach((food)=>{
    console.log(food);
});

