// How Many?

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(vehicles) {
  let count = {};

  vehicles.forEach(vehicle => {
    vehicle = vehicle.toLowerCase();
    count[vehicle] = count[vehicle] + 1 || 1;
  });

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
