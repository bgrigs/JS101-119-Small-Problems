// Welcome Stranger
// Create a function that accepts 2 arguments -- an array and object
// Array will ocntain 2 or more elements (a person's name)
// Object will have two keys, title and occupation + their values
// Return a greeting that uses the person's full name and mentions the title


function greetings(person, job) {
  let fullName = '';
  let titleJob = '';
  job = Object.values(job);

  // Using for/in instead of for/of in order to access array index

  for (let name in person) {
    fullName += person[name];
    if (name < person.length - 1) {
      fullName += ' ';
    }
  }

  for (let value in job) {
    titleJob += job[value];
    if (value < job.length - 1) {
      titleJob += ' ';
    }
  }

  return `Hello ${fullName}. It's nice to have a ${titleJob} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.