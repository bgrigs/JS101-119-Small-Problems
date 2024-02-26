function substrings(str) {
  return str.split("").reduce((accum, _, idx) => {
    accum = accum.concat(leadingSubstrings(str.slice(idx)));
    return accum;
  }, []);
}

function leadingSubstrings(str) {
  let substring = '';

  return str.split("").map(char => {
    substring += char;
    return substring;
  });
}

console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */