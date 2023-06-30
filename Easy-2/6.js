// The End Is Near But Not Here

function penultimate(string) {
  let words = string.split(' ');
  return words.at(-2);
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true