var arr = ["Password", "Sathish", "vikram", "vigesh"];
var wow = [];
var count = 0;
for (var i = 0; i <= arr.length - 1; i++) {
  for (var j = 0; j <= arr[i].length - 1; j++) {
    if (
      arr[i][j] == "a" ||
      arr[i][j] == "e" ||
      arr[i][j] == "i" ||
      arr[i][j] == "o" ||
      arr[i][j] == "u"
    ) {
      count++;
      wow.push(arr[i][j]);
    }
  }
}

console.log(" Total number of vowels in the given array "+'='+' '+ count);
console.log("Vowels present in the given array"+'='+ wow);
