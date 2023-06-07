// Tip Calculator

// GET bill amount
// GET tip %
// PRINT tip
// PRINT total bill

const readline = require('readline-sync');

console.log('What is the bill?\n');
let bill = Number(readline.prompt());

console.log('What is the tip percentage?\n');
let tipPercentage = Number(readline.prompt());

let tip = (tipPercentage / 100) * bill;

let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);


