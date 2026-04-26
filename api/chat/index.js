const https = require('https');

const AZURE_OPENAI_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;
const AZURE_OPENAI_KEY = process.env.AZURE_OPENAI_KEY;
const DEPLOYMENT = 'gpt-4o-mini';
const API_VERSION = '2024-06-01';

module.exports = async function (context, req) {
  if (!req.body || !req.body.prompt) {
    context.res = { status: 400, body: { error: 'Missing prompt' } };
    return;
  }

  const { prompt, task } = req.body;

  const systemMessage = task
    ? `You are a helpful AI teaching assistant for an AI course. The student is working on this exercise: "${task}". Help them learn by guiding, not just giving answers. Keep responses concise (under 300 words).`
    : 'You are a helpful AI teaching assistant. Keep responses concise and educational (under 300 words).';

  const payload = JSON.stringify({
    messages: [
      { role: 'system', content: systemMessage },
      { role: 'user', content: prompt }
    ],
    max_tokens: 500,
    temperature: 0.7
  });

  try {
    const result = await callAzureOpenAI(payload);
    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: { response: result }
    };
  } catch (err) {
    context.log.error('OpenAI API error:', err.message);
    context.res = {
      status: 500,
      body: { error: 'AI service temporarily unavailable. Please try again.' }
    };
  }
};

function callAzureOpenAI(payload) {
  return new Promise((resolve, reject) => {
    const url = new URL(
      `/openai/deployments/${DEPLOYMENT}/chat/completions?api-version=${API_VERSION}`,
      AZURE_OPENAI_ENDPOINT
    );

    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': AZURE_OPENAI_KEY,
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`API returned ${res.statusCode}: ${data}`));
          return;
        }
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.choices[0].message.content);
        } catch (e) {
          reject(new Error('Failed to parse API response'));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Request timed out'));
    });
    req.write(payload);
    req.end();
  });
}
