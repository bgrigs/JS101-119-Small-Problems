// Double Char (Part 1)

function repeater(string) {
  return string.split("")
    .map(char => char + char)
    .join("");
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""