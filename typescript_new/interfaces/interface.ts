interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let persona: Persona = {
    nombre: "Juan",
    edad: 25,
    esDesarrollador: true
}

console.log("Persona", persona);

let personas: Persona[] = [
    {
      nombre: "Juan",
      edad: 30,
      esDesarrollador: true
    },
    {
      nombre: "María",
      edad: 25,
      esDesarrollador: false
    }
  ];
  
  console.log("Personas:", personas);

  interface Sumar {
    (a: number, b: number): number;
  }
  
  let sumar: Sumar = (a: number, b: number): number => {
      return a + b;
  };
  
  console.log("Resultado de sumar:", sumar(3, 5));