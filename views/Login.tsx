import React, { useState, useRef } from 'react';
import { IMAGES } from '../constants';
import { registerUser, loginUser, updateUserPhoto } from '../services/auth'; // <--- Importamos la nueva función
import { storage } from '../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface LoginProps {
  onLogin: (pseudonym: string, photo: string) => void;
}

const DEFAULT_PHOTO = "https://i.postimg.cc/hj2JLSd5/unnamed.jpg";

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pseudonym, setPseudonym] = useState('');

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(DEFAULT_PHOTO);
  const [isLoading, setIsLoading] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [error, setError] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // Validar tamaño (opcional, ej: máx 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("La imagen es muy pesada. Intenta con una más ligera.");
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    setError('');
    
    if (!email.includes('@')) { setError("Correo inválido"); return; }
    if (password.length < 6) { setError("La contraseña debe tener al menos 6 caracteres"); return; }
    if (isRegistering && !pseudonym.trim()) { setError("Falta el nombre de usuario"); return; }

    setIsLoading(true);

    try {
      if (isRegistering) {
        // --- REGISTRO ---
        setStatusText('CREANDO CUENTA...');
        
        // 1. Creamos el usuario base (con foto por defecto)
        const user = await registerUser(email, password, pseudonym, DEFAULT_PHOTO);
        let finalPhotoUrl = DEFAULT_PHOTO;

        // 2. Si el usuario eligió una foto, la subimos y actualizamos
        if (selectedFile) {
            setStatusText('SUBIENDO FOTO...');
            try {
                // Referencia: profile_photos/UID_DEL_USUARIO
                const storageRef = ref(storage, `profile_photos/${user.uid}`);
                
                // Subir archivo
                await uploadBytes(storageRef, selectedFile);
                
                // Obtener URL pública
                finalPhotoUrl = await getDownloadURL(storageRef);
                
                // GUARDAR URL EN LA BASE DE DATOS (El paso que faltaba)
                setStatusText('FINALIZANDO...');
                await updateUserPhoto(user.uid, finalPhotoUrl);
                
            } catch (uploadError) {
                console.error("Error subiendo foto:", uploadError);
                // Si falla la foto, no bloqueamos el registro, entramos con la default
                alert("Cuenta creada, pero hubo un error subiendo la foto. Podrás cambiarla luego.");
            }
        }
        
        onLogin(pseudonym, finalPhotoUrl);

      } else {
        // --- LOGIN ---
        setStatusText('INICIANDO SESIÓN...');
        const user = await loginUser(email, password);
        const userName = user.displayName || "Oficial";
        const userPhoto = user.photoURL || DEFAULT_PHOTO;
        
        onLogin(userName, userPhoto);
      }

    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') setError("Este correo ya está registrado.");
      else if (err.code === 'auth/wrong-password') setError("Contraseña incorrecta.");
      else if (err.code === 'auth/user-not-found') setError("No existe cuenta con este correo.");
      else if (err.code === 'auth/invalid-email') setError("El correo está mal escrito.");
      else setError("Error al entrar. Revisa tus datos.");
    } finally {
      setIsLoading(false);
      setStatusText('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
        <img src={IMAGES.STITCH_REF} alt="Fondo" className="w-full h-full object-cover grayscale scale-110" />
      </div>

      <div className="z-10 w-full max-w-md flex flex-col items-center gap-6">
        <div className="text-center">
          <span className="text-blue-400 font-tech tracking-[0.3em] text-[10px] uppercase border px-4 py-1 border-blue-500/20 rounded-full">
            {isRegistering ? "Nuevo Ingreso" : "Acceso Oficiales"}
          </span>
          <h1 className="mt-4 text-5xl font-black text-white italic leading-tight tracking-tighter">ZONA<br/><span className="text-blue-500">FIBA</span></h1>
        </div>

        <div className="w-full space-y-5 bg-slate-900/60 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-2xl">
          
          {/* SELECCIÓN DE FOTO (Solo en Registro) */}
          {isRegistering && (
            <div className="flex flex-col items-center mb-4">
                <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
                <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/50 hover:border-blue-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-black/40 group"
                >
                    <img src={previewUrl} className="w-full h-full object-cover" alt="Avatar" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-2xl">📷</span>
                    </div>
                </button>
                <p className="text-[9px] text-blue-400 mt-2 uppercase tracking-wider font-bold">Toca para subir foto</p>
            </div>
          )}

          {/* FORMULARIO */}
          <div className="space-y-4">
            
            {isRegistering && (
                <input 
                  type="text" 
                  value={pseudonym}
                  onChange={(e) => setPseudonym(e.target.value)}
                  placeholder="TU APODO / SEUDÓNIMO"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 text-center uppercase tracking-widest transition-all"
                  maxLength={15}
                />
            )}

            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="CORREO ELECTRÓNICO"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 text-center transition-all"
            />

            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="CONTRASEÑA"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 text-center font-bold tracking-widest transition-all"
            />
            
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 p-2 rounded-lg animate-pulse">
                    <p className="text-red-400 text-xs text-center font-bold">{error}</p>
                </div>
            )}

            <button 
              disabled={isLoading}
              onClick={handleSubmit}
              className={`w-full py-4 rounded-xl font-black text-sm tracking-[0.2em] flex items-center justify-center gap-2 transition-all uppercase ${isLoading ? 'bg-slate-700' : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 active:scale-95'}`}
            >
              {isLoading ? (
                  <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span> {statusText}
                  </span>
              ) : (isRegistering ? 'CREAR PERFIL' : 'ENTRAR AL JUEGO')}
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 text-center">
            <button 
                onClick={() => {
                    setIsRegistering(!isRegistering);
                    setError('');
                }}
                className="text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-wider font-bold"
            >
                {isRegistering 
                    ? "¿Ya tienes cuenta? Inicia Sesión" 
                    : "¿Eres nuevo? Crea tu cuenta aquí"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;