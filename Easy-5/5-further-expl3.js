function interleave(arr1, arr2) {
  let joined = arr1.reduce((accum, _, idx) => {
    accum.push(arr1[idx], arr2[idx]);
    return accum;
  }, []);

  return joined;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]