# obj-group
módulo para ajudar a agrupar item de matriz em um objeto com uma chaveque é pré-determinada

## Historico de Versões
* ##### v1.0.0 - A Primerissima versão
```
Hello World :)
```
* ##### v1.0.1 - A ultima versão
``` 
 - handling input data
 - add handling error messages
```

## Como Utilizar

``` npm i obj-group --save ```

```javascript
// <importar a função>
const objGroup = require('obj-group');

//inserir dados na matriz de dados :
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
### Resultado :
```
{
    strength: [['axe', 'melee'], ['tusk', 'melee']],
    agility: [['sniper', 'ranged'], ['phantom assasin', 'melee']],
    intelligence: [['crystal maiden', 'ranged'], ['windrunner', 'ranged']]
}
```
