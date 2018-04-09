//Challenge 4
function reduce(array, callback, initialValue) {
	let accumulator;
	let result;
	function reducer() {
		accumulator = initialValue;
		for (let i = 0; i < array.length; i++) {
			// console.log(array[i]+" in reducer");
			result = callback(accumulator, array[i]);
			accumulator = result;
		}
		return result;
	}
	return reducer();
}
let nums = [4, 1, 3];
let add = function(a, b) {
	return a + b;
};
let ace = reduce(nums, add, 0);
console.log(ace);

//Challenge 5 WIP stuck here atm
function intersection(arrayOfArrays) {
	let accumulator = arrayOfArrays[0];

	function arrayWorks() {
		const resulter = reduce(arrayOfArrays, compArr, accumulator);
		return resulter;
	}

	return arrayWorks();
}
const compArr = function(arr1, arr2) {
	const retArr = [];

	function goComp() {
		for (let i = 0; i < arr1.length; i++) {
			for (let j = 0; j < arr2.length; j++) {
				if (arr1[i] === arr2[j]) {
					retArr.push(arr1[i]);
				}
			}
		}
		return retArr;
	}
	return goComp();
};

console.log(
	intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]])
);
// should log: [5, 15]

//Challenge 6
function union(arrOfArrays) {
	let retArr = [];
	let startArr = arrOfArrays[0];
	for (let i = 0; i < arrOfArrays.length; i++) {
		for (let item in arrOfArrays[i]) {
			let subArr = reduce(arrOfArrays, combNewArrayMembers, retArr);
			retArr = subArr;
		}
	}

	return retArr;
}
//function that compares two arrays and returns a new array with all individual members w/o repeats
function combNewArrayMembers(baseArr, compareArr) {
	let retArr = [];
	function inner() {
		for (let i = 0; i < compareArr.length; i++) {
			let tempArr = newMember(baseArr, compareArr[i]);
			retArr = tempArr;
		}
		return retArr;
	}
	return inner();
}

/*function takes in a respective new entry to be added
//to the array if the array has a matching member then
it kicks itself out of the loop*/
function newMember(array, item) {
	let retArr = array;
	
	if (IndexOfArray(array,item) < 0)
	{
	  retArr.push(item);
	}
	
	return retArr;
}

//just a practice function that does the base
function IndexOfArray(array, item)
{
  let index = -1;
  for (let i = 0; i < array.length; i++)
  {
    if (array[i]===item)
    {
      index = i;
    }
  }
  return index;
}

console.log(IndexOfArray([1,2,3,4,5,6],3));

console.log(newMember([1, 2, 3, 4, 5], 5));
console.log(combNewArrayMembers([5, 10, 15], [15, 88, 1, 5, 7]));
console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]
// Challenge 7

/* Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
//Challenge 7*/
function objOfMatches(array1, array2, callback) {
  let retObj = {};
  for (let i = 0 ; i < array1.length; i++)
  {
    if (callback(array1[i]) === callback(array2[i]) )
    {
      retObj[array1[i]] = array2[i];
    }
  }
  return retObj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['Hi', 'Howdy', 'Bye', 'Later', 'Hello'], function(str) { return str.toUpperCase(); }));

// should log: { hi: 'HI', howdy: 'HOWDY', bye: 'BYE', later: 'LATER' , hello: 'HELLO' }

//Challenge 8
/* Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.*/

function multiMap(arrVals, arrCallbacks) {
  let retObj = {};
  for (let i = 0; i < arrVals.length; i++)
  {
    let tempArr = [];
    for (let j = 0; j < arrCallbacks.length; j++)
    {
      let temp = arrCallbacks[j](arrVals[i]);
      tempArr.push(temp);
    }
    retObj[arrVals[i]] = tempArr;

  }
  return retObj;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
