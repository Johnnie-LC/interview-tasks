const sum = require('../task1').sum

describe('Task1', () => {
  test('Show the number zero,  prints -> 0', () => {
    const result = sum((result) => result)

    expect(result).toBe(0)
  })

  test('Show the number one,  prints -> 1', () => {
    const result = sum(1)((result) => result)

    expect(result).toBe(1)
  })

  test('Sum of one plus two is three, prints -> 3', () => {
    const result = sum(1)(2)((result) => result)

    expect(result).toBe(3)
  })

  test('Sum of one plus two plus four is seven, prints -> 7', () => {
    const result = sum(1)(2)(4)((result) => result)

    expect(result).toBe(7)
  })
})
