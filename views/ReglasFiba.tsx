
import React, { useState, useMemo } from 'react';
import { FIBA_RULEBOOK, RuleChapter, Article } from '../data/fibaRules';

interface ReglasFibaProps {
  onBack: () => void;
}

const ReglasFiba: React.FC<ReglasFibaProps> = ({ onBack }) => {
  const [activeBook, setActiveBook] = useState<'REGLAMENTO' | 'OBRI' | 'MANUAL'>('REGLAMENTO');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredChapters = useMemo(() => {
    return FIBA_RULEBOOK.filter(chapter => chapter.book === activeBook).map(chapter => {
      const filteredArticles = chapter.articles.filter(article => {
        const query = searchQuery.toLowerCase();
        return (
          article.title.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query) ||
          article.keywords.some(k => k.toLowerCase().includes(query))
        );
      });
      return { ...chapter, articles: filteredArticles };
    }).filter(chapter => chapter.articles.length > 0);
  }, [activeBook, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] p-6 pt-10 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBack} className="w-12 h-12 flex items-center justify-center glass-panel border border-slate-800 rounded-full active:scale-90 transition-transform">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="text-right">
          <h2 className="text-blue-500 font-tech tracking-widest text-xs uppercase">Módulo de Referencia</h2>
          <h1 className="text-2xl font-black uppercase italic leading-none">Base de Reglas</h1>
        </div>
      </div>

      <div className="relative mb-6">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="BUSCAR ARTÍCULO O TEMA..."
          className="w-full glass-panel border border-blue-900/50 rounded-xl p-4 pl-12 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all font-tech"
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {(['REGLAMENTO', 'OBRI', 'MANUAL'] as const).map(book => (
          <button 
            key={book}
            onClick={() => setActiveBook(book)}
            className={`px-6 py-3 rounded-xl font-black text-xs tracking-widest uppercase transition-all whitespace-nowrap border ${activeBook === book ? 'bg-blue-600 border-blue-400 text-white glow-blue' : 'bg-slate-900/50 border-slate-800 text-slate-500'}`}
          >
            {book}
          </button>
        ))}
      </div>

      <div className="space-y-8 overflow-y-auto pr-1">
        {filteredChapters.length > 0 ? filteredChapters.map(chapter => (
          <div key={chapter.id} className="space-y-4">
            <h3 className="text-blue-400 font-tech font-bold text-sm tracking-[0.2em] border-l-2 border-blue-500 pl-3 uppercase">{chapter.title}</h3>
            <div className="grid gap-3">
              {chapter.articles.map(article => (
                <button 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="w-full glass-panel border border-slate-800 p-5 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all text-left"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-tech text-slate-500 tracking-widest uppercase">Art. {article.id.split('-').pop()}</span>
                    <span className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{article.title}</span>
                  </div>
                  <svg className="w-5 h-5 text-slate-700 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                </button>
              ))}
            </div>
          </div>
        )) : (
          <div className="flex flex-col items-center justify-center py-20 opacity-30">
            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <p className="font-tech tracking-widest text-center uppercase">Sin resultados en {activeBook}</p>
          </div>
        )}
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="w-full max-w-2xl bg-slate-900 border-t-2 border-blue-500 rounded-t-[2.5rem] p-8 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-500"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-tech text-blue-400 tracking-widest uppercase">Datos del Artículo</span>
                <h2 className="text-2xl font-black italic">{selectedArticle.title}</h2>
              </div>
              <button onClick={() => setSelectedArticle(null)} className="w-10 h-10 flex items-center justify-center glass-panel border border-slate-800 rounded-full">
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed whitespace-pre-wrap">
              {selectedArticle.content}
            </div>

            <button 
              onClick={() => setSelectedArticle(null)}
              className="w-full mt-10 py-5 bg-blue-600 text-white rounded-2xl font-black tracking-widest uppercase hover:bg-blue-500 transition-colors"
            >
              CERRAR ARTÍCULO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReglasFiba;
