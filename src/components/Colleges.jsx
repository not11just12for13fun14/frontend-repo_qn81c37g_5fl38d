import React from 'react';
import { School } from 'lucide-react';

export default function Colleges() {
  const items = [
    {
      name: 'Northeastern University',
      location: 'Boston, MA',
      tag: 'Co-op Focused',
    },
    { name: 'University of Michigan', location: 'Ann Arbor, MI', tag: 'Public Flagship' },
    { name: 'UC San Diego', location: 'La Jolla, CA', tag: 'STEM Strong' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200">
        <School className="h-5 w-5 text-blue-600" />
        <p className="text-sm font-medium text-slate-900">Browse Colleges</p>
      </div>

      <ul className="divide-y divide-slate-200">
        {items.map((c) => (
          <li key={c.name} className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">{c.name}</p>
                <p className="text-xs text-slate-500">{c.location}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {c.tag}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
