function XO(str) {
  let exes = 0
  let ohs = 0
  let word = str.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    
    if (word[i] === "o") {
      ohs ++;
    }
  if (word[i] === "x") {
    exes ++;
  }
    }
  return ohs === exes
  } 

  module.exports = { XO} ;