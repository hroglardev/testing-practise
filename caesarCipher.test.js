const caesarCipher = require('./caesarCipher')

describe('caesar cipher module', () => {
  test('Case shift factor of 3', () => {
    expect(caesarCipher('lucas', 3)).toBe('oxfdv')
  })

  test('Case shift factor of 9', () => {
    expect(caesarCipher('liliana', 9)).toBe('ururjwj')
  })

  test('Case shift factor of 7', () => {
    expect(caesarCipher('alejandro', 7)).toBe('hslqhukyv')
  })

  test('Accepts upper case', () => {
    expect(caesarCipher('MArIAnO', 7)).toBe('thyphuv')
  })
})
