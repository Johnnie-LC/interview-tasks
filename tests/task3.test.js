const extractValuesForKey = require('../tasks/task3').extractValuesForKey

describe('Task3 - undeclared object', () => {
  const result = extractValuesForKey(
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
  test('show the root key of the first uuid', () => {
    expect(result.get(1)).toBe('')
  })

  test('show the root key of the second uuid', () => {
    expect(result.get(2)).toBe('/innerTwo')
  })

  test('show the root key of the third uuid', () => {
    expect(result.get(3)).toBe('/innerTwo/innerThree/innerFour')
  })

  test('show the undifine value to fourth uuid non-existent', () => {
    expect(result.get(4)).toBe(undefined)
  })
})

describe('Task3 - declared object', () => {
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
  const result = extractValuesForKey({ someObject }, 'uuid')

  test('show the root key of the first uuid', () => {
    expect(result.get(1)).toBe('someObject')
  })

  test('show the root key of the second uuid', () => {
    expect(result.get(2)).toBe('someObject/innerTwo')
  })

  test('show the root key of the third uuid', () => {
    expect(result.get(3)).toBe('someObject/innerTwo/innerThree/innerFour')
  })

  test('show the undifine value to fourth uuid non-existent', () => {
    expect(result.get(4)).toBe(undefined)
  })
})
