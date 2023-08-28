let myObj = {
  name: "Abhishek",
  org: "Pure",
  sal: "1500",
  getDetails: function (val, data) {
    let org;
    if (!this.org) {
      org = val;
    } else {
      org = this.org;
    }
    let num = data;
    console.log(
      "Hi my name is " + this.name + " My org is " + org + " the data is " + num
    );
  },
};

let myObj1 = {
  name: "Anirudh",
//   org: "Dell",
  music: true,
};

myObj.getDetails.call(myObj1, "Amazon", 90);
myObj.getDetails.apply(myObj1,["flipkart",120]);
let hat=myObj.getDetails.bind(myObj1,"tcs",340);
hat()
