function countDevelopers(list) {
    
    let total = 0
  
  for (let i = 0; i < list.length; i++) {
    
    if (list[i].continent === "Europe" && list[i].language === "JavaScript"){
      
      total ++;
    }
  }
  
  return total
  }

  module.exports = {countDevelopers};