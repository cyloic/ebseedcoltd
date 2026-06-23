// Vercel Node.js serverless function — bridges Web Fetch API ↔ Node.js http
import server from "../dist/server/server.js";

export default async function handler(req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host;
  const url = `${protocol}://${host}${req.url}`;

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks);

  const webRequest = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : body,
  });

  const webResponse = await server.fetch(webRequest, {}, {});

  res.status(webResponse.status);
  for (const [key, value] of webResponse.headers) {
    res.setHeader(key, value);
  }

  res.end(Buffer.from(await webResponse.arrayBuffer()));
}
