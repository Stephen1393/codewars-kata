function solution(string) {
  let result = ""
  let space = " "
  
  for (let i = 0; i < string.length; i++) {
    const char = string[i] 
    if (char >= "A" && char <= "Z" && i !== 0) {
     result += space
    }
    result += char
  }
  return result
}

module.exports = {solution};