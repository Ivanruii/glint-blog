import { createClient, ClientConfig } from "next-sanity";
import { sanityConfig } from "./config";

// Definimos el tipo de la configuración de cliente
interface MyClientConfig extends ClientConfig {
  token?: string;
}

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  // Fallback to using the WRITE token until https://www.sanity.io/docs/vercel-integration starts shipping a READ token.
  // As this client only exists on the server and the token is never shared with the browser, we don't risk escalating permissions to untrustworthy users
  token:
    process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
} as MyClientConfig); // Aseguramos que previewClient sea de tipo MyClientConfig

// Definimos el tipo de la función getClient
type GetClientFunction = (preview: boolean) => typeof sanityClient | typeof previewClient;

export const getClient: GetClientFunction = (preview) => (preview ? previewClient : sanityClient);

export function overlayDrafts(docs: any[]) {
  const documents = docs || [];
  const overlayed = documents.reduce((map, doc) => {
    if (!doc._id) {
      throw new Error("Ensure that `_id` is included in query projection");
    }

    const isDraft = doc._id.startsWith("drafts.");
    const id = isDraft ? doc._id.slice(7) : doc._id;
    return isDraft || !map.has(id) ? map.set(id, doc) : map;
  }, new Map<string, any>());

  return Array.from(overlayed.values());
}
