// Without RegEx
function isRealPalindrome(string) {
  let stringAlphanumericOnly = removeNonalphanumeric(string.toLowerCase());
  let reversedString = stringAlphanumericOnly.split("").reverse().join("");

  console.log(stringAlphanumericOnly === reversedString);
  return stringAlphanumericOnly === reversedString;
}

function removeNonalphanumeric(string) {
  let characters = string.split("");
  let stringAlphanumericOnly = "";

  characters.forEach(char => {
    if (isLetter(char) || isNumber(char)) {
      stringAlphanumericOnly += char;
    }
  });

  return stringAlphanumericOnly;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false