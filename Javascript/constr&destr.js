function human(val1, val2, val3) {
  this.name = val1;
  this.age = val2;
  this.address = val3;
  this.getDetails = function () {
    console.log("Hi this is " + this.name + " my age is " + this.age);
  };
}

let hObj1 = new human("Satish", 20, "Karur");
hObj1.favFood = "Biryani";
hObj1.favSport = "High jump";//these two new keys will be added to hObj1 object which has all the keys of human function.
console.log(hObj1);
