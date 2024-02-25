const calculator = require('./calculator')

describe('calculator module', () => {
  test('Calculator contains add function', () => {
    expect(calculator).toHaveProperty('add')
    expect(calculator.add).toBeInstanceOf(Function)
  })

  test('Calculator contains substract function', () => {
    expect(calculator).toHaveProperty('substract')
    expect(calculator.substract).toBeInstanceOf(Function)
  })

  test('Calculator contains multiply function', () => {
    expect(calculator).toHaveProperty('multiply')
    expect(calculator.multiply).toBeInstanceOf(Function)
  })

  test('Calculator contains divide function', () => {
    expect(calculator).toHaveProperty('divide')
    expect(calculator.divide).toBeInstanceOf(Function)
  })

  test('Add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5)
    expect(calculator.add(4, 5)).toBe(9)
    expect(calculator.add(45, 100)).toBe(145)
    expect(calculator.add(32, 57)).toBe(89)
  })

  test('Substract two numbers', () => {
    expect(calculator.substract(2, 3)).toBe(-1)
    expect(calculator.substract(7, 5)).toBe(2)
    expect(calculator.substract(45, 100)).toBe(-55)
    expect(calculator.substract(42, 30)).toBe(12)
  })

  test('Multiply two numbers', () => {
    expect(calculator.multiply(10, 8)).toBe(80)
    expect(calculator.multiply(4, 5)).toBe(20)
    expect(calculator.multiply(45, 100)).toBe(4500)
    expect(calculator.multiply(32, 57)).toBe(1824)
  })

  test('Divide two numbers', () => {
    expect(calculator.divide(9, 3)).toBe(3)
    expect(calculator.divide(25, 2)).toBe(12.5)
    expect(calculator.divide(450, 45)).toBe(10)
    expect(calculator.divide(54, 6)).toBe(9)
  })
})
