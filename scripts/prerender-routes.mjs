// GitHub Pages has no single-page-app fallback, so after `vite build` this copies dist/index.html
// to an .html file for every route (Pages serves /case/my-case from case/my-case.html with status 200).
// Anything else falls through to 404.html, which is also the app and renders the NotFound page.

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { parse } from "yaml";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const html = await readFile(path.join(dist, "index.html"), "utf8");
const casesDir = path.join(root, "content", "cases");

// One page per published case in content/cases/ (same rules as src/data/projects.ts)
const projects = [];
const caseFiles = await readdir(casesDir).catch(() => []);
for (const file of caseFiles.filter((name) => name.endsWith(".md"))) {
  const source = await readFile(path.join(casesDir, file), "utf8");
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = (frontmatter && parse(frontmatter[1])) || {};
  if (data.title && !data.draft) projects.push({ slug: file.replace(/\.md$/, ""), title: String(data.title) });
}

const escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const withTitle = (title) => html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

async function write(route, content) {
  const target = path.join(dist, `${route}.html`);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content);
}

for (const { slug, title } of projects) {
  await write(`case/${slug}`, withTitle(`${title} · Henrik Vårhäll`));
}
await write("404", html);

console.log(`Wrote ${projects.length} case pages and 404.html`);
