import { FIBA_RULEBOOK } from '../data/fibaRules';

const API_KEY = "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";
const SITE_URL = "https://zona-fiba.stackblitz.io";
const APP_NAME = "Zona FIBA App";

// --- MOTOR DE BÚSQUEDA RAG (Igual que en tu código React Native) ---
const findRelevantRules = (userQuery: string) => {
  if (!userQuery) return "";
  const lowerQuery = userQuery.toLowerCase();
  const keywords = lowerQuery.split(' ');

  // Palabras clave de "emergencia"
  if (lowerQuery.match(/golp|peg|agred|puñetazo|patada/)) keywords.push("violencia", "descalificante", "38");
  if (lowerQuery.match(/insult|grita|respeta|gesto/)) keywords.push("técnica", "comportamiento", "36");
  if (lowerQuery.match(/pasos|caminar|correr/)) keywords.push("avance", "ilegal", "25");
  if (lowerQuery.match(/campo atras|vuelve|zona trasera/)) keywords.push("pista", "trasera", "30");

  const relevant = FIBA_RULEBOOK.flatMap(chapter => chapter.articles)
    .map(art => {
      let score = 0;
      const content = art.content.toLowerCase();
      const title = art.title.toLowerCase();
      
      keywords.forEach(word => {
        if (word.length < 3) return;
        if (title.includes(word)) score += 10;
        if (content.includes(word)) score += 3;
        if (art.keywords?.includes(word)) score += 5;
      });

      return { article: art, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5) // Tomamos los 5 mejores
    .map(item => `DOCUMENTO OFICIAL [${item.article.title}]:\n"${item.article.content}"`);

  return relevant.join('\n\n');
};

export const getVirtualJudgeVerdict = async (description: string) => {
  const contextData = findRelevantRules(description);
  
  const systemInstruction = contextData 
    ? `Usa EXCLUSIVAMENTE la siguiente información extraída de la Base de Datos Oficial (Reglamento/OBRI) para responder:\n\n${contextData}`
    : `No se encontraron artículos específicos en la base de datos para esta búsqueda. Usa tu conocimiento general del Reglamento FIBA pero indícalo.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": SITE_URL,
        "X-Title": APP_NAME,
      },
      body: JSON.stringify({
        "model": "openai/gpt-4o-mini",
        "temperature": 0.1,
        "messages": [
          {
            "role": "system",
            "content": `Actúa como COMISARIO TÉCNICO FIBA.
            
            ${systemInstruction}

            ⚠️ PROTOCOLO DE RESPUESTA:
            1. Debes CITAR el Artículo u OBRI basándote estrictamente en el texto proporcionado arriba.
            2. Si el texto proporcionado contiene la regla, úsala.
            3. Usa terminología FIBA en Español.
            
            ESTRUCTURA (Responde en texto plano, NO uses JSON):
            🎯 VEREDICTO: [Falta/Violación exacta]
            📖 ANÁLISIS: [Explicación técnica citando la fuente proporcionada]
            ⚡ ACCIÓN: [Señalización arbitral]
            ⚖️ REANUDACIÓN: [Procedimiento exacto]`
          },
          { "role": "user", "content": description }
        ]
      })
    });

    if (!response.ok) throw new Error("Error en OpenRouter");
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Sin respuesta del Juez.";

  } catch (error) {
    console.error("Error IA:", error);
    return "📡 Error de conexión con el servidor de IA. Intenta de nuevo.";
  }
};