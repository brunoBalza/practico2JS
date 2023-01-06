Leyendo HTML desde JavaScript
La forma profesional de leer Código HTML desde JavaScript es crear variables que representen a los selectores de cada uno de los elementos presentes en html a los cuales de desea acceder. una forma de acceder al código html desde JS es por medio de la función document.querySelector(), en el cual dentro de un string le indicamos cual es el selector al cual queremos acceder desde JS.

Tambien se puede utilizar el getElementBy... pero parace ser mas efectivo el otro

Un Ejemplo de esto seria lo siguiente:


en html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulación del DOM básica - Curso Práctico de JavaScript</title>
</head>
<body>
    <h1>Manipulación del DOM Básica</h1>
    <p>Esto es un párrafo</p>
    <p class="parrafito">Esto es un párrafo con clase</p>
    <p id="pid">Esto es un párrafo con ID</p>

    <input type="text" placeholder="Escribe algo aquí" value="hola mundo">
    
</body>
<script src="./main.js"></script>
</html>
```


```js 

const h1 = document.querySelector('h1');

para ver el resultado en consola debemos escribir un console.log de la siguiente manera:

console.log(h1);

Con esta función document.querySelector() podemos acceder al html desde su etiqueta, clase o id.

const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({h1, p, parrafito, pid, input});

``` 