import { serve } from "bun";
import path from "node:path";
import index from "./index.html";

const staticDir = path.join(import.meta.dir, "../static");

const png = (name: string) => async () =>
  new Response(Bun.file(path.join(staticDir, name)), {
    headers: { "Content-Type": "image/png" },
  });

const svg = (name: string) => async () =>
  new Response(Bun.file(path.join(staticDir, name)), {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });

const server = serve({
  routes: {
    "/Kailin_Xing_Resume_SoftwareIntern.pdf": async () =>
      new Response(Bun.file(path.join(staticDir, "Kailin_Xing_Resume_SoftwareIntern.pdf")), {
        headers: { "Content-Type": "application/pdf" },
      }),

    "/kailin-avatar-notion.png": png("kailin-avatar-notion.png"),
    "/kailin-avatar-notion-transparent.png": png("kailin-avatar-notion-transparent.png"),
    "/kailin-avatar-favicon.svg": svg("kailin-avatar-favicon.svg"),

    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
