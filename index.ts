import figlet from "figlet";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch() {
    const body = figlet.textSync('Bun on Zeabur!');
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

