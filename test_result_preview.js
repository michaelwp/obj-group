// <Import the function>
const objGroup = require('./index');

//input data in array form :
const value = [
    ['sniper'],
    ['axe'],
    ['tusk'],
    ['crystal maiden'],
    ['phantom assasin'],
    ['windrunner']];

const actualRes = objGroup(value, 0);
console.log(actualRes);