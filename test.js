const objGroup = require('./index');
const assert = require('assert');

//data testing :
const value = [
    ['sniper', 'agility', "ranged"],
    ['axe', 'strength', 'melee'],
    ['tusk', 'strength', 'melee'],
    ['crystal maiden', 'intelligence', 'ranged'],
    ['phantom assasin', 'agility', 'melee'],
    ['windrunner', 'intelligence', 'ranged']];


// expected result :
const expectedRes = {
    strength: [['axe', 'melee'], ['tusk', 'melee']],
    agility: [['sniper', 'ranged'], ['phantom assasin', 'melee']],
    intelligence: [['crystal maiden', 'ranged'], ['windrunner', 'ranged']]
};
// the actual result :
const actualRes = objGroup(value, 1);

// compare the type of :
assert.strictEqual(typeof expectedRes, typeof actualRes, "both type of are object");

// iterating the actual result object :
for (const e in expectedRes) {

    // compare the type of item object:
    assert.strictEqual(typeof expectedRes[e], typeof actualRes[e], "both type of are array");

    // compare the type of item object length:
    assert.strictEqual(expectedRes[e].length, actualRes[e].length, "both length are three (3)");

    // iterating the array :
    expectedRes[e].forEach((eItemArray, eItemArrayIndex) => {

        // compare the type of item array:
        assert.strictEqual(typeof eItemArray, typeof actualRes[e][eItemArrayIndex], "both type of are array");

        // compare the item array length:
        assert.strictEqual(eItemArray.length, actualRes[e][eItemArrayIndex].length, "both length are three (2)");

        // iterating the item array:
        eItemArray.forEach((eItem, eItemIndex) => {

            // compare the type of item:
            assert.strictEqual(typeof eItem, typeof actualRes[e][eItemArrayIndex][eItemIndex], "both type are string");

            // compare the item
            assert.strictEqual(eItem, actualRes[e][eItemArrayIndex][eItemIndex], "equal string item");

        });

    });

}
console.log(actualRes);
console.log("test running successfully");