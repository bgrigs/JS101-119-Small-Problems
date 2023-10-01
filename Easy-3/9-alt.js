function cleanUp(string) {
  let result = ""

  for (let index = 0; index < string.length; index += 1) {
    if (isUpperCase(string[index]) || isLowerCase(string[index])) {
      result += string[index];
    } else if (index === 0 || previousCharacter(result) !== ' ') {
      result += ' ';
    }
  }

  console.log(result);
}

function isUpperCase(character) {
  return character >= 'A' && character <= 'Z'
}

function isLowerCase(character) {
  return character >= 'a' && character <= 'z'
}

function previousCharacter(text) {
  return text[text.length - 1];
}

cleanUp("---what's my +*& line?");    // " what s my line "