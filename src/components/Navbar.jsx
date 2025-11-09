import React from 'react';

const tabs = [
  { key: 'advisor', label: 'Advisor' },
  { key: 'colleges', label: 'Colleges' },
  { key: 'essays', label: 'Essays' },
];

export default function Navbar({ activeTab, onTabChange }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-semibold">
              U
            </div>
            <span className="text-slate-900 font-semibold text-lg">Undergraduation.com</span>
          </div>

          <nav className="flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => onTabChange(t.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === t.key
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
