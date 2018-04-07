// Function and Execution Context Challenges

// Reminder if you have a question - ask it to a mentor on the CSX Slack.

// Reminder if you have a question - ask it to a mentor on the CSX Slack.
// Challenge 1

// Create a function addTwo that accepts a number, and returns the number plus 2.

// Reminder if you have a question - ask it to a mentor on the CSX Slack.
// Challenge 2

// Create a function addS that accepts a string, and returns the string with an "s" added to the end.

// Reminder if you have a question - ask it to a mentor on the CSX Slack.
// Challenge 3

// Examine the code given to you. Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.

// Reminder if you have a question - ask it to a mentor on the CSX Slack.
// Challenge 4

// Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry, as done in the commented out lines below the code given to you. 
// You may add code to the places marked ADD CODE HERE?, though it might not be necessary to add code to all four places.

// Challenge 1
const addTwo = (x) => x + 2;

// Uncomment these to check your work!
console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12

// Challenge 2
const addS = (x) => x+'s';

// ADD CODE HERE

// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'


// Challenge 3

const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true


// Challenge 4

let calls = "";

function jerry(str) {
    calls += 'Jerry';
    kramer();
  	george();
  	elaine();
}

function george(str) {
    calls += 'George';
    // ADD CODE HERE?
}

function elaine(str) {
    calls += 'Elaine';
    // ADD CODE HERE?
}

function kramer(str) {
    calls += 'Kramer';
    // ADD CODE HERE?
}


// Uncomment these to check your work!
jerry();
console.log(calls); // should log: 'JerryKramerGeorgeElaine'