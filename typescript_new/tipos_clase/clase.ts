// Clase (debe llevar export para ser exportable o accesible desde otros archivos)
export class Persona {
    public nombre: string; // Propiedad pública
    protected edad: number; // Propiedad protegida, sólo accesible desde la propia clase y sus subclases
    private esDesarrollador: boolean; // Propiedad privada, sólo accesible desde la propia clase

    // Constructor (para llamar en otro archivo)
    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    
    // Método
    public saludar(): string { // Propiedad pública
        this.esDev();
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    protected obtenerEdad(): number { // Propiedad protegida
        return this.edad;
    }

    private esDev(): boolean { // Propiedad privada
        return this.esDesarrollador;
    }
}