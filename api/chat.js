export default async function handler(req, res) {
  // Only allow POST requests (or whatever your API requires)
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch(process.env.OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any private API keys here so they aren't in the frontend!
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}