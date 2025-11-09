import { Home, School, FileText, Sparkles } from 'lucide-react';

const tabs = [
  { key: 'chat', label: 'Advisor', icon: Sparkles },
  { key: 'colleges', label: 'Colleges', icon: School },
  { key: 'essay', label: 'Essays', icon: FileText },
];

export default function Navbar({ active, onChange }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-blue-400 ring-1 ring-white/10 shadow-lg" />
            <span className="text-lg font-semibold tracking-tight">BlueGlass Apply</span>
          </div>

          <nav className="flex items-center gap-2 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
            {tabs.map((t) => {
              const Icon = t.icon;
              const activeTab = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => onChange(t.key)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    activeTab
                      ? 'bg-[#2563eb] text-white shadow backdrop-blur'
                      : 'text-zinc-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={16} />
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
