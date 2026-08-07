let saludo = 'Hola';
console.log(saludo);

let nombre = process.env.NOMBRE;
console.log('Hola ' + nombre); // NOMBRE=Antonio node conceptos/entorno.js

let nombre2 = process.env.NOMBRE2 || 'Sin nombre';
console.log('Hola ' + nombre2); // Si no se envía nada tomará el valor por defecto

// Se pueden enviar varias: NOMBRE=Antonio NOMBRE2=Ramon node...