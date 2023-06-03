/* Odd Numbers | Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

START 

WHILE iterator <=100
  IF iterator is odd, PRINT iterator
  IF iterator is even, skip to next iteration

  END */


for (let num = 1; num <= 100; num += 2) {
    console.log(num)
}

// Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
// Welcome the user
// Ask the user for the first number
// As the user for the second number
// Display the result 


const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to Odd Numbers');

prompt('What is the first number?')
let num1 = readline.question();

while (invalidNumber(num1)) {
  prompt('Hmmm...that doesn\'t look like a valid number.')
  num1 = readline.question();
}

prompt('What is the second number?')
let num2 = readline.question();

while (invalidNumber(num2)) {
  prompt('Hmmm...that doesn\'t look like a valid number.')
  num2 = readline.question();
}

function findOdd(start, end) {
  for (let num = start; num <= end; num += 1) {
    if (num % 2 === 1) {
      prompt(num);
    }
  }
}

findOdd(Number(num1), Number(num2));

