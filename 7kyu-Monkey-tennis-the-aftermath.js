function ballCollector(detritus) {
  let sack = {weight: 0}
  for (let i = 0; i < detritus.length; i++) {
    if ( detritus[i] === 58) {
      sack.weight += detritus[i]
    }
  }
  return sack
}

module.exports = {ballCollector};