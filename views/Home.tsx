
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

      <div className="grid gap-3">
        <HubButton 
          icon={<img src={IMAGES.FIBA_LOGO_ICON} alt="FIBA" className="w-8 h-8 object-contain" />} 
          title="REGLAS FIBA 2024" 
          desc="Consultoría del Reglamento Oficial"
          onClick={() => setView('REGLAS_FIBA')}
          primary
        />
        <HubButton 
          icon={<div className="relative w-full h-full"><img src={IMAGES.ARBITRO_ICON} className="w-full h-full object-cover rounded-lg" /></div>} 
          title="ÁRBITRO VIRTUAL" 
          desc={user.isSubscribed ? "Consultas Ilimitadas" : `Consultas: ${user.consultationsUsed}/5`}
          onClick={() => setView('JUEZ_VIRTUAL')}
        />
        <HubButton 
          icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52,2,12,2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>} 
          title="TRIVIA DESAFÍO" 
          desc="Compite por el Ranking Mundial"
          onClick={() => setView('TRIVIA')}
        />
      </div>
    </div>
  );
};

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
