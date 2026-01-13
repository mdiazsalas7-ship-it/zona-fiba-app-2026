
import React, { useState, useCallback, useEffect } from 'react';
import { AppView, UserProfile } from './types';
import Login from './views/Login';
import Home from './views/Home';
import JuezVirtual from './views/JuezVirtual';
import Trivia from './views/Trivia';
import ReglasFiba from './views/ReglasFiba';
import Ranking from './views/Ranking';
import Layout from './components/Layout';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('LOGIN');
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('zona_fiba_user_data');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (pseudonym: string, photo: string) => {
    const newUser: UserProfile = {
      pseudonym,
      photo,
      level: 'ASPIRANTE',
      exp: 0,
      isSubscribed: false,
      consultationsUsed: 0,
      bestScore: 0,
      bestStreak: 0,
      stats: { jugadas: 0, precision: 0 }
    };
    
    const existingStats = localStorage.getItem(`zona_fiba_stats_${pseudonym}`);
    if (existingStats) {
      const stats = JSON.parse(existingStats);
      newUser.consultationsUsed = stats.consultationsUsed || 0;
      newUser.isSubscribed = stats.isSubscribed || false;
    }

    setUser(newUser);
    localStorage.setItem('zona_fiba_user_data', JSON.stringify(newUser));
    setCurrentView('HOME');
  };

  const updateUsage = (newCount: number, subscribed: boolean) => {
    if (!user) return;
    const updatedUser = { ...user, consultationsUsed: newCount, isSubscribed: subscribed };
    setUser(updatedUser);
    localStorage.setItem('zona_fiba_user_data', JSON.stringify(updatedUser));
    localStorage.setItem(`zona_fiba_stats_${user.pseudonym}`, JSON.stringify({
      consultationsUsed: newCount,
      isSubscribed: subscribed
    }));
  };

  const renderView = () => {
    if (!user && currentView !== 'LOGIN') {
      setCurrentView('LOGIN');
      return null;
    }

    switch (currentView) {
      case 'LOGIN': return <Login onLogin={handleLogin} />;
      case 'HOME': return <Home user={user!} setView={setCurrentView} />;
      case 'JUEZ_VIRTUAL': return <JuezVirtual user={user!} onUpdateUsage={updateUsage} />;
      case 'RANKING': return <Ranking />;
      case 'TRIVIA': return <Trivia onBack={() => setCurrentView('HOME')} userPhoto={user!.photo} userPseudonym={user!.pseudonym} />;
      case 'REGLAS_FIBA': return <ReglasFiba onBack={() => setCurrentView('HOME')} />;
      default: return <Home user={user!} setView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView} hideNav={currentView === 'LOGIN' || currentView === 'TRIVIA' || currentView === 'REGLAS_FIBA'}>
      {renderView()}
    </Layout>
  );
};

export default App;
