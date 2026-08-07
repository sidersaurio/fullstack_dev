import { MOCK_POSTS } from "@/lib/blogData";

const server = Bun.serve({
    port: 3001,
    fetch(req) {
        const url = new URL(req.url);

        if (url.pathname === "/posts" && req.method === "GET") {
            return Response.json(MOCK_POSTS);
        }

        return new Response("Not Found", { status: 404 });
    },
});

console.log(`Bun server listening on http://localhost:${server.port}`);
