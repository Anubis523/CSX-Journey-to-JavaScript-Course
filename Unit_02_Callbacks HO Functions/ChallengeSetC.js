console.log('Hello, world!');


// Challenge 9
/*Create a function majority that accepts an array and a callback. The callback will return either true or 
false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true 
returns is equal to the number of false returns, majority should return false.*/

function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;
  let answer = false;
  for (let i = 0; i < array.length; i++)
  {
    (callback(array[i]))?trueCount++: falseCount++;
  }
  
  if (falseCount === trueCount || falseCount > trueCount)
    answer = false;
  else if (trueCount > falseCount)
    answer = true;
  
  return answer;
}

// To check if you've completed it, uncomment these lines!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 10
/*Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.*/

function prioritize(array, callback) {
  let retArr = [];
  for (let i = 0; i < array.length; i++)
  {
    if (callback(array[i]))
    {
      retArr.unshift(array[i]);
    }
    else
    {
      retArr.push(array[i]);
    }
  }
  return retArr;
}

// To check if you've completed it, uncomment these lines!
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 11 //
/*Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.*/

function countBy(array, callback) {
  let retObj = {};
  let properties = [];  //array used to keep track of the different outputs
  let a = 0; let b = 0;
  for(let i = 0; i < array.length; i++)
  {
    if (properties.indexOf(callback(array[i])) < 0)
    {
      properties.push(callback(array[i]));
      retObj[callback(array[i])] = 1;
    }
    else
    {
      retObj[callback(array[i])] ++;
    }
  }
  return retObj;
}

// To check if you've completed it, uncomment these lines!
console.log(countBy([1, 2, 3, 4, 5], function(num) {
  if (num % 2 === 0) return 'even';
  else return 'odd';
})); // should log: { odd: 3, even: 2 }


// Challenge 12
/*Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.*/
function groupBy(array, callback) {
  let retArr = [];
  let retObj = {};
  for (let i = 0; i < array.length; i++){
  if(retArr.indexOf(callback(array[i])) < 0)  {
    
    retArr.push(callback(array[i]));
    retObj[callback(array[i])] = [array[i]];
    }
    else
      {
        retObj[callback(array[i])].push(array[i]);
      }
      console.log(retArr);
  }
  return retObj;
}

// To check if you've completed it, uncomment these lines!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 13
/*Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.*/


function goodKeys(obj, callback) {
    let trueArr = [];
    
    for (let properties in obj)
    {
      if (callback(obj[properties]) === true) {
        
        trueArr.push(properties);
      }
    }
    
    return trueArr;
}

// To check if you've completed it, uncomment these lines!
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

