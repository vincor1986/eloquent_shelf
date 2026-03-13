import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN as string,
  apiVersion: "2025-10-27",
});

export default client;
