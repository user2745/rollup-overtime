function generateRandomIndex(marketsArray) {
  var dataLength = marketsArray.length
  var min = 0
  var max = dataLength - 1
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return randomNumber
}

export default generateRandomIndex
