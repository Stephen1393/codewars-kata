function isPrime(n) {
  
   if (n < 2) {return false}
  
  for (let i = 2; i < n; i++) { //checking for prime numbers up until n
    if (n % i === 0) {
      
      return false
    }
    
  }
  
  return true //returns true if n is prime
  
  }
  
function primes(limit) {
  let prime = []
  
  if (limit < 3 || limit > 32000) {
    
    throw new TypeError("Number not in range")
  }
  
  for (let i = 2; i < limit; i++) { //checking prime numbers below the limit
    
    if ( isPrime(i)) {
      
      prime.push(i) //pushing them to an array
    }
    
  }
  
  return prime
}
  
  
function goldbachPartitions(num) {
  
  let result = []
  const list = primes(num) //calling primes function
  
  if (num % 2 !== 0) { //returns empty array if number is odd
    
    return []
  
  }
  
  for (let i = 0; i < list.length; i++) { //checking primes from left-right
    
    let num1 = list[i]
    
    for (let j = i; j < list.length; j++) { //checking primes from i
      
      let num2 = list[j]
      
      if (num1 + num2 === num) {
      
      result.push(`${num1}+${num2}`) // pushing the sum
    }
  
  }
  
}
  return result
  
}
       
module.exports = {goldbachPartitions};