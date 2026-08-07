// Clase (debe llevar export para ser exportable o accesible desde otros archivos)
export class Persona {
    nombre;
    edad;
    esDesarrollador;
    // Constructor (para llamar en otro archivo)
    constructor(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    // Método
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
// A manera de ejemplo, sin embargo las clases son agnósticas y no deben desplegarse donde se definen!
let persona = new Persona("Juan", 30, true);
console.log(persona.saludar());
