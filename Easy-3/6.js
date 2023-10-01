// Madlibs

let readline = require('readline-sync');

console.log('Enter a noun:');
let noun = readline.prompt();

console.log('Enter a verb:');
let verb = readline.prompt();

console.log('Enter an adjective:');
let adjective = readline.prompt();

console.log('Enter an adverb:');
let adverb = readline.prompt();

console.log(`I love to ${adverb} ${verb} ${adjective} ${noun} in the morning.`);
console.log(`When I was a child, I liked to ${adverb} ${verb} ${adjective} ${noun} with my dad.`);
