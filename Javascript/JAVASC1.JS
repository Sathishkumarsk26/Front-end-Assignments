let num1 = 21;
let num2 = 45;
if (num1 > num2) {
    console.log(`${num1} is the largest number`)
}
else if (num2 > num1) {
    console.log(`${num2} is the largest number`)
}
else {
    console.log(`${num1} is equal to ${num2}`)
}

let num3 = 34;
let num4 = 18;
if (num3 > num4) {
    console.log(`${num3} is the largest number`)
}
else if (num4 > num3) {
    console.log(`${num4} the largest number`)
}
else {
    console.log(`${num3} is equal to ${num4}`)
}
let num5 = 41;
let num6 = 41;
if (num5 > num6) {
    console.log(`${num5} is the largest number`)
}
else if (num6 > num5) {
    console.log(`${num6} is the largest number`)
}
else {
    console.log(`${num5} is equal to ${num6}`)
}
let num7 = 56;
if (num7 % 2 == 0) {
    console.log(`${num7} is a Even number`)
}
else {
    console.log(`${num7} is a Odd number`)
}
let num8 = 23;
if (num8 % 2 == 0) {
    console.log(`${num8} is a Even number`)
}
else {
    console.log(`${num8} is a Odd number`)
}
let num9 = 12;
if (num9 % 2 == 0) {
    console.log(`${num9} is a Even number`)
}
else {
    console.log(`${num9} is a Odd number`)
}
let num10 = 99;
if (num10 % 2 == 0) {
    console.log(`${num10} is a Even number`)
}
else {
    console.log(`${num10} is a Odd number`)
}

let num11 = 21;
let num12 = 45;
let num13 = 13;
//else if part will be executed 

if (num11 > num12 && num11 > num13) {
    console.log(`${num11} is the largest number`)
}
else if (num12 > num13) {
    console.log(`${num12} is the largest number`)
}
else {
    console.log(`${num13} is the largest number`)
}

let num14 = 34;
let num15 = 18;
let num16 = 52;
//else part will be executed 

if (num14 > num15 && num14 > num16) {
    console.log(`${num14} is the largest number`)
}
else if (num15 > num16) {
    console.log(`${num15} is the largest number`)
}
else {
    console.log(`${num16} is the largest number`)
}
let num17 = 89;
let num18 = 11;
let num19 = 11;
//if part will be executed
if (num17 > num18 && num17 > num19) {
    console.log(`${num17} is the largest number`)
}
else if (num18 > num19) {
    console.log(`${num18} is the largest number`)
}
else {
    console.log(`${num19} is the largest number`)
}
side1 = 12;
side2 = 12;
side3 = 12;
//if part will be executed
if ((side1 == side2) && (side1 == side3)) {
    console.log(`Equilateral triangle.`)
}
else if ((side1 == side2) || (side2 == side3) || (side1 == side3)) {
    console.log(`Isosceles triangle.`)
}
else {
    console.log(`Scalene triangle.`)
}
side4 = 20;
side5 = 20;
side6 = 31;
//else if part will be executed
if ((side4 == side5) && (side4 == side6)) {
    console.log(`Equilateral triangle.`)
}
else if ((side4 == side5) || (side5 == side6) || (side4 == side6)) {
    console.log(`Isosceles triangle.`)
}
else {
    console.log(`Scalene triangle.`)
}
side7 = 5;
side8 = 4;
side9 = 3;
//else part will be executed
if ((side7 == side8) && (side7 == side9)) {
    console.log(`Equilateral triangle.`)
}
else if ((side7 == side8) || (side8 == side9) || (side7 == side9)) {
    console.log(`Isosceles triangle.`)
}
else {
    console.log(`Scalene triangle.`)
}
let numA1 =15;
let start1 =11;
let end1 =30
//if part will be executed
if(numA1 >= start1 && numA1 <= end1){
    console.log(`${numA1} is between the range ${start1} and ${end1}`)
}
else{
    console.log(`${numA1} is outside the range ${start1} and ${end1}`)    
}
let numA2 =20;
let start2 =34;
let end2 =51;
//else  part will be executed
if(numA2 >= start2 && numA2 <= end2){
    console.log(`${numA2} is between the range ${start2} and ${end2}`)
}
else{
    console.log(`${numA2} is outside the range ${start2} and ${end2}`)    
}
function checkLeapYear(year){

    if(0 == year%4)
    {
        console.log(year+" "+'is a leap year')
    }
    else
    {
         console.log(year+" "+'is not a leap year')
    }
    }
    checkLeapYear(2020);
    checkLeapYear(2021);
    checkLeapYear(1992);
    checkLeapYear(1994);
    checkLeapYear(1996);
    checkLeapYear(2010);
    checkLeapYear(2011);

    function studentGrade(marks){

        if((marks>=90&&marks<=100))
        {
            console.log("S grade")
        }
        else if((marks>=80&&marks<=90))
        {
                console.log("A grade")
        }
        else if((marks>=70&&marks<=80))
        {
                console.log("B grade")
        }
        else if((marks>=60&&marks<70))
        {
                console.log("C grade")
        }
        else if((marks>=50&&marks<=60))
        {
                console.log("D grade")
        }
        else if((marks>=40&&marks<=50))
        {
                console.log("E grade")
        }
        else if((marks<40))
        {
                console.log("Student has failed")
        }
        else
        {
            console.log("Invalid marks")
        }
            }
let marks=[95,86,72,66,52,45,38,5667]

for(let i=0;i<marks.length;i++)
  {
    studentGrade(marks[i])
    
  }


function getDaysInMonth(month, year){
    let leapYear=(year%4)
    if((month==2)&&(0==leapYear)){   
        console.log("29 days")
    }
    else if(month==2){
        console.log("28 days")
    }
    else if ((month==4)||(month==6)||(month==9)||(month==11)){
        console.log("30 days")
    }
    else if (month>12){
    console.log("Invalid Month")
    }
    else{
        console.log("31 days")
    }
    }
getDaysInMonth(2,2012);
getDaysInMonth(2,2013);
getDaysInMonth(4,2012);
getDaysInMonth(10,2013);
getDaysInMonth(16,2013)








