// Arithmetic Integer
/*
Don't validate inputs:
GET two positive integers
Compute add, sub, prod, quotient, remainder, and power
PRINT results of each operation
DON'T validate inputs:
*/

const readline = require('readline-sync');

console.log('Enter the first number');
let number1 = Number(readline.prompt());

console.log('Enter the second number');
let number2 = Number(readline.prompt());

console.log(`${number1} + ${number2} = ${number1 + number2}`);
console.log(`${number1} - ${number2} = ${number1 - number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${(number1 / number2).toFixed(2)}`);
console.log(`${number1} % ${number2} = ${number1 % number2}`);
console.log(`${number1} ** ${number2} = ${number1 ** number2}`);
