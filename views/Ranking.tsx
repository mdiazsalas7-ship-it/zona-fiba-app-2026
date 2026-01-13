
import React, { useMemo } from 'react';
import { RankingEntry } from '../types';

const Ranking: React.FC = () => {
  const ranking: RankingEntry[] = useMemo(() => {
    const raw = localStorage.getItem('zona_fiba_world_ranking') || '[]';
    return JSON.parse(raw);
  }, []);

  return (
    <div className="flex flex-col p-6 pt-10 gap-6 min-h-screen overflow-y-auto pb-24 scrollbar-hide bg-[#020617]">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-orange-500 font-tech tracking-widest text-xs uppercase">Hall of Fame</h2>
          <h1 className="text-3xl font-black uppercase italic leading-none">Ranking Mundial</h1>
        </div>
        <div className="w-12 h-12 bg-orange-600/10 border border-orange-500/30 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
        </div>
      </div>

      <div className="space-y-3">
        {ranking.length > 0 ? ranking.map((entry, idx) => (
          <div 
            key={entry.pseudonym + idx}
            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${idx === 0 ? 'bg-orange-500/10 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.15)]' : 'bg-slate-900/50 border-slate-800'}`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black italic text-sm ${idx === 0 ? 'bg-orange-500 text-black' : 'bg-slate-800 text-slate-500'}`}>
              {idx + 1}
            </div>
            
            <div className="relative">
              <img src={entry.photo} className="w-12 h-12 rounded-xl object-cover border border-slate-700" />
              {idx === 0 && <span className="absolute -top-1 -right-1 text-xs">👑</span>}
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-white text-sm uppercase tracking-tight truncate max-w-[120px]">{entry.pseudonym}</h4>
              <div className="flex items-center gap-2">
                <span className="text-[7px] font-tech text-orange-500 uppercase font-black tracking-widest">{entry.rank}</span>
                <span className="text-[7px] text-slate-600">|</span>
                <span className="text-[7px] font-tech text-blue-500 uppercase">Streak: {entry.streak}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-lg font-black italic text-white leading-none">{entry.score}</span>
              <p className="text-[8px] font-tech text-slate-500 uppercase font-bold">PTS</p>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 opacity-30 font-tech uppercase tracking-widest">
            Sin aspirantes registrados aún
          </div>
        )}
      </div>
      
      <div className="mt-4 p-5 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
         <p className="text-[9px] text-blue-400 font-tech uppercase tracking-widest leading-relaxed text-center">
           "La competencia forja a los mejores árbitros. Responde casos OBRI para escalar en el ranking mundial."
         </p>
      </div>
    </div>
  );
};

export default Ranking;
