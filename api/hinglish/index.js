const https = require('https');
const { tableRequest } = require('../shared/tableStorage');

const AZURE_OPENAI_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;
const AZURE_OPENAI_KEY = process.env.AZURE_OPENAI_KEY;
const DEPLOYMENT = 'gpt-4o-mini';
const API_VERSION = '2024-06-01';

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token'
};

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') {
    context.res = { status: 204, headers: HEADERS };
    return;
  }

  const { lessonId, slideIndex, text } = req.body || {};
  if (!lessonId || slideIndex === undefined || !text) {
    context.res = { status: 400, headers: HEADERS, body: { error: 'lessonId, slideIndex, and text are required.' } };
    return;
  }

  const cacheKey = `${lessonId}-${slideIndex}`;

  try {
    // Check cache first
    const cached = await tableRequest('GET', `/hinglish(PartitionKey='slide',RowKey='${encodeURIComponent(cacheKey)}')`);
    if (cached.status === 200 && cached.body && cached.body.translation) {
      context.res = { status: 200, headers: HEADERS, body: { translation: cached.body.translation, cached: true } };
      return;
    }

    // Translate via Azure OpenAI
    const translation = await callOpenAI(text);

    // Store in cache
    await tableRequest('POST', '/hinglish', {
      PartitionKey: 'slide',
      RowKey: cacheKey,
      translation,
      originalText: text.substring(0, 500) // truncate for storage
    });

    context.res = { status: 200, headers: HEADERS, body: { translation, cached: false } };
  } catch (err) {
    context.log.error('Hinglish translation error:', err.message);
    context.res = { status: 500, headers: HEADERS, body: { error: 'Translation failed.' } };
  }
};

function callOpenAI(text) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      messages: [
        {
          role: 'system',
          content: `You convert educational text to Hinglish (Hindi in Roman script mixed with English). Rules:
- Keep ALL technical keywords in English (AI, prompt, machine learning, API, chatbot, LLM, data, code, model, training, neural network, algorithm, etc.)
- Use simple Hindi (Roman script) for everything else so a 4th grader can follow
- Keep it conversational and fun, like a cool teacher explaining to kids
- Do NOT add any extra content, just convert what's given
- Output ONLY the converted text, nothing else`
        },
        { role: 'user', content: text }
      ],
      max_tokens: 800,
      temperature: 0.7
    });

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
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`OpenAI API returned ${res.statusCode}: ${data}`));
          return;
        }
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.choices[0].message.content);
        } catch (e) {
          reject(new Error('Failed to parse OpenAI response'));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Request timed out')); });
    req.write(payload);
    req.end();
  });
}
