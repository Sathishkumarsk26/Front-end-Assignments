// let htmlCode=document.getElementById("text");
// let button1=document.getElementById("btn1");
// let i=20;
// let idName="default";
// function timeFn(){
// let interval=setInterval(()=>{
//     button1.style.display="none";
//     htmlCode.innerHTML=`<div id=${idName}>${i}</div>`;
//     i--;
//     if(11>i){
//         idName="black";
//     }
//     if(i>5&&i<=10){
//         idName="green";
//     }
//     if(i<=5){
//         idName="red";
//     }
// },1000)
// setTimeout(()=>{
//     clearInterval(interval);
//     button1.style.display = 'block';
//     button1.style.marginLeft="720px";
//     i=20;
// },21000);
// }

let button1=document.getElementById("btn1");
let para1=document.getElementById("para")
let i=20;
function timer(){
let interval=setInterval(()=>{
    button1.style.display="none";
    para1.innerHTML=i;
    i--;
    if(i>11){
        para1.style.color='black';
        para1.style.fontSize='100px';
    }
    if(i>7&&i<=9){
        para1.style.color='green';
        para1.style.fontSize='130px';
    }
    if(i<5){
    para1.style.color='red';
    para1.style.fontSize='160px';}
},1000)
setTimeout(()=>{
    clearInterval(interval);
    button1.style.display='block';
    button1.style.marginLeft='720px';
    button1.style.marginTop="-10px";

    i=20;
},21000)
}
