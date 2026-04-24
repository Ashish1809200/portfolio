export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: Request) {
  const OLLAMA_URL = process.env.OLLAMA_URL;
  const API_KEY = process.env.OLLAMA_API_KEY;

  if (!OLLAMA_URL) {
    return new Response(JSON.stringify({ error: 'Config missing' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await req.json();

    const response = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(API_KEY && { Authorization: `Bearer ${API_KEY}` }),
      },
      body: JSON.stringify(body),
    });

    const data = await response.text(); // safer than .json() for streaming APIs

    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // optional safety
      },
    });

  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'Proxy Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
