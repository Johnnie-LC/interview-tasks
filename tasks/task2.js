/** Task 2*/

const sum = (x) =>
  typeof x === 'function'
    ? x(0)
    : (y) => (typeof y === 'function' ? y(x) : sum(x + y))

module.exports.sum = sum
