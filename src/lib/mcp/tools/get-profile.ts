import { defineTool } from "@lovable.dev/mcp-js";
import { aboutContent } from "@/data/about";
import { heroContent } from "@/data/hero";
import { expertiseContent } from "@/data/expertise";

export default defineTool({
  name: "get_profile",
  title: "Get profile and expertise",
  description:
    "Get Henrik Vårhäll's public profile: headline intro, about-me story and areas of design expertise.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      intro: {
        role: heroContent.title.highlight,
        headline: `${heroContent.title.line1} ${heroContent.title.line2}`,
        description: heroContent.description,
      },
      about: aboutContent,
      expertise: expertiseContent,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: { profile },
    };
  },
});
