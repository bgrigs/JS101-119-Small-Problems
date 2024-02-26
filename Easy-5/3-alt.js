function halvsies(arr) {
  let half = Math.round(arr.length / 2);
  let firstHalf = arr.slice(0, half);
  let secondHalf = arr.slice(half);

  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]