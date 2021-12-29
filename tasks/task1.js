/** Task 1 */

const sum = (x) =>
  typeof x === 'function'
    ? x(0)
    : (y) =>
        typeof y === 'function'
          ? y(x)
          : (z) =>
              typeof z === 'function'
                ? z(x + y)
                : (l) => (typeof l === 'function' ? l(x + y + z) : null)

module.exports.sum = sum
