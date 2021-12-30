const task1 = require('./tasks/task1')
const task2 = require('./tasks/task2')
const task3 = require('./tasks/task3')

/** Task 1*/
task1.sum((result) => console.log('task 1 -> ', result))
task1.sum(1)((result) => console.log('task 1 -> ', result))
task1.sum(1)(2)((result) => console.log('task 1 -> ', result))
task1.sum(1)(2)(4)((result) => console.log('task 1 -> ', result))

/** Task 2*/
task2.sum(1)(2)(3)(4)(5)(6)((result) => console.log('task 2 -> ', result))

/** Task 3*/
const result = task3.extractValuesForKey(
  {
    uuid: 1,
    innerOne: {
      someKey: 'some text',
    },
    innerTwo: {
      uuid: 2,
      innerThree: {
        someOtherKey: 'some other text',
        innerFour: {
          uuid: 3,
        },
      },
    },
  },
  'uuid'
)

console.log('task 3/result: ', result)

const someObject = {
  uuid: 1,
  innerOne: {
    someKey: 'some text',
  },
  innerTwo: {
    uuid: 2,
    innerThree: {
      someOtherKey: 'some other text',
      innerFour: {
        uuid: 3,
      },
    },
  },
}

const result2 = task3.extractValuesForKey({ someObject }, 'uuid')

console.log('task 3/result2: ', result2)
