/*
Algo:
  - create a variable called counter and initialize it to 0
  - if the character we are iterating over is a letter, add 1 to counter

  - write a helper function called isLetter that checks whether char is a letter
*/

function staggeredCase(string) {
  let counter = 0;

  return string.split("")
    .map(char => {
      if (counter % 2 === 0) char = char.toUpperCase();

      if (counter % 2 === 1) char = char.toLowerCase();

      if (isLetter(char)) counter += 1;

      return char;
    }).join('');
}

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);