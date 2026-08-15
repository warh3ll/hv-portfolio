import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { timelineData } from "@/data/timeline";

export default defineTool({
  name: "get_experience",
  title: "Get work experience",
  description:
    "Get Henrik's career timeline: roles, companies, years, descriptions and tags. Optionally filter by entry type.",
  inputSchema: {
    type: z
      .enum(["job", "freelance", "education", "personal project"])
      .optional()
      .describe("Only return timeline entries of this type."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ type }) => {
    const items = type ? timelineData.filter((t) => t.type === type) : timelineData;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, timeline: items },
    };
  },
});
