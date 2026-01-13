import React from 'react';
import { AppView, UserProfile } from '../types';
import { IMAGES } from '../constants';

interface HomeProps {
  user: UserProfile;
  setView: (view: AppView) => void;
}

const Home: React.FC<HomeProps> = ({ user, setView }) => {
  return (
    <div className="flex flex-col p-6 pt-12 gap-8 min-h-screen">
      {/* HEADER DE USUARIO */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl border-2 border-blue-500 overflow-hidden shadow-lg shadow-blue-500/20">
            <img src={user.photo} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-[10px] font-tech text-blue-500 uppercase tracking-widest leading-none">Status: En Línea</h2>
            <div className="flex items-center gap-2">
              <p className="text-sm font-black italic uppercase text-white leading-none mt-1">{user.pseudonym}</p>
              {user.isSubscribed && (
                <span className="bg-yellow-500 text-black text-[7px] font-black px-1.5 py-0.5 rounded uppercase mt-1">PRO</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[8px] text-green-500 font-tech uppercase tracking-widest font-bold">World Server</span>
        </div>
      </div>

      {/* BANNER PRINCIPAL */}
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <img 
          src={IMAGES.STITCH_REF} 
          alt="ZONA FIBA Hub" 
          className="w-full h-full object-cover opacity-80"
          style={{ objectPosition: 'center 35%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <h1 className="text-3xl font-black italic uppercase leading-tight">ZONA<br/><span className="text-blue-500">FIBA</span></h1>
        </div>
      </div>

      {/* GRID DE BOTONES REORDENADO */}
      <div className="grid gap-3">
        {/* 1. REGLAMENTO */}
        <HubButton 
          icon={<img src={IMAGES.FIBA_LOGO_ICON} alt="FIBA" className="w-8 h-8 object-contain" />} 
          title="REGLAS FIBA 2024" 
          desc="Consultoría del Reglamento Oficial"
          onClick={() => setView('REGLAS_FIBA')}
          primary
        />

        {/* 2. TRIVIA (AHORA DE SEGUNDO) */}
        <HubButton 
          icon={<img src="https://i.postimg.cc/rFDJGG9b/unnamed.jpg" className="w-full h-full object-cover rounded-lg scale-110" alt="Trivia Icon" />} 
          title="TRIVIA DESAFÍO" 
          desc="Compite por el Ranking Mundial"
          onClick={() => setView('TRIVIA')}
        />
        
        {/* 3. JUEZ VIRTUAL (AHORA DE TERCERO) */}
        <HubButton 
          icon={<div className="relative w-full h-full"><img src={IMAGES.ARBITRO_ICON} className="w-full h-full object-cover rounded-lg" /></div>} 
          title="ÁRBITRO VIRTUAL" 
          desc={user.isSubscribed ? "Consultas Ilimitadas" : `Consultas: ${user.consultationsUsed}/5`}
          onClick={() => setView('JUEZ_VIRTUAL')}
        />
      </div>
    </div>
  );
};

// Componente auxiliar para los botones
const HubButton = ({ icon, title, desc, onClick, primary }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-5 p-5 rounded-2xl border transition-all active:scale-95 text-left ${primary ? 'bg-blue-600/10 border-blue-500/40' : 'bg-slate-900/50 border-slate-800'}`}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden ${primary ? 'bg-white' : 'bg-slate-800 text-blue-400'}`}>
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-black italic uppercase text-sm tracking-tight">{title}</h3>
      <p className="text-[10px] text-slate-500 uppercase font-tech tracking-wider">{desc}</p>
    </div>
    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
  </button>
);

export default Home;