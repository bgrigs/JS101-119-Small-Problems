sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

function sum(num) {
  return String(num).split("").reduce((accum, elem) => {
    accum += Number(elem);
    return accum;
  }, 0);
}