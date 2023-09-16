// // program that checks if the number is positive, negative or zero
// // input from the user
// const number = parseInt(prompt("Enter a number: "));

// // check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }

// // check if number is 0
// else if (number == 0) {
//   console.log("The number is zero");
// }

// // if number is less than 0
// else { 
//      console.log("The number is negative");
// }


// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// console.log(factorial(5));



function max_townums_range(x, y){	
  if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
  if(x === y){
  return "Numbers are the same";
  }else if (x > y){
  return x;
  }else{
  return y;
  }
  }
  else{
  return "Numbers don't fit in range";
  }
  }
  
  console.log(max_townums_range(45, 60));
  console.log(max_townums_range(25, 60));
  console.log(max_townums_range(45, 80));
  



