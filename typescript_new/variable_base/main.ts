// Hola mundo!
console.log("Hola mundo!")

// Tipos de variables

// 1. Variable de tipo string (cadena)
let nombre: string = "Antonio";

// 2. Variable de tipo number (número)
let edad: number = 39;

// 3. Variable de tipo boolean (booleano)
let desarrollador: boolean = true;

// 4. Variable que puede ser undefined o string
let mes: undefined | string;

console.log(`Hola ${nombre}`);

console.log(mes); // Resultado: undefined

mes = "enero";

console.log("mes actualizado:", mes); // Resultado: enero