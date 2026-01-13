import React, { useState, useRef } from 'react';
import { IMAGES } from '../constants';
import { loginWithPseudonymAndPin } from '../services/auth'; // <--- Usamos la nueva función
import { storage, auth } from '../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signInAnonymously, signOut } from 'firebase/auth';

interface LoginProps {
  onLogin: (pseudonym: string, photo: string) => void;
}

const DEFAULT_PHOTO = "https://i.postimg.cc/hj2JLSd5/unnamed.jpg";

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [pseudonym, setPseudonym] = useState('');
  const [pin, setPin] = useState(''); // <--- NUEVO ESTADO PARA EL PIN
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(DEFAULT_PHOTO);
  const [isLoading, setIsLoading] = useState(false);
  const [statusText, setStatusText] = useState('ENTRAR A LA CANCHA');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (!file.type.startsWith('image/')) {
          alert('Solo imágenes por favor.');
          return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleEnter = async () => {
    if (!pseudonym.trim()) { setError("Falta el nombre"); return; }
    if (pin.length < 4) { setError("El PIN debe ser de 4 números"); return; }
    
    setIsLoading(true);
    setError('');
    
    try {
      // 1. Limpieza de sesión
      await signOut(auth); 

      // 2. Preparar Foto
      let finalPhotoUrl = previewUrl;
      
      // Si hay foto nueva, la subimos primero (pero necesitamos un ID temporal)
      if (selectedFile) {
         setStatusText('SUBIENDO FOTO...');
         // Login temporal silencioso solo para poder subir la foto
         const tempAuth = await signInAnonymously(auth);
         const storageRef = ref(storage, `profile_photos/${tempAuth.user.uid}`);
         await uploadBytes(storageRef, selectedFile);
         finalPhotoUrl = await getDownloadURL(storageRef);
      }

      // 3. INTENTAR LOGIN O REGISTRO CON PIN
      setStatusText('VERIFICANDO CLAVE...');
      await loginWithPseudonymAndPin(pseudonym.trim(), pin.trim(), finalPhotoUrl);
      
      // 4. Éxito
      onLogin(pseudonym, finalPhotoUrl);

    } catch (err: any) {
      console.error(err);
      if (err.message === "WRONG_PIN") {
        setError("¡NOMBRE OCUPADO! Si es tuyo, el PIN es incorrecto.");
      } else {
        setError("Error de conexión. Intenta de nuevo.");
      }
    } finally {
      setIsLoading(false);
      setStatusText('ENTRAR A LA CANCHA');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
        <img src={IMAGES.STITCH_REF} alt="Fondo" className="w-full h-full object-cover grayscale scale-110" />
      </div>

      <div className="z-10 w-full max-w-md flex flex-col items-center gap-8">
        <div className="text-center">
          <span className="text-blue-400 font-tech tracking-[0.3em] text-[10px] uppercase border px-4 py-1 border-blue-500/20 rounded-full">Acceso Seguro</span>
          <h1 className="mt-4 text-5xl font-black text-white italic leading-tight tracking-tighter">ZONA<br/><span className="text-blue-500">FIBA</span></h1>
        </div>

        <div className="w-full space-y-6 bg-slate-900/60 p-6 rounded-3xl border border-slate-800 backdrop-blur-sm">
          
          {/* FOTO */}
          <div className="flex flex-col items-center">
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
            <button 
                onClick={() => fileInputRef.current?.click()}
                className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/50 hover:scale-105 transition-all"
            >
                <img src={previewUrl} className="w-full h-full object-cover" alt="Avatar" />
            </button>
            <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wider">Toca para cambiar foto</p>
          </div>

          {/* CAMPOS DE TEXTO */}
          <div className="space-y-4">
            <div>
                <input 
                  type="text" 
                  value={pseudonym}
                  onChange={(e) => setPseudonym(e.target.value)}
                  placeholder="NOMBRE / SEUDÓNIMO"
                  className="w-full bg-slate-950 border border-blue-900/30 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 text-center uppercase tracking-widest"
                  maxLength={15}
                />
            </div>

            <div>
                <input 
                  type="tel" 
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g,'').slice(0,4))} // Solo números, máx 4
                  placeholder="PIN SECRETO (4 NÚMEROS)"
                  className="w-full bg-slate-950 border border-blue-900/30 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-green-500 text-center text-xl tracking-[0.5em] font-bold"
                />
                <p className="text-[9px] text-slate-500 text-center mt-1">
                    Usa este PIN para recuperar tu cuenta después.
                </p>
            </div>
            
            {error && (
                <div className="bg-red-500/20 border border-red-500/50 p-2 rounded-lg">
                    <p className="text-red-200 text-xs text-center font-bold">{error}</p>
                </div>
            )}

            <button 
              disabled={isLoading}
              onClick={handleEnter}
              className={`w-full py-4 rounded-xl font-black text-sm tracking-[0.2em] flex items-center justify-center gap-2 transition-all uppercase ${isLoading ? 'bg-slate-700' : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20'}`}
            >
              {isLoading ? statusText : 'ENTRAR AL JUEGO'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;