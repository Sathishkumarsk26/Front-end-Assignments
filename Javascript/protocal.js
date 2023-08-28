let obj={
    name:"sathish kumar",
    age:25,
    native:"karur",
    prtDetails:function(){
        console.log("the Name is "+ this.name +','+ "native is "+ this.native)
    }
};
let obj2={
    name:"sathish anirudh",
    native:"bangalore",
    __proto__:obj
}
obj2.prtDetails()