import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projectsData } from "@/data/projects";

export default defineTool({
  name: "list_projects",
  title: "List case projects",
  description:
    "List the portfolio case projects (id, title, description, tags, featured flag). Optionally filter by tag or free-text query.",
  inputSchema: {
    tag: z.string().optional().describe("Only return projects containing this tag (case-insensitive)."),
    query: z.string().optional().describe("Free-text match against title and description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ tag, query }) => {
    const t = tag?.toLowerCase().trim();
    const q = query?.toLowerCase().trim();
    const items = projectsData.filter((p) => {
      const tagOk = !t || p.tags.some((x) => x.toLowerCase().includes(t));
      const qOk = !q || `${p.title} ${p.description}`.toLowerCase().includes(q);
      return tagOk && qOk;
    });
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, projects: items },
    };
  },
});
