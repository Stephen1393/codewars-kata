var splitInParts = function(s, partLength){
  let result = " "
  let words = ""
  
  for (let i = 0; i < s.length; i++) {
    words += s[i]
    if ((i + 1) % partLength === 0 && i !== s.length - 1) { 
      words += result
    }
  }
    return words
 }

 module.exports = {splitInParts};