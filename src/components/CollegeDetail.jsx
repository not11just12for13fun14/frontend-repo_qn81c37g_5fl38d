import { ExternalLink, MapPin, Star, X } from 'lucide-react';

export default function CollegeDetail({ college, onClose, onToggleFavorite, isFavorite }) {
  if (!college) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
        <div className="relative aspect-[16/7] w-full">
          <img src={college.image} alt={college.name} className="h-full w-full object-cover" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white backdrop-blur"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">{college.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-zinc-400">
                <MapPin size={16} /> {college.location}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onToggleFavorite}
                className={`rounded-full border px-3 py-1 text-sm ${
                  isFavorite
                    ? 'border-yellow-400/30 bg-yellow-400/10 text-yellow-300'
                    : 'border-white/10 bg-white/5 text-zinc-200'
                }`}
              >
                <Star size={16} className="mr-1 inline" fill={isFavorite ? 'currentColor' : 'none'} />
                {isFavorite ? 'Saved' : 'Save'}
              </button>
              <a
                href={college.website}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2563eb] px-3 py-1 text-sm font-medium text-white"
              >
                Visit Site <ExternalLink className="ml-1 inline" size={14} />
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-wide text-zinc-400">Acceptance Rate</p>
              <p className="mt-1 text-xl font-semibold">{college.acceptanceRate}%</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-wide text-zinc-400">Tuition</p>
              <p className="mt-1 text-xl font-semibold">${college.tuition.toLocaleString()}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-wide text-zinc-400">Focus Areas</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {college.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-zinc-300 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-zinc-300">{college.description}</p>
        </div>
      </div>
    </div>
  );
}
