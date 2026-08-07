// Implementación del decorador (siempre va primero)
function PersonaDec(target: Function) {
    console.log(target);
    
    // Extendemos la funcionalidad añadiendo un nuevo método
    target.prototype.despedir = function(despedida: string) {
      return `${despedida}, ${this.nombre}`;
    }
}
  
  // Aplicación del decorador a la clase
  @PersonaDec
  class Persona2 {
    nombre: string;
    edad: number;
    
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
    
    saludar(saludo: string): string {
      return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }

    // Declaramos el método que será añadido por el decorador
    despedir!: (despedida: string) => string;
  }

  let usuario = new Persona2("Juan", 30);
  console.log(usuario.saludar("Hola"));
  console.log(usuario.despedir("Adiós"));