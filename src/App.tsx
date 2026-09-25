import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNav from '@/components/TopNav';
import SideNav from '@/components/SideNav';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import GameDetailPage from '@/pages/GameDetailPage';
import CloudGamingPage from '@/pages/CloudGamingPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-nv-background text-nv-on-surface">
        <TopNav />
        <div className="flex pt-16">
          <SideNav />
          <main className="flex-1 p-6 lg:ml-64">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/game/:gameId" element={<GameDetailPage />} />
              <Route path="/cloud" element={<CloudGamingPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}