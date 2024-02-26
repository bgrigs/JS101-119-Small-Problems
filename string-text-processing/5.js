// Swap Case

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function swapCase(string) {
  return string.split("")
    .map(char => {
      if (!isLetter(char)) return char;
      if (char === char.toLowerCase()) return char.toUpperCase();
      if (char === char.toUpperCase()) return char.toLowerCase();
      return '';
    }).join("");
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"