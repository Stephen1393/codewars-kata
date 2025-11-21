function getCount(str) {
  let vowels = "aeiou"
  let total = 0
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (vowels.includes(char)) {
      total++
    }
  }
  return total
}

module.exports = {getCount};