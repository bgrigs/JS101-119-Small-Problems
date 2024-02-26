function dms(degrees) {
  if (degrees < -360) degrees += (360 * 2);
  if (degrees < 0) degrees = 360 - (degrees * -1);
  if (degrees > 360) degrees -= 360;

  console.log(`${degrees}°00'00"`);
}

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"
dms(90); // 300°00'00"

