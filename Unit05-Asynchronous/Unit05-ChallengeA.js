// Challenge 1
/*Write code that will log to the console, 'I am at the beginning of the code'.

Beneath that console log, set a timer (see setTimeout) that will log to the console 'I am in the setTimeout callback function' after 3 seconds (3000 ms)

Next, add code to the end of the challenge to log 'I am at the end of the code'. Now re-run the code.

Make sure the 'console' and 'output' panes are showing (click the tabs above if not) and then run your code with the 'run' button.

Clear the console. Change the delay time in the time from 3000 ms to 0. Think hard about how the order should change and then run the code again.*/
// Add code here
console.log('I am at the beginning of the code');
// setTimeout(()=>{console.log("I am in the setTimeout callback function")}, 3000);
setTimeout(()=>{console.log("I am in the setTimeout callback function")}, 0);
console.log("I am at the end of the code");

// Challenge 2
/*Recreate the built in array method, forEach - Write a function that takes as parameters an array, arr, and a callback function, cb. The forEach function will iterate through arr passing each element and its index as arguments to cb.

Create a variable named delays and assign to it an array with the numbers 2000, 5000, 0, and 3500 (in that order).

Write a function, delayLog, that takes as input a delayTime and an index, i. When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).

Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.*/
// Add code here
let delays = [2000, 5000, 0,3500];

function delayLog(delayTime, i)
{
  setTimeout(console.log(i), delayTime);
}
function forEacher(arr, cb)
{
  for (let i = 0; i < arr.length; i++)
  {
    cb(arr[i], i);
  }
}

forEacher(delays,delayLog);

// Challenge 3
/*In this challenge we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchonicity is similar

The function ajaxSimulate takes an id and a callback function as input. Modify the function so that after the database array, it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.

Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.

Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. Immediately after, log to the console the value of dataReceived. What do you expect it to be?

Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need.*/
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  // Add code here
  setTimeout(callback(database[id]),0);
}

function storeData(data)
{
  dataReceived = data;
}

// Also add code here
ajaxSimulate(1,storeData);

console.log(dataReceived);  //Barbara, I presume

// Challenge 4
/*Write a function called limitedInterval that accepts as arguments in this order -

    callback function
    wait time in milliseconds
    limit time in milliseconds.

limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.*/
// Add code here
function limitedInterval(callback, wait, limit)
{
  let times = 1;
  
  const timer = setInterval(function(){
    callback();
    times++;
    if (times >= limit/wait)
    {
      clearInterval(timer); //this solution works because its used in an asynchronous method call, outside of the interval, it should not work
    }
  },wait);
}
// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 1000, 5500); // should log 'repeating' once per second, five times.


// Challenge 5
/*Write a function called runInOrder that accepts as arguments in this order -

    an array of functions
    an array of numbers representing times in milliseconds

runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation. */

function runInOrder(arrFunc, arrNum) {
  for (let i = 0; i < arrFunc.length; i++)
  {
    setTimeout(arrFunc[i],arrNum[i]);
  }
  
}

// /* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [2000, 5000, 3000]);

/*
should log:
'hi' (after 2 seconds)
'bye' (5 seconds after 'hi')
'howdy' (3 seconds after 'bye')
*/
