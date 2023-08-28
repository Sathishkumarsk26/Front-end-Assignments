let classData = [
  {
    name: "Ram",
    id: "12A",
    marks: 56,
    class: 12,
  },
  {
    name: "Ramesh",
    id: "12B",
    marks: 67,
    class: 12,
  },
  {
    name: "Hari",
    id: "12C",
    marks: 78,
    class: 12,
  },
  {
    name: "John",
    id: "12D",
    marks: 45,
    class: 12,
  },
  {
    name: "Mohammad",
    id: "12E",
    marks: 57,
    class: 11,
  },
];
let button1 = document.getElementById("btn");
let paragraph = document.getElementById("para1");
button1.addEventListener("click",getData)
function getData() {
paragraph.innerHTML =`<h2>Loading...</h2>`
let showData=``;
let markColor="default";
setTimeout(()=>{
  classData.forEach((ele,index)=>{
    if(ele.marks>=60){
        markColor="greater";
    }
    else{
        markColor="lower";
    }
    showData=showData+`<div class="container ${markColor}"> Name: ${ele.name} <br> Id: ${ele.id} <br> Marks: ${ele.marks} <br> Class: ${ele.class} </div>`;
    paragraph.innerHTML = showData;
})
},1000)
}



