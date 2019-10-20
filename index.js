/**
 * Author: https://github.com/michaelwp
 * @param {Array, array item index} value, keyIndex
 * @returns {object}
 */

/**
 * This function will grouping array item
 * into object based on given key
 */
const objGroup = (value, keyIndex) => {
    const result = {};
    value.forEach((v) => {
        const vArray = [];
        v.forEach((item, index) => {
            if (index !== keyIndex) {
                vArray.push(item);
            }
        });
        if (result[v[keyIndex]] === undefined) {
            // result[v[keyIndex]] = [vArray];
            console.warn("Key Index out of range")
            return { errorMsg: "Key Index out of range." }
        } else {
            result[v[keyIndex]].push(vArray);
        }
    });
    return result;
};
module.exports = objGroup;