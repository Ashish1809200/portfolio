// api/ollama.ts
export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  // Use globalThis to bypass the 'process' module check
  const env = (globalThis as any).process.env;
  
  const OLLAMA_URL = env.VITE_OLLAMA_URL;
  const API_KEY = env.VITE_OLLAMA_API_KEY;

  if (!OLLAMA_URL) {
    return new Response(JSON.stringify({ error: 'Config missing' }), { status: 500 });
  }

  try {
    const incomingBody = await req.json();

    const response = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(incomingBody),
    });

    return new Response(response.body, {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Edge Proxy Error' }), { status: 500 });
  }
}