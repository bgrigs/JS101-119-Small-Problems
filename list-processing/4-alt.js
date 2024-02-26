function leadingSubstrings(str) {
  let substring = '';

  return str.split("").map(char => {
    substring += char;
    return substring;
  });
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]