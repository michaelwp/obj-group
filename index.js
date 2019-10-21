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
    let msg = "Type of value must be Array."
    const result = {};
    if (Array.isArray(value)) {
        value.forEach((v) => {
            if (Array.isArray(v)) {
                const vArray = [];
                v.map((item, index) => {
                    if (index !== keyIndex) {
                        vArray.push(item);
                    }
                });
                let res = result[v[keyIndex]]
                if (res === undefined) {
                    res = [vArray];
                } else {
                    res.push(vArray);
                }
            } else {
                console.warn(msg)
                return { errorMsg: msg }
            }
        });
        if (result[undefined]) {
            console.warn("Key Index out of range")
            return { errorMsg: "Key Index out of range." }
        }
        return result;
    } else {
        console.warn(msg)
        return { errorMsg: msg }
    }
};
module.exports = objGroup;