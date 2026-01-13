
import React from 'react';
import { AppView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: AppView;
  setView: (view: AppView) => void;
  hideNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, setView, hideNav }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-white">
      <main className="flex-1 flex flex-col pb-24">
        {children}
      </main>

      {!hideNav && (
        <nav className="fixed bottom-0 left-0 right-0 h-20 bg-slate-950/80 backdrop-blur-xl flex justify-around items-center px-10 z-50 rounded-t-3xl border-t border-white/5">
          <NavItem 
            active={currentView === 'HOME'} 
            onClick={() => setView('HOME')}
            icon={<HomeIcon />} 
            label="Inicio" 
          />
          
          <div className="relative -top-10">
            <button 
              onClick={() => setView('REGLAS_FIBA')}
              className={`w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/40 transition-transform active:scale-90 ${currentView === 'REGLAS_FIBA' ? 'ring-4 ring-blue-400' : ''}`}
            >
              <BookIcon />
            </button>
          </div>

          <NavItem 
            active={currentView === 'RANKING'} 
            onClick={() => setView('RANKING')}
            icon={<RankingIcon />} 
            label="Ranking" 
          />
        </nav>
      )}
    </div>
  );
};

const NavItem = ({ active, icon, label, onClick }: any) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1.5 transition-all ${active ? 'text-blue-500 scale-110' : 'text-slate-600'}`}>
    <div className="w-6 h-6">{icon}</div>
    <span className="text-[9px] font-tech font-bold uppercase tracking-wider">{label}</span>
  </button>
);

const HomeIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
);
const RankingIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/></svg>
);
const BookIcon = () => (
  <svg fill="currentColor" className="w-7 h-7 text-white" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
);

export default Layout;
