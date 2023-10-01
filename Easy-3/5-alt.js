// Right Triangles

function triangle(height) {
  let spaces = height - 1;
  let stars = 1;

  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    height -= 1;
    spaces -= 1;
    stars += 1;
  }
}


triangle(5);
triangle(9);