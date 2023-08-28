let stars=document.querySelectorAll('.star');
let ratings=document.querySelector('.rating');
let currentStar;
stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        currentStar=index+1;
        if(currentStar==1){
            ratings.innerHTML='Rating: Just hate it'
        }
        if(currentStar==2){
            ratings.innerHTML='Rating: I do not like it'
        }
        if(currentStar==3){
            ratings.innerHTML='Rating: Just go for it'
        }
        if(currentStar==4){
            ratings.innerHTML='Rating: It is awesome '
        }
        if(currentStar==5){
            ratings.innerHTML='Rating: I love it'
        }
        stars.forEach((star,i)=>{
        if(currentStar>=i+1){
            star.innerHTML=`&#9733`;
        }
        else{
            star.innerHTML=`&#9734`;
        }
    })
    }) 
})
let textReview=document.getElementById('text1');
let button1=document.getElementById('btn')
button1.addEventListener('click',()=>{
    alert(textReview.innerHTML=`Thank you for rating us.. Have a nice day!`);
})