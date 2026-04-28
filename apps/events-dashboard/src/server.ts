import { serve } from "bun";
import path from "node:path";

const distDir = path.resolve(import.meta.dir, "../dist");

const server = serve({
  port: 3100,
  routes: {
    "/*": async (req) => {
      const url = new URL(req.url);
      const filePath = path.join(distDir, path.normalize(url.pathname));
      if (!filePath.startsWith(distDir + path.sep) && filePath !== distDir) {
        return new Response(Bun.file(path.join(distDir, "index.html")));
      }
      const file = Bun.file(filePath);
      if (await file.exists()) return new Response(file);
      return new Response(Bun.file(path.join(distDir, "index.html")));
    },
  },
});

console.log(`Events dashboard running at ${server.url}`);
