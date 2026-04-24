import process from "process";

// api/chat.ts
export const config = {
  runtime: 'edge', // Using Edge for lower latency
};

export default async function handler(req: Request) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // 2. Access variables from Vercel Environment Variables
  const OLLAMA_URL = process.env.VITE_OLLAMA_URL;
  const API_KEY = process.env.VITE_OLLAMA_API_KEY;

  if (!OLLAMA_URL) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), { status: 500 });
  }

  try {
    const body = await req.json();

    // 3. Forward the request to Ollama Cloud
    const response = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to reach AI server' }), { status: 500 });
  }
}