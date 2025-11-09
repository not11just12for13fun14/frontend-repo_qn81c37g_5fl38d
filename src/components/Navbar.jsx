import { School, FileText, Sparkles } from 'lucide-react';

const tabs = [
  { key: 'chat', label: 'Advisor', icon: Sparkles },
  { key: 'colleges', label: 'Colleges', icon: School },
  { key: 'essay', label: 'Essays', icon: FileText },
];

export default function Navbar({ active, onChange }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgivebutter.com%2Fc%2Fundergraduation_com%2Fmembers%2Fagrimmithal&psig=AOvVaw2YuSdeXb2apeHWHldMvnF3&ust=1762759066867000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCKiR_rHD5JADFQAAAAAdAAAAABAU"
              alt="undergraduation.com logo"
              className="h-10 w-10 rounded-xl object-cover ring-1 ring-black/10 shadow-lg"
            />
            <span className="text-xl font-semibold tracking-tight text-zinc-900">undergraduation.com</span>
          </div>

          <nav className="flex items-center gap-2 rounded-full bg-white p-1 ring-1 ring-black/10 shadow-md">
            {tabs.map((t) => {
              const Icon = t.icon;
              const activeTab = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => onChange(t.key)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-[15px] transition ${
                    activeTab
                      ? 'bg-[#2563eb] text-white shadow'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  <Icon size={18} />
                  {t.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
