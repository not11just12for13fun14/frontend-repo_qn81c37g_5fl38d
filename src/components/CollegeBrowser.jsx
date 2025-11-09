import { useState } from 'react';
import { Star, Search, ExternalLink } from 'lucide-react';

export default function CollegeBrowser({
  colleges,
  favorites,
  favoriteList,
  onToggleFavorite,
  onOpenDetail,
}) {
  const [view, setView] = useState('all'); // 'all' | 'mine'
  const [query, setQuery] = useState('');

  const filtered = (view === 'all' ? colleges : favoriteList).filter((c) => {
    const q = query.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.tags.join(' ').toLowerCase().includes(q)
    );
  });

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Discover Colleges</h2>
          <p className="text-sm text-zinc-400">Browse all or focus on your saved list.</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, city, or tag"
              className="w-64 rounded-full bg-white/10 pl-9 pr-3 py-2 text-sm ring-1 ring-white/10 placeholder:text-zinc-400 focus:outline-none"
            />
          </div>

          <div className="rounded-full bg-white/5 p-1 ring-1 ring-white/10">
            {[
              { key: 'all', label: 'All' },
              { key: 'mine', label: 'My List' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setView(t.key)}
                className={`rounded-full px-3 py-1 text-xs ${
                  view === t.key
                    ? 'bg-[#2563eb] text-white'
                    : 'text-zinc-300 hover:bg-white/10'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <article
            key={c.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl"
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold leading-tight">{c.name}</h3>
                  <p className="text-xs text-zinc-400">{c.location}</p>
                </div>
                <button
                  onClick={() => onToggleFavorite(c.id)}
                  className={`rounded-full p-2 transition ${
                    favorites.has(c.id)
                      ? 'text-yellow-400'
                      : 'text-zinc-400 hover:text-yellow-400'
                  }`}
                  aria-label="Save to list"
                >
                  <Star size={18} fill={favorites.has(c.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-zinc-300 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-zinc-400">
                  Acceptance: <span className="text-zinc-200">{c.acceptanceRate}%</span> · Tuition:{' '}
                  <span className="text-zinc-200">${c.tuition.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] text-zinc-300 hover:text-white"
                  >
                    Site <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => onOpenDetail(c)}
                    className="rounded-full bg-[#2563eb] px-3 py-1 text-[11px] font-medium text-white"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
