// How Many?

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(vehicles) {
  let count = vehicles.reduce((accum,  vehicle) => {
    vehicle = vehicle.toLowerCase();
    accum[vehicle] = accum[vehicle] + 1 || 1;
    return accum;
  }, {});

  logOccurences(count);
}

function logOccurences(count) {
  for (let vehicle in count) {
    console.log(`${vehicle} => ${count[vehicle]}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// suv => 2
// motorcycle => 2