import { ExternalLink, MapPin, Star, X } from 'lucide-react';

export default function CollegeDetail({ college, onClose, onToggleFavorite, isFavorite }) {
  if (!college) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
        <div className="relative aspect-[16/7] w-full">
          <img src={college.image} alt={college.name} className="h-full w-full object-cover" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-3xl font-semibold text-zinc-900">{college.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-[15px] text-zinc-600">
                <MapPin size={18} /> {college.location}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onToggleFavorite}
                className={`rounded-full border px-4 py-2 text-[15px] ${
                  isFavorite
                    ? 'border-yellow-500/30 bg-yellow-500/10 text-yellow-600'
                    : 'border-black/10 bg-white text-zinc-700'
                }`}
              >
                <Star size={18} className="mr-1 inline" fill={isFavorite ? 'currentColor' : 'none'} />
                {isFavorite ? 'Saved' : 'Save'}
              </button>
              <a
                href={college.website}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2563eb] px-4 py-2 text-[15px] font-medium text-white"
              >
                Visit Site <ExternalLink className="ml-1 inline" size={16} />
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-zinc-50 p-5 ring-1 ring-black/10">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Acceptance Rate</p>
              <p className="mt-1 text-2xl font-semibold text-zinc-900">{college.acceptanceRate}%</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-5 ring-1 ring-black/10">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Tuition</p>
              <p className="mt-1 text-2xl font-semibold text-zinc-900">${college.tuition.toLocaleString()}</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-5 ring-1 ring-black/10">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Focus Areas</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {college.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white px-2 py-1 text-[11px] text-zinc-700 ring-1 ring-black/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-[16px] leading-relaxed text-zinc-700">{college.description}</p>
        </div>
      </div>
    </div>
  );
}
