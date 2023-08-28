function outer () {
    let pooja = 2;
    let sum = pooja+ 10;
    return function () {
      let val = sum*2;
      return function () {
        console.log('I am inside the closure fn')
        let test = val*3;
        return function () {
          return function () {
            return function () {
              console.log('how are you')
              return test
            }
          }
        }
      }
    }
  }
  var result=outer()()()()()()
  console.log(result)