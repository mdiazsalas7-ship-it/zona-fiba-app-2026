import React, { useState, useRef, useEffect } from 'react';
import { UserProfile } from '../types';
import { getVirtualJudgeVerdict } from '../services/openaiService';
import { IMAGES } from '../constants'; // Asegúrate de tener las imágenes aquí o usa las URLs directas abajo

// --- CONFIGURACIÓN VISUAL (Igual que en tu RN) ---
const REFEREE_ICON_URL = "https://i.postimg.cc/hPLX3zVD/download.jpg";
const CHAT_BACKGROUND = "https://i.postimg.cc/D0by0N97/unnamed.jpg";

interface JuezVirtualProps {
  user: UserProfile;
  onUpdateUsage: (count: number, subscribed: boolean) => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const JuezVirtual: React.FC<JuezVirtualProps> = ({ user, onUpdateUsage }) => {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Saludos. Soy el Instructor Técnico. Consultaré la base de datos completa (Reglamento + OBRI) para analizar tu jugada.',
      sender: 'bot'
    }
  ]);
  
  // Referencia para el scroll automático
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Función para bajar el scroll cuando llega un mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsgText = inputText;
    setInputText(''); // Limpiar input

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

    // Actualizar estadísticas (sin bloquear)
    onUpdateUsage(user.consultationsUsed + 1, true);
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
      
      {/* CAPA OSCURA */}
      <div className="absolute inset-0 z-0 bg-slate-900/80"></div>

      {/* --- HEADER --- */}
      <div className="relative z-10 flex items-center p-4 pt-6 bg-slate-900/90 border-b border-slate-700 backdrop-blur-md shadow-lg">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-500 mr-3 shadow-[0_0_10px_rgba(251,191,36,0.3)]">
          <img src={REFEREE_ICON_URL} alt="Juez" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-white text-lg font-bold tracking-tight">JUEZ EXPERTO</h1>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-yellow-500 text-xs font-semibold tracking-wider">EN LÍNEA • FIBA & OBRI</p>
          </div>
        </div>
      </div>

      {/* --- ÁREA DE CHAT --- */}
      <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {/* Avatar del Bot (Izquierda) */}
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-600 mr-2 flex-shrink-0 self-end mb-1">
                <img src={REFEREE_ICON_URL} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Burbuja de Mensaje */}
            <div 
              className={`max-w-[85%] p-3.5 rounded-2xl shadow-md text-sm leading-relaxed whitespace-pre-wrap ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>

            {/* Avatar del Usuario (Derecha) */}
            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center ml-2 flex-shrink-0 self-end mb-1 border border-blue-400">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            )}
          </div>
        ))}

        {/* Indicador de "Escribiendo..." */}
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
        
        {/* Elemento invisible para forzar el scroll al final */}
        <div ref={messagesEndRef} />
      </div>

      {/* --- BARRA DE ENTRADA --- */}
      <div className="relative z-10 p-3 pb-6 bg-slate-900/95 border-t border-slate-700 flex items-end gap-2">
        {/* Botón de Micrófono (Simulado) */}
        <button 
          onClick={() => alert("Por favor usa el dictado de tu teclado móvil.")}
          className="p-3 bg-slate-800 rounded-full text-yellow-500 hover:bg-slate-700 transition-colors border border-slate-700"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>

        {/* Input de Texto */}
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

        {/* Botón de Enviar */}
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
    </div>
  );
};

export default JuezVirtual;