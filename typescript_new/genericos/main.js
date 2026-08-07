"use strict";
function identity(arg) {
    return arg;
}
let output1 = identity("Hola");
console.log("Output 1: " + output1);
let output2 = identity(42);
console.log("Output 2: " + output2);
class Caja {
    contenido;
    constructor(contenido) {
        this.contenido = contenido;
    }
    obtenerContenido() {
        return this.contenido;
    }
}
let cajaDeString = new Caja("Libros");
console.log("Contenido de la caja de string:", cajaDeString.obtenerContenido());
