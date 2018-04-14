//Challenge 4
/*Now we are going to create a function addByX that returns a function that will add an input by x.*/
function addByX(x) {
  function addByY(z)
  {
    return x+z;
  }
  return addByY;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));
// now call addByTwo with an input of 2
console.log(addByTwo(2));

//Challenge 5
/*Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.*/

function once(func) {
  let times = 0;
  let ret;
  
  function one(x)
  {
    times++;
    
    if (times <= 1)
    {
      ret = func(x);
      return func(x);
    }
    else
    {
      return ret;
    }
  }
  
  return one;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(5));  //should log 7
console.log(onceFunc(10));  //should log 7
// console.log(onceFunc(9001));  //should log 7


//Challenge 6
/*Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.*/
function after(count, func) {
  let times = count;
  function go()
  {
    count--;
    if (count === 0)
    {
      
      func();
    }
  }
  return go;
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed

//Challenge 7
/*Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT - research setTimeout();*/

function delay(func, wait) {
  function now ()
  {
    return setTimeout(func,wait);
  }
  return now;
}

var count = 0;
delay(() => count++, 1000)();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
