const task1 = require('./task1')

task1.sum((result) => console.log('task 1 -> ', result))
task1.sum(1)((result) => console.log('task 1 -> ', result))
task1.sum(1)(2)((result) => console.log('task 1 -> ', result))
task1.sum(1)(2)(4)((result) => console.log('task 1 -> ', result))
