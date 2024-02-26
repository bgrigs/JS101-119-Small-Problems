// How Many?

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(vehicles) {
  let count = {};

  vehicles.forEach(vehicle => {
    count[vehicle] = count[vehicle] + 1 || 1;
  });

  Object.keys(count).forEach(vehicle => console.log(`${vehicle} => ${count[vehicle]}`));
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1