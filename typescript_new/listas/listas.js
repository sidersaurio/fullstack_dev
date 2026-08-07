"use strict";
let nombres = ["Amin", "Marce", "Miranda"];
console.log("Nombres: ", nombres);
let edades = [39, 25, 30];
console.log("Edades: ", edades);
let mixto = ["Amin", 39, true];
console.log("Mixto: ", mixto);
let personas = [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true },
];
console.log("Personas: ", personas);
personas.push({ nombre: "Pedro", edad: 35, esDesarrollador: false });
console.log("Personas: ", personas);
// Tupla
let persona;
persona = ["Amin", 39, true];
console.log("Persona", persona);
let personasTupla = [];
personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Juan", 25, false]);
personasTupla.push(["Maria", 30, true]);
personasTupla.forEach(persona => {
    console.log("Persona: ", persona);
    let nombre = persona[0];
    let edad = persona[1];
    let esDesarrollador = persona[2];
    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Es Desarrollador: ", esDesarrollador);
});
// Enumeradores
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
let dia = DiaSemana.Lunes;
console.log("Día: ", DiaSemana[dia]);
