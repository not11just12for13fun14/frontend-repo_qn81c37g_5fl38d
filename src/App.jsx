import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Chatbot from './components/Chatbot.jsx';
import CollegeBrowser from './components/CollegeBrowser.jsx';
import EssayBuilder from './components/EssayBuilder.jsx';
import CollegeDetail from './components/CollegeDetail.jsx';

const BRAND_BLUE = '#2563eb';

const sampleColleges = [
  {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    acceptanceRate: 4,
    tuition: 57590,
    website: 'https://www.mit.edu/',
    tags: ['Engineering', 'Research', 'STEM'],
    description:
      'MIT is a private research university known for its strong emphasis on scientific and technological education and research.',
    image:
      'https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'stanford',
    name: 'Stanford University',
    location: 'Stanford, CA',
    acceptanceRate: 4,
    tuition: 58216,
    website: 'https://www.stanford.edu/',
    tags: ['Entrepreneurship', 'Research', 'CS'],
    description:
      'Stanford is a leading research university in the heart of Silicon Valley, known for innovation and entrepreneurship.',
    image:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'harvard',
    name: 'Harvard University',
    location: 'Cambridge, MA',
    acceptanceRate: 3,
    tuition: 54669,
    website: 'https://www.harvard.edu/',
    tags: ['Liberal Arts', 'Law', 'Business'],
    description:
      'Harvard is the oldest institution of higher education in the United States, renowned for excellence across disciplines.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'ucla',
    name: 'University of California, Los Angeles',
    location: 'Los Angeles, CA',
    acceptanceRate: 9,
    tuition: 13942,
    website: 'https://www.ucla.edu/',
    tags: ['Public', 'Arts', 'STEM'],
    description:
      'UCLA is a public research university known for its diverse programs, strong athletics, and vibrant campus life.',
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function App() {
  const [active, setActive] = useState('chat'); // 'chat' | 'colleges' | 'essay'
  const [favorites, setFavorites] = useState(() => new Set());
  const [selectedCollege, setSelectedCollege] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const favoriteList = useMemo(
    () => sampleColleges.filter((c) => favorites.has(c.id)),
    [favorites]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Soft brand glow background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      >
        <div
          className="absolute -top-24 -left-28 h-[40rem] w-[40rem] rounded-full blur-3xl"
          style={{ background: `${BRAND_BLUE}33` }}
        />
        <div
          className="absolute -bottom-20 -right-24 h-[35rem] w-[35rem] rounded-full blur-3xl"
          style={{ background: '#0ea5e933' }}
        />
      </div>

      <Navbar active={active} onChange={setActive} />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-28">
        {active === 'chat' && (
          <Chatbot onExploreColleges={() => setActive('colleges')} />
        )}

        {active === 'colleges' && (
          <CollegeBrowser
            colleges={sampleColleges}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpenDetail={setSelectedCollege}
            favoriteList={favoriteList}
          />
        )}

        {active === 'essay' && (
          <EssayBuilder onAskAI={() => setActive('chat')} />
        )}
      </main>

      <CollegeDetail
        college={selectedCollege}
        isFavorite={selectedCollege ? favorites.has(selectedCollege.id) : false}
        onToggleFavorite={() =>
          selectedCollege && toggleFavorite(selectedCollege.id)
        }
        onClose={() => setSelectedCollege(null)}
      />
    </div>
  );
}
