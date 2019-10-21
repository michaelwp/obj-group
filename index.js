/**
 * Author: https://github.com/michaelwp
 * @param {Array, array item index} value, keyIndex
 * @returns {object}
 */

/**
 * This function will grouping array item
 * into object based on given key
 */

const Messages = {
  InvalidStruct:
    'Invalid input struct, input must like [[1,2,3], [1,2,3], [1,2,3]]',
}

const objGroup = (value, keyIndex) => {
  if (!Array.isArray(value) || !value.every(v => Array.isArray(v))) {
    console.warn(Messages.InvalidStruct)
    return { errorMsg: Messages.InvalidStruct }
  }
  if (value.some(v => v.length < 2)) {
    console.warn('[obj-group-warning]: invalid input data')
  }
  const result = {}
  value.forEach(v => {
    const vArray = []
    v.forEach((item, index) => {
      if (index !== keyIndex) {
        vArray.push(item)
      }
    })
    if (result[v[keyIndex]] === undefined) {
      result[v[keyIndex]] = [vArray]
    } else {
      result[v[keyIndex]].push(vArray)
    }
    
    // Merge groups if array length === 2
        if (v.length === 2) {
            result[v[keyIndex]] = [].concat(...result[v[keyIndex]]);
        }
  })
  if (result[undefined]) {
    console.warn('Key Index out of range')
    return { errorMsg: 'Key Index out of range.' }
  }
  return result
}
module.exports = objGroup
