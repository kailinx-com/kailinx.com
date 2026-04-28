import { serve } from "bun";
import path from "node:path";

const distDir = path.resolve(import.meta.dir, "../dist");

function safeFilePath(pathname: string): string | null {
  const filePath = path.join(distDir, path.normalize(pathname));
  if (!filePath.startsWith(distDir + path.sep) && filePath !== distDir) return null;
  return filePath;
}

const server = serve({
  port: 3000,
  routes: {
    "/api/hello": {
      async GET() {
        return Response.json({ message: "Hello, world!", method: "GET" });
      },
      async PUT() {
        return Response.json({ message: "Hello, world!", method: "PUT" });
      },
    },
    "/api/hello/:name": (req) =>
      Response.json({ message: `Hello, ${req.params.name}!` }),
    "/*": async (req) => {
      const url = new URL(req.url);
      const filePath = safeFilePath(url.pathname);
      if (filePath) {
        const file = Bun.file(filePath);
        if (await file.exists()) return new Response(file);
      }
      return new Response(Bun.file(path.join(distDir, "index.html")));
    },
  },
});

console.log(`Server running at ${server.url}`);
