function repeater(string) {
  return string.split("")
    .reduce((accum, char) => accum + char.repeat(2), '');
}

console.log(repeater('Hello'));        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""