import { FIBA_RULEBOOK } from '../data/fibaRules';

// --- CONFIGURACIÓN DE SEGURIDAD HÍBRIDA ---
// 1. Intenta leer del archivo secreto (.env)
const ENV_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

// 2. Si no existe (como en el celular), usa esta de respaldo.
// PEGA TU CLAVE DENTRO DE LAS COMILLAS ABAJO ↓
const BACKUP_KEY = "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"; 

// Elegimos la que esté disponible
const API_KEY = ENV_KEY || BACKUP_KEY;

const SITE_URL = "https://zona-fiba.stackblitz.io";
const APP_NAME = "Zona FIBA App";

// --- MOTOR DE BÚSQUEDA RAG ---
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
    .slice(0, 5) 
    .map(item => `DOCUMENTO OFICIAL [${item.article.title}]:\n"${item.article.content}"`);

  return relevant.join('\n\n');
};

export const getVirtualJudgeVerdict = async (description: string) => {
  // --- DIAGNÓSTICO EN PANTALLA ---
  if (!API_KEY || API_KEY.includes("PON_TU_CLAVE")) {
    alert("⚠️ ERROR CRÍTICO: Falta la API Key.\nEdita 'src/services/openaiService.ts' y pon tu clave en BACKUP_KEY.");
    return "Error de configuración: Sin llave de acceso.";
  }

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

    if (!response.ok) {
       const errorData = await response.json().catch(() => ({}));
       console.error("Error OpenRouter:", errorData);
       
       if (response.status === 401) {
           alert("⛔ ERROR DE LLAVE EN EL MÓVIL: La clave no es válida o fue revocada.");
           return "Error 401: Clave inválida.";
       }
       if (response.status === 402) return "💸 SIN SALDO: Tu cuenta de OpenRouter se quedó sin crédito.";
       
       throw new Error(`Error API: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Sin respuesta del Juez.";

  } catch (error) {
    console.error("Error IA:", error);
    // Mensaje específico para móviles en Venezuela si fallan los DNS
    return "📡 Error de conexión. Si estás en Venezuela, prueba usando datos móviles en lugar de WiFi (o viceversa), a veces bloquean la conexión.";
  }
};