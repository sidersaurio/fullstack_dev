import { Persona } from "./clase.js";
export class Empleado extends Persona {
    puesto;
    constructor(nombre, edad, esDesarrollador, puesto) {
        super(nombre, edad, esDesarrollador);
        this.puesto = puesto;
    }
    saludar() {
        return `${super.saludar()}, trabajo como ${this.puesto}.`;
    }
    obtenerInfo() {
        return `Tengo ${this.obtenerEdad()} años y trabajo como ${this.puesto}.`;
    }
}
