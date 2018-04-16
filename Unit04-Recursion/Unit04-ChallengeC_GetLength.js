//Challenge: Get Length
/*Get the length of an array using recursion without accessing its length property.*/
function getLength(array) {
    let length = 0;
    function retLength(x)
    {
      return (array[x+1] === undefined)? 1: 1 + retLength(x+1);
    }
    return retLength(length);
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(getLength([1])); // -> 1
  console.log(getLength([1, 2])); // -> 2
  console.log(getLength([1, 2, 3, 4, 5])); // -> 5