/*
Input: string
Output: string
  -- every other character starting from the first should be capitalized
  -- this should be followed by a lowercase letter

Rules: don't change non-alphabetic characters

Algo:
  -- iterate through each character
  -- if the index of a letter % 2 === 0, the letter should be uppercase
  -- else, letter should be lowercase
*/


function staggeredCase(string) {
  return string.split("")
    .map((char, idx) => {
      if (idx % 2 === 0) return char.toUpperCase();
      return char.toLowerCase();
    }).join("");
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"