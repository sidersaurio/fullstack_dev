"use strict";
let variableAny;
//variableAny = "Hola";
variableAny = 42;
//variableAny = true;
console.log("Valor de variable any: " + variableAny);
let variableDesconocida;
variableDesconocida = "Hola";
//variableDesconocida = 42;
//variableDesconocida = true;
if (typeof variableDesconocida === "string") {
    console.log("Variable unknown is a string: ", variableDesconocida);
}
function throwError(message) {
    throw new Error(message);
}
throwError("Este es un error");
function logMessage(message) {
    console.log("Log message: ", message);
}
logMessage("Este es un mensaje de log");
