console.log('Hello, world!');


//Challenge 8
/*Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values*/ 
function saveOutput(func, magicWord) {
  let wrongKeys = {};
  function outputs(x)
  {
    if (x === magicWord)
    {
      return(wrongKeys);
    }
    else
    {
      wrongKeys[x] = func(x);
      return(func(x));
    }
  }
  return outputs;
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }


//Challenge 9
/*Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.*/ 
function cycleIterator(array) {
  let times = -1;
  function cycle()
  {
    times ++;
    if (times <= array.length -1 )
    {
      return array[times];
    }
    else
    {
      times = 0;
      return array[times];
    }
  }
  return cycle;
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'


//Challenge 10
/*Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.*/ 
function defineFirstArg(func, arg) {
  function defined (y)
  {
    if (y !== undefined)
    {
      return func(arg,y);
    }
  }
  return defined;
}

// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15


//Challenge 11
/*Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function.*/ 
function dateStamp(func) {
  let obj = {};
  
  function retFunc(x)
  {
    let d = new Date();
    let timestamp = d.getTime();
    obj['date'] = timestamp;
    obj['output'] = func(x);
    return obj;
  }
  return retFunc;
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }


//Challenge 12
/*Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).*/ 
function censor() {
  let a = "", b= "",c= "",d= "";
  function censored (x,y)
  {
    if (y === undefined)
    {
      return x.replace(a,b).replace(c,d);
    }
    else{
        if (a === "")
        {
            a = x;
            b = y;
        }
        else{
            c = x;
            d = y;
        }
    }
  }
  return censored;
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'