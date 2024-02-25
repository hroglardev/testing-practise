const reverseString = require('./reverseString')

describe('reverse string module', () => {
  test('returns a reversed string', () => {
    expect(reverseString('Alexander')).toBe('rednaxelA')
  })
})
