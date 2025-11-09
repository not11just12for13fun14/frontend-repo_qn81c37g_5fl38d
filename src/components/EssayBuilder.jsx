import { useState } from 'react';
import { Sparkles, Download, Clipboard } from 'lucide-react';

export default function EssayBuilder({ onAskAI }) {
  const [prompt, setPrompt] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    const p = prompt.trim();
    if (!p) return;
    setLoading(true);

    // Simple local generation stub
    setTimeout(() => {
      setContent(
        `Opening: ${p}\n\n` +
          'I learned that impact comes from consistent effort and empathy. This experience shaped my curiosity, teamwork, and resilience — the same qualities I hope to bring to campus.\n\n' +
          'Conclusion: Thank you for considering my application.'
      );
      setLoading(false);
    }, 700);
  };

  const copy = async () => {
    if (!content) return;
    await navigator.clipboard.writeText(content);
    alert('Copied to clipboard');
  };

  const download = () => {
    if (!content) return;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'essay-draft.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-tight">Essay Builder</h2>
          <button
            onClick={onAskAI}
            className="rounded-full bg-[#2563eb] px-3 py-1.5 text-xs font-medium shadow hover:brightness-110"
          >
            Ask AI in Chat
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your story, theme, or prompt…"
            className="md:col-span-1 h-40 w-full resize-none rounded-xl bg-white/10 p-3 text-sm ring-1 ring-white/10 placeholder:text-zinc-400"
          />

          <div className="md:col-span-2 flex flex-col">
            <div className="flex items-center gap-2">
              <button
                onClick={generate}
                disabled={loading}
                className="inline-flex items-center gap-1 rounded-xl bg-[#2563eb] px-3 py-2 text-sm font-medium text-white disabled:opacity-50"
              >
                <Sparkles size={16} />
                {loading ? 'Thinking…' : 'Draft with AI'}
              </button>
              <button onClick={copy} className="rounded-xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10">
                <Clipboard size={16} className="inline" /> Copy
              </button>
              <button onClick={download} className="rounded-xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10">
                <Download size={16} className="inline" /> Download
              </button>
            </div>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Your AI-assisted draft will appear here…"
              className="mt-3 h-72 w-full resize-none rounded-xl bg-black/30 p-3 text-sm ring-1 ring-white/10 placeholder:text-zinc-500"
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
        <h3 className="mb-2 text-sm font-semibold tracking-tight">Essay tips</h3>
        <ul className="list-disc space-y-2 pl-5 text-xs text-zinc-300">
          <li>Show, don’t tell — ground ideas in specific scenes.</li>
          <li>Reflect on growth and impact; avoid repeating your resume.</li>
          <li>Use active voice and vary sentence lengths.</li>
          <li>Ask a teacher or friend for feedback and clarity.</li>
        </ul>
      </div>
    </section>
  );
}
