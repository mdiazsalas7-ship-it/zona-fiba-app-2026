
import { Question } from './types';

export const TRIVIA_QUESTIONS: Question[] = [
  {
    id: 504,
    text: "Un jugador en acción de tiro recibe una falta personal mientras el balón aún no ha salido de sus manos. ¿Cuál es la aplicación correcta?",
    options: [
      "Dos tiros libres si el balón no entra",
      "Saque de banda para el equipo atacante",
      "Un tiro libre adicional si la canasta entra"
    ],
    correctIndex: 2,
    explanation: "Si el jugador está en acción de tiro y la canasta entra, se conceden los puntos y un tiro libre adicional. Si no entra, se conceden 2 o 3 tiros libres.",
    category: "ANÁLISIS DE JUGADA"
  },
  {
    id: 505,
    text: "¿Qué ocurre si un jugador toca el tablero durante un tiro de campo cuando el balón está en su trayectoria descendente?",
    options: [
      "Violación por interferencia, se conceden los puntos",
      "No es violación si no toca el balón",
      "Falta técnica al jugador"
    ],
    correctIndex: 0,
    explanation: "Se produce una violación por interferencia si un jugador toca el tablero o el cesto mientras el balón está en trayectoria descendente y tiene posibilidad de entrar.",
    category: "REGLAS GENERALES"
  }
];

export const IMAGES = {
  STITCH_REF: "https://i.postimg.cc/NfSjhQrm/unnamed.jpg",
  STITCH_BANNER: "https://images.unsplash.com/photo-1519861531473-9200362f46b3?q=80&w=800&auto=format&fit=crop",
  STITCH_CYBER: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
  FIBA_LOGO_ICON: "https://i.postimg.cc/CMk5JrJS/International_Basketball_Federation_Logo.png",
  ARBITRO_ICON: "https://i.postimg.cc/hj2JLSd5/unnamed.jpg"
};
