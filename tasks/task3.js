function extractValuesForKey(object, searchKey, optionalObjectName = '') {
  if (
    Object.keys(object).length === 1 &&
    Object.keys(object)[0] !== searchKey
  ) {
    optionalObjectName = Object.keys(object)[0]
    object = Object.values(object)[0]
  }

  let myMap = new Map()

  const findUuid = (object, objectName = optionalObjectName, map = myMap) => {
    const objetoParse = Object.entries(object)

    objetoParse.forEach((externalNode) => {
      externalNode?.forEach((InternalNode) => {
        if (InternalNode === searchKey) {
          map.set(externalNode[1], objectName)
        }
        if (
          typeof InternalNode === 'string' &&
          InternalNode.includes('inner')
        ) {
          findUuid(externalNode[1], `${objectName}/${externalNode[0]}`)
        }
        return map
      })
    })
  }

  findUuid(object)

  return myMap
}

module.exports.extractValuesForKey = extractValuesForKey
