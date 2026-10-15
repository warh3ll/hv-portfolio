// GitHub Pages has no single-page-app fallback, so after `vite build` this copies dist/index.html
// to an .html file for every route (Pages serves /case/1 from case/1.html with status 200).
// Anything else falls through to 404.html, which is also the app and renders the NotFound page.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const html = await readFile(path.join(dist, "index.html"), "utf8");
const projectsSource = await readFile(path.join(root, "src", "data", "projects.ts"), "utf8");

// Each project in src/data/projects.ts starts with `id: <n>,` followed by `title: "<title>"`
const projects = [...projectsSource.matchAll(/id:\s*(\d+),\s*title:\s*"([^"]*)"/g)].map(([, id, title]) => ({ id, title }));

const escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const withTitle = (title) => html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

async function write(route, content) {
  const target = path.join(dist, `${route}.html`);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content);
}

for (const { id, title } of projects) {
  await write(`case/${id}`, withTitle(`${title} · Henrik Vårhäll`));
}
await write("404", html);

console.log(`Wrote ${projects.length} case pages and 404.html`);
