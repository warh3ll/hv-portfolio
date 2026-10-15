// Turns each case's Markdown file (content/cases/*.md, written in Pages CMS) into a module with its
// frontmatter and the story as HTML, so the YAML and Markdown parsers stay out of the browser bundle.
import { marked } from "marked";
import { parse } from "yaml";
import type { Plugin } from "vite";

function parseCaseFile(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const data = (match && parse(match[1])) || {};
  return { data, body: match ? match[2] : source };
}

export default function casesPlugin(): Plugin {
  let isBuild = false;
  return {
    name: "cases",
    configResolved(config) {
      isBuild = config.command === "build";
    },
    transform(source, id) {
      if (!/[\\/]content[\\/]cases[\\/][^\\/]+\.md$/.test(id)) return;
      const { data, body } = parseCaseFile(source);
      // Drafts show up in `npm run dev` but their text never reaches the published site
      const html = data.draft && isBuild ? "" : (marked.parse(body, { async: false }) as string);
      return { code: `export default ${JSON.stringify({ data, html })};`, map: null };
    },
  };
}
