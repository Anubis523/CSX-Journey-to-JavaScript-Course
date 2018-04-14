console.log('Hello, world!');

// Challenge: Repeater1
/*Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.*/
function repeater(char) {
  // let i = 5
  function repeat (x)
  { 
    let next = x-1;
    if (x === 1)
    {
      return char;
    }
    else
    {
      return char + repeat(next);
    }
  }

  return repeat(5);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
// console.log(repeater('j'));

