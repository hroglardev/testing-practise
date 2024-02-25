const capitalize = require('./capitalize')

describe('capitalize module', () => {
  test('capitalize first letter', () => {
    expect(capitalize('lucas')).toBe('Lucas')
  })
})
