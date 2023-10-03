// Searching 101

// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

/*
PEDAC

Problem: 
  Inputs: 6 numbers from a user
  Output: a message that says whether or not the 6th # is among the first five numbers

  Requirements: input must be a number

  Questions:
    Are negative numbers allowed?

Examples and Test Cases:
  Enter the 1st number: 25
  Enter the 2nd number: 15
  Enter the 3rd number: 20
  Enter the 4th number: 17
  Enter the 5th number: 23
  Enter the last number: 17

  The number 17 appears in 25,15,20,17,23.

  -----

  Enter the 1st number: 25
  Enter the 2nd number: 15
  Enter the 3rd number: 20
  Enter the 4th number: 17
  Enter the 5th number: 23
  Enter the last number: 18

  The number 18 does not appear in 25,15,20,17,23.

Data Structure:
  Store the user numbers in an array

Algorithm:
  Declare a variable and assign it to an empty array

  Get user input 
    Ask the user for a number
    Add the number to the array
    Continue this until the array has 6 items

  Search through the array
    IF the 6th number was present, tell the user that the number is among the first five
    ELSE, tell the user that number is not present among the first 5
*/

const readline = require('readline-sync');

let firstFive = [];
let lastNum; 

console.clear();
console.log('Welcome.');

getFirstFive();
getLastNumber();
outputResults();

function getFirstFive() {
  let numberOrder = ['1st', '2nd', '3rd', '4th', '5th'];

  for (let index = 0; firstFive.length < 5; index += 1) {
    console.log(`Enter the ${numberOrder[index]} number`)
    let number = Number(readline.prompt());
    firstFive.push(number);
  }
}

function getLastNumber() {
  console.log('Enter the last number');
  lastNum = Number(readline.prompt());
}

// console.log(firstFive);
// console.log(lastNum);

function outputResults() {
  if (firstFive.includes(lastNum)) {
    console.log(`The 6th number you entered, ${lastNum}, appears in ${firstFive}`)
  } else {
    console.log(`The 6th number you entered, ${lastNum}, does not appear in ${firstFive}`); 
  }
}




