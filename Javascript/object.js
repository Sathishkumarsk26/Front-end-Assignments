var skObj={
    name: "sathish Kumar",
    age:[24,78,52,65],
    school: function(){
        this.age.forEach(ele=>{
            if(ele===24){
                console.log(ele+" is a young boy");
            }
            else{
                console.log(ele+" is a old man");

            }
        })
    }
}
        // stTheresa: "from LKG to 10th",
        // kgVellar:"11th & 12th",}
        // collage:{GAC:"B.Sc,ComputerScience"}




skObj.school();//to get name and age
// console.log(skObj.school);//to get schooling output
// console.log(skObj.school.collage);//to get collage output separately