import { useState, useEffect } from 'react';
import TopNav from '@/components/TopNav';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import GameDetailPage from '@/pages/GameDetailPage';
import CloudGamingPage from '@/pages/CloudGamingPage';
import type { Page } from '@/types/navigation';

function App() {
  const [page, setPage] = useState<Page>({ name: 'home' });

  const navigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync with URL hash for basic deep linking
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('game/')) {
      const gameId = hash.slice(5);
      setPage({ name: 'game', gameId });
    } else if (hash.startsWith('category/')) {
      const category = hash.slice(9);
      setPage({ name: 'category', category });
    } else if (hash === 'cloud') {
      setPage({ name: 'cloud' });
    }
  }, []);

  useEffect(() => {
    if (page.name === 'game') {
      window.location.hash = `game/${page.gameId}`;
    } else if (page.name === 'category') {
      window.location.hash = `category/${page.category}`;
    } else if (page.name === 'cloud') {
      window.location.hash = 'cloud';
    } else {
      window.location.hash = '';
    }
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col bg-nv-background text-nv-on-surface">
      <TopNav navigate={navigate} />

      <div className="flex flex-1 pt-16">
        <SideNav navigate={navigate} currentPage={page} />

        <main className="custom-scroll w-full flex-1 bg-nv-surface lg:ml-64">
          <div className="mx-auto max-w-[container-max] px-4 py-8 md:px-margin-desktop">
            {page.name === 'home' && <HomePage navigate={navigate} />}
            {page.name === 'category' && <CategoryPage category={page.category} navigate={navigate} />}
            {page.name === 'game' && <GameDetailPage gameId={page.gameId} navigate={navigate} />}
            {page.name === 'cloud' && <CloudGamingPage navigate={navigate} />}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
