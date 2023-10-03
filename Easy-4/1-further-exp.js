const readline = require('readline-sync');

console.clear();
console.log('Welcome.');

let cutoffNumber = 25;
let greaterNums;

let numbers = getNumbers();
let result = checkCutoff();
outputResults(result);

function getNumbers() {
  let numbers = [];
  let numberOrder = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

  for (let index = 0; numbers.length < 6; index += 1) {
    console.log(`Enter the ${numberOrder[index]} number`)
    let number = Number(readline.prompt());
    numbers.push(number);
  }

  return numbers;
}

// console.log(numbers);

// could be checked by ensuring that the length of the filtered array is greater than 0, but I wanted to practice using some and filter
function checkCutoff() {
  greaterNums = numbers.filter(num => num > cutoffNumber);
  let isGreaterThan = numbers.some(num => num > cutoffNumber);

  return isGreaterThan; 
}

// console.log(greaterNums);
// console.log(result);

function outputResults(result) {
  if (result) {
    console.log(` The following number(s) you entered are greater than ${cutoffNumber}: ${greaterNums}`);
  } else {
    console.log(`None of the numbers you entered are greater than ${cutoffNumber}`); 
  }
}

