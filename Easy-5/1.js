/*Cute Angles
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute. */
// Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

const MINUTES_SECONDS = 60;

function dms(number) {
  let degrees = Math.floor(number);
  let minutes = (number - degrees) * MINUTES_SECONDS;
  let seconds = (minutes - Math.floor(minutes)) * MINUTES_SECONDS;

  minutes = formatZeroes(Math.floor(minutes));
  seconds = formatZeroes(Math.floor(seconds));

  console.log(`${degrees}°${minutes}'${seconds}"`);
}

function formatZeroes(number) {
  if (number < 10) return '0' + number;
  return number;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


