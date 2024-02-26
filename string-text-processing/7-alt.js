function staggeredCase(string) {
  let counter = 0;
  let newString = '';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];

    if (counter % 2 === 0) newString += char.toUpperCase();

    if (counter % 2 === 1) newString += char.toLowerCase();

    if (isLetter(char)) counter += 1;
  }

  return newString;
}

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);