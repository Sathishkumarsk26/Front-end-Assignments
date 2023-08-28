//DOM --> Document object model --> represents the html file in object format
// It helps to connect the html with JS
// The JS can manipulate the html using the DOM interface
// DOM gives us multiple methods with which we can change the behavior and structure of our web page


let div1 = document.getElementById("firstDiv");
let div2 = document.getElementById("secondDiv");

let para = document.createElement("p");
let para2 = document.createElement("p");
let para3 = document.createElement("p");
let para4 = document.createElement("p");
let text=document.createTextNode("Hello I am para1");
let text2=document.createTextNode("Hello I am para2");
let text3=document.createTextNode("Hello I am para3");
let text4=document.createTextNode("Hello I am para4");
para.appendChild(text)
para2.appendChild(text2)
para3.appendChild(text3)
para4.appendChild(text4)
div1.appendChild(para)
div1.appendChild(para2)
div1.appendChild(para3)
div1.appendChild(para4)
para.style.color="red"
para2.style.color="green"
para3.style.color="blue"
para4.style.color="brown"
para.setAttribute("id", "para1")
// console.log(div1.firstChild)
// console.log(div1.nodeName)
// console.log(div1.nodeType)
// console.log(div1.childNodes)

let child = div1.childNodes

child.forEach(ele=>{
    ele.classList.add("myclass")
})

let child2= div2.childNodes

child2.forEach(ele=>{
    console.log(ele.nodeName)
if(ele.nodeName === "p"){
    ele.style.color="yellow"
}
else{
    ele.style.color="violet"
}
})