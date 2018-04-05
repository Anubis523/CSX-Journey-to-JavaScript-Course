// Challenge 1
let num = 5;
if(num > 2)
  num *=2;

// uncomment the below line to check your work
console.log(num) // -> should print 10

// Challenge 2
let newNum = 1;
if (newNum < 2)
  newNum *= 2;


// uncomment the below line to check your work
console.log(newNum) // -> should print 2;

// Challenge 3
 let m = () => num%2 ===0;
console.log(m());
// Challenge 4
let checkMe = [1, 2, 3];
let check = () => checkMe.length > 5;
console.log(check());

// Challenge 5
let isDivisibleBy4 = 24;
let div4 = () => isDivisibleBy4 % 4 === 0;
console.log(div4());
// Challenge 6
let count = 2;
let count2 = 3;
let i = 0;
while (i < 4)
  {
    count+=2;
    count2+=3;
    i++;
  }


// uncomment the below line to check your work
console.log('count: ' + count + ', count2: ' + count2) // -> should print 10 and 15

// Challenge 7
let sum = 10 ;
let addThis = 0;
for (let i = 0; i < 10; i++)	{
  sum += addThis;
  addThis++;
}

console.log(sum);

// Challenge 8
let countDown = 10;
for (let i = 0; countDown> 0; i++)
  {
    countDown--;
  }
// uncomment the below line to check your work
console.log(countDown) // -> should print 0;

// Challenge 9
let increaseByTwo = [1, 2, 3, 4, 5];
for (let i = 0; i< increaseByTwo.length; i++)
  {
    increaseByTwo[i]+=2;
  }


// uncomment the below line to check your work
console.log(increaseByTwo) // -> should print [3, 4, 5, 6, 7];

// Challenge 10
for (let i = 0; i< increaseByTwo.length; i++)
  {
    if (increaseByTwo[i]>4)
      increaseByTwo[i] *= 10;
  }
// uncomment the below line to check your work
console.log(increaseByTwo) // -> should print [3, 4, 50, 60, 70];


// Challenge 11
let fillMe = [];
for (let i = 0; i < 11; i++)	{
  fillMe.push(i);
}


// uncomment the below line to check your work
console.log(fillMe) // -> should print [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Challenge 12
let modifiedFillMe = [];
for (let i = 10; i > -1; i--)	{
  if (fillMe[i] % 2 == 0)
    modifiedFillMe.push(fillMe[i]);
}
// uncomment the below line to check your work
console.log(modifiedFillMe) // -> should print [10, 8, 6, 4, 2, 0]

// Challenge 13
let checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};
for (let property in checkObj)
  {
    if (checkObj.hasOwnProperty("foundNum"))	//this method in js objects allows you to checks for a property by name not value
      console.log("Found!");
    else
      console.log("Does not exist!");
  }

// Challenge 14
let objToArray = [];
//returns a true if number and false if not
const isNum = (x) => (typeof x)==="number";
for (let property in checkObj)
{
  // console.log(checkObj[property]);
  
  if (isNum(checkObj[property]) && checkObj[property]>= 2){
    objToArray.push(checkObj[property]);
  }
}
console.log(objToArray);
// Challenge 15
let dummy = false;
for (let i = 0; i < objToArray.length; i++)
  {
    if (objToArray[i] % 6 === 0)
      {
        dummy = true;
        break;
      }
    else
      dummy = false;
  }
console.log(dummy);
// Challenge 16
let nestedArr = [];
for (let i = 0; i < 5; i++)
  {
    let tempArr = ['loop'+i,i];
    nestedArr.push(tempArr);
  }
console.log(nestedArr);
// Challenge 17
let loopNumbers = {};
for (let i = 0; i < 5 ; i++)
  {
    let tempProp = nestedArr[0,i][0];
    let tempValue = nestedArr[0,i][1];
    loopNumbers[tempProp] = tempValue;
  }
console.log(loopNumbers);
// Challenge 18
let propCount = 0;
	for (let items in loopNumbers)
    {
     	if(loopNumbers.hasOwnProperty(items)) 
        propCount++;
    }
console.log(propCount);

// Challenge 19
let possibleIterable = [4, 3, 9, 6, 23];
for (let i = 0; i < possibleIterable.length; i++)
  {
    if (possibleIterable[i]>3)
      {
        console.log(possibleIterable[i]);
      }
  }

// Challenge 20
let total = 0;
let sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};

for (let item in sumMe)
  {
    if (isNum(sumMe[item]))
        total += sumMe[item];
  }
console.log(total);