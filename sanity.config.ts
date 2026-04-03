import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "positorial",
  title: "Positorial CMS",

  // You'll replace this with your actual project ID from sanity.io
  projectId: "nxltv0q3",
  dataset: "production",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
