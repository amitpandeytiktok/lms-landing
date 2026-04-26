const COURSE_DATA = {
  weeks: [
    // ──────────────────────────────────────────────
    // WEEK 1 – Prompt Engineering – Zero to Hero
    // ──────────────────────────────────────────────
    {
      id: 'week-1',
      title: 'Week 1',
      name: 'Prompt Engineering – Zero to Hero',
      badge: 'live',
      gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1560 30%, #e8652a 65%, #f5b731 100%)',
      emoji: '🌴',
      lessonsCount: 12,
      tasksCount: 24,
      modules: [
        {
          id: 'w1-m1',
          title: 'Module 1: Introduction',
          lessons: [
            {
              id: 'w1-m1-l1',
              title: 'Lesson 1: What is AI?',
              slides: [
                {
                  title: 'Welcome to the AI Revolution',
                  content: '<p>Artificial Intelligence (AI) is the science of making machines that can <strong>think, learn, and make decisions</strong> similarly to humans. But don\'t worry — you don\'t need a computer science degree to use it!</p><p>In this course, you\'ll learn how to <em>communicate</em> with AI tools to supercharge your productivity, creativity, and problem-solving skills.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center"><span style="background:#6c3ce0;color:#fff;padding:12px 20px;border-radius:8px;font-weight:bold">🧠 Human Intelligence</span><span style="font-size:24px">+</span><span style="background:#e8652a;color:#fff;padding:12px 20px;border-radius:8px;font-weight:bold">🤖 Machine Intelligence</span><span style="font-size:24px">=</span><span style="background:#f5b731;color:#1a0533;padding:12px 20px;border-radius:8px;font-weight:bold">🚀 Superpowers</span></div>'
                },
                {
                  title: 'AI is Everywhere',
                  content: '<p>You already use AI every day without realizing it:</p><ul><li><strong>Autocomplete</strong> in your email and texts</li><li><strong>Recommendations</strong> on Netflix, Spotify, and YouTube</li><li><strong>Navigation</strong> apps that predict traffic</li><li><strong>Voice assistants</strong> like Siri and Alexa</li></ul><p>The difference now? You can <em>direct</em> AI to do specific tasks for you.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div style="background:#f5f3ff;padding:12px;border-radius:8px;text-align:center">📧 Email Autocomplete</div><div style="background:#fff5f5;padding:12px;border-radius:8px;text-align:center">🎬 Netflix Recommendations</div><div style="background:#f5fff5;padding:12px;border-radius:8px;text-align:center">🗺️ Google Maps AI</div><div style="background:#fffff5;padding:12px;border-radius:8px;text-align:center">🗣️ Voice Assistants</div></div>'
                },
                {
                  title: 'Types of AI You\'ll Encounter',
                  content: '<p>There are different categories of AI, but for this course we\'ll focus on <strong>Generative AI</strong> — AI that creates new content:</p><ul><li><strong>Large Language Models (LLMs)</strong> — ChatGPT, Claude, Gemini — they understand and generate text</li><li><strong>Image generators</strong> — DALL-E, Midjourney — they create images from descriptions</li><li><strong>Code assistants</strong> — GitHub Copilot — they help write code</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:8px"><div style="background:linear-gradient(90deg,#6c3ce0,#8b5cf6);color:#fff;padding:10px 16px;border-radius:6px">💬 Text AI — ChatGPT, Claude, Gemini</div><div style="background:linear-gradient(90deg,#e8652a,#f59e0b);color:#fff;padding:10px 16px;border-radius:6px">🎨 Image AI — DALL-E, Midjourney</div><div style="background:linear-gradient(90deg,#059669,#34d399);color:#fff;padding:10px 16px;border-radius:6px">💻 Code AI — GitHub Copilot, Cursor</div></div>'
                },
                {
                  title: 'What AI Can and Cannot Do',
                  content: '<p>Setting realistic expectations is key to getting the most out of AI:</p><ul><li><strong>AI can:</strong> Summarize text, generate ideas, write drafts, answer questions, translate languages, analyze data patterns</li><li><strong>AI cannot:</strong> Guarantee 100% accuracy, replace critical thinking, access real-time information (unless connected), understand context like a human</li></ul><p>Think of AI as a <em>brilliant but sometimes confused intern</em> — incredibly helpful, but always verify important output.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#dcfce7;border-left:4px solid #16a34a;padding:12px;border-radius:0 8px 8px 0"><strong style="color:#16a34a">✅ AI Can</strong><ul style="margin:8px 0 0;padding-left:16px;font-size:14px"><li>Generate ideas fast</li><li>Summarize anything</li><li>Draft content</li><li>Translate languages</li></ul></div><div style="background:#fef2f2;border-left:4px solid #dc2626;padding:12px;border-radius:0 8px 8px 0"><strong style="color:#dc2626">❌ AI Cannot</strong><ul style="margin:8px 0 0;padding-left:16px;font-size:14px"><li>Guarantee accuracy</li><li>Replace your judgment</li><li>Access live data*</li><li>Read your mind</li></ul></div></div>'
                },
                {
                  title: 'Your AI Journey Starts Here',
                  content: '<p>By the end of this course, you\'ll be able to:</p><ul><li>Write effective prompts that get great results</li><li>Use AI to boost your productivity 10x</li><li>Build prototypes and automate workflows</li><li>Understand AI agents and the future of work</li></ul><p><strong>No coding required.</strong> No technical background needed. Just curiosity and willingness to experiment!</p>'
                }
              ],
              objectives: [
                'Define artificial intelligence in simple terms',
                'Identify AI tools you already use daily',
                'Distinguish between different types of generative AI',
                'Set realistic expectations for what AI can and cannot do'
              ],
              notes: 'Artificial Intelligence is the science of building machines that can perform tasks that typically require human intelligence. The key types you\'ll work with are Large Language Models (LLMs) like ChatGPT and Claude, image generators like DALL-E, and code assistants like GitHub Copilot.\n\nThe most important mindset shift is understanding that AI is a tool — an incredibly powerful one, but still a tool. It works best when you give it clear direction. Think of it as a brilliant intern: fast, capable, but needs your guidance and verification.\n\nPractical tip: Start experimenting today! Open ChatGPT or Claude and ask it a simple question. Notice how the way you phrase your question affects the response. This observation skill is the foundation of prompt engineering.',
              resources: [
                { title: 'What is Artificial Intelligence? A Beginner\'s Guide', url: '#', type: 'article' },
                { title: 'How Large Language Models Work (Explained Simply)', url: '#', type: 'video' },
                { title: 'AI Tools Comparison Chart 2024', url: '#', type: 'guide' }
              ],
              exercise: {
                task: 'Open any AI chatbot (ChatGPT, Claude, or Gemini) and ask it the same question in 3 different ways. Compare the responses. Write down what you notice about how phrasing affects the answer.',
                starterPrompt: 'Try asking: "What is machine learning?" then "Explain machine learning like I\'m 10 years old" then "Give me a technical definition of machine learning with examples"',
                hint: 'Pay attention to the length, complexity, and tone of each response. The AI adapts to how you ask!'
              }
            },
            {
              id: 'w1-m1-l2',
              title: 'Lesson 2: AI Mindset',
              slides: [
                {
                  title: 'Thinking Like an AI Collaborator',
                  content: '<p>The biggest barrier to using AI effectively isn\'t technical — it\'s <strong>mindset</strong>. Most people either:</p><ul><li>Treat AI like a search engine (too simple)</li><li>Expect AI to read their mind (too ambitious)</li></ul><p>The sweet spot is treating AI as a <strong>collaborative partner</strong> — one that needs clear instructions but can execute brilliantly.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center"><div style="background:#fef2f2;padding:10px 16px;border-radius:8px;text-align:center"><div style="font-size:20px">🔍</div><div style="font-size:12px;color:#dc2626">Search Engine<br>Mentality</div></div><span style="font-size:20px">→</span><div style="background:#dcfce7;padding:10px 16px;border-radius:8px;text-align:center;border:2px solid #16a34a"><div style="font-size:20px">🤝</div><div style="font-size:12px;color:#16a34a;font-weight:bold">Collaborative<br>Partner</div></div><span style="font-size:20px">←</span><div style="background:#fef2f2;padding:10px 16px;border-radius:8px;text-align:center"><div style="font-size:20px">🧙</div><div style="font-size:12px;color:#dc2626">Mind Reader<br>Expectation</div></div></div>'
                },
                {
                  title: 'The Iteration Mindset',
                  content: '<p>Great results from AI rarely come from a single prompt. The best AI users follow an <strong>iterative process</strong>:</p><ul><li><strong>Start</strong> with a first attempt</li><li><strong>Review</strong> the output critically</li><li><strong>Refine</strong> your prompt based on what\'s missing or wrong</li><li><strong>Repeat</strong> until you\'re satisfied</li></ul><p>This is normal! Even experts iterate. The skill is knowing <em>how</em> to refine.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:center"><span style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:20px;font-size:13px">1. Prompt</span><span style="color:#6c3ce0">→</span><span style="background:#8b5cf6;color:#fff;padding:8px 14px;border-radius:20px;font-size:13px">2. Review</span><span style="color:#8b5cf6">→</span><span style="background:#a78bfa;color:#fff;padding:8px 14px;border-radius:20px;font-size:13px">3. Refine</span><span style="color:#a78bfa">→</span><span style="background:#c4b5fd;color:#1a0533;padding:8px 14px;border-radius:20px;font-size:13px">4. Repeat</span><span style="color:#c4b5fd">🔄</span></div>'
                },
                {
                  title: 'Curiosity Over Perfection',
                  content: '<p>The best way to learn AI is to <strong>experiment constantly</strong>. Here\'s your new mantra:</p><ul><li>There are no stupid prompts — only learning opportunities</li><li>Every "bad" response teaches you something about how AI thinks</li><li>The faster you experiment, the faster you improve</li></ul><p><em>"I wonder what happens if..."</em> is the most powerful phrase in your AI toolkit.</p>',
                  visual: '<div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-size:18px;font-style:italic;color:#6c3ce0">💡 "I wonder what happens if..."</p><p style="margin:8px 0 0;font-size:14px;color:#666">This single phrase will accelerate your AI learning faster than any tutorial.</p></div>'
                },
                {
                  title: 'AI Amplifies You',
                  content: '<p>AI doesn\'t replace your skills — it <strong>amplifies</strong> them. Consider this:</p><ul><li>A good writer + AI = an incredible content machine</li><li>A creative thinker + AI = endless innovation</li><li>A careful researcher + AI = thorough analysis in minutes</li></ul><p>Your unique knowledge, judgment, and creativity are what make AI truly powerful. <strong>You are the secret ingredient.</strong></p>'
                }
              ],
              objectives: [
                'Adopt a collaborative mindset when working with AI',
                'Understand the importance of iteration in prompting',
                'Embrace experimentation as the fastest path to mastery',
                'Recognize that AI amplifies your existing strengths'
              ],
              notes: 'The AI mindset is about treating AI as a collaborative partner rather than a magic oracle or a simple search engine. The most successful AI users share three traits: they iterate on their prompts, they experiment fearlessly, and they understand that AI amplifies their existing skills.\n\nRemember the iteration cycle: Prompt → Review → Refine → Repeat. This isn\'t a sign of failure — it\'s how the best results are produced. Even AI experts rarely get perfect output on their first try.\n\nPractical tip: Set aside 15 minutes each day to experiment with AI. Try asking it to do something you\'ve never tried before. Push the boundaries. The more you experiment, the better your intuition for prompting becomes.',
              resources: [
                { title: 'The AI-First Mindset: How to Think About AI', url: '#', type: 'article' },
                { title: 'Iteration in Practice: Before & After Prompts', url: '#', type: 'video' },
                { title: 'Daily AI Experimentation Log Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Take a task you did this week (writing an email, planning a trip, summarizing a meeting) and try to accomplish it with AI. Iterate at least 3 times on your prompt and document how each iteration improved the output.',
                starterPrompt: 'Help me write a professional email to my team about...',
                hint: 'After each AI response, ask yourself: What\'s missing? What\'s wrong? What could be better? Then add those specifics to your next prompt.'
              }
            },
            {
              id: 'w1-m1-l3',
              title: 'Lesson 3: Common Mistakes',
              slides: [
                {
                  title: 'The 5 Biggest AI Beginner Mistakes',
                  content: '<p>Almost everyone makes these mistakes when starting with AI. Knowing them upfront will save you hours of frustration:</p><ul><li><strong>Mistake 1:</strong> Being too vague</li><li><strong>Mistake 2:</strong> Not providing context</li><li><strong>Mistake 3:</strong> Accepting the first response</li><li><strong>Mistake 4:</strong> Ignoring AI limitations</li><li><strong>Mistake 5:</strong> Not verifying outputs</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#fef2f2;padding:8px 12px;border-radius:6px;display:flex;align-items:center;gap:8px"><span style="font-size:18px">❌</span><span style="font-size:13px">Vague prompts → vague answers</span></div><div style="background:#fef2f2;padding:8px 12px;border-radius:6px;display:flex;align-items:center;gap:8px"><span style="font-size:18px">❌</span><span style="font-size:13px">No context → generic responses</span></div><div style="background:#fef2f2;padding:8px 12px;border-radius:6px;display:flex;align-items:center;gap:8px"><span style="font-size:18px">❌</span><span style="font-size:13px">First response accepted → missed potential</span></div><div style="background:#fef2f2;padding:8px 12px;border-radius:6px;display:flex;align-items:center;gap:8px"><span style="font-size:18px">❌</span><span style="font-size:13px">Blind trust → errors and hallucinations</span></div></div>'
                },
                {
                  title: 'Mistake #1: Being Too Vague',
                  content: '<p>The most common mistake by far. Compare these:</p><ul><li><strong>Bad:</strong> <code>Tell me about marketing</code></li><li><strong>Good:</strong> <code>Give me 5 social media marketing strategies for a small bakery targeting local customers, with estimated costs and time investment for each</code></li></ul><p>The more specific your prompt, the more useful the response. Be detailed about <em>what</em> you want, <em>who</em> it\'s for, and <em>how</em> you want it formatted.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#fef2f2;border:2px solid #fca5a5;padding:12px;border-radius:8px"><div style="font-weight:bold;color:#dc2626;margin-bottom:4px">❌ Vague</div><code style="font-size:12px">"Tell me about marketing"</code><div style="margin-top:8px;font-size:12px;color:#666">→ 500-word generic essay</div></div><div style="background:#dcfce7;border:2px solid #86efac;padding:12px;border-radius:8px"><div style="font-weight:bold;color:#16a34a;margin-bottom:4px">✅ Specific</div><code style="font-size:12px">"5 social media strategies for a small bakery..."</code><div style="margin-top:8px;font-size:12px;color:#666">→ Actionable, tailored advice</div></div></div>'
                },
                {
                  title: 'Mistake #2: Not Providing Context',
                  content: '<p>AI doesn\'t know your situation unless you tell it. Always include:</p><ul><li><strong>Who you are:</strong> Your role, experience level, industry</li><li><strong>Who it\'s for:</strong> Your audience or recipient</li><li><strong>What you\'ve tried:</strong> Previous attempts or constraints</li><li><strong>What format:</strong> How you want the output structured</li></ul><p>Think of it like briefing a new colleague — the more context they have, the better they perform.</p>'
                },
                {
                  title: 'Mistake #3-5: Trust But Verify',
                  content: '<p><strong>Mistake #3: Accepting the first response.</strong> AI can almost always do better. Ask it to refine, expand, or approach differently.</p><p><strong>Mistake #4: Ignoring limitations.</strong> AI can "hallucinate" — confidently stating incorrect information. It doesn\'t know what it doesn\'t know.</p><p><strong>Mistake #5: Not verifying outputs.</strong> Always fact-check important information, especially statistics, dates, and technical claims.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">⚠️ Golden Rule of AI</p><p style="margin:8px 0 0;font-size:14px;color:#713f12">Trust the process, but <strong>always verify the output</strong>. AI is a first draft machine — your job is to be the editor-in-chief.</p></div>'
                }
              ],
              objectives: [
                'Identify the 5 most common AI beginner mistakes',
                'Write specific prompts instead of vague ones',
                'Understand why context improves AI responses',
                'Develop a habit of verifying AI outputs'
              ],
              notes: 'The five biggest mistakes beginners make with AI are: being too vague, not providing context, accepting the first response without iteration, ignoring AI limitations (like hallucinations), and not verifying outputs.\n\nThe fix for all of these is simple: be specific, provide context, iterate, and verify. Think of AI as a brilliant first-draft machine — it gives you 80% of the way there, and your job is to guide it to 100%.\n\nPractical tip: Before hitting send on any prompt, ask yourself: "Would a new colleague understand exactly what I want from this instruction?" If not, add more detail. The 30 seconds you spend making your prompt clearer will save you minutes of back-and-forth.',
              resources: [
                { title: '10 Prompting Anti-Patterns to Avoid', url: '#', type: 'article' },
                { title: 'AI Hallucinations: What They Are and How to Spot Them', url: '#', type: 'video' },
                { title: 'Prompt Quality Checklist', url: '#', type: 'guide' }
              ],
              exercise: {
                task: 'Take these 3 bad prompts and rewrite them to be specific, contextual, and actionable. Then test both versions in an AI chatbot and compare results.\n\n1. "Write something about dogs"\n2. "Help me with my resume"\n3. "Explain science"',
                starterPrompt: 'Original: "Write something about dogs"\nImproved: "Write a 200-word blog post about the top 3 benefits of adopting a senior dog, targeted at first-time dog owners, in a warm and encouraging tone"',
                hint: 'For each rewrite, add: WHO is the audience, WHAT specifically do you want, HOW should it be formatted, and WHY (the purpose).'
              }
            }
          ]
        },
        {
          id: 'w1-m2',
          title: 'Module 2: Prompt Basics',
          lessons: [
            {
              id: 'w1-m2-l1',
              title: 'Lesson 1: What is a Prompt?',
              slides: [
                {
                  title: 'Prompts: Your AI Communication Language',
                  content: '<p>A <strong>prompt</strong> is any text you send to an AI to get a response. It\'s your way of communicating what you need.</p><p>Prompts can be:</p><ul><li>A simple question: <code>What\'s the capital of France?</code></li><li>A complex instruction: <code>Write a 500-word analysis comparing...</code></li><li>A creative request: <code>Generate 10 startup ideas for...</code></li></ul><p><strong>Prompt engineering</strong> is the skill of writing prompts that consistently produce great results.</p>',
                  visual: '<div style="background:#f5f3ff;border:2px solid #6c3ce0;padding:16px;border-radius:12px;text-align:center"><p style="margin:0 0 8px;font-size:12px;color:#6c3ce0;font-weight:bold">THE PROMPT-RESPONSE LOOP</p><div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:8px 16px;border-radius:6px">📝 Your Prompt</span><span style="font-size:20px">→</span><span style="background:#e8652a;color:#fff;padding:8px 16px;border-radius:6px">🧠 AI Processing</span><span style="font-size:20px">→</span><span style="background:#f5b731;color:#1a0533;padding:8px 16px;border-radius:6px">💡 Response</span></div></div>'
                },
                {
                  title: 'Why Prompt Quality Matters',
                  content: '<p>The quality of your prompt directly determines the quality of AI output. Here\'s a simple formula:</p><p style="text-align:center;font-size:18px;margin:16px 0"><strong>Specific Prompt + Clear Context = Useful Response</strong></p><p>Studies show that well-crafted prompts can improve AI output quality by <strong>up to 10x</strong> compared to vague or generic prompts.</p><p>This is why prompt engineering is becoming one of the most valuable skills in the AI age.</p>'
                },
                {
                  title: 'Simple vs. Complex Prompts',
                  content: '<p>Prompts exist on a spectrum from simple to complex:</p><ul><li><strong>Simple:</strong> One-line questions or requests — great for quick answers</li><li><strong>Structured:</strong> Multi-part instructions with format specifications</li><li><strong>Complex:</strong> Detailed scenarios with roles, context, examples, and constraints</li></ul><p>Start simple and add complexity as needed. You don\'t always need a complex prompt!</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:8px"><div style="background:#dcfce7;padding:10px 14px;border-radius:6px"><strong style="font-size:12px">🟢 Simple:</strong> <code style="font-size:12px">"What is photosynthesis?"</code></div><div style="background:#fefce8;padding:10px 14px;border-radius:6px"><strong style="font-size:12px">🟡 Structured:</strong> <code style="font-size:12px">"Explain photosynthesis in 3 paragraphs for a 5th grader"</code></div><div style="background:#fef2f2;padding:10px 14px;border-radius:6px"><strong style="font-size:12px">🔴 Complex:</strong> <code style="font-size:12px">"You are a biology tutor. Create a lesson on photosynthesis with analogies, a quiz, and a hands-on activity..."</code></div></div>'
                },
                {
                  title: 'Your First Prompt Framework',
                  content: '<p>When in doubt, use this simple framework for any prompt:</p><ul><li><strong>Task:</strong> What do you want the AI to do?</li><li><strong>Topic:</strong> What is it about?</li><li><strong>Format:</strong> How should the response look?</li></ul><p>Example: <em>"Write [TASK] about [TOPIC] as a [FORMAT]"</em></p><p><code>Write a summary about renewable energy as a bullet-point list with pros and cons</code></p>',
                  visual: '<div style="background:linear-gradient(135deg,#f5f3ff,#ede9fe);padding:16px;border-radius:12px"><div style="display:flex;flex-direction:column;gap:8px"><div style="display:flex;align-items:center;gap:8px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">1</span><span><strong>Task</strong> — What to do</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#8b5cf6;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">2</span><span><strong>Topic</strong> — What about</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#a78bfa;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">3</span><span><strong>Format</strong> — How it looks</span></div></div></div>'
                }
              ],
              objectives: [
                'Define what a prompt is and why it matters',
                'Understand the spectrum from simple to complex prompts',
                'Apply the Task-Topic-Format framework to any prompt',
                'Recognize that prompt quality directly impacts output quality'
              ],
              notes: 'A prompt is simply the text you send to an AI. Prompt engineering is the skill of crafting these messages to consistently get the results you want. The quality of your prompt directly determines the quality of AI output.\n\nPrompts range from simple one-liners to complex multi-part instructions. Start simple and add complexity only as needed. The Task-Topic-Format framework is a great starting point: specify what you want done, what it\'s about, and how you want the output formatted.\n\nPractical tip: Keep a "prompt journal" where you save prompts that worked well. Over time, you\'ll build a personal library of proven templates that you can reuse and adapt.',
              resources: [
                { title: 'Prompt Engineering 101', url: '#', type: 'article' },
                { title: 'The Complete Guide to Writing Better Prompts', url: '#', type: 'guide' },
                { title: 'Prompt Templates Library', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Using the Task-Topic-Format framework, write 5 prompts for different real-world scenarios: 1) Planning a healthy meal, 2) Writing a LinkedIn post, 3) Studying for an exam, 4) Planning a vacation, 5) Creating a workout routine.',
                starterPrompt: 'Task: Create a meal plan\nTopic: Healthy dinners for one person\nFormat: 5-day plan with ingredients list and prep time for each',
                hint: 'For each prompt, clearly separate the three components: what you want done (task), what it\'s about (topic), and how the response should be structured (format).'
              }
            },
            {
              id: 'w1-m2-l2',
              title: 'Lesson 2: Anatomy of a Prompt',
              slides: [
                {
                  title: 'The Building Blocks of Great Prompts',
                  content: '<p>Every effective prompt is made up of key components. Not every prompt needs all of them, but knowing these building blocks helps you craft better prompts:</p><ul><li><strong>Instruction</strong> — The core action you want</li><li><strong>Context</strong> — Background information</li><li><strong>Input data</strong> — Specific content to work with</li><li><strong>Output format</strong> — How you want the response</li><li><strong>Examples</strong> — Samples of desired output</li><li><strong>Constraints</strong> — Rules and limitations</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📋 <strong>Instruction</strong> — "Summarize this article"</div><div style="background:#7c4ddb;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📎 <strong>Context</strong> — "For a business newsletter"</div><div style="background:#8b5cf6;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📄 <strong>Input Data</strong> — "Here is the article: ..."</div><div style="background:#9b6ff0;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📐 <strong>Output Format</strong> — "As 3 bullet points"</div><div style="background:#a78bfa;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">💡 <strong>Examples</strong> — "Like this: ..."</div><div style="background:#c4b5fd;color:#1a0533;padding:8px 14px;border-radius:6px;font-size:13px">🚧 <strong>Constraints</strong> — "Max 100 words"</div></div>'
                },
                {
                  title: 'The Instruction Component',
                  content: '<p>The instruction is the <strong>core action verb</strong> of your prompt. Strong instructions use specific action words:</p><ul><li><code>Summarize</code>, <code>Analyze</code>, <code>Compare</code>, <code>Explain</code></li><li><code>Create</code>, <code>Write</code>, <code>Generate</code>, <code>Design</code></li><li><code>List</code>, <code>Categorize</code>, <code>Rank</code>, <code>Evaluate</code></li><li><code>Translate</code>, <code>Rewrite</code>, <code>Simplify</code>, <code>Expand</code></li></ul><p>Avoid weak instructions like "Tell me about..." — instead use "Analyze the key factors in..." or "Compare and contrast..."</p>'
                },
                {
                  title: 'Context & Input Data',
                  content: '<p><strong>Context</strong> tells the AI about the situation — who, why, what background:</p><p><code>I\'m a small business owner preparing for a board meeting. I need...</code></p><p><strong>Input data</strong> is the specific content for AI to work with:</p><p><code>Here is the quarterly sales report: [paste data]</code></p><p>The more relevant context and data you provide, the more tailored and useful the response will be.</p>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px"><p style="margin:0 0 8px;font-size:12px;color:#6c3ce0;font-weight:bold">EXAMPLE PROMPT WITH CONTEXT</p><div style="background:#fff;padding:12px;border-radius:8px;font-size:13px;border:1px solid #e9d5ff"><span style="color:#6c3ce0;font-weight:bold">[Context]</span> I run a coffee shop in Portland with 2 employees. <span style="color:#e8652a;font-weight:bold">[Instruction]</span> Create a social media calendar <span style="color:#16a34a;font-weight:bold">[Format]</span> for the next 2 weeks as a table <span style="color:#854d0e;font-weight:bold">[Constraint]</span> focusing on Instagram only.</div></div>'
                },
                {
                  title: 'Output Format & Constraints',
                  content: '<p><strong>Output format</strong> specifies how you want the response structured:</p><ul><li>As a numbered list, table, JSON, email, essay, script</li><li>With specific sections or headings</li><li>In a particular tone (formal, casual, technical)</li></ul><p><strong>Constraints</strong> set boundaries:</p><ul><li>Word count limits: <code>In 200 words or less</code></li><li>Audience: <code>Written for a 5th grader</code></li><li>Exclusions: <code>Don\'t include any technical jargon</code></li></ul>'
                },
                {
                  title: 'Putting It All Together',
                  content: '<p>Here\'s a complete prompt using all building blocks:</p><p><code>You are a nutritionist [CONTEXT]. Create a 7-day meal plan [INSTRUCTION] for a college student on a $50/week budget [INPUT/CONSTRAINTS]. Present it as a table with columns for day, breakfast, lunch, dinner, and estimated cost [FORMAT]. Each meal should take under 30 minutes to prepare [CONSTRAINT]. Here\'s an example row: Monday | Oatmeal with banana | ... [EXAMPLE]</code></p><p>You don\'t need all components every time — but the more you include, the better your results.</p>'
                }
              ],
              objectives: [
                'Identify the 6 building blocks of effective prompts',
                'Write clear, actionable instructions using strong verbs',
                'Provide relevant context and input data',
                'Specify output format and constraints'
              ],
              notes: 'The six building blocks of great prompts are: Instruction (what to do), Context (background info), Input Data (content to work with), Output Format (how the response should look), Examples (samples of desired output), and Constraints (rules and limits).\n\nNot every prompt needs all six components. Simple questions may only need an instruction. But for complex tasks, layering in context, format, and constraints dramatically improves output quality.\n\nPractical tip: When your AI response isn\'t what you wanted, diagnose which component is missing. Usually it\'s either context (AI doesn\'t know your situation) or format (AI doesn\'t know what you want the output to look like).',
              resources: [
                { title: 'The Anatomy of a Perfect Prompt', url: '#', type: 'article' },
                { title: 'Prompt Building Blocks Interactive Tutorial', url: '#', type: 'tool' },
                { title: 'Before & After: How Components Transform Prompts', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Write a detailed prompt that uses all 6 building blocks (Instruction, Context, Input Data, Output Format, Examples, Constraints) to ask AI to help you with a real work or school task. Label each component in your prompt.',
                starterPrompt: '[Instruction] Analyze the following customer reviews\n[Context] I manage a small online bookstore\n[Input Data] Reviews: ...\n[Output Format] Provide a summary table\n[Examples] Like: Positive - "Great selection"\n[Constraints] Focus on actionable feedback only',
                hint: 'Choose a task you actually need help with — this makes the exercise more meaningful. Common tasks: writing an email, planning an event, creating content, analyzing data.'
              }
            },
            {
              id: 'w1-m2-l3',
              title: 'Lesson 3: Role-based Prompting',
              slides: [
                {
                  title: 'Give AI a Role to Play',
                  content: '<p><strong>Role-based prompting</strong> is one of the most powerful techniques. By telling AI to act as a specific expert, you get more focused, knowledgeable responses.</p><p>The format is simple: <code>"You are a [role]. [Your request]"</code></p><p>Examples:</p><ul><li><code>You are a senior marketing strategist...</code></li><li><code>You are a patient math tutor...</code></li><li><code>You are a food critic writing for the New York Times...</code></li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px"><div style="background:#6c3ce0;color:#fff;padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px">👨‍💼</div><div style="font-size:12px;margin-top:4px">Marketing Strategist</div></div><div style="background:#e8652a;color:#fff;padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px">👩‍🏫</div><div style="font-size:12px;margin-top:4px">Patient Tutor</div></div><div style="background:#f5b731;color:#1a0533;padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px">👨‍🍳</div><div style="font-size:12px;margin-top:4px">Expert Chef</div></div></div>'
                },
                {
                  title: 'Why Roles Work So Well',
                  content: '<p>Roles work because they activate specific <strong>knowledge domains</strong> within the AI model:</p><ul><li>A "doctor" role produces medically-informed responses</li><li>A "lawyer" role uses legal terminology and frameworks</li><li>A "teacher" role explains concepts simply with examples</li></ul><p>Without a role, AI gives generic responses. With a role, it shifts its <strong>vocabulary, depth, and perspective</strong> to match that expert.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#fef2f2;padding:12px;border-radius:8px"><div style="font-weight:bold;color:#dc2626;font-size:13px">Without Role ❌</div><p style="font-size:12px;margin:6px 0 0;color:#666">"Investing is when you put money into something hoping it grows."</p></div><div style="background:#dcfce7;padding:12px;border-radius:8px"><div style="font-weight:bold;color:#16a34a;font-size:13px">With Role ✅</div><p style="font-size:12px;margin:6px 0 0;color:#666">"As a financial advisor: Consider your risk tolerance, time horizon, and diversification strategy..."</p></div></div>'
                },
                {
                  title: 'Advanced Role Techniques',
                  content: '<p>Take roles further with these techniques:</p><ul><li><strong>Stack roles:</strong> <code>"You are a marketing expert AND a data analyst"</code></li><li><strong>Add experience:</strong> <code>"You are a senior developer with 15 years of Python experience"</code></li><li><strong>Set personality:</strong> <code>"You are a friendly, patient tutor who uses lots of analogies"</code></li><li><strong>Define audience awareness:</strong> <code>"You are a doctor explaining to a worried parent"</code></li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#f5f3ff;border-left:3px solid #6c3ce0;padding:8px 12px;border-radius:0 6px 6px 0;font-size:13px"><strong>Basic:</strong> "You are a chef"</div><div style="background:#ede9fe;border-left:3px solid #8b5cf6;padding:8px 12px;border-radius:0 6px 6px 0;font-size:13px"><strong>Better:</strong> "You are an Italian chef with 20 years experience"</div><div style="background:#ddd6fe;border-left:3px solid #a78bfa;padding:8px 12px;border-radius:0 6px 6px 0;font-size:13px"><strong>Best:</strong> "You are a friendly Italian grandmother who taught cooking for 40 years and loves sharing family recipes with beginners"</div></div>'
                },
                {
                  title: 'Role-Based Prompt Templates',
                  content: '<p>Here are ready-to-use role templates you can adapt:</p><ul><li><strong>Learning:</strong> <code>"You are a patient tutor specializing in [subject]. Explain [topic] using simple language and real-world analogies."</code></li><li><strong>Writing:</strong> <code>"You are a professional copywriter. Write [content] for [audience] in a [tone] voice."</code></li><li><strong>Analysis:</strong> <code>"You are a business consultant. Analyze [situation] and provide 3 strategic recommendations with pros and cons."</code></li></ul>'
                }
              ],
              objectives: [
                'Understand how role-based prompting improves AI responses',
                'Write effective role assignments for different scenarios',
                'Use advanced role techniques: stacking, experience, personality',
                'Apply role-based prompt templates to real tasks'
              ],
              notes: 'Role-based prompting is one of the simplest yet most powerful techniques. By starting with "You are a [role]...", you shift the AI\'s vocabulary, depth, and perspective to match a specific expert persona.\n\nThe key is being specific about the role. "You are a teacher" is good, but "You are a patient high school biology teacher who uses fun analogies and relates everything to real life" is much better. The more detailed the role, the more tailored the response.\n\nPractical tip: Keep a list of your favorite roles for different tasks. For example: "patient tutor" for learning, "senior consultant" for business advice, "experienced editor" for writing feedback. Reuse these role definitions as starting templates.',
              resources: [
                { title: 'The Power of Persona: Role-Based Prompting Guide', url: '#', type: 'guide' },
                { title: '50 Expert Roles for Better AI Responses', url: '#', type: 'article' },
                { title: 'Role Prompting in Action (Video Tutorial)', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Create 3 role-based prompts for different scenarios and test them:\n1. A role for getting fitness advice\n2. A role for improving your writing\n3. A role for learning a new skill\nCompare the response WITH a role vs WITHOUT a role for at least one scenario.',
                starterPrompt: 'You are a certified personal trainer with 10 years of experience specializing in home workouts for beginners. I have 30 minutes per day and no equipment. Create a beginner-friendly weekly workout plan.',
                hint: 'Make each role specific: include years of experience, specialty area, teaching style, and audience awareness. The more detail in the role, the better the response.'
              }
            },
            {
              id: 'w1-m2-l4',
              title: 'Lesson 4: Context & Constraints',
              slides: [
                {
                  title: 'Context: The Secret Sauce',
                  content: '<p><strong>Context</strong> is the background information that helps AI understand your specific situation. Without it, AI gives generic answers. With it, AI gives personalized solutions.</p><p>Types of context to provide:</p><ul><li><strong>Situational:</strong> Your role, industry, company size</li><li><strong>Historical:</strong> What you\'ve already tried, previous results</li><li><strong>Audience:</strong> Who will read/use the output</li><li><strong>Purpose:</strong> Why you need this and how you\'ll use it</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:8px"><div style="background:#fff;border:2px solid #6c3ce0;padding:12px;border-radius:8px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:4px">WITHOUT CONTEXT</div><div style="font-size:13px">"Write a welcome email" → Generic template</div></div><div style="text-align:center;font-size:16px">⬇️ Add context ⬇️</div><div style="background:#6c3ce0;color:#fff;padding:12px;border-radius:8px"><div style="font-size:12px;font-weight:bold;margin-bottom:4px">WITH CONTEXT</div><div style="font-size:13px">"I run a yoga studio. Write a welcome email for new members who just signed up for their first class. Tone: warm, encouraging." → Perfect fit!</div></div></div>'
                },
                {
                  title: 'Constraints: Setting Boundaries',
                  content: '<p><strong>Constraints</strong> are rules that shape the output. They\'re incredibly useful for getting exactly what you need:</p><ul><li><strong>Length:</strong> <code>In 100 words or less</code>, <code>Exactly 5 bullet points</code></li><li><strong>Tone:</strong> <code>Professional but friendly</code>, <code>Formal academic</code></li><li><strong>Exclusions:</strong> <code>Don\'t use jargon</code>, <code>Avoid clichés</code></li><li><strong>Format:</strong> <code>As a numbered list</code>, <code>In table format</code></li><li><strong>Difficulty:</strong> <code>Explain for a complete beginner</code></li></ul>'
                },
                {
                  title: 'Positive vs. Negative Constraints',
                  content: '<p>You can tell AI what to do <strong>and</strong> what NOT to do:</p><ul><li><strong>Positive:</strong> <code>"Use simple language and real-world examples"</code></li><li><strong>Negative:</strong> <code>"Don\'t use technical jargon or assume prior knowledge"</code></li></ul><p>Combining both is powerful:</p><p><code>"Write in a conversational tone (like explaining to a friend). Don\'t use bullet points — write in paragraph form. Include at least 2 specific examples."</code></p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#dcfce7;padding:12px;border-radius:8px"><div style="font-weight:bold;color:#16a34a;font-size:13px">✅ DO (Positive)</div><ul style="margin:6px 0 0;padding-left:16px;font-size:12px"><li>Use analogies</li><li>Include examples</li><li>Keep it under 200 words</li></ul></div><div style="background:#fef2f2;padding:12px;border-radius:8px"><div style="font-weight:bold;color:#dc2626;font-size:13px">❌ DON\'T (Negative)</div><ul style="margin:6px 0 0;padding-left:16px;font-size:12px"><li>No jargon</li><li>Avoid clichés</li><li>Don\'t assume expertise</li></ul></div></div>'
                },
                {
                  title: 'Context + Constraints in Action',
                  content: '<p>Watch how context and constraints transform a basic prompt:</p><p><strong>Basic:</strong> <code>"Help me write a cover letter"</code></p><p><strong>With context + constraints:</strong></p><p><code>"I\'m a recent marketing graduate applying for a junior social media manager role at Nike. Write a cover letter that highlights my internship at a local agency and my personal TikTok account (50K followers). Keep it under 300 words, professional but showing personality, and mention specific Nike campaigns I admire."</code></p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e;font-size:14px">💡 Pro Tip</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">The more specific your context and constraints, the less you\'ll need to iterate. Spending an extra minute on a detailed prompt saves you 10 minutes of back-and-forth.</p></div>'
                }
              ],
              objectives: [
                'Understand the four types of context (situational, historical, audience, purpose)',
                'Write effective positive and negative constraints',
                'Combine context and constraints for highly targeted prompts',
                'Transform basic prompts into detailed, context-rich prompts'
              ],
              notes: 'Context and constraints are the two components that most dramatically improve AI output quality. Context tells AI about your situation (who you are, who it\'s for, why you need it), while constraints set rules about the output (length, tone, format, exclusions).\n\nThe four types of context are: situational (your role and environment), historical (what you\'ve tried), audience (who will consume the output), and purpose (how you\'ll use it). Even adding one type of context significantly improves responses.\n\nPractical tip: Before writing any important prompt, spend 30 seconds listing your constraints. Ask: How long should it be? What tone? What should be included? What should be excluded? Who is the audience? This checklist approach ensures you don\'t forget critical constraints.',
              resources: [
                { title: 'Context is King: How Background Info Transforms AI Output', url: '#', type: 'article' },
                { title: 'Constraint Crafting for Better Results', url: '#', type: 'guide' },
                { title: 'Prompt Context Templates', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Take this basic prompt: "Help me plan a presentation." Add rich context (your role, audience, purpose) and at least 5 constraints (time limit, style, format, etc.) to make it specific to a real scenario in your life.',
                starterPrompt: 'Context: I\'m a [your role] at [company/school]. I need to present [topic] to [audience] next [when].\n\nConstraints:\n1. Presentation should be [X] minutes\n2. Audience knowledge level: [beginner/intermediate/expert]\n3. Tone: [formal/casual/inspiring]\n4. Must include: [specific elements]\n5. Must avoid: [things to exclude]',
                hint: 'Think about a real presentation you need to give. The more authentic the context, the more useful the AI output will be. Include details about your audience\'s expectations and what would make the presentation successful.'
              }
            }
          ]
        },
        {
          id: 'w1-m3',
          title: 'Module 3: Productivity with AI',
          lessons: [
            {
              id: 'w1-m3-l1',
              title: 'Lesson 1: AI for Writing',
              slides: [
                {
                  title: 'AI as Your Writing Partner',
                  content: '<p>AI can transform your writing workflow at every stage:</p><ul><li><strong>Brainstorming:</strong> Generate ideas and outlines</li><li><strong>Drafting:</strong> Create first drafts quickly</li><li><strong>Editing:</strong> Improve clarity, grammar, and tone</li><li><strong>Repurposing:</strong> Turn one piece into many formats</li></ul><p>AI doesn\'t replace your voice — it helps you express your ideas faster and more clearly.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:center"><span style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:20px;font-size:12px">💡 Brainstorm</span><span>→</span><span style="background:#8b5cf6;color:#fff;padding:8px 14px;border-radius:20px;font-size:12px">📝 Draft</span><span>→</span><span style="background:#a78bfa;color:#fff;padding:8px 14px;border-radius:20px;font-size:12px">✏️ Edit</span><span>→</span><span style="background:#c4b5fd;color:#1a0533;padding:8px 14px;border-radius:20px;font-size:12px">📢 Publish</span></div>'
                },
                {
                  title: 'Email Writing with AI',
                  content: '<p>Email is where most professionals spend hours. AI can cut that time dramatically:</p><ul><li><strong>Professional replies:</strong> <code>"Write a polite reply declining this meeting invitation while suggesting an alternative time"</code></li><li><strong>Difficult conversations:</strong> <code>"Help me write an email addressing a missed deadline with empathy but firmness"</code></li><li><strong>Follow-ups:</strong> <code>"Write a friendly follow-up to someone who hasn\'t replied in a week"</code></li></ul>'
                },
                {
                  title: 'Content Creation at Scale',
                  content: '<p>AI excels at helping you create content faster:</p><ul><li><strong>Blog posts:</strong> Outline → Draft → Edit workflow</li><li><strong>Social media:</strong> Generate multiple post variations from one idea</li><li><strong>Reports:</strong> Structure data into readable narratives</li><li><strong>Presentations:</strong> Create slide outlines and talking points</li></ul><p><strong>Key insight:</strong> Use AI for the <em>first draft</em>, then add your personal touch, expertise, and voice in editing.</p>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px">ONE IDEA → MANY FORMATS</div><div style="text-align:center;margin-bottom:8px"><span style="background:#6c3ce0;color:#fff;padding:6px 16px;border-radius:20px;font-size:13px">📝 Blog Post Idea</span></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px"><div style="background:#ede9fe;padding:8px;border-radius:6px;text-align:center;font-size:11px">🐦 Tweet Thread</div><div style="background:#ede9fe;padding:8px;border-radius:6px;text-align:center;font-size:11px">📧 Newsletter</div><div style="background:#ede9fe;padding:8px;border-radius:6px;text-align:center;font-size:11px">💼 LinkedIn Post</div></div></div>'
                },
                {
                  title: 'Editing & Improving Your Writing',
                  content: '<p>AI is an exceptional editor. Use these prompts to level up your writing:</p><ul><li><code>"Make this more concise without losing key information"</code></li><li><code>"Improve the clarity and flow of this paragraph"</code></li><li><code>"Rewrite this in a more professional/casual/friendly tone"</code></li><li><code>"Check this for grammar, spelling, and punctuation errors"</code></li><li><code>"Suggest 3 stronger headlines for this article"</code></li></ul>'
                }
              ],
              objectives: [
                'Use AI for every stage of the writing process',
                'Write effective prompts for email drafting',
                'Create and repurpose content efficiently with AI',
                'Use AI as an editor to improve your existing writing'
              ],
              notes: 'AI transforms writing from a blank-page struggle into an iterative refinement process. Instead of staring at an empty document, you can generate a first draft in seconds and spend your time improving it with your expertise and voice.\n\nThe most valuable writing use cases for AI are: drafting emails (especially difficult ones), creating content outlines, generating first drafts, editing for clarity and tone, and repurposing one piece of content into multiple formats.\n\nPractical tip: Never publish AI output without editing. Your value is in adding your unique perspective, specific examples from your experience, and your authentic voice. Use AI for structure and speed; add your personality and expertise on top.',
              resources: [
                { title: 'AI-Powered Writing: A Complete Workflow', url: '#', type: 'guide' },
                { title: 'Email Templates That Work with AI', url: '#', type: 'tool' },
                { title: '10 Ways AI Can Improve Your Writing Today', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Write a professional email using AI assistance. Scenario: You need to ask your manager for a day off next week for a personal appointment. Use role-based prompting and provide full context. Then ask AI to create 3 tone variations: formal, friendly, and brief.',
                starterPrompt: 'You are an expert email writer who specializes in workplace communication. Help me write an email to my manager requesting a day off next Friday for a personal appointment. I\'ve been at this job for 6 months, have a good relationship with my manager, and have no urgent deadlines that week.',
                hint: 'After getting the first draft, try follow-up prompts like: "Make it shorter", "Add a note about who will cover my work", or "Make the tone more casual".'
              }
            },
            {
              id: 'w1-m3-l2',
              title: 'Lesson 2: AI for Research',
              slides: [
                {
                  title: 'AI-Powered Research',
                  content: '<p>AI can dramatically speed up your research process:</p><ul><li><strong>Summarizing</strong> long articles and papers</li><li><strong>Comparing</strong> different options or approaches</li><li><strong>Explaining</strong> complex topics in simple terms</li><li><strong>Finding patterns</strong> in information you provide</li></ul><p><strong>Important caveat:</strong> AI knowledge has a cutoff date and can hallucinate. Always verify critical facts from primary sources.</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:8px"><div style="display:flex;align-items:center;gap:8px"><span style="background:#6c3ce0;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">1</span><span style="font-size:13px">Gather sources and paste into AI</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#8b5cf6;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">2</span><span style="font-size:13px">Ask AI to summarize and find patterns</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#a78bfa;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">3</span><span style="font-size:13px">Ask follow-up questions to go deeper</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#c4b5fd;color:#1a0533;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">4</span><span style="font-size:13px">Verify key facts from original sources</span></div></div>'
                },
                {
                  title: 'Research Prompt Templates',
                  content: '<p>Here are powerful research prompts you can use right away:</p><ul><li><code>"Summarize the key arguments for and against [topic] with sources"</code></li><li><code>"Compare [Option A] vs [Option B] across these criteria: cost, ease of use, features"</code></li><li><code>"Explain [complex topic] using an analogy a 10-year-old would understand"</code></li><li><code>"What are the 5 most important things I should know about [topic] if I\'m a complete beginner?"</code></li></ul>'
                },
                {
                  title: 'The Research-Verify Workflow',
                  content: '<p>Effective AI research follows this workflow:</p><ul><li><strong>Step 1:</strong> Ask AI for an overview of the topic</li><li><strong>Step 2:</strong> Ask follow-up questions on areas that interest you</li><li><strong>Step 3:</strong> Ask AI to identify what it\'s uncertain about</li><li><strong>Step 4:</strong> Verify key claims using trusted sources</li></ul><p>Pro tip: Ask AI <code>"What parts of your response might be inaccurate or outdated?"</code> — AI is often surprisingly good at flagging its own uncertainties.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">⚠️ Always Verify</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">AI is great for exploration and understanding, but always double-check statistics, dates, quotes, and technical specifications from primary sources.</p></div>'
                },
                {
                  title: 'Deep Dive Technique',
                  content: '<p>Use this conversation pattern to research any topic thoroughly:</p><ul><li><strong>Start broad:</strong> <code>"Give me an overview of [topic]"</code></li><li><strong>Go deeper:</strong> <code>"Tell me more about [specific aspect from the overview]"</code></li><li><strong>Get practical:</strong> <code>"Give me specific examples of this in practice"</code></li><li><strong>Challenge:</strong> <code>"What are the criticisms or limitations of this approach?"</code></li><li><strong>Apply:</strong> <code>"How would I apply this to [my specific situation]?"</code></li></ul>'
                }
              ],
              objectives: [
                'Use AI to accelerate research without sacrificing accuracy',
                'Apply research prompt templates for different scenarios',
                'Follow the Research-Verify workflow for reliable results',
                'Use the Deep Dive technique for thorough topic exploration'
              ],
              notes: 'AI is a phenomenal research accelerator, but it\'s not a replacement for primary sources. Use it to get up to speed quickly on a topic, understand complex concepts, and compare options — but always verify critical facts.\n\nThe most powerful research technique is the "Deep Dive": start broad, then progressively narrow your focus. Ask follow-up questions, request examples, explore criticisms, and finally ask how to apply insights to your specific situation.\n\nPractical tip: When using AI for research, ask it to flag its own uncertainty: "What parts of this response might be inaccurate?" This simple prompt helps you know where to focus your verification efforts.',
              resources: [
                { title: 'How to Research Effectively with AI', url: '#', type: 'article' },
                { title: 'The Deep Dive Research Method', url: '#', type: 'video' },
                { title: 'AI Research vs Traditional Research: Finding the Balance', url: '#', type: 'guide' }
              ],
              exercise: {
                task: 'Choose a topic you\'re curious about but don\'t know much about (e.g., "blockchain", "behavioral economics", "urban farming"). Use the Deep Dive technique: start with an overview, then go 4 levels deep with follow-up questions. Document your conversation and note which facts you\'d want to verify.',
                starterPrompt: 'I want to learn about [your topic]. Start by giving me a beginner-friendly overview covering: what it is, why it matters, and the 3 most important things to know about it.',
                hint: 'After each response, pick the most interesting point and ask a follow-up. The conversation should feel like talking to a knowledgeable friend. End by asking: "What parts of your explanation might be oversimplified or inaccurate?"'
              }
            },
            {
              id: 'w1-m3-l3',
              title: 'Lesson 3: AI for Problem Solving',
              slides: [
                {
                  title: 'AI as Your Thinking Partner',
                  content: '<p>AI excels at <strong>structured problem solving</strong>. It can help you:</p><ul><li>Break complex problems into manageable steps</li><li>Brainstorm solutions you haven\'t considered</li><li>Play devil\'s advocate against your ideas</li><li>Create pro/con analyses and decision frameworks</li></ul><p>Think of AI as a thinking partner that never gets tired, never judges, and always has more ideas to share.</p>',
                  visual: '<div style="background:#f5f3ff;border:2px solid #6c3ce0;padding:16px;border-radius:12px;text-align:center"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px">AI PROBLEM-SOLVING TOOLKIT</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#ede9fe;padding:8px;border-radius:6px;font-size:12px">🧩 Break Down</div><div style="background:#ede9fe;padding:8px;border-radius:6px;font-size:12px">💡 Brainstorm</div><div style="background:#ede9fe;padding:8px;border-radius:6px;font-size:12px">⚖️ Analyze</div><div style="background:#ede9fe;padding:8px;border-radius:6px;font-size:12px">🎯 Decide</div></div></div>'
                },
                {
                  title: 'Problem Breakdown Technique',
                  content: '<p>When facing a complex problem, use this prompt pattern:</p><p><code>"I\'m facing this problem: [describe problem]. Help me break it down into smaller, manageable sub-problems. For each sub-problem, suggest a first step I can take today."</code></p><p>This technique works because:</p><ul><li>It transforms overwhelming challenges into actionable steps</li><li>It reveals dependencies and priorities</li><li>It gives you a clear starting point</li></ul>'
                },
                {
                  title: 'Brainstorming & Ideation',
                  content: '<p>AI is an incredible brainstorming partner. Try these prompts:</p><ul><li><code>"Give me 20 ideas for [goal]. Include both conventional and wild/creative ideas."</code></li><li><code>"What are 5 approaches to [problem] that someone outside my industry might suggest?"</code></li><li><code>"Play devil\'s advocate: what are all the reasons my plan to [plan] might fail?"</code></li></ul><p><strong>Pro tip:</strong> Ask for MORE ideas than you need. Quantity leads to quality in brainstorming — the best ideas often come at #15 or #20.</p>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">💡 Quantity → Quality</p><p style="margin:8px 0 0;font-size:13px">Ask for 20+ ideas. The first 5 will be obvious. Ideas 10-20 are where the creative breakthroughs hide.</p></div>'
                },
                {
                  title: 'Decision-Making Frameworks',
                  content: '<p>When you need to make a decision, use AI to create structured analyses:</p><ul><li><strong>Pro/Con list:</strong> <code>"Create a detailed pro/con analysis of [options]"</code></li><li><strong>Decision matrix:</strong> <code>"Help me evaluate [options] across these criteria: [list criteria]. Rate each option 1-5."</code></li><li><strong>Risk assessment:</strong> <code>"What are the risks of each option and how likely are they?"</code></li><li><strong>Second opinion:</strong> <code>"I\'m leaning toward [choice]. Challenge my thinking — what am I missing?"</code></li></ul>'
                }
              ],
              objectives: [
                'Use AI to break complex problems into manageable steps',
                'Apply AI brainstorming techniques that generate creative ideas',
                'Create decision-making frameworks with AI assistance',
                'Use AI as a devil\'s advocate to stress-test your ideas'
              ],
              notes: 'AI is one of the best thinking partners available. It can break down complex problems, brainstorm solutions, create decision frameworks, and challenge your assumptions — all in seconds.\n\nThe key techniques are: Problem Breakdown (turning big problems into small, actionable steps), Brainstorming (asking for 20+ ideas to push past the obvious), Decision Matrices (structured comparison of options), and Devil\'s Advocate (having AI challenge your thinking).\n\nPractical tip: When brainstorming, always ask for more ideas than you think you need. The first 5-10 ideas are usually obvious. The creative breakthroughs tend to emerge around idea #15-20. Also try asking AI to approach the problem from different perspectives: "What would a designer think? An engineer? A customer?"',
              resources: [
                { title: 'Problem-Solving with AI: A Framework', url: '#', type: 'guide' },
                { title: 'The AI Brainstorming Method', url: '#', type: 'article' },
                { title: 'Decision Matrix Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Pick a real decision you\'re facing (career choice, purchase decision, project direction, etc.). Use AI to: 1) Break it down into sub-questions, 2) Brainstorm 10 options, 3) Create a decision matrix rating top 3 options across 4 criteria, 4) Have AI play devil\'s advocate on your top choice.',
                starterPrompt: 'I need to make a decision about [your decision]. Here\'s my situation: [describe context]. Help me think through this systematically by first breaking it down into the key questions I need to answer.',
                hint: 'Be honest about your situation — the more context you provide, the more tailored the analysis. After the decision matrix, try: "I\'m leaning toward option X. What am I not seeing? What could go wrong?"'
              }
            }
          ]
        },
        {
          id: 'w1-m4',
          title: 'Module 4: Hands-on Practice',
          lessons: [
            {
              id: 'w1-m4-l1',
              title: 'Lesson 1: Building Your First Prompts',
              slides: [
                {
                  title: 'From Theory to Practice',
                  content: '<p>You\'ve learned the fundamentals. Now it\'s time to put everything together. In this lesson, you\'ll build real prompts using every technique you\'ve learned:</p><ul><li>Task-Topic-Format framework</li><li>The 6 building blocks</li><li>Role-based prompting</li><li>Context and constraints</li></ul><p>We\'ll walk through 3 real-world scenarios step by step.</p>'
                },
                {
                  title: 'Scenario 1: Career Development',
                  content: '<p>Let\'s build a prompt for career advice step by step:</p><p><strong>Role:</strong> <code>You are a career coach with 20 years of experience helping professionals transition between industries.</code></p><p><strong>Context:</strong> <code>I\'m a marketing manager with 5 years experience considering a switch to product management.</code></p><p><strong>Task:</strong> <code>Create a 90-day transition plan.</code></p><p><strong>Format:</strong> <code>Organized by month with specific weekly action items.</code></p><p><strong>Constraints:</strong> <code>I can dedicate 10 hours/week outside work. I have no technical background.</code></p>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px">BUILDING THE PROMPT</div><div style="display:flex;flex-direction:column;gap:4px;font-size:13px"><div style="background:#6c3ce0;color:#fff;padding:6px 12px;border-radius:4px">🎭 Role: Career coach, 20 years exp</div><div style="background:#8b5cf6;color:#fff;padding:6px 12px;border-radius:4px">📋 Context: Marketing → Product transition</div><div style="background:#a78bfa;color:#fff;padding:6px 12px;border-radius:4px">🎯 Task: 90-day transition plan</div><div style="background:#c4b5fd;color:#1a0533;padding:6px 12px;border-radius:4px">📐 Format: Monthly breakdown, weekly actions</div><div style="background:#ddd6fe;color:#1a0533;padding:6px 12px;border-radius:4px">🚧 Constraints: 10 hrs/week, non-technical</div></div></div>'
                },
                {
                  title: 'Scenario 2: Learning a New Skill',
                  content: '<p>Building a prompt for learning a new skill:</p><p><code>You are a patient, encouraging programming tutor who specializes in teaching absolute beginners. I want to learn Python for data analysis. I have zero coding experience but I\'m comfortable with Excel. Create a 4-week learning plan with daily 30-minute lessons. Include: specific free resources for each lesson, a small practice exercise per day, and a weekend project for each week. Start from the absolute basics and progress to analyzing a real dataset by week 4.</code></p><p>Notice how every component works together to produce something incredibly useful.</p>'
                },
                {
                  title: 'Scenario 3: Business Problem',
                  content: '<p>Building a prompt for a business challenge:</p><p><code>You are a customer experience consultant. My coffee shop has seen a 20% drop in repeat customers over 3 months. Our Google reviews average 4.2 stars. We haven\'t changed our menu or prices. Give me: 1) Five possible root causes ranked by likelihood, 2) Three low-cost experiments I can run this week to diagnose the real issue, 3) A customer survey template with 5 questions. Format each section clearly with headers.</code></p>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">✅ What Makes These Prompts Great</p><ul style="margin:8px 0 0;padding-left:16px;font-size:13px;color:#166534"><li>Specific role with expertise</li><li>Rich, real-world context</li><li>Clear, actionable task</li><li>Defined output format</li><li>Realistic constraints</li></ul></div>'
                }
              ],
              objectives: [
                'Build complete prompts combining all learned techniques',
                'Apply prompt engineering to real career, learning, and business scenarios',
                'Identify what makes a prompt effective through examples',
                'Practice the iterative prompt-building process'
              ],
              notes: 'Building great prompts is about systematically combining all the techniques you\'ve learned: start with a role, add context about your situation, clearly state your task, specify the output format, and set relevant constraints.\n\nThe three scenarios in this lesson show how the same framework applies to completely different domains: career development, skill learning, and business problem-solving. The pattern is always the same — Role + Context + Task + Format + Constraints.\n\nPractical tip: When building a complex prompt, don\'t try to write it all at once. Start with the task, then add the role, then layer in context and constraints. Build it up piece by piece, like constructing a sentence.',
              resources: [
                { title: 'Prompt Building Workshop Exercises', url: '#', type: 'guide' },
                { title: 'Real-World Prompt Examples Library', url: '#', type: 'tool' },
                { title: 'From Idea to Prompt: A Step-by-Step Walkthrough', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Build 3 complete prompts for your own real-world needs using all the techniques from this module. Each prompt should include: a specific role, rich context, clear task, output format, and at least 2 constraints. Test all 3 in an AI chatbot and rate the quality of each response 1-10.',
                starterPrompt: 'Prompt 1 (Professional):\nYou are a [role]...\n\nPrompt 2 (Personal):\nYou are a [role]...\n\nPrompt 3 (Creative):\nYou are a [role]...',
                hint: 'Choose one professional task, one personal task, and one creative task. Real scenarios produce better results than hypothetical ones. After testing, ask: which prompt got the best response and why?'
              }
            },
            {
              id: 'w1-m4-l2',
              title: 'Lesson 2: Prompt Challenges',
              slides: [
                {
                  title: 'Test Your Skills',
                  content: '<p>Time to push your prompt engineering skills to the next level! Complete these progressively challenging prompting tasks.</p><p>Each challenge builds on what you\'ve learned and introduces a new twist. The goal isn\'t perfection — it\'s <strong>deliberate practice</strong>.</p><ul><li>Challenge 1: The One-Shot Expert</li><li>Challenge 2: The Format Transformer</li><li>Challenge 3: The Chain Thinker</li><li>Challenge 4: The Constraint Master</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#dcfce7;padding:10px;border-radius:8px;text-align:center"><div style="font-size:20px">🟢</div><div style="font-size:12px;font-weight:bold">Challenge 1</div><div style="font-size:11px">One-Shot Expert</div></div><div style="background:#fefce8;padding:10px;border-radius:8px;text-align:center"><div style="font-size:20px">🟡</div><div style="font-size:12px;font-weight:bold">Challenge 2</div><div style="font-size:11px">Format Transformer</div></div><div style="background:#fed7aa;padding:10px;border-radius:8px;text-align:center"><div style="font-size:20px">🟠</div><div style="font-size:12px;font-weight:bold">Challenge 3</div><div style="font-size:11px">Chain Thinker</div></div><div style="background:#fecaca;padding:10px;border-radius:8px;text-align:center"><div style="font-size:20px">🔴</div><div style="font-size:12px;font-weight:bold">Challenge 4</div><div style="font-size:11px">Constraint Master</div></div></div>'
                },
                {
                  title: 'Challenge 1: The One-Shot Expert',
                  content: '<p>Write a <strong>single prompt</strong> (no follow-ups allowed!) that gets AI to produce a complete, ready-to-use travel itinerary for a 3-day trip.</p><p>Your prompt must produce output that includes:</p><ul><li>Day-by-day schedule with times</li><li>Restaurant recommendations</li><li>Budget estimates</li><li>Transportation tips</li><li>Packing suggestions</li></ul><p><em>The challenge: get all of this in one prompt, one response.</em></p>'
                },
                {
                  title: 'Challenge 2: The Format Transformer',
                  content: '<p>Take this simple information and ask AI to present it in <strong>5 different formats</strong>:</p><p><code>"The benefits of regular exercise include improved cardiovascular health, better mental health, weight management, increased energy, and better sleep quality."</code></p><p>Transform into:</p><ul><li>An infographic outline</li><li>A persuasive email</li><li>A children\'s story</li><li>A data table with statistics</li><li>A motivational speech</li></ul><p><em>The challenge: same content, 5 completely different outputs.</em></p>'
                },
                {
                  title: 'Challenge 3 & 4: Advanced Techniques',
                  content: '<p><strong>Challenge 3: Chain Thinker</strong> — Use a series of 3 connected prompts where each builds on the previous response to develop a business idea from concept to execution plan.</p><p><strong>Challenge 4: Constraint Master</strong> — Write a prompt with at least 8 specific constraints that forces AI to write a product review. Constraints might include: word count, specific sections, tone, audience, what to include/exclude, format, and style.</p><p><em>These challenges test your ability to think strategically about prompting as a multi-step process.</em></p>',
                  visual: '<div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#6c3ce0">🏆 Week 1 Complete!</p><p style="margin:8px 0 0;font-size:13px">Congratulations! You now have the foundational skills of prompt engineering. Next week, we\'ll learn how to scale these skills and build AI-powered workflows.</p></div>'
                }
              ],
              objectives: [
                'Apply all prompt engineering techniques under challenging constraints',
                'Write single prompts that produce comprehensive outputs',
                'Transform content across multiple formats using AI',
                'Build multi-step prompt chains for complex tasks'
              ],
              notes: 'These challenges are designed to push your skills beyond comfortable prompting. The One-Shot Expert challenge forces you to be incredibly thorough in a single prompt. The Format Transformer shows you how versatile AI can be with the same content. The Chain Thinker introduces multi-step prompting — a critical skill for complex tasks.\n\nThe key takeaway is that prompt engineering is a skill that improves with deliberate practice. The more you experiment with different techniques and constraints, the better your intuition becomes.\n\nPractical tip: Save your best challenge responses! They become templates you can adapt for future tasks. Also, try doing these challenges with different AI models (ChatGPT, Claude, Gemini) — you\'ll notice each model has different strengths.',
              resources: [
                { title: 'Advanced Prompt Engineering Challenges', url: '#', type: 'guide' },
                { title: 'Prompt Engineering Leaderboard', url: '#', type: 'tool' },
                { title: 'Multi-Step Prompting Strategies', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Complete all 4 challenges and document your best prompt for each. Rate your results 1-10 and write one sentence about what you learned from each challenge.',
                starterPrompt: 'Challenge 1 (One-Shot Expert):\nYou are an expert travel planner. Create a complete 3-day itinerary for [destination]...\n\nChallenge 2 (Format Transformer):\nTake the following information about exercise benefits and present it as...',
                hint: 'For Challenge 1, front-load all your requirements in the prompt — be exhaustive. For Challenge 3 (Chain Thinker), plan your 3 prompts before starting — what does each step need to produce for the next step to work?'
              }
            }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // WEEK 2 – Scaling Yourself with AI
    // ──────────────────────────────────────────────
    {
      id: 'week-2',
      title: 'Week 2',
      name: 'Scaling Yourself with AI',
      badge: 'live',
      gradient: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 30%, #f39c12 70%, #f1c40f 100%)',
      emoji: '🌉',
      lessonsCount: 14,
      tasksCount: 18,
      modules: [
        {
          id: 'w2-m1',
          title: 'Module 1: AI Tools Landscape',
          lessons: [
            {
              id: 'w2-m1-l1',
              title: 'Lesson 1: Overview of AI Tools',
              slides: [
                {
                  title: 'The AI Tools Ecosystem',
                  content: '<p>The AI landscape has exploded with tools for every use case. Understanding the ecosystem helps you pick the right tool for each job:</p><ul><li><strong>Chat-based AI:</strong> ChatGPT, Claude, Gemini — general-purpose conversational AI</li><li><strong>Writing AI:</strong> Jasper, Copy.ai, Writesonic — specialized for content</li><li><strong>Image AI:</strong> Midjourney, DALL-E, Stable Diffusion — visual content creation</li><li><strong>Code AI:</strong> GitHub Copilot, Cursor, Replit — developer productivity</li><li><strong>Automation AI:</strong> Zapier AI, Make.com — workflow automation</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#e74c3c;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">💬</div>Chat AI<br>ChatGPT, Claude</div><div style="background:#f39c12;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">✍️</div>Writing AI<br>Jasper, Copy.ai</div><div style="background:#27ae60;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">🎨</div>Image AI<br>Midjourney, DALL-E</div><div style="background:#2980b9;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">⚡</div>Automation AI<br>Zapier, Make</div></div>'
                },
                {
                  title: 'Chat-Based AI Deep Dive',
                  content: '<p>Chat-based AI tools are the Swiss army knife of the AI world:</p><ul><li><strong>ChatGPT (OpenAI):</strong> Most popular, great all-rounder, strong at creative writing and coding. Free tier available.</li><li><strong>Claude (Anthropic):</strong> Excellent at analysis, nuanced writing, and following complex instructions. Known for safety.</li><li><strong>Gemini (Google):</strong> Strong at research, connected to Google ecosystem, multimodal capabilities.</li></ul><p>Each has strengths. Experiment with all three to find your favorite for different tasks.</p>'
                },
                {
                  title: 'Specialized AI Tools',
                  content: '<p>Beyond chat AI, specialized tools excel in specific domains:</p><ul><li><strong>Notion AI:</strong> Built into your workspace for notes and docs</li><li><strong>Grammarly:</strong> AI-powered writing assistant with tone detection</li><li><strong>Canva AI:</strong> Design with AI-powered templates and generation</li><li><strong>Otter.ai:</strong> Meeting transcription and summarization</li><li><strong>Perplexity:</strong> AI-powered search with citations</li></ul><p>The best approach: use chat AI as your base and add specialized tools where you need extra power.</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#fff5f5;padding:8px 12px;border-radius:6px;font-size:13px">📝 <strong>Notion AI</strong> — Notes & documentation</div><div style="background:#f5fff5;padding:8px 12px;border-radius:6px;font-size:13px">✅ <strong>Grammarly</strong> — Writing improvement</div><div style="background:#f5f5ff;padding:8px 12px;border-radius:6px;font-size:13px">🎨 <strong>Canva AI</strong> — Design creation</div><div style="background:#fffff5;padding:8px 12px;border-radius:6px;font-size:13px">🎙️ <strong>Otter.ai</strong> — Meeting transcription</div><div style="background:#fff5ff;padding:8px 12px;border-radius:6px;font-size:13px">🔍 <strong>Perplexity</strong> — Research with sources</div></div>'
                },
                {
                  title: 'Building Your AI Stack',
                  content: '<p>Your <strong>AI stack</strong> is the combination of AI tools you use regularly. A good starter stack includes:</p><ul><li><strong>Primary chat AI</strong> — For general tasks (ChatGPT or Claude)</li><li><strong>Writing assistant</strong> — For polishing text (Grammarly)</li><li><strong>Note-taking with AI</strong> — For organizing knowledge (Notion AI)</li><li><strong>Search AI</strong> — For research (Perplexity)</li></ul><p>Start small, master one tool at a time, and add new tools as you discover specific needs.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">💡 Stack Building Tip</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">Don\'t try to learn 10 tools at once. Master your primary chat AI first, then add one specialized tool per week.</p></div>'
                }
              ],
              objectives: [
                'Map the AI tools ecosystem across major categories',
                'Compare chat-based AI tools: ChatGPT, Claude, and Gemini',
                'Identify specialized AI tools for specific workflows',
                'Begin building a personal AI tool stack'
              ],
              notes: 'The AI tools landscape is vast but can be organized into clear categories: chat-based AI (ChatGPT, Claude, Gemini), writing tools (Jasper, Grammarly), image generators (Midjourney, DALL-E), code assistants (GitHub Copilot), and automation platforms (Zapier AI).\n\nThe smartest approach is to build your AI stack incrementally. Start with one primary chat AI tool and become proficient with it. Then add specialized tools for your specific needs. Trying to learn everything at once leads to overwhelm.\n\nPractical tip: Sign up for free tiers of ChatGPT, Claude, and Gemini this week. Try the same task on all three and notice the differences. Each model has different strengths, and knowing these will help you choose the right tool for each task.',
              resources: [
                { title: 'The Complete AI Tools Directory 2024', url: '#', type: 'guide' },
                { title: 'ChatGPT vs Claude vs Gemini: A Comparison', url: '#', type: 'article' },
                { title: 'Building Your AI Toolkit (Video)', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Create your personal AI tools audit. List every AI tool you currently use, rate how well you use it (1-5), and identify 2 gaps in your toolkit. Then research and test one new AI tool this week.',
                starterPrompt: 'Help me evaluate AI tools for my needs. I work as a [your role] and my main tasks include [list tasks]. What AI tools would you recommend for each task? Compare free vs paid options.',
                hint: 'Focus on tools that address your biggest time sinks. If you spend 2 hours on email daily, an AI email assistant has more impact than an AI image generator.'
              }
            },
            {
              id: 'w2-m1-l2',
              title: 'Lesson 2: Choosing the Right Tool',
              slides: [
                {
                  title: 'The Right Tool for the Right Job',
                  content: '<p>Not all AI tools are created equal. Choosing the right one for your task is a skill in itself:</p><ul><li><strong>Quick answers and brainstorming?</strong> → Chat AI (ChatGPT, Claude)</li><li><strong>Research with sources?</strong> → Perplexity or Gemini</li><li><strong>Professional writing?</strong> → Chat AI + Grammarly</li><li><strong>Visual content?</strong> → Canva AI, Midjourney</li><li><strong>Meeting notes?</strong> → Otter.ai, Fireflies</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;align-items:center;gap:8px"><span style="background:#e74c3c;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px;min-width:100px;text-align:center">Quick Tasks</span><span style="font-size:13px">→ ChatGPT / Claude</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#f39c12;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px;min-width:100px;text-align:center">Research</span><span style="font-size:13px">→ Perplexity / Gemini</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#27ae60;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px;min-width:100px;text-align:center">Writing</span><span style="font-size:13px">→ Chat AI + Grammarly</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#2980b9;color:#fff;padding:6px 10px;border-radius:4px;font-size:12px;min-width:100px;text-align:center">Visuals</span><span style="font-size:13px">→ Canva AI / Midjourney</span></div></div>'
                },
                {
                  title: 'Decision Framework for Tool Selection',
                  content: '<p>When evaluating a new AI tool, ask these 5 questions:</p><ul><li><strong>1. Does it solve a real problem?</strong> Don\'t adopt tools just because they\'re trendy</li><li><strong>2. Is it better than what I already use?</strong> Compare to your current workflow</li><li><strong>3. What\'s the learning curve?</strong> Time invested vs. time saved</li><li><strong>4. What\'s the cost?</strong> Free tier, subscription, or usage-based</li><li><strong>5. Does it integrate with my workflow?</strong> API, browser extension, app</li></ul>'
                },
                {
                  title: 'When to Use Multiple Tools Together',
                  content: '<p>The real power comes from <strong>combining tools</strong> in a workflow:</p><ul><li><strong>Research workflow:</strong> Perplexity (research) → Claude (analyze) → Notion AI (organize)</li><li><strong>Content workflow:</strong> ChatGPT (draft) → Grammarly (polish) → Canva AI (visuals)</li><li><strong>Meeting workflow:</strong> Otter.ai (transcribe) → ChatGPT (summarize) → Email AI (distribute)</li></ul><p>Think of AI tools as LEGO blocks — they\'re most powerful when connected.</p>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px">CONTENT CREATION PIPELINE</div><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:center"><span style="background:#e74c3c;color:#fff;padding:6px 12px;border-radius:6px;font-size:12px">ChatGPT Draft</span><span>→</span><span style="background:#f39c12;color:#fff;padding:6px 12px;border-radius:6px;font-size:12px">Grammarly Edit</span><span>→</span><span style="background:#27ae60;color:#fff;padding:6px 12px;border-radius:6px;font-size:12px">Canva Design</span><span>→</span><span style="background:#2980b9;color:#fff;padding:6px 12px;border-radius:6px;font-size:12px">Publish!</span></div></div>'
                },
                {
                  title: 'Avoiding Tool Overload',
                  content: '<p>A common trap is adopting too many tools. Signs of tool overload:</p><ul><li>You spend more time switching between tools than working</li><li>You\'re paying for tools you rarely use</li><li>You can\'t remember which tool to use for what</li></ul><p><strong>The 3-tool rule:</strong> Start with a maximum of 3 AI tools. Master them completely before adding a 4th. Quality of use matters more than quantity of tools.</p>'
                }
              ],
              objectives: [
                'Match AI tools to specific task types effectively',
                'Apply a 5-question framework for evaluating new AI tools',
                'Design multi-tool workflows for complex tasks',
                'Avoid tool overload by following the 3-tool rule'
              ],
              notes: 'Choosing the right AI tool is about matching capabilities to tasks. Chat-based AI is your general-purpose workhorse, but specialized tools often produce better results for specific tasks like research (Perplexity), writing polish (Grammarly), or visual design (Canva AI).\n\nThe real power comes from combining tools in workflows — using each tool\'s strength in sequence. But beware of tool overload: start with 3 tools maximum and master them before adding more.\n\nPractical tip: This week, try one multi-tool workflow. For example: use ChatGPT to draft a blog post, then paste it into Grammarly for editing, then use Canva AI to create a header image. Notice how the pipeline is faster than doing everything manually.',
              resources: [
                { title: 'AI Tool Selection Guide', url: '#', type: 'guide' },
                { title: 'Building Multi-Tool AI Workflows', url: '#', type: 'article' },
                { title: 'AI Tool Comparison Matrix Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Design a multi-tool AI workflow for a task you do regularly. Map out which AI tool you\'d use at each step and why. Then execute the workflow and time how long it takes compared to your old process.',
                starterPrompt: 'Help me design an efficient AI workflow for [your recurring task]. I currently have access to [list your AI tools]. Break it into steps and suggest which tool to use at each step.',
                hint: 'Choose a task you do at least weekly. The time savings compound fast. Good candidates: writing reports, preparing presentations, researching topics, or creating social media content.'
              }
            },
            {
              id: 'w2-m1-l3',
              title: 'Lesson 3: Free vs Paid Tools',
              slides: [
                {
                  title: 'Getting Maximum Value from Free AI',
                  content: '<p>You can accomplish a LOT with free AI tools. Here\'s what\'s available at no cost:</p><ul><li><strong>ChatGPT Free:</strong> GPT-3.5, unlimited messages, basic features</li><li><strong>Claude Free:</strong> Limited messages per day, full Claude capabilities</li><li><strong>Gemini Free:</strong> Full access through Google, integrated with search</li><li><strong>Perplexity Free:</strong> 5 Pro searches per day, unlimited basic</li><li><strong>Canva Free:</strong> Basic AI design features</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#dcfce7;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px">ChatGPT Free</span><span style="background:#16a34a;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">$0/mo</span></div><div style="background:#dcfce7;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px">Claude Free</span><span style="background:#16a34a;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">$0/mo</span></div><div style="background:#dcfce7;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px">Gemini Free</span><span style="background:#16a34a;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">$0/mo</span></div><div style="background:#dcfce7;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px">Perplexity Free</span><span style="background:#16a34a;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">$0/mo</span></div></div>'
                },
                {
                  title: 'When Paid Tools Are Worth It',
                  content: '<p>Paid tiers are worth the investment when:</p><ul><li><strong>You hit usage limits:</strong> Free tiers often limit messages or features</li><li><strong>You need advanced models:</strong> GPT-4, Claude 3.5 Sonnet have noticeably better quality</li><li><strong>Time savings justify cost:</strong> If a $20/mo tool saves 5 hours/month, that\'s $4/hour — a bargain</li><li><strong>You need specific features:</strong> File uploads, image generation, API access</li></ul><p><strong>Calculate your ROI:</strong> Hours saved × your hourly rate = value of the tool.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">💰 ROI Calculator</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">If ChatGPT Plus ($20/mo) saves you 5 hours/month, and your time is worth $30/hour, you\'re saving $150 for $20. That\'s a <strong>7.5x return</strong>.</p></div>'
                },
                {
                  title: 'Smart Spending Strategy',
                  content: '<p>A practical approach to AI tool spending:</p><ul><li><strong>Month 1:</strong> Use only free tools. Learn what\'s possible.</li><li><strong>Month 2:</strong> Identify your most-used tool. Upgrade that ONE tool to paid.</li><li><strong>Month 3:</strong> Evaluate if you need a second paid tool.</li><li><strong>Ongoing:</strong> Review monthly — cancel tools you don\'t use regularly.</li></ul><p>Most people get 80% of their AI value from just 1-2 paid tools.</p>'
                },
                {
                  title: 'Maximizing Free Tier Value',
                  content: '<p>Pro tips for getting the most from free tiers:</p><ul><li><strong>Rotate between free tools:</strong> When you hit a limit on one, switch to another</li><li><strong>Batch your requests:</strong> Combine multiple questions into one prompt</li><li><strong>Save your best prompts:</strong> Don\'t waste messages rediscovering what works</li><li><strong>Use browser extensions:</strong> Many free AI extensions add AI to your existing tools</li></ul>'
                }
              ],
              objectives: [
                'Identify the best free AI tools for different tasks',
                'Calculate ROI to determine when paid upgrades are worthwhile',
                'Apply a smart spending strategy for AI tools',
                'Maximize value from free-tier AI tools'
              ],
              notes: 'You can accomplish impressive work with free AI tools alone. ChatGPT, Claude, Gemini, and Perplexity all offer free tiers that are surprisingly capable. The key is knowing how to maximize these free tiers through batching, rotation, and saved prompts.\n\nWhen considering paid tools, calculate the ROI: hours saved × your hourly rate. Most professionals find that even one $20/month subscription pays for itself within the first week through time savings.\n\nPractical tip: Start with free tools for at least a month before spending any money. This lets you understand what you actually need vs. what looks shiny. When you do upgrade, start with the tool you use most frequently — that\'s where paid features will have the biggest impact.',
              resources: [
                { title: 'Best Free AI Tools in 2024', url: '#', type: 'article' },
                { title: 'AI Tool ROI Calculator', url: '#', type: 'tool' },
                { title: 'Free vs Paid AI: Is It Worth Upgrading?', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Create a personal AI budget plan. List all AI tools you use or want to use, their free/paid pricing, estimated time savings per week, and calculate the monthly ROI for each. Determine which (if any) tools are worth upgrading.',
                starterPrompt: 'Help me create a cost-benefit analysis for AI tools. My hourly rate is approximately $[X]. Here are the tools I\'m considering: [list tools]. For each, estimate the typical time savings per week and calculate the monthly ROI.',
                hint: 'Be honest about how much time each tool actually saves you. A tool that saves 30 minutes per day is worth much more than one that saves 30 minutes per month. Don\'t forget to factor in learning time.'
              }
            }
          ]
        },
        {
          id: 'w2-m2',
          title: 'Module 2: Workflow Automation',
          lessons: [
            {
              id: 'w2-m2-l1',
              title: 'Lesson 1: Identifying Repetitive Tasks',
              slides: [
                {
                  title: 'Finding Your Automation Opportunities',
                  content: '<p>The first step in workflow automation is identifying tasks that are <strong>repetitive, time-consuming, and rule-based</strong>. These are prime candidates for AI automation.</p><ul><li><strong>Daily tasks:</strong> Email responses, data entry, status updates</li><li><strong>Weekly tasks:</strong> Reports, meeting prep, content scheduling</li><li><strong>Monthly tasks:</strong> Invoicing, performance reviews, analytics</li></ul><p>Track your time for one week to find your biggest time sinks.</p>',
                  visual: '<div style="background:#fff5f5;border:2px solid #e74c3c;padding:16px;border-radius:12px"><div style="font-size:12px;color:#e74c3c;font-weight:bold;margin-bottom:8px">TIME AUDIT: WHERE DOES YOUR TIME GO?</div><div style="display:flex;flex-direction:column;gap:4px"><div style="background:#e74c3c;color:#fff;padding:6px 12px;border-radius:4px;width:90%;font-size:12px">📧 Email: 2.5 hrs/day</div><div style="background:#f39c12;color:#fff;padding:6px 12px;border-radius:4px;width:70%;font-size:12px">📝 Reports: 1.5 hrs/day</div><div style="background:#f1c40f;color:#1a0533;padding:6px 12px;border-radius:4px;width:50%;font-size:12px">📊 Data Entry: 1 hr/day</div><div style="background:#fef9c3;padding:6px 12px;border-radius:4px;width:30%;font-size:12px">📅 Scheduling: 30 min/day</div></div></div>'
                },
                {
                  title: 'The Automation Scorecard',
                  content: '<p>Rate each repetitive task on these criteria to prioritize automation:</p><ul><li><strong>Frequency:</strong> How often? (Daily = high priority)</li><li><strong>Time cost:</strong> How long each time? (30+ min = high priority)</li><li><strong>Complexity:</strong> How rule-based? (Simple rules = easy to automate)</li><li><strong>Impact:</strong> What happens if it\'s late/wrong? (Low risk = safe to automate first)</li></ul><p>Start automating tasks that are high-frequency, time-consuming, rule-based, and low-risk.</p>'
                },
                {
                  title: 'Your Task Automation Map',
                  content: '<p>Categorize your tasks into three automation buckets:</p><ul><li><strong>🟢 Fully automate:</strong> Template responses, data formatting, scheduling reminders</li><li><strong>🟡 Partially automate:</strong> Draft emails (you review), report generation (you verify), research (you curate)</li><li><strong>🔴 Keep manual:</strong> Strategic decisions, sensitive communications, creative direction</li></ul><p>Most tasks fall into the "partially automate" category — AI does the heavy lifting, you add the finishing touch.</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:8px"><div style="background:#dcfce7;border-left:4px solid #16a34a;padding:10px 14px;border-radius:0 6px 6px 0"><strong style="color:#16a34a">🟢 Fully Automate</strong><div style="font-size:12px;margin-top:4px">Templates, formatting, reminders</div></div><div style="background:#fefce8;border-left:4px solid #eab308;padding:10px 14px;border-radius:0 6px 6px 0"><strong style="color:#854d0e">🟡 Partially Automate</strong><div style="font-size:12px;margin-top:4px">Drafts, reports, research</div></div><div style="background:#fef2f2;border-left:4px solid #dc2626;padding:10px 14px;border-radius:0 6px 6px 0"><strong style="color:#dc2626">🔴 Keep Manual</strong><div style="font-size:12px;margin-top:4px">Strategy, sensitive comms, creative</div></div></div>'
                },
                {
                  title: 'Quick Wins: Automate Today',
                  content: '<p>Here are 5 tasks you can start automating with AI right now:</p><ul><li><strong>Email replies:</strong> Use AI to draft responses, you review and send</li><li><strong>Meeting notes:</strong> Paste transcripts, ask AI to extract action items</li><li><strong>Data summarization:</strong> Paste raw data, ask AI for key insights</li><li><strong>Content outlines:</strong> Describe your topic, get a structured outline</li><li><strong>Task prioritization:</strong> List your tasks, ask AI to prioritize by impact</li></ul>'
                }
              ],
              objectives: [
                'Conduct a personal time audit to find automation opportunities',
                'Score tasks using the automation priority framework',
                'Categorize tasks into full, partial, and manual automation',
                'Identify quick-win automations to start immediately'
              ],
              notes: 'The key to successful automation is starting with the right tasks. Use the automation scorecard to evaluate each repetitive task: high frequency + high time cost + rule-based + low risk = ideal automation candidate.\n\nMost tasks should be partially automated rather than fully automated. AI handles the heavy lifting (drafting, formatting, analyzing), while you add the final touch (review, personalize, approve). This gives you speed without sacrificing quality.\n\nPractical tip: This week, track every task you do and how long it takes. At the end of the week, identify your top 3 time sinks. These are your first automation targets.',
              resources: [
                { title: 'The Automation Scorecard Template', url: '#', type: 'tool' },
                { title: 'Finding Your First AI Automation', url: '#', type: 'article' },
                { title: 'Time Audit Spreadsheet Template', url: '#', type: 'guide' }
              ],
              exercise: {
                task: 'Conduct a 1-day time audit. Track every work task, how long it takes, and how often you do it. Then use the automation scorecard to rank your top 5 automation candidates. Pick one and automate it with AI today.',
                starterPrompt: 'Help me create a time audit template for tracking my daily tasks. I need columns for: task name, time spent, frequency (daily/weekly/monthly), complexity (1-5), and automation potential (high/medium/low).',
                hint: 'Be brutally honest about where your time goes. Many people discover they spend 2+ hours/day on tasks that AI could handle in minutes. Focus on the tasks that happen most frequently — even saving 5 minutes on a daily task equals 20+ hours per year.'
              }
            },
            {
              id: 'w2-m2-l2',
              title: 'Lesson 2: Automating with AI',
              slides: [
                {
                  title: 'AI Automation Without Code',
                  content: '<p>You don\'t need to be a programmer to automate tasks with AI. Three approaches:</p><ul><li><strong>Chat-based automation:</strong> Create templates and saved prompts for recurring tasks</li><li><strong>No-code platforms:</strong> Zapier, Make.com, IFTTT with AI integrations</li><li><strong>Built-in AI features:</strong> Gmail Smart Compose, Notion AI, Excel AI</li></ul><p>Start with the simplest approach that solves your problem.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center"><div style="background:#dcfce7;padding:10px;border-radius:8px;text-align:center;flex:1;min-width:80px"><div style="font-size:12px;font-weight:bold;color:#16a34a">Easy</div><div style="font-size:11px">Saved Prompts</div></div><span>→</span><div style="background:#fefce8;padding:10px;border-radius:8px;text-align:center;flex:1;min-width:80px"><div style="font-size:12px;font-weight:bold;color:#854d0e">Medium</div><div style="font-size:11px">No-Code Tools</div></div><span>→</span><div style="background:#fef2f2;padding:10px;border-radius:8px;text-align:center;flex:1;min-width:80px"><div style="font-size:12px;font-weight:bold;color:#dc2626">Advanced</div><div style="font-size:11px">API Integration</div></div></div>'
                },
                {
                  title: 'Building Prompt Templates',
                  content: '<p>The simplest automation: create <strong>reusable prompt templates</strong> with fill-in-the-blank variables:</p><p><code>You are a [ROLE]. I need to [TASK] for [AUDIENCE]. The key points are: [POINTS]. Write it in [TONE] tone, keeping it under [LENGTH] words. Format as [FORMAT].</code></p><p>Save your best templates in a document or note app. When you need to use one, just fill in the blanks and paste into AI.</p>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px">TEMPLATE EXAMPLE</div><div style="background:#fff;padding:12px;border-radius:8px;font-size:12px;border:1px solid #e9d5ff;font-family:monospace">You are a <span style="background:#e9d5ff;padding:1px 4px;border-radius:2px">[ROLE]</span>.<br>I need to <span style="background:#fecaca;padding:1px 4px;border-radius:2px">[TASK]</span><br>for <span style="background:#dcfce7;padding:1px 4px;border-radius:2px">[AUDIENCE]</span>.<br>Key points: <span style="background:#fefce8;padding:1px 4px;border-radius:2px">[POINTS]</span><br>Tone: <span style="background:#dbeafe;padding:1px 4px;border-radius:2px">[TONE]</span><br>Length: <span style="background:#fce7f3;padding:1px 4px;border-radius:2px">[LENGTH]</span></div></div>'
                },
                {
                  title: 'No-Code Automation Platforms',
                  content: '<p>Platforms like <strong>Zapier</strong> and <strong>Make.com</strong> let you connect AI to your other tools:</p><ul><li><strong>Trigger:</strong> When something happens (new email, form submission, calendar event)</li><li><strong>AI Action:</strong> Process with AI (summarize, classify, draft response)</li><li><strong>Result:</strong> Do something with the output (send email, update spreadsheet, post to Slack)</li></ul><p>Example: New customer inquiry → AI drafts personalized response → You review and send.</p>'
                },
                {
                  title: 'Building Your First Automation',
                  content: '<p>Follow these steps to create your first AI automation:</p><ul><li><strong>Step 1:</strong> Pick one repetitive task from your audit</li><li><strong>Step 2:</strong> Write the AI prompt that handles it</li><li><strong>Step 3:</strong> Test the prompt 5 times with different inputs</li><li><strong>Step 4:</strong> Refine until the output is consistently good</li><li><strong>Step 5:</strong> Save as a template or set up in a no-code platform</li></ul><p>Start simple. Your first automation doesn\'t need to be perfect — it just needs to save you time.</p>'
                }
              ],
              objectives: [
                'Build reusable prompt templates for recurring tasks',
                'Understand no-code automation platforms like Zapier',
                'Design trigger-action automation workflows',
                'Create your first working AI automation'
              ],
              notes: 'AI automation doesn\'t require coding skills. The three levels are: saved prompt templates (simplest), no-code platforms like Zapier (intermediate), and custom API integrations (advanced). Start with prompt templates and graduate to no-code platforms as your needs grow.\n\nPrompt templates are the foundation of all AI automation. Create fill-in-the-blank templates for your most common tasks: email responses, report generation, data analysis, content creation. Save these in an organized document you can quickly access.\n\nPractical tip: This week, create 3 prompt templates for tasks you do regularly. Save them in a note app with clear titles. Every time you use one and improve it, update the template. Within a month, you\'ll have a powerful library of automation templates.',
              resources: [
                { title: 'Zapier AI Automation Guide', url: '#', type: 'guide' },
                { title: 'Prompt Template Library for Professionals', url: '#', type: 'tool' },
                { title: 'No-Code AI Automation Tutorial', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Create 3 reusable prompt templates for tasks you do regularly. Test each template with at least 2 different inputs. Save the templates with clear naming in a document.',
                starterPrompt: 'Template 1 - Weekly Status Update:\nYou are a professional communicator. Help me write a weekly status update email to my manager. This week I worked on: [TASKS]. Key achievements: [WINS]. Blockers: [ISSUES]. Next week priorities: [PLANS]. Keep it concise and professional.',
                hint: 'Good template candidates: status update emails, meeting agendas, client follow-ups, social media posts, or data analysis requests. Use [BRACKETS] for fill-in-the-blank variables.'
              }
            },
            {
              id: 'w2-m2-l3',
              title: 'Lesson 3: Email & Communication',
              slides: [
                {
                  title: 'AI-Powered Email Mastery',
                  content: '<p>Email is the #1 time sink for most professionals. AI can cut your email time by <strong>50-70%</strong>:</p><ul><li><strong>Drafting:</strong> AI writes the first draft, you personalize</li><li><strong>Replying:</strong> Paste incoming email, get a professional reply</li><li><strong>Summarizing:</strong> Condense long email threads into key points</li><li><strong>Tone adjustment:</strong> Make messages more professional, friendly, or direct</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#fef2f2;padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px">⏰</div><div style="font-size:20px;font-weight:bold;color:#dc2626">2.5 hrs</div><div style="font-size:12px">Without AI</div></div><div style="background:#dcfce7;padding:12px;border-radius:8px;text-align:center"><div style="font-size:24px">⚡</div><div style="font-size:20px;font-weight:bold;color:#16a34a">45 min</div><div style="font-size:12px">With AI</div></div></div>'
                },
                {
                  title: 'Email Templates That Work',
                  content: '<p>Copy these proven email prompt templates:</p><ul><li><strong>Reply:</strong> <code>"Read this email and draft a professional reply that [goal]. Tone: [formal/casual]. Max 150 words. [paste email]"</code></li><li><strong>Follow-up:</strong> <code>"Write a friendly follow-up email. Context: [situation]. I last contacted them [when]. Goal: [what you want]."</code></li><li><strong>Difficult message:</strong> <code>"Help me write an email addressing [issue] with [person]. I want to be [firm but kind]. Include a proposed solution."</code></li></ul>'
                },
                {
                  title: 'AI for Team Communication',
                  content: '<p>Beyond email, AI improves all professional communication:</p><ul><li><strong>Slack/Teams messages:</strong> Quick, clear, appropriate tone</li><li><strong>Meeting agendas:</strong> Structured and purposeful</li><li><strong>Status updates:</strong> Concise and informative</li><li><strong>Feedback delivery:</strong> Constructive and specific</li></ul><p>The key: use AI to draft, then add your personal touch. People can tell when communication is 100% AI-generated.</p>'
                },
                {
                  title: 'Communication Automation Workflows',
                  content: '<p>Set up these communication workflows:</p><ul><li><strong>Morning email triage:</strong> Paste all new emails → AI categorizes by priority and drafts responses for routine ones</li><li><strong>Meeting follow-ups:</strong> Paste meeting notes → AI creates follow-up email with action items</li><li><strong>Weekly roundup:</strong> Paste your task list → AI creates a professional status update</li></ul><p>These three workflows alone can save 5+ hours per week.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">⏱️ Time Savings</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">Morning triage: 30 min saved/day<br>Meeting follow-ups: 15 min saved/meeting<br>Weekly roundup: 45 min saved/week<br><strong>Total: ~5 hours/week</strong></p></div>'
                }
              ],
              objectives: [
                'Cut email time by 50% using AI drafting and reply techniques',
                'Apply proven email prompt templates for common scenarios',
                'Automate team communication with AI workflows',
                'Set up morning email triage, meeting follow-ups, and status updates'
              ],
              notes: 'Email and communication are the biggest time sinks in most professional roles. AI can dramatically reduce this burden by drafting replies, summarizing threads, adjusting tone, and creating templates for recurring messages.\n\nThe three highest-impact communication automations are: morning email triage (categorize and draft responses to routine emails), meeting follow-ups (convert notes to action items and send), and weekly status updates (transform task lists into professional reports).\n\nPractical tip: Tomorrow morning, try AI-assisted email triage. Copy your 5 most recent emails into ChatGPT and ask it to: 1) Prioritize them, 2) Draft replies for the routine ones, 3) Suggest responses for the complex ones. Time how long this takes vs. your usual approach.',
              resources: [
                { title: 'The AI Email Playbook', url: '#', type: 'guide' },
                { title: 'Professional Communication with AI', url: '#', type: 'article' },
                { title: 'Email Automation Templates', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Set up your morning email triage workflow: 1) Copy 5 emails from your inbox into AI, 2) Ask it to prioritize and categorize them, 3) Have it draft replies for the routine ones, 4) Review and send. Time how long the process takes and compare to your usual approach.',
                starterPrompt: 'You are my executive assistant. Here are 5 emails I received today. For each one: 1) Classify priority (High/Medium/Low), 2) Summarize in one sentence, 3) Draft a reply if it\'s routine, 4) Flag if it needs my personal attention.\n\nEmail 1: [paste]\nEmail 2: [paste]...',
                hint: 'For the first try, use emails that aren\'t sensitive. Get comfortable with the workflow using low-stakes messages before applying it to important ones.'
              }
            },
            {
              id: 'w2-m2-l4',
              title: 'Lesson 4: Data Processing',
              slides: [
                {
                  title: 'AI for Data Analysis',
                  content: '<p>AI can transform how you work with data — no spreadsheet formulas needed:</p><ul><li><strong>Cleaning:</strong> Fix formatting, remove duplicates, standardize entries</li><li><strong>Analyzing:</strong> Find patterns, trends, and outliers</li><li><strong>Visualizing:</strong> Suggest chart types and create descriptions</li><li><strong>Summarizing:</strong> Turn raw data into narrative insights</li></ul><p>Just paste your data into AI and ask questions about it.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center"><span style="background:#e74c3c;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">📊 Raw Data</span><span>→</span><span style="background:#f39c12;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">🧹 Clean</span><span>→</span><span style="background:#f1c40f;color:#1a0533;padding:8px 14px;border-radius:6px;font-size:12px">🔍 Analyze</span><span>→</span><span style="background:#27ae60;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">💡 Insights</span></div>'
                },
                {
                  title: 'Data Analysis Prompts',
                  content: '<p>Use these prompt templates for common data tasks:</p><ul><li><strong>Pattern finding:</strong> <code>"Analyze this data and identify the top 3 trends or patterns: [paste data]"</code></li><li><strong>Comparison:</strong> <code>"Compare these two datasets and highlight the key differences: [paste both]"</code></li><li><strong>Summary:</strong> <code>"Summarize this data into 5 key insights suitable for a presentation to executives"</code></li><li><strong>Recommendations:</strong> <code>"Based on this data, what are your top 3 recommendations? [paste data]"</code></li></ul>'
                },
                {
                  title: 'Working with Spreadsheet Data',
                  content: '<p>AI is excellent at working with tabular data. You can:</p><ul><li>Paste CSV data directly into the chat</li><li>Ask AI to write Excel/Google Sheets formulas</li><li>Have AI explain complex formulas</li><li>Get AI to suggest data visualizations</li></ul><p><strong>Pro tip:</strong> When pasting data, include column headers and a few rows. Ask AI: <code>"What interesting insights can you find in this data?"</code></p>'
                },
                {
                  title: 'Turning Data into Stories',
                  content: '<p>The most valuable data skill is <strong>data storytelling</strong> — turning numbers into narratives:</p><p><code>"Here is our quarterly sales data. Write a 3-paragraph narrative summary that: 1) Highlights the main trend, 2) Explains what drove it, 3) Recommends next steps. Write it for a non-technical audience."</code></p><p>AI excels at this because it can quickly identify patterns AND communicate them clearly — combining analytical and writing skills.</p>',
                  visual: '<div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#6c3ce0">📊 → 📖 Data to Story</p><p style="margin:8px 0 0;font-size:13px">Numbers alone don\'t persuade. Stories backed by data do. Use AI to transform raw data into compelling narratives that drive decisions.</p></div>'
                }
              ],
              objectives: [
                'Use AI to clean, analyze, and summarize data without coding',
                'Apply data analysis prompt templates for common scenarios',
                'Work with spreadsheet data using AI assistance',
                'Transform raw data into compelling narratives and insights'
              ],
              notes: 'AI democratizes data analysis — you no longer need advanced Excel skills or coding knowledge to extract insights from data. Just paste your data into AI and ask questions. AI can find patterns, compare datasets, and turn numbers into stories.\n\nThe most valuable skill is data storytelling: using AI to transform raw data into clear narratives that non-technical audiences can understand and act on. This is where AI truly shines — combining analytical pattern-finding with natural language communication.\n\nPractical tip: Next time you have a spreadsheet to analyze, try pasting a sample into AI before reaching for pivot tables or formulas. Ask: "What are the 3 most interesting things about this data?" You\'ll be surprised how quickly AI can surface insights.',
              resources: [
                { title: 'AI Data Analysis for Non-Technical Users', url: '#', type: 'guide' },
                { title: 'Data Storytelling with AI', url: '#', type: 'article' },
                { title: 'Excel Formula Generator (AI-Powered)', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Find a dataset you work with regularly (sales figures, grades, expenses, survey results). Paste a sample into AI and ask it to: 1) Identify 3 key patterns, 2) Create a narrative summary for a non-technical audience, 3) Suggest 3 actions based on the data, 4) Recommend the best chart type for presenting each insight.',
                starterPrompt: 'I\'m going to share some data with you. Please analyze it and provide: 1) Three key patterns or trends you notice, 2) A 2-paragraph narrative summary suitable for a presentation, 3) Three actionable recommendations based on the data.\n\nHere\'s the data:\n[paste your data]',
                hint: 'Include column headers when pasting data. If you don\'t have real data, create a sample: monthly expenses, daily step counts, or weekly study hours. The key is practicing the data → insights → narrative workflow.'
              }
            }
          ]
        },
        {
          id: 'w2-m3',
          title: 'Module 3: AI-Powered Content Creation',
          lessons: [
            {
              id: 'w2-m3-l1',
              title: 'Lesson 1: Writing at Scale',
              slides: [
                {
                  title: 'The Content Multiplication Framework',
                  content: '<p>AI enables you to produce <strong>10x more content</strong> without sacrificing quality. The secret is a systematic approach:</p><ul><li><strong>Pillar content:</strong> Create one in-depth piece (article, guide, or video script)</li><li><strong>Derivative content:</strong> AI transforms it into multiple formats</li><li><strong>Platform optimization:</strong> AI adapts tone and format for each platform</li></ul><p>One pillar piece can become 10+ pieces of content across platforms.</p>',
                  visual: '<div style="text-align:center"><div style="background:#e74c3c;color:#fff;padding:12px 24px;border-radius:8px;display:inline-block;margin-bottom:8px;font-weight:bold">📝 1 Pillar Article</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:4px"><div style="background:#f39c12;color:#fff;padding:6px;border-radius:6px;font-size:11px">🐦 5 Tweets</div><div style="background:#f39c12;color:#fff;padding:6px;border-radius:6px;font-size:11px">💼 LinkedIn Post</div><div style="background:#f39c12;color:#fff;padding:6px;border-radius:6px;font-size:11px">📧 Newsletter</div><div style="background:#f1c40f;color:#1a0533;padding:6px;border-radius:6px;font-size:11px">📱 Instagram</div><div style="background:#f1c40f;color:#1a0533;padding:6px;border-radius:6px;font-size:11px">��️ Podcast Notes</div><div style="background:#f1c40f;color:#1a0533;padding:6px;border-radius:6px;font-size:11px">📊 Infographic</div></div></div>'
                },
                {
                  title: 'Creating Quality at Speed',
                  content: '<p>The key to scaling writing with AI while maintaining quality:</p><ul><li><strong>Clear brief:</strong> Give AI a detailed content brief with audience, goal, and key points</li><li><strong>Brand voice:</strong> Provide examples of your writing style for AI to match</li><li><strong>Structured review:</strong> Always edit AI drafts — add personal stories, fix inaccuracies, inject personality</li><li><strong>Templates:</strong> Build templates for each content type you create regularly</li></ul>'
                },
                {
                  title: 'Blog Post Factory',
                  content: '<p>A complete AI-assisted blog post workflow:</p><ul><li><strong>Step 1 — Ideation:</strong> <code>"Give me 10 blog post ideas about [niche] for [audience]"</code></li><li><strong>Step 2 — Outline:</strong> <code>"Create a detailed outline for: [chosen topic]. Include intro, 5 main sections, and conclusion"</code></li><li><strong>Step 3 — Draft:</strong> <code>"Write section 1 of this outline in a [tone] voice. Include examples and actionable tips."</code></li><li><strong>Step 4 — Polish:</strong> <code>"Review this draft. Improve clarity, add transitions, and make the opening more engaging."</code></li></ul>'
                },
                {
                  title: 'Maintaining Your Authentic Voice',
                  content: '<p>The biggest risk of AI content: sounding generic. Here\'s how to keep your voice:</p><ul><li><strong>Feed your style:</strong> Give AI 2-3 samples of your best writing and say "match this tone"</li><li><strong>Add personal elements:</strong> Always add your own stories, opinions, and experiences</li><li><strong>Edit aggressively:</strong> Cut AI clichés like "in today\'s fast-paced world" or "dive deep"</li><li><strong>The 80/20 rule:</strong> AI gives you 80% of the draft, you add the 20% that makes it yours</li></ul>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">✍️ The 80/20 Rule</p><p style="margin:8px 0 0;font-size:13px;color:#166534">AI provides 80% — structure, research, and first draft. You provide 20% — voice, stories, opinions, and editing. That 20% is what makes content truly yours.</p></div>'
                }
              ],
              objectives: [
                'Apply the Content Multiplication Framework to scale output',
                'Build an AI-assisted blog post workflow from ideation to polish',
                'Maintain your authentic voice while using AI for drafting',
                'Create content templates for different types and platforms'
              ],
              notes: 'The Content Multiplication Framework is the foundation of scaling your content: create one pillar piece, then use AI to transform it into multiple formats for different platforms. One blog post can become 5 tweets, a LinkedIn post, a newsletter segment, Instagram captions, and more.\n\nThe critical skill is maintaining your authentic voice. AI can create technically correct content, but it lacks your personal stories, unique perspective, and authentic voice. The 80/20 rule applies: let AI handle 80% of the structure and drafting, then add the 20% that makes it uniquely yours.\n\nPractical tip: Before using AI to write anything, share 2-3 samples of your best writing and ask it to analyze your style. Then instruct it to match that style in future drafts.',
              resources: [
                { title: 'The Content Multiplication Playbook', url: '#', type: 'guide' },
                { title: 'AI Content Creation: Quality at Scale', url: '#', type: 'article' },
                { title: 'Brand Voice Template for AI', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Create one pillar piece of content (a blog post or detailed article on a topic you know well) using the AI-assisted workflow: ideation → outline → draft → polish. Then use AI to transform it into 3 other formats (tweet thread, LinkedIn post, and newsletter intro).',
                starterPrompt: 'Help me create a comprehensive blog post about [your topic]. My audience is [describe audience]. My writing style is [describe]. Let\'s start with 10 title ideas, then we\'ll pick one and create an outline.',
                hint: 'Pick a topic you genuinely know about — your expertise shows through AI-generated content. After AI creates each derivative piece, spend 2 minutes adding personal touches and removing any generic AI phrases.'
              }
            },
            {
              id: 'w2-m3-l2',
              title: 'Lesson 2: Visual Content with AI',
              slides: [
                {
                  title: 'AI Visual Content Creation',
                  content: '<p>AI can now help create visual content even if you have zero design skills:</p><ul><li><strong>Image generation:</strong> DALL-E, Midjourney, Stable Diffusion</li><li><strong>Design assistance:</strong> Canva AI, Adobe Firefly</li><li><strong>Presentation design:</strong> Gamma, Beautiful.ai, SlidesAI</li><li><strong>Diagrams & charts:</strong> AI-powered data visualization tools</li></ul><p>Visual content gets <strong>94% more views</strong> than text-only content.</p>'
                },
                {
                  title: 'AI Image Generation Basics',
                  content: '<p>Creating images with AI follows the same principles as text prompting:</p><ul><li><strong>Subject:</strong> What is the main focus?</li><li><strong>Style:</strong> Photography, illustration, watercolor, 3D render?</li><li><strong>Mood:</strong> Bright, dark, professional, playful?</li><li><strong>Composition:</strong> Close-up, wide shot, centered?</li></ul><p>Example: <code>"A professional flat-lay photo of a modern workspace with a laptop, coffee cup, and notebook, bright natural lighting, minimal style, top-down view"</code></p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#e74c3c;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><strong>Subject</strong><br>What to show</div><div style="background:#f39c12;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><strong>Style</strong><br>How it looks</div><div style="background:#27ae60;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><strong>Mood</strong><br>How it feels</div><div style="background:#2980b9;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><strong>Composition</strong><br>How it\'s framed</div></div>'
                },
                {
                  title: 'AI-Powered Presentations',
                  content: '<p>Tools like Gamma and Beautiful.ai can create entire presentations from a prompt:</p><ul><li><strong>Gamma:</strong> Generate full presentations with AI — just describe your topic and audience</li><li><strong>SlidesAI:</strong> Google Slides add-on that creates slides from text</li><li><strong>ChatGPT:</strong> Generate slide outlines, talking points, and speaker notes</li></ul><p>Even if you don\'t use AI presentation tools, use chat AI to create outlines and talking points for every presentation.</p>'
                },
                {
                  title: 'Visual Content Strategy',
                  content: '<p>Integrate visual AI into your content workflow:</p><ul><li><strong>Social media:</strong> Create eye-catching images for every post</li><li><strong>Blog posts:</strong> Generate custom header images and in-article illustrations</li><li><strong>Emails:</strong> Design simple graphics to improve engagement</li><li><strong>Presentations:</strong> Create professional slides in minutes, not hours</li></ul><p><strong>Remember:</strong> Visual AI is a starting point. Always review generated images for accuracy, appropriateness, and brand alignment.</p>'
                }
              ],
              objectives: [
                'Use AI image generation tools with effective prompts',
                'Create AI-powered presentations quickly',
                'Integrate visual content into your overall content strategy',
                'Understand the strengths and limitations of visual AI'
              ],
              notes: 'AI visual content creation has made professional-quality design accessible to everyone. You can generate custom images, create presentations, and design graphics without any design training.\n\nThe key to good AI visual content is the same as text: specific prompts. Include subject, style, mood, and composition details for the best results. And always review AI-generated visuals — they can sometimes produce artifacts, incorrect text, or inappropriate content.\n\nPractical tip: Try Canva AI for simple design tasks — it has a very low learning curve and produces professional results. For presentations, try Gamma (gamma.app) which can create a full presentation from a single paragraph description.',
              resources: [
                { title: 'AI Image Generation for Beginners', url: '#', type: 'guide' },
                { title: 'Prompt Writing for Image AI', url: '#', type: 'article' },
                { title: 'Canva AI Tutorial', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Create 3 pieces of visual content using AI tools: 1) A social media image using an AI image generator or Canva AI, 2) A simple presentation outline (5 slides) using ChatGPT, 3) A data visualization concept for a dataset you work with.',
                starterPrompt: 'Help me create a detailed image prompt for a social media post about [your topic]. The image should be eye-catching, professional, and suitable for [platform]. Describe the ideal image in terms of subject, style, colors, and composition.',
                hint: 'For AI image generation, be very specific about style and mood. "A photo" vs "a flat illustration" vs "a watercolor painting" produces completely different results. Add details about colors, lighting, and perspective.'
              }
            },
            {
              id: 'w2-m3-l3',
              title: 'Lesson 3: Social Media Strategy',
              slides: [
                {
                  title: 'AI-Powered Social Media',
                  content: '<p>AI transforms social media management from hours of work to minutes:</p><ul><li><strong>Content ideation:</strong> Generate months of content ideas in minutes</li><li><strong>Post writing:</strong> Create platform-specific posts with optimized formatting</li><li><strong>Scheduling:</strong> AI suggests best posting times</li><li><strong>Engagement:</strong> Draft replies to comments and messages</li></ul><p>The key is adapting your message for each platform\'s unique style and audience.</p>',
                  visual: '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px"><div style="background:#1DA1F2;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:11px"><div style="font-size:16px">🐦</div>Twitter/X<br>Short, punchy</div><div style="background:#0077B5;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:11px"><div style="font-size:16px">💼</div>LinkedIn<br>Professional, stories</div><div style="background:#E4405F;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:11px"><div style="font-size:16px">📸</div>Instagram<br>Visual, hashtags</div></div>'
                },
                {
                  title: 'Content Calendar with AI',
                  content: '<p>Use AI to create a complete content calendar:</p><p><code>"Create a 30-day social media content calendar for [business/personal brand]. Include: post topic, platform (LinkedIn, Twitter, Instagram), post type (text, image, poll), and a one-sentence description of each post. Mix educational, entertaining, and promotional content in a 70-20-10 ratio."</code></p><p>This single prompt gives you a month of content direction in seconds.</p>'
                },
                {
                  title: 'Platform-Specific Writing',
                  content: '<p>Each platform has its own style. Train AI to match:</p><ul><li><strong>Twitter/X:</strong> <code>"Write a punchy tweet (under 280 chars) about [topic]. Use a hook + insight format. Include 1-2 relevant hashtags."</code></li><li><strong>LinkedIn:</strong> <code>"Write a LinkedIn post about [topic]. Start with a strong hook line. Include a personal story. End with a question. Use line breaks for readability."</code></li><li><strong>Instagram:</strong> <code>"Write an Instagram caption about [topic]. Start with an emoji, be conversational, include a call-to-action, and add 10 relevant hashtags."</code></li></ul>'
                },
                {
                  title: 'Engagement and Growth',
                  content: '<p>AI can help you engage with your audience more effectively:</p><ul><li><strong>Comment responses:</strong> AI drafts thoughtful replies to save time</li><li><strong>DM templates:</strong> Professional templates for common inquiries</li><li><strong>Trend analysis:</strong> Ask AI to analyze what content performs best and why</li><li><strong>Hashtag research:</strong> AI generates relevant hashtag sets for each post</li></ul><p><strong>Golden rule:</strong> AI helps you create more content, but genuine engagement still requires your authentic presence.</p>'
                }
              ],
              objectives: [
                'Create a 30-day AI-generated content calendar',
                'Write platform-specific social media posts',
                'Use AI for engagement and community management',
                'Build a sustainable social media workflow with AI'
              ],
              notes: 'AI makes consistent social media presence achievable even for solo creators and small teams. The content calendar prompt alone can save hours of planning time. Platform-specific writing prompts ensure your content fits the style expectations of each platform.\n\nThe most important principle is the 70-20-10 content mix: 70% educational/valuable content, 20% entertaining/engaging content, and 10% promotional content. AI can help you maintain this balance across all platforms.\n\nPractical tip: Create a master content calendar prompt that you run once a month. Then use daily prompts to flesh out each planned post. Batch-create a week\'s worth of posts in one sitting for maximum efficiency.',
              resources: [
                { title: 'AI Social Media Strategy Guide', url: '#', type: 'guide' },
                { title: 'Platform-Specific Prompt Templates', url: '#', type: 'tool' },
                { title: 'Growing Your Audience with AI Content', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Create a 1-week social media content calendar using AI. For each day, create: a post topic, the target platform, and the full post text. Include at least one post each for Twitter, LinkedIn, and Instagram.',
                starterPrompt: 'Create a 7-day social media content calendar for my [personal brand/business] in the [niche] space. My target audience is [describe]. For each day include: the platform, post type, full post text, and suggested hashtags. Mix the 70-20-10 rule.',
                hint: 'After generating the calendar, pick one post and iterate on it 3 times to see how much better it gets. Try asking: "Make the hook stronger", "Add a personal story angle", or "Make it more controversial/engaging".'
              }
            },
            {
              id: 'w2-m3-l4',
              title: 'Lesson 4: Content Repurposing',
              slides: [
                {
                  title: 'The Repurposing Multiplier',
                  content: '<p><strong>Content repurposing</strong> is the art of transforming one piece of content into many. AI makes this effortless:</p><ul><li>Blog post → Tweet thread + LinkedIn article + Newsletter</li><li>Podcast → Blog post + Social quotes + Video clips script</li><li>Presentation → Blog post + Infographic outline + Email series</li><li>Video → Blog post + Shorts script + Social media posts</li></ul><p>You should <strong>never create content that only lives in one format.</strong></p>'
                },
                {
                  title: 'Repurposing Prompt Templates',
                  content: '<p>Copy-paste these repurposing prompts:</p><ul><li><code>"Transform this blog post into a 10-tweet thread. Each tweet should stand alone as valuable insight. Number them 1/10 through 10/10. [paste post]"</code></li><li><code>"Convert this article into a professional LinkedIn post. Start with a hook, include the 3 key takeaways, and end with a question. [paste article]"</code></li><li><code>"Create 5 Instagram captions from this content, each highlighting a different angle. Include relevant emoji and hashtags. [paste content]"</code></li></ul>'
                },
                {
                  title: 'Cross-Platform Adaptation',
                  content: '<p>Each platform needs different treatment of the same content:</p><ul><li><strong>Twitter:</strong> Extract the most quotable insights, make them punchy</li><li><strong>LinkedIn:</strong> Add professional context, include a personal story</li><li><strong>Instagram:</strong> Focus on visual and emotional appeal, shorter text</li><li><strong>Email:</strong> More personal tone, include a clear call-to-action</li><li><strong>YouTube:</strong> Expand into script format with hooks and transitions</li></ul>'
                },
                {
                  title: 'Building a Content Machine',
                  content: '<p>The ultimate content workflow:</p><ul><li><strong>Monday:</strong> Create one pillar piece of content</li><li><strong>Tuesday:</strong> Use AI to repurpose into 5+ formats</li><li><strong>Wednesday-Friday:</strong> Schedule and publish derivatives</li><li><strong>Weekend:</strong> Review performance, plan next week\'s pillar</li></ul><p>This system means you only need <strong>one creative session per week</strong> to maintain an active presence across all platforms.</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#e74c3c;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Mon:</strong> Create 1 pillar piece 📝</div><div style="background:#f39c12;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Tue:</strong> AI repurpose into 5+ formats 🔄</div><div style="background:#f1c40f;color:#1a0533;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Wed-Fri:</strong> Schedule & publish 📅</div><div style="background:#27ae60;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Weekend:</strong> Review & plan 📊</div></div>'
                }
              ],
              objectives: [
                'Apply the content repurposing multiplier to any piece of content',
                'Use repurposing prompt templates for different platforms',
                'Adapt content for each platform\'s unique requirements',
                'Build a weekly content machine with one creative session'
              ],
              notes: 'Content repurposing is the highest-leverage content strategy. Instead of creating unique content for every platform (unsustainable), create one great pillar piece and use AI to transform it into platform-specific formats. This is how solo creators and small teams compete with large content teams.\n\nThe weekly content machine workflow (create Monday, repurpose Tuesday, publish Wednesday-Friday) means you only need one focused creative session per week to maintain an active presence everywhere.\n\nPractical tip: Start this week. Take your best recent blog post, article, or presentation and ask AI to transform it into a tweet thread, LinkedIn post, and newsletter intro. You\'ll be amazed at how quickly AI can adapt the content while maintaining the core message.',
              resources: [
                { title: 'The Content Repurposing Playbook', url: '#', type: 'guide' },
                { title: 'Repurposing Templates for Every Platform', url: '#', type: 'tool' },
                { title: 'One Piece, Ten Platforms: Content Strategy', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Take a piece of content you\'ve already created (blog post, email, presentation, or even a long comment) and use AI to repurpose it into 4 different formats for 4 different platforms. Compare how AI adapts the content for each platform.',
                starterPrompt: 'I have this content that I want to repurpose across multiple platforms: [paste your content]. Please transform it into: 1) A Twitter/X thread (5-7 tweets), 2) A LinkedIn post, 3) An Instagram caption, 4) An email newsletter intro paragraph.',
                hint: 'Feed AI the full original content for best results. After AI generates each format, spend 1 minute personalizing it — add your voice, remove generic phrases, and ensure the platform-specific conventions are right.'
              }
            }
          ]
        },
        {
          id: 'w2-m4',
          title: 'Module 4: Personal AI Systems',
          lessons: [
            {
              id: 'w2-m4-l1',
              title: 'Lesson 1: Building Your AI Toolkit',
              slides: [
                {
                  title: 'Your Personal AI Operating System',
                  content: '<p>By now, you\'ve learned many tools and techniques. It\'s time to build your <strong>personal AI operating system</strong> — a customized set of tools, templates, and workflows tailored to YOUR needs.</p><ul><li><strong>Core tools:</strong> Your primary AI chat + 2-3 specialized tools</li><li><strong>Template library:</strong> Saved prompts for recurring tasks</li><li><strong>Workflows:</strong> Multi-step processes for complex tasks</li><li><strong>Review system:</strong> Regular evaluation and improvement</li></ul>',
                  visual: '<div style="background:#f5f3ff;border:2px solid #6c3ce0;padding:16px;border-radius:12px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px;text-align:center">YOUR AI OPERATING SYSTEM</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#ede9fe;padding:8px;border-radius:6px;text-align:center;font-size:12px">🛠️ Core Tools</div><div style="background:#ede9fe;padding:8px;border-radius:6px;text-align:center;font-size:12px">📋 Templates</div><div style="background:#ede9fe;padding:8px;border-radius:6px;text-align:center;font-size:12px">⚡ Workflows</div><div style="background:#ede9fe;padding:8px;border-radius:6px;text-align:center;font-size:12px">🔄 Review System</div></div></div>'
                },
                {
                  title: 'Organizing Your Prompt Library',
                  content: '<p>Create an organized prompt library with these categories:</p><ul><li><strong>Communication:</strong> Email templates, message drafts, feedback templates</li><li><strong>Content:</strong> Blog posts, social media, presentations</li><li><strong>Analysis:</strong> Data analysis, research, decision-making</li><li><strong>Learning:</strong> Study guides, concept explanations, skill building</li><li><strong>Planning:</strong> Project plans, goal setting, strategy</li></ul><p>Store these in Notion, Google Docs, or any note app you use daily.</p>'
                },
                {
                  title: 'Designing Your Workflows',
                  content: '<p>Document your most valuable AI workflows:</p><ul><li><strong>Morning routine:</strong> Email triage → news summary → daily planning</li><li><strong>Content creation:</strong> Research → outline → draft → edit → publish</li><li><strong>Meeting prep:</strong> Agenda creation → research attendees → prepare talking points</li><li><strong>Weekly review:</strong> Summarize achievements → update goals → plan next week</li></ul><p>Written workflows become <strong>habits</strong> — and habits become superpowers.</p>'
                },
                {
                  title: 'Continuous Improvement',
                  content: '<p>Your AI toolkit should evolve as you do:</p><ul><li><strong>Weekly:</strong> Save any new prompt that worked well</li><li><strong>Monthly:</strong> Review and update your prompt templates</li><li><strong>Quarterly:</strong> Evaluate your tool stack — add or remove tools</li><li><strong>Ongoing:</strong> Try new AI features and tools as they launch</li></ul><p>The best AI users are <strong>lifelong experimenters</strong> who continuously refine their systems.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">🔄 Evolve Your System</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">Your AI toolkit should be a living system. What works today might be replaced by better tools tomorrow. Stay curious and keep experimenting.</p></div>'
                }
              ],
              objectives: [
                'Design a personal AI operating system tailored to your needs',
                'Create an organized prompt library with clear categories',
                'Document reusable AI workflows for your key tasks',
                'Establish a continuous improvement cycle for your AI toolkit'
              ],
              notes: 'Your personal AI operating system is the culmination of everything you\'ve learned. It\'s a customized combination of tools, templates, and workflows that fits your specific needs and working style.\n\nThe most successful AI users don\'t just know the tools — they have systems. They have organized prompt libraries, documented workflows, and regular review cycles. This systematic approach is what separates casual users from power users.\n\nPractical tip: Spend 1 hour this week setting up your prompt library. Create a document with categories (Communication, Content, Analysis, Learning, Planning) and start filling it with your best prompts. This investment pays dividends every day.',
              resources: [
                { title: 'Building Your Personal AI System', url: '#', type: 'guide' },
                { title: 'Prompt Library Organization Template', url: '#', type: 'tool' },
                { title: 'The AI Power User Playbook', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Build your personal AI toolkit document. Include: 1) Your core tool stack (which AI tools and why), 2) At least 5 saved prompt templates organized by category, 3) At least 2 documented workflows for tasks you do regularly, 4) A monthly review checklist.',
                starterPrompt: 'Help me create a structured AI toolkit document. My role is [your role] and my main tasks include [list tasks]. Suggest an organized structure for my prompt library, including categories and example templates for each.',
                hint: 'Think about the tasks you do most often. Those are where your toolkit will have the biggest impact. Start with your top 5 most frequent tasks and create a template for each.'
              }
            },
            {
              id: 'w2-m4-l2',
              title: 'Lesson 2: Custom Instructions & Memory',
              slides: [
                {
                  title: 'Making AI Remember You',
                  content: '<p>Most AI platforms offer <strong>custom instructions</strong> — a way to set persistent context so AI always knows about you:</p><ul><li><strong>ChatGPT:</strong> Custom Instructions in Settings</li><li><strong>Claude:</strong> Project Knowledge or system prompts</li><li><strong>Gemini:</strong> Extensions and connected apps</li></ul><p>Set up custom instructions once, and every conversation starts with AI already understanding your context.</p>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px">CUSTOM INSTRUCTIONS SETUP</div><div style="display:flex;flex-direction:column;gap:6px"><div style="background:#6c3ce0;color:#fff;padding:8px 12px;border-radius:6px;font-size:12px">👤 Who you are: role, industry, experience</div><div style="background:#8b5cf6;color:#fff;padding:8px 12px;border-radius:6px;font-size:12px">🎯 What you need: common tasks, goals</div><div style="background:#a78bfa;color:#fff;padding:8px 12px;border-radius:6px;font-size:12px">📐 How you want it: format, tone, style prefs</div><div style="background:#c4b5fd;color:#1a0533;padding:8px 12px;border-radius:6px;font-size:12px">⚠️ What to avoid: pet peeves, exclusions</div></div></div>'
                },
                {
                  title: 'Writing Great Custom Instructions',
                  content: '<p>Your custom instructions should include:</p><ul><li><strong>About you:</strong> <code>"I\'m a product manager at a SaaS startup. I work with engineers, designers, and customers daily."</code></li><li><strong>Preferences:</strong> <code>"I prefer concise responses with bullet points. Use practical examples over theory."</code></li><li><strong>Communication style:</strong> <code>"Be direct, skip unnecessary caveats. Use simple language."</code></li><li><strong>Common tasks:</strong> <code>"I frequently need help with PRDs, user stories, email drafts, and data analysis."</code></li></ul>'
                },
                {
                  title: 'Using Projects and Contexts',
                  content: '<p>Organize your AI work by project or context:</p><ul><li><strong>ChatGPT Projects:</strong> Group related conversations together</li><li><strong>Claude Projects:</strong> Upload reference documents for persistent context</li><li><strong>Separate contexts:</strong> Work AI vs. Personal AI vs. Learning AI</li></ul><p>Each project can have its own instructions, uploaded documents, and conversation history. This keeps your AI organized and contextually aware.</p>'
                },
                {
                  title: 'Building AI Memory',
                  content: '<p>Make AI more useful over time by building up context:</p><ul><li><strong>Style guide:</strong> Upload your writing samples and brand guidelines</li><li><strong>Knowledge base:</strong> Upload FAQs, product docs, or reference materials</li><li><strong>Feedback loop:</strong> Tell AI when it gets something right or wrong</li><li><strong>Corrections:</strong> <code>"In the future, always remember that [specific fact about your work]"</code></li></ul><p>The more context AI has about you and your work, the less prompting you need to do.</p>'
                }
              ],
              objectives: [
                'Set up custom instructions in your primary AI tool',
                'Organize AI work using projects and contexts',
                'Build persistent AI memory with documents and feedback',
                'Write effective custom instruction profiles'
              ],
              notes: 'Custom instructions are one of the most underused AI features. By setting up your profile once, you eliminate the need to repeat context in every conversation. This saves time and produces better, more personalized results.\n\nThe key sections of good custom instructions are: who you are (role, industry, experience), what you need (common tasks), how you want responses (format, tone, length preferences), and what to avoid (pet peeves like unnecessary disclaimers).\n\nPractical tip: Set up custom instructions today. Spend 10 minutes writing your profile and update it as you discover new preferences. Also explore Projects/Folders in your AI tool to organize different work contexts.',
              resources: [
                { title: 'Custom Instructions: The Complete Setup Guide', url: '#', type: 'guide' },
                { title: 'How to Use ChatGPT Custom Instructions', url: '#', type: 'video' },
                { title: 'Custom Instruction Templates by Role', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Write and set up custom instructions in your primary AI tool. Include all 4 components: about you, preferences, communication style, and common tasks. Test the difference by asking the same question with and without custom instructions.',
                starterPrompt: 'Help me write custom instructions for ChatGPT/Claude. Here\'s my context:\n- My role: [your role]\n- My industry: [industry]\n- My common tasks: [list tasks]\n- My preferences: [format/tone/style]\n- What I dislike in AI responses: [pet peeves]',
                hint: 'Be specific but concise in your custom instructions. Aim for 200-300 words total. Include specific formatting preferences like "use bullet points over paragraphs" or "always start with the bottom line".'
              }
            },
            {
              id: 'w2-m4-l3',
              title: 'Lesson 3: Measuring Productivity Gains',
              slides: [
                {
                  title: 'Tracking Your AI ROI',
                  content: '<p>To justify your investment in AI (time and money), you need to <strong>measure the impact</strong>:</p><ul><li><strong>Time saved:</strong> Track how long tasks take with vs. without AI</li><li><strong>Quality improved:</strong> Rate your output quality before and after AI</li><li><strong>Capacity increased:</strong> How much more can you produce?</li><li><strong>Skills unlocked:</strong> What can you do now that you couldn\'t before?</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#fef2f2;padding:12px;border-radius:8px;text-align:center"><div style="font-size:12px;color:#dc2626;font-weight:bold">Before AI</div><div style="font-size:24px;font-weight:bold;color:#dc2626">4 hrs</div><div style="font-size:12px">to write a report</div></div><div style="background:#dcfce7;padding:12px;border-radius:8px;text-align:center"><div style="font-size:12px;color:#16a34a;font-weight:bold">With AI</div><div style="font-size:24px;font-weight:bold;color:#16a34a">45 min</div><div style="font-size:12px">same quality report</div></div></div>'
                },
                {
                  title: 'Setting Up Your Tracking System',
                  content: '<p>Simple ways to track your AI productivity:</p><ul><li><strong>Time log:</strong> Note how long AI-assisted tasks take vs. your estimate without AI</li><li><strong>Output count:</strong> Track how many pieces of content, emails, or analyses you produce per week</li><li><strong>Quality score:</strong> Rate your output quality 1-10 before and after AI assistance</li><li><strong>New capabilities:</strong> List things you can now do that you couldn\'t before (e.g., data analysis, multilingual content)</li></ul>'
                },
                {
                  title: 'Common Productivity Benchmarks',
                  content: '<p>Here\'s what most people experience after 30 days of consistent AI use:</p><ul><li><strong>Email:</strong> 50-70% time reduction</li><li><strong>Content creation:</strong> 3-5x more output at similar quality</li><li><strong>Research:</strong> 60-80% faster to get up to speed on new topics</li><li><strong>Data analysis:</strong> Can now do analyses that previously required specialist skills</li><li><strong>Presentations:</strong> 40-60% faster from concept to finished deck</li></ul><p>Track your own benchmarks — they\'ll likely match or exceed these.</p>'
                },
                {
                  title: 'Sharing Your AI Success',
                  content: '<p>Document and share your AI wins:</p><ul><li><strong>With your team:</strong> Share time-saving techniques that help everyone</li><li><strong>With your manager:</strong> Quantify your productivity gains</li><li><strong>With your network:</strong> Position yourself as an AI-savvy professional</li></ul><p><strong>Week 2 Complete!</strong> You now have the skills to scale your productivity with AI. Next week: turning ideas into prototypes!</p>',
                  visual: '<div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#6c3ce0">🏆 Week 2 Complete!</p><p style="margin:8px 0 0;font-size:13px">You can now scale yourself with AI. You have tools, templates, workflows, and measurement systems. Next week: from ideas to real prototypes!</p></div>'
                }
              ],
              objectives: [
                'Set up a personal AI productivity tracking system',
                'Measure time saved, quality improved, and capacity increased',
                'Compare your results to common productivity benchmarks',
                'Document and share your AI productivity wins'
              ],
              notes: 'Measuring your AI productivity gains is essential for two reasons: it motivates you to keep using AI effectively, and it helps you justify the time and money investment to yourself, your team, and your manager.\n\nFocus on four metrics: time saved (the most obvious), quality improved (subtle but important), capacity increased (can you produce more?), and new capabilities unlocked (what can you do now that you couldn\'t before?).\n\nPractical tip: Start a simple weekly log. Each Friday, note: the top 3 tasks AI helped with, estimated time saved, and one "AI win of the week." After a month, you\'ll have compelling evidence of your AI productivity transformation.',
              resources: [
                { title: 'AI Productivity Measurement Framework', url: '#', type: 'guide' },
                { title: 'Weekly AI ROI Tracker Template', url: '#', type: 'tool' },
                { title: 'How to Present Your AI Impact to Leadership', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Create your personal AI Productivity Dashboard. Track 5 tasks you completed with AI this week: log the task, time taken with AI, estimated time without AI, quality rating (1-10), and what you learned. Calculate your total time savings.',
                starterPrompt: 'Help me create a weekly AI productivity tracker. I want to measure: task name, time with AI, estimated time without AI, quality score, and lessons learned. Create a template I can fill in each Friday.',
                hint: 'Be honest with your estimates. Some tasks AI speeds up dramatically (email, first drafts), while others show smaller gains (complex analysis, creative direction). Tracking helps you know where AI has the biggest impact.'
              }
            }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // WEEK 3 – Ideas to Prototypes
    // ──────────────────────────────────────────────
    {
      id: 'week-3',
      title: 'Week 3',
      name: 'Ideas to Prototypes',
      badge: 'upcoming',
      gradient: 'linear-gradient(135deg, #0c1b33 0%, #1a3a5c 30%, #d35400 65%, #f39c12 100%)',
      emoji: '🤖',
      lessonsCount: 13,
      tasksCount: 20,
      modules: [
        {
          id: 'w3-m1',
          title: 'Module 1: Ideation with AI',
          lessons: [
            {
              id: 'w3-m1-l1',
              title: 'Lesson 1: Brainstorming with AI',
              slides: [
                {
                  title: 'AI-Powered Brainstorming',
                  content: '<p>AI is the ultimate brainstorming partner — it never runs out of ideas, never judges, and can generate hundreds of concepts in minutes. In this lesson, you\'ll learn systematic brainstorming techniques that go far beyond "give me ideas."</p><ul><li><strong>Divergent thinking:</strong> Generate as many ideas as possible</li><li><strong>Convergent thinking:</strong> Evaluate and narrow down to the best ones</li><li><strong>Cross-pollination:</strong> Combine ideas from different domains</li></ul>',
                  visual: '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center"><div style="background:#d35400;color:#fff;padding:10px 16px;border-radius:8px;font-size:13px">💡 Diverge</div><span style="font-size:20px">→</span><div style="background:#f39c12;color:#fff;padding:10px 16px;border-radius:8px;font-size:13px">🔍 Evaluate</div><span style="font-size:20px">→</span><div style="background:#27ae60;color:#fff;padding:10px 16px;border-radius:8px;font-size:13px">🎯 Converge</div></div>'
                },
                {
                  title: 'The SCAMPER Method with AI',
                  content: '<p><strong>SCAMPER</strong> is a proven creativity technique that AI supercharges:</p><ul><li><strong>S</strong>ubstitute — What can be replaced?</li><li><strong>C</strong>ombine — What can be merged?</li><li><strong>A</strong>dapt — What can be modified from elsewhere?</li><li><strong>M</strong>odify — What can be changed, enlarged, or minimized?</li><li><strong>P</strong>ut to another use — What else could this be used for?</li><li><strong>E</strong>liminate — What can be removed?</li><li><strong>R</strong>everse — What can be flipped or reordered?</li></ul><p>Ask AI to apply each SCAMPER lens to your idea for instant innovation.</p>'
                },
                {
                  title: 'Quantity-First Brainstorming',
                  content: '<p>The best ideas come from having lots of ideas. Use these prompts:</p><ul><li><code>"Give me 30 ideas for [problem]. Include both practical and wild/creative ideas. Don\'t filter yourself."</code></li><li><code>"Now give me 10 MORE ideas that are completely different from the first 30."</code></li><li><code>"Combine the best elements of ideas #3, #17, and #28 into a new concept."</code></li></ul><p>The magic number is <strong>30+</strong> ideas. The truly innovative ones usually appear after the obvious 10.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">📊 The Innovation Curve</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">Ideas 1-10: Obvious and common<br>Ideas 11-20: Getting interesting<br>Ideas 21-30: Creative breakthroughs<br><strong>Ideas 30+: Where innovation lives</strong></p></div>'
                },
                {
                  title: 'Perspective-Shifting Techniques',
                  content: '<p>Get radically different ideas by changing perspectives:</p><ul><li><code>"How would a 10-year-old solve [problem]?"</code></li><li><code>"How would [industry] approach this problem? (e.g., How would Netflix/Amazon/Airbnb solve this?)"</code></li><li><code>"What would the solution look like if money were no object? Now, what\'s the $100 version?"</code></li><li><code>"What would the opposite of the current solution look like?"</code></li></ul><p>These prompts force AI to think outside its default patterns.</p>'
                },
                {
                  title: 'Evaluating and Ranking Ideas',
                  content: '<p>After generating many ideas, use AI to evaluate them:</p><p><code>"Rate each of these ideas on a scale of 1-10 across three criteria: 1) Feasibility (how easy to implement), 2) Impact (how much value it creates), 3) Novelty (how unique it is). Present as a table and highlight the top 3."</code></p><p>This structured evaluation prevents analysis paralysis and helps you move from ideas to action quickly.</p>'
                }
              ],
              objectives: [
                'Use AI for systematic brainstorming with the SCAMPER method',
                'Generate 30+ ideas using quantity-first brainstorming',
                'Apply perspective-shifting techniques for creative breakthroughs',
                'Evaluate and rank ideas using structured criteria'
              ],
              notes: 'AI-powered brainstorming is about going beyond "give me ideas" to systematic creativity techniques. The SCAMPER method (Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse) provides structured frameworks for innovation.\n\nThe key insight is quantity leads to quality. Push past the first 10 obvious ideas to reach the creative breakthroughs that appear around ideas 20-30+. Perspective-shifting prompts (asking how a child, competitor, or different industry would solve the problem) unlock entirely new thinking patterns.\n\nPractical tip: Next time you need creative ideas, commit to generating at least 30 before evaluating any of them. Use the SCAMPER framework and perspective-shifting prompts to ensure variety. Then use AI\'s evaluation framework to narrow down to the best 3-5.',
              resources: [
                { title: 'The SCAMPER Innovation Method', url: '#', type: 'guide' },
                { title: 'AI Brainstorming: Beyond the Basics', url: '#', type: 'article' },
                { title: 'Ideation Frameworks Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Pick a real problem or opportunity in your life/work. Use AI to brainstorm 30+ solutions using: 1) Quantity-first (20 initial ideas), 2) SCAMPER on your top idea, 3) Perspective-shifting (5 more ideas from different viewpoints). Then evaluate the top 5 using the feasibility/impact/novelty framework.',
                starterPrompt: 'I want to brainstorm solutions for this problem: [describe your problem/opportunity]. First, give me 20 ideas — include both practical and creative/wild ones. Don\'t hold back or filter.',
                hint: 'After the first 20 ideas, push for more with: "Give me 10 more that are completely different from the first 20. Think about approaches from other industries." The best ideas often come in this second wave.'
              }
            },
            {
              id: 'w3-m1-l2',
              title: 'Lesson 2: Market Research',
              slides: [
                {
                  title: 'AI-Powered Market Research',
                  content: '<p>Before building anything, you need to understand the market. AI can compress weeks of research into hours:</p><ul><li><strong>Competitive analysis:</strong> Understand what exists and find gaps</li><li><strong>Audience research:</strong> Define who your ideal user is</li><li><strong>Trend analysis:</strong> Identify emerging opportunities</li><li><strong>Problem validation:</strong> Confirm that a real need exists</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#0c1b33;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">🏢</div>Competitors</div><div style="background:#1a3a5c;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">👥</div>Audience</div><div style="background:#d35400;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">📈</div>Trends</div><div style="background:#f39c12;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">✅</div>Validation</div></div>'
                },
                {
                  title: 'Competitive Analysis Prompts',
                  content: '<p>Use these prompts for rapid competitive research:</p><ul><li><code>"What are the top 10 competitors in [space]? For each, list: key features, pricing, target audience, and biggest weakness."</code></li><li><code>"Create a competitive matrix comparing [your idea] against [competitors] across: features, pricing, ease of use, and target market."</code></li><li><code>"What gaps or unmet needs exist in the [industry] market that current solutions don\'t address?"</code></li></ul><p><strong>Remember:</strong> Verify competitor details from their actual websites — AI may not have the latest information.</p>'
                },
                {
                  title: 'Building User Personas with AI',
                  content: '<p>AI can help you create detailed user personas:</p><p><code>"Create 3 detailed user personas for [product/service]. For each persona include: name, age, job title, goals, pain points, daily routine, tech comfort level, what they\'d pay for a solution, and where they hang out online. Make them feel like real people."</code></p><p>Great personas help you make better decisions about features, messaging, and design throughout the prototyping process.</p>'
                },
                {
                  title: 'Validating Your Idea',
                  content: '<p>Use AI to stress-test your idea before investing time building it:</p><ul><li><code>"Play devil\'s advocate: give me the 10 strongest reasons why [idea] would fail"</code></li><li><code>"What are the biggest risks and how could I mitigate each one?"</code></li><li><code>"Who would NOT want this product and why?"</code></li><li><code>"What would need to be true for this to be a $1M business? Are those assumptions reasonable?"</code></li></ul>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">✅ Validation Checklist</p><ul style="margin:8px 0 0;padding-left:16px;font-size:13px;color:#166534"><li>Real problem exists ✓</li><li>People will pay for solution ✓</li><li>Market is large enough ✓</li><li>You can reach your audience ✓</li><li>Competition has gaps ✓</li></ul></div>'
                }
              ],
              objectives: [
                'Conduct AI-powered competitive analysis in minutes',
                'Create detailed user personas for your target audience',
                'Validate business ideas using AI stress-testing techniques',
                'Identify market gaps and opportunities with structured prompts'
              ],
              notes: 'AI-powered market research lets you get directional insights in hours instead of weeks. While it can\'t replace primary research (talking to real users), it\'s excellent for competitive analysis, persona creation, and initial idea validation.\n\nThe validation step is crucial — use AI as a devil\'s advocate to challenge your assumptions before investing time in building. Ask it to find reasons your idea might fail, who wouldn\'t want it, and what assumptions need to be true for success.\n\nPractical tip: Always verify AI\'s competitive intelligence against real company websites. AI may have outdated pricing, feature lists, or company details. Use AI for the framework and structure, but confirm specifics yourself.',
              resources: [
                { title: 'AI Market Research Framework', url: '#', type: 'guide' },
                { title: 'How to Build User Personas with AI', url: '#', type: 'article' },
                { title: 'Idea Validation Checklist', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Conduct a complete AI market research session for an idea you want to explore: 1) Competitive analysis of top 5 competitors, 2) Create 2 user personas, 3) Identify 3 market gaps, 4) Run the devil\'s advocate validation exercise.',
                starterPrompt: 'I\'m exploring a business/project idea: [describe your idea]. Help me conduct market research. Start with: who are the top 5 competitors or existing solutions in this space? For each, list their key features, target audience, pricing, and biggest weakness.',
                hint: 'Don\'t skip the devil\'s advocate step — it\'s the most valuable. If AI can\'t find strong reasons your idea might fail, that\'s a good sign. If it finds many, that\'s useful data to inform your approach.'
              }
            },
            {
              id: 'w3-m1-l3',
              title: 'Lesson 3: Validating Ideas',
              slides: [
                {
                  title: 'From Idea to Validated Concept',
                  content: '<p>Having a great idea is step one. <strong>Validating</strong> it is what separates dreamers from doers. AI helps you validate faster than ever:</p><ul><li><strong>Problem-Solution Fit:</strong> Does your solution actually solve the problem?</li><li><strong>Market Demand:</strong> Will people pay for this?</li><li><strong>Feasibility:</strong> Can you actually build this?</li><li><strong>Differentiation:</strong> Why is this better than alternatives?</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;align-items:center;gap:8px"><span style="background:#d35400;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">1</span><span style="font-size:13px"><strong>Problem-Solution Fit</strong> — Does it solve a real problem?</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#e67e22;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">2</span><span style="font-size:13px"><strong>Market Demand</strong> — Will people pay?</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#f39c12;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">3</span><span style="font-size:13px"><strong>Feasibility</strong> — Can you build it?</span></div><div style="display:flex;align-items:center;gap:8px"><span style="background:#f1c40f;color:#1a0533;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">4</span><span style="font-size:13px"><strong>Differentiation</strong> — Why choose this?</span></div></div>'
                },
                {
                  title: 'The Lean Canvas with AI',
                  content: '<p>AI can help you fill out a <strong>Lean Canvas</strong> — a one-page business model:</p><p><code>"Help me fill out a Lean Canvas for [idea]. Include: Problem (top 3 problems), Customer Segments, Unique Value Proposition, Solution, Channels, Revenue Streams, Cost Structure, Key Metrics, and Unfair Advantage."</code></p><p>This gives you a complete business model snapshot in minutes instead of days.</p>'
                },
                {
                  title: 'Creating a Validation Plan',
                  content: '<p>Use AI to design experiments that test your assumptions:</p><ul><li><code>"What are my top 5 riskiest assumptions about [idea]? For each, suggest a cheap experiment I can run in 48 hours to test it."</code></li><li><code>"Design a simple landing page test to measure demand for [idea]. What should the page say? What metric should I track?"</code></li><li><code>"Write 5 interview questions I should ask potential customers to validate [specific assumption]."</code></li></ul>'
                },
                {
                  title: 'The 48-Hour Validation Sprint',
                  content: '<p>Validate any idea in 48 hours:</p><ul><li><strong>Hour 0-2:</strong> AI-powered competitive analysis and persona creation</li><li><strong>Hour 2-4:</strong> Create a Lean Canvas with AI</li><li><strong>Hour 4-8:</strong> Build a landing page (next module!) testing demand</li><li><strong>Hour 8-24:</strong> Share with 10-20 potential users</li><li><strong>Hour 24-48:</strong> Collect feedback and decide: build, pivot, or kill</li></ul><p>This rapid validation prevents months wasted building something nobody wants.</p>',
                  visual: '<div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#6c3ce0">⏱️ 48 Hours to Clarity</p><p style="margin:8px 0 0;font-size:13px">The most expensive mistake in business is building something nobody wants. A 48-hour validation sprint costs almost nothing but saves months of wasted effort.</p></div>'
                }
              ],
              objectives: [
                'Apply the 4-step validation framework to any idea',
                'Create a Lean Canvas using AI assistance',
                'Design cheap experiments to test risky assumptions',
                'Execute a 48-hour idea validation sprint'
              ],
              notes: 'Idea validation is about reducing risk before investing significant time and resources. The four key validation areas are: Problem-Solution Fit, Market Demand, Feasibility, and Differentiation. AI can help you explore all four in a fraction of the traditional time.\n\nThe Lean Canvas is your best friend for structured thinking about a business idea. Having AI fill it out gives you a starting point, but the real value comes from critically examining each section and stress-testing the assumptions.\n\nPractical tip: The 48-hour validation sprint is the most practical technique in this module. Pick an idea you\'ve been thinking about and commit to running a sprint this weekend. Even if the idea fails validation, you\'ll have saved yourself months of building the wrong thing.',
              resources: [
                { title: 'The Lean Canvas Template & Guide', url: '#', type: 'guide' },
                { title: 'Validation Experiments You Can Run in 48 Hours', url: '#', type: 'article' },
                { title: 'Customer Interview Question Bank', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Run a mini-validation sprint: 1) Use AI to create a Lean Canvas for your idea, 2) Identify your 3 riskiest assumptions, 3) Design a quick experiment for each assumption, 4) Create a simple "elevator pitch" you can share with 5 people for feedback.',
                starterPrompt: 'I have an idea for [describe your idea]. Help me create a Lean Canvas. Then identify the 3 riskiest assumptions in my model and suggest cheap, fast experiments I can run to test each one.',
                hint: 'The riskiest assumption is usually "people will pay for this." Design your first experiment to test demand, not features. A simple landing page or conversation with potential users tells you more than weeks of building.'
              }
            }
          ]
        },
        {
          id: 'w3-m2',
          title: 'Module 2: Rapid Prototyping',
          lessons: [
            {
              id: 'w3-m2-l1',
              title: 'Lesson 1: No-Code AI Tools',
              slides: [
                {
                  title: 'Building Without Code',
                  content: '<p>No-code tools powered by AI let anyone build functional products:</p><ul><li><strong>Websites:</strong> Wix AI, Framer, Webflow</li><li><strong>Apps:</strong> Bubble, Glide, Adalo</li><li><strong>Automations:</strong> Zapier, Make.com, n8n</li><li><strong>Chatbots:</strong> Botpress, Voiceflow, CustomGPT</li><li><strong>Forms & databases:</strong> Airtable, Typeform, Tally</li></ul><p>These tools have dramatically lowered the barrier to building real products.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#d35400;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">🌐</div>Websites<br><small>Wix, Framer</small></div><div style="background:#e67e22;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">📱</div>Apps<br><small>Bubble, Glide</small></div><div style="background:#f39c12;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">⚡</div>Automations<br><small>Zapier, Make</small></div><div style="background:#f1c40f;color:#1a0533;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">🤖</div>Chatbots<br><small>Botpress, CustomGPT</small></div></div>'
                },
                {
                  title: 'Choosing Your No-Code Stack',
                  content: '<p>Match your project type to the right no-code tool:</p><ul><li><strong>Landing page / website:</strong> Framer or Carrd (simple) → Webflow (complex)</li><li><strong>Internal tool / dashboard:</strong> Retool or Glide</li><li><strong>Customer-facing app:</strong> Bubble (web) or Glide (mobile)</li><li><strong>AI-powered chatbot:</strong> CustomGPT or Botpress</li><li><strong>Workflow automation:</strong> Zapier (simple) → Make.com (complex)</li></ul><p>Start with the simplest tool that solves your problem.</p>'
                },
                {
                  title: 'AI-Assisted Building',
                  content: '<p>Modern no-code tools have AI built right in:</p><ul><li><strong>Wix AI:</strong> Describe your site and it generates the design</li><li><strong>Framer AI:</strong> Generate pages from text descriptions</li><li><strong>Bubble AI:</strong> Describe features and it builds workflows</li><li><strong>v0 by Vercel:</strong> Describe a UI and get working code</li></ul><p>The workflow: <strong>describe what you want in plain English → AI generates it → you refine</strong>. No coding skills needed.</p>'
                },
                {
                  title: 'Your First No-Code Project',
                  content: '<p>Follow this plan for your first no-code build:</p><ul><li><strong>Day 1:</strong> Define what you\'re building (use your Lean Canvas)</li><li><strong>Day 2:</strong> Choose your no-code tool and complete a tutorial</li><li><strong>Day 3-4:</strong> Build your MVP with AI assistance</li><li><strong>Day 5:</strong> Test with 3 real users and gather feedback</li></ul><p>The goal is a <strong>working prototype in 5 days</strong>, not a perfect product.</p>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">🎯 MVP Mindset</p><p style="margin:8px 0 0;font-size:13px;color:#166534">A working prototype with 3 features beats a perfect design with 30 features. Ship fast, learn fast, improve fast.</p></div>'
                }
              ],
              objectives: [
                'Survey the no-code AI tools landscape',
                'Match project types to the right no-code platform',
                'Understand AI-assisted building in modern no-code tools',
                'Plan and execute a 5-day no-code project'
              ],
              notes: 'No-code tools have democratized product building. Combined with AI, anyone can build a functional prototype in days rather than months. The key is choosing the right tool for your project type and focusing on a minimum viable product (MVP) rather than perfection.\n\nThe best no-code tools now have AI built in — you describe what you want in plain English and the AI generates it. Tools like Framer AI, Wix AI, and v0 by Vercel can generate entire pages from text descriptions.\n\nPractical tip: Start with a landing page. It\'s the simplest project and teaches you the most about your idea. Use Carrd or Framer for a one-page site that explains your idea and collects email addresses. If people sign up, you have validation. If they don\'t, you saved yourself months of building.',
              resources: [
                { title: 'No-Code Tools Directory', url: '#', type: 'guide' },
                { title: 'Building Your First App Without Code', url: '#', type: 'video' },
                { title: 'No-Code vs Low-Code: When to Use What', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Choose one no-code tool (Framer, Carrd, Glide, or Wix AI) and complete their getting-started tutorial. Then build a simple landing page for your validated idea that includes: a headline, value proposition, 3 features, and an email signup.',
                starterPrompt: 'Help me plan a landing page for [your idea]. I need: 1) A compelling headline (5 options), 2) A one-sentence value proposition, 3) Three key features with descriptions, 4) A call-to-action for email signup. Write the copy for all sections.',
                hint: 'Don\'t aim for perfection — aim for "good enough to test." A simple one-page site with clear messaging will teach you more than a beautiful multi-page site that took weeks to build.'
              }
            },
            {
              id: 'w3-m2-l2',
              title: 'Lesson 2: Building Landing Pages',
              slides: [
                {
                  title: 'Landing Pages: Your Idea\'s First Home',
                  content: '<p>A landing page is often the first thing you should build for any new idea. It serves as:</p><ul><li><strong>Validation tool:</strong> Do people care enough to sign up?</li><li><strong>Communication device:</strong> Can you explain your idea clearly?</li><li><strong>Lead generator:</strong> Collect emails from interested people</li><li><strong>Learning platform:</strong> What messaging resonates most?</li></ul>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px;text-align:center">ANATOMY OF A LANDING PAGE</div><div style="display:flex;flex-direction:column;gap:4px"><div style="background:#6c3ce0;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px;text-align:center">🎯 Hero: Headline + Value Prop</div><div style="background:#8b5cf6;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px;text-align:center">✨ Features: 3 Key Benefits</div><div style="background:#a78bfa;color:#fff;padding:6px 12px;border-radius:4px;font-size:12px;text-align:center">💬 Social Proof: Testimonials</div><div style="background:#c4b5fd;color:#1a0533;padding:6px 12px;border-radius:4px;font-size:12px;text-align:center">🚀 CTA: Sign Up / Get Started</div></div></div>'
                },
                {
                  title: 'AI-Generated Landing Page Copy',
                  content: '<p>Use AI to write every section of your landing page:</p><ul><li><strong>Headline:</strong> <code>"Write 10 headlines for [product]. Focus on the key benefit, not the feature. Make them punchy and clear."</code></li><li><strong>Value prop:</strong> <code>"Write a one-sentence value proposition for [product] that explains who it\'s for, what it does, and why it\'s different."</code></li><li><strong>Features:</strong> <code>"Write 3 feature descriptions for [product]. Each should have a short title and 2 sentences explaining the benefit."</code></li></ul>'
                },
                {
                  title: 'The Headline Formula',
                  content: '<p>Your headline is the most important element. Use these proven formulas:</p><ul><li><strong>[Result] without [Pain]:</strong> "Learn guitar without boring exercises"</li><li><strong>[Result] in [Timeframe]:</strong> "Build your personal website in 10 minutes"</li><li><strong>For [Audience] who [Struggle]:</strong> "For freelancers who hate invoicing"</li><li><strong>The [Adjective] way to [Benefit]:</strong> "The simple way to track your habits"</li></ul><p>Ask AI to generate 10 headlines using each formula, then pick the best one.</p>'
                },
                {
                  title: 'Launch Your Page Today',
                  content: '<p>Tools for rapid landing page creation:</p><ul><li><strong>Carrd.co:</strong> Free, simple, beautiful one-page sites in 30 minutes</li><li><strong>Framer:</strong> AI-powered, more design options, free tier available</li><li><strong>Typedream:</strong> Notion-like editor, AI-assisted</li></ul><p>Don\'t overthink design. A clear message on a simple page converts better than a beautiful page with confusing copy.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">⚡ Speed Tip</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">You can go from zero to published landing page in under 1 hour using Carrd + AI-generated copy. No excuses — ship today!</p></div>'
                }
              ],
              objectives: [
                'Understand the anatomy of an effective landing page',
                'Use AI to generate compelling copy for every section',
                'Apply proven headline formulas for maximum impact',
                'Build and launch a landing page in under 1 hour'
              ],
              notes: 'A landing page is the fastest way to validate an idea with real people. It forces you to articulate your value proposition clearly, and the signup rate tells you whether people actually want what you\'re offering.\n\nThe four essential sections are: Hero (headline + value proposition), Features (3 key benefits), Social Proof (testimonials or credibility markers), and CTA (clear call-to-action). AI can generate compelling copy for all of these in minutes.\n\nPractical tip: Don\'t spend more than 2 hours on your first landing page. Use Carrd or Framer, generate the copy with AI, and ship it. Then share the link with 20 people in your target audience. Their behavior (sign up or bounce) tells you more than any amount of planning.',
              resources: [
                { title: 'Landing Page Best Practices 2024', url: '#', type: 'guide' },
                { title: 'Carrd Tutorial: Build a Landing Page in 30 Minutes', url: '#', type: 'video' },
                { title: 'Landing Page Copy Templates', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Build a complete landing page for your idea using AI-generated copy: 1) Generate 10 headlines and pick the best, 2) Write a value proposition, 3) Create 3 feature descriptions, 4) Write a CTA. Bonus: actually publish it using Carrd or Framer.',
                starterPrompt: 'I\'m building a landing page for [your idea]. My target audience is [describe]. Help me write: 1) 10 headline options using different formulas, 2) A one-sentence value proposition, 3) Three feature blocks (title + 2-sentence description each), 4) A compelling call-to-action button text and supporting sentence.',
                hint: 'Read your headlines out loud. The best headline is the one that makes someone say "Tell me more" or "I need that." Ask a friend to pick their favorite from your top 3.'
              }
            },
            {
              id: 'w3-m2-l3',
              title: 'Lesson 3: Creating MVPs',
              slides: [
                {
                  title: 'The MVP Mindset',
                  content: '<p>A <strong>Minimum Viable Product (MVP)</strong> is the simplest version of your idea that delivers value. It\'s NOT about building less — it\'s about <strong>learning faster</strong>.</p><ul><li><strong>What to include:</strong> The ONE core feature that solves the main problem</li><li><strong>What to exclude:</strong> Everything else (for now)</li><li><strong>Goal:</strong> Get real user feedback as fast as possible</li></ul><p>Famous MVPs: Dropbox started with a video demo. Airbnb started with an air mattress and a website.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#fef2f2;border:2px solid #fca5a5;padding:12px;border-radius:8px;text-align:center"><div style="font-size:14px;font-weight:bold;color:#dc2626">❌ Not an MVP</div><div style="font-size:12px;margin-top:4px">All features, perfect design, months of work, no user feedback</div></div><div style="background:#dcfce7;border:2px solid #86efac;padding:12px;border-radius:8px;text-align:center"><div style="font-size:14px;font-weight:bold;color:#16a34a">✅ Real MVP</div><div style="font-size:12px;margin-top:4px">Core feature, good enough design, days of work, immediate feedback</div></div></div>'
                },
                {
                  title: 'AI-Powered MVP Development',
                  content: '<p>AI dramatically speeds up MVP development:</p><ul><li><strong>Feature prioritization:</strong> <code>"I want to build [product]. Help me identify the ONE core feature that delivers 80% of the value."</code></li><li><strong>Technical architecture:</strong> <code>"What\'s the simplest technical approach to build [feature] as a prototype?"</code></li><li><strong>Content & copy:</strong> AI generates all text, descriptions, and instructions</li><li><strong>Testing scripts:</strong> AI creates test scenarios and user scripts</li></ul>'
                },
                {
                  title: 'Types of MVPs',
                  content: '<p>Not every MVP requires building software:</p><ul><li><strong>Landing page MVP:</strong> Test demand with a signup page</li><li><strong>Concierge MVP:</strong> Manually deliver the service to first customers</li><li><strong>Wizard of Oz MVP:</strong> Front-end looks automated, but you do it manually behind the scenes</li><li><strong>Video MVP:</strong> Record a demo showing how it would work</li><li><strong>Spreadsheet MVP:</strong> Deliver value using Google Sheets + manual work</li></ul><p>Choose the simplest MVP type that tests your riskiest assumption.</p>'
                },
                {
                  title: 'Ship and Learn',
                  content: '<p>The shipping checklist for your MVP:</p><ul><li><strong>Does it solve the core problem?</strong> Even if it\'s ugly or limited</li><li><strong>Can someone use it?</strong> Without you explaining how</li><li><strong>Can you measure success?</strong> Define 1-2 key metrics</li><li><strong>Can you collect feedback?</strong> Built-in feedback mechanism</li></ul><p><strong>Ship when it\'s embarrassing.</strong> If you\'re not embarrassed by your first version, you waited too long.</p>'
                }
              ],
              objectives: [
                'Distinguish between an MVP and a finished product',
                'Use AI to identify and prioritize core MVP features',
                'Choose the right MVP type for your idea',
                'Ship a prototype and set up feedback collection'
              ],
              notes: 'The MVP is about learning, not building. The goal is to test your riskiest assumption with the least amount of work. There are many types of MVPs — from landing pages to concierge services to spreadsheet solutions — and the best choice depends on what assumption you need to test.\n\nAI dramatically speeds up MVP development by handling content generation, feature prioritization, and even technical architecture suggestions. But the biggest speed gain comes from the mindset shift: building the minimum to learn, not the maximum to impress.\n\nPractical tip: Force yourself to ship within one week. If your MVP takes longer than that, you\'re probably building too much. Ask yourself: "What\'s the ONE thing this needs to do?" and build only that.',
              resources: [
                { title: 'The MVP Handbook', url: '#', type: 'guide' },
                { title: 'Types of MVPs Explained', url: '#', type: 'article' },
                { title: 'MVP Feature Prioritization Tool', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Design your MVP: 1) Use AI to identify the single core feature, 2) Choose the MVP type (landing page, concierge, video, etc.), 3) Create a 3-day build plan, 4) Define 2 success metrics. If possible, actually start building this week.',
                starterPrompt: 'I want to build an MVP for [your idea]. The full vision includes these features: [list all features]. Help me identify: 1) The ONE core feature that delivers the most value, 2) The simplest MVP type to test it, 3) A 3-day build plan, 4) Two metrics that would tell me if it\'s working.',
                hint: 'Be ruthless about cutting features. Your MVP should make you uncomfortable with how simple it is. Remember: Dropbox\'s MVP was just a video. Airbnb\'s was a single apartment listing.'
              }
            },
            {
              id: 'w3-m2-l4',
              title: 'Lesson 4: API Integrations',
              slides: [
                {
                  title: 'Connecting AI to Your Products',
                  content: '<p><strong>APIs</strong> (Application Programming Interfaces) let you add AI capabilities directly to your products. Even without coding, you can use AI APIs through no-code platforms:</p><ul><li><strong>OpenAI API:</strong> Add ChatGPT capabilities to any tool</li><li><strong>Zapier + AI:</strong> Trigger AI responses from any event</li><li><strong>Make.com:</strong> Build complex AI workflows visually</li><li><strong>Airtable + AI:</strong> Automate data processing with AI columns</li></ul>',
                  visual: '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center"><div style="background:#0c1b33;color:#fff;padding:10px 14px;border-radius:8px;font-size:12px">Your Product</div><span style="font-size:20px">⟷</span><div style="background:#d35400;color:#fff;padding:10px 14px;border-radius:8px;font-size:12px">API Connection</div><span style="font-size:20px">⟷</span><div style="background:#f39c12;color:#fff;padding:10px 14px;border-radius:8px;font-size:12px">AI Service</div></div>'
                },
                {
                  title: 'No-Code API Integrations',
                  content: '<p>Connect AI to your workflows without coding:</p><ul><li><strong>Zapier:</strong> "When a form is submitted, use ChatGPT to analyze the response and email me a summary"</li><li><strong>Make.com:</strong> "When a customer emails, classify the issue with AI and route to the right team"</li><li><strong>Airtable:</strong> AI columns that automatically process, summarize, or categorize data</li></ul><p>These integrations run automatically 24/7, turning manual processes into automated workflows.</p>'
                },
                {
                  title: 'Common AI Integration Patterns',
                  content: '<p>Most AI integrations follow these patterns:</p><ul><li><strong>Input → Process → Output:</strong> User submits data → AI processes → Result delivered</li><li><strong>Trigger → AI → Action:</strong> Event happens → AI decides → System acts</li><li><strong>Content → AI → Distribution:</strong> Raw content → AI transforms → Sent to channels</li></ul><p>Understanding these patterns helps you see integration opportunities everywhere.</p>'
                },
                {
                  title: 'Building Your First Integration',
                  content: '<p>Start with this simple integration:</p><ul><li><strong>Step 1:</strong> Choose a trigger (new email, form submission, spreadsheet update)</li><li><strong>Step 2:</strong> Add an AI step (summarize, classify, generate response)</li><li><strong>Step 3:</strong> Choose an action (send email, update spreadsheet, post to Slack)</li><li><strong>Step 4:</strong> Test with sample data and refine</li></ul><p>The entire setup takes 30-60 minutes on Zapier or Make.com.</p>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">🔌 Integration Idea</p><p style="margin:8px 0 0;font-size:13px;color:#166534">New Google Form submission → ChatGPT analyzes and categorizes → Results added to Google Sheet → Slack notification sent. Total setup time: ~45 minutes.</p></div>'
                }
              ],
              objectives: [
                'Understand how APIs connect AI to your products and workflows',
                'Set up no-code AI integrations using Zapier or Make.com',
                'Recognize common AI integration patterns',
                'Build your first working AI integration'
              ],
              notes: 'APIs let you embed AI capabilities directly into your products and workflows. The good news: you don\'t need to code. No-code platforms like Zapier and Make.com make it possible to connect AI services to any of your existing tools.\n\nThe three main integration patterns are: Input→Process→Output (user submits, AI processes, result delivered), Trigger→AI→Action (event triggers AI decision and automatic action), and Content→AI→Distribution (content is transformed and distributed by AI).\n\nPractical tip: Start with a simple Zapier integration. The most popular first integration: "When someone fills out a Google Form, use ChatGPT to summarize the response and email me." This takes about 30 minutes to set up and runs forever.',
              resources: [
                { title: 'AI API Integration Without Code', url: '#', type: 'guide' },
                { title: 'Zapier AI Actions Tutorial', url: '#', type: 'video' },
                { title: 'Make.com AI Integration Templates', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Design an AI integration for your workflow: 1) Identify a process that could be automated with AI, 2) Choose the trigger, AI processing step, and output action, 3) Map out the complete workflow. Bonus: actually set it up in Zapier or Make.com.',
                starterPrompt: 'I want to automate [describe process] using AI. Currently, I manually [describe manual steps]. Help me design a Zapier/Make.com integration that automates this. Include: the trigger event, the AI processing step (with the prompt to use), and the output action.',
                hint: 'Start with the simplest possible integration. A form submission → AI summary → email notification is a great first project. You can always make it more complex later.'
              }
            }
          ]
        },
        {
          id: 'w3-m3',
          title: 'Module 3: User Testing with AI',
          lessons: [
            {
              id: 'w3-m3-l1',
              title: 'Lesson 1: Generating Test Scenarios',
              slides: [
                {
                  title: 'AI-Powered Test Planning',
                  content: '<p>Before you can improve your prototype, you need to <strong>test it properly</strong>. AI helps you create comprehensive test plans in minutes:</p><ul><li><strong>User scenarios:</strong> Realistic situations users will encounter</li><li><strong>Edge cases:</strong> Unusual but important scenarios</li><li><strong>Task flows:</strong> Step-by-step paths through your product</li><li><strong>Success criteria:</strong> How to measure if a test passes</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#d35400;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📋 Test Plan → What to test and why</div><div style="background:#e67e22;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">🧪 Test Scenarios → Specific situations to simulate</div><div style="background:#f39c12;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📝 Test Scripts → Step-by-step instructions</div><div style="background:#f1c40f;color:#1a0533;padding:8px 14px;border-radius:6px;font-size:13px">📊 Success Metrics → How to measure results</div></div>'
                },
                {
                  title: 'Generating User Scenarios',
                  content: '<p>Use AI to create realistic test scenarios:</p><p><code>"I built [product description]. Create 10 realistic user scenarios covering: first-time use, regular use, edge cases, and error situations. For each scenario, describe: the user\'s goal, their context, the steps they would take, and what success looks like."</code></p><p>AI generates diverse scenarios you might not think of, including accessibility, error handling, and unusual use cases.</p>'
                },
                {
                  title: 'Creating Test Scripts',
                  content: '<p>AI can write detailed test scripts for user testing sessions:</p><ul><li><code>"Write a 30-minute user testing script for [product]. Include: introduction (2 min), warm-up questions (3 min), 5 tasks to complete (20 min), and debrief questions (5 min)."</code></li><li><code>"For each task, include: what to tell the user, what to observe, follow-up probing questions, and what counts as success."</code></li></ul>'
                },
                {
                  title: 'Testing Without Real Users (Yet)',
                  content: '<p>Before recruiting real users, AI can simulate user reactions:</p><ul><li><code>"Act as [user persona]. You\'re seeing [product] for the first time. Walk through your thought process as you try to [task]. Note confusion points, frustrations, and positive reactions."</code></li><li><code>"As a UX expert, review this user flow and identify the top 5 usability issues."</code></li></ul><p><strong>Note:</strong> AI simulation supplements but never replaces testing with real humans. Use it for initial debugging before real user tests.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">⚠️ AI Testing Limitation</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">AI can simulate user behavior, but it can\'t replicate real human emotions, frustrations, and confusion. Always validate with real users when possible.</p></div>'
                }
              ],
              objectives: [
                'Generate comprehensive test scenarios using AI',
                'Create professional user testing scripts',
                'Use AI to simulate user reactions for initial debugging',
                'Understand the limitations of AI-simulated testing'
              ],
              notes: 'AI-powered test planning ensures you don\'t miss important test scenarios. It\'s especially good at generating edge cases and unusual situations that you might not think of. AI can also create professional test scripts that structure your user testing sessions.\n\nAI simulation of user behavior is useful for catching obvious issues before real user testing, but it should never replace testing with actual humans. Real users behave unpredictably, have genuine emotional reactions, and catch issues that AI cannot simulate.\n\nPractical tip: Use AI to generate 10 test scenarios for your prototype. Have AI play the role of different user personas trying to complete tasks. Note every confusion point. Fix the obvious issues before you invest time in real user testing.',
              resources: [
                { title: 'User Testing Script Templates', url: '#', type: 'guide' },
                { title: 'How to Run User Tests on a Budget', url: '#', type: 'article' },
                { title: 'UX Testing Scenario Generator', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Create a complete test plan for your prototype: 1) Generate 8 test scenarios covering different user types, 2) Write a 20-minute test script, 3) Have AI simulate one user persona going through 3 key tasks. Document the issues AI identifies.',
                starterPrompt: 'I built a [describe your product/prototype]. The target users are [describe]. Create 8 user testing scenarios that cover: first-time user experience, core task completion, error handling, and edge cases. For each, describe the user, their goal, and what success looks like.',
                hint: 'Include at least one scenario for a user who is confused, one who is in a hurry, and one who is not tech-savvy. These stress-test scenarios reveal the most usability issues.'
              }
            },
            {
              id: 'w3-m3-l2',
              title: 'Lesson 2: Analyzing Feedback',
              slides: [
                {
                  title: 'Making Sense of User Feedback',
                  content: '<p>After testing, you\'ll have a pile of feedback. AI is exceptional at organizing and analyzing qualitative data:</p><ul><li><strong>Categorization:</strong> Group feedback by theme</li><li><strong>Sentiment analysis:</strong> Identify positive, negative, and neutral feedback</li><li><strong>Priority ranking:</strong> Determine which issues matter most</li><li><strong>Pattern detection:</strong> Find common themes across users</li></ul>',
                  visual: '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center"><div style="background:#d35400;color:#fff;padding:8px 14px;border-radius:8px;font-size:12px">📝 Raw Feedback</div><span>→</span><div style="background:#f39c12;color:#fff;padding:8px 14px;border-radius:8px;font-size:12px">🏷️ Categorize</div><span>→</span><div style="background:#27ae60;color:#fff;padding:8px 14px;border-radius:8px;font-size:12px">📊 Analyze</div><span>→</span><div style="background:#2980b9;color:#fff;padding:8px 14px;border-radius:8px;font-size:12px">🎯 Prioritize</div></div>'
                },
                {
                  title: 'Feedback Analysis Prompts',
                  content: '<p>Use these prompts to analyze feedback systematically:</p><ul><li><code>"Here is feedback from 5 user tests. Categorize all feedback into themes. For each theme, note how many users mentioned it and the sentiment (positive/negative/neutral). [paste feedback]"</code></li><li><code>"Rank these user issues by severity (critical, major, minor) and frequency. Which 3 issues should I fix first?"</code></li><li><code>"What are users most delighted by? What should I emphasize more?"</code></li></ul>'
                },
                {
                  title: 'Turning Feedback into Action Items',
                  content: '<p>AI can transform messy feedback into a prioritized action plan:</p><p><code>"Based on this user feedback, create a prioritized action plan. For each action item, include: the issue, evidence from user feedback (quotes), severity, estimated effort (small/medium/large), and suggested solution."</code></p><p>This turns subjective feedback into objective, actionable tasks you can immediately work on.</p>'
                },
                {
                  title: 'The Feedback Loop',
                  content: '<p>Great products are built through continuous feedback loops:</p><ul><li><strong>Build:</strong> Create or update your prototype</li><li><strong>Test:</strong> Put it in front of real users</li><li><strong>Learn:</strong> Analyze feedback with AI</li><li><strong>Improve:</strong> Make changes based on insights</li></ul><p>Each cycle makes your product better. Aim for <strong>weekly cycles</strong> — the faster you loop, the faster you improve.</p>',
                  visual: '<div style="display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap"><span style="background:#d35400;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">🔨 Build</span><span style="font-size:16px">→</span><span style="background:#f39c12;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">🧪 Test</span><span style="font-size:16px">→</span><span style="background:#27ae60;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">📖 Learn</span><span style="font-size:16px">→</span><span style="background:#2980b9;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">🔧 Improve</span><span style="font-size:16px">🔄</span></div>'
                }
              ],
              objectives: [
                'Analyze qualitative user feedback using AI categorization',
                'Transform raw feedback into prioritized action items',
                'Identify patterns and themes across multiple user tests',
                'Establish a continuous Build-Test-Learn-Improve feedback loop'
              ],
              notes: 'AI excels at analyzing qualitative feedback — a task that traditionally takes hours of manual coding and categorization. By pasting raw user feedback into AI, you can quickly identify themes, detect patterns, and create prioritized action plans.\n\nThe Build-Test-Learn-Improve loop is the engine of product development. The faster you go through each cycle, the better your product becomes. AI accelerates the "Learn" phase dramatically, enabling weekly improvement cycles instead of monthly.\n\nPractical tip: After every user test, immediately paste the feedback into AI while it\'s fresh. Ask for categorization, sentiment analysis, and a prioritized action list. Act on the top 3 items before the next testing round.',
              resources: [
                { title: 'Analyzing User Feedback with AI', url: '#', type: 'guide' },
                { title: 'The Build-Test-Learn Framework', url: '#', type: 'article' },
                { title: 'Feedback Analysis Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Practice feedback analysis: 1) Use AI to generate realistic user feedback for your product (from 5 different personas), 2) Then analyze that feedback to create themed categories, 3) Build a prioritized action plan with the top 5 improvements.',
                starterPrompt: 'First, act as 5 different users testing [your product]. For each user, provide 3-5 pieces of honest feedback (mix of positive and negative). Include specific pain points and delight moments.\n\nThen analyze all the feedback: categorize by theme, rank by severity, and create a prioritized action plan.',
                hint: 'When generating simulated feedback, ask AI to include users with different tech comfort levels and different use cases. This creates more realistic and diverse feedback to analyze.'
              }
            },
            {
              id: 'w3-m3-l3',
              title: 'Lesson 3: Iterating on Results',
              slides: [
                {
                  title: 'The Art of Iteration',
                  content: '<p>Iteration is the process of making your product progressively better through cycles of feedback and improvement. AI helps at every stage:</p><ul><li><strong>Identifying what to change:</strong> AI analyzes feedback patterns</li><li><strong>Designing solutions:</strong> AI brainstorms improvement ideas</li><li><strong>Implementing changes:</strong> AI helps with copy, design, and workflow updates</li><li><strong>Measuring impact:</strong> AI suggests metrics and analyzes results</li></ul>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px;text-align:center">ITERATION TIMELINE</div><div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;justify-content:center"><div style="background:#6c3ce0;color:#fff;padding:6px 10px;border-radius:6px;font-size:11px">v0.1 MVP</div><span>→</span><div style="background:#8b5cf6;color:#fff;padding:6px 10px;border-radius:6px;font-size:11px">v0.2 Feedback</div><span>→</span><div style="background:#a78bfa;color:#fff;padding:6px 10px;border-radius:6px;font-size:11px">v0.3 Improved</div><span>→</span><div style="background:#c4b5fd;color:#1a0533;padding:6px 10px;border-radius:6px;font-size:11px">v0.4 Refined</div><span>→</span><div style="background:#16a34a;color:#fff;padding:6px 10px;border-radius:6px;font-size:11px">v1.0 Launch! 🚀</div></div></div>'
                },
                {
                  title: 'Deciding What to Change',
                  content: '<p>Not all feedback is equal. Use this priority framework:</p><ul><li><strong>Fix now:</strong> Issues that prevent core task completion (critical bugs, confusing navigation)</li><li><strong>Fix next:</strong> Issues that frustrate users but don\'t block them</li><li><strong>Consider later:</strong> Feature requests and nice-to-haves</li><li><strong>Ignore:</strong> Outlier feedback from a single user that contradicts the majority</li></ul><p>Ask AI: <code>"Based on this feedback, what should I fix first, next, later, and what should I ignore? Explain your reasoning."</code></p>'
                },
                {
                  title: 'Rapid Iteration with AI',
                  content: '<p>AI accelerates each iteration cycle:</p><ul><li><strong>Copy changes:</strong> AI rewrites confusing instructions, error messages, and onboarding text</li><li><strong>Design suggestions:</strong> AI proposes layout and flow improvements</li><li><strong>A/B test variants:</strong> AI creates multiple versions to test</li><li><strong>Impact prediction:</strong> AI estimates which changes will have the biggest effect</li></ul><p>With AI, you can iterate daily instead of weekly.</p>'
                },
                {
                  title: 'Knowing When to Stop',
                  content: '<p>Iteration has diminishing returns. Know when to move forward:</p><ul><li><strong>Core task success rate is 80%+</strong> — Users can do the main thing</li><li><strong>No more critical issues</strong> — Nothing breaks the experience</li><li><strong>Users express willingness to pay/use</strong> — Validation achieved</li><li><strong>Feedback shifts from problems to feature requests</strong> — Foundation is solid</li></ul><p>Perfect is the enemy of shipped. Launch when it\'s good enough, then keep improving.</p>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">🚀 Ready to Launch When...</p><ul style="margin:8px 0 0;padding-left:16px;font-size:13px;color:#166534"><li>80%+ core task success rate</li><li>Zero critical blockers</li><li>Users say "I would use/pay for this"</li><li>Feedback is requests, not complaints</li></ul></div>'
                }
              ],
              objectives: [
                'Apply a priority framework for acting on user feedback',
                'Use AI to accelerate each iteration cycle',
                'Know when to iterate and when to ship',
                'Transform feedback into measurable product improvements'
              ],
              notes: 'Iteration is where good products become great products. The key is focusing on the right things: fix critical issues first, then frustrations, then nice-to-haves. AI helps by analyzing feedback, suggesting solutions, and even creating A/B test variants.\n\nKnowing when to stop iterating and ship is just as important as iterating well. When your core task success rate hits 80%+, critical issues are resolved, and users express willingness to use or pay, it\'s time to launch.\n\nPractical tip: After each iteration, do a quick "before and after" comparison. Show users the old version and new version to confirm your changes actually improved the experience. This prevents the common trap of changing things that were already working well.',
              resources: [
                { title: 'The Iteration Playbook for Product Builders', url: '#', type: 'guide' },
                { title: 'When to Ship: The 80% Rule', url: '#', type: 'article' },
                { title: 'Iteration Tracking Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Plan an iteration cycle for your prototype: 1) List the top 5 issues from feedback (real or AI-simulated), 2) Prioritize using the Fix Now/Fix Next/Consider Later/Ignore framework, 3) For the top 2 issues, use AI to brainstorm 3 possible solutions each, 4) Create a 1-week iteration plan.',
                starterPrompt: 'Here are the top issues from user testing of [your product]: [list issues]. Help me prioritize them using the Fix Now / Fix Next / Consider Later / Ignore framework. Then for the top 2 "Fix Now" items, suggest 3 possible solutions each with pros and cons.',
                hint: 'When brainstorming solutions, ask AI for the simplest solution that addresses the root cause. Often the best fix is clearer copy or simpler navigation, not adding features.'
              }
            }
          ]
        },
        {
          id: 'w3-m4',
          title: 'Module 4: Iteration & Refinement',
          lessons: [
            {
              id: 'w3-m4-l1',
              title: 'Lesson 1: A/B Testing with AI',
              slides: [
                {
                  title: 'Testing What Works Best',
                  content: '<p><strong>A/B testing</strong> is comparing two versions to see which performs better. AI makes A/B testing accessible to everyone:</p><ul><li><strong>Generate variants:</strong> AI creates multiple versions of copy, layouts, or features</li><li><strong>Design experiments:</strong> AI helps structure proper tests</li><li><strong>Analyze results:</strong> AI interprets data and recommends winners</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#d35400;color:#fff;padding:12px;border-radius:8px;text-align:center"><div style="font-size:18px">🅰️</div><div style="font-size:13px;font-weight:bold">Version A</div><div style="font-size:12px">Current design</div></div><div style="background:#f39c12;color:#fff;padding:12px;border-radius:8px;text-align:center"><div style="font-size:18px">🅱️</div><div style="font-size:13px;font-weight:bold">Version B</div><div style="font-size:12px">New variation</div></div></div>'
                },
                {
                  title: 'What to A/B Test',
                  content: '<p>Focus your A/B tests on elements with the biggest impact:</p><ul><li><strong>Headlines:</strong> Often the #1 factor in conversion</li><li><strong>Call-to-action buttons:</strong> Text, color, placement</li><li><strong>Value proposition:</strong> How you describe your product\'s benefit</li><li><strong>Pricing display:</strong> How you present pricing options</li><li><strong>Onboarding flow:</strong> The first experience new users have</li></ul><p><strong>Rule:</strong> Test one thing at a time. Multiple changes make it impossible to know what caused the difference.</p>'
                },
                {
                  title: 'AI-Generated Variants',
                  content: '<p>Use AI to create test variants quickly:</p><p><code>"I\'m A/B testing my landing page headline. The current headline is: [current]. Generate 5 alternative headlines that test different angles: benefit-focused, curiosity-driven, social proof, urgency, and simplicity. Keep the same target audience: [audience]."</code></p><p>AI is perfect for this because it can quickly generate diverse alternatives while maintaining brand consistency.</p>'
                },
                {
                  title: 'Interpreting Results',
                  content: '<p>After running a test, use AI to analyze results:</p><p><code>"Here are the A/B test results: Version A had [X] visitors and [Y] conversions. Version B had [X] visitors and [Y] conversions. Is this result statistically significant? What does it tell us about user preferences? What should I test next?"</code></p><p>AI can help you understand statistical significance, calculate confidence levels, and suggest follow-up experiments.</p>'
                }
              ],
              objectives: [
                'Understand A/B testing fundamentals and when to use them',
                'Use AI to generate test variants for key page elements',
                'Design proper A/B tests with clear hypotheses',
                'Interpret test results with AI-powered analysis'
              ],
              notes: 'A/B testing removes guesswork from product decisions. Instead of debating whether headline A or headline B is better, you test both and let user behavior decide. AI makes this process faster by generating variants and analyzing results.\n\nThe key principle is to test one variable at a time. If you change the headline AND the button color AND the layout, you won\'t know which change caused the improvement (or decline).\n\nPractical tip: Start A/B testing with your landing page headline — it\'s the highest-impact element and easiest to test. Use AI to generate 5 variants, then use a tool like Google Optimize (free) or your landing page builder\'s built-in A/B testing to run the experiment.',
              resources: [
                { title: 'A/B Testing for Beginners', url: '#', type: 'guide' },
                { title: 'Statistical Significance Explained Simply', url: '#', type: 'article' },
                { title: 'A/B Test Calculator', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Design an A/B test for your landing page or product: 1) Choose one element to test (headline, CTA, value prop), 2) Use AI to generate 3 variants, 3) Write a hypothesis for each, 4) Define your success metric and minimum sample size.',
                starterPrompt: 'I want to A/B test [element] on my [landing page/product]. The current version is: "[current text]". My target audience is [describe]. Generate 3 alternative versions that test different psychological angles. For each, explain the hypothesis behind it.',
                hint: 'A good A/B test hypothesis follows this format: "If I change [element] to [new version], then [metric] will improve because [reasoning]." This forces clear thinking about what you expect and why.'
              }
            },
            {
              id: 'w3-m4-l2',
              title: 'Lesson 2: Performance Optimization',
              slides: [
                {
                  title: 'Optimizing Your AI Workflows',
                  content: '<p>As you build more complex AI-powered products and workflows, optimization becomes important:</p><ul><li><strong>Prompt efficiency:</strong> Get better results with shorter, more focused prompts</li><li><strong>Cost optimization:</strong> Choose the right AI model for each task</li><li><strong>Speed optimization:</strong> Structure workflows for faster execution</li><li><strong>Quality optimization:</strong> Improve output consistency and accuracy</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#d35400;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">⚡</div>Speed</div><div style="background:#f39c12;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">💎</div>Quality</div><div style="background:#27ae60;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">💰</div>Cost</div><div style="background:#2980b9;color:#fff;padding:10px;border-radius:8px;text-align:center;font-size:12px"><div style="font-size:18px">🎯</div>Accuracy</div></div>'
                },
                {
                  title: 'Prompt Optimization Techniques',
                  content: '<p>Make your prompts more efficient:</p><ul><li><strong>Front-load instructions:</strong> Put the most important instruction first</li><li><strong>Use structured formats:</strong> Bullet points and numbered lists are processed more accurately</li><li><strong>Include examples:</strong> "Few-shot" examples dramatically improve output quality</li><li><strong>Set explicit constraints:</strong> Word limits, format requirements, and exclusions reduce revision cycles</li></ul>'
                },
                {
                  title: 'Choosing the Right Model',
                  content: '<p>Not every task needs the most powerful (and expensive) AI model:</p><ul><li><strong>Simple tasks</strong> (classification, formatting, basic Q&A): Use faster, cheaper models (GPT-3.5, Haiku)</li><li><strong>Medium tasks</strong> (writing, analysis, summarization): Use balanced models (GPT-4o, Sonnet)</li><li><strong>Complex tasks</strong> (reasoning, coding, creative): Use powerful models (GPT-4, Opus)</li></ul><p>Matching task complexity to model capability saves money and often improves speed.</p>'
                },
                {
                  title: 'Building Reliable AI Outputs',
                  content: '<p>Make your AI workflows produce consistent, reliable results:</p><ul><li><strong>Temperature control:</strong> Lower temperature = more consistent output</li><li><strong>Output validation:</strong> Build checks into your workflow</li><li><strong>Error handling:</strong> Plan for when AI gives unexpected results</li><li><strong>Human review:</strong> Keep a human in the loop for important decisions</li></ul>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">🎯 Reliability Tip</p><p style="margin:8px 0 0;font-size:13px;color:#166534">The most reliable AI workflows have human checkpoints at critical decision points. Full automation is the goal, but trust is built through verified automation.</p></div>'
                }
              ],
              objectives: [
                'Optimize prompts for better efficiency and accuracy',
                'Choose the right AI model for each task type',
                'Build reliable, consistent AI-powered workflows',
                'Balance speed, quality, and cost in AI operations'
              ],
              notes: 'Optimization is about getting more value from AI while reducing time, cost, and errors. The three key optimization areas are: prompt efficiency (better results with clearer prompts), model selection (right tool for the right job), and workflow reliability (consistent, predictable outputs).\n\nNot every task needs the most powerful model. Simple classification and formatting tasks work great with cheaper, faster models, while complex reasoning and creative tasks benefit from more capable models. This matching saves money and often improves speed.\n\nPractical tip: Review your most-used prompts and optimize them. Remove unnecessary words, add clear formatting instructions, and include one example of desired output. These small changes often dramatically improve both quality and consistency.',
              resources: [
                { title: 'Prompt Optimization Techniques', url: '#', type: 'guide' },
                { title: 'AI Model Comparison Guide', url: '#', type: 'article' },
                { title: 'Workflow Reliability Checklist', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Optimize your three most-used prompts: 1) Identify your top 3 prompts by frequency, 2) For each, create an optimized version (clearer, shorter, with examples), 3) Test both versions and compare quality, 4) Document which model works best for each task.',
                starterPrompt: 'I want to optimize this prompt I use frequently: "[your current prompt]". Help me: 1) Make it more concise without losing effectiveness, 2) Add a few-shot example for better results, 3) Suggest the optimal AI model for this task, 4) Add output format instructions for consistency.',
                hint: 'The biggest optimization gains usually come from adding one good example (few-shot prompting) and specifying the exact output format. These two changes alone can improve consistency by 50%+.'
              }
            },
            {
              id: 'w3-m4-l3',
              title: 'Lesson 3: Launch Preparation',
              slides: [
                {
                  title: 'Getting Ready to Launch',
                  content: '<p>You\'ve ideated, validated, prototyped, and iterated. Now it\'s time to <strong>prepare for launch</strong>. AI helps with every aspect of launch preparation:</p><ul><li><strong>Launch copy:</strong> Product descriptions, press releases, social posts</li><li><strong>Launch plan:</strong> Timeline, milestones, and checklists</li><li><strong>Launch messaging:</strong> Targeted communication for different audiences</li><li><strong>Contingency planning:</strong> Preparing for things that might go wrong</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#d35400;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📝 Copy & Messaging → AI writes it</div><div style="background:#e67e22;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📋 Launch Plan → AI structures it</div><div style="background:#f39c12;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📢 Distribution → AI optimizes it</div><div style="background:#f1c40f;color:#1a0533;padding:8px 14px;border-radius:6px;font-size:13px">🛡️ Contingencies → AI prepares them</div></div>'
                },
                {
                  title: 'AI-Generated Launch Plan',
                  content: '<p>Use AI to create a comprehensive launch plan:</p><p><code>"Create a 2-week launch plan for [product]. Include: pre-launch activities (week 1), launch day timeline (hour by hour), post-launch activities (week 2). Cover: social media posts, email announcements, community engagement, PR outreach, and metrics to track."</code></p><p>This gives you a complete playbook. You\'d normally spend days planning — AI does it in minutes.</p>'
                },
                {
                  title: 'Launch Messaging Framework',
                  content: '<p>AI creates targeted messages for different audiences:</p><ul><li><code>"Write a launch announcement for our existing users. Tone: excited, grateful. Emphasize new features."</code></li><li><code>"Write a Product Hunt description for [product]. Include tagline, description, and maker\'s comment."</code></li><li><code>"Create a press release for [product launch]. Focus on the problem we solve and our unique approach."</code></li><li><code>"Write 10 social media posts announcing the launch across Twitter, LinkedIn, and Instagram."</code></li></ul>'
                },
                {
                  title: 'Post-Launch and Beyond',
                  content: '<p>Launch is just the beginning. Plan for what comes next:</p><ul><li><strong>Monitor feedback:</strong> Set up channels for user feedback</li><li><strong>Track metrics:</strong> Users, engagement, conversion, retention</li><li><strong>Rapid response:</strong> Have templates ready for common issues</li><li><strong>Iteration plan:</strong> Schedule your first post-launch improvement cycle</li></ul><p><strong>Week 3 Complete!</strong> You\'ve gone from idea to launch-ready prototype. Next week: AI agents and the future of work!</p>',
                  visual: '<div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#6c3ce0">🏆 Week 3 Complete!</p><p style="margin:8px 0 0;font-size:13px">You can now take any idea from concept to launch-ready prototype using AI at every stage. Next week: AI agents and building your AI workforce!</p></div>'
                }
              ],
              objectives: [
                'Create a comprehensive AI-generated launch plan',
                'Write targeted launch messaging for different audiences',
                'Prepare contingency plans for common launch scenarios',
                'Set up post-launch monitoring and iteration systems'
              ],
              notes: 'Launch preparation is where all your work comes together. AI helps you create a comprehensive launch plan, write targeted messaging for different audiences, and prepare for contingencies — all in a fraction of the traditional time.\n\nThe most important launch principle: a good launch plan covers pre-launch (building anticipation), launch day (coordinated announcements), and post-launch (monitoring, responding, and iterating). AI can help with all three phases.\n\nPractical tip: Even if you\'re not ready to launch yet, create a launch plan now. It forces you to think about your audience, messaging, and distribution — which often reveals gaps in your product or positioning that you can fix before launch day.',
              resources: [
                { title: 'The Product Launch Checklist', url: '#', type: 'guide' },
                { title: 'How to Launch on Product Hunt', url: '#', type: 'article' },
                { title: 'Launch Day Timeline Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Create a complete launch package for your project: 1) A 2-week launch plan with daily milestones, 2) Launch messages for 3 different platforms, 3) A list of 5 things that could go wrong and your response plan for each, 4) A post-launch feedback collection plan.',
                starterPrompt: 'I\'m preparing to launch [your product/project]. Target audience: [describe]. Help me create a comprehensive 2-week launch plan with: Week 1 pre-launch activities (building anticipation), Launch Day hour-by-hour timeline, and Week 2 post-launch follow-up activities.',
                hint: 'The best launches create anticipation before launch day. Include at least 3 pre-launch activities (teaser posts, early access invitations, countdown). And always have a "what if things go wrong" plan ready.'
              }
            }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // WEEK 4 – AI Agents & Your Workforce
    // ──────────────────────────────────────────────
    {
      id: 'week-4',
      title: 'Week 4',
      name: 'AI Agents & Your Workforce',
      badge: 'upcoming',
      gradient: 'linear-gradient(135deg, #1a0a3e 0%, #2d1b69 40%, #4a2d8a 100%)',
      emoji: '��',
      lessonsCount: 12,
      tasksCount: 16,
      modules: [
        {
          id: 'w4-m1',
          title: 'Module 1: Understanding AI Agents',
          lessons: [
            {
              id: 'w4-m1-l1',
              title: 'Lesson 1: What Are AI Agents?',
              slides: [
                {
                  title: 'Beyond Chatbots: AI Agents',
                  content: '<p>An <strong>AI agent</strong> is an AI system that can independently take actions to accomplish goals. Unlike a chatbot that responds to one message at a time, agents can:</p><ul><li><strong>Plan:</strong> Break down goals into steps</li><li><strong>Act:</strong> Execute tasks using tools and APIs</li><li><strong>Observe:</strong> Check the results of their actions</li><li><strong>Adapt:</strong> Adjust their approach based on results</li></ul><p>Agents represent the next evolution of AI — from conversation to action.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#2d1b69;color:#fff;padding:12px;border-radius:8px;text-align:center"><div style="font-size:18px">💬</div><div style="font-size:13px;font-weight:bold">Chatbot</div><div style="font-size:11px;margin-top:4px">You ask → It responds<br>One turn at a time</div></div><div style="background:#4a2d8a;color:#fff;padding:12px;border-radius:8px;text-align:center;border:2px solid #a78bfa"><div style="font-size:18px">🤖</div><div style="font-size:13px;font-weight:bold">Agent</div><div style="font-size:11px;margin-top:4px">You set goal → It plans, acts, and delivers results</div></div></div>'
                },
                {
                  title: 'How AI Agents Work',
                  content: '<p>AI agents follow a <strong>Plan-Act-Observe</strong> loop:</p><ul><li><strong>1. Perceive:</strong> Understand the goal and current situation</li><li><strong>2. Plan:</strong> Create a sequence of steps to achieve the goal</li><li><strong>3. Act:</strong> Execute the next step using available tools</li><li><strong>4. Observe:</strong> Check the result and adjust the plan if needed</li><li><strong>5. Repeat:</strong> Continue until the goal is achieved</li></ul><p>This loop is what makes agents "agentic" — they don\'t just respond, they <em>pursue goals</em>.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:center"><span style="background:#1a0a3e;color:#fff;padding:8px 14px;border-radius:20px;font-size:12px">🎯 Goal</span><span>→</span><span style="background:#2d1b69;color:#fff;padding:8px 14px;border-radius:20px;font-size:12px">📋 Plan</span><span>→</span><span style="background:#4a2d8a;color:#fff;padding:8px 14px;border-radius:20px;font-size:12px">⚡ Act</span><span>→</span><span style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:20px;font-size:12px">👁️ Observe</span><span>🔄</span></div>'
                },
                {
                  title: 'Real-World AI Agents',
                  content: '<p>AI agents are already being used in production:</p><ul><li><strong>Customer support agents:</strong> Handle inquiries, look up orders, process returns automatically</li><li><strong>Research agents:</strong> Search the web, compile information, write reports</li><li><strong>Coding agents:</strong> Write code, run tests, debug issues (GitHub Copilot Workspace)</li><li><strong>Sales agents:</strong> Qualify leads, schedule meetings, follow up automatically</li><li><strong>Personal assistants:</strong> Manage email, schedule, and tasks</li></ul>'
                },
                {
                  title: 'Why Agents Matter for You',
                  content: '<p>AI agents are transforming work by handling <strong>entire workflows</strong>, not just individual tasks:</p><ul><li><strong>Today:</strong> You use AI to write an email (one task)</li><li><strong>With agents:</strong> An agent manages your entire inbox — reads emails, drafts replies, schedules meetings, follows up — and you just review</li></ul><p>The shift from "AI as tool" to "AI as teammate" is happening now. Understanding agents puts you ahead of the curve.</p>',
                  visual: '<div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#6c3ce0">🔮 The Future is Agentic</p><p style="margin:8px 0 0;font-size:13px">Within 2-3 years, most professionals will work alongside AI agents that handle routine workflows autonomously. Understanding agents now is a career advantage.</p></div>'
                }
              ],
              objectives: [
                'Define what AI agents are and how they differ from chatbots',
                'Understand the Plan-Act-Observe loop that powers agents',
                'Identify real-world applications of AI agents',
                'Recognize why agents represent the next evolution of AI'
              ],
              notes: 'AI agents represent a paradigm shift from AI as a conversation tool to AI as an autonomous worker. Unlike chatbots that respond to one message at a time, agents can plan multi-step workflows, use tools to execute tasks, observe results, and adapt their approach.\n\nThe Plan-Act-Observe loop is the core of agent behavior. An agent receives a goal, breaks it into steps, executes each step using available tools (web search, email, APIs), checks the results, and adjusts its approach as needed.\n\nPractical tip: Start thinking about your daily workflows in terms of "what could an agent handle end-to-end?" The tasks that are most agent-ready are repetitive, rule-based, and involve multiple steps with clear success criteria.',
              resources: [
                { title: 'What Are AI Agents? An Introduction', url: '#', type: 'article' },
                { title: 'The Rise of AI Agents (Video)', url: '#', type: 'video' },
                { title: 'AI Agent Use Cases Directory', url: '#', type: 'guide' }
              ],
              exercise: {
                task: 'Map 3 workflows in your daily work that could be handled by an AI agent. For each workflow: describe the current manual steps, identify which steps an agent could handle, and note which steps still need human judgment.',
                starterPrompt: 'Help me identify workflows in my daily work that an AI agent could handle. I work as a [your role] and my typical day includes: [describe daily tasks]. For each workflow you identify, break it down into: current manual steps, which steps an agent could automate, and which steps still need me.',
                hint: 'Look for workflows with 5+ steps that you do repeatedly. Common examples: email management, report generation, scheduling, data entry and analysis, and customer communication.'
              }
            },
            {
              id: 'w4-m1-l2',
              title: 'Lesson 2: Types of Agents',
              slides: [
                {
                  title: 'The Agent Spectrum',
                  content: '<p>AI agents range from simple to complex. Understanding the types helps you choose the right level for each task:</p><ul><li><strong>Simple agents:</strong> Single tool, single task (e.g., email auto-responder)</li><li><strong>Tool-using agents:</strong> Can use multiple tools to accomplish goals (e.g., research + write + publish)</li><li><strong>Reasoning agents:</strong> Can plan, reason, and make decisions (e.g., project managers)</li><li><strong>Multi-agent systems:</strong> Multiple agents collaborating (e.g., a development team of agents)</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#dcfce7;padding:8px 14px;border-radius:6px;font-size:13px"><strong>🟢 Simple:</strong> Auto-reply to FAQs</div><div style="background:#fefce8;padding:8px 14px;border-radius:6px;font-size:13px"><strong>🟡 Tool-using:</strong> Research + summarize + email</div><div style="background:#fed7aa;padding:8px 14px;border-radius:6px;font-size:13px"><strong>🟠 Reasoning:</strong> Plan project, assign tasks, track progress</div><div style="background:#fecaca;padding:8px 14px;border-radius:6px;font-size:13px"><strong>🔴 Multi-agent:</strong> Team of specialized agents</div></div>'
                },
                {
                  title: 'Simple Agents: Your Starting Point',
                  content: '<p>Simple agents follow a fixed pattern with one tool:</p><ul><li><strong>Email classifier:</strong> Reads email → Categorizes → Routes to folder</li><li><strong>FAQ responder:</strong> Receives question → Matches to answer → Responds</li><li><strong>Content scheduler:</strong> Takes content → Formats for platform → Schedules post</li></ul><p>These are the easiest to build and the best place to start learning agent development.</p>'
                },
                {
                  title: 'Tool-Using Agents',
                  content: '<p>More powerful agents have access to multiple tools:</p><ul><li><strong>Web search</strong> — Find current information online</li><li><strong>Code execution</strong> — Run calculations or scripts</li><li><strong>File manipulation</strong> — Read, write, and modify files</li><li><strong>API calls</strong> — Interact with external services</li><li><strong>Database queries</strong> — Look up and store information</li></ul><p>Tool-using agents can handle complex, multi-step tasks by combining these capabilities intelligently.</p>',
                  visual: '<div style="background:#f5f3ff;border:2px solid #6c3ce0;padding:16px;border-radius:12px;text-align:center"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px">AGENT TOOLBOX</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px"><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">🔍 Search</div><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">💻 Code</div><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">📁 Files</div><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">🔌 APIs</div><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">🗄️ Database</div><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">📧 Email</div></div></div>'
                },
                {
                  title: 'Reasoning Agents',
                  content: '<p>Reasoning agents can think through complex problems:</p><ul><li><strong>Chain of thought:</strong> Breaking problems into logical steps</li><li><strong>Self-reflection:</strong> Evaluating their own output and improving it</li><li><strong>Planning:</strong> Creating multi-step plans and adapting them</li><li><strong>Decision-making:</strong> Choosing between options based on criteria</li></ul><p>These agents can handle ambiguous tasks that require judgment, not just execution.</p>'
                }
              ],
              objectives: [
                'Distinguish between simple, tool-using, reasoning, and multi-agent systems',
                'Identify which agent type is appropriate for different tasks',
                'Understand the tools that agents can leverage',
                'Recognize the capabilities of reasoning agents'
              ],
              notes: 'AI agents exist on a spectrum from simple (one task, one tool) to complex (multiple agents collaborating). Understanding this spectrum helps you choose the right level of complexity for each automation opportunity.\n\nSimple agents are the best starting point — they\'re easy to build and immediately useful. As you gain confidence, you can progress to tool-using agents that combine multiple capabilities, and eventually to reasoning agents that can plan and make decisions.\n\nPractical tip: Start with a simple agent for a task you do daily. An email classifier, FAQ responder, or content formatter are great first agents. Once you see the value, you\'ll naturally want to build more complex agents.',
              resources: [
                { title: 'Types of AI Agents Explained', url: '#', type: 'guide' },
                { title: 'Building Your First AI Agent', url: '#', type: 'video' },
                { title: 'Agent Framework Comparison', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'For each type of agent (simple, tool-using, reasoning), identify one real use case in your work. Describe: what goal the agent would pursue, what tools it would need, and how you would verify it did a good job.',
                starterPrompt: 'I work as a [your role]. Help me identify agent opportunities at each complexity level:\n1. Simple agent: A single-task automation I could use daily\n2. Tool-using agent: A multi-step workflow that combines 3+ tools\n3. Reasoning agent: A complex task requiring planning and judgment',
                hint: 'Think about tasks you spend the most time on. Simple agents handle routine tasks. Tool-using agents handle workflows. Reasoning agents handle tasks that require planning. Match the agent type to the task complexity.'
              }
            },
            {
              id: 'w4-m1-l3',
              title: 'Lesson 3: Agent Architecture',
              slides: [
                {
                  title: 'How Agents Are Built',
                  content: '<p>Every AI agent has these core components:</p><ul><li><strong>LLM Brain:</strong> The AI model that thinks and makes decisions</li><li><strong>Memory:</strong> Short-term (conversation) and long-term (stored knowledge)</li><li><strong>Tools:</strong> External capabilities the agent can use</li><li><strong>Prompt/Instructions:</strong> The rules and goals that guide the agent</li><li><strong>Orchestration:</strong> The system that manages the agent\'s workflow</li></ul>',
                  visual: '<div style="background:#1a0a3e;color:#fff;padding:16px;border-radius:12px"><div style="text-align:center;margin-bottom:8px;font-size:12px;font-weight:bold;color:#a78bfa">AGENT ARCHITECTURE</div><div style="display:flex;flex-direction:column;gap:4px"><div style="background:#2d1b69;padding:8px 12px;border-radius:6px;text-align:center;font-size:12px">🧠 LLM Brain (GPT-4, Claude, etc.)</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:4px"><div style="background:#4a2d8a;padding:6px;border-radius:6px;text-align:center;font-size:11px">💾 Memory</div><div style="background:#4a2d8a;padding:6px;border-radius:6px;text-align:center;font-size:11px">🛠️ Tools</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:4px"><div style="background:#6c3ce0;padding:6px;border-radius:6px;text-align:center;font-size:11px">📋 Instructions</div><div style="background:#6c3ce0;padding:6px;border-radius:6px;text-align:center;font-size:11px">⚙️ Orchestration</div></div></div></div>'
                },
                {
                  title: 'The Role of Memory',
                  content: '<p>Agent memory comes in different forms:</p><ul><li><strong>Short-term memory:</strong> Current conversation context — what\'s happened in this session</li><li><strong>Long-term memory:</strong> Stored knowledge and past experiences — persists across sessions</li><li><strong>Working memory:</strong> Intermediate results and current task state</li></ul><p>Good memory management is crucial: too little and the agent forgets important context; too much and it gets confused or slow.</p>'
                },
                {
                  title: 'Tools: The Agent\'s Hands',
                  content: '<p>Tools are what give agents the ability to <em>do things</em> in the real world:</p><ul><li><strong>Information tools:</strong> Web search, database queries, file reading</li><li><strong>Action tools:</strong> Send email, create documents, update spreadsheets</li><li><strong>Computation tools:</strong> Calculator, code execution, data analysis</li><li><strong>Communication tools:</strong> Slack, email, calendar APIs</li></ul><p>An agent without tools is just a chatbot. Tools transform AI from a thinker into a doer.</p>'
                },
                {
                  title: 'Designing Agent Instructions',
                  content: '<p>Agent instructions (system prompts) are critical for good behavior:</p><ul><li><strong>Identity:</strong> Who the agent is and its purpose</li><li><strong>Capabilities:</strong> What tools are available and when to use them</li><li><strong>Constraints:</strong> What the agent should NOT do</li><li><strong>Decision rules:</strong> How to handle edge cases and ambiguity</li><li><strong>Escalation:</strong> When to ask a human for help</li></ul><p>Well-designed instructions are the difference between a helpful agent and a chaotic one.</p>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">⚠️ Key Principle</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">Always include an <strong>escalation path</strong> in agent instructions. Agents should know when to stop and ask a human for guidance rather than proceeding with uncertain decisions.</p></div>'
                }
              ],
              objectives: [
                'Understand the core components of AI agent architecture',
                'Distinguish between short-term, long-term, and working memory',
                'Identify the types of tools that give agents real-world capabilities',
                'Design effective agent instructions with safety guardrails'
              ],
              notes: 'Understanding agent architecture helps you design better agents, even when using no-code tools. Every agent has an LLM brain (the AI model), memory (context and knowledge), tools (external capabilities), instructions (rules and goals), and orchestration (workflow management).\n\nThe most important design decision is the agent\'s instructions. Good instructions clearly define the agent\'s identity, capabilities, constraints, decision rules, and — critically — when to escalate to a human. This prevents agents from making costly mistakes.\n\nPractical tip: When designing agent instructions, always include a "when in doubt, ask a human" rule. Even the best-designed agents will encounter situations they can\'t handle well. Having a clear escalation path prevents small mistakes from becoming big problems.',
              resources: [
                { title: 'AI Agent Architecture Explained', url: '#', type: 'guide' },
                { title: 'Designing Effective Agent Instructions', url: '#', type: 'article' },
                { title: 'Agent Memory Systems Overview', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Design the architecture for a personal AI agent: 1) Choose a specific workflow it will handle, 2) Define its identity and purpose, 3) List the tools it needs, 4) Write its system instructions including constraints and escalation rules, 5) Describe its memory requirements.',
                starterPrompt: 'I want to design an AI agent that handles [specific workflow]. Help me define its architecture:\n1. Identity: What is this agent\'s role and purpose?\n2. Tools: What external tools does it need access to?\n3. Instructions: What rules should govern its behavior?\n4. Memory: What does it need to remember?\n5. Constraints: What should it never do?',
                hint: 'The best agent instructions are specific and include examples. Instead of "be helpful," write "When a user asks about pricing, look up the current pricing page and provide exact numbers. If pricing has changed in the last month, flag this for human review."'
              }
            }
          ]
        },
        {
          id: 'w4-m2',
          title: 'Module 2: Building Simple Agents',
          lessons: [
            {
              id: 'w4-m2-l1',
              title: 'Lesson 1: Your First Agent',
              slides: [
                {
                  title: 'Building Your First AI Agent',
                  content: '<p>Let\'s build a simple agent step by step. You don\'t need to code — we\'ll use existing platforms:</p><ul><li><strong>Option 1:</strong> ChatGPT Custom GPTs — Create a specialized GPT with custom instructions and capabilities</li><li><strong>Option 2:</strong> Claude Projects — Set up a project with documents and specific instructions</li><li><strong>Option 3:</strong> No-code agent builders — Botpress, Voiceflow, or CustomGPT</li></ul><p>We\'ll start with the simplest approach: a Custom GPT.</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:8px"><div style="background:#dcfce7;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px">🟢 Custom GPTs — Easiest</span><span style="font-size:12px;color:#16a34a">5 min setup</span></div><div style="background:#fefce8;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px">🟡 Claude Projects — Easy</span><span style="font-size:12px;color:#854d0e">10 min setup</span></div><div style="background:#fef2f2;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px">🔴 Agent Builders — Medium</span><span style="font-size:12px;color:#dc2626">30 min setup</span></div></div>'
                },
                {
                  title: 'Step-by-Step: Custom GPT Agent',
                  content: '<p>Building a Custom GPT agent:</p><ul><li><strong>Step 1:</strong> Go to ChatGPT → Explore GPTs → Create</li><li><strong>Step 2:</strong> Define your agent\'s name and description</li><li><strong>Step 3:</strong> Write detailed instructions (this is the system prompt)</li><li><strong>Step 4:</strong> Upload reference documents (product info, FAQs, guidelines)</li><li><strong>Step 5:</strong> Enable capabilities: Web Browsing, Code Interpreter, DALL-E</li><li><strong>Step 6:</strong> Test with sample conversations</li></ul>'
                },
                {
                  title: 'Writing Great Agent Instructions',
                  content: '<p>Your agent instructions should cover:</p><p><code>"You are [NAME], a [ROLE] agent for [PURPOSE]. Your job is to [PRIMARY TASK].</code></p><p><code>RULES:\n1. Always [key behavior]\n2. Never [prohibited action]\n3. When uncertain, [escalation behavior]</code></p><p><code>WORKFLOW:\n1. First, [step 1]\n2. Then, [step 2]\n3. Finally, [step 3]</code></p><p><code>TONE: [communication style]\nFORMAT: [preferred output format]"</code></p>'
                },
                {
                  title: 'Testing Your Agent',
                  content: '<p>Before sharing your agent, test it thoroughly:</p><ul><li><strong>Happy path:</strong> Does it handle normal requests correctly?</li><li><strong>Edge cases:</strong> What happens with unusual or ambiguous requests?</li><li><strong>Boundaries:</strong> Does it properly refuse out-of-scope requests?</li><li><strong>Escalation:</strong> Does it know when to ask for clarification?</li><li><strong>Consistency:</strong> Does it give similar answers to similar questions?</li></ul><p>Test with at least 10 different scenarios before deploying.</p>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">✅ Test Checklist</p><ul style="margin:8px 0 0;padding-left:16px;font-size:13px;color:#166534"><li>5 normal requests (happy path)</li><li>3 edge cases (unusual requests)</li><li>2 out-of-scope requests (boundaries)</li><li>Verify escalation behavior</li></ul></div>'
                }
              ],
              objectives: [
                'Build your first Custom GPT agent from scratch',
                'Write effective agent instructions with rules and workflows',
                'Test agents systematically across multiple scenarios',
                'Understand different no-code platforms for agent building'
              ],
              notes: 'Building your first agent is easier than you think. Custom GPTs on ChatGPT are the simplest starting point — you can create a functional agent in minutes with just instructions and uploaded documents. Claude Projects offer similar capabilities with a different approach.\n\nThe quality of your agent is 90% determined by the quality of its instructions. Spend the most time here: define its role clearly, set explicit rules, describe its workflow step by step, and — crucially — tell it what NOT to do and when to ask for help.\n\nPractical tip: Build a "personal FAQ agent" as your first project. Upload a document with common questions you get asked (at work, by clients, etc.) and create an agent that answers them. It\'s simple, useful, and teaches you the fundamentals.',
              resources: [
                { title: 'How to Create Custom GPTs', url: '#', type: 'video' },
                { title: 'Custom GPT Best Practices', url: '#', type: 'guide' },
                { title: 'No-Code Agent Builder Comparison', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Build your first agent using Custom GPTs or Claude Projects: 1) Choose a specific purpose (FAQ bot, writing assistant, research helper), 2) Write detailed instructions, 3) Upload relevant documents, 4) Test with 10 different queries and refine the instructions based on results.',
                starterPrompt: 'Help me design a Custom GPT agent for [purpose]. I need:\n1. A name and description\n2. Detailed system instructions covering: identity, rules, workflow, tone, and format\n3. A list of documents I should upload\n4. 10 test queries I should use to verify it works correctly',
                hint: 'Start with a simple, well-defined purpose. A "meeting notes summarizer" or "email draft assistant" is better for learning than a complex "do everything" agent. You can always make it more sophisticated later.'
              }
            },
            {
              id: 'w4-m2-l2',
              title: 'Lesson 2: Tools & Functions',
              slides: [
                {
                  title: 'Giving Your Agent Superpowers',
                  content: '<p>Tools transform your agent from a conversationalist into a <strong>doer</strong>. Key tool categories:</p><ul><li><strong>Web browsing:</strong> Search the internet for current information</li><li><strong>Code execution:</strong> Run Python code for calculations and data processing</li><li><strong>File handling:</strong> Read, create, and modify documents</li><li><strong>API connections:</strong> Connect to external services (email, calendar, databases)</li><li><strong>Image generation:</strong> Create visual content on demand</li></ul>',
                  visual: '<div style="background:#1a0a3e;color:#fff;padding:16px;border-radius:12px"><div style="text-align:center;margin-bottom:8px;font-size:12px;font-weight:bold;color:#a78bfa">AGENT + TOOLS = ACTION</div><div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap"><div style="background:#2d1b69;padding:8px;border-radius:6px;font-size:20px">🤖</div><span style="font-size:18px">+</span><div style="display:flex;gap:4px;flex-wrap:wrap"><span style="background:#4a2d8a;padding:4px 8px;border-radius:4px;font-size:11px">🔍</span><span style="background:#4a2d8a;padding:4px 8px;border-radius:4px;font-size:11px">💻</span><span style="background:#4a2d8a;padding:4px 8px;border-radius:4px;font-size:11px">📁</span><span style="background:#4a2d8a;padding:4px 8px;border-radius:4px;font-size:11px">🔌</span></div><span style="font-size:18px">=</span><span style="background:#16a34a;padding:6px 12px;border-radius:6px;font-size:12px">⚡ Real Actions</span></div></div>'
                },
                {
                  title: 'How Tool Use Works',
                  content: '<p>When an agent decides to use a tool, this happens:</p><ul><li><strong>1. Decision:</strong> The LLM determines which tool is needed</li><li><strong>2. Parameters:</strong> The LLM generates the inputs for the tool</li><li><strong>3. Execution:</strong> The tool runs with those parameters</li><li><strong>4. Result:</strong> The tool output is fed back to the LLM</li><li><strong>5. Next step:</strong> The LLM decides what to do with the result</li></ul><p>The key insight: the AI <em>chooses</em> when and how to use tools based on the task at hand.</p>'
                },
                {
                  title: 'Practical Tool Combinations',
                  content: '<p>Powerful agent workflows combine multiple tools:</p><ul><li><strong>Research agent:</strong> Web search → Summarize → Write report → Save to file</li><li><strong>Data agent:</strong> Read spreadsheet → Code execution (analyze) → Generate chart → Email results</li><li><strong>Content agent:</strong> Web search (trends) → Write article → Generate image → Format for publishing</li></ul><p>Each step uses a different tool, orchestrated by the AI brain.</p>'
                },
                {
                  title: 'Setting Tool Permissions',
                  content: '<p>Important: control what tools your agent can use:</p><ul><li><strong>Read-only tools:</strong> Search, read files, query databases — safe to auto-execute</li><li><strong>Write tools:</strong> Send emails, modify files, post content — require human approval</li><li><strong>Destructive tools:</strong> Delete data, make purchases — always require confirmation</li></ul><p>Start with read-only tools and add write capabilities only after you trust the agent\'s judgment.</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#dcfce7;padding:8px 14px;border-radius:6px;font-size:13px"><strong>🟢 Safe:</strong> Read files, search web, query data</div><div style="background:#fefce8;padding:8px 14px;border-radius:6px;font-size:13px"><strong>🟡 Careful:</strong> Send emails, modify files, post content</div><div style="background:#fef2f2;padding:8px 14px;border-radius:6px;font-size:13px"><strong>🔴 Danger:</strong> Delete data, make purchases, admin actions</div></div>'
                }
              ],
              objectives: [
                'Understand how agents decide when and how to use tools',
                'Identify powerful tool combinations for different agent workflows',
                'Set appropriate permissions and safety levels for agent tools',
                'Design tool-equipped agents for practical use cases'
              ],
              notes: 'Tools are what transform agents from conversational AI into actionable AI. The key categories are: information tools (search, read), action tools (email, write), computation tools (code, calculate), and communication tools (Slack, calendar).\n\nTool permissions are critical for safety. Categorize tools into read-only (safe to auto-execute), write (require careful review), and destructive (always require human approval). Start with read-only tools and gradually expand as you build trust in the agent\'s decision-making.\n\nPractical tip: When building an agent, start with just one or two tools. Add more as the agent proves it can use the existing tools well. A research agent with just web search and summarization is more reliable than one with 10 tools it doesn\'t know how to use properly.',
              resources: [
                { title: 'AI Agent Tools: A Complete Guide', url: '#', type: 'guide' },
                { title: 'Function Calling in AI Agents', url: '#', type: 'article' },
                { title: 'Tool Safety Best Practices', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Design a tool-equipped agent for a specific workflow: 1) Define the agent\'s purpose, 2) List 3-5 tools it needs, 3) Classify each tool by safety level (safe/careful/danger), 4) Write the instructions that tell the agent when to use each tool.',
                starterPrompt: 'I want to build an agent that can [describe workflow]. Help me:\n1. List all the tools this agent would need\n2. Classify each tool by safety level\n3. Write instructions for when to use each tool\n4. Define approval requirements for each action',
                hint: 'Think about the "blast radius" of each tool. A tool that reads information can\'t cause harm. A tool that sends emails to clients could embarrass you. Set permissions accordingly.'
              }
            },
            {
              id: 'w4-m2-l3',
              title: 'Lesson 3: Error Handling',
              slides: [
                {
                  title: 'When Agents Go Wrong',
                  content: '<p>Even well-designed agents make mistakes. Understanding common failure modes helps you build more robust agents:</p><ul><li><strong>Hallucination:</strong> Agent invents information or makes incorrect claims</li><li><strong>Loop behavior:</strong> Agent gets stuck repeating the same action</li><li><strong>Scope creep:</strong> Agent tries to do things outside its defined purpose</li><li><strong>Tool misuse:</strong> Agent uses the wrong tool or wrong parameters</li><li><strong>Context loss:</strong> Agent forgets important information mid-workflow</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:#fef2f2;padding:10px;border-radius:8px;font-size:12px"><strong style="color:#dc2626">🔄 Loops</strong><br>Repeating actions endlessly</div><div style="background:#fef2f2;padding:10px;border-radius:8px;font-size:12px"><strong style="color:#dc2626">🌀 Hallucination</strong><br>Making up information</div><div style="background:#fef2f2;padding:10px;border-radius:8px;font-size:12px"><strong style="color:#dc2626">📏 Scope Creep</strong><br>Going beyond its role</div><div style="background:#fef2f2;padding:10px;border-radius:8px;font-size:12px"><strong style="color:#dc2626">🧠 Context Loss</strong><br>Forgetting mid-task</div></div>'
                },
                {
                  title: 'Building Error Prevention',
                  content: '<p>Prevent errors through careful instruction design:</p><ul><li><strong>Explicit boundaries:</strong> <code>"Only answer questions about [topic]. For anything else, say \'I can only help with [topic].\'"</code></li><li><strong>Verification steps:</strong> <code>"Before taking any action, confirm your understanding with the user."</code></li><li><strong>Retry limits:</strong> <code>"If a tool fails twice, stop and inform the user instead of trying again."</code></li><li><strong>Output validation:</strong> <code>"Always include your confidence level (high/medium/low) with each response."</code></li></ul>'
                },
                {
                  title: 'The Human-in-the-Loop Pattern',
                  content: '<p>The most reliable error handling: keep a human in the loop at critical points:</p><ul><li><strong>Review before sending:</strong> Agent drafts, human approves before send</li><li><strong>Checkpoint approvals:</strong> Agent pauses at key decision points for human input</li><li><strong>Exception handling:</strong> Agent escalates unusual situations to humans</li><li><strong>Audit logs:</strong> Agent logs every action for human review</li></ul><p>As trust grows, you can gradually remove human checkpoints — but never remove them from high-stakes actions.</p>'
                },
                {
                  title: 'Debugging Agent Behavior',
                  content: '<p>When your agent misbehaves, debug systematically:</p><ul><li><strong>Check the instructions:</strong> Is the behavior actually prohibited? Often the fix is clearer instructions.</li><li><strong>Review the conversation:</strong> At what point did the agent go wrong?</li><li><strong>Test in isolation:</strong> Try the problematic scenario independently</li><li><strong>Add guardrails:</strong> Write explicit rules preventing the specific failure</li><li><strong>Test again:</strong> Verify the fix works across multiple scenarios</li></ul>',
                  visual: '<div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#16a34a">🛡️ Error Handling Golden Rule</p><p style="margin:8px 0 0;font-size:13px;color:#166534">It\'s better for an agent to do nothing and ask for help than to do the wrong thing confidently. Design for safe failure.</p></div>'
                }
              ],
              objectives: [
                'Identify common agent failure modes and their causes',
                'Design instructions that prevent common errors',
                'Implement human-in-the-loop patterns for safety',
                'Debug agent behavior systematically'
              ],
              notes: 'Agent error handling is one of the most important — and most overlooked — aspects of agent design. Common failure modes include hallucination, infinite loops, scope creep, tool misuse, and context loss.\n\nThe best defense is well-written instructions that explicitly address edge cases, set clear boundaries, and include escalation rules. The human-in-the-loop pattern is essential for high-stakes actions: agent drafts, human approves.\n\nPractical tip: When debugging agent behavior, start with the instructions. 90% of agent problems are instruction problems. If the agent is doing something wrong, the fix is usually adding a specific rule that prevents that behavior. "When the user asks about X, always respond with Y instead of Z."',
              resources: [
                { title: 'Agent Error Handling Best Practices', url: '#', type: 'guide' },
                { title: 'The Human-in-the-Loop Design Pattern', url: '#', type: 'article' },
                { title: 'Debugging AI Agents: Common Issues', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Stress-test your agent: 1) Try 5 edge-case queries designed to break it, 2) Try 3 out-of-scope requests, 3) Document every failure, 4) Fix the instructions to prevent each failure, 5) Re-test to verify fixes work.',
                starterPrompt: 'I built an agent for [purpose]. Help me design 8 stress-test queries:\n1-3: Edge cases that might confuse it\n4-5: Out-of-scope requests it should refuse\n6-7: Ambiguous requests requiring clarification\n8: A request that might cause it to hallucinate',
                hint: 'The best stress tests try to get the agent to: go outside its scope, make up information, take risky actions without confirmation, or get stuck in a loop. Document every failure and update the instructions.'
              }
            }
          ]
        },
        {
          id: 'w4-m3',
          title: 'Module 3: Multi-Agent Systems',
          lessons: [
            {
              id: 'w4-m3-l1',
              title: 'Lesson 1: Agent Communication',
              slides: [
                {
                  title: 'Agents Working Together',
                  content: '<p>Just as human teams are more powerful than individuals, <strong>multiple AI agents working together</strong> can handle complex tasks that no single agent could manage:</p><ul><li><strong>Specialization:</strong> Each agent excels at a specific task</li><li><strong>Parallelism:</strong> Multiple agents work simultaneously</li><li><strong>Quality checks:</strong> One agent reviews another\'s work</li><li><strong>Complex workflows:</strong> Agents handle different stages of a pipeline</li></ul>',
                  visual: '<div style="background:#1a0a3e;color:#fff;padding:16px;border-radius:12px;text-align:center"><div style="font-size:12px;font-weight:bold;color:#a78bfa;margin-bottom:8px">MULTI-AGENT TEAM</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px"><div style="background:#2d1b69;padding:8px;border-radius:6px;font-size:11px">🔍 Researcher</div><div style="background:#2d1b69;padding:8px;border-radius:6px;font-size:11px">✍️ Writer</div><div style="background:#2d1b69;padding:8px;border-radius:6px;font-size:11px">✅ Reviewer</div></div><div style="margin-top:6px;font-size:11px;color:#a78bfa">Working together on shared goals</div></div>'
                },
                {
                  title: 'Communication Patterns',
                  content: '<p>How agents communicate with each other:</p><ul><li><strong>Sequential:</strong> Agent A\'s output becomes Agent B\'s input (pipeline)</li><li><strong>Parallel:</strong> Multiple agents work on different subtasks simultaneously</li><li><strong>Hierarchical:</strong> A manager agent delegates to worker agents</li><li><strong>Collaborative:</strong> Agents discuss and refine each other\'s work</li></ul><p>Each pattern has strengths for different types of tasks.</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:8px"><div style="background:#f5f3ff;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Sequential:</strong> A → B → C → Result</div><div style="background:#ede9fe;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Parallel:</strong> A ↗ B ↗ C → Merge → Result</div><div style="background:#ddd6fe;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Hierarchical:</strong> Manager → [Worker A, Worker B, Worker C]</div><div style="background:#c4b5fd;color:#1a0533;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Collaborative:</strong> A ⟷ B ⟷ C (discussion)</div></div>'
                },
                {
                  title: 'Designing Agent Interactions',
                  content: '<p>When designing multi-agent communication:</p><ul><li><strong>Define clear interfaces:</strong> What information does each agent pass to the next?</li><li><strong>Set quality standards:</strong> What does "good enough" output look like?</li><li><strong>Handle failures:</strong> What happens if one agent fails?</li><li><strong>Avoid loops:</strong> Set maximum iteration limits for collaborative discussions</li></ul><p>Think of it like designing an API between services — clear contracts make systems reliable.</p>'
                },
                {
                  title: 'Real-World Multi-Agent Example',
                  content: '<p>A content creation pipeline with 3 agents:</p><ul><li><strong>Agent 1 (Researcher):</strong> Searches the web, gathers sources, creates a research brief</li><li><strong>Agent 2 (Writer):</strong> Takes the research brief, writes the article, includes citations</li><li><strong>Agent 3 (Editor):</strong> Reviews the article, checks facts, improves clarity, gives final approval</li></ul><p>Each agent specializes in what it does best, producing better results than one agent doing everything.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:center"><div style="background:#2d1b69;color:#fff;padding:8px 12px;border-radius:8px;font-size:12px;text-align:center"><div>🔍</div>Researcher</div><span style="color:#6c3ce0">→</span><div style="background:#4a2d8a;color:#fff;padding:8px 12px;border-radius:8px;font-size:12px;text-align:center"><div>✍️</div>Writer</div><span style="color:#6c3ce0">→</span><div style="background:#6c3ce0;color:#fff;padding:8px 12px;border-radius:8px;font-size:12px;text-align:center"><div>✅</div>Editor</div><span style="color:#6c3ce0">→</span><div style="background:#16a34a;color:#fff;padding:8px 12px;border-radius:8px;font-size:12px;text-align:center"><div>📄</div>Published!</div></div>'
                }
              ],
              objectives: [
                'Understand why multi-agent systems outperform single agents for complex tasks',
                'Identify four communication patterns for agent collaboration',
                'Design clear interfaces between collaborating agents',
                'Apply multi-agent thinking to real-world workflows'
              ],
              notes: 'Multi-agent systems are more powerful than individual agents because they enable specialization, parallelism, and quality checking. Just as a team of specialists produces better results than one generalist, a team of specialized agents outperforms a single general-purpose agent.\n\nThe four main communication patterns are: sequential (pipeline), parallel (divide and conquer), hierarchical (manager-worker), and collaborative (discussion). Choose the pattern that matches your workflow structure.\n\nPractical tip: The simplest multi-agent pattern is sequential: Agent A produces output that becomes Agent B\'s input. Try this with ChatGPT: use one conversation to research, then paste the research into a new conversation for writing, then paste the draft into a third for editing. This manual multi-agent workflow demonstrates the concept.',
              resources: [
                { title: 'Introduction to Multi-Agent AI Systems', url: '#', type: 'guide' },
                { title: 'Agent Communication Patterns', url: '#', type: 'article' },
                { title: 'Building Multi-Agent Workflows (Video)', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Design a 3-agent system for a task you care about: 1) Define each agent\'s specialty, 2) Choose a communication pattern, 3) Define the interface (what data passes between agents), 4) Simulate the workflow manually using 3 separate ChatGPT/Claude conversations.',
                starterPrompt: 'I want to create a multi-agent system for [your task]. Help me design:\n1. Three specialized agents (name, role, and specific expertise)\n2. The communication pattern (sequential, parallel, or hierarchical)\n3. What each agent passes to the next\n4. The step-by-step workflow from input to final output',
                hint: 'Start with a sequential pipeline — it\'s the simplest pattern. Agent 1 does research, Agent 2 creates content, Agent 3 reviews and polishes. You can simulate this today using separate AI conversations.'
              }
            },
            {
              id: 'w4-m3-l2',
              title: 'Lesson 2: Orchestration Patterns',
              slides: [
                {
                  title: 'Orchestrating Agent Teams',
                  content: '<p><strong>Orchestration</strong> is how you coordinate multiple agents to work together effectively. Think of it as being the "conductor" of an AI orchestra:</p><ul><li><strong>Task routing:</strong> Directing the right task to the right agent</li><li><strong>Sequence management:</strong> Ensuring steps happen in the right order</li><li><strong>Quality gates:</strong> Checking output before passing to the next stage</li><li><strong>Error recovery:</strong> Handling failures gracefully</li></ul>',
                  visual: '<div style="background:#f5f3ff;border:2px solid #6c3ce0;padding:16px;border-radius:12px;text-align:center"><div style="font-size:12px;color:#6c3ce0;font-weight:bold;margin-bottom:8px">🎼 THE ORCHESTRATOR</div><div style="background:#6c3ce0;color:#fff;padding:8px;border-radius:6px;margin-bottom:8px;font-size:13px">Manager Agent</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px"><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">Agent A</div><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">Agent B</div><div style="background:#ede9fe;padding:6px;border-radius:6px;font-size:11px">Agent C</div></div></div>'
                },
                {
                  title: 'Common Orchestration Patterns',
                  content: '<p>Three orchestration approaches to know:</p><ul><li><strong>Router pattern:</strong> An orchestrator receives requests and routes them to the best specialist agent</li><li><strong>Pipeline pattern:</strong> Tasks flow through a series of agents, each adding value</li><li><strong>Supervisor pattern:</strong> A supervisor agent delegates, monitors, and aggregates results from worker agents</li></ul><p>These patterns can be combined for complex workflows.</p>'
                },
                {
                  title: 'Building with Orchestration Tools',
                  content: '<p>Several platforms support multi-agent orchestration:</p><ul><li><strong>ChatGPT + Custom GPTs:</strong> Create multiple specialized GPTs, use one as a router</li><li><strong>Microsoft AutoGen:</strong> Open-source multi-agent framework</li><li><strong>CrewAI:</strong> No-code multi-agent workflows</li><li><strong>LangGraph:</strong> Code-based agent orchestration</li></ul><p>For no-code users, the simplest approach is creating multiple Custom GPTs and manually routing between them.</p>'
                },
                {
                  title: 'Orchestration Best Practices',
                  content: '<p>Follow these principles for reliable orchestration:</p><ul><li><strong>Single responsibility:</strong> Each agent does ONE thing well</li><li><strong>Clear handoffs:</strong> Define exactly what information passes between agents</li><li><strong>Failure isolation:</strong> One agent failing shouldn\'t break the entire system</li><li><strong>Observability:</strong> Log what each agent does for debugging</li><li><strong>Human oversight:</strong> Include human checkpoints for critical decisions</li></ul>',
                  visual: '<div style="background:#fefce8;border-left:4px solid #eab308;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#854d0e">🏗️ Architecture Principle</p><p style="margin:8px 0 0;font-size:13px;color:#713f12">Build multi-agent systems like LEGO: each piece is simple and does one thing. The power comes from how you connect them, not from making any single piece complex.</p></div>'
                }
              ],
              objectives: [
                'Understand the role of orchestration in multi-agent systems',
                'Apply router, pipeline, and supervisor orchestration patterns',
                'Identify tools for building multi-agent workflows',
                'Follow best practices for reliable agent orchestration'
              ],
              notes: 'Orchestration is the art of coordinating multiple agents to work together effectively. The three main patterns — router, pipeline, and supervisor — cover most multi-agent use cases. The router pattern directs tasks to specialists, the pipeline chains agents in sequence, and the supervisor manages a team of workers.\n\nThe key principle is single responsibility: each agent should do one thing well. Complex, multi-purpose agents are harder to debug and less reliable than simple, specialized agents working together.\n\nPractical tip: Start orchestrating agents manually before using any framework. Create 3 Custom GPTs, each specialized for a different part of a workflow. Manually copy-paste output from one to the next. This teaches you the patterns before you automate them with tools like CrewAI or AutoGen.',
              resources: [
                { title: 'Multi-Agent Orchestration Patterns', url: '#', type: 'guide' },
                { title: 'Getting Started with CrewAI', url: '#', type: 'video' },
                { title: 'Agent Orchestration Framework Comparison', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Design and simulate a 3-agent pipeline using the supervisor pattern: 1) Create a supervisor agent that receives tasks and delegates, 2) Create 2 worker agents with different specialties, 3) Define the communication protocol, 4) Simulate a task flowing through the system.',
                starterPrompt: 'I want to build a supervised agent system for [your workflow]. Design:\n1. A supervisor agent that receives requests and delegates to specialists\n2. Two specialist agents with clear, non-overlapping responsibilities\n3. The decision criteria the supervisor uses to route tasks\n4. What each agent passes back to the supervisor',
                hint: 'The supervisor agent\'s instructions should include clear routing rules: "If the request is about X, delegate to Agent A. If about Y, delegate to Agent B. If unclear, ask the user for clarification."'
              }
            },
            {
              id: 'w4-m3-l3',
              title: 'Lesson 3: Real-World Examples',
              slides: [
                {
                  title: 'Agents in the Wild',
                  content: '<p>Let\'s look at how real companies and individuals use AI agents today:</p><ul><li><strong>Customer service:</strong> Agents handle 80%+ of support tickets automatically</li><li><strong>Software development:</strong> Coding agents write, test, and deploy code</li><li><strong>Content creation:</strong> Agent teams research, write, edit, and publish</li><li><strong>Sales:</strong> Agents qualify leads, personalize outreach, and schedule meetings</li><li><strong>Research:</strong> Agents survey literature, synthesize findings, and draft papers</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#2d1b69;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">🎧 Customer Service — 80% automation rate</div><div style="background:#4a2d8a;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">💻 Software Dev — AI writes 30-40% of code</div><div style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📝 Content — 10x output with agent teams</div><div style="background:#8b5cf6;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📈 Sales — 3x more qualified leads</div></div>'
                },
                {
                  title: 'Case Study: Content Agency Agent Team',
                  content: '<p>A content agency uses a 5-agent system:</p><ul><li><strong>Strategy Agent:</strong> Analyzes trends and suggests content topics</li><li><strong>Research Agent:</strong> Gathers data, finds sources, creates briefs</li><li><strong>Writing Agent:</strong> Produces first drafts from research briefs</li><li><strong>SEO Agent:</strong> Optimizes content for search engines</li><li><strong>Quality Agent:</strong> Fact-checks, proofreads, and ensures brand voice</li></ul><p>Result: 5x content output with the same team size, while maintaining quality.</p>'
                },
                {
                  title: 'Case Study: Personal Productivity Agent',
                  content: '<p>A solo entrepreneur uses agents for personal productivity:</p><ul><li><strong>Email Agent:</strong> Triages inbox, drafts responses, flags urgent items</li><li><strong>Meeting Agent:</strong> Creates agendas, takes notes, distributes action items</li><li><strong>Research Agent:</strong> Monitors industry news, summarizes relevant articles daily</li></ul><p>Time saved: <strong>3 hours per day</strong>, allowing focus on high-value creative and strategic work.</p>'
                },
                {
                  title: 'Building Your Agent Strategy',
                  content: '<p>Start building your personal agent strategy:</p><ul><li><strong>Phase 1:</strong> Simple chatbot agents for FAQ and drafting (this week)</li><li><strong>Phase 2:</strong> Tool-using agents for research and analysis (next month)</li><li><strong>Phase 3:</strong> Multi-agent workflows for complete task automation (next quarter)</li><li><strong>Phase 4:</strong> Fully autonomous agent systems with human oversight (next year)</li></ul><p>Start small, learn the patterns, and gradually increase complexity.</p>',
                  visual: '<div style="display:flex;flex-direction:column;gap:4px"><div style="background:#dcfce7;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Phase 1 (Now):</strong> Simple chatbot agents</div><div style="background:#fefce8;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Phase 2 (Month 2):</strong> Tool-using agents</div><div style="background:#fed7aa;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Phase 3 (Quarter 2):</strong> Multi-agent workflows</div><div style="background:#fecaca;padding:8px 14px;border-radius:6px;font-size:13px"><strong>Phase 4 (Year 1):</strong> Autonomous agent systems</div></div>'
                }
              ],
              objectives: [
                'Learn from real-world AI agent implementations',
                'Understand the ROI of different agent strategies',
                'Create a phased plan for personal agent adoption',
                'Apply agent concepts to your own professional context'
              ],
              notes: 'Real-world AI agents are already delivering significant value across industries. Customer service agents handle 80%+ of tickets, coding agents write 30-40% of code, and content agents enable 5-10x output increases.\n\nThe key takeaway is that agent adoption should be phased. Start with simple chatbot agents, progress to tool-using agents, then multi-agent workflows, and eventually autonomous systems. Each phase builds on the skills and trust developed in the previous one.\n\nPractical tip: This week, build one simple agent for your most repetitive task. Even a basic FAQ Custom GPT will save you time and teach you the fundamentals. Then plan your next agent for next month.',
              resources: [
                { title: 'AI Agent Case Studies Collection', url: '#', type: 'guide' },
                { title: 'The Business Case for AI Agents', url: '#', type: 'article' },
                { title: 'Agent Adoption Roadmap Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Create your personal 3-month agent adoption roadmap: 1) Month 1: Build 2 simple agents, 2) Month 2: Add tools to make them more capable, 3) Month 3: Connect them into a multi-agent workflow. Be specific about what each agent will do.',
                starterPrompt: 'Help me create a 3-month AI agent adoption plan. I work as a [your role] and my biggest time sinks are [list tasks]. Design a phased plan:\n- Month 1: Two simple agents I can build this week\n- Month 2: Enhanced agents with tools\n- Month 3: A multi-agent workflow connecting them',
                hint: 'Focus on tasks where mistakes are low-stakes for your first agents. Email drafting, meeting note summarization, and content ideation are great starting points. Save high-stakes tasks (client communication, financial analysis) for later when you\'re more experienced.'
              }
            }
          ]
        },
        {
          id: 'w4-m4',
          title: 'Module 4: Future of Work with AI',
          lessons: [
            {
              id: 'w4-m4-l1',
              title: 'Lesson 1: AI in the Workplace',
              slides: [
                {
                  title: 'The AI-Transformed Workplace',
                  content: '<p>AI is reshaping how work gets done across every industry. Understanding these changes positions you for success:</p><ul><li><strong>Augmentation over replacement:</strong> AI handles routine tasks, humans focus on strategy and creativity</li><li><strong>New roles emerging:</strong> AI trainer, prompt engineer, AI ethics specialist</li><li><strong>Skills shift:</strong> Communication, critical thinking, and AI literacy become essential</li><li><strong>Productivity gains:</strong> Companies using AI report 20-40% productivity improvements</li></ul>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="background:#fef2f2;padding:12px;border-radius:8px;text-align:center"><div style="font-size:14px;font-weight:bold;color:#dc2626">Old Way</div><div style="font-size:12px;margin-top:4px">Hours on routine tasks, limited output, siloed skills</div></div><div style="background:#dcfce7;padding:12px;border-radius:8px;text-align:center"><div style="font-size:14px;font-weight:bold;color:#16a34a">AI-Enhanced</div><div style="font-size:12px;margin-top:4px">AI handles routine, focus on creativity, cross-functional impact</div></div></div>'
                },
                {
                  title: 'Jobs That Grow with AI',
                  content: '<p>Certain roles become MORE valuable with AI:</p><ul><li><strong>Creative professionals:</strong> AI amplifies creative output, but humans drive vision</li><li><strong>Strategists:</strong> AI provides data, humans make strategic decisions</li><li><strong>Relationship builders:</strong> Trust, empathy, and negotiation remain human skills</li><li><strong>AI specialists:</strong> People who bridge the gap between AI capabilities and business needs</li><li><strong>Educators and trainers:</strong> Teaching people to work effectively with AI</li></ul>'
                },
                {
                  title: 'The Hybrid Worker',
                  content: '<p>The most valuable professionals will be <strong>hybrid workers</strong> — people who combine human skills with AI capabilities:</p><ul><li><strong>Human + AI writing:</strong> Better content than either alone</li><li><strong>Human + AI analysis:</strong> Faster and more thorough insights</li><li><strong>Human + AI creativity:</strong> More ideas, better execution</li><li><strong>Human + AI management:</strong> Better decisions, more capacity</li></ul><p>The question isn\'t "Will AI take my job?" It\'s "How do I become 10x more valuable WITH AI?"</p>',
                  visual: '<div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#6c3ce0">🔮 The Future Belongs To...</p><p style="margin:8px 0 0;font-size:13px">Professionals who combine deep human skills (creativity, empathy, judgment) with AI mastery (prompting, workflow design, agent building).</p></div>'
                },
                {
                  title: 'Preparing Your Team for AI',
                  content: '<p>If you lead or influence a team, help them embrace AI:</p><ul><li><strong>Start with quick wins:</strong> Show immediate time savings</li><li><strong>Address fears honestly:</strong> AI augments, not replaces (for most roles)</li><li><strong>Provide training:</strong> Share what you\'ve learned in this course</li><li><strong>Create safe spaces:</strong> Let people experiment without judgment</li><li><strong>Lead by example:</strong> Use AI visibly in your own work</li></ul>'
                }
              ],
              objectives: [
                'Understand how AI is transforming workplace dynamics',
                'Identify roles that grow more valuable with AI',
                'Develop a hybrid worker mindset combining human and AI skills',
                'Prepare yourself and your team for the AI-enhanced workplace'
              ],
              notes: 'The most important workplace shift isn\'t AI replacing humans — it\'s AI augmenting humans. The professionals who thrive will be "hybrid workers" who combine deep human skills (creativity, empathy, strategic thinking) with AI mastery (prompting, workflow design, agent building).\n\nRoles that become more valuable with AI tend to require creativity, relationship-building, strategic thinking, and complex decision-making. Roles at highest risk are those that are entirely routine, rule-based, and don\'t require human judgment.\n\nPractical tip: Start positioning yourself as an AI-savvy professional. Share your AI productivity wins with your team, offer to train colleagues, and propose AI-enhanced workflows. Being the person who bridges human expertise and AI capabilities is an incredibly valuable position.',
              resources: [
                { title: 'The Future of Work with AI', url: '#', type: 'guide' },
                { title: 'How AI is Changing Every Industry', url: '#', type: 'article' },
                { title: 'Becoming an AI-Enhanced Professional', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Create your "AI-Enhanced Professional" plan: 1) List 5 skills that make you valuable today, 2) For each skill, describe how AI amplifies it, 3) Identify 2 new AI-related skills you should develop, 4) Write a 30-day plan for developing one of them.',
                starterPrompt: 'Help me create a professional development plan for the AI age. My current role is [your role] and my key skills are [list skills]. For each skill, show me how AI can amplify it. Then suggest 2 new AI-related skills I should develop and create a 30-day learning plan.',
                hint: 'Focus on skills that combine your domain expertise WITH AI capabilities. A marketer who can design AI-powered campaigns is more valuable than either a marketer or an AI expert alone.'
              }
            },
            {
              id: 'w4-m4-l2',
              title: 'Lesson 2: Career Opportunities',
              slides: [
                {
                  title: 'AI Career Landscape',
                  content: '<p>AI is creating entirely new career paths. You don\'t need to be a programmer to pursue them:</p><ul><li><strong>Prompt Engineer:</strong> Design and optimize AI prompts for businesses ($80-150K+)</li><li><strong>AI Trainer:</strong> Teach teams how to use AI effectively</li><li><strong>AI Product Manager:</strong> Lead development of AI-powered products</li><li><strong>AI Operations:</strong> Manage AI tools, workflows, and agent systems</li><li><strong>AI Content Strategist:</strong> Create content strategies powered by AI</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#2d1b69;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">💰 Prompt Engineer — $80-150K+</div><div style="background:#4a2d8a;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📚 AI Trainer — $60-120K+</div><div style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">📦 AI Product Manager — $100-180K+</div><div style="background:#8b5cf6;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">⚙️ AI Operations — $70-130K+</div><div style="background:#a78bfa;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">✍️ AI Content Strategist — $60-110K+</div></div>'
                },
                {
                  title: 'Building Your AI Portfolio',
                  content: '<p>Stand out in the AI job market by building a portfolio:</p><ul><li><strong>Custom GPTs:</strong> Build and publish useful agents (visible on the GPT Store)</li><li><strong>Case studies:</strong> Document your AI productivity transformations</li><li><strong>Content:</strong> Share AI tips and insights on LinkedIn/Twitter</li><li><strong>Templates:</strong> Create and share prompt template libraries</li><li><strong>Tutorials:</strong> Teach others what you\'ve learned</li></ul><p>Your portfolio from THIS COURSE is already a strong start!</p>'
                },
                {
                  title: 'AI Freelancing Opportunities',
                  content: '<p>The freelance market for AI skills is booming:</p><ul><li><strong>AI consulting:</strong> Help businesses implement AI workflows</li><li><strong>Prompt writing:</strong> Create custom prompts and templates for clients</li><li><strong>Agent building:</strong> Build Custom GPTs and chatbots for businesses</li><li><strong>AI training:</strong> Run workshops and training sessions</li><li><strong>Content creation:</strong> Offer AI-enhanced content services</li></ul><p>Many of these opportunities require exactly the skills you\'ve built in this course.</p>'
                },
                {
                  title: 'Your Next Steps',
                  content: '<p>Take action this week:</p><ul><li><strong>Update your LinkedIn:</strong> Add AI skills and showcase your projects</li><li><strong>Build one public project:</strong> A Custom GPT, blog post, or tutorial</li><li><strong>Join AI communities:</strong> Reddit r/ChatGPT, Twitter AI community, Discord servers</li><li><strong>Start teaching:</strong> The best way to learn is to teach others</li><li><strong>Keep experimenting:</strong> Try a new AI tool or technique every week</li></ul>'
                }
              ],
              objectives: [
                'Identify emerging AI career paths that don\'t require coding',
                'Begin building an AI skills portfolio',
                'Explore AI freelancing and consulting opportunities',
                'Take concrete next steps to advance your AI career'
              ],
              notes: 'The AI career landscape is expanding rapidly with roles that don\'t require traditional programming skills. Prompt engineering, AI training, AI product management, and AI operations are all growing fields where the skills you\'ve built in this course are directly applicable.\n\nBuilding a portfolio is the fastest way to demonstrate your AI capabilities. Custom GPTs, case studies documenting your productivity gains, and educational content about AI are all valuable portfolio pieces.\n\nPractical tip: This week, build and publish one Custom GPT that solves a real problem. Share it on LinkedIn with a short post explaining what it does and what you learned building it. This single action puts you ahead of 95% of professionals in terms of visible AI skills.',
              resources: [
                { title: 'AI Careers Guide: No Coding Required', url: '#', type: 'guide' },
                { title: 'Building Your AI Portfolio', url: '#', type: 'article' },
                { title: 'Top AI Communities to Join', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Create your AI career action plan: 1) Identify 3 AI career paths that interest you, 2) For each, list the skills required (mark which you already have), 3) Build one portfolio piece this week (Custom GPT, tutorial, or case study), 4) Share it publicly.',
                starterPrompt: 'I want to explore AI career opportunities. My background is in [your field] and my AI skills include [list skills from this course]. Suggest 3 AI career paths that would leverage my existing expertise, list the skills needed for each, and help me plan one portfolio piece I can build this week.',
                hint: 'The best portfolio piece is one that solves a real problem for a specific audience. "A Custom GPT that helps teachers create lesson plans" is more impressive than "a general-purpose writing assistant." Be specific and useful.'
              }
            },
            {
              id: 'w4-m4-l3',
              title: 'Lesson 3: Ethics & Responsibility',
              slides: [
                {
                  title: 'Using AI Responsibly',
                  content: '<p>With great power comes great responsibility. As an AI practitioner, you should understand and practice ethical AI use:</p><ul><li><strong>Transparency:</strong> Be honest about when you use AI</li><li><strong>Accuracy:</strong> Always verify AI outputs before sharing</li><li><strong>Privacy:</strong> Don\'t share sensitive data with AI tools</li><li><strong>Fairness:</strong> Be aware of AI biases and limitations</li><li><strong>Attribution:</strong> Respect intellectual property and give credit</li></ul>',
                  visual: '<div style="display:flex;flex-direction:column;gap:6px"><div style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">🔍 Transparency — Be honest about AI use</div><div style="background:#8b5cf6;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">✅ Accuracy — Always verify outputs</div><div style="background:#a78bfa;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px">🔒 Privacy — Protect sensitive data</div><div style="background:#c4b5fd;color:#1a0533;padding:8px 14px;border-radius:6px;font-size:13px">⚖️ Fairness — Watch for bias</div><div style="background:#ddd6fe;color:#1a0533;padding:8px 14px;border-radius:6px;font-size:13px">�� Attribution — Respect IP</div></div>'
                },
                {
                  title: 'AI Bias and Fairness',
                  content: '<p>AI models can reflect and amplify biases from their training data:</p><ul><li><strong>Language bias:</strong> AI may default to certain cultural perspectives</li><li><strong>Representation bias:</strong> Underrepresented groups may get less accurate results</li><li><strong>Confirmation bias:</strong> AI tends to agree with you rather than challenge</li></ul><p><strong>Your responsibility:</strong> Critically evaluate AI outputs for bias, especially when the outputs affect other people (hiring, content about diverse groups, medical/legal advice).</p>'
                },
                {
                  title: 'Privacy and Data Security',
                  content: '<p>Protect yourself and others when using AI:</p><ul><li><strong>Never share:</strong> Passwords, financial data, personal identifiable information (PII), confidential business data</li><li><strong>Be cautious with:</strong> Customer data, internal documents, proprietary information</li><li><strong>Check policies:</strong> Your company may have specific AI usage policies</li><li><strong>Use enterprise tools:</strong> Business-grade AI tools typically offer better data protection</li></ul>',
                  visual: '<div style="background:#fef2f2;border-left:4px solid #dc2626;padding:16px;border-radius:0 8px 8px 0"><p style="margin:0;font-weight:bold;color:#dc2626">🔴 Never Share with AI</p><ul style="margin:8px 0 0;padding-left:16px;font-size:13px;color:#7f1d1d"><li>Passwords and API keys</li><li>Social security / ID numbers</li><li>Customer personal data</li><li>Confidential business strategies</li></ul></div>'
                },
                {
                  title: 'Your AI Ethics Pledge',
                  content: '<p>As you complete this course, commit to responsible AI use:</p><ul><li>I will be transparent about my use of AI</li><li>I will verify AI outputs before sharing or publishing</li><li>I will protect sensitive data and respect privacy</li><li>I will be aware of and mitigate AI biases</li><li>I will use AI to augment human capability, not deceive</li><li>I will stay informed about AI developments and ethics</li></ul><p><strong>🎓 Congratulations! You\'ve completed the AI course!</strong> You now have the skills, tools, and mindset to thrive in the AI era.</p>',
                  visual: '<div style="background:linear-gradient(135deg,#1a0a3e,#6c3ce0);color:#fff;padding:20px;border-radius:12px;text-align:center"><div style="font-size:32px;margin-bottom:8px">🎓</div><div style="font-size:16px;font-weight:bold;margin-bottom:4px">Course Complete!</div><div style="font-size:13px;opacity:0.9">You are now an AI-empowered professional.<br>Go build the future. 🚀</div></div>'
                }
              ],
              objectives: [
                'Understand the ethical dimensions of AI use',
                'Recognize and mitigate AI bias in your work',
                'Practice data privacy and security when using AI',
                'Commit to responsible AI use as a professional'
              ],
              notes: 'Ethics isn\'t an afterthought — it\'s a core competency for any AI professional. The five pillars of ethical AI use are: transparency (be honest about AI use), accuracy (always verify), privacy (protect data), fairness (watch for bias), and attribution (respect IP).\n\nAI bias is a particularly important concern. AI models can reflect biases from their training data, which can lead to unfair or inaccurate outputs, especially for underrepresented groups. Your job as an AI user is to critically evaluate outputs and ensure they\'re fair and accurate.\n\nPractical tip: Create a personal "AI Ethics Checklist" that you run through before publishing or sharing any AI-generated content: 1) Is it accurate and verified? 2) Is it fair and unbiased? 3) Am I being transparent about AI use? 4) Is sensitive data protected? 5) Am I respecting intellectual property? This 30-second check prevents most ethical issues.',
              resources: [
                { title: 'AI Ethics for Practitioners', url: '#', type: 'guide' },
                { title: 'Understanding AI Bias', url: '#', type: 'article' },
                { title: 'Responsible AI Use Policy Template', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Create your personal AI Ethics Framework: 1) Write your own AI ethics pledge (5 commitments), 2) Create a pre-publishing checklist for AI-generated content, 3) Identify 3 situations where AI bias could affect your work and how you\'d mitigate it, 4) Share your framework with a colleague.',
                starterPrompt: 'Help me create a personal AI Ethics Framework for my professional use. I work as a [your role]. I need:\n1. A personal AI ethics pledge (5 specific commitments)\n2. A pre-publishing checklist for AI-generated content\n3. Common bias risks in my field and mitigation strategies\n4. Data privacy guidelines specific to my work',
                hint: 'Make your ethics framework practical, not theoretical. Instead of "I will be fair," write "Before publishing AI-generated content about people or groups, I will check for stereotypes and ensure diverse representation."'
              }
            }
          ]
        }
      ]
    }
  ]
};
