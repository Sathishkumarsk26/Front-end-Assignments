let button=document.getElementById("btn1")
let getData=document.getElementById("showDetails")
let radioBtn=document.querySelectorAll("input[type=radio]")
let radioVal=''
radioBtn.forEach(val=>{
    val.addEventListener("click",getRadio)
})

function getRadio(e){
    radioVal=e.target.value;
}
let checkBox=document.querySelectorAll("input[type=checkbox]");
let checkVal='';
checkBox.forEach(ele=>{
    ele.addEventListener("click",getCheck)
})
function getCheck(e) {
    checkVal+=e.target.value+' ';
    console.log(checkVal);
}
let selected=''
function getSelect(){
    selected=document.getElementById("select1").value;
}

button.addEventListener("click",dataDetails)
function dataDetails(){
    let firstName=document.getElementById("inputVal1");
    let lastName=document.getElementById("inputVal2");
    let emailId=document.getElementById("inputVal3");
    let fullName=firstName.value+' '+ lastName.value;
    let emailAddress=emailId.value
getData.innerHTML=`<h1>Review the filled details</h1><br> Fullname: ${fullName}<br><br>Mail Id: ${emailAddress}<br><br>Gender: ${radioVal}<br><br>Courses you are interested: ${checkVal}<br><br>Class mode: ${selected}`;
}