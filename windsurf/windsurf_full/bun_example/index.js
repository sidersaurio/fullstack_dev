const server = Bun.serve({
    port: 3000,
    fetch(req){
        return new Response("Hola Toño desde Bun.js 🚀");
    },
});

console.log(`Servidor corriendo en http://localhost:${server.port}`);