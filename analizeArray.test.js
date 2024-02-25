const analizeArray = require('./analizeArray')

const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mockArray2 = [10, 5, 78, 8, 3, 2, 200, 7, 22]
const mockArray3 = [15, 9, 23, 4, 65, 47, 35, 6, 100]

describe('analize array module', () => {
  test('object contains all the properties with appropiate types', () => {
    const resultArray = analizeArray(mockArray)
    expect(resultArray).toHaveProperty('average')
    expect(resultArray).toHaveProperty('min')
    expect(resultArray).toHaveProperty('max')
    expect(resultArray).toHaveProperty('length')
  })

  test('object contains the appropiate average with a maximum of two decimals', () => {
    expect(analizeArray(mockArray).average).toBe(5)
    expect(analizeArray(mockArray2).average).toBe(37.22)
    expect(analizeArray(mockArray3).average).toBe(33.78)
  })

  test('object contains the appropiate minimum value', () => {
    expect(analizeArray(mockArray).min).toBe(1)
    expect(analizeArray(mockArray2).min).toBe(2)
    expect(analizeArray(mockArray3).min).toBe(4)
  })

  test('object contains the appropiate maximum value', () => {
    expect(analizeArray(mockArray).max).toBe(9)
    expect(analizeArray(mockArray2).max).toBe(200)
    expect(analizeArray(mockArray3).max).toBe(100)
  })

  test('array length is the correct', () => {
    expect(analizeArray(mockArray).length).toBe(9)
    expect(analizeArray(mockArray2).length).toBe(9)
    expect(analizeArray(mockArray3).length).toBe(9)
  })
})
