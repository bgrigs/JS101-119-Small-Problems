function sumOfSums(arrayOfNums) {
  let sums = [];

  arrayOfNums.forEach((elem, idx) => {
    if (idx === 0) sums.push(elem);
    else {
      let numToPush = elem + sums[sums.length - 1];
      sums.push(numToPush);
    }
  });

  console.log(sums.reduce((accum, elem) => {
    accum += elem;
    return accum;
  } ,0));
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35