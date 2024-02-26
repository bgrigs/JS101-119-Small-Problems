// Lettercase Counter

/*
Input: string
Output: object with 3 properties:
  -- 1 representing # of characters that are lowercase
  -- 1 rep. # of characters that are uppercase
  -- 1 rep. # of chracters that are neither (aka nonalphabetic)


Algo:
  - create a function that checks whether a character is alphabetic

  - declare a var called counter. initialize it to an empty obj with 3 props.
  - set each prop value to 0.
  - iterate through each charac of the string
  - if the character isn't alphabetic, add 1 to the neither property's value

  - if they character is alphabetic, check for lower or upper case
      - if a character is uppercase, add 1 to the uppercase property's value
      - if a character is lowercase, add 1 to the lowercase propertys value
*/

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function letterCaseCount(string) {
  let counter = {lowercase: 0, uppercase: 0, neither: 0};

  string.split("").forEach(char => {
    if (!isLetter(char)) counter.neither += 1;
    else if (char === char.toLowerCase()) counter.lowercase += 1;
    else if (char === char.toUpperCase()) counter.uppercase += 1;
  });

  console.log(counter);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }