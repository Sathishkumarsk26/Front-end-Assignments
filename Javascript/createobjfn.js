let person ={
    name:"Sathish",
    printIntro:function(){
        console.log("My name is " + this.name +"."+ "Am I developer? "+ this.isDev);
    }
}
let mySelf=Object.create(person);
mySelf.name="Sathish Kumar";
mySelf.isDev=true;
mySelf.printIntro();