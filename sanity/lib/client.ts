import { createClient } from "next-sanity";

export const client = createClient({
  // You'll replace this with your actual project ID from sanity.io
  projectId: "nxltv0q3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
