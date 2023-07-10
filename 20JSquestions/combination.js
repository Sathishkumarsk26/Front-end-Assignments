//Write a JavaScript Program to Print All Combinations of a given String.

// const inputString = "abc";
// printCombinations(inputString);

// "abc"
// "acb"
// "bac"
// "bca"
// "cab"
// "cba"
let possibleCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
  }
  console.log(possibleCombinations('Dog'));
  