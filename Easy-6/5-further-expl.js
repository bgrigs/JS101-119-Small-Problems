function swapName(name) {
  let nameArr = name.split(" ");
  let lastName = nameArr[nameArr.length - 1] + ',';
  nameArr.unshift(lastName);
  nameArr.pop();

  console.log(nameArr.join(" "));
}

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"