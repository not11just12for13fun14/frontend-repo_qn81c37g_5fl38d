import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

const commonAppPrompts = [
  'Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.',
  'The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?',
  'Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?',
  'Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?',
  'Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.',
  'Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?',
  'Share an essay on any topic of your choice. It can be one you have already written, one that responds to a different prompt, or one of your own design.'
];

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  const hasMessages = messages.length > 0;

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = (text) => {
    const content = (text ?? input).trim();
    if (!content) return;

    const next = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    setLoading(true);

    // Stubbed AI response
    setTimeout(() => {
      setMessages([
        ...next,
        {
          role: 'assistant',
          content:
            "Thanks for sharing! I’ll analyze this and suggest structure, key themes, and areas to deepen your reflection. Want me to outline a 3-part draft?",
        },
      ]);
      setLoading(false);
    }, 900);
  };

  return (
    <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200">
        <div className="h-7 w-7 rounded-md bg-blue-600 text-white grid place-items-center text-sm font-medium">
          AI
        </div>
        <div>
          <p className="text-sm font-medium text-slate-900">Admissions Advisor</p>
          <p className="text-xs text-slate-500">Ask anything about colleges, majors, and essays</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {!hasMessages && (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-700">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Common App essay prompts</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Choose a prompt to start drafting or ask any question below.
            </p>

            <div className="mt-3">
              <select
                onChange={(e) => {
                  const v = e.target.value;
                  if (v) handleSend(v);
                }}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a prompt to begin…
                </option>
                {commonAppPrompts.map((p, i) => (
                  <option key={i} value={p} className="text-wrap">
                    Prompt {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {messages.map((m, idx) => (
          <div
            key={idx}
            className={
              m.role === 'user'
                ? 'ml-auto max-w-[85%] rounded-lg bg-blue-600 text-white px-3 py-2 text-sm'
                : 'mr-auto max-w-[85%] rounded-lg bg-slate-100 text-slate-800 px-3 py-2 text-sm'
            }
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="mr-auto max-w-[85%] rounded-lg bg-slate-100 text-slate-500 px-3 py-2 text-sm animate-pulse">
            Thinking…
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="p-3 border-t border-slate-200">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about admissions, scholarships, or paste your draft to refine…"
            rows={4}
            className="flex-1 resize-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
          />
          <button
            onClick={() => handleSend()}
            className="self-end inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 disabled:opacity-50"
            disabled={loading || !input.trim()}
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
