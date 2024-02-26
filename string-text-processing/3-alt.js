function letterCaseCount(string) {
  console.log({
    lowercase: string.replace(/[^a-z]/g, '').length,
    uppercase: string.replace(/[^A-Z]/g, '').length,
    neither: string.replace(/[A-z]/g, '').length
  });
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }