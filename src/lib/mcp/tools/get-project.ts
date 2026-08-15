import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projectsData } from "@/data/projects";

export default defineTool({
  name: "get_project",
  title: "Get case project",
  description: "Get the full details of a single portfolio case project by its numeric id.",
  inputSchema: { id: z.number().int().describe("Project id, as returned by list_projects.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const project = projectsData.find((p) => p.id === id);
    if (!project) throw new ToolError(`No project found with id ${id}.`);
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});
