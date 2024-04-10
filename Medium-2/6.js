// Sum Square - Square Sum
// Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

/*
input: number
output: number (difference)

Algo: 
  - declare a variable integers and init []

  - declare a var integer and init that to 1
    - push each number to integers array
    - while integer is <= limit, add 1

  return squareSum(integers) - sumSquare(integers);

squareSum helper function
  - add all of the elements from the integers together and square the result

sumSquare
  - square each element 
  - add the squares together and return the result
*/

function sumSquareDifference(limit) {
  let integers = [];
  let integer = 1;

  do {
    integers.push(integer);
    integer += 1;
  } while (integer <= limit)

  return squareSum(integers) - sumSquare(integers);
}

function squareSum(integers) {
  return integers.reduce((sum, int) => sum + int)**2;
}

function sumSquare(integers) {
  return integers.reduce((sum, int) => sum + int**2);
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150