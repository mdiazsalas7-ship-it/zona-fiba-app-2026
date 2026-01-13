import { auth, db } from '../lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  updateProfile 
} from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore'; // <--- Agregamos updateDoc
import { UserProfile } from '../types'; 

// --- 1. REGISTRO (Crear cuenta nueva) ---
export const registerUser = async (email: string, pass: string, pseudonym: string, photoUrl: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;

    await updateProfile(user, { displayName: pseudonym, photoURL: photoUrl });

    const newProfile: UserProfile = {
      pseudonym: pseudonym,
      email: email,
      photo: photoUrl,
      level: 'Novato',
      exp: 0,
      isSubscribed: false,
      consultationsUsed: 0,
      bestScore: 0,
      bestStreak: 0,
      stats: { jugadas: 0, precision: 0 },
      createdAt: new Date().toISOString()
    };
    
    await setDoc(doc(db, 'profiles', user.uid), newProfile);
    
    return user;
  } catch (error: any) {
    console.error("Error Registro:", error);
    throw error;
  }
};

// --- 2. LOGIN ---
export const loginUser = async (email: string, pass: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error Login:", error);
    throw error;
  }
};

// --- 3. ACTUALIZAR FOTO (Función Nueva) ---
// Esta función pega el link de la foto en la base de datos después de subirla
export const updateUserPhoto = async (uid: string, photoUrl: string) => {
    try {
        // 1. Actualizar en Firebase Auth (para que salga al iniciar sesión)
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { photoURL: photoUrl });
        }
        // 2. Actualizar en la Base de Datos (para el Ranking)
        const userRef = doc(db, 'profiles', uid);
        await updateDoc(userRef, { photo: photoUrl });
    } catch (error) {
        console.error("Error actualizando foto:", error);
    }
};

export const logout = () => firebaseSignOut(auth);