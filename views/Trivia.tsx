import React, { useState, useEffect, useRef, useCallback } from 'react';
import { QUIZ_POOL } from '../data/quizPool';
import { Question, RankingEntry } from '../types';

interface TriviaProps {
  userPhoto: string;
  userPseudonym: string;
  onBack: () => void;
}

// --- CONFIGURACIÓN ---
const SHOT_CLOCK_MAX = 24;
const ON_FIRE_DURATION = 60;
const TRIVIA_BG = "https://i.postimg.cc/gjwK5yJb/images.jpg"; // <--- TU NUEVA IMAGEN

const Trivia: React.FC<TriviaProps> = ({ onBack, userPhoto, userPseudonym }) => {
  const [availablePool, setAvailablePool] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(SHOT_CLOCK_MAX);
  const [onFireTimeLeft, setOnFireTimeLeft] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => Number(localStorage.getItem(`best_score_${userPseudonym}`) || 0));
  const [streak, setStreak] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState("");
  const [onFire, setOnFire] = useState(false);
  
  const [comodin5050, setComodin5050] = useState(1);
  const [comodinRebote, setComodinRebote] = useState(1);
  const [eliminatedIndices, setEliminatedIndices] = useState<number[]>([]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onFireTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getRankInfo = (s: number) => {
    if (s >= 50) return { name: 'LEYENDA', color: 'text-purple-500', glow: 'shadow-purple-500/20' };
    if (s >= 40) return { name: 'ÉLITE', color: 'text-red-500', glow: 'shadow-red-500/20' };
    if (s >= 30) return { name: 'PRO', color: 'text-orange-500', glow: 'shadow-orange-500/20' };
    if (s >= 20) return { name: 'EXPERTO', color: 'text-yellow-500', glow: 'shadow-yellow-500/20' };
    if (s >= 10) return { name: 'ROOKIE', color: 'text-green-500', glow: 'shadow-green-500/20' };
    return { name: 'ASPIRANTE', color: 'text-slate-500', glow: '' };
  };

  const updateGlobalRanking = useCallback((finalScore: number, finalStreak: number) => {
    const rankData = getRankInfo(finalStreak);
    const rawRanking = localStorage.getItem('zona_fiba_world_ranking') || '[]';
    let ranking: RankingEntry[] = JSON.parse(rawRanking);
    
    const existingIdx = ranking.findIndex(r => r.pseudonym === userPseudonym);
    const newEntry: RankingEntry = {
      pseudonym: userPseudonym,
      photo: userPhoto,
      score: Math.max(finalScore, existingIdx >= 0 ? ranking[existingIdx].score : 0),
      streak: Math.max(finalStreak, existingIdx >= 0 ? ranking[existingIdx].streak : 0),
      rank: rankData.name
    };

    if (existingIdx >= 0) {
      ranking[existingIdx] = newEntry;
    } else {
      ranking.push(newEntry);
    }

    ranking.sort((a, b) => b.score - a.score);
    localStorage.setItem('zona_fiba_world_ranking', JSON.stringify(ranking));
  }, [userPseudonym, userPhoto]);

  const handleGameOver = useCallback((reason: string) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (onFireTimerRef.current) clearInterval(onFireTimerRef.current);
    setIsGameOver(true);
    setGameOverReason(reason);
    updateGlobalRanking(score, streak);
    setOnFire(false);
  }, [score, streak, updateGlobalRanking]);

  useEffect(() => {
    const answeredIdsStr = localStorage.getItem(`answered_ids_${userPseudonym}`) || '[]';
    let answeredIds: number[] = JSON.parse(answeredIdsStr);
    let pool = QUIZ_POOL.filter(q => !answeredIds.includes(q.id));
    
    if (pool.length === 0) {
      localStorage.setItem(`answered_ids_${userPseudonym}`, '[]');
      pool = [...QUIZ_POOL];
    }
    
    pool = pool.sort(() => Math.random() - 0.5);
    if (pool.length > 0) {
      setCurrentQuestion(pool[0]);
      setAvailablePool(pool.slice(1));
    }
  }, [userPseudonym]);

  useEffect(() => {
    if (!isAnswering && !isGameOver && currentQuestion) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) { handleGameOver("TIEMPO DE POSESIÓN AGOTADO"); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isAnswering, isGameOver, currentQuestion, handleGameOver]);

  useEffect(() => {
    if (onFire && onFireTimeLeft > 0 && !isGameOver) {
      onFireTimerRef.current = setInterval(() => {
        setOnFireTimeLeft(prev => {
          if (prev <= 1) { setOnFire(false); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (onFireTimerRef.current) clearInterval(onFireTimerRef.current); };
  }, [onFire, onFireTimeLeft, isGameOver]);

  const handleAnswer = (idx: number) => {
    if (isAnswering || isGameOver || !currentQuestion) return;
    setIsAnswering(true);
    setSelectedIdx(idx);
    const correct = idx === currentQuestion.correctIndex;
    
    if (correct) {
      const answeredIds: number[] = JSON.parse(localStorage.getItem(`answered_ids_${userPseudonym}`) || '[]');
      answeredIds.push(currentQuestion.id);
      localStorage.setItem(`answered_ids_${userPseudonym}`, JSON.stringify(answeredIds));

      const newStreak = streak + 1;
      const points = onFire ? 20 : 10;
      setScore(s => s + points);
      setStreak(newStreak);
      
      if (score + points > bestScore) {
        setBestScore(score + points);
        localStorage.setItem(`best_score_${userPseudonym}`, (score + points).toString());
      }

      if (newStreak === 5) { setOnFire(true); setOnFireTimeLeft(ON_FIRE_DURATION); }
      if (newStreak % 5 === 0) setComodinRebote(p => p + 1);
      if (newStreak % 10 === 0) setComodin5050(p => p + 1);
      
      setTimeout(() => {
        if (availablePool.length === 0) {
          handleGameOver("¡HAS COMPLETADO EL MANUAL FIBA!");
        } else {
          setCurrentQuestion(availablePool[0]);
          setAvailablePool(p => p.slice(1));
          setSelectedIdx(null);
          setIsAnswering(false);
          setTimeLeft(SHOT_CLOCK_MAX);
          setEliminatedIndices([]);
        }
      }, 1000);
    } else {
      setTimeout(() => handleGameOver("DECISIÓN INCORRECTA"), 800);
    }
  };

  const rank = getRankInfo(streak);

  if (isGameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center animate-in fade-in duration-700 bg-[#020617] relative overflow-hidden">
        {/* FONDO DE PANTALLA GAME OVER */}
        <div className="absolute inset-0 z-0 opacity-20">
            <img src={TRIVIA_BG} className="w-full h-full object-cover grayscale" alt="bg" />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
            <img src={userPhoto} className="w-24 h-24 rounded-3xl border-2 border-orange-500 mb-6 object-cover shadow-xl" />
            <h1 className="text-4xl font-black italic text-white mb-2 uppercase">GAME OVER</h1>
            <p className="text-orange-500 mb-6 font-tech tracking-widest font-bold uppercase">{gameOverReason}</p>
            
            <div className="glass-panel border-2 border-orange-500/50 p-6 rounded-3xl w-full max-w-sm mb-8 shadow-2xl bg-black/60 backdrop-blur-md">
            <div className="text-[10px] font-tech text-orange-500 uppercase tracking-widest mb-1">Rango Alcanzado</div>
            <div className={`text-2xl font-black italic mb-4 ${rank.color}`}>{rank.name}</div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                <p className="text-[8px] text-slate-500 uppercase font-tech">Puntos</p>
                <p className="text-3xl font-black text-white">{score}</p>
                </div>
                <div>
                <p className="text-[8px] text-slate-500 uppercase font-tech">Racha Máx.</p>
                <p className="text-3xl font-black text-white">{streak}</p>
                </div>
            </div>
            </div>

            <button onClick={() => window.location.reload()} className="w-full max-w-sm py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-blue-500 active:scale-95 transition-all">REINTENTAR</button>
            <button onClick={onBack} className="mt-4 text-slate-500 font-bold uppercase text-xs tracking-widest">VOLVER AL HUB</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col relative min-h-screen overflow-hidden bg-[#020617]">
      
      {/* --- CAPA DE FONDO --- */}
      <div className="absolute inset-0 z-0">
         {/* Tu imagen */}
         <img src={TRIVIA_BG} alt="Cancha" className="w-full h-full object-cover" />
         
         {/* Capa oscura (Overlay) que cambia a rojo si estás ON FIRE */}
         <div className={`absolute inset-0 transition-colors duration-700 ${onFire ? 'bg-red-900/60 mix-blend-multiply' : 'bg-slate-900/80'}`}></div>
         
         {/* Textura extra para que se vea más pro */}
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* --- CONTENIDO PRINCIPAL (z-10 para estar encima del fondo) --- */}
      <div className="relative z-10 flex flex-col p-6 pt-10 gap-6 min-h-screen pb-24">
          
          {onFire && (
            <div className="fixed top-0 left-0 w-full h-1 bg-red-600 z-50">
              <div className="h-full bg-white transition-all duration-1000 linear" style={{ width: `${(onFireTimeLeft/ON_FIRE_DURATION)*100}%` }}></div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={userPhoto} className="w-10 h-10 rounded-xl border border-blue-500/50 object-cover" />
              <div className="flex flex-col">
                <span className={`text-[8px] font-black uppercase tracking-widest ${rank.color}`}>{rank.name}</span>
                <span className="text-sm font-black italic text-white leading-none shadow-black drop-shadow-md">{userPseudonym}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-2xl font-black italic text-white leading-none drop-shadow-lg">{score}</span>
              <span className="text-[8px] font-tech text-blue-500 uppercase tracking-widest">Puntos</span>
            </div>
          </div>

          <div className={`self-center w-36 h-20 bg-black/80 backdrop-blur-sm rounded-xl border-4 flex items-center justify-center transition-all shadow-2xl ${timeLeft <= 5 ? 'border-red-600 animate-pulse' : 'border-slate-800'}`}>
            <span className={`text-5xl font-black font-mono tracking-tighter ${timeLeft <= 5 ? 'text-red-600' : 'text-orange-500'}`}>{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
          </div>

          <div className={`glass-panel border-2 rounded-3xl p-6 relative transition-all bg-black/40 backdrop-blur-md shadow-xl ${onFire ? 'border-red-600/50 shadow-red-500/10' : 'border-blue-900/50'}`}>
            {onFire && <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-full animate-bounce">ON FIRE x2</div>}
            <h2 className="text-lg font-bold leading-snug text-white italic drop-shadow-md">{currentQuestion?.text}</h2>
          </div>

          <div className="grid gap-2">
            {currentQuestion?.options.map((opt, i) => (
              <button 
                key={i} 
                disabled={isAnswering}
                onClick={() => handleAnswer(i)}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between text-left backdrop-blur-sm shadow-lg ${eliminatedIndices.includes(i) ? 'opacity-0 pointer-events-none' : isAnswering && i === currentQuestion.correctIndex ? 'bg-green-600/80 border-green-500 text-white' : isAnswering && selectedIdx === i ? 'bg-red-600/80 border-red-500 text-white' : 'bg-slate-900/60 border-slate-700 hover:bg-slate-800/80 text-slate-200'}`}
              >
                <span className="font-bold text-sm drop-shadow-sm">{opt}</span>
                <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center ${selectedIdx === i ? 'border-white' : 'border-slate-600'}`}>{selectedIdx === i && <div className="w-2 h-2 bg-white rounded-sm"></div>}</div>
              </button>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            <button onClick={() => { if(comodin5050 > 0 && !isAnswering) { setComodin5050(c=>c-1); const wrong = currentQuestion!.options.map((_,i)=>i).filter(i=>i!==currentQuestion!.correctIndex).sort(()=>Math.random()-0.5); setEliminatedIndices(wrong.slice(0,2)); } }} className={`flex-1 py-3 rounded-xl border font-black text-[10px] tracking-widest uppercase backdrop-blur-sm transition-transform active:scale-95 ${comodin5050 > 0 ? 'bg-indigo-600/80 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-900/50 border-slate-800 text-slate-500'}`}>50/50 ({comodin5050})</button>
            <button onClick={() => { if(comodinRebote > 0 && !isAnswering) { setComodinRebote(c=>c-1); setTimeLeft(t=>Math.min(t+14, SHOT_CLOCK_MAX)); } }} className={`flex-1 py-3 rounded-xl border font-black text-[10px] tracking-widest uppercase backdrop-blur-sm transition-transform active:scale-95 ${comodinRebote > 0 ? 'bg-orange-600/80 border-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-slate-900/50 border-slate-800 text-slate-500'}`}>REBOTE ({comodinRebote})</button>
          </div>
          
          <p className="text-[8px] text-center text-slate-400 font-tech uppercase tracking-widest">Quedan {availablePool.length} casos por resolver</p>
      </div>
    </div>
  );
};

export default Trivia;