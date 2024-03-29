// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(idNumber, transactions) {
  return transactions.filter(transaction => transaction['id'] === idNumber);
}

function isItemAvailable(idNumber, transactions) {
  let idArr = transactionsFor(idNumber, transactions);

  let itemsIn = idArr.filter(elem => elem['movement'] === 'in')
    .reduce((accum, elem) => accum + elem['quantity'], 0);

  let itemsOut = idArr.filter(elem => elem['movement'] === 'out')
    .reduce((accum, elem) => accum + elem['quantity'], 0);

  return itemsIn > itemsOut;
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]