// Grade Book
function getAverage(grade1, grade2, grade3) {
  return (grade1 + grade2 + grade3) / 3;
}

function getGrade(grade1, grade2, grade3) {
  let average = getAverage(grade1, grade2, grade3);
  let grade;

  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80 && average < 90) {
    grade = 'B';
  } else if (average >= 70 && average < 80) {
    grade = 'C';
  } else if (average >= 60 && average < 70) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return console.log(grade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
