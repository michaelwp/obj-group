# obj-group
modulo per aiutare a raggruppare un elemento dell'array in un oggetto con una chiave autodeterminata

## cronologia delle versioni
* ##### v1.0.0 - la primissima versione
```
Hello World :)
```
* ##### v1.0.1 - l'ultima versione
``` 
 - gestione dei dati di input
 - aggiungere gestione dei messaggi di errore
```

## Come usare

``` npm i obj-group --save ```

```javascript
// <Importa la funzione>
const objGroup = require('obj-group');

//inserire i dati in forma di array :
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
### risultato :
```
{
    strength: [['axe', 'melee'], ['tusk', 'melee']],
    agility: [['sniper', 'ranged'], ['phantom assasin', 'melee']],
    intelligence: [['crystal maiden', 'ranged'], ['windrunner', 'ranged']]
}
```
