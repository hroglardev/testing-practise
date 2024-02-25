const alphabetModel = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const reOrderAlphabet = (shiftFactor) => {
  const newArr = alphabetModel.slice(shiftFactor).concat(alphabetModel.slice(0, shiftFactor))
  return newArr
}

const caesarCipher = (string, shiftFactor) => {
  const encodedAlphabet = reOrderAlphabet(shiftFactor)
  let result = ''
  for (let i = 0; i < string.length; i++) {
    const originalLetterIndex = alphabetModel.indexOf(string[i].toLowerCase())
    result += encodedAlphabet[originalLetterIndex]
  }
  return result
}

module.exports = caesarCipher
