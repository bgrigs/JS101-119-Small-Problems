/*Running Totals
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Problem
  Input: an array of numbers
  Output: an array of numbers (each element's value will be the running total from the original array)

Examples (see below for test cases)

Data Structure: Array 

Algorithm:
  Create a function that accepts an array of numbers
  Declare a variable called totals and initialize it to an empty array
  Declare a variable called addToNumber and initialize it to 0;

  Iterate through each number in the array
  Append number + addToNumber to the totals array
  Reassign addToNumber to the current index of the totals array    
*/

function runningTotal(numbers) {
  let totals = [];
  let addToNumber = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    totals.push(addToNumber + numbers[index]);
    addToNumber = totals[index];
  }

  return totals;
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []