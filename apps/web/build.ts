import tailwind from "bun-plugin-tailwind";
import { copyFile, readdir, rm } from "node:fs/promises";
import path from "node:path";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

const entrypoints = [...new Bun.Glob("src/**/*.html").scanSync()];

const result = await Bun.build({
  entrypoints,
  outdir,
  plugins: [tailwind],
  minify: true,
  target: "browser",
  sourcemap: "linked",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}

const staticDir = path.join(process.cwd(), "static");
const rootStatic = (await readdir(staticDir, { withFileTypes: true }))
  .filter(d => d.isFile())
  .map(d => d.name);
for (const name of rootStatic) {
  await copyFile(path.join(staticDir, name), path.join(outdir, name));
}
