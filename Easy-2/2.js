// Greeting a User
// GET User's name
// PRINT greeting for user
// IF user writes name with an exclamation =>
//  PRINT HELLO NAME. WHY ARE WE SCREAMING?

const readline = require('readline-sync');

console.log('What is your name?');
let name = readline.prompt();

if (name.at(-1) === '!') {
  name = name.substring(0, name.length - 1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}


