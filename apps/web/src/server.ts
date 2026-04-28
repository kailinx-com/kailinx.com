import { serve } from "bun";
import path from "node:path";

const distDir = path.resolve(import.meta.dir, "../dist");

async function serveStatic(pathname: string): Promise<Response | null> {
  const filePath = path.join(distDir, path.normalize(pathname));
  if (!filePath.startsWith(distDir + path.sep)) return null;
  const file = Bun.file(filePath);
  if (!await file.exists()) return null;
  return new Response(file, {
    headers: {
      "Content-Type": file.type,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

const indexHtml = () =>
  new Response(Bun.file(path.join(distDir, "index.html")), {
    headers: {
      "Content-Type": "text/html;charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });

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
      const res = await serveStatic(url.pathname);
      return res ?? indexHtml();
    },
  },
});

console.log(`Server running at ${server.url}`);
