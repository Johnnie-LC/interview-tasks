const sum = require('../task2').sum

describe('Task2', () => {
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

  test('Sum of one, two, three, four, five, six is twenty one, prints -> 21', () => {
    const result = sum(1)(2)(3)(4)(5)(6)((result) => result)

    expect(result).toBe(21)
  })
})
