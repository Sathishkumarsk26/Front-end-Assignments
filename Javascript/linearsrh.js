var arr = [12, 45, 5, 8, 89, 57, 98, 44];
var arr2 = 100;
// var isPresent =false;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == arr2){
//         isPresent = true;
//         break;
//     }
// }
// if (isPresent) {
//     console.log(arr2 + " " + "present in the array");
// }
//  else :
//     console.log(arr2 + " " + " not present in the array");
//   }
// console.log(arr.includes(arr2) ? arr2 + " " + "present in the array": arr2 + " " + " not present in the array" );

console.log(arr2 + " " + (arr.includes(arr2)? "present":"not present"+ " "+"in the array"));