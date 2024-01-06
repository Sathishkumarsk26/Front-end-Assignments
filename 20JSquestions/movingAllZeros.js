// Write a JavaScript Program to Move all Zero to End of the Array
// Example usage:
// const numbers = [0, 5, 0, 3, 8, 0, 9];
// const result = moveZerosToEnd(numbers);
// console.log(result); // Output: [5, 3, 8, 9, 0, 0, 0]

var number = [0, 5, 0, 3, 8, 0, 9];
function moveZerosToEnd(arr) {
    var i, newArr;

    for (i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
             newArr = arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}
var result = moveZerosToEnd(number);
console.log(result);
