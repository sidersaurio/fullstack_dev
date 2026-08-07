// Clase (debe llevar export para ser exportable o accesible desde otros archivos)
export class Persona {
    nombre; // Propiedad pública
    edad; // Propiedad protegida, sólo accesible desde la propia clase y sus subclases
    esDesarrollador; // Propiedad privada, sólo accesible desde la propia clase
    // Constructor (para llamar en otro archivo)
    constructor(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    // Método
    saludar() {
        this.esDev();
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
    obtenerEdad() {
        return this.edad;
    }
    esDev() {
        return this.esDesarrollador;
    }
}
