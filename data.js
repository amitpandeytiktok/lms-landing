const COURSE_DATA = {
  weeks: [
    // =============================================
    // WEEK 1: Prompt Engineering – Zero to Hero
    // =============================================
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
                  title: 'What is Artificial Intelligence?',
                  content: '<p>Artificial Intelligence (AI) is the ability of machines to perform tasks that typically require human intelligence — like understanding language, recognizing patterns, and making decisions.</p>',
                  visual: '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:16px"><div style="background:#6c3ce0;color:#fff;padding:16px 24px;border-radius:12px;text-align:center;flex:1;min-width:120px"><div style="font-size:28px;margin-bottom:8px">🧠</div><strong>Think</strong><br><small>Process information</small></div><div style="background:#3b82f6;color:#fff;padding:16px 24px;border-radius:12px;text-align:center;flex:1;min-width:120px"><div style="font-size:28px;margin-bottom:8px">📝</div><strong>Learn</strong><br><small>Improve from data</small></div><div style="background:#22c55e;color:#fff;padding:16px 24px;border-radius:12px;text-align:center;flex:1;min-width:120px"><div style="font-size:28px;margin-bottom:8px">⚡</div><strong>Act</strong><br><small>Take actions</small></div></div>'
                },
                {
                  title: 'AI is Everywhere',
                  content: '<p>You already use AI every day without realizing it!</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(108,60,224,0.15);padding:14px;border-radius:10px"><strong>🎵 Spotify</strong><br><small>Song recommendations</small></div><div style="background:rgba(59,130,246,0.15);padding:14px;border-radius:10px"><strong>📱 Siri/Alexa</strong><br><small>Voice assistants</small></div><div style="background:rgba(34,197,94,0.15);padding:14px;border-radius:10px"><strong>📧 Gmail</strong><br><small>Smart compose</small></div><div style="background:rgba(245,158,11,0.15);padding:14px;border-radius:10px"><strong>🚗 Google Maps</strong><br><small>Traffic predictions</small></div></div>'
                },
                {
                  title: 'Types of AI',
                  content: '<p>AI comes in different flavors, each with different capabilities.</p>',
                  visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>Narrow AI (What we have today)</strong><br>Good at one specific task — like playing chess or writing text</div><div style="background:#eff6ff;border-left:4px solid #3b82f6;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>General AI (Future goal)</strong><br>Can do any intellectual task a human can do</div><div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:14px;border-radius:0 10px 10px 0"><strong>Generative AI (ChatGPT, etc.)</strong><br>Creates new content — text, images, code, music</div></div>'
                },
                {
                  title: 'What AI Can and Cannot Do',
                  content: '<p>Understanding AI\'s limits is just as important as knowing its capabilities.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px"><div style="background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);padding:16px;border-radius:10px"><strong style="color:#16a34a">✅ AI Can</strong><ul style="margin-top:8px;padding-left:18px;font-size:13px"><li>Generate text & code</li><li>Summarize documents</li><li>Translate languages</li><li>Analyze data patterns</li></ul></div><div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);padding:16px;border-radius:10px"><strong style="color:#dc2626">❌ AI Cannot</strong><ul style="margin-top:8px;padding-left:18px;font-size:13px"><li>Think or feel</li><li>Guarantee accuracy</li><li>Replace human judgment</li><li>Access real-time info*</li></ul></div></div>'
                },
                {
                  title: 'Key Takeaway',
                  content: '<p>AI is a powerful <strong>tool</strong>, not a replacement for human thinking. The key skill of the future is knowing <em>how to work with AI effectively</em> — and that starts with learning to communicate with it.</p>',
                  visual: '<div style="background:linear-gradient(135deg,#6c3ce0,#3b82f6);color:#fff;padding:24px;border-radius:14px;text-align:center;margin-top:16px"><div style="font-size:36px;margin-bottom:12px">🚀</div><strong style="font-size:18px">Your journey starts here!</strong><br><small style="opacity:0.9">Next up: Developing the AI Mindset</small></div>'
                }
              ],
              objectives: ['Understand what AI is and how it works at a high level', 'Identify AI applications you use daily', 'Distinguish between types of AI', 'Recognize what AI can and cannot do'],
              notes: 'Artificial Intelligence is the simulation of human intelligence by machines. Today\'s AI (called "Narrow AI") excels at specific tasks like writing, coding, and analyzing data.\n\nThe most important thing to remember: AI is a tool that amplifies your abilities. It doesn\'t think or understand — it predicts and generates based on patterns in its training data.\n\nPractical tip: Start noticing AI in your daily life. Every recommendation, auto-complete, and smart filter is AI at work.',
              resources: [
                { title: 'What is AI? - IBM Explainer', url: '#', type: 'article' },
                { title: 'AI for Beginners - Microsoft', url: '#', type: 'guide' },
                { title: 'How ChatGPT Actually Works', url: '#', type: 'video' }
              ],
              exercise: {
                task: 'Write a prompt asking AI to explain what artificial intelligence is to a 10-year-old child. Make it simple and fun!',
                starterPrompt: 'Explain artificial intelligence to a 10-year-old...',
                hint: 'Think about using analogies a child would understand — like comparing AI to a really smart assistant or a student that learned from millions of books.'
              }
            },
            {
              id: 'w1-m1-l2',
              title: 'Lesson 2: AI Mindset',
              slides: [
                {
                  title: 'The AI Mindset',
                  content: '<p>Working with AI effectively requires a shift in how you think about problem-solving. Instead of doing everything yourself, you become a <strong>director</strong> who guides AI to produce great results.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:16px"><div style="background:#6c3ce0;color:#fff;padding:12px 20px;border-radius:8px;font-weight:600">Old Way: You do everything</div><span style="font-size:24px">→</span><div style="background:#22c55e;color:#fff;padding:12px 20px;border-radius:8px;font-weight:600">New Way: You direct, AI executes</div></div>'
                },
                {
                  title: 'Think Like a Manager',
                  content: '<p>The best AI users think of themselves as managers delegating to a brilliant but literal assistant.</p>',
                  visual: '<div style="background:#f5f3ff;padding:20px;border-radius:12px;margin-top:16px"><div style="margin-bottom:12px"><strong>🎯 Be Specific</strong> — "Write a 200-word blog intro about remote work trends in 2025"</div><div style="margin-bottom:12px"><strong>📋 Give Context</strong> — "I\'m a small business owner targeting freelancers"</div><div style="margin-bottom:12px"><strong>🔄 Iterate</strong> — "Make it more casual and add a question hook"</div><div><strong>✅ Verify</strong> — Always review and refine AI output</div></div>'
                },
                {
                  title: '5 Principles of AI-First Thinking',
                  content: '<p>Adopt these principles to 10x your productivity with AI.</p>',
                  visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:12px;margin-bottom:10px"><div style="background:#6c3ce0;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">1</div><div>Start with AI — try AI first, then refine</div></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:10px"><div style="background:#6c3ce0;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">2</div><div>Be the editor, not the writer</div></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:10px"><div style="background:#6c3ce0;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">3</div><div>Embrace iteration — first draft is never final</div></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:10px"><div style="background:#6c3ce0;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">4</div><div>Learn from AI outputs — study what works</div></div><div style="display:flex;align-items:center;gap:12px"><div style="background:#6c3ce0;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">5</div><div>Stay curious — experiment constantly</div></div></div>'
                },
                {
                  title: 'The Human + AI Formula',
                  content: '<p>The magic happens when you combine human creativity with AI speed.</p>',
                  visual: '<div style="background:linear-gradient(135deg,#1a0533,#6c3ce0);color:#fff;padding:24px;border-radius:14px;text-align:center;margin-top:16px"><div style="font-size:24px;margin-bottom:16px">🧑 <strong>Human</strong> (Ideas + Judgment) <span style="font-size:28px">+</span> 🤖 <strong>AI</strong> (Speed + Scale)</div><div style="font-size:20px;margin-top:8px">= <strong>Superpower</strong> 🚀</div></div>'
                }
              ],
              objectives: ['Shift from "doer" to "director" mindset', 'Learn the 5 principles of AI-first thinking', 'Understand the Human + AI collaboration formula'],
              notes: 'The AI mindset is about changing your relationship with work. Instead of spending hours writing from scratch, you spend minutes directing AI and editing the output.\n\nKey insight: The quality of your AI output directly depends on the quality of your input. Better prompts = better results. This is why prompt engineering is the most valuable AI skill.\n\nRemember: AI is your co-pilot, not your autopilot. You steer, it accelerates.',
              resources: [
                { title: 'AI-First Mindset Guide', url: '#', type: 'guide' },
                { title: 'How Top Performers Use AI', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Think of a task you do regularly at work or school. Write a prompt that delegates this task to AI. Be as specific as possible about the context, format, and desired output.',
                starterPrompt: '',
                hint: 'Pick something concrete like "writing a weekly status email" or "summarizing meeting notes." Include who the audience is, what tone to use, and how long the output should be.'
              }
            },
            {
              id: 'w1-m1-l3',
              title: 'Lesson 3: Common Mistakes',
              slides: [
                {
                  title: 'Top Mistakes Beginners Make with AI',
                  content: '<p>Avoiding these common pitfalls will save you hours of frustration and help you get better results immediately.</p>',
                  visual: '<div style="background:#fef2f2;border:1px solid #fca5a5;padding:16px;border-radius:12px;margin-top:16px;text-align:center"><div style="font-size:36px;margin-bottom:8px">⚠️</div><strong>90% of bad AI results come from bad prompts, not bad AI</strong></div>'
                },
                {
                  title: 'Mistake #1: Being Too Vague',
                  content: '<p>Vague prompts produce generic, useless responses.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px"><div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);padding:16px;border-radius:10px"><strong style="color:#dc2626">❌ Bad</strong><br><code style="font-size:12px">"Write something about marketing"</code></div><div style="background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);padding:16px;border-radius:10px"><strong style="color:#16a34a">✅ Good</strong><br><code style="font-size:12px">"Write a 150-word Instagram caption for a new coffee shop targeting millennials. Casual tone, include 3 hashtags."</code></div></div>'
                },
                {
                  title: 'Mistake #2: Not Iterating',
                  content: '<p>Treating AI as a one-shot tool instead of a conversation partner.</p>',
                  visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><div style="background:#6c3ce0;color:#fff;padding:10px 16px;border-radius:8px">First prompt</div><span>→</span><div style="background:#3b82f6;color:#fff;padding:10px 16px;border-radius:8px">Review output</div><span>→</span><div style="background:#22c55e;color:#fff;padding:10px 16px;border-radius:8px">Refine prompt</div><span>→</span><div style="background:#f59e0b;color:#fff;padding:10px 16px;border-radius:8px">Better result!</div></div><p style="margin-top:12px;font-size:13px;opacity:0.8"><em>Pro tip: "Make it more concise" or "Add examples" are powerful follow-ups</em></p></div>'
                },
                {
                  title: 'Mistake #3: Trusting Without Verifying',
                  content: '<p>AI can confidently generate incorrect information. This is called <strong>"hallucination."</strong></p>',
                  visual: '<div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:16px;border-radius:0 10px 10px 0;margin-top:16px"><strong>🔍 Always verify:</strong><ul style="margin-top:8px;padding-left:18px"><li>Facts and statistics</li><li>Dates and names</li><li>Code functionality</li><li>Legal or medical information</li></ul></div>'
                },
                {
                  title: 'Quick Fix Checklist',
                  content: '<p>Before blaming AI for bad output, check these first:</p>',
                  visual: '<div style="background:#f5f3ff;padding:20px;border-radius:12px;margin-top:16px"><div style="margin-bottom:8px">☐ Did I provide enough context?</div><div style="margin-bottom:8px">☐ Did I specify the format I want?</div><div style="margin-bottom:8px">☐ Did I define the audience/tone?</div><div style="margin-bottom:8px">☐ Did I give examples of what I want?</div><div>☐ Did I iterate on the first response?</div></div>'
                }
              ],
              objectives: ['Identify the 3 most common AI mistakes', 'Learn how to write specific vs vague prompts', 'Understand AI hallucination and how to handle it'],
              notes: 'The three biggest mistakes are: being too vague, not iterating, and trusting output blindly.\n\nThe fix is simple: be specific, treat AI like a conversation (not a search engine), and always fact-check important claims.\n\nPro tip: Keep a "prompt journal" where you save prompts that worked well. Over time, you\'ll build a library of reliable templates.',
              resources: [
                { title: 'AI Hallucination: What It Is and How to Spot It', url: '#', type: 'article' },
                { title: 'Prompt Engineering Mistakes to Avoid', url: '#', type: 'guide' },
                { title: 'Fact-Checking AI Outputs', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Take this vague prompt and rewrite it to be specific and effective: "Help me with my presentation." Include context about the topic, audience, length, and style.',
                starterPrompt: 'Help me create a presentation about...',
                hint: 'Add details like: What is the presentation about? Who is the audience? How many slides? What tone (formal, casual)? What key points should be covered?'
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
                  title: 'What is a Prompt?',
                  content: '<p>A <strong>prompt</strong> is the instruction you give to an AI to tell it what you want. Think of it as a detailed request to a very capable but very literal assistant.</p>',
                  visual: '<div style="background:#f5f3ff;padding:20px;border-radius:12px;margin-top:16px;text-align:center"><div style="font-size:18px;margin-bottom:12px">💬 <strong>Prompt</strong> = Your instruction to AI</div><div style="display:flex;align-items:center;justify-content:center;gap:12px"><div style="background:#6c3ce0;color:#fff;padding:12px 20px;border-radius:8px">You write a prompt</div><span style="font-size:20px">→</span><div style="background:#3b82f6;color:#fff;padding:12px 20px;border-radius:8px">AI generates output</div></div></div>'
                },
                {
                  title: 'Prompts vs Search Queries',
                  content: '<p>Prompts are NOT Google searches. They\'re more like giving a brief to a colleague.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px"><div style="background:rgba(239,68,68,0.08);padding:16px;border-radius:10px"><strong>🔍 Search Query</strong><br><code style="font-size:12px">"best marketing strategies 2025"</code><br><small style="color:#888;margin-top:8px;display:block">Finds existing pages</small></div><div style="background:rgba(34,197,94,0.08);padding:16px;border-radius:10px"><strong>💬 AI Prompt</strong><br><code style="font-size:12px">"Create a marketing strategy for a B2B SaaS startup with a $5K monthly budget. Focus on content marketing and LinkedIn."</code><br><small style="color:#888;margin-top:8px;display:block">Creates custom output</small></div></div>'
                },
                {
                  title: 'The Prompt Spectrum',
                  content: '<p>Prompts range from simple to complex. Better prompts = better results.</p>',
                  visual: '<div style="margin-top:16px"><div style="background:linear-gradient(90deg,#ef4444,#f59e0b,#22c55e);height:8px;border-radius:4px;margin-bottom:16px"></div><div style="display:flex;justify-content:space-between"><div style="text-align:center;flex:1"><strong>Simple</strong><br><small>"Write a poem"</small></div><div style="text-align:center;flex:1"><strong>Medium</strong><br><small>"Write a haiku about spring rain"</small></div><div style="text-align:center;flex:1"><strong>Advanced</strong><br><small>"Write a haiku about spring rain in the style of Basho, with imagery of renewal"</small></div></div></div>'
                },
                {
                  title: 'Your First Great Prompt',
                  content: '<p>A great prompt answers these questions: <strong>What</strong> do I want? <strong>Who</strong> is it for? <strong>How</strong> should it look?</p>',
                  visual: '<div style="background:linear-gradient(135deg,#6c3ce0,#3b82f6);color:#fff;padding:20px;border-radius:14px;margin-top:16px"><code style="font-size:13px;line-height:1.8;display:block">"Write a <span style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:4px">professional email</span> to <span style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:4px">my team</span> announcing <span style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:4px">a new project deadline</span>. Keep it <span style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:4px">under 150 words</span> and <span style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:4px">positive in tone</span>."</code></div>'
                }
              ],
              objectives: ['Understand what a prompt is and how it differs from a search query', 'Learn the prompt spectrum from simple to advanced', 'Write your first structured prompt'],
              notes: 'A prompt is your primary communication tool with AI. Unlike search engines that find existing content, AI prompts generate custom content tailored to your needs.\n\nThe quality of your prompt determines the quality of the output. A vague prompt gives a vague answer. A specific prompt gives a specific, useful answer.\n\nThink of it this way: you\'re hiring a freelancer. The better your brief, the better the deliverable.',
              resources: [
                { title: 'Prompt Engineering 101', url: '#', type: 'guide' },
                { title: 'ChatGPT Prompt Examples', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Write a prompt that asks AI to create a professional email. Include: who it\'s to, what it\'s about, the tone, and the desired length.',
                starterPrompt: 'Write a professional email to...',
                hint: 'Include specifics like: "Write a professional email to my manager requesting a day off next Friday. Keep it brief (under 100 words), polite, and mention that my tasks are covered by a colleague."'
              }
            },
            {
              id: 'w1-m2-l2',
              title: 'Lesson 2: Anatomy of a Prompt',
              slides: [
                {
                  title: 'Anatomy of a Good Prompt',
                  content: '<p>Every effective prompt has <strong>4 key components</strong> that work together to produce great results.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:20px;justify-content:center"><span style="background:#6c3ce0;color:#fff;padding:10px 22px;border-radius:8px;font-weight:600">Role</span><span style="font-size:20px;color:rgba(255,255,255,0.5)">→</span><span style="background:#3b82f6;color:#fff;padding:10px 22px;border-radius:8px;font-weight:600">Context</span><span style="font-size:20px;color:rgba(255,255,255,0.5)">→</span><span style="background:#ef4444;color:#fff;padding:10px 22px;border-radius:8px;font-weight:600">Task</span><span style="font-size:20px;color:rgba(255,255,255,0.5)">→</span><span style="background:#f59e0b;color:#fff;padding:10px 22px;border-radius:8px;font-weight:600">Format</span></div>'
                },
                {
                  title: 'Component 1: Role',
                  content: '<p>Tell AI <strong>who</strong> to be. This sets the expertise level and perspective.</p>',
                  visual: '<div style="margin-top:16px"><div style="background:rgba(108,60,224,0.1);border:1px solid rgba(108,60,224,0.3);padding:16px;border-radius:10px;margin-bottom:10px"><strong style="color:#6c3ce0">Examples:</strong><br>"Act as a <strong>senior marketing strategist</strong>..."<br>"You are a <strong>friendly coding tutor</strong>..."<br>"Respond as a <strong>professional editor</strong>..."</div><div style="background:#f5f3ff;padding:12px;border-radius:8px;font-size:13px">💡 <em>The role shapes the tone, vocabulary, and depth of the response</em></div></div>'
                },
                {
                  title: 'Component 2: Context',
                  content: '<p>Give AI the <strong>background information</strong> it needs to understand your situation.</p>',
                  visual: '<div style="background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.3);padding:16px;border-radius:10px;margin-top:16px"><strong style="color:#3b82f6">Context includes:</strong><ul style="margin-top:8px;padding-left:18px"><li>Who is the audience?</li><li>What\'s the background situation?</li><li>What constraints exist?</li><li>What\'s been tried before?</li></ul></div>'
                },
                {
                  title: 'Component 3: Task',
                  content: '<p>Clearly state <strong>what</strong> you want AI to do. Be specific and actionable.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(239,68,68,0.1);padding:14px;border-radius:10px"><strong style="color:#dc2626">❌ Vague Task</strong><br><small>"Help me with marketing"</small></div><div style="background:rgba(34,197,94,0.1);padding:14px;border-radius:10px"><strong style="color:#16a34a">✅ Clear Task</strong><br><small>"Create 5 social media post ideas for launching a fitness app"</small></div></div>'
                },
                {
                  title: 'Component 4: Format',
                  content: '<p>Tell AI <strong>how</strong> to structure the output.</p>',
                  visual: '<div style="margin-top:16px"><div style="display:flex;gap:10px;flex-wrap:wrap"><span style="background:rgba(245,158,11,0.15);padding:8px 14px;border-radius:20px;font-size:12px">📋 Bullet points</span><span style="background:rgba(245,158,11,0.15);padding:8px 14px;border-radius:20px;font-size:12px">📊 Table format</span><span style="background:rgba(245,158,11,0.15);padding:8px 14px;border-radius:20px;font-size:12px">📝 Step-by-step</span><span style="background:rgba(245,158,11,0.15);padding:8px 14px;border-radius:20px;font-size:12px">✉️ Email format</span><span style="background:rgba(245,158,11,0.15);padding:8px 14px;border-radius:20px;font-size:12px">💻 Code block</span><span style="background:rgba(245,158,11,0.15);padding:8px 14px;border-radius:20px;font-size:12px">📄 200 words max</span></div></div>'
                },
                {
                  title: 'Putting It All Together',
                  content: '<p>Here\'s a complete prompt using all 4 components:</p>',
                  visual: '<div style="background:#0f1729;color:#fff;padding:20px;border-radius:12px;margin-top:16px;font-size:13px;line-height:1.8"><span style="color:#a78bfa">🎭 Role:</span> "Act as a senior content strategist.<br><span style="color:#60a5fa">📋 Context:</span> I run a small bakery in Portland targeting health-conscious millennials.<br><span style="color:#f87171">🎯 Task:</span> Create a 1-week social media content plan for Instagram.<br><span style="color:#fbbf24">📐 Format:</span> Present as a table with columns: Day, Post Type, Caption Idea, Hashtags."</div>'
                }
              ],
              objectives: ['Learn the 4 components of an effective prompt: Role, Context, Task, Format', 'Understand how each component shapes the AI output', 'Build complete prompts using the RCTF framework'],
              notes: 'The RCTF framework (Role, Context, Task, Format) is your go-to template for writing effective prompts. You don\'t always need all four, but the more you include, the better your results.\n\nRole sets WHO the AI should be. Context provides the BACKGROUND. Task defines WHAT to do. Format specifies HOW to present it.\n\nStart by always including at least Task and Format. As you get comfortable, add Role and Context for even better results.',
              resources: [
                { title: 'The RCTF Prompt Framework', url: '#', type: 'guide' },
                { title: 'Prompt Templates Library', url: '#', type: 'tool' },
                { title: '50 Expert Prompt Examples', url: '#', type: 'article' }
              ],
              exercise: {
                task: 'Create a prompt to generate a marketing plan for a new product. Use all 4 components: Role, Context, Task, and Format.',
                starterPrompt: '',
                hint: 'Start with "Act as a [role]..." then add context about your product, clearly state the task (create a marketing plan), and specify the format (bullet points, timeline, budget breakdown, etc.).'
              }
            },
            {
              id: 'w1-m2-l3',
              title: 'Lesson 3: Role-based Prompting',
              slides: [
                {
                  title: 'The Power of Roles',
                  content: '<p>Assigning a <strong>role</strong> to AI dramatically changes the quality and style of its output. The same question gets very different answers depending on the role.</p>',
                  visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px;text-align:center"><strong>Same question, different roles:</strong><br><em>"How do I grow my business?"</em></div>'
                },
                {
                  title: 'Same Question, Different Experts',
                  content: '<p>Watch how the answer changes based on who you ask:</p>',
                  visual: '<div style="display:grid;gap:10px;margin-top:16px"><div style="background:rgba(108,60,224,0.1);padding:14px;border-radius:10px"><strong>🎯 Marketing Expert:</strong> Focus on brand awareness, social media, content funnels</div><div style="background:rgba(59,130,246,0.1);padding:14px;border-radius:10px"><strong>💰 Financial Advisor:</strong> Focus on margins, pricing strategy, investment priorities</div><div style="background:rgba(34,197,94,0.1);padding:14px;border-radius:10px"><strong>🛠️ Operations Manager:</strong> Focus on efficiency, processes, scaling systems</div></div>'
                },
                {
                  title: 'Role Prompting Templates',
                  content: '<p>Use these starter patterns to assign roles effectively.</p>',
                  visual: '<div style="margin-top:16px;font-size:13px"><div style="background:#0f1729;color:#fff;padding:14px;border-radius:8px;margin-bottom:8px"><code>"Act as a [profession] with [X years] of experience in [domain]..."</code></div><div style="background:#0f1729;color:#fff;padding:14px;border-radius:8px;margin-bottom:8px"><code>"You are a [role] specializing in [specialty]. Your audience is [who]..."</code></div><div style="background:#0f1729;color:#fff;padding:14px;border-radius:8px"><code>"Respond as if you were a [role] giving advice to a [who]..."</code></div></div>'
                },
                {
                  title: 'Best Roles for Common Tasks',
                  content: '<p>Match the right role to your task for optimal results:</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px;font-size:12px"><div style="background:rgba(108,60,224,0.08);padding:12px;border-radius:8px"><strong>Writing</strong><br>→ Editor, Copywriter, Journalist</div><div style="background:rgba(59,130,246,0.08);padding:12px;border-radius:8px"><strong>Coding</strong><br>→ Senior Developer, Code Reviewer</div><div style="background:rgba(34,197,94,0.08);padding:12px;border-radius:8px"><strong>Strategy</strong><br>→ Consultant, Business Analyst</div><div style="background:rgba(245,158,11,0.08);padding:12px;border-radius:8px"><strong>Learning</strong><br>→ Tutor, Professor, Mentor</div></div>'
                }
              ],
              objectives: ['Understand how roles change AI output', 'Learn role prompting templates', 'Match roles to different task types'],
              notes: 'Role-based prompting is one of the most powerful techniques in prompt engineering. By telling AI to "act as" a specific expert, you tap into specialized knowledge and vocabulary.\n\nBest practice: Be specific with roles. "Act as a senior UX designer with 10 years of experience in mobile apps" works better than just "Act as a designer."\n\nExperiment with different roles for the same prompt to see how perspectives change.',
              resources: [
                { title: 'Role Prompting Guide', url: '#', type: 'guide' },
                { title: '100+ AI Role Templates', url: '#', type: 'tool' }
              ],
              exercise: {
                task: 'Write 3 different prompts for the same question: "How should I prepare for a job interview?" — each with a different role (e.g., HR Manager, Career Coach, CEO).',
                starterPrompt: 'Act as a [role]. How should I prepare for a job interview at a tech company?',
                hint: 'For each role, notice how the advice would differ: an HR Manager might focus on common questions, a Career Coach on confidence/body language, and a CEO on demonstrating business impact.'
              }
            },
            {
              id: 'w1-m2-l4',
              title: 'Lesson 4: Context & Constraints',
              slides: [
                {
                  title: 'Context is King',
                  content: '<p>The more relevant context you provide, the more tailored and useful the AI output becomes. Context bridges the gap between a generic answer and a <strong>perfect</strong> answer.</p>',
                  visual: '<div style="display:flex;align-items:center;gap:16px;margin-top:20px;justify-content:center"><div style="text-align:center"><div style="width:60px;height:60px;border-radius:50%;background:rgba(239,68,68,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-size:24px">📝</div><small>No context<br>= Generic</small></div><div style="font-size:24px">→</div><div style="text-align:center"><div style="width:80px;height:80px;border-radius:50%;background:rgba(245,158,11,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-size:28px">📋</div><small>Some context<br>= Better</small></div><div style="font-size:24px">→</div><div style="text-align:center"><div style="width:100px;height:100px;border-radius:50%;background:rgba(34,197,94,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-size:32px">🎯</div><small>Rich context<br>= Perfect</small></div></div>'
                },
                {
                  title: 'What Counts as Context?',
                  content: '<p>Context is any background info that helps AI understand your specific situation.</p>',
                  visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px"><div style="background:rgba(108,60,224,0.08);padding:14px;border-radius:10px">👤 <strong>Your background</strong><br><small>Student, marketer, developer...</small></div><div style="background:rgba(59,130,246,0.08);padding:14px;border-radius:10px">🎯 <strong>Your audience</strong><br><small>Who will read/use this?</small></div><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px">📊 <strong>Current situation</strong><br><small>What led to this request?</small></div><div style="background:rgba(245,158,11,0.08);padding:14px;border-radius:10px">⚙️ <strong>Constraints</strong><br><small>Budget, time, length limits</small></div></div>'
                },
                {
                  title: 'The Power of Constraints',
                  content: '<p>Constraints make AI output more focused and usable. Don\'t be afraid to set boundaries!</p>',
                  visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;padding:14px;border-radius:10px;margin-bottom:8px"><strong>Length:</strong> "Keep it under 200 words" / "Write exactly 5 bullet points"</div><div style="background:#f5f3ff;padding:14px;border-radius:10px;margin-bottom:8px"><strong>Tone:</strong> "Use a casual, friendly tone" / "Be formal and professional"</div><div style="background:#f5f3ff;padding:14px;border-radius:10px;margin-bottom:8px"><strong>Exclusions:</strong> "Don\'t use jargon" / "Avoid clichés"</div><div style="background:#f5f3ff;padding:14px;border-radius:10px"><strong>Format:</strong> "Use numbered list" / "Structure as Q&A"</div></div>'
                },
                {
                  title: 'Context in Action',
                  content: '<p>See how adding context transforms a basic prompt:</p>',
                  visual: '<div style="margin-top:16px"><div style="background:rgba(239,68,68,0.08);padding:14px;border-radius:10px;margin-bottom:10px"><strong>Without context:</strong><br><code style="font-size:12px">"Write a cover letter"</code></div><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px"><strong>With context:</strong><br><code style="font-size:12px">"Write a cover letter for a junior product manager role at a tech startup. I have 2 years of experience in project coordination and a business degree. The company values innovation and fast execution. Keep it under 300 words with a confident but humble tone."</code></div></div>'
                }
              ],
              objectives: ['Understand why context dramatically improves AI output', 'Learn the 4 types of context to include', 'Master using constraints to focus AI responses'],
              notes: 'Context is the secret weapon of expert prompt engineers. While beginners write "write a blog post," experts include their audience, purpose, brand voice, and specific requirements.\n\nConstraints are equally powerful. By telling AI what NOT to do and setting boundaries, you get output that\'s immediately usable without heavy editing.\n\nRule of thumb: if you\'d give this context to a human colleague, include it in your prompt.',
              resources: [
                { title: 'Context Engineering for AI', url: '#', type: 'article' },
                { title: 'Constraint-Based Prompting', url: '#', type: 'guide' }
              ],
              exercise: {
                task: 'Write a prompt asking AI to create a study plan for learning Python programming. Include at least 3 types of context: your background, time constraints, and learning goals.',
                starterPrompt: '',
                hint: 'Example context: "I\'m a complete beginner with no coding experience. I have 1 hour per day for 4 weeks. My goal is to be able to build a simple web scraper. Please create a week-by-week study plan with daily tasks."'
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
                { title: 'AI-Powered Writing', content: '<p>AI can help with every stage of writing — from brainstorming to final editing. It\'s like having a writing partner available 24/7.</p>', visual: '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:16px;justify-content:center"><span style="background:#6c3ce0;color:#fff;padding:10px 16px;border-radius:8px">💡 Brainstorm</span><span>→</span><span style="background:#3b82f6;color:#fff;padding:10px 16px;border-radius:8px">📝 Draft</span><span>→</span><span style="background:#22c55e;color:#fff;padding:10px 16px;border-radius:8px">✏️ Edit</span><span>→</span><span style="background:#f59e0b;color:#fff;padding:10px 16px;border-radius:8px">🔍 Polish</span></div>' },
                { title: 'Writing Prompts That Work', content: '<p>Use these templates for common writing tasks:</p>', visual: '<div style="margin-top:16px;font-size:13px"><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px"><strong>Blog post:</strong> "Write a [length] blog post about [topic] for [audience]. Use a [tone] tone and include [number] actionable tips."</div><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px"><strong>Email:</strong> "Draft a [type] email to [recipient] about [topic]. Keep it [length] and [tone]."</div><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px"><strong>Summary:</strong> "Summarize [content] in [length]. Focus on [key areas]. Write for [audience]."</div></div>' },
                { title: 'The Edit Loop', content: '<p>Don\'t stop at the first draft. Use AI to iteratively improve your writing.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><div style="margin-bottom:8px">1️⃣ Generate first draft with AI</div><div style="margin-bottom:8px">2️⃣ "Make it more concise"</div><div style="margin-bottom:8px">3️⃣ "Add a compelling hook at the start"</div><div style="margin-bottom:8px">4️⃣ "Check for grammar and clarity"</div><div>5️⃣ Add your personal voice and publish!</div></div>' },
                { title: 'Pro Writing Tips with AI', content: '<p>Power moves for better AI-assisted writing:</p>', visual: '<div style="display:grid;gap:8px;margin-top:16px"><div style="background:rgba(108,60,224,0.08);padding:12px;border-radius:8px">📎 <strong>Provide examples</strong> — "Write in a style similar to [example]"</div><div style="background:rgba(59,130,246,0.08);padding:12px;border-radius:8px">🎨 <strong>Specify tone</strong> — casual, professional, witty, empathetic</div><div style="background:rgba(34,197,94,0.08);padding:12px;border-radius:8px">📏 <strong>Set constraints</strong> — word count, paragraph count, reading level</div></div>' }
              ],
              objectives: ['Use AI for every stage of the writing process', 'Apply writing prompt templates', 'Master the iterative edit loop'],
              notes: 'AI writing assistance works best when you think of it as a collaboration. AI generates the raw material, and you shape it with your unique voice and expertise.\n\nKey workflow: Generate → Review → Refine → Personalize → Publish. Never publish AI output without adding your personal touch.',
              resources: [{ title: 'AI Writing Best Practices', url: '#', type: 'guide' }, { title: 'Writing Prompt Templates', url: '#', type: 'tool' }],
              exercise: { task: 'Write a prompt to generate a LinkedIn post announcing that you just completed an AI course. Make it engaging, professional, and under 200 words.', starterPrompt: '', hint: 'Include your role/context, ask for a specific tone (excited but professional), mention key learnings, and ask for a call-to-action at the end.' }
            },
            {
              id: 'w1-m3-l2',
              title: 'Lesson 2: AI for Research',
              slides: [
                { title: 'AI as Your Research Assistant', content: '<p>AI can dramatically speed up research by summarizing, analyzing, and synthesizing information from complex topics.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(239,68,68,0.08);padding:14px;border-radius:10px;text-align:center"><strong>Without AI</strong><br>⏱️ 4-6 hours research<br>📄 Read 20+ articles<br>😰 Information overload</div><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px;text-align:center"><strong>With AI</strong><br>⏱️ 30-60 minutes<br>📋 Structured summaries<br>🎯 Focused insights</div></div>' },
                { title: 'Research Prompt Framework', content: '<p>Structure your research prompts for maximum depth and usefulness:</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>Explore:</strong> "Explain [topic] including key concepts, history, and current state"</div><div style="background:#eff6ff;border-left:4px solid #3b82f6;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>Compare:</strong> "Compare [A] vs [B] in terms of [criteria]. Present as a table."</div><div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:14px;border-radius:0 10px 10px 0"><strong>Analyze:</strong> "What are the pros, cons, and risks of [approach]?"</div></div>' },
                { title: 'Verify Everything', content: '<p>AI research is a starting point, not the final word. Always cross-check important facts.</p>', visual: '<div style="background:#fffbeb;border:1px solid #fcd34d;padding:16px;border-radius:12px;margin-top:16px"><strong>⚠️ Research Verification Checklist:</strong><ul style="margin-top:8px;padding-left:18px"><li>Cross-reference key claims with trusted sources</li><li>Check if statistics and dates are current</li><li>Verify names, titles, and organizations</li><li>Look for bias in framing</li></ul></div>' }
              ],
              objectives: ['Use AI to accelerate research workflows', 'Apply research prompt frameworks', 'Understand verification best practices'],
              notes: 'AI is incredible for research because it can synthesize information and present it in whatever format you need. But remember: AI knowledge has a training cutoff date and can hallucinate facts.\n\nBest practice: Use AI for initial exploration and structuring your research, then verify key facts with primary sources.',
              resources: [{ title: 'AI Research Methodology', url: '#', type: 'guide' }, { title: 'Fact-Checking Tools', url: '#', type: 'tool' }],
              exercise: { task: 'Write a research prompt comparing three AI tools (e.g., ChatGPT, Claude, Gemini). Ask for a structured comparison table with specific criteria.', starterPrompt: '', hint: 'Ask AI to compare on criteria like: pricing, best use cases, strengths, weaknesses, and free tier availability. Request the output as a table for easy comparison.' }
            },
            {
              id: 'w1-m3-l3',
              title: 'Lesson 3: AI for Problem Solving',
              slides: [
                { title: 'AI as a Problem-Solving Partner', content: '<p>AI excels at breaking down complex problems into manageable steps and exploring multiple solutions you might not have considered.</p>', visual: '<div style="text-align:center;margin-top:20px"><div style="font-size:48px;margin-bottom:12px">🧩</div><div style="display:flex;align-items:center;gap:8px;justify-content:center;flex-wrap:wrap"><span style="background:#ef4444;color:#fff;padding:8px 16px;border-radius:8px">Big Problem</span><span style="font-size:20px">→</span><span style="background:#f59e0b;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">Part A</span><span style="background:#22c55e;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">Part B</span><span style="background:#3b82f6;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">Part C</span></div></div>' },
                { title: 'Problem-Solving Prompts', content: '<p>Use these frameworks to tackle any challenge:</p>', visual: '<div style="margin-top:16px"><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px;font-size:13px"><code>"Break down this problem into steps: [problem description]"</code></div><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px;font-size:13px"><code>"Give me 5 different approaches to solve: [problem]"</code></div><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;font-size:13px"><code>"What are the potential risks and solutions for: [situation]"</code></div></div>' },
                { title: 'The SOLVE Framework', content: '<p>A structured approach to problem-solving with AI:</p>', visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">S</span><span><strong>State</strong> the problem clearly</span></div><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">O</span><span><strong>Options</strong> — ask for multiple approaches</span></div><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">L</span><span><strong>List</strong> pros and cons of each</span></div><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">V</span><span><strong>Validate</strong> the chosen solution</span></div><div style="display:flex;align-items:center;gap:10px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">E</span><span><strong>Execute</strong> with step-by-step plan</span></div></div>' }
              ],
              objectives: ['Use AI to break down complex problems', 'Apply the SOLVE framework', 'Generate multiple solution approaches'],
              notes: 'AI is at its best when you ask it to think through problems step by step. The key is to give it enough context about your situation and constraints.\n\nPro tip: Always ask for multiple options. Don\'t settle for the first suggestion — ask "What are 3 different ways to approach this?"',
              resources: [{ title: 'AI Problem-Solving Strategies', url: '#', type: 'guide' }, { title: 'Critical Thinking with AI', url: '#', type: 'article' }],
              exercise: { task: 'You want to learn a new skill in 30 days. Use the SOLVE framework to write a prompt asking AI to create a complete learning plan. Pick any skill you\'re interested in.', starterPrompt: '', hint: 'State the skill, ask for multiple learning approaches, request pros/cons of each, and ask for a day-by-day execution plan with milestones.' }
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
                { title: 'Time to Practice!', content: '<p>You\'ve learned the theory — now let\'s put it all together with guided practice exercises.</p>', visual: '<div style="background:linear-gradient(135deg,#6c3ce0,#3b82f6);color:#fff;padding:24px;border-radius:14px;text-align:center;margin-top:16px"><div style="font-size:36px;margin-bottom:12px">🏋️</div><strong style="font-size:18px">Practice makes perfect!</strong><br>Complete each challenge to level up your skills</div>' },
                { title: 'Challenge 1: The Email Writer', content: '<p>Write a prompt that generates a professional email.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><strong>Your task:</strong><br>Create a prompt for writing a follow-up email after a job interview.<br><br><strong>Requirements:</strong><ul style="padding-left:18px;margin-top:8px"><li>Include a role for the AI</li><li>Provide context (company, position)</li><li>Specify tone and length</li></ul></div>' },
                { title: 'Challenge 2: The Content Creator', content: '<p>Write a prompt that generates social media content.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><strong>Your task:</strong><br>Create a prompt for a week\'s worth of Instagram content for a small business.<br><br><strong>Requirements:</strong><ul style="padding-left:18px;margin-top:8px"><li>Use the RCTF framework</li><li>Include brand context</li><li>Request specific post formats</li></ul></div>' },
                { title: 'Challenge 3: The Analyzer', content: '<p>Write a prompt that helps you make a decision.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><strong>Your task:</strong><br>Create a prompt to help you choose between two options (job offers, products, strategies, etc.).<br><br><strong>Requirements:</strong><ul style="padding-left:18px;margin-top:8px"><li>Provide detailed context for both options</li><li>Ask for a structured comparison</li><li>Request a recommendation with reasoning</li></ul></div>' }
              ],
              objectives: ['Apply RCTF framework in real scenarios', 'Build prompts for emails, content, and analysis', 'Practice iterating on AI outputs'],
              notes: 'Practice is where prompt engineering clicks. Start with simple tasks and gradually add complexity. Keep a prompt journal of your best prompts.\n\nKey insight: There\'s no "perfect" prompt — there\'s always room to iterate and improve. The goal is to get to a good result quickly.',
              resources: [{ title: 'Prompt Practice Exercises', url: '#', type: 'guide' }, { title: 'AI Writing Gym', url: '#', type: 'tool' }],
              exercise: { task: 'Pick one of the three challenges above and create a detailed prompt using everything you\'ve learned. Use Role, Context, Task, and Format.', starterPrompt: '', hint: 'Start with your favorite challenge. Remember: specific > vague. Include who you are, who the audience is, what you need, and how it should look.' }
            },
            {
              id: 'w1-m4-l2',
              title: 'Lesson 2: Prompt Challenges',
              slides: [
                { title: 'Advanced Prompt Challenges', content: '<p>Ready to test your skills? These challenges will push your prompt engineering abilities to the next level.</p>', visual: '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px;text-align:center"><div style="background:rgba(34,197,94,0.1);padding:16px;border-radius:10px"><div style="font-size:24px">🟢</div><strong>Beginner</strong></div><div style="background:rgba(245,158,11,0.1);padding:16px;border-radius:10px"><div style="font-size:24px">🟡</div><strong>Intermediate</strong></div><div style="background:rgba(239,68,68,0.1);padding:16px;border-radius:10px"><div style="font-size:24px">🔴</div><strong>Advanced</strong></div></div>' },
                { title: 'Challenge: Multi-Step Prompting', content: '<p>Some tasks are too complex for a single prompt. Learn to chain prompts for better results.</p>', visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">Prompt 1: Research</span><span>→</span><span style="background:#3b82f6;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">Prompt 2: Outline</span><span>→</span><span style="background:#22c55e;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">Prompt 3: Draft</span><span>→</span><span style="background:#f59e0b;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">Prompt 4: Polish</span></div></div>' },
                { title: 'Challenge: Persona Switching', content: '<p>Get AI to review its own work by switching perspectives.</p>', visual: '<div style="margin-top:16px"><div style="background:#0f1729;color:#fff;padding:14px;border-radius:8px;font-size:13px;margin-bottom:8px"><code>Step 1: "Act as a writer and draft a blog post about AI in education"</code></div><div style="background:#0f1729;color:#fff;padding:14px;border-radius:8px;font-size:13px"><code>Step 2: "Now act as an editor. Review this blog post and suggest 5 improvements"</code></div></div>' },
                { title: 'Week 1 Complete! 🎉', content: '<p>Congratulations! You now have a solid foundation in prompt engineering. You understand what AI is, how to communicate with it, and how to use it productively.</p>', visual: '<div style="background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;padding:24px;border-radius:14px;text-align:center;margin-top:16px"><div style="font-size:36px;margin-bottom:12px">🏆</div><strong style="font-size:18px">Skills Unlocked:</strong><br>AI Fundamentals • RCTF Framework • Role Prompting • Context Engineering • Iterative Refinement<br><br><small>Next up: Week 2 — Scaling Yourself with AI →</small></div>' }
              ],
              objectives: ['Master multi-step prompting chains', 'Learn persona switching technique', 'Complete Week 1 with confidence'],
              notes: 'Multi-step prompting is when you break a big task into several smaller prompts, feeding the output of one into the next. This produces much better results than trying to do everything in one prompt.\n\nPersona switching is a power move: have AI create something, then switch its role to critic/editor to review and improve its own work.',
              resources: [{ title: 'Advanced Prompt Techniques', url: '#', type: 'guide' }, { title: 'Prompt Chaining Tutorial', url: '#', type: 'video' }, { title: 'AI Prompt Community', url: '#', type: 'article' }],
              exercise: { task: 'Use multi-step prompting: First, write a prompt asking AI to create a short article outline about any topic. Then, write a second prompt asking AI to critique that outline and suggest improvements. Submit both prompts.', starterPrompt: 'Step 1: Create an outline for...\n\nStep 2: Now act as an editor and review...', hint: 'Chain your prompts: first generate content, then switch to a critic role. For example: Prompt 1 = "Create an outline for a blog post about remote work tips" → Prompt 2 = "Act as a senior editor. Review this outline and suggest 3 improvements for engagement."' }
            }
          ]
        }
      ]
    },
    // =============================================
    // WEEK 2: Scaling Yourself with AI
    // =============================================
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
              id: 'w2-m1-l1', title: 'Lesson 1: Overview of AI Tools',
              slides: [
                { title: 'The AI Tools Ecosystem', content: '<p>The AI landscape is vast and growing. Understanding the categories helps you pick the right tool for each job.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(108,60,224,0.1);padding:16px;border-radius:10px"><strong>💬 Chat & Text</strong><br><small>ChatGPT, Claude, Gemini</small></div><div style="background:rgba(59,130,246,0.1);padding:16px;border-radius:10px"><strong>🎨 Image & Design</strong><br><small>Midjourney, DALL-E, Canva AI</small></div><div style="background:rgba(34,197,94,0.1);padding:16px;border-radius:10px"><strong>💻 Code & Dev</strong><br><small>GitHub Copilot, Cursor, Replit</small></div><div style="background:rgba(245,158,11,0.1);padding:16px;border-radius:10px"><strong>🎵 Audio & Video</strong><br><small>ElevenLabs, Runway, Descript</small></div></div>' },
                { title: 'Choosing the Right Tool', content: '<p>Not every AI tool is right for every task. Match the tool to your need.</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>For writing & research:</strong> ChatGPT, Claude</div><div style="background:#eff6ff;border-left:4px solid #3b82f6;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>For coding:</strong> GitHub Copilot, Cursor</div><div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:14px;border-radius:0 10px 10px 0"><strong>For design:</strong> Canva AI, Midjourney</div></div>' },
                { title: 'Free vs Paid AI Tools', content: '<p>Many powerful AI tools have free tiers. Start here before investing in paid plans.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px"><div style="background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);padding:16px;border-radius:10px"><strong style="color:#16a34a">🆓 Free Tiers</strong><ul style="margin-top:8px;padding-left:18px;font-size:13px"><li>ChatGPT Free</li><li>Claude Free</li><li>Canva Free AI</li><li>Google Gemini</li></ul></div><div style="background:rgba(108,60,224,0.1);border:1px solid rgba(108,60,224,0.3);padding:16px;border-radius:10px"><strong style="color:#6c3ce0">💎 Worth Paying For</strong><ul style="margin-top:8px;padding-left:18px;font-size:13px"><li>ChatGPT Plus ($20/mo)</li><li>Claude Pro ($20/mo)</li><li>GitHub Copilot ($10/mo)</li><li>Midjourney ($10/mo)</li></ul></div></div>' }
              ],
              objectives: ['Map the AI tools ecosystem by category', 'Choose the right tool for each task type', 'Identify free vs paid options'],
              notes: 'The AI tools landscape changes rapidly. Focus on learning 2-3 tools well rather than trying everything.\n\nRecommendation: Start with one chat AI (ChatGPT or Claude) and one specialized tool for your field.',
              resources: [{ title: 'AI Tools Directory', url: '#', type: 'tool' }, { title: 'Best Free AI Tools 2025', url: '#', type: 'article' }],
              exercise: { task: 'Create a prompt asking AI to recommend the top 5 AI tools for your specific profession or field of study. Include what tasks you need help with.', starterPrompt: '', hint: 'Be specific about your role and needs. E.g., "I\'m a marketing student. Recommend 5 AI tools for content creation, social media management, and analytics."' }
            },
            {
              id: 'w2-m1-l2', title: 'Lesson 2: Setting Up Your AI Toolkit',
              slides: [
                { title: 'Building Your AI Toolkit', content: '<p>A well-organized toolkit makes you exponentially more productive. Set up your core tools and establish workflows.</p>', visual: '<div style="background:#f5f3ff;padding:20px;border-radius:12px;margin-top:16px;text-align:center"><div style="font-size:20px;margin-bottom:12px">🧰 Your Starter Toolkit</div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">ChatGPT / Claude</span><span style="background:#3b82f6;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">Notion AI</span><span style="background:#22c55e;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">Canva AI</span></div></div>' },
                { title: 'Organizing Your Prompts', content: '<p>Keep a prompt library so you never start from scratch.</p>', visual: '<div style="margin-top:16px"><div style="background:#0f1729;color:#fff;padding:14px;border-radius:8px;font-size:13px"><strong>📁 Prompt Library Structure:</strong><br>├── 📧 Email Templates<br>├── 📝 Writing Prompts<br>├── 🔍 Research Prompts<br>├── 💼 Work Prompts<br>└── 🎨 Creative Prompts</div></div>' },
                { title: 'Daily AI Workflow', content: '<p>Integrate AI into your daily routine for maximum impact.</p>', visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="background:#f59e0b;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">☀️ Morning: Plan with AI</span><span>→</span><span style="background:#3b82f6;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">📝 Midday: Create with AI</span><span>→</span><span style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">🌙 Evening: Review & Learn</span></div></div>' }
              ],
              objectives: ['Set up a core AI toolkit', 'Create a prompt library system', 'Design a daily AI workflow'],
              notes: 'Your AI toolkit should be lean and effective. Don\'t install 20 tools — master 3-4 that cover your main needs.\n\nA prompt library is one of the most valuable assets you can build. Save every prompt that works well.',
              resources: [{ title: 'AI Toolkit Setup Guide', url: '#', type: 'guide' }, { title: 'Prompt Library Template', url: '#', type: 'tool' }],
              exercise: { task: 'Design your personal AI toolkit. Write a prompt asking AI to create a personalized toolkit based on your role, daily tasks, and goals.', starterPrompt: '', hint: 'Include your profession, top 5 daily tasks, biggest time sinks, and budget for AI tools.' }
            },
            {
              id: 'w2-m1-l3', title: 'Lesson 3: AI Ethics & Responsible Use',
              slides: [
                { title: 'Using AI Responsibly', content: '<p>With great AI power comes great responsibility. Understanding ethics ensures you use AI effectively AND responsibly.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px"><strong>✅ Do</strong><ul style="padding-left:16px;margin-top:8px;font-size:12px"><li>Verify AI-generated facts</li><li>Disclose AI use when required</li><li>Protect sensitive data</li><li>Add your own expertise</li></ul></div><div style="background:rgba(239,68,68,0.08);padding:14px;border-radius:10px"><strong>❌ Don\'t</strong><ul style="padding-left:16px;margin-top:8px;font-size:12px"><li>Submit AI work as fully your own</li><li>Share private data with AI</li><li>Rely on AI for medical/legal advice</li><li>Use AI to deceive others</li></ul></div></div>' },
                { title: 'Privacy & Data Safety', content: '<p>Be careful about what you share with AI tools.</p>', visual: '<div style="background:#fef2f2;border:1px solid #fca5a5;padding:16px;border-radius:12px;margin-top:16px"><strong>🔒 Never share with public AI tools:</strong><ul style="margin-top:8px;padding-left:18px"><li>Passwords or API keys</li><li>Personal identification numbers</li><li>Confidential business data</li><li>Other people\'s private information</li></ul></div>' },
                { title: 'The Future is Human + AI', content: '<p>AI augments human capability — it doesn\'t replace human judgment, creativity, or empathy.</p>', visual: '<div style="background:linear-gradient(135deg,#6c3ce0,#3b82f6);color:#fff;padding:24px;border-radius:14px;text-align:center;margin-top:16px"><strong style="font-size:16px">The best results come from:</strong><br><br>🧑 Human creativity & judgment<br>+ 🤖 AI speed & scale<br>= 🚀 Extraordinary outcomes</div>' }
              ],
              objectives: ['Understand AI ethics principles', 'Learn data privacy best practices', 'Adopt responsible AI usage habits'],
              notes: 'Ethics in AI isn\'t just about avoiding harm — it\'s about being transparent and thoughtful. Always disclose AI assistance when it\'s expected (academic work, professional deliverables).\n\nGolden rule: Don\'t share anything with AI that you wouldn\'t post on a public bulletin board.',
              resources: [{ title: 'AI Ethics Framework', url: '#', type: 'guide' }, { title: 'Data Privacy with AI Tools', url: '#', type: 'article' }],
              exercise: { task: 'Write a brief AI usage policy for yourself or your team. Use AI to help draft it! Include guidelines for data privacy, attribution, and quality control.', starterPrompt: 'Act as an ethics advisor. Help me create a personal AI usage policy...', hint: 'Cover: what data can/cannot be shared, when to disclose AI use, how to verify outputs, and what tasks should NOT be delegated to AI.' }
            }
          ]
        },
        {
          id: 'w2-m2',
          title: 'Module 2: Workflow Automation',
          lessons: [
            {
              id: 'w2-m2-l1', title: 'Lesson 1: Identifying Automatable Tasks',
              slides: [
                { title: 'What Can You Automate?', content: '<p>Not everything should be automated. Learn to identify tasks that are perfect candidates for AI automation.</p>', visual: '<div style="margin-top:16px"><div style="background:linear-gradient(90deg,#22c55e,#f59e0b,#ef4444);height:8px;border-radius:4px;margin-bottom:16px"></div><div style="display:flex;justify-content:space-between;font-size:12px"><div style="text-align:center;flex:1"><strong>Best for AI</strong><br>Repetitive, templated, data-heavy</div><div style="text-align:center;flex:1"><strong>AI-Assisted</strong><br>Creative, strategic, complex</div><div style="text-align:center;flex:1"><strong>Keep Human</strong><br>Emotional, ethical, novel</div></div></div>' },
                { title: 'The Automation Audit', content: '<p>Audit your week to find automation opportunities.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><strong>Ask yourself for each task:</strong><div style="margin-top:10px"><div style="margin-bottom:6px">1️⃣ Do I do this more than once a week?</div><div style="margin-bottom:6px">2️⃣ Does it follow a predictable pattern?</div><div style="margin-bottom:6px">3️⃣ Could someone else do it with clear instructions?</div><div>4️⃣ Does it take more than 15 minutes each time?</div></div><p style="margin-top:10px;font-size:13px"><em>If you answered YES to 3+, it\'s a great automation candidate!</em></p></div>' }
              ],
              objectives: ['Identify tasks suitable for AI automation', 'Conduct a personal automation audit', 'Prioritize automation opportunities by impact'],
              notes: 'Start with the tasks you dread most — those repetitive, time-consuming activities that don\'t require deep thinking. These are your quick wins for AI automation.\n\nDon\'t try to automate everything at once. Pick your top 3 time sinks and automate those first.',
              resources: [{ title: 'Automation Audit Template', url: '#', type: 'tool' }, { title: 'AI Workflow Guide', url: '#', type: 'guide' }],
              exercise: { task: 'List 5 tasks you do regularly and write a prompt asking AI to identify which ones are best suited for automation and suggest how to automate each.', starterPrompt: '', hint: 'List specific tasks with details: "1) Writing weekly status emails (30 min), 2) Summarizing meeting notes (45 min)..." Then ask AI to rank them by automation potential.' }
            },
            {
              id: 'w2-m2-l2', title: 'Lesson 2: Email & Communication Automation',
              slides: [
                { title: 'AI-Powered Communication', content: '<p>Email and messaging are among the biggest time sinks. AI can draft, respond, and manage communications in seconds.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(239,68,68,0.08);padding:14px;border-radius:10px;text-align:center"><strong>Before AI</strong><br>⏱️ 2+ hours/day<br>on emails</div><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px;text-align:center"><strong>With AI</strong><br>⏱️ 30 min/day<br>on emails</div></div>' },
                { title: 'Email Templates That Work', content: '<p>Create reusable AI prompts for your most common email types.</p>', visual: '<div style="margin-top:16px;font-size:13px"><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px"><code>"Draft a follow-up email to [name] about [topic]. Tone: [professional/friendly]. Include a clear call-to-action. Max 100 words."</code></div><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px"><code>"Write a polite decline email for [request]. Express gratitude, give a brief reason, and suggest an alternative. Keep it warm."</code></div></div>' }
              ],
              objectives: ['Automate email drafting with AI templates', 'Create reusable communication prompts', 'Save 1+ hours daily on communication'],
              notes: 'Email automation is the easiest AI quick win. Create 5-10 email templates for your most common scenarios, and you\'ll save hours every week.\n\nPro tip: Save your best email prompts in a note-taking app with tags for quick access.',
              resources: [{ title: 'AI Email Templates', url: '#', type: 'tool' }, { title: 'Communication Automation', url: '#', type: 'guide' }],
              exercise: { task: 'Create 3 reusable email prompt templates for scenarios you encounter regularly (e.g., meeting requests, follow-ups, status updates).', starterPrompt: '', hint: 'For each template, use brackets for the parts that change: [recipient name], [topic], [date], etc. This makes them instantly reusable.' }
            },
            {
              id: 'w2-m2-l3', title: 'Lesson 3: Document & Report Automation',
              slides: [
                { title: 'Automate Your Documents', content: '<p>Reports, summaries, proposals — AI can generate first drafts in minutes instead of hours.</p>', visual: '<div style="margin-top:16px"><div style="display:flex;gap:10px;flex-wrap:wrap"><span style="background:rgba(108,60,224,0.1);padding:10px 16px;border-radius:8px">📊 Reports</span><span style="background:rgba(59,130,246,0.1);padding:10px 16px;border-radius:8px">📋 Proposals</span><span style="background:rgba(34,197,94,0.1);padding:10px 16px;border-radius:8px">📝 Summaries</span><span style="background:rgba(245,158,11,0.1);padding:10px 16px;border-radius:8px">📄 SOPs</span></div></div>' },
                { title: 'The Document Workflow', content: '<p>A systematic approach to creating documents with AI:</p>', visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">1. Outline</span><span>→</span><span style="background:#3b82f6;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">2. Draft</span><span>→</span><span style="background:#22c55e;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">3. Review</span><span>→</span><span style="background:#f59e0b;color:#fff;padding:8px 14px;border-radius:6px;font-size:12px">4. Finalize</span></div></div>' }
              ],
              objectives: ['Create documents 5x faster with AI', 'Build a document automation workflow', 'Generate reports, proposals, and summaries'],
              notes: 'The secret to great AI-generated documents is providing structure. Give AI an outline or template, and the drafts will be much more useful.\n\nAlways review and personalize AI-generated documents. Add your insights, data, and voice before sharing.',
              resources: [{ title: 'Document Automation Guide', url: '#', type: 'guide' }, { title: 'Report Templates', url: '#', type: 'tool' }],
              exercise: { task: 'Write a prompt to generate a weekly status report template. Include sections for accomplishments, challenges, next week\'s priorities, and any blockers.', starterPrompt: '', hint: 'Add context about your role, team size, and what your manager cares about most. Ask for a reusable template with placeholder brackets.' }
            },
            {
              id: 'w2-m2-l4', title: 'Lesson 4: Building AI-Powered Workflows',
              slides: [
                { title: 'Connecting the Dots', content: '<p>The real power comes from chaining multiple AI tasks into complete workflows that handle end-to-end processes.</p>', visual: '<div style="background:#0f1729;color:#fff;padding:20px;border-radius:12px;margin-top:16px;text-align:center"><strong>Example: Content Creation Workflow</strong><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:center;margin-top:12px;font-size:12px"><span style="background:#6c3ce0;padding:8px 12px;border-radius:6px">Research topic</span><span>→</span><span style="background:#3b82f6;padding:8px 12px;border-radius:6px">Generate outline</span><span>→</span><span style="background:#22c55e;padding:8px 12px;border-radius:6px">Write draft</span><span>→</span><span style="background:#f59e0b;padding:8px 12px;border-radius:6px">Create social posts</span><span>→</span><span style="background:#ef4444;padding:8px 12px;border-radius:6px">Schedule</span></div></div>' },
                { title: 'Your First Automated Workflow', content: '<p>Start simple, then expand. Every workflow starts with two connected steps.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><strong>Starter workflows:</strong><div style="margin-top:10px"><div style="margin-bottom:8px">📧 Email → Summary → Action items</div><div style="margin-bottom:8px">📝 Meeting notes → Follow-up emails → Calendar events</div><div>📊 Data → Analysis → Report → Presentation</div></div></div>' }
              ],
              objectives: ['Chain AI tasks into complete workflows', 'Design end-to-end automated processes', 'Build your first multi-step AI workflow'],
              notes: 'The most productive AI users don\'t just use single prompts — they build workflows. Think of each prompt as a building block in a larger process.\n\nStart with a 2-step workflow and gradually add more steps as you get comfortable.',
              resources: [{ title: 'AI Workflow Builder', url: '#', type: 'tool' }, { title: 'Automation Examples', url: '#', type: 'guide' }],
              exercise: { task: 'Design a 4-step AI workflow for a task you do regularly. Write the prompt for each step, where each step uses the output of the previous one.', starterPrompt: '', hint: 'Example: Step 1: Research a topic → Step 2: Create an outline from research → Step 3: Write a draft from outline → Step 4: Generate social media posts from the article.' }
            }
          ]
        },
        {
          id: 'w2-m3',
          title: 'Module 3: AI-Powered Content Creation',
          lessons: [
            {
              id: 'w2-m3-l1', title: 'Lesson 1: Social Media Content',
              slides: [
                { title: 'AI for Social Media', content: '<p>Create a month\'s worth of social media content in an afternoon. AI handles the heavy lifting, you add the personality.</p>', visual: '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px;text-align:center;font-size:12px"><div style="background:rgba(59,130,246,0.1);padding:14px;border-radius:10px"><strong>LinkedIn</strong><br>Thought leadership</div><div style="background:rgba(239,68,68,0.1);padding:14px;border-radius:10px"><strong>Instagram</strong><br>Visual + captions</div><div style="background:rgba(34,197,94,0.1);padding:14px;border-radius:10px"><strong>Twitter/X</strong><br>Threads + hooks</div></div>' },
                { title: 'Content Calendar with AI', content: '<p>Use AI to plan an entire month of content in one session.</p>', visual: '<div style="background:#0f1729;color:#fff;padding:14px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Create a 4-week social media content calendar for [business]. Include 3 posts per week for [platform]. Mix educational, entertaining, and promotional content. Format as a table."</code></div>' }
              ],
              objectives: ['Generate social media content at scale', 'Create content calendars with AI', 'Adapt content across platforms'],
              notes: 'The key to AI social media content is providing your brand voice and audience details. Generic prompts create generic posts.\n\nAlways add personal touches — stories, opinions, experiences — that AI can\'t generate.',
              resources: [{ title: 'Social Media AI Playbook', url: '#', type: 'guide' }, { title: 'Content Calendar Template', url: '#', type: 'tool' }],
              exercise: { task: 'Create a 1-week content calendar for any social media platform. Include post type, caption, and hashtags for each day.', starterPrompt: '', hint: 'Specify your niche, target audience, and platform. Ask for a mix of content types: educational, behind-the-scenes, engagement posts, and promotional.' }
            },
            {
              id: 'w2-m3-l2', title: 'Lesson 2: Blog & Article Writing',
              slides: [
                { title: 'AI-Assisted Blogging', content: '<p>From idea to published article in a fraction of the time. AI helps with research, outlining, drafting, and SEO optimization.</p>', visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:10px 16px;border-radius:8px;font-size:12px">Idea ➜ AI brainstorm</span><span>→</span><span style="background:#3b82f6;color:#fff;padding:10px 16px;border-radius:8px;font-size:12px">Outline ➜ AI structure</span><span>→</span><span style="background:#22c55e;color:#fff;padding:10px 16px;border-radius:8px;font-size:12px">Draft ➜ AI write</span><span>→</span><span style="background:#f59e0b;color:#fff;padding:10px 16px;border-radius:8px;font-size:12px">Edit ➜ You refine</span></div></div>' },
                { title: 'Blog Writing Prompts', content: '<p>Templates for every stage of blog creation:</p>', visual: '<div style="margin-top:16px;font-size:13px"><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px"><strong>Ideas:</strong> <code>"Give me 10 blog post ideas about [topic] that would interest [audience]"</code></div><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px"><strong>Outline:</strong> <code>"Create a detailed outline for a blog post titled [title] with [N] sections"</code></div><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px"><strong>SEO:</strong> <code>"Suggest 10 SEO keywords for a blog post about [topic]"</code></div></div>' }
              ],
              objectives: ['Write blog posts 5x faster with AI', 'Use AI for idea generation and SEO', 'Build an efficient content pipeline'],
              notes: 'AI-written blog posts need your personal touch to stand out. Add anecdotes, opinions, and expertise that only you can provide.\n\nSEO tip: Ask AI to suggest keywords, meta descriptions, and headers optimized for search.',
              resources: [{ title: 'AI Blogging Workflow', url: '#', type: 'guide' }, { title: 'SEO with AI', url: '#', type: 'article' }],
              exercise: { task: 'Write a prompt chain to create a complete blog post: 1) Generate topic ideas, 2) Create an outline for your favorite, 3) Draft the introduction.', starterPrompt: '', hint: 'Chain three prompts: first generate ideas, pick the best one, then outline it, then draft just the intro paragraph to test the voice.' }
            },
            {
              id: 'w2-m3-l3', title: 'Lesson 3: Presentation & Pitch Decks',
              slides: [
                { title: 'AI-Built Presentations', content: '<p>Create compelling presentations and pitch decks with AI — from slide structure to talking points.</p>', visual: '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;justify-content:center"><span style="background:rgba(108,60,224,0.1);padding:12px 18px;border-radius:8px">📊 Slide outlines</span><span style="background:rgba(59,130,246,0.1);padding:12px 18px;border-radius:8px">📝 Talking points</span><span style="background:rgba(34,197,94,0.1);padding:12px 18px;border-radius:8px">🎯 Key messages</span><span style="background:rgba(245,158,11,0.1);padding:12px 18px;border-radius:8px">📋 Speaker notes</span></div>' },
                { title: 'Presentation Prompt Template', content: '<p>Generate a complete presentation structure in one prompt.</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Create a [N]-slide presentation about [topic] for [audience]. For each slide, provide: slide title, 3-4 bullet points, and speaker notes. The presentation should tell a story from problem → solution → impact."</code></div>' }
              ],
              objectives: ['Generate presentation structures with AI', 'Create talking points and speaker notes', 'Build pitch decks efficiently'],
              notes: 'AI excels at structuring presentations logically. It can organize your ideas into a compelling narrative flow.\n\nBest practice: Generate the structure with AI, then customize with your own data, examples, and visuals.',
              resources: [{ title: 'AI Presentation Guide', url: '#', type: 'guide' }, { title: 'Pitch Deck Templates', url: '#', type: 'tool' }],
              exercise: { task: 'Create a prompt to generate a 10-slide pitch deck for a product or idea you care about. Include slide titles, bullet points, and speaker notes.', starterPrompt: '', hint: 'Structure as: Problem → Market → Solution → How it works → Benefits → Competition → Business model → Team → Traction → Ask.' }
            },
            {
              id: 'w2-m3-l4', title: 'Lesson 4: Visual Content with AI',
              slides: [
                { title: 'AI Image Generation', content: '<p>Tools like DALL-E, Midjourney, and Canva AI can create custom visuals from text descriptions.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:16px;text-align:center"><div style="background:rgba(108,60,224,0.1);padding:16px;border-radius:10px"><strong>🎨 DALL-E</strong><br><small>Realistic & artistic</small></div><div style="background:rgba(59,130,246,0.1);padding:16px;border-radius:10px"><strong>✨ Midjourney</strong><br><small>Stunning aesthetics</small></div><div style="background:rgba(34,197,94,0.1);padding:16px;border-radius:10px"><strong>🖌️ Canva AI</strong><br><small>Design-ready</small></div></div>' },
                { title: 'Image Prompt Basics', content: '<p>Writing prompts for images is different from text — focus on visual descriptions.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><strong>Image prompt formula:</strong><br><code style="font-size:13px">[Subject] + [Style] + [Setting] + [Mood] + [Details]</code><br><br><em>Example: "A cozy coffee shop interior, watercolor illustration style, warm lighting, autumn colors, books on shelves, steaming latte on table"</em></div>' }
              ],
              objectives: ['Understand AI image generation tools', 'Write effective image prompts', 'Create visual content for social media and presentations'],
              notes: 'Image generation AI requires a different prompting style — you\'re painting with words. Be descriptive about style, mood, colors, and composition.\n\nTip: Look at prompt galleries on Midjourney or DALL-E communities for inspiration.',
              resources: [{ title: 'Image Prompting Guide', url: '#', type: 'guide' }, { title: 'AI Art Styles Reference', url: '#', type: 'tool' }],
              exercise: { task: 'Write 3 image generation prompts for a social media post series. Describe the style, mood, colors, and composition for each image.', starterPrompt: '', hint: 'Think about a theme (e.g., "productivity tips"). Each prompt should describe a unique visual: one for a quote graphic, one for an infographic-style image, one for a lifestyle photo.' }
            }
          ]
        },
        {
          id: 'w2-m4',
          title: 'Module 4: Personal AI Systems',
          lessons: [
            {
              id: 'w2-m4-l1', title: 'Lesson 1: Custom Instructions & Memory',
              slides: [
                { title: 'Make AI Remember You', content: '<p>Custom instructions tell AI about your preferences, background, and communication style so every response is tailored to you.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><strong>Your Custom Instructions:</strong><div style="margin-top:10px;font-size:13px"><div style="margin-bottom:6px">👤 "I\'m a [role] at a [company type]"</div><div style="margin-bottom:6px">🎯 "I prefer [concise/detailed] responses"</div><div style="margin-bottom:6px">📝 "Format responses with [headers/bullets/paragraphs]"</div><div>🗣️ "Use a [casual/professional] tone"</div></div></div>' },
                { title: 'Setting Up Custom Instructions', content: '<p>Most AI tools support persistent preferences. Here\'s how to use them:</p>', visual: '<div style="margin-top:16px"><div style="background:#0f1729;color:#fff;padding:14px;border-radius:8px;font-size:13px"><strong>Template:</strong><br><br>"About me: I am a [role] with experience in [areas]. I work on [types of projects].<br><br>How to respond: Be [tone]. Use [format]. Keep responses [length]. Always [specific preference]."</div></div>' }
              ],
              objectives: ['Set up custom AI instructions', 'Create persistent AI preferences', 'Personalize AI interactions'],
              notes: 'Custom instructions are like configuring AI to be YOUR assistant. Take 10 minutes to set them up and every interaction improves.\n\nReview and update your instructions monthly as your needs evolve.',
              resources: [{ title: 'Custom Instructions Guide', url: '#', type: 'guide' }, { title: 'AI Personalization Tips', url: '#', type: 'article' }],
              exercise: { task: 'Write your own custom instructions for an AI assistant. Include your role, preferences, typical tasks, and response style.', starterPrompt: 'About me:\n\nHow I want responses:', hint: 'Be specific: "I\'m a marketing manager at a B2B SaaS company. I prefer responses in bullet points, under 300 words, with actionable next steps. Use a professional but friendly tone."' }
            },
            {
              id: 'w2-m4-l2', title: 'Lesson 2: Building a Second Brain with AI',
              slides: [
                { title: 'Your AI-Powered Second Brain', content: '<p>Combine AI with note-taking tools to build a personal knowledge system that grows smarter over time.</p>', visual: '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:16px"><div style="background:#6c3ce0;color:#fff;padding:14px 18px;border-radius:10px;text-align:center"><strong>📥 Capture</strong><br><small>Save everything</small></div><span style="font-size:20px">→</span><div style="background:#3b82f6;color:#fff;padding:14px 18px;border-radius:10px;text-align:center"><strong>🏷️ Organize</strong><br><small>AI categorizes</small></div><span style="font-size:20px">→</span><div style="background:#22c55e;color:#fff;padding:14px 18px;border-radius:10px;text-align:center"><strong>💡 Connect</strong><br><small>Find patterns</small></div><span style="font-size:20px">→</span><div style="background:#f59e0b;color:#fff;padding:14px 18px;border-radius:10px;text-align:center"><strong>🚀 Create</strong><br><small>Generate ideas</small></div></div>' },
                { title: 'Second Brain Tools + AI', content: '<p>Combine these tools for a powerful knowledge system:</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px"><div style="background:rgba(108,60,224,0.08);padding:14px;border-radius:10px"><strong>📓 Notion + AI</strong><br><small>Notes, databases, AI summaries</small></div><div style="background:rgba(59,130,246,0.08);padding:14px;border-radius:10px"><strong>🧠 Obsidian + AI</strong><br><small>Connected knowledge graphs</small></div><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px"><strong>📋 Mem.ai</strong><br><small>AI-first note-taking</small></div><div style="background:rgba(245,158,11,0.08);padding:14px;border-radius:10px"><strong>📝 Apple Notes + Shortcuts</strong><br><small>Simple + AI automation</small></div></div>' }
              ],
              objectives: ['Build an AI-powered personal knowledge system', 'Choose the right second brain tools', 'Create a capture-to-creation workflow'],
              notes: 'A second brain is only useful if you USE it. Start simple — capture ideas and let AI help you organize and connect them.\n\nThe goal: never start from scratch. Your second brain gives you a foundation for every new project.',
              resources: [{ title: 'Building a Second Brain', url: '#', type: 'guide' }, { title: 'Notion AI Setup', url: '#', type: 'tool' }],
              exercise: { task: 'Design your ideal second brain system. Write a prompt asking AI to create a knowledge management setup tailored to your role and goals.', starterPrompt: '', hint: 'Include: what kind of information you handle daily, how you want to organize it, what tools you already use, and what your biggest knowledge management challenge is.' }
            },
            {
              id: 'w2-m4-l3', title: 'Lesson 3: Measuring Your AI ROI',
              slides: [
                { title: 'Measuring AI Impact', content: '<p>Track how much time and effort AI saves you to justify investment and identify areas for improvement.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:16px;text-align:center"><div style="background:rgba(34,197,94,0.1);padding:16px;border-radius:10px"><div style="font-size:28px">⏱️</div><strong>Time Saved</strong><br><small>Hours per week</small></div><div style="background:rgba(59,130,246,0.1);padding:16px;border-radius:10px"><div style="font-size:28px">📊</div><strong>Output Quality</strong><br><small>Better deliverables</small></div><div style="background:rgba(108,60,224,0.1);padding:16px;border-radius:10px"><div style="font-size:28px">🚀</div><strong>New Capabilities</strong><br><small>Things you couldn\'t do before</small></div></div>' },
                { title: 'Week 2 Complete! 🎉', content: '<p>You\'ve leveled up from AI user to AI-powered professional. You can now automate workflows, create content at scale, and build personal AI systems.</p>', visual: '<div style="background:linear-gradient(135deg,#e74c3c,#f39c12);color:#fff;padding:24px;border-radius:14px;text-align:center;margin-top:16px"><div style="font-size:36px;margin-bottom:12px">🏆</div><strong style="font-size:18px">Skills Unlocked:</strong><br>AI Tool Selection • Workflow Automation • Content Creation • Personal AI Systems<br><br><small>Next up: Week 3 — Ideas to Prototypes →</small></div>' }
              ],
              objectives: ['Track AI time savings', 'Measure output quality improvements', 'Calculate your AI ROI'],
              notes: 'Keep a simple log for one week: for each task where you use AI, note the time it would have taken without AI vs. with AI. The difference is your ROI.\n\nMost people find AI saves them 5-10 hours per week once they have workflows in place.',
              resources: [{ title: 'AI ROI Calculator', url: '#', type: 'tool' }, { title: 'Productivity Metrics Guide', url: '#', type: 'article' }],
              exercise: { task: 'Create an AI productivity tracker. Write a prompt asking AI to design a weekly tracking spreadsheet for measuring time saved, quality improved, and new capabilities unlocked.', starterPrompt: '', hint: 'Ask for a spreadsheet structure with columns for: Task, Time Without AI, Time With AI, Time Saved, Quality Rating, Notes. Include a summary row for weekly totals.' }
            }
          ]
        }
      ]
    },
    // =============================================
    // WEEK 3: Ideas to Prototypes
    // =============================================
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
              id: 'w3-m1-l1', title: 'Lesson 1: AI-Powered Brainstorming',
              slides: [
                { title: 'Brainstorming with AI', content: '<p>AI is the ultimate brainstorming partner — it never runs out of ideas, never judges, and can explore directions you\'d never think of.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px"><div style="background:rgba(239,68,68,0.08);padding:14px;border-radius:10px;text-align:center"><strong>Solo Brainstorming</strong><br>⏱️ Limited perspectives<br>😰 Creative blocks<br>📉 Diminishing returns</div><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px;text-align:center"><strong>AI Brainstorming</strong><br>💡 Unlimited ideas<br>🔄 Multiple angles<br>📈 Builds on each idea</div></div>' },
                { title: 'Brainstorming Techniques', content: '<p>Use these AI brainstorming frameworks for maximum creativity:</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>SCAMPER:</strong> "Apply the SCAMPER method to [product/idea] — Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse"</div><div style="background:#eff6ff;border-left:4px solid #3b82f6;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>Random Connections:</strong> "Combine [concept A] with [concept B] — what new ideas emerge?"</div><div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:14px;border-radius:0 10px 10px 0"><strong>Reverse Thinking:</strong> "What would make [goal] fail? Now flip each failure into a success strategy."</div></div>' },
                { title: 'From 100 Ideas to 3 Winners', content: '<p>AI can also help you filter and evaluate ideas, not just generate them.</p>', visual: '<div style="text-align:center;margin-top:20px"><div style="display:flex;align-items:center;gap:8px;justify-content:center;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:10px 16px;border-radius:8px">💡 Generate 20 ideas</span><span style="font-size:20px">→</span><span style="background:#3b82f6;color:#fff;padding:10px 16px;border-radius:8px">🔍 AI scores by criteria</span><span style="font-size:20px">→</span><span style="background:#22c55e;color:#fff;padding:10px 16px;border-radius:8px">🏆 Top 3 winners</span></div></div>' },
                { title: 'Idea Evaluation Prompt', content: '<p>Use this template to evaluate and rank your ideas:</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Evaluate these [N] ideas for [goal]. Score each 1-10 on: Feasibility, Impact, Originality, and Time to Implement. Present as a ranked table with a recommendation."</code></div>' }
              ],
              objectives: ['Use AI as a brainstorming partner', 'Apply SCAMPER and other ideation frameworks', 'Filter and evaluate ideas systematically'],
              notes: 'AI brainstorming works best when you give it constraints. "Give me 20 ideas for a mobile app" is less useful than "Give me 20 ideas for a mobile app that helps college students manage their finances under $0 budget."\n\nThe magic technique: ask for bad ideas too. Sometimes the worst ideas spark the best innovations.',
              resources: [{ title: 'AI Brainstorming Playbook', url: '#', type: 'guide' }, { title: 'SCAMPER Method Explained', url: '#', type: 'article' }],
              exercise: { task: 'Use AI to brainstorm 10 app or project ideas that solve a problem you personally experience. Then ask AI to evaluate and rank the top 3 by feasibility and impact.', starterPrompt: '', hint: 'Start with your pain points: "I struggle with [problem]. Generate 10 creative solutions." Then follow up: "Rank these by feasibility (can I build it?) and impact (how many people need this?)."' }
            },
            {
              id: 'w3-m1-l2', title: 'Lesson 2: Validating Ideas with AI',
              slides: [
                { title: 'Idea Validation Framework', content: '<p>Before building anything, validate your idea. AI can simulate market research, competitor analysis, and user feedback.</p>', visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">1</span><span><strong>Problem</strong> — Is this a real problem?</span></div><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">2</span><span><strong>Market</strong> — Who needs this?</span></div><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">3</span><span><strong>Competition</strong> — What exists already?</span></div><div style="display:flex;align-items:center;gap:10px"><span style="background:#6c3ce0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;font-size:13px">4</span><span><strong>Feasibility</strong> — Can I build this?</span></div></div>' },
                { title: 'AI Market Research', content: '<p>Use AI to quickly understand your market landscape.</p>', visual: '<div style="margin-top:16px;font-size:13px"><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px"><code>"Analyze the market for [product idea]. Include: target audience demographics, market size estimate, top 5 competitors, and gaps in the current market."</code></div><div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:12px;border-radius:0 8px 8px 0;margin-top:12px"><strong>⚠️ Remember:</strong> AI market data is estimates, not facts. Use it as a starting point for real research.</div></div>' },
                { title: 'The 5-Minute Validation Test', content: '<p>Validate any idea in 5 minutes with this AI prompt sequence:</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="margin-bottom:8px">1️⃣ "Who would pay for [idea] and why?" (1 min)</div><div style="margin-bottom:8px">2️⃣ "What are the top 3 alternatives to [idea]?" (1 min)</div><div style="margin-bottom:8px">3️⃣ "What could go wrong with [idea]?" (1 min)</div><div style="margin-bottom:8px">4️⃣ "What\'s the simplest version I could build in a week?" (1 min)</div><div>5️⃣ "Give me a 1-paragraph elevator pitch for [idea]" (1 min)</div></div></div>' }
              ],
              objectives: ['Validate ideas before building', 'Use AI for market research', 'Apply the 5-minute validation test'],
              notes: 'Validation saves you from building something nobody wants. Spend time validating before coding.\n\nAI validation is a starting point — nothing replaces talking to real potential users. But AI gets you 80% of the way there in minutes.',
              resources: [{ title: 'Lean Validation Guide', url: '#', type: 'guide' }, { title: 'Market Research with AI', url: '#', type: 'article' }],
              exercise: { task: 'Pick your best idea from the previous exercise and run the 5-minute validation test. Write all 5 prompts and compile the results into a go/no-go decision.', starterPrompt: '', hint: 'Run each of the 5 validation questions as a separate prompt. At the end, ask AI: "Based on these validation results, should I pursue this idea? Give me a confidence score out of 10."' }
            },
            {
              id: 'w3-m1-l3', title: 'Lesson 3: Creating User Personas with AI',
              slides: [
                { title: 'AI-Generated User Personas', content: '<p>User personas help you design for real people. AI can create detailed, realistic personas in seconds.</p>', visual: '<div style="background:#f5f3ff;padding:20px;border-radius:12px;margin-top:16px"><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:140px;text-align:center"><div style="font-size:36px">👩‍💻</div><strong>Sarah, 28</strong><br><small>Product Manager<br>Tech-savvy, busy</small></div><div style="flex:1;min-width:140px;text-align:center"><div style="font-size:36px">👨‍🎓</div><strong>Marcus, 21</strong><br><small>College Student<br>Budget-conscious</small></div><div style="flex:1;min-width:140px;text-align:center"><div style="font-size:36px">👩‍🏫</div><strong>Linda, 45</strong><br><small>Small Business Owner<br>Non-technical</small></div></div></div>' },
                { title: 'Persona Generation Prompt', content: '<p>Generate rich, detailed personas with a single prompt:</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Create 3 detailed user personas for [product]. For each, include: Name, Age, Occupation, Tech comfort level, Goals, Frustrations, How they\'d discover the product, and a typical day scenario. Make them diverse and realistic."</code></div>' }
              ],
              objectives: ['Create detailed user personas with AI', 'Understand your target audience deeply', 'Use personas to guide product decisions'],
              notes: 'Personas should represent real user segments, not stereotypes. The best personas include frustrations, goals, and daily routines.\n\nPro tip: Ask AI to role-play AS the persona to test your product ideas from their perspective.',
              resources: [{ title: 'User Persona Templates', url: '#', type: 'tool' }, { title: 'Persona-Driven Design', url: '#', type: 'guide' }],
              exercise: { task: 'Create 3 user personas for a product or app idea you have. Include demographics, goals, frustrations, and a "day in the life" scenario for each.', starterPrompt: '', hint: 'Be specific about your product so the personas are relevant. Include diversity in age, tech-savviness, and use cases.' }
            }
          ]
        },
        {
          id: 'w3-m2',
          title: 'Module 2: Rapid Prototyping',
          lessons: [
            {
              id: 'w3-m2-l1', title: 'Lesson 1: From Idea to Wireframe',
              slides: [
                { title: 'Wireframing with AI', content: '<p>AI can help you create wireframes and UI layouts by describing screens in natural language.</p>', visual: '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:16px;justify-content:center"><div style="background:#6c3ce0;color:#fff;padding:12px 18px;border-radius:8px">💡 Describe screen</div><span style="font-size:20px">→</span><div style="background:#3b82f6;color:#fff;padding:12px 18px;border-radius:8px">📐 AI generates layout</div><span style="font-size:20px">→</span><div style="background:#22c55e;color:#fff;padding:12px 18px;border-radius:8px">🎨 Refine & iterate</div></div>' },
                { title: 'Screen Description Template', content: '<p>Describe your screens clearly for AI to generate wireframe specifications:</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Design the layout for a [screen name] screen of my [app type]. Include: [list of elements]. The primary action is [action]. Use [layout style]. The user arrives here from [previous screen] and can navigate to [next screens]."</code></div>' }
              ],
              objectives: ['Create wireframes using AI descriptions', 'Structure screen layouts effectively', 'Iterate on UI designs quickly'],
              notes: 'AI wireframing works best when you describe the user flow, not just individual screens. Think about where the user came from and where they\'re going.\n\nTip: Use AI to generate the layout spec, then build it in Figma or a no-code tool.',
              resources: [{ title: 'AI Wireframing Guide', url: '#', type: 'guide' }, { title: 'UI Layout Patterns', url: '#', type: 'article' }],
              exercise: { task: 'Describe 3 screens of an app (Home, Detail, and Settings). For each screen, list the elements, layout, and user actions. Ask AI to create a wireframe description.', starterPrompt: '', hint: 'For each screen, include: screen title, list of UI elements (header, buttons, cards, etc.), the primary user action, and how it connects to other screens.' }
            },
            {
              id: 'w3-m2-l2', title: 'Lesson 2: Building with No-Code + AI',
              slides: [
                { title: 'No-Code + AI = Superpowers', content: '<p>You don\'t need to be a programmer to build working prototypes. No-code tools + AI let anyone create functional apps.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:16px;text-align:center"><div style="background:rgba(108,60,224,0.1);padding:14px;border-radius:10px"><strong>🌐 Websites</strong><br><small>Wix, Framer, Webflow</small></div><div style="background:rgba(59,130,246,0.1);padding:14px;border-radius:10px"><strong>📱 Apps</strong><br><small>Bubble, FlutterFlow</small></div><div style="background:rgba(34,197,94,0.1);padding:14px;border-radius:10px"><strong>🤖 Automations</strong><br><small>Zapier, Make, n8n</small></div></div>' },
                { title: 'AI-Assisted No-Code Workflow', content: '<p>Let AI generate the logic and content while you focus on design and user experience.</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="margin-bottom:8px">1️⃣ <strong>AI:</strong> Generate app structure and page layouts</div><div style="margin-bottom:8px">2️⃣ <strong>AI:</strong> Write all copy, labels, and help text</div><div style="margin-bottom:8px">3️⃣ <strong>You:</strong> Build in no-code tool using AI specs</div><div>4️⃣ <strong>AI:</strong> Generate test scenarios and edge cases</div></div></div>' }
              ],
              objectives: ['Understand the no-code + AI landscape', 'Build functional prototypes without coding', 'Use AI to accelerate no-code development'],
              notes: 'No-code tools have evolved dramatically. Combined with AI, you can build a working prototype in days, not months.\n\nBest approach: Use AI to plan and generate content, then implement in your chosen no-code platform.',
              resources: [{ title: 'No-Code Tools Comparison', url: '#', type: 'article' }, { title: 'Bubble Beginner Guide', url: '#', type: 'guide' }],
              exercise: { task: 'Plan a simple app prototype using no-code tools. Write a prompt asking AI to create the full specification: screens, features, user flow, and recommended no-code platform.', starterPrompt: '', hint: 'Include your app idea, target users, 3-5 core features, and your technical skill level. Ask AI to recommend the best no-code platform for your specific use case.' }
            },
            {
              id: 'w3-m2-l3', title: 'Lesson 3: AI-Generated Code Prototypes',
              slides: [
                { title: 'Code Prototypes with AI', content: '<p>Even if you\'re not a developer, AI can generate functional code prototypes. From landing pages to interactive demos, AI writes the code for you.</p>', visual: '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px"><span style="background:rgba(108,60,224,0.1);padding:10px 16px;border-radius:8px">🌐 HTML/CSS websites</span><span style="background:rgba(59,130,246,0.1);padding:10px 16px;border-radius:8px">⚛️ React components</span><span style="background:rgba(34,197,94,0.1);padding:10px 16px;border-radius:8px">🐍 Python scripts</span><span style="background:rgba(245,158,11,0.1);padding:10px 16px;border-radius:8px">📊 Data dashboards</span></div>' },
                { title: 'Code Generation Best Practices', content: '<p>Get better code from AI by being specific about requirements:</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><div style="margin-bottom:8px">✅ Specify the language/framework</div><div style="margin-bottom:8px">✅ Describe the desired behavior, not implementation</div><div style="margin-bottom:8px">✅ Include example inputs and outputs</div><div style="margin-bottom:8px">✅ Ask for comments in the code</div><div>✅ Request error handling</div></div>' }
              ],
              objectives: ['Generate functional code prototypes with AI', 'Write effective code generation prompts', 'Test and iterate on AI-generated code'],
              notes: 'AI-generated code is a great starting point, but always test it. AI can produce code that looks right but has subtle bugs.\n\nBest practice: Start with small, testable pieces. Build incrementally rather than asking for an entire application at once.',
              resources: [{ title: 'AI Code Generation Guide', url: '#', type: 'guide' }, { title: 'GitHub Copilot Tutorial', url: '#', type: 'video' }],
              exercise: { task: 'Write a prompt asking AI to generate a simple landing page in HTML/CSS for your product idea. Include sections for hero, features, testimonials, and a CTA.', starterPrompt: '', hint: 'Be specific about colors, layout style (modern, minimal, bold), and the key message. Ask for responsive design and clean, commented code.' }
            },
            {
              id: 'w3-m2-l4', title: 'Lesson 4: MVP Definition with AI',
              slides: [
                { title: 'Defining Your MVP', content: '<p>A Minimum Viable Product (MVP) is the simplest version that delivers value. AI helps you ruthlessly prioritize features.</p>', visual: '<div style="text-align:center;margin-top:20px"><div style="display:inline-block;position:relative"><div style="background:#22c55e;color:#fff;padding:20px 30px;border-radius:50%;font-weight:700">MVP</div></div><div style="display:flex;gap:10px;justify-content:center;margin-top:12px;flex-wrap:wrap;font-size:12px"><span style="background:rgba(34,197,94,0.1);padding:6px 12px;border-radius:20px">Core feature 1</span><span style="background:rgba(34,197,94,0.1);padding:6px 12px;border-radius:20px">Core feature 2</span><span style="background:rgba(34,197,94,0.1);padding:6px 12px;border-radius:20px">Core feature 3</span><span style="background:rgba(200,200,200,0.3);padding:6px 12px;border-radius:20px;text-decoration:line-through;color:#999">Nice-to-have</span><span style="background:rgba(200,200,200,0.3);padding:6px 12px;border-radius:20px;text-decoration:line-through;color:#999">Future feature</span></div></div>' },
                { title: 'MVP Prioritization Prompt', content: '<p>Let AI help you decide what to build first:</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"I\'m building [product] for [audience]. Here are all the features I\'m considering: [list]. Help me define the MVP by categorizing each feature as: Must-Have, Nice-to-Have, or Future. Explain your reasoning."</code></div>' }
              ],
              objectives: ['Define a focused MVP', 'Prioritize features effectively', 'Avoid feature creep with AI-assisted planning'],
              notes: 'The hardest part of an MVP is saying NO to features. AI helps by providing objective criteria for prioritization.\n\nRule: If you can\'t build it in 2 weeks, your MVP is too big. Cut more features.',
              resources: [{ title: 'MVP Planning Guide', url: '#', type: 'guide' }, { title: 'Feature Prioritization Matrix', url: '#', type: 'tool' }],
              exercise: { task: 'List 10 features for your app idea. Write a prompt asking AI to categorize them into Must-Have (MVP), Nice-to-Have (V2), and Future (V3). Ask for reasoning.', starterPrompt: '', hint: 'Be honest about all the features you want. Let AI be the voice of reason. Ask it to consider: user value, technical complexity, and time to build.' }
            }
          ]
        },
        {
          id: 'w3-m3',
          title: 'Module 3: User Testing with AI',
          lessons: [
            {
              id: 'w3-m3-l1', title: 'Lesson 1: Simulating User Feedback',
              slides: [
                { title: 'AI as Your Test User', content: '<p>Before testing with real users, use AI to simulate user feedback. Have AI role-play as different personas interacting with your product.</p>', visual: '<div style="background:#f5f3ff;padding:20px;border-radius:12px;margin-top:16px;text-align:center"><strong>AI User Testing Simulation</strong><div style="display:flex;gap:12px;justify-content:center;margin-top:12px;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">👩‍💻 Tech-savvy user</span><span style="background:#3b82f6;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">👴 Non-tech user</span><span style="background:#22c55e;color:#fff;padding:8px 16px;border-radius:20px;font-size:13px">😤 Frustrated user</span></div></div>' },
                { title: 'User Testing Prompts', content: '<p>Simulate different user perspectives with targeted prompts:</p>', visual: '<div style="margin-top:16px;font-size:13px"><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px"><code>"Role-play as a [persona]. You\'re using [product] for the first time. Walk through your experience step by step. What confuses you? What delights you? What would make you leave?"</code></div></div>' }
              ],
              objectives: ['Simulate user feedback with AI personas', 'Identify usability issues early', 'Get diverse perspectives on your product'],
              notes: 'AI user testing is not a replacement for real user testing, but it\'s a great way to catch obvious issues before you put your product in front of real people.\n\nTest with at least 3 different AI personas to get diverse feedback.',
              resources: [{ title: 'User Testing Guide', url: '#', type: 'guide' }, { title: 'Usability Heuristics', url: '#', type: 'article' }],
              exercise: { task: 'Have AI role-play as 3 different user personas trying your product for the first time. Ask each to identify 3 things they like and 3 things that confuse them.', starterPrompt: '', hint: 'Create personas with different tech levels, ages, and goals. Ask each to narrate their experience step by step, noting moments of confusion or delight.' }
            },
            {
              id: 'w3-m3-l2', title: 'Lesson 2: Creating User Surveys with AI',
              slides: [
                { title: 'AI-Generated Surveys', content: '<p>AI can create professional user surveys in seconds — with the right questions to get actionable feedback.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px"><strong>✅ Good Survey Questions</strong><ul style="padding-left:16px;margin-top:8px;font-size:12px"><li>Specific & measurable</li><li>One concept per question</li><li>Mix of types (scale, open)</li></ul></div><div style="background:rgba(239,68,68,0.08);padding:14px;border-radius:10px"><strong>❌ Bad Survey Questions</strong><ul style="padding-left:16px;margin-top:8px;font-size:12px"><li>Leading or biased</li><li>Double-barreled</li><li>Too many open-ended</li></ul></div></div>' },
                { title: 'Survey Generation Template', content: '<p>Generate complete surveys with one prompt:</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Create a 10-question user feedback survey for [product]. Include: 3 Likert scale questions, 3 multiple choice, 2 open-ended, and 2 yes/no questions. Focus on [usability/satisfaction/features]. Make questions neutral and unbiased."</code></div>' }
              ],
              objectives: ['Create effective user surveys with AI', 'Write unbiased survey questions', 'Structure surveys for actionable insights'],
              notes: 'The best surveys are short (under 10 questions), focused on specific aspects, and mix question types.\n\nPro tip: Ask AI to also generate the analysis plan — how will you use each answer?',
              resources: [{ title: 'Survey Design Best Practices', url: '#', type: 'guide' }, { title: 'Google Forms + AI', url: '#', type: 'tool' }],
              exercise: { task: 'Create a 10-question user feedback survey for your product idea. Include a mix of question types and ask AI to explain why each question is important.', starterPrompt: '', hint: 'Tell AI about your product, what stage you\'re at, and what you most need to learn from users. Ask for questions that help you decide whether to pivot or persevere.' }
            },
            {
              id: 'w3-m3-l3', title: 'Lesson 3: Analyzing Feedback with AI',
              slides: [
                { title: 'AI-Powered Feedback Analysis', content: '<p>Once you have user feedback, AI can analyze patterns, extract themes, and prioritize issues faster than manual review.</p>', visual: '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:16px;justify-content:center"><div style="background:#6c3ce0;color:#fff;padding:14px 18px;border-radius:10px;text-align:center"><strong>📝 Raw feedback</strong><br><small>100+ responses</small></div><span style="font-size:20px">→</span><div style="background:#3b82f6;color:#fff;padding:14px 18px;border-radius:10px;text-align:center"><strong>🔍 AI analysis</strong><br><small>Themes & patterns</small></div><span style="font-size:20px">→</span><div style="background:#22c55e;color:#fff;padding:14px 18px;border-radius:10px;text-align:center"><strong>📋 Action items</strong><br><small>Prioritized fixes</small></div></div>' },
                { title: 'Feedback Analysis Prompts', content: '<p>Use these prompts to extract insights from user feedback:</p>', visual: '<div style="margin-top:16px;font-size:13px"><div style="background:#0f1729;color:#fff;padding:12px;border-radius:8px;margin-bottom:8px"><code>"Analyze this user feedback and identify: Top 3 themes, sentiment breakdown (positive/neutral/negative), most requested features, and critical issues. [paste feedback]"</code></div></div>' }
              ],
              objectives: ['Analyze user feedback with AI', 'Extract themes and patterns', 'Create prioritized action plans from feedback'],
              notes: 'AI can process hundreds of feedback responses in seconds. It excels at finding patterns you might miss.\n\nBest practice: Always validate AI\'s analysis against the raw data. Check if the themes it identified actually match what users said.',
              resources: [{ title: 'Feedback Analysis Guide', url: '#', type: 'guide' }, { title: 'Sentiment Analysis Tools', url: '#', type: 'tool' }],
              exercise: { task: 'Write 5 sample user feedback comments (mix of positive and negative). Then write a prompt asking AI to analyze them for themes, sentiment, and recommended actions.', starterPrompt: '', hint: 'Create realistic feedback: "Love the design but navigation is confusing", "Great idea but too slow to load", etc. Ask AI to categorize by theme and urgency.' }
            }
          ]
        },
        {
          id: 'w3-m4',
          title: 'Module 4: Iteration & Refinement',
          lessons: [
            {
              id: 'w3-m4-l1', title: 'Lesson 1: Iterating Based on Feedback',
              slides: [
                { title: 'The Iteration Loop', content: '<p>Great products are built through continuous iteration. Each cycle makes your product better, faster, and more user-friendly.</p>', visual: '<div style="text-align:center;margin-top:20px"><div style="display:flex;align-items:center;gap:8px;justify-content:center;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:10px 16px;border-radius:8px">Build</span><span style="font-size:20px">→</span><span style="background:#3b82f6;color:#fff;padding:10px 16px;border-radius:8px">Test</span><span style="font-size:20px">→</span><span style="background:#22c55e;color:#fff;padding:10px 16px;border-radius:8px">Learn</span><span style="font-size:20px">→</span><span style="background:#f59e0b;color:#fff;padding:10px 16px;border-radius:8px">Improve</span><span style="font-size:20px">→</span><span style="color:#888">🔄 Repeat</span></div></div>' },
                { title: 'AI-Assisted Iteration', content: '<p>Use AI to plan each iteration cycle efficiently:</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Based on this user feedback: [feedback], suggest the top 3 changes to make in the next iteration of [product]. For each change, explain: what to change, why, expected impact, and effort level (low/medium/high)."</code></div>' }
              ],
              objectives: ['Implement the Build-Test-Learn loop', 'Prioritize iterations by impact', 'Use AI to plan improvement cycles'],
              notes: 'Iteration is about small, focused improvements. Don\'t try to fix everything at once — pick the top 3 issues and address those.\n\nEach iteration should have a hypothesis: "If we change X, users will do Y." Test the hypothesis with each cycle.',
              resources: [{ title: 'Lean Iteration Guide', url: '#', type: 'guide' }, { title: 'Build-Measure-Learn Loop', url: '#', type: 'article' }],
              exercise: { task: 'Based on the feedback analysis from the previous exercise, write a prompt asking AI to create a detailed iteration plan for the next version of your product.', starterPrompt: '', hint: 'Include the top issues, ask for specific changes with effort estimates, and request a timeline for the iteration sprint.' }
            },
            {
              id: 'w3-m4-l2', title: 'Lesson 2: Pitching Your Prototype',
              slides: [
                { title: 'Crafting Your Pitch with AI', content: '<p>Whether it\'s for investors, managers, or classmates — AI can help you create a compelling pitch for your prototype.</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;border-left:4px solid #6c3ce0;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>30-Second Elevator Pitch:</strong><br>"[Product] helps [audience] solve [problem] by [solution], unlike [alternative] which [limitation]."</div></div>' },
                { title: 'Pitch Deck Elements', content: '<p>AI can generate every element of your pitch:</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:16px;font-size:12px"><span style="background:rgba(108,60,224,0.08);padding:10px;border-radius:8px">🎯 Problem statement</span><span style="background:rgba(59,130,246,0.08);padding:10px;border-radius:8px">💡 Solution overview</span><span style="background:rgba(34,197,94,0.08);padding:10px;border-radius:8px">📊 Market opportunity</span><span style="background:rgba(245,158,11,0.08);padding:10px;border-radius:8px">🏆 Competitive advantage</span><span style="background:rgba(239,68,68,0.08);padding:10px;border-radius:8px">💰 Business model</span><span style="background:rgba(108,60,224,0.08);padding:10px;border-radius:8px">📈 Traction & metrics</span></div>' }
              ],
              objectives: ['Create compelling pitches with AI', 'Structure a pitch deck', 'Practice and refine your presentation'],
              notes: 'A great pitch tells a story: Problem → Solution → Why Now → Why You. AI can help structure this narrative.\n\nPractice tip: Ask AI to role-play as a tough investor and challenge your pitch.',
              resources: [{ title: 'Pitch Deck Templates', url: '#', type: 'tool' }, { title: 'How to Pitch Your Idea', url: '#', type: 'video' }],
              exercise: { task: 'Create a 60-second elevator pitch for your product prototype. Then ask AI to play the role of a skeptical investor and poke holes in your pitch.', starterPrompt: '', hint: 'Write your pitch using the formula: Problem → Solution → Market → Why You. Then ask AI: "Act as a venture capitalist. What questions or concerns would you have about this pitch?"' }
            },
            {
              id: 'w3-m4-l3', title: 'Lesson 3: Launch Preparation with AI',
              slides: [
                { title: 'Pre-Launch Checklist with AI', content: '<p>AI can help you prepare every aspect of your launch — from marketing copy to technical testing to launch day logistics.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><div style="margin-bottom:6px">☐ Landing page copy & SEO</div><div style="margin-bottom:6px">☐ Social media launch posts</div><div style="margin-bottom:6px">☐ Email announcement draft</div><div style="margin-bottom:6px">☐ FAQ and help documentation</div><div style="margin-bottom:6px">☐ Bug testing scenarios</div><div>☐ Analytics and tracking setup</div></div>' },
                { title: 'Week 3 Complete! 🎉', content: '<p>You\'ve gone from idea to validated, tested prototype. You now have the skills to rapidly build and iterate on products using AI.</p>', visual: '<div style="background:linear-gradient(135deg,#1a3a5c,#d35400);color:#fff;padding:24px;border-radius:14px;text-align:center;margin-top:16px"><div style="font-size:36px;margin-bottom:12px">🏆</div><strong style="font-size:18px">Skills Unlocked:</strong><br>AI Brainstorming • Idea Validation • Rapid Prototyping • User Testing • Iteration<br><br><small>Next up: Week 4 — AI Agents & Your Workforce →</small></div>' }
              ],
              objectives: ['Create a comprehensive launch checklist', 'Generate all launch assets with AI', 'Prepare for a successful product launch'],
              notes: 'A launch is not the end — it\'s the beginning of your product journey. Use AI to prepare everything in advance so you can focus on users on launch day.\n\nPro tip: Create a "launch day playbook" with AI — a minute-by-minute plan for what to post, monitor, and respond to.',
              resources: [{ title: 'Product Launch Checklist', url: '#', type: 'tool' }, { title: 'Launch Day Guide', url: '#', type: 'guide' }],
              exercise: { task: 'Create a complete launch plan for your prototype. Write a prompt asking AI to generate a timeline, marketing assets list, and launch day checklist.', starterPrompt: '', hint: 'Include: 2-week pre-launch timeline, list of marketing assets needed (social posts, emails, landing page), launch day checklist, and first-week post-launch monitoring plan.' }
            }
          ]
        }
      ]
    },
    // =============================================
    // WEEK 4: AI Agents & Your Workforce
    // =============================================
    {
      id: 'week-4',
      title: 'Week 4',
      name: 'AI Agents & Your Workforce',
      badge: 'upcoming',
      gradient: 'linear-gradient(135deg, #1a0a3e 0%, #2d1b69 40%, #4a2d8a 100%)',
      emoji: '🦾',
      lessonsCount: 12,
      tasksCount: 16,
      modules: [
        {
          id: 'w4-m1',
          title: 'Module 1: Understanding AI Agents',
          lessons: [
            {
              id: 'w4-m1-l1', title: 'Lesson 1: What Are AI Agents?',
              slides: [
                { title: 'What Are AI Agents?', content: '<p>AI agents are autonomous AI systems that can <strong>plan, decide, and act</strong> to accomplish goals — going beyond simple chat to actually getting things done.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px"><div style="background:rgba(108,60,224,0.08);padding:16px;border-radius:10px;text-align:center"><strong>💬 Regular AI Chat</strong><br><small>You ask → AI answers<br>One-shot interactions<br>You do the work</small></div><div style="background:rgba(34,197,94,0.08);padding:16px;border-radius:10px;text-align:center"><strong>🤖 AI Agent</strong><br><small>You set a goal → Agent plans & executes<br>Multi-step actions<br>Agent does the work</small></div></div>' },
                { title: 'How Agents Work', content: '<p>AI agents follow a loop: Perceive → Think → Act → Observe, continuously until the goal is achieved.</p>', visual: '<div style="text-align:center;margin-top:20px"><div style="display:flex;align-items:center;gap:8px;justify-content:center;flex-wrap:wrap"><span style="background:#6c3ce0;color:#fff;padding:10px 16px;border-radius:8px">👁️ Perceive</span><span style="font-size:20px">→</span><span style="background:#3b82f6;color:#fff;padding:10px 16px;border-radius:8px">🧠 Think</span><span style="font-size:20px">→</span><span style="background:#22c55e;color:#fff;padding:10px 16px;border-radius:8px">⚡ Act</span><span style="font-size:20px">→</span><span style="background:#f59e0b;color:#fff;padding:10px 16px;border-radius:8px">👀 Observe</span><span style="font-size:20px">→</span><span style="color:#888">🔄</span></div></div>' },
                { title: 'Real-World AI Agents', content: '<p>AI agents are already working in many domains:</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px"><div style="background:rgba(108,60,224,0.08);padding:12px;border-radius:8px"><strong>🛒 Shopping Agents</strong><br><small>Find deals, compare prices, make purchases</small></div><div style="background:rgba(59,130,246,0.08);padding:12px;border-radius:8px"><strong>📧 Email Agents</strong><br><small>Draft, categorize, and respond to emails</small></div><div style="background:rgba(34,197,94,0.08);padding:12px;border-radius:8px"><strong>💻 Coding Agents</strong><br><small>Write, test, and deploy code</small></div><div style="background:rgba(245,158,11,0.08);padding:12px;border-radius:8px"><strong>🔬 Research Agents</strong><br><small>Search, analyze, and summarize papers</small></div></div>' },
                { title: 'Agent vs Assistant', content: '<p>Understanding the key differences helps you choose the right approach:</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;padding:16px;border-radius:12px"><table style="width:100%;font-size:12px;border-collapse:collapse"><tr style="border-bottom:1px solid rgba(108,60,224,0.2)"><th style="text-align:left;padding:8px">Feature</th><th style="padding:8px">Assistant</th><th style="padding:8px">Agent</th></tr><tr style="border-bottom:1px solid rgba(108,60,224,0.1)"><td style="padding:8px">Autonomy</td><td style="text-align:center;padding:8px">Low</td><td style="text-align:center;padding:8px">High</td></tr><tr style="border-bottom:1px solid rgba(108,60,224,0.1)"><td style="padding:8px">Multi-step</td><td style="text-align:center;padding:8px">❌</td><td style="text-align:center;padding:8px">✅</td></tr><tr style="border-bottom:1px solid rgba(108,60,224,0.1)"><td style="padding:8px">Uses tools</td><td style="text-align:center;padding:8px">Limited</td><td style="text-align:center;padding:8px">Yes</td></tr><tr><td style="padding:8px">Self-corrects</td><td style="text-align:center;padding:8px">❌</td><td style="text-align:center;padding:8px">✅</td></tr></table></div></div>' }
              ],
              objectives: ['Understand what AI agents are and how they differ from chatbots', 'Learn the Perceive-Think-Act-Observe loop', 'Identify real-world AI agent applications'],
              notes: 'AI agents represent the next evolution of AI. While chatbots respond to individual queries, agents can plan and execute multi-step tasks autonomously.\n\nKey insight: Agents are most powerful when they have access to tools — search engines, code execution, file systems, APIs. The more tools, the more capable.',
              resources: [{ title: 'Introduction to AI Agents', url: '#', type: 'guide' }, { title: 'The Rise of AI Agents', url: '#', type: 'article' }, { title: 'Agent Frameworks Overview', url: '#', type: 'video' }],
              exercise: { task: 'Design a simple AI agent on paper. Define: 1) Its goal, 2) What tools it needs, 3) The steps it would take to accomplish a task, 4) How it handles errors.', starterPrompt: '', hint: 'Example: "Email management agent. Goal: process inbox daily. Tools: email access, calendar, contacts. Steps: 1) Read new emails, 2) Categorize by urgency, 3) Draft responses for routine ones, 4) Flag important ones. Error handling: If unsure about urgency, ask the user."' }
            },
            {
              id: 'w4-m1-l2', title: 'Lesson 2: Types of AI Agents',
              slides: [
                { title: 'The Agent Spectrum', content: '<p>AI agents range from simple rule-followers to complex autonomous systems. Understanding the types helps you pick the right one for each task.</p>', visual: '<div style="margin-top:16px"><div style="background:linear-gradient(90deg,#22c55e,#3b82f6,#6c3ce0,#ef4444);height:8px;border-radius:4px;margin-bottom:16px"></div><div style="display:flex;justify-content:space-between;font-size:11px"><div style="text-align:center;flex:1"><strong>Simple</strong><br>Rule-based</div><div style="text-align:center;flex:1"><strong>Reactive</strong><br>Responds to input</div><div style="text-align:center;flex:1"><strong>Planning</strong><br>Makes plans</div><div style="text-align:center;flex:1"><strong>Autonomous</strong><br>Self-directed</div></div></div>' },
                { title: 'Agent Types Explained', content: '<p>Each type serves different use cases:</p>', visual: '<div style="margin-top:16px"><div style="background:rgba(34,197,94,0.08);border-left:4px solid #22c55e;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>🔧 Tool-Using Agents:</strong> Call APIs, search web, run code (e.g., GitHub Copilot)</div><div style="background:rgba(59,130,246,0.08);border-left:4px solid #3b82f6;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>📋 Planning Agents:</strong> Break tasks into steps, execute sequentially (e.g., AutoGPT)</div><div style="background:rgba(108,60,224,0.08);border-left:4px solid #6c3ce0;padding:14px;border-radius:0 10px 10px 0"><strong>🤝 Conversational Agents:</strong> Maintain context, handle multi-turn dialogues (e.g., Customer support bots)</div></div>' },
                { title: 'Choosing the Right Agent Type', content: '<p>Match agent type to task complexity:</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px;font-size:12px"><div style="background:rgba(34,197,94,0.08);padding:12px;border-radius:8px"><strong>Simple tasks</strong><br>→ Tool-using agent<br><small>"Search and summarize"</small></div><div style="background:rgba(59,130,246,0.08);padding:12px;border-radius:8px"><strong>Complex tasks</strong><br>→ Planning agent<br><small>"Research, write, publish"</small></div><div style="background:rgba(108,60,224,0.08);padding:12px;border-radius:8px"><strong>User interactions</strong><br>→ Conversational agent<br><small>"Handle customer inquiries"</small></div><div style="background:rgba(245,158,11,0.08);padding:12px;border-radius:8px"><strong>Creative tasks</strong><br>→ Multi-agent system<br><small>"Writer + Editor + Publisher"</small></div></div>' }
              ],
              objectives: ['Identify different types of AI agents', 'Match agent types to use cases', 'Understand the agent capability spectrum'],
              notes: 'Most practical AI agents today are tool-using agents — they extend AI chat with the ability to take actions like searching, coding, or creating files.\n\nPlanning agents are more powerful but also riskier. They need careful guardrails to prevent unintended actions.',
              resources: [{ title: 'AI Agent Types Comparison', url: '#', type: 'article' }, { title: 'Agent Design Patterns', url: '#', type: 'guide' }],
              exercise: { task: 'For your profession or field of study, identify 3 tasks that could be handled by different types of agents. Specify which agent type you\'d use and why.', starterPrompt: '', hint: 'Think about: a simple automation (tool-using), a complex workflow (planning), and a user-facing interaction (conversational). Explain the tools each agent would need.' }
            },
            {
              id: 'w4-m1-l3', title: 'Lesson 3: AI Agent Tools & Frameworks',
              slides: [
                { title: 'Agent Tools & Platforms', content: '<p>Several platforms make it easy to use or build AI agents — from no-code to developer-focused.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px"><div style="background:rgba(108,60,224,0.08);padding:14px;border-radius:10px"><strong>🎯 No-Code Agent Tools</strong><ul style="padding-left:16px;margin-top:8px;font-size:12px"><li>Custom GPTs (OpenAI)</li><li>Zapier AI Actions</li><li>Microsoft Copilot Studio</li></ul></div><div style="background:rgba(59,130,246,0.08);padding:14px;border-radius:10px"><strong>💻 Developer Frameworks</strong><ul style="padding-left:16px;margin-top:8px;font-size:12px"><li>LangChain / LangGraph</li><li>CrewAI</li><li>AutoGen (Microsoft)</li></ul></div></div>' },
                { title: 'Building a Custom GPT', content: '<p>The easiest way to create an agent: Custom GPTs in ChatGPT.</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="margin-bottom:8px">1️⃣ Go to ChatGPT → Explore GPTs → Create</div><div style="margin-bottom:8px">2️⃣ Define its purpose and instructions</div><div style="margin-bottom:8px">3️⃣ Upload knowledge files (PDFs, docs)</div><div style="margin-bottom:8px">4️⃣ Enable capabilities (web, code, images)</div><div>5️⃣ Test and share!</div></div></div>' },
                { title: 'MCP: The Future of Agent Tools', content: '<p>Model Context Protocol (MCP) standardizes how AI agents connect to external tools and data sources.</p>', visual: '<div style="text-align:center;margin-top:20px"><div style="background:#0f1729;color:#fff;padding:20px;border-radius:12px"><div style="margin-bottom:12px"><strong>Model Context Protocol (MCP)</strong></div><div style="display:flex;align-items:center;gap:8px;justify-content:center;flex-wrap:wrap;font-size:12px"><span style="background:#6c3ce0;padding:8px 12px;border-radius:6px">AI Model</span><span>↔️</span><span style="background:#3b82f6;padding:8px 12px;border-radius:6px">MCP Server</span><span>↔️</span><span style="background:#22c55e;padding:8px 12px;border-radius:6px">Tools & Data</span></div><p style="margin-top:12px;font-size:12px;opacity:0.8">One standard protocol for all AI-to-tool connections</p></div></div>' }
              ],
              objectives: ['Explore AI agent platforms and frameworks', 'Build a simple Custom GPT agent', 'Understand MCP and the future of agent tools'],
              notes: 'Custom GPTs are the fastest way to create a useful agent. You can have one running in under 30 minutes.\n\nMCP (Model Context Protocol) is becoming the standard for connecting AI to external tools. Think of it like USB for AI — one connector that works with everything.',
              resources: [{ title: 'Custom GPTs Guide', url: '#', type: 'guide' }, { title: 'MCP Introduction', url: '#', type: 'article' }, { title: 'LangChain Tutorial', url: '#', type: 'video' }],
              exercise: { task: 'Design a Custom GPT agent for your work or studies. Define: its name, purpose, instructions, knowledge files it needs, and 3 example interactions.', starterPrompt: '', hint: 'Think of a task you do repeatedly that requires specific knowledge. The agent should have: a clear role, custom instructions, relevant documents uploaded, and example prompts users would send.' }
            }
          ]
        },
        {
          id: 'w4-m2',
          title: 'Module 2: Building Simple Agents',
          lessons: [
            {
              id: 'w4-m2-l1', title: 'Lesson 1: Designing Agent Workflows',
              slides: [
                { title: 'Agent Workflow Design', content: '<p>Before building an agent, design its workflow on paper. Define the inputs, decision points, actions, and outputs.</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;padding:16px;border-radius:12px"><strong>Agent Workflow Template:</strong><div style="margin-top:10px"><div style="margin-bottom:8px">📥 <strong>Input:</strong> What triggers the agent?</div><div style="margin-bottom:8px">🧠 <strong>Decision:</strong> What does the agent need to figure out?</div><div style="margin-bottom:8px">⚡ <strong>Actions:</strong> What tools/steps does it use?</div><div style="margin-bottom:8px">✅ <strong>Output:</strong> What does it produce?</div><div>🔄 <strong>Loop:</strong> When does it repeat or stop?</div></div></div></div>' },
                { title: 'Example: Research Agent', content: '<p>Let\'s design a research agent step by step:</p>', visual: '<div style="margin-top:16px"><div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;font-size:13px"><strong>📚 Research Agent Workflow:</strong><br><br>📥 Input: Research topic + specific questions<br>🔍 Step 1: Search for relevant sources<br>📖 Step 2: Read and summarize each source<br>🔗 Step 3: Cross-reference findings<br>📝 Step 4: Compile into structured report<br>✅ Output: Research report with citations<br>🔄 Loop: If gaps found, search for more sources</div></div>' }
              ],
              objectives: ['Design agent workflows systematically', 'Define inputs, actions, and outputs clearly', 'Plan for error handling and edge cases'],
              notes: 'Good agent design starts with clear workflow mapping. Think about: What triggers it? What decisions must it make? What tools does it need? When does it stop?\n\nAlways include error handling: what should the agent do when something unexpected happens?',
              resources: [{ title: 'Agent Design Patterns', url: '#', type: 'guide' }, { title: 'Workflow Mapping Templates', url: '#', type: 'tool' }],
              exercise: { task: 'Design a complete agent workflow for automating one of your regular tasks. Include: trigger, inputs, decision logic, actions, tools needed, output, and error handling.', starterPrompt: '', hint: 'Pick a task with clear steps. Map it like a flowchart: "When [trigger], the agent should [step 1] → [decision point] → if yes: [step 2a], if no: [step 2b] → [output]."' }
            },
            {
              id: 'w4-m2-l2', title: 'Lesson 2: Prompt Chains as Agents',
              slides: [
                { title: 'Prompt Chains = Simple Agents', content: '<p>You can build agent-like behavior using prompt chains — where each prompt\'s output feeds into the next prompt\'s input.</p>', visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-size:12px"><span style="background:#6c3ce0;color:#fff;padding:8px 12px;border-radius:6px">Prompt 1<br><small>Analyze</small></span><span>→</span><span style="background:#3b82f6;color:#fff;padding:8px 12px;border-radius:6px">Output 1<br><small>= Input 2</small></span><span>→</span><span style="background:#22c55e;color:#fff;padding:8px 12px;border-radius:6px">Prompt 2<br><small>Plan</small></span><span>→</span><span style="background:#f59e0b;color:#fff;padding:8px 12px;border-radius:6px">Output 2<br><small>= Input 3</small></span><span>→</span><span style="background:#ef4444;color:#fff;padding:8px 12px;border-radius:6px">Prompt 3<br><small>Execute</small></span></div></div>' },
                { title: 'Building a Content Agent Chain', content: '<p>Example: A 4-step content creation agent using prompt chaining:</p>', visual: '<div style="margin-top:16px;font-size:12px"><div style="background:#f5f3ff;padding:12px;border-radius:8px;margin-bottom:6px"><strong>Step 1 — Research:</strong> "Research the top trends in [topic]. Provide 5 key insights."</div><div style="background:#eff6ff;padding:12px;border-radius:8px;margin-bottom:6px"><strong>Step 2 — Plan:</strong> "Based on these insights, create a content outline with 5 sections."</div><div style="background:#f0fdf4;padding:12px;border-radius:8px;margin-bottom:6px"><strong>Step 3 — Write:</strong> "Using this outline, write a 500-word blog post."</div><div style="background:#fef3c7;padding:12px;border-radius:8px"><strong>Step 4 — Promote:</strong> "Create 3 social media posts promoting this article."</div></div>' }
              ],
              objectives: ['Build agent-like systems using prompt chains', 'Design multi-step automated workflows', 'Connect prompt outputs to inputs effectively'],
              notes: 'Prompt chaining is the simplest form of AI agent building. No code required — just careful planning of how outputs feed into inputs.\n\nKey technique: At each step, include instructions for formatting the output so it\'s easy to use as input for the next step.',
              resources: [{ title: 'Prompt Chaining Tutorial', url: '#', type: 'guide' }, { title: 'Chain-of-Thought Prompting', url: '#', type: 'article' }],
              exercise: { task: 'Build a 4-step prompt chain for a task of your choice. Write each prompt so the output of step N naturally feeds into step N+1. Test the full chain.', starterPrompt: 'Step 1: [Research/Analyze]\n\nStep 2: [Plan/Organize]\n\nStep 3: [Create/Execute]\n\nStep 4: [Review/Polish]', hint: 'Make each step focused on ONE action. End each prompt with: "Format your output as [format] so it can be used in the next step." This ensures clean handoffs between steps.' }
            },
            {
              id: 'w4-m2-l3', title: 'Lesson 3: Testing & Debugging Agents',
              slides: [
                { title: 'Testing Your Agents', content: '<p>Like any software, agents need testing. The key difference: agent behavior can vary, so you need to test for reliability, not just correctness.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:16px;text-align:center;font-size:12px"><div style="background:rgba(34,197,94,0.1);padding:14px;border-radius:10px"><div style="font-size:24px">🎯</div><strong>Accuracy</strong><br>Does it do the right thing?</div><div style="background:rgba(59,130,246,0.1);padding:14px;border-radius:10px"><div style="font-size:24px">🔄</div><strong>Consistency</strong><br>Same input → similar output?</div><div style="background:rgba(245,158,11,0.1);padding:14px;border-radius:10px"><div style="font-size:24px">🛡️</div><strong>Safety</strong><br>Handles edge cases?</div></div>' },
                { title: 'Agent Testing Checklist', content: '<p>Run through this checklist for every agent you build:</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><div style="margin-bottom:6px">☐ Test with normal inputs — does it work?</div><div style="margin-bottom:6px">☐ Test with edge cases — empty input, very long input</div><div style="margin-bottom:6px">☐ Test with invalid inputs — wrong format, missing data</div><div style="margin-bottom:6px">☐ Run it 5 times — are results consistent?</div><div style="margin-bottom:6px">☐ Check for hallucinations — are facts accurate?</div><div>☐ Verify safety — can it do anything harmful?</div></div>' }
              ],
              objectives: ['Test AI agents systematically', 'Debug common agent failure modes', 'Ensure agent reliability and safety'],
              notes: 'Agent testing is different from traditional software testing because AI outputs are non-deterministic. Run the same test multiple times to check consistency.\n\nCommon failure modes: hallucination, infinite loops, wrong tool selection, and ignoring instructions.',
              resources: [{ title: 'Agent Testing Framework', url: '#', type: 'guide' }, { title: 'Debugging AI Agents', url: '#', type: 'article' }],
              exercise: { task: 'Create a test plan for an AI agent. Define 5 test cases: 2 normal, 2 edge cases, and 1 error case. For each, specify the input, expected behavior, and pass/fail criteria.', starterPrompt: '', hint: 'Think about: What\'s the happy path? What happens with empty input? What about very long or unusual input? What if the agent\'s tools fail? What\'s the worst case scenario?' }
            }
          ]
        },
        {
          id: 'w4-m3',
          title: 'Module 3: Multi-Agent Systems',
          lessons: [
            {
              id: 'w4-m3-l1', title: 'Lesson 1: Agent Collaboration Patterns',
              slides: [
                { title: 'Multi-Agent Systems', content: '<p>Multiple AI agents working together can solve problems that are too complex for a single agent. Each agent specializes in one role.</p>', visual: '<div style="text-align:center;margin-top:20px"><div style="display:flex;align-items:center;gap:10px;justify-content:center;flex-wrap:wrap"><div style="background:#6c3ce0;color:#fff;padding:14px;border-radius:10px;text-align:center"><div style="font-size:20px">🔍</div><strong>Researcher</strong></div><div style="background:#3b82f6;color:#fff;padding:14px;border-radius:10px;text-align:center"><div style="font-size:20px">✍️</div><strong>Writer</strong></div><div style="background:#22c55e;color:#fff;padding:14px;border-radius:10px;text-align:center"><div style="font-size:20px">✏️</div><strong>Editor</strong></div><div style="background:#f59e0b;color:#fff;padding:14px;border-radius:10px;text-align:center"><div style="font-size:20px">📊</div><strong>Analyst</strong></div></div><p style="margin-top:12px;font-size:13px;opacity:0.8">Each agent has a specialty → Together they produce better results</p></div>' },
                { title: 'Collaboration Patterns', content: '<p>Three common ways agents work together:</p>', visual: '<div style="margin-top:16px"><div style="background:rgba(108,60,224,0.08);border-left:4px solid #6c3ce0;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>🔗 Sequential:</strong> Agent A → Agent B → Agent C (pipeline)</div><div style="background:rgba(59,130,246,0.08);border-left:4px solid #3b82f6;padding:14px;border-radius:0 10px 10px 0;margin-bottom:10px"><strong>⚡ Parallel:</strong> Agents A, B, C work simultaneously, results merged</div><div style="background:rgba(34,197,94,0.08);border-left:4px solid #22c55e;padding:14px;border-radius:0 10px 10px 0"><strong>💬 Debate:</strong> Agents discuss and critique each other\'s work</div></div>' }
              ],
              objectives: ['Understand multi-agent system concepts', 'Learn the 3 agent collaboration patterns', 'Design agent teams for complex tasks'],
              notes: 'Multi-agent systems shine when a task has clearly separable roles. The key is defining each agent\'s responsibility and how they communicate.\n\nThe "debate" pattern is especially powerful: have one agent create and another critique. This produces higher quality output than a single agent.',
              resources: [{ title: 'Multi-Agent Systems Guide', url: '#', type: 'guide' }, { title: 'CrewAI Framework', url: '#', type: 'tool' }],
              exercise: { task: 'Design a 3-agent system for content creation: Researcher, Writer, and Editor. Define each agent\'s role, inputs/outputs, and how they communicate.', starterPrompt: '', hint: 'Define: Agent 1 (Researcher) finds information → passes to Agent 2 (Writer) who creates content → passes to Agent 3 (Editor) who reviews and improves. Specify what each agent receives and produces.' }
            },
            {
              id: 'w4-m3-l2', title: 'Lesson 2: Simulating Multi-Agent Debates',
              slides: [
                { title: 'The AI Debate Technique', content: '<p>One of the most powerful techniques: have AI debate itself from different perspectives to produce more balanced, thorough results.</p>', visual: '<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:12px;margin-top:16px;align-items:center"><div style="background:rgba(59,130,246,0.1);padding:16px;border-radius:10px;text-align:center"><div style="font-size:28px">🔵</div><strong>Pro Agent</strong><br><small>Argues in favor</small></div><div style="font-size:28px">⚔️</div><div style="background:rgba(239,68,68,0.1);padding:16px;border-radius:10px;text-align:center"><div style="font-size:28px">🔴</div><strong>Con Agent</strong><br><small>Argues against</small></div></div>' },
                { title: 'Debate Prompt Template', content: '<p>Simulate a multi-agent debate with a single prompt:</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Simulate a debate about [topic] between:<br><br>🔵 Agent A (Pro): Argues that [position A]<br>🔴 Agent B (Con): Argues that [position B]<br>🟢 Moderator: Summarizes and gives final verdict<br><br>Each agent gets 2 rounds of arguments. End with the moderator\'s balanced conclusion."</code></div>' }
              ],
              objectives: ['Use the AI debate technique for better analysis', 'Simulate multiple perspectives on any topic', 'Make more informed decisions through AI debates'],
              notes: 'The debate technique is especially useful for making big decisions. By forcing AI to argue both sides, you get a more complete picture.\n\nPro tip: Add a "moderator" role that synthesizes both arguments into a balanced recommendation.',
              resources: [{ title: 'AI Debate Methodology', url: '#', type: 'article' }, { title: 'Decision-Making with AI', url: '#', type: 'guide' }],
              exercise: { task: 'Run an AI debate about a decision you\'re facing. Define two opposing positions and a moderator. Ask for 2 rounds of arguments and a final verdict.', starterPrompt: '', hint: 'Pick a real decision: "Should I learn Python or JavaScript first?" Have Agent A argue for Python, Agent B for JavaScript, and a Moderator weigh in based on your specific goals.' }
            },
            {
              id: 'w4-m3-l3', title: 'Lesson 3: Agent Orchestration',
              slides: [
                { title: 'Orchestrating AI Agents', content: '<p>Agent orchestration is about coordinating multiple agents to work as a team. Think of yourself as the conductor of an AI orchestra.</p>', visual: '<div style="text-align:center;margin-top:20px"><div style="background:linear-gradient(135deg,#6c3ce0,#3b82f6);color:#fff;padding:24px;border-radius:14px"><div style="font-size:36px;margin-bottom:8px">🎼</div><strong>You = Conductor</strong><br><small>Define the goal, assign roles, coordinate the team</small><div style="display:flex;gap:8px;justify-content:center;margin-top:12px;flex-wrap:wrap;font-size:12px"><span style="background:rgba(255,255,255,0.2);padding:6px 12px;border-radius:20px">🔍 Research</span><span style="background:rgba(255,255,255,0.2);padding:6px 12px;border-radius:20px">✍️ Create</span><span style="background:rgba(255,255,255,0.2);padding:6px 12px;border-radius:20px">✏️ Review</span><span style="background:rgba(255,255,255,0.2);padding:6px 12px;border-radius:20px">📊 Analyze</span></div></div></div>' },
                { title: 'Orchestration Best Practices', content: '<p>Follow these principles for effective agent orchestration:</p>', visual: '<div style="margin-top:16px"><div style="background:#f5f3ff;padding:16px;border-radius:12px"><div style="margin-bottom:8px">1️⃣ <strong>Clear roles</strong> — Each agent has ONE specialty</div><div style="margin-bottom:8px">2️⃣ <strong>Defined handoffs</strong> — Specify what passes between agents</div><div style="margin-bottom:8px">3️⃣ <strong>Quality gates</strong> — Review output before passing to next agent</div><div style="margin-bottom:8px">4️⃣ <strong>Error handling</strong> — Plan for when an agent fails</div><div>5️⃣ <strong>Human oversight</strong> — You approve key decisions</div></div></div>' }
              ],
              objectives: ['Orchestrate multiple AI agents effectively', 'Design clear agent handoffs and quality gates', 'Maintain human oversight in agent systems'],
              notes: 'Orchestration is where the real power of multi-agent systems comes from. The key is clear communication between agents and human oversight at critical decision points.\n\nRemember: you\'re the conductor. AI agents are your musicians. Together, you create something neither could alone.',
              resources: [{ title: 'Agent Orchestration Patterns', url: '#', type: 'guide' }, { title: 'Human-in-the-Loop Design', url: '#', type: 'article' }],
              exercise: { task: 'Design and run a 3-agent orchestration for creating a mini research report. Agent 1: Researcher (finds info), Agent 2: Writer (creates report), Agent 3: Critic (reviews and improves).', starterPrompt: '', hint: 'Run three sequential prompts, each with a different role. Pass the output of each to the next. Agent 3 should specifically look for gaps, inaccuracies, and areas for improvement.' }
            }
          ]
        },
        {
          id: 'w4-m4',
          title: 'Module 4: Future of Work with AI',
          lessons: [
            {
              id: 'w4-m4-l1', title: 'Lesson 1: AI-Ready Career Skills',
              slides: [
                { title: 'Skills That Matter in the AI Era', content: '<p>Some skills become MORE valuable with AI, not less. Focus on developing these human superpowers.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);padding:16px;border-radius:10px"><strong style="color:#16a34a">📈 Rising in Value</strong><ul style="margin-top:8px;padding-left:18px;font-size:12px"><li>Critical thinking</li><li>Creative problem-solving</li><li>AI prompt engineering</li><li>Emotional intelligence</li><li>Strategic planning</li></ul></div><div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);padding:16px;border-radius:10px"><strong style="color:#d97706">🔄 Changing</strong><ul style="margin-top:8px;padding-left:18px;font-size:12px"><li>Data entry → Data analysis</li><li>Writing → Editing & directing</li><li>Research → Insight synthesis</li><li>Coding → System design</li></ul></div></div>' },
                { title: 'Building Your AI Portfolio', content: '<p>Document your AI skills and projects to stand out in the job market.</p>', visual: '<div style="background:#f5f3ff;padding:16px;border-radius:12px;margin-top:16px"><strong>Your AI Portfolio Should Include:</strong><div style="margin-top:10px"><div style="margin-bottom:6px">🏆 AI projects you\'ve completed</div><div style="margin-bottom:6px">📝 Prompt libraries you\'ve built</div><div style="margin-bottom:6px">🤖 Agents or automations you\'ve created</div><div style="margin-bottom:6px">📊 Measurable results (time saved, output quality)</div><div>💡 Creative AI use cases you\'ve discovered</div></div></div>' }
              ],
              objectives: ['Identify high-value skills in the AI era', 'Build an AI skills portfolio', 'Position yourself for AI-augmented careers'],
              notes: 'The most valuable professionals in the AI era will be those who can effectively combine human skills with AI capabilities.\n\nStart building your AI portfolio now. Document every project, every prompt template, every automation. This becomes your competitive advantage.',
              resources: [{ title: 'AI-Ready Career Guide', url: '#', type: 'guide' }, { title: 'Future of Work Report', url: '#', type: 'article' }],
              exercise: { task: 'Create your personal AI skills portfolio outline. Use AI to help you identify your top AI-ready skills and plan how to develop them further.', starterPrompt: '', hint: 'List your current skills, then ask AI: "Which of these skills are most valuable in an AI-augmented workplace? How can I develop each one further? What new skills should I add?"' }
            },
            {
              id: 'w4-m4-l2', title: 'Lesson 2: AI in Your Industry',
              slides: [
                { title: 'AI Across Industries', content: '<p>Every industry is being transformed by AI. Understanding how AI impacts YOUR field gives you a competitive edge.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px;font-size:12px"><div style="background:rgba(108,60,224,0.08);padding:12px;border-radius:8px"><strong>🏥 Healthcare</strong><br>Diagnostics, drug discovery, patient care</div><div style="background:rgba(59,130,246,0.08);padding:12px;border-radius:8px"><strong>📚 Education</strong><br>Personalized learning, tutoring, grading</div><div style="background:rgba(34,197,94,0.08);padding:12px;border-radius:8px"><strong>💰 Finance</strong><br>Fraud detection, trading, risk analysis</div><div style="background:rgba(245,158,11,0.08);padding:12px;border-radius:8px"><strong>🎨 Creative</strong><br>Content creation, design, music</div><div style="background:rgba(239,68,68,0.08);padding:12px;border-radius:8px"><strong>⚖️ Legal</strong><br>Document review, research, drafting</div><div style="background:rgba(108,60,224,0.08);padding:12px;border-radius:8px"><strong>🛍️ Retail</strong><br>Personalization, inventory, support</div></div>' },
                { title: 'Industry AI Audit Prompt', content: '<p>Analyze AI\'s impact on your specific industry:</p>', visual: '<div style="background:#0f1729;color:#fff;padding:16px;border-radius:8px;margin-top:16px;font-size:13px"><code>"Analyze how AI is transforming [industry]. Include:<br>1. Top 5 AI use cases in [industry] today<br>2. Which roles are most affected<br>3. New roles being created<br>4. Skills that are becoming essential<br>5. Predictions for the next 3 years"</code></div>' }
              ],
              objectives: ['Analyze AI impact on your specific industry', 'Identify opportunities in your field', 'Stay ahead of industry AI trends'],
              notes: 'Every industry has AI opportunities — the question is whether you\'ll be the one creating them or the one adapting to them.\n\nPro tip: Follow AI leaders in your specific industry. They\'ll show you practical applications that generic AI news won\'t cover.',
              resources: [{ title: 'AI Industry Reports', url: '#', type: 'article' }, { title: 'AI Transformation Guide', url: '#', type: 'guide' }],
              exercise: { task: 'Write a detailed prompt asking AI to analyze your industry and create a personal AI adoption roadmap. Include your current role, skills, and career goals.', starterPrompt: '', hint: 'Be specific about your industry, role, and where you want to be in 2-3 years. Ask AI for a phased adoption plan: what to learn first, what tools to master, and what projects to build.' }
            },
            {
              id: 'w4-m4-l3', title: 'Lesson 3: Your AI Action Plan',
              slides: [
                { title: 'Building Your 90-Day AI Plan', content: '<p>Turn everything you\'ve learned into a concrete action plan. The next 90 days are where knowledge becomes transformation.</p>', visual: '<div style="margin-top:16px"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span style="background:#22c55e;color:#fff;padding:10px 16px;border-radius:8px">Month 1<br><small>Foundation</small></span><span style="font-size:20px">→</span><span style="background:#3b82f6;color:#fff;padding:10px 16px;border-radius:8px">Month 2<br><small>Integration</small></span><span style="font-size:20px">→</span><span style="background:#6c3ce0;color:#fff;padding:10px 16px;border-radius:8px">Month 3<br><small>Mastery</small></span></div></div>' },
                { title: '90-Day Milestones', content: '<p>Here\'s what your AI transformation looks like:</p>', visual: '<div style="margin-top:16px"><div style="background:rgba(34,197,94,0.08);padding:14px;border-radius:10px;margin-bottom:8px"><strong>Month 1 — Foundation:</strong><br><small>✅ Master prompt engineering ✅ Set up your AI toolkit ✅ Automate 3 recurring tasks</small></div><div style="background:rgba(59,130,246,0.08);padding:14px;border-radius:10px;margin-bottom:8px"><strong>Month 2 — Integration:</strong><br><small>✅ Build 2 AI workflows ✅ Create content with AI weekly ✅ Build your prompt library</small></div><div style="background:rgba(108,60,224,0.08);padding:14px;border-radius:10px"><strong>Month 3 — Mastery:</strong><br><small>✅ Build a custom AI agent ✅ Prototype a project with AI ✅ Teach someone else AI skills</small></div></div>' },
                { title: 'Course Complete! 🎓', content: '<p>Congratulations! You\'ve completed the AI Learning Journey. You now have the skills to work with AI effectively, build prototypes, create agents, and prepare for the AI-powered future.</p>', visual: '<div style="background:linear-gradient(135deg,#6c3ce0,#3b82f6,#22c55e);color:#fff;padding:28px;border-radius:14px;text-align:center;margin-top:16px"><div style="font-size:48px;margin-bottom:12px">🎓</div><strong style="font-size:20px">You Did It!</strong><br><br><div style="font-size:14px;opacity:0.9;max-width:400px;margin:0 auto">4 Weeks • 51 Lessons • Countless Skills<br><br>Prompt Engineering → Scaling with AI → Prototyping → AI Agents<br><br><strong>Now go build something amazing! 🚀</strong></div></div>' },
                { title: 'What\'s Next?', content: '<p>Your AI journey doesn\'t end here. Keep learning, keep building, keep sharing.</p>', visual: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px"><div style="background:rgba(108,60,224,0.08);padding:16px;border-radius:10px"><strong>🔄 Keep Learning</strong><br><small>AI evolves daily — stay curious and experiment</small></div><div style="background:rgba(59,130,246,0.08);padding:16px;border-radius:10px"><strong>🏗️ Keep Building</strong><br><small>Apply AI to real projects in your life</small></div><div style="background:rgba(34,197,94,0.08);padding:16px;border-radius:10px"><strong>🤝 Keep Sharing</strong><br><small>Teach others what you\'ve learned</small></div><div style="background:rgba(245,158,11,0.08);padding:16px;border-radius:10px"><strong>🌟 Stay Human</strong><br><small>AI amplifies you — your creativity is irreplaceable</small></div></div>' }
              ],
              objectives: ['Create a personal 90-day AI action plan', 'Set measurable milestones for AI adoption', 'Continue your AI learning journey beyond this course'],
              notes: 'This course gave you the foundation. The real learning happens when you apply these skills to YOUR work and life.\n\nCommit to using AI every single day for the next 90 days. It doesn\'t have to be complex — even asking AI to help you write an email counts. Consistency is what builds mastery.\n\nRemember: the goal isn\'t to replace yourself with AI — it\'s to become a superhuman version of yourself WITH AI.',
              resources: [{ title: '90-Day AI Transformation Plan', url: '#', type: 'guide' }, { title: 'AI Learning Resources Library', url: '#', type: 'tool' }, { title: 'AI Community & Events', url: '#', type: 'article' }],
              exercise: { task: 'Create your personal 90-day AI action plan. Use AI to help you define specific goals, weekly milestones, and accountability measures for each month.', starterPrompt: 'Help me create a 90-day AI mastery plan. Here\'s my background: ...', hint: 'Include your current role, AI skill level, top 3 goals for AI use, and time you can dedicate per day. Ask AI for specific weekly actions, not vague goals. Each week should have a deliverable.' }
            }
          ]
        }
      ]
    }
  ]
};
