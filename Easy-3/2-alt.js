function bannerizer(message) {
  let horizontalLine = `+${'-'.repeat(message.length + 2)}+`;
  let emptyLine = `|${' '.repeat(message.length + 2)}|`;

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalLine);
}

bannerizer('I am Kenough');
