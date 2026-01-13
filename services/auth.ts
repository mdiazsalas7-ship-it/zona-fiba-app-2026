import { auth, db } from '../lib/firebase';
import { signInAnonymously, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc, setDoc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore'; 
import { UserProfile } from '../types'; 

// Función Maestra: Registra nuevo O recupera cuenta vieja si tienes el PIN
export const loginWithPseudonymAndPin = async (pseudonym: string, pin: string, photoUrl: string) => {
  try {
    // 1. Buscamos si el nombre ya existe en la base de datos
    const usersRef = collection(db, "profiles");
    const q = query(usersRef, where("pseudonym", "==", pseudonym));
    const querySnapshot = await getDocs(q);

    // 2. Iniciamos sesión anónima en este dispositivo (Usuario Nuevo Temporal)
    const result = await signInAnonymously(auth);
    const currentUser = result.user;
    const currentUserRef = doc(db, 'profiles', currentUser.uid);

    // CASO A: El nombre YA EXISTE (¿Es el dueño recuperando cuenta?)
    if (!querySnapshot.empty) {
      const oldUserDoc = querySnapshot.docs[0]; // Agarramos el perfil viejo
      const oldUserData = oldUserDoc.data() as UserProfile;

      // Verificamos el PIN
      if (oldUserData.pin === pin) {
        // ¡CLAVE CORRECTA! -> MUDANZA DE DATOS
        // Copiamos los datos viejos al usuario nuevo de este teléfono
        await setDoc(currentUserRef, {
          ...oldUserData,
          photo: photoUrl, // Actualizamos la foto si subió una nueva
        });

        // Borramos el perfil viejo para que no quede basura duplicada
        // (Solo si el ID es diferente, para no borrarnos a nosotros mismos)
        if (oldUserDoc.id !== currentUser.uid) {
           await deleteDoc(oldUserDoc.ref);
        }

        return currentUser; // Entra como el Rey
      } else {
        // CLAVE INCORRECTA
        throw new Error("WRONG_PIN"); 
      }
    }

    // CASO B: El nombre ESTÁ LIBRE (Usuario Nuevo)
    // Creamos perfil desde cero
    const newProfile: any = { // Usamos 'any' para poder meter el pin sin error de tipos
      pseudonym: pseudonym,
      pin: pin, // <--- GUARDAMOS LA CLAVE
      photo: photoUrl,
      level: 'Novato',
      exp: 0,
      isSubscribed: false,
      consultationsUsed: 0,
      bestScore: 0,
      bestStreak: 0,
      stats: { jugadas: 0, precision: 0 }
    };
    
    await setDoc(currentUserRef, newProfile);
    return currentUser;

  } catch (error) {
    console.error("Error Auth:", error);
    throw error;
  }
};

export const logout = () => firebaseSignOut(auth);