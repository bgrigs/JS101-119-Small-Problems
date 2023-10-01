// Right Triangles

function triangle(number) {
  let star = "*";

  for (let stars = 1; stars <= number; stars += 1) {
    console.log(star.padStart(number));
    star += "*";
  }
}

triangle(5);
triangle(9);

