// Challenges Set A

// Reminder if you have a question - ask it to a mentor on the CSX Slack.
// Challenge 1

// Create a function called subtractTwo that will accept a number and then return that number minus 2.

// Then create a function called map that takes two inputs -

//     an array of numbers (a list of numbers)
//     a 'callback' function - this function is applied to each element of the array (inside of the function 'map')

// Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

// map([3,4,5], subtractByTwo); //-> [1,2,3]
// subtractByTwo(10); //-> 8
// subtractByTwo(12); //-> 10

// Challenge 2

// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

// var alphabet = '';
// var letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'

// Challenge 3

// Now let's rebuild map from challenge 1 as mapWith. This time instead of using a for loop, you're going to use the forEach function that you created in challenge 2.1

console.log('Hello, world!');


// Challenge 1
function subtractTwo(num) {
  return num-2;
}

function map(array, callback) {
	const retArr = [];
  for (let item in array)
  {
    retArr.push(callback(item));
  }
  return retArr;
}

console.log(map([3, 4, 5], subtractTwo));

// Challenge 2
function forEach(array, callback) {
	const retArr = [];
  for (let item in array)
  {
    retArr.push(callback(item));
  }
  return retArr;
}

// see for yourself if your forEach works!


// Challenge 3
const m = [1,2,3,4];

const mapWith = function(array,func)
{
  let arr = forEach(array,func);
  return arr;
}

let results = mapWith(m, subtractTwo);
console.log(results);