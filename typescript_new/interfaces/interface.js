"use strict";
let persona = {
    nombre: "Juan",
    edad: 25,
    esDesarrollador: true
};
console.log("Persona", persona);
let personas = [
    {
        nombre: "Juan",
        edad: 30,
        esDesarrollador: true
    },
    {
        nombre: "María",
        edad: 25,
        esDesarrollador: false
    }
];
console.log("Personas:", personas);
let sumar = (a, b) => {
    return a + b;
};
console.log("Resultado de sumar:", sumar(3, 5));
