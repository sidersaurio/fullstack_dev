console.log("Hola mundo!");

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    if (i === 5) {
        console.log("Forzamos error");
        throw new Error("Error forzado");
    }
}, 1000);

console.log("Adios mundo!");

// El código anterior muestra cómo el monohilo de JavaScript 
// maneja las tareas asíncronas. A pesar de que el `setInterval` 
// se ejecuta cada segundo, el hilo principal no se bloquea y 
// puede continuar ejecutando otras tareas, como imprimir "Adios 
// mundo!" inmediatamente después de iniciar el intervalo. 
// Sin embargo, cuando se alcanza el valor de `i` igual a 5, 
// se lanza un error que detiene la ejecución del programa.