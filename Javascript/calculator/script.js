let div1=document.getElementById("container")
let div2=document.getElementById("container2")

let btNs=document.createElement("button");
btNs.setAttribute("id","btn1");
let text=document.createTextNode("ADD");
btNs.appendChild(text);
div2.appendChild(btNs);
btNs.addEventListener("click",getAdd)

function getAdd(){
let sum=parseInt(inputType1.value)+parseInt(inputType2.value);
document.getElementById("default").innerHTML="Added value is "+sum;
}

let btNs2=document.createElement("button");
btNs2.setAttribute("id","btn2");
let text2=document.createTextNode("SUBTRACT");
btNs2.appendChild(text2);
div2.appendChild(btNs2);
btNs2.addEventListener("click",getSub)

function getSub(){
let sub=parseInt(inputType1.value)-parseInt(inputType2.value);
document.getElementById("default").innerHTML="Subtracted value is " + sub;
}



let btNs3=document.createElement("button");
btNs3.setAttribute("id","btn3");
let text3=document.createTextNode("MULTIPLY");
btNs3.appendChild(text3);
div2.appendChild(btNs3);
btNs3.addEventListener("click",getMul)

function getMul(){
let mul=parseInt(inputType1.value) * parseInt(inputType2.value);
document.getElementById("default").innerHTML="Multiplied value is "+mul;
}


let btNs4=document.createElement("button");
btNs4.setAttribute("id","btn4");
let text4=document.createTextNode("DIVIDE");
btNs4.appendChild(text4);
div2.appendChild(btNs4);
btNs4.addEventListener("click",getDiv)

function getDiv(){
let divide=parseInt(inputType1.value)/parseInt(inputType2.value);
document.getElementById("default").innerHTML="Divided value is "+divide;
}




