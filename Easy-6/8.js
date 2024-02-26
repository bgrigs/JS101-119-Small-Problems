// Reverse It (Part 2)

function reverseWords(string) {
  return string.split(" ").map(elem => {
    if (elem.length >= 5) return elem.split("").reverse().join("");
    else return elem;
  }).join(" ");
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"