"use strict";
let nombre = "Amin Espinoza de los Monteros";
console.log(nombre.length);
function obtenerLongitud(obj) {
    let longitud = obj.length;
    let tipo = typeof obj;
    console.log(`El tipo de dato es: ${tipo} y la longitud es: ${longitud}`);
    return obj.length;
}
console.log(obtenerLongitud("Hola Mundo"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
