# obj-group
Módulo para agrupar elementos de un array, dentro de un objeto, auto-asignando los keys.

## Historial de versiones
* ##### v1.0.0 - la primera versión
```
Hola Mundo :)
```
* ##### v1.0.1 - la versión más reciente
```
 - manejo de datos de ingresados por el usuario
 - mensajes de error en el manejo de datos han sido agregados
```

## Uso

``` npm i obj-group --save ```

```javascript
// <Importar la función>
const objGroup = require('obj-group');

//agregar datos a manera de array:
const valor = [
    ['francotirador', 'agilidad', "a distancia"],
    ['hacha', 'fuerza', 'cuerpo a cuerpo'],
    ['colmillo', 'fuerza', 'cuerpo a cuerpo'],
    ['doncella de cristal', 'inteligencia', 'a distancia'],
    ['asesino de fantasmas', 'agilidad', 'cuerpo a cuerpo'],
    ['veloz', 'inteligencia', 'a distancia']];

const actualRes = objGroup(valor, 1);
console.log(actualRes);

```
### result :
```
{
    fuerza: [['hacha', 'cuerpo a cuerpo'], ['colmillo', 'cuerpo a cuerpo']],
    agilidad: [['francotirador', 'a distancia'], ['asesino de fantasmas', 'cuerpo a cuerpo']],
    inteligencia: [['doncella de cristal', 'a distancia'], ['veloz', 'a distancia']]
}
```
