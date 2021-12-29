const task1 = require('./task1')
const task2 = require('./task2')

task1.sum((result) => console.log('task 1 -> ', result))
task1.sum(1)((result) => console.log('task 1 -> ', result))
task1.sum(1)(2)((result) => console.log('task 1 -> ', result))
task1.sum(1)(2)(4)((result) => console.log('task 1 -> ', result))

task2.sum(1)(2)(3)(4)(5)(6)((result) => console.log('task 2 -> ', result))
