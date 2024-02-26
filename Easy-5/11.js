// After Midnight (Part 1)

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(totalMinutes) {
  if (totalMinutes < 0) {
    totalMinutes = (totalMinutes % MINUTES_IN_DAY) + MINUTES_IN_DAY;
  } else {
    totalMinutes %= MINUTES_IN_DAY;
  }

  let hours = Math.floor(totalMinutes / MINUTES_IN_HOUR);
  let minutes = totalMinutes % MINUTES_IN_HOUR;
  // console.log(hours);
  // console.log(minutes);

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


// The tests above should log true.

