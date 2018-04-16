//Extension Challenge: POW
/*Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.*/
function pow(base, exponent) {
    return (exponent === 0)? 1: base * pow(base,exponent-1);
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(pow(2, 4)); // -> 16
  console.log(pow(3, 5)); // -> 243
  
  //Extension Challenge: Flow
  /*Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.*/
  function flow(input, funcArray) {
      return (funcArray[0] === undefined) ? input : flow (funcArray.shift()(input), funcArray);
  }
  
  // To check if you've completed the challenge, uncomment this code!
  function multiplyBy2(num) { return num * 2; }
  function add7(num) { return num + 7; }
  function modulo4(num) { return num % 4; }
  function subtract10(num) { return num - 10; }
  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
  console.log(flow(2, arrayOfFunctions)); // -> -7