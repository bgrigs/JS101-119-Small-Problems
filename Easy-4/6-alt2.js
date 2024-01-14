function wordSizes(words) {
  let wordsArray = words.split(' ');
  // console.log(wordsArray);
  let count = {};

  for (let word of wordsArray) {
    let wordSize = word.length;
    
    if (wordSize === 0) continue;

    if (Object.keys(count).indexOf(String(wordSize)) === -1) {
      count[wordSize] = 0;
    } 
    count[wordSize] += 1;
  }

  console.log(count);
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}