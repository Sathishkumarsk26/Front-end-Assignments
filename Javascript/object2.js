let hello = {
    name : 'Sathish',
    eats : 'Briyani',
    list :['pani-puri', 'kaalan','falooda','briyani','samosa','momos'],
    getFood : function () {
    this.list.forEach(ele => {
      if(ele ==='momos') {
        console.log(ele +" "+ 'sathish do not likes it');
      } else {
        console.log(ele +" "+ 'sathish likes to eat it');
      }
    }) 
  },
    class:{
      className :' Front end',
      institution : 'Besant'
    }}
  console.log(hello.getFood());
