var val=function(){
    console.log ("type 1: "+"welcome to the world of javascript")
}
val()

var val=function(ext){
    console.log("type 2: "+"welcome to "+ext)
}
val("the world of javascript")


//using arrow function.. curly braces were not necessary for single line functions..
//1.with curly braces after arrow function

var val=()=>{
console.log ("welcome to the world of javascript1")
console.log ("welcome to the world of javascript2")
console.log ("welcome to the world of javascript3")
console.log ("welcome to the world of javascript4")
console.log ("welcome to the world of javascript5")
}
val()



//without curly braces after arrow function


var val=()=>
    console.log ("welcome to the world of javascript6")
    console.log ("welcome to the world of javascript7")
    console.log ("welcome to the world of javascript8")
    console.log ("welcome to the world of javascript9")
    console.log ("welcome to the world of javascript10")
    val()


