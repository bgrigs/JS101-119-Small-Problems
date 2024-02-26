// In order to solve this with map, we must return nested arrays as the length of the array returned by map will also be equal to the lenght of the array it was called on. 

function interleave(arr1, arr2) {
  let joined = arr1.map((_, idx) => {
    return [arr1[idx], arr2[idx]];
  }).flat();

  console.log(joined);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]