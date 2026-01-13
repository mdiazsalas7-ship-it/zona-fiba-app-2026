
import { GoogleGenAI, Type } from "@google/genai";
import { FIBA_RULEBOOK } from "../data/fibaRules";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getVirtualJudgeVerdict = async (description: string) => {
  const rulebookContext = FIBA_RULEBOOK.map(chapter => ({
    book: chapter.book,
    chapter: chapter.title,
    articles: chapter.articles.map(a => ({ id: a.id, title: a.title }))
  }));

  const systemInstruction = `
    Eres el "Árbitro Virtual FIBA", un sistema experto de arbitraje de baloncesto de élite para la aplicación ZONA FIBA.
    Tu objetivo es ayudar a jugadores, técnicos y fans a entender el reglamento de forma clara y técnica.
    
    Tu base de conocimientos incluye:
    1. REGLAMENTO OFICIAL FIBA 2024.
    2. OBRI (Interpretaciones Oficiales): Casos prácticos y aclaraciones críticas.
    3. MANUAL IOT: Mecánica y técnica individual de arbitraje.

    INSTRUCCIONES:
    - Analiza la jugada descrita por el usuario.
    - PRIORIZA el OBRI si la situación implica contacto, estados de balón o errores corregibles.
    - Proporciona un veredicto técnico pero comprensible.
    - Responde SIEMPRE en Español.
    - La respuesta DEBE ser un JSON con la estructura definida.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { text: systemInstruction },
        { text: `CONTEXTO DE REGLAS DISPONIBLES: ${JSON.stringify(rulebookContext)}` },
        { text: `JUGADA A ANALIZAR: "${description}"` }
      ],
      config: {
        temperature: 0.2,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            verdict: { type: Type.STRING, description: "Sentencia clara de la jugada." },
            ruleReference: { type: Type.STRING, description: "Artículo exacto (ej: Art. 37.1.1 OBRI)." },
            explanation: { type: Type.STRING, description: "Justificación técnica basada en la interpretación oficial." }
          },
          required: ["verdict", "ruleReference", "explanation"]
        }
      }
    });

    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Error en Árbitro Virtual:", error);
    throw error;
  }
};
