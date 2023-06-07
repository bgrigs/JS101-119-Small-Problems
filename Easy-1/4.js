/* How big is the room?
START
GET length of room in meters
SET length -- will store length
GET width of room in meters
SET width -- will store width

SET output -- will store square meets and feet
PRINT output
*/

const readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log('What is length of your room in meters?');
let length = Number(readline.prompt());

console.log('What is width of your room in meters?');
let width = Number(readline.prompt());

let outputMeters = (length * width).toFixed(2);
let outputFeet = (outputMeters * SQMETERS_TO_SQFEET).toFixed(2);

console.log(`Your room is ${outputMeters} square meters and ${outputFeet} square feet.`);


