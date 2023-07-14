// Sum or Product of Consecutive Integers
// GET integer greater than 0
// GET computation (sum or product of the numbers between 1 and the integer)
// IF sum, sum numbers WHILE iterator < integer
// IF product, multiply numbers WHILE iterator < integer
// PRINT result

// What if the input was an array of integers instead of just a single integer?
// How would your computeSum and computeProduct functions change?
// How might you make use of the Array.prototype.reduce() method?

const readline = require('readline-sync');

function invalidNumber(num) {
  return num.trimStart() === '' ||
    Number.isNaN(Number(num)) ||
    Number(num) === 0;
}

let integers = [];

while (integers.length < 4) {
  console.log('Please enter an integer greater than 0');
  let number = readline.prompt();
  validateIntegers(number);
}

function validateIntegers(num) {
  if (invalidNumber(num)) {
    console.log("Hmm... that doesn't look like a valid number.");
  } else {
    integers.push(Number(num));
  }
}

console.log(`You've selected ${integers}.`);

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let computation = readline.prompt();

while ((!['s', 'p'].includes(computation)) &&
       (!['S', 'P'].includes(computation))) {
  console.log(`Invalid. Enter "s" or "p".`);
  computation = readline.prompt();
}

if (computation === 's' || computation === 'S') {
  let sumResult = getSum();
  showSum(sumResult);
}

if (computation === 'p' || computation === 'P') {
  let productResult = getProduct();
  showProduct(productResult);
}

function getSum() {
  return integers.reduce((accumulator, currentValue) =>
    accumulator + currentValue);
}

function showSum(result) {
  console.log(`The sum of the integers provided is ${result}.`);
}

function getProduct() {
  return integers.reduce((accumulator, currentValue) =>
    accumulator * currentValue);
}

function showProduct(result) {
  console.log(`The product of the integers provided is ${result}.`);
}

