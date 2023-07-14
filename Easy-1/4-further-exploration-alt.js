const readlineSync = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;

let unit = readlineSync.question("Enter 'm' for meters, 'f' for feet\n");

if (unit === 'm') {
  unit = 'meters';
} else if (unit === 'f') {
  unit = 'feet';
} else {
  console.log("Invalid. Enter 'm' for meters, 'f' for feet");
  unit = readlineSync.question();
}

const length = readlineSync.question(`Enter the length of the room in ${unit}:\n`);
const width = readlineSync.question(`Enter the width of the room in ${unit}:\n`);

const area = Number(length) * Number(width);
const conversion = unit === 'meters' ? area * SQMETERS_TO_SQFEET : area / SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${area.toFixed(2)} square ${unit} (${conversion.toFixed(2)} square ${unit === 'meters' ? 'feet' : 'meters'}).`);

