// How Old is Teddy?

function teddyAge(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

let age = teddyAge(20, 120);

console.log(`Teddy is ${age} years old!`);


function generateAge(num1, num2) {
  let age;

  if (num1 > num2) {
    age = (Math.random() * (num1 - num2)) + num2;
  } else if (num2 > num1) {
    age = (Math.random() * (num2 - num1)) + num1;
  }

  return Math.floor(age);
}

let randomAge = generateAge(120, 20);

console.log(`You are ${randomAge} years old!`);