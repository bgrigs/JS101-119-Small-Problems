// When Will I Retire?
// GET currentAge
// GET retirementAge
// PRINT currentYear, retirementYear, and yearsLeft

const readline = require('readline-sync');

console.log(`What is your age`);
let currentAge = Number(readline.prompt());

console.log(`At what age would you like to retire?`);
let retirementAge = Number(readline.prompt());

let today = new Date();
let currentYear = today.getFullYear();

let workYearsLeft = retirementAge - currentAge;
let retirementYear = currentYear + workYearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`You only have ${workYearsLeft} year(s) left to go`);

