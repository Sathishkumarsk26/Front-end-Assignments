function sum(...data){
    let summation = 0;
    data.forEach(element => {
        summation+=element;
    });
    console.log(summation);
}
sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)