function interleave(arr1, arr2) {
  let joined = [];

  arr1.forEach((el, idx) => {
    joined.push(el, arr2[idx]);
  });

  console.log(joined);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]