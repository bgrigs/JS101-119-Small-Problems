function swapName(name) {
  let nameArr = name.split(" ");
  let lastName = nameArr.slice(nameArr.length - 1);
  let firstAndMiddleNames = nameArr.slice(0, nameArr.indexOf(lastName)).join(" ");

  return `${lastName}, ${firstAndMiddleNames}`;
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"