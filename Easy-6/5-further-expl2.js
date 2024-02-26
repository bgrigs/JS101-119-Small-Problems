function swapName(name) {
  let nameArr = name.split(" ");
  let lastName = nameArr.pop();

  return `${lastName}, ${nameArr.join(" ")}`;
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"