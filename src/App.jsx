import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chatbot from './components/Chatbot';
import Colleges from './components/Colleges';
import Essays from './components/Essays';

export default function App() {
  const [tab, setTab] = useState('advisor');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar activeTab={tab} onTabChange={setTab} />

      {/* Hero */}
      <div className="pt-16">
        <Hero />
      </div>

      <main className="max-w-6xl mx-auto px-4 pb-16 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {tab === 'advisor' && (
              <div className="h-[640px]">
                <Chatbot />
              </div>
            )}
            {tab === 'colleges' && <Colleges />}
            {tab === 'essays' && <Essays />}
          </div>

          <div className="hidden lg:block">
            {/* Right column intentionally empty per request (tips panel removed) */}
          </div>
        </div>
      </main>
    </div>
  );
}
