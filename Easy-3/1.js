// ddaaiillyy ddoouubbllee

// Write function and accept a string arg
// declare collapsedString var
//IF string has consec letters, push only 1 of the characters to collapsedString

// function crunch(string) {
//   let collapsedString = "";

//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === string[i + 1]) {
//       continue;
//     } else {
//       collapsedString += string[i];
//     }
//   }

//   return console.log(collapsedString);
// }

// LS Solution
function crunch(string) {
  let index = 0;
  let collapsedString = "";

  while (index < string.length) {
    if (string[index] !== string[index + 1]) {
      collapsedString += string[index];
    }
    index += 1;
  }

  return console.log(collapsedString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""