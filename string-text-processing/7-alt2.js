// write with boolean toggle

function staggeredCase(string) {
  let upper = true;

  return string.split("")
    .map(char => {
      if (isLetter(char)) {
        if (upper) {
          char = char.toUpperCase();
          upper = false;
        } else {
          char = char.toLowerCase();
          upper = true;
        }
      }

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