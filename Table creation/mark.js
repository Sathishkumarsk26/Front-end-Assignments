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
      name : 'vigesh',
      class : 'FE',
      roll :' 34567',
      area :'whitefield',
      marks: '70',
      interest: 'HTML'
    },
{
      name : 'sathish',
      class : 'FE',
      roll :' 345678',
      area :'kundhalahalli',
      marks: '75',
      interest: 'CSS'
},
{
  name : 'mahesh',
  class : 'FE',
  roll :' 876',
  area :'Hoskote',
  marks: '70',
  interest : 'FOOD'
},
{
  name : 'Samcyril',
  class : 'FE',
  roll :' 878',
  area :'Hoskote',
  marks: '40',
  interest : 'HTML'
},
{
  name : 'justin',
  class : 'FE',
  roll :' 878',
  area :'Hoskote',
  marks: '59',
  interest : 'HTML'
},
{
  name : 'komalatha',
  class : 'FE',
  roll :' 878',
  area :'Hoskote',
  marks: '60',
  interest : 'HTML'
},
{
  name : 'lavanya',
  class : 'FE',
  roll :' 878',
  area :'Hoskote',
  marks: '90',
  interest : 'HTML'
}
];
  let div=document.getElementById("table");
  let tab1=``;
  let tab2=``;
  var heading;
  tableObj.forEach((ele,index)=>{
  let  tab3=``;
    console.log(ele)
  heading=Object.keys(ele)
  // console.log(heading)
  Object.keys(ele).forEach((keyValue,ind)=>{
    let classname="default"
    if(keyValue=='marks')
    {
      // console.log(keyValue)
      //console.log(parseInt(tableObj[index][keyValue]))
      if(parseInt(tableObj[index][keyValue])>=80)
      {
        classname="Topper";
      }
      else if(parseInt(tableObj[index][keyValue])>=60 && tableObj[index][keyValue]<80)
      {
        classname="Average"
      }
      else if(parseInt(tableObj[index][keyValue])<60)
      {
        classname="Lower"
      }
      else{
        classname="default"
      }
    }
    else if(keyValue=='interest')
    {
      if(tableObj[index][keyValue]=='JS')
      {
        classname="js"
      }
      else if(tableObj[index][keyValue]=='HTML')
      {
        classname="html"
      }
      else if(tableObj[index][keyValue] == 'CSS')
      {
        classname="css"
      }
      else{
        classname="default"
      }
    }
    let str=tableObj[index][keyValue]
    // console.log(str);
    tab3=tab3+`<td classname=${classname} >${str}</td>`;
    // console.log(tab3);
  });
  tab1=tab1+`<tr>${tab3}</tr>`
})

let tab4=``;
heading.forEach((ele)=>{
  tab4=tab4+`<th>${ele.toUpperCase()}</th>`
})
tab2=`<table><tr>${tab4}</tr>${tab1}</table>`;

div.innerHTML=tab2;
