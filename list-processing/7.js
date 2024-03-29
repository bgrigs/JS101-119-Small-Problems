sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

function sumOfSums(arr) {
  return arr.reduce((accum, elem, idx) => {
    if (idx === 0) accum.push(elem);
    else accum.push(elem + accum[idx - 1]);
    return accum;
  }, []).reduce((accum, elem) => accum + elem);
}