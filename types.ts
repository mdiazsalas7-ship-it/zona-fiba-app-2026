
export type AppView = 'LOGIN' | 'HOME' | 'TRIVIA' | 'JUEZ_VIRTUAL' | 'HISTORIAL' | 'RANKING' | 'AJUSTES' | 'REGLAS_FIBA';

export interface UserProfile {
  pseudonym: string;
  photo: string;
  level: string;
  exp: number;
  isSubscribed: boolean;
  consultationsUsed: number;
  bestScore: number;
  bestStreak: number;
  stats: {
    jugadas: number;
    precision: number;
  };
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category?: string;
}

export interface RankingEntry {
  pseudonym: string;
  photo: string;
  score: number;
  rank: string;
  streak: number;
}
