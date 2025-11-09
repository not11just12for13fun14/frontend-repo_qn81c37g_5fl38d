import React from 'react';
import { FileText } from 'lucide-react';

export default function Essays() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200">
        <FileText className="h-5 w-5 text-blue-600" />
        <p className="text-sm font-medium text-slate-900">Essay Builder</p>
      </div>

      <div className="p-4 text-sm text-slate-600">
        Start with a Common App prompt in the Advisor tab, then bring your draft here to outline, polish, and track versions.
      </div>
    </div>
  );
}
