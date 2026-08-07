"use strict";
/*
El mapped type de PersonaSoloLectura es:
PersonaSoloLectura =
{
    readonly nombre: string;
    readonly edad: number;
}
*/
let persona = {
    nombre: "Amin",
    edad: 39
};
console.log(persona.nombre);
let botonPequeño = "boton-pequeño";
let botonMediano = "boton-mediano";
let botonGrande = "boton-grande";
function esNumero(valor) {
    return (typeof valor === 'number');
}
const resultado1 = esNumero(42);
const resultado2 = esNumero("Hola");
console.log(resultado1);
console.log(resultado2);
