import { defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import getExperienceTool from "./tools/get-experience";
import getProfileTool from "./tools/get-profile";

export default defineMcp({
  name: "hv-portfolio",
  title: "HV Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for Henrik Vårhäll's UX/UI design portfolio. Use `get_profile` for background and expertise, `get_experience` for the career timeline, and `list_projects` / `get_project` for case work.",
  tools: [listProjectsTool, getProjectTool, getExperienceTool, getProfileTool],
});
