# obj-group
module for helping to group array item into an object with a key that self-determined

## version history
* v1.0.0 - the very first version
```
Hello World :)
```
* v1.0.1 - the latest version
``` 
 - handling input data
 - add handling error messages
```

## How To Use

``` npm i obj-group --save ```

```javascript
// <Import the function>
const objGroup = require('obj-group');

//input data in array form :
const value = [
    ['sniper', 'agility', "ranged"],
    ['axe', 'strength', 'melee'],
    ['tusk', 'strength', 'melee'],
    ['crystal maiden', 'intelligence', 'ranged'],
    ['phantom assasin', 'agility', 'melee'],
    ['windrunner', 'intelligence', 'ranged']];

const actualRes = objGroup(value, 1);
console.log(actualRes);

```
### result :
```
{
    strength: [['axe', 'melee'], ['tusk', 'melee']],
    agility: [['sniper', 'ranged'], ['phantom assasin', 'melee']],
    intelligence: [['crystal maiden', 'ranged'], ['windrunner', 'ranged']]
}
```
