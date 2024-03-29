// Using map instead of a for loop
function runningTotal(numbers) {
  let addToNumber = 0;
  return numbers.map(number => addToNumber += number);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []