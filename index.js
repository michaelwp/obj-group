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
        // Return warning if length of array item is less than 2
        if (v.length < 2) {
            const warnMsg = "Array item length inside array data must be >= 2.";
            console.warn(warnMsg);
            return { warnMsg: warnMsg };
        }

        const vArray = [];
        v.forEach((item, index) => {
            if (index !== keyIndex) {
                vArray.push(item);
            }
        });
        if (result[v[keyIndex]] === undefined) {
            result[v[keyIndex]] = [vArray];
        } else {
            result[v[keyIndex]].push(vArray);
        }
        
        // Merge groups if array length === 2
        if (v.length === 2) {
            result[v[keyIndex]] = [].concat(...result[v[keyIndex]]);
        }
    });
    if (result[undefined]) {
        console.warn("Key Index out of range")
        return { errorMsg: "Key Index out of range." }
    }
    return result;
};
module.exports = objGroup;