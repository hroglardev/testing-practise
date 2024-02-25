const formatNumber = (number) => {
  if (Number.isInteger(number)) {
    return number
  } else {
    return +number.toFixed(2)
  }
}

const analizeArray = (array) => {
  return {
    average: formatNumber(array.reduce((prev, curr) => prev + curr, 0) / array.length),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
}

module.exports = analizeArray
