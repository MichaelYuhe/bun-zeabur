
const server = Bun.serve({
  port: process.env.PORT,
  fetch() {
    return new Response(`Bun on Zeabur`);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

