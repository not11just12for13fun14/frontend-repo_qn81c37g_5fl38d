import { useState, useMemo } from 'react';
import { Sparkles, Send } from 'lucide-react';

const starterSuggestions = [
  'Help me draft a college list for Computer Science',
  'What extracurriculars strengthen my profile for engineering?',
  'Explain Early Action vs Early Decision',
  'Give me essay ideas from my volunteering with seniors',
];

export default function Chatbot({ onExploreColleges }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm your admissions co‑pilot. Ask about colleges, essays, financial aid, or building your application.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const hasUserMessage = useMemo(
    () => messages.some((m) => m.role === 'user'),
    [messages]
  );

  const send = async (preset) => {
    const text = (preset ?? input).trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            'Great question! I can suggest colleges, estimate reach/target/safety based on your interests, and help with essay prompts. Use the Colleges tab to explore schools and the Essays tab to draft and refine writing with AI.',
        },
      ]);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="text-[17px]">
      <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Admissions Advisor</h2>
          <button
            onClick={onExploreColleges}
            className="rounded-full bg-[#2563eb] px-4 py-2 text-sm font-medium text-white shadow hover:brightness-110"
          >
            Explore Colleges
          </button>
        </div>

        <div className="h-[60vh] overflow-y-auto rounded-xl bg-zinc-50 p-4 ring-1 ring-black/5">
          {messages.map((m, i) => (
            <div key={i} className="mb-4">
              <div
                className={`max-w-prose rounded-2xl px-4 py-3 text-[16px] leading-relaxed ${
                  m.role === 'assistant'
                    ? 'bg-white text-zinc-800 ring-1 ring-black/10'
                    : 'ml-auto bg-[#2563eb] text-white'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && <div className="text-sm text-zinc-500">Thinking…</div>}

          {!hasUserMessage && !loading && (
            <div className="mt-2">
              <p className="mb-2 text-sm font-medium text-zinc-600">Suggested prompts</p>
              <div className="flex flex-wrap gap-2">
                {starterSuggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full bg-white px-3 py-1.5 text-[14px] text-zinc-700 ring-1 ring-black/10 hover:bg-zinc-50"
                  >
                    <Sparkles size={14} className="mr-1 inline text-[#2563eb]" /> {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 rounded-xl bg-white ring-1 ring-black/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask anything about applications…"
              className="w-full bg-transparent px-3 py-3 text-[16px] outline-none placeholder:text-zinc-400"
            />
          </div>
          <button
            onClick={() => send()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-4 py-3 text-[15px] font-medium text-white shadow hover:brightness-110"
          >
            <Send size={18} />
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
