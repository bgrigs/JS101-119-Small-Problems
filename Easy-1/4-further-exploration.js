/* How big is the room?
START

GET input type (meters or feet)
GET length of room
SET length -- will store length
GET width of room
SET width -- will store width

SET output -- will store square meeters and feet
PRINT output
*/

const readline = require('readline-sync');

const ONE_SQ_METER = 10.7639;

function invalidChoice(choice) {
  return ((choice !== 'm' && choice !== 'f') &&
          (choice.toLowerCase() !== 'm' && choice.toLowerCase() !== 'f'));
}

console.log("Would you like to calculate the square footage in meters or feet? Write 'm' for meters or 'f' for feet.");
let measurementChoice = readline.prompt();

while (invalidChoice(measurementChoice)) {
  console.log("Invalid choice. Please enter 'm' for meters or 'f' for feet.");
  measurementChoice = readline.prompt();
}

if (measurementChoice === 'm' || measurementChoice === 'M') {
  getMeters();
}

if (measurementChoice === 'f' || measurementChoice === 'F') {
  getFeet();
}

function getMeters() {
  console.log('What is length of your room in meters?');
  let length = Number(readline.prompt());

  console.log('What is width of your room in meters?');
  let width = Number(readline.prompt());

  calculateMeters(length, width);
}

function calculateMeters(length, width) {
  let outputMeters = (length * width).toFixed(2);
  console.log(`Your room is ${outputMeters} square meters.`);
  convertMetersToFeet(outputMeters);
}

function convertMetersToFeet(squareMeters) {
  let conversion = (squareMeters * ONE_SQ_METER).toFixed(2);
  console.log(`(${conversion} square feet)`);
}

function getFeet() {
  console.log('What is length of your room in feet?');
  let length = Number(readline.prompt());

  console.log('What is width of your room in feet?');
  let width = Number(readline.prompt());

  calculateFeet(length, width);
}

function calculateFeet(length, width) {
  let outputFeet = (length * width).toFixed(2);
  console.log(`Your room is ${outputFeet} square feet.`);
  convertFeetToMeters(outputFeet);
}

function convertFeetToMeters(squareFeet) {
  let conversion = (squareFeet / ONE_SQ_METER).toFixed(2);
  console.log(`(${conversion} square meters)`);
}

