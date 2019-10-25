# obj-group
Δομοστοιχείο που βοηθάει στην ομαδοποιήση ένα στοιχείο πίνακα σε ένα αντικείμενο με ένα κλειδί που αυτοπροσδιορίζεται

## Ιστορικό Εκδόσεων
* ##### v1.0.0 - η πρώτη έκδοση
```
Hello World :)
```
* ##### v1.0.1 - η τελευταία έκδοση
``` 
 - handling input data
 - add handling error messages
```

## Πώς να χρησιμοποιήσετε το Δομοστοιχείο

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
### Αποτέλεσμα :
```
{
    strength: [['axe', 'melee'], ['tusk', 'melee']],
    agility: [['sniper', 'ranged'], ['phantom assasin', 'melee']],
    intelligence: [['crystal maiden', 'ranged'], ['windrunner', 'ranged']]
}
```
