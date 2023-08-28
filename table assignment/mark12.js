let tableObj = [
  {
    name: "anuradha",
    class: "FE",
    roll: " 12345",
    area: "Marathalli",
    marks: "90",
    interest: "JS",
  },
  {
    name: "manoj",
    class: "FE",
    roll: " 134876",
    area: "Bellandur",
    marks: "30",
    interest: "CSS",
  },
  {
    name: "suresh",
    class: "BE",
    roll: " 12345",
    area: "Brookfield",
    marks: "20",
    interest: "JAVA",
  },
  {
    name: "vigesh",
    class: "FE",
    roll: " 34567",
    area: "whitefield",
    marks: "70",
    interest: "HTML",
  },
  {
    name: "sathish",
    class: "FE",
    roll: " 345678",
    area: "kundhalahalli",
    marks: "75",
    interest: "CSS",
  },
  {
    name: "mahesh",
    class: "FE",
    roll: " 876",
    area: "Hoskote",
    marks: "70",
    interest: "FOOD",
  },
  {
    name: "Samcyril",
    class: "FE",
    roll: " 878",
    area: "Hoskote",
    marks: "40",
    interest: "HTML",
  },
  {
    name: "justin",
    class: "FE",
    roll: " 878",
    area: "Hoskote",
    marks: "59",
    interest: "CSS",
  },
  {
    name: "komalatha",
    class: "FE",
    roll: " 878",
    area: "Hoskote",
    marks: "60",
    interest: "PYTHON",
  },
  {
    name: "lavanya",
    class: "FE",
    roll: " 878",
    area: "Hoskote",
    marks: "90",
    interest: "JS",
  },
];
let div = document.getElementById("table");
function createTable(){
tr = ``;
th = ``;
th=`<tr><th>name</th>
<th>class</th>
<th>roll</th>
<th>area</th>
<th>marks</th>
<th>Interest</th>
</tr>`;
tableObj.forEach(function(ele,index){
let idname="default"; 
if(ele.marks>="80"){
  idname="one";
}
else if(ele.marks>="60"&&ele.marks<"80"){
idname="two";
}
else{
  idname="default";
}
let intname="default1";
if(ele.interest==="JS"){
intname="js";
}
else if(ele.interest==="CSS"){
  intname="css";
}
else if(ele.interest==="HTML"){
    intname="html";
}
else{
  intname="default1"
}
tr=tr+`<tr><td>${ele.name.toUpperCase()}</td><td>${ele.class}</td><td>${ele.roll}</td><td>${ele.area}</td><td id=${idname}>${ele.marks}</td><td id=${intname}>${ele.interest}</td></tr>`
});

let table=`<table>${th}${tr}</table>`;
div.innerHTML = table;
}

createTable();

