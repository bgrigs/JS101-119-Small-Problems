// Sum or Product of Consecutive Integers
// GET integer greater than 0
// GET computation (sum or product of the numbers between 1 and the integer)
// IF sum, sum numbers WHILE iterator < integer
// IF product, multiply numbers WHILE iterator < integer
// PRINT result

const readline = require('readline-sync');

function invalidNumber(num) {
  return num.trimStart() === '' ||
    Number.isNaN(Number(num)) ||
    Number(num) === 0;
}

console.log('Please enter an integer greater than 0');
let number = readline.prompt();

while (invalidNumber(number)) {
  console.log("Hmm... that doesn't look like a valid number.");
  console.log('Please enter an integer greater than 0');
  number = readline.prompt();
}

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let computation = readline.prompt();

while (!['s', 'p'].includes(computation)) {
  console.log(`Invalid. Enter "s" or "p".`);
  computation = readline.prompt();
}

if (computation === 's') sum(Number(number));
if (computation === 'p') product(Number(number));

function sum() {
  let sumResult = 0;
  for (let num = 1; num <= number; num += 1) {
    sumResult += num;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${sumResult}.`);
}

function product() {
  let productResult = 1;
  for (let num = 1; num <= number; num += 1) {
    productResult *= num;
  }
  console.log(`The product of the integers between 1 and ${number} is ${productResult}.`);
}