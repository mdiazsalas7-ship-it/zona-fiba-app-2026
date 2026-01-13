import React, { useState, useRef, useEffect } from 'react';
import { UserProfile } from '../types';
import { getVirtualJudgeVerdict } from '../services/openaiService';
import { IMAGES } from '../constants';

// --- CONFIGURACIÓN VISUAL ---
const REFEREE_ICON_URL = "https://i.postimg.cc/hPLX3zVD/download.jpg";
const CHAT_BACKGROUND = "https://i.postimg.cc/D0by0N97/unnamed.jpg";
const FREE_LIMIT = 5; // Límite de consultas gratuitas

interface JuezVirtualProps {
  user: UserProfile;
  onUpdateUsage: (count: number, subscribed: boolean) => void;
  onSubscribe: () => void; // Función para ir a pagar
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const JuezVirtual: React.FC<JuezVirtualProps> = ({ user, onUpdateUsage, onSubscribe }) => {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Saludos. Soy el Instructor Técnico. Consultaré la base de datos completa (Reglamento + OBRI) para analizar tu jugada.',
      sender: 'bot'
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- LÓGICA DE LÍMITE ---
  // Si no paga Y ya usó 5 o más, se bloquea.
  const isLimitReached = !user.isSubscribed && user.consultationsUsed >= FREE_LIMIT;
  const consultasRestantes = Math.max(0, FREE_LIMIT - user.consultationsUsed);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    // Protección de seguridad: Si está bloqueado, no hace nada.
    if (isLimitReached) return;
    if (!inputText.trim()) return;

    const userMsgText = inputText;
    setInputText(''); 

    // 1. Agregar mensaje del usuario
    const newUserMsg: Message = { id: Date.now().toString(), text: userMsgText, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setIsTyping(true);

    // 2. Consultar a la IA
    const aiResponse = await getVirtualJudgeVerdict(userMsgText);

    // 3. Agregar respuesta del bot
    setIsTyping(false);
    const newBotMsg: Message = { id: (Date.now() + 1).toString(), text: aiResponse, sender: 'bot' };
    setMessages(prev => [...prev, newBotMsg]);

    // 4. Actualizar estadísticas
    // Solo aumentamos el contador si NO es suscriptor (los suscriptores tienen infinito, pero si quieres contarles también, quita el if)
    if (!user.isSubscribed) {
        onUpdateUsage(user.consultationsUsed + 1, user.isSubscribed);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f172a] relative overflow-hidden font-sans">
      
      {/* FONDO DE PANTALLA */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${CHAT_BACKGROUND})` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-slate-900/80"></div>

      {/* --- HEADER --- */}
      <div className="relative z-10 flex items-center justify-between p-4 pt-6 bg-slate-900/90 border-b border-slate-700 backdrop-blur-md shadow-lg">
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-500 mr-3 shadow-[0_0_10px_rgba(251,191,36,0.3)]">
            <img src={REFEREE_ICON_URL} alt="Juez" className="w-full h-full object-cover" />
            </div>
            <div>
            <h1 className="text-white text-lg font-bold tracking-tight">JUEZ EXPERTO</h1>
            <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full animate-pulse ${user.isSubscribed ? 'bg-green-500' : isLimitReached ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
                <p className="text-slate-400 text-xs font-semibold tracking-wider">
                    {user.isSubscribed ? "MODO PRO (ILIMITADO)" : `GRATIS: ${consultasRestantes} RESTANTES`}
                </p>
            </div>
            </div>
        </div>
        
        {/* Barra de Progreso (Solo usuarios Gratis) */}
        {!user.isSubscribed && (
            <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-tech">Nivel de Uso</span>
                <div className="w-16 h-1.5 bg-slate-700 rounded-full mt-1 overflow-hidden">
                    <div 
                        className={`h-full ${isLimitReached ? 'bg-red-600' : 'bg-blue-500'}`} 
                        style={{ width: `${(user.consultationsUsed / FREE_LIMIT) * 100}%` }}
                    ></div>
                </div>
            </div>
        )}
      </div>

      {/* --- ÁREA DE CHAT --- */}
      <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-600 mr-2 flex-shrink-0 self-end mb-1">
                <img src={REFEREE_ICON_URL} className="w-full h-full object-cover" />
              </div>
            )}
            <div 
              className={`max-w-[85%] p-3.5 rounded-2xl shadow-md text-sm leading-relaxed whitespace-pre-wrap ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex w-full justify-start items-center ml-10">
            <div className="bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
              <span className="text-xs text-yellow-500 ml-2 font-bold uppercase tracking-wider">Analizando...</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* --- BARRA DE ENTRADA O BLOQUEO DE PAGO --- */}
      <div className="relative z-10 bg-slate-900/95 border-t border-slate-700">
        
        {isLimitReached ? (
            // --- PANTALLA DE BLOQUEO (Límite Alcanzado) ---
            <div className="p-6 flex flex-col items-center justify-center text-center space-y-3 bg-red-950/30 backdrop-blur-md animate-in fade-in slide-in-from-bottom-5">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center border border-red-500 mb-1 animate-pulse">
                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h3 className="text-white font-black italic uppercase text-lg">Límite Alcanzado</h3>
                <p className="text-slate-400 text-xs max-w-[250px]">
                    Has agotado tus 5 consultas gratuitas. Suscríbete para tener acceso ilimitado al Juez IA.
                </p>
                <button 
                    onClick={onSubscribe}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl font-black text-white text-sm uppercase tracking-widest shadow-lg shadow-orange-500/20 active:scale-95 transition-transform mt-2"
                >
                    Desbloquear por $1/Mes
                </button>
            </div>
        ) : (
            // --- BARRA DE ESCRITURA NORMAL ---
            <div className="p-3 pb-6 flex items-end gap-2">
                {/* Botón Micrófono (Fake) */}
                <button 
                onClick={() => alert("Usa el dictado de tu teclado.")}
                className="p-3 bg-slate-800 rounded-full text-yellow-500 hover:bg-slate-700 transition-colors border border-slate-700"
                >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                </button>

                {/* Input Texto */}
                <div className="flex-1 bg-slate-800/80 rounded-2xl border border-slate-700 flex items-center">
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Consulta la jugada..."
                    className="w-full bg-transparent text-white p-3 max-h-24 focus:outline-none resize-none placeholder:text-slate-500"
                    rows={1}
                    style={{ minHeight: '44px' }}
                />
                </div>

                {/* Botón Enviar */}
                <button 
                onClick={handleSend}
                disabled={!inputText.trim() || isTyping}
                className={`p-3 rounded-full transition-all flex items-center justify-center ${
                    inputText.trim() && !isTyping 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
                >
                <svg className="w-5 h-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default JuezVirtual;