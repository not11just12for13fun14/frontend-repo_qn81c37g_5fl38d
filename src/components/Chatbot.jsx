import { useState } from 'react';
import { ArrowUp, Sparkles, Send } from 'lucide-react';

const starterSuggestions = [
  'Help me draft a college list for Computer Science',
  'What extracurriculars strengthen my profile for engineering?',
  'Explain the difference between Early Action and Early Decision',
  'Give me essay ideas based on my volunteering',
];

export default function Chatbot({ onExploreColleges }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm your admissions co-pilot. Ask about colleges, essays, financial aid, or building your application.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    // Simple local response stub for demo
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            'Great question! I can suggest colleges, estimate reach/target/safety based on your interests, and help with essay prompts. Use the Colleges tab to explore schools and the Essays tab to draft and refine writing with AI. ',
        },
      ]);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-tight">Admissions Advisor</h2>
          <button
            onClick={onExploreColleges}
            className="rounded-full bg-[#2563eb] px-3 py-1.5 text-xs font-medium shadow hover:brightness-110"
          >
            Explore Colleges
          </button>
        </div>

        <div className="h-[48vh] overflow-y-auto rounded-xl bg-black/30 p-4 ring-1 ring-white/10">
          {messages.map((m, i) => (
            <div key={i} className="mb-4">
              <div
                className={`max-w-prose rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === 'assistant'
                    ? 'bg-white/5 text-zinc-100'
                    : 'ml-auto bg-[#2563eb] text-white'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-xs text-zinc-400">Thinking…</div>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 rounded-xl bg-white/10 p-2 ring-1 ring-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask anything about applications…"
              className="w-full bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-zinc-400"
            />
          </div>
          <button
            onClick={send}
            className="inline-flex items-center gap-1 rounded-xl bg-[#2563eb] px-3 py-2 text-sm font-medium shadow hover:brightness-110"
          >
            <Send size={16} />
            Send
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
        <h3 className="mb-3 text-sm font-semibold tracking-tight">Try asking</h3>
        <div className="grid gap-2">
          {starterSuggestions.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-left text-xs text-zinc-200 hover:bg-white/10"
            >
              <Sparkles size={14} className="mr-1 inline" /> {s}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-cyan-500/10 p-4 text-xs text-zinc-300 ring-1 ring-white/10">
          Tip: Keep a running list of schools you like. You can view All or just Your List in the Colleges section.
        </div>
      </div>
    </section>
  );
}
