// Double Char (Part 2)


function doubleConsonants(string) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';

  return string.split("")
    .reduce((accum, char) => {
      if (CONSONANTS.includes(char.toLowerCase())) {
        accum += char.repeat(2);
      } else {
        accum += char;
      }
      return accum;
    }, "");
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""