var number = function(busStops){
  let getOn = 0 
  let getOff = 0
  
  for (let i = 0; i < busStops.length; i++) {
  getOn += busStops[i][0] 
  getOff += busStops[i][1] 
    
    
  }
  let people = getOn - getOff
  
   return people 
}

module.exports = {number};