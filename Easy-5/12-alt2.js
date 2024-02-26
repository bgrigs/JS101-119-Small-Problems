const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function beforeMidnight(string) {
  let deltaMinutes = MINUTES_IN_DAY - afterMidnight(string);
  return deltaMinutes % MINUTES_IN_DAY;
}

function afterMidnight(string) {
  let deltaMinutes = calculateMinutes(string);
  return deltaMinutes % MINUTES_IN_DAY;
}

function calculateMinutes(string) {
  let [hours, minutes] = string.split(":").map(num => Number(num));
  return (hours * MINUTES_IN_HOUR) + minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);