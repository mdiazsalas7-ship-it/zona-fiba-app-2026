
import { Question } from '../types';

export const QUIZ_POOL: Question[] = [
  {
    id: 1,
    text: "El jugador A1 está realizando un regate. Mientras el balón está en el aire entre botes, A1 da tres pasos antes de que el balón vuelva a tocar su mano. ¿Es esto una violación?",
    options: [
      "Sí, es una violación de pasos.",
      "No, es una acción legal.",
      "Depende de la dirección.",
      "Sí, es regate ilegal."
    ],
    correctIndex: 1,
    explanation: "No hay límite de pasos mientras el balón no está en contacto con la mano del jugador (durante el intervalo del bote)."
  },
  {
    id: 2,
    text: "Durante un saque de banda, A1 lanza el balón hacia la cancha y este golpea el aro directamente sin tocar a nadie. ¿Decisión?",
    options: [
      "Violación. Saque para B desde tiros libres.",
      "Violación. Saque para B desde el lugar original.",
      "Legal, el juego continúa.",
      "2 puntos si entra."
    ],
    correctIndex: 1,
    explanation: "El balón debe tocar a un jugador. Si toca el aro directamente, es violación y saca el rival desde el mismo punto."
  },
  {
    id: 3,
    text: "A1, sosteniendo el balón, cae al suelo y resbala un metro por la inercia. ¿Qué se pita?",
    options: [
      "Pasos.",
      "Técnica por simulación.",
      "Nada, es legal.",
      "Salto entre dos."
    ],
    correctIndex: 2,
    explanation: "Es legal caer y resbalar por el impulso. La violación de pasos ocurre si rueda o intenta levantarse con el balón."
  },
  {
    id: 4,
    text: "Quedan 0.2 segundos. A1 recibe un saque y realiza un tiro rápido (catch and shoot) que entra. ¿Vale la canasta?",
    options: [
      "Sí.",
      "No, se anula.",
      "Depende del árbitro.",
      "Solo vale 2 puntos."
    ],
    correctIndex: 1,
    explanation: "Se requiere un mínimo de 0.3 segundos para recibir y lanzar. Con 0.2 solo es válido un palmeo o mate."
  },
  {
    id: 5,
    text: "A4 comete su 5ª falta. ¿Cuánto tiempo tiene el entrenador para sustituirlo tras la notificación?",
    options: [
      "Inmediatamente.",
      "Máximo 30 segundos.",
      "60 segundos.",
      "Hasta que se reanude."
    ],
    correctIndex: 1,
    explanation: "El sustituto debe estar listo y el cambio completarse en un máximo de 30 segundos."
  },
  {
    id: 6,
    text: "El balón rebota en el aro y sube verticalmente. Estando completamente por encima del aro, B1 lo toca y lo aleja. ¿Es legal?",
    options: [
      "No, Interferencia.",
      "No, Interposición.",
      "Sí, es legal.",
      "Depende del tablero."
    ],
    correctIndex: 2,
    explanation: "Una vez que el balón toca el aro, cualquier jugador puede tocarlo legalmente, incluso si está por encima del cilindro."
  },
  {
    id: 7,
    text: "Equipo A con balón en pista trasera. Cuenta de 8s activa. El balón toca accidentalmente al árbitro en la línea central. ¿Cuenta de 8s?",
    options: [
      "Continúa.",
      "Se reinicia.",
      "Violación campo atrás.",
      "Pasa a delantera."
    ],
    correctIndex: 0,
    explanation: "Tocar al árbitro es como tocar el suelo. La línea central es parte de la trasera, así que la cuenta de 8 segundos continúa."
  },
  {
    id: 8,
    text: "Tiro libre de A1. B1 entra en la zona antes de tiempo. El tiro entra. ¿Decisión?",
    options: [
      "Repetir tiro.",
      "Punto válido, ignorar violación.",
      "Técnica a B1.",
      "Punto válido + 1 tiro."
    ],
    correctIndex: 1,
    explanation: "Si el tiro libre es exitoso, las violaciones de los defensores en los espacios de rebote se ignoran."
  },
  {
    id: 9,
    text: "A1 termina el regate, lanza el balón contra el tablero y lo vuelve a coger antes de que toque a nadie. ¿Es legal?",
    options: [
      "Violación de dobles.",
      "Es legal.",
      "Pasos.",
      "Violación de autopase."
    ],
    correctIndex: 1,
    explanation: "El lanzamiento voluntario contra el tablero se considera un tiro a canasta. El jugador puede coger su propio rebote."
  },
  {
    id: 10,
    text: "Canasta de campo del equipo A. B1 coge el balón para sacar de fondo. ¿Puede B1 moverse lateralmente?",
    options: [
      "No.",
      "Sí, libremente por la línea de fondo.",
      "Solo un paso.",
      "Sí, pero sin pasar."
    ],
    correctIndex: 1,
    explanation: "Después de una canasta de campo válida, el sacador puede moverse y pasar el balón a un compañero que también esté fuera."
  },
  {
    id: 11,
    text: "A1 realiza un pase picado. El balón golpea el puño cerrado de B1 de manera accidental (sin intención). ¿Es violación?",
    options: [
      "Sí, pie/puño.",
      "No, es legal.",
      "Salto entre dos.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "Golpear el balón con el puño debe ser deliberado para ser violación. Si es accidental, el juego continúa."
  },
  {
    id: 12,
    text: "Jugador A1 con balón en las manos. Toca el suelo con la rodilla. ¿Es violación?",
    options: [
      "Sí, pasos.",
      "No, es legal.",
      "Solo si se levanta.",
      "Falta técnica."
    ],
    correctIndex: 0,
    explanation: "Tocar el suelo con cualquier parte del cuerpo distinta de manos o pies mientras se sostiene el balón es violación de pasos."
  },
  {
    id: 13,
    text: "El reloj de lanzamiento suena. El balón está en el aire en un tiro. El balón no toca el aro y B1 controla el rebote.",
    options: [
      "Violación de 24s.",
      "Juego continúa.",
      "Salto entre dos.",
      "Saque para A."
    ],
    correctIndex: 0,
    explanation: "Si el balón no toca el aro y no entra, es violación de 24 segundos, aunque el rival coja el rebote (a menos que haya ventaja inmediata y clara)."
  },
  {
    id: 14,
    text: "Saque de banda. A1 tarda más de 5 segundos en soltar el balón.",
    options: [
      "Advertencia.",
      "Violación. Saque para B.",
      "Repetir saque.",
      "Técnica al entrenador."
    ],
    correctIndex: 1,
    explanation: "El jugador dispone de 5 segundos para desprenderse del balón en un saque. Superarlo es una violación."
  },
  {
    id: 15,
    text: "A1 está en acción de tiro. B1 comete falta. El balón sale de las manos de A1 y luego suena la bocina de final de cuarto. El balón entra.",
    options: [
      "Canasta válida.",
      "Canasta anulada.",
      "Depende del árbitro.",
      "Se repite el tiro."
    ],
    correctIndex: 0,
    explanation: "Si la falta ocurre durante la acción de tiro y el balón se suelta antes de la señal, la canasta cuenta si entra."
  },
  {
    id: 16,
    text: "El entrenador A pide un tiempo muerto después de que el árbitro le ha entregado el balón a A1 para el primer tiro libre.",
    options: [
      "Se concede.",
      "No se concede ahora.",
      "Técnica al entrenador.",
      "Solo si A1 falla."
    ],
    correctIndex: 1,
    explanation: "Una vez el balón está a disposición para el primer tiro libre, no se conceden tiempos muertos hasta que termine la serie (si hay canasta en el último)."
  },
  {
    id: 17,
    text: "A1 dribla y para. Luego, lanza el balón por encima de la cabeza del defensor B1 y lo recoge por el otro lado.",
    options: [
      "Legal.",
      "Dobles (Doble regate).",
      "Pasos.",
      "Falta de A1."
    ],
    correctIndex: 1,
    explanation: "Lanzar el balón al aire y volver a tocarlo antes de que toque el suelo, a otro jugador o el aro, se considera un segundo regate (dobles)."
  },
  {
    id: 18,
    text: "Un jugador defensor agarra el aro para evitar que vibre tras un mate fallado y así ayudar a coger el rebote.",
    options: [
      "Legal.",
      "Interferencia.",
      "Falta Técnica.",
      "Violación."
    ],
    correctIndex: 2,
    explanation: "Agarrar el aro para obtener una ventaja (como estabilizarlo o ganar posición) es una Falta Técnica."
  },
  {
    id: 19,
    text: "El equipo A tiene control en pista delantera. A1 pasa a A2, quien está en pista trasera. El balón toca la línea central antes de llegar a A2.",
    options: [
      "Juego sigue.",
      "Campo atrás.",
      "Fuera de banda.",
      "Salto."
    ],
    correctIndex: 1,
    explanation: "La línea central forma parte de la pista trasera. Al tocar la línea, el balón ha retornado ilegalmente a la pista trasera."
  },
  {
    id: 20,
    text: "En un rebote, A1 y B1 agarran el balón firmemente al mismo tiempo. Ninguno puede obtener el control sin brusquedad.",
    options: [
      "Falta de A1.",
      "Falta de B1.",
      "Balón retenido (Flecha).",
      "Saque para la defensa."
    ],
    correctIndex: 2,
    explanation: "Es la definición de balón retenido. Se resuelve mediante la posesión alterna."
  },
  {
    id: 21,
    text: "A1 realiza un mate y se cuelga del aro momentáneamente para no caer sobre un defensor que está debajo.",
    options: [
      "Técnica.",
      "Legal.",
      "Violación.",
      "Antideportiva."
    ],
    correctIndex: 1,
    explanation: "Es legal colgarse del aro si es para evitar una lesión propia o de otro jugador."
  },
  {
    id: 22,
    text: "Durante un tiro de campo, B1 toca el tablero violentamente, causando que el aro vibre y el balón (que estaba sobre el aro) se salga.",
    options: [
      "Juego sigue.",
      "Interferencia (Canasta válida).",
      "Técnica a B1.",
      "Saque para A."
    ],
    correctIndex: 1,
    explanation: "Si la vibración del aro causada por tocar el tablero impide que el balón entre, es interferencia. Se conceden los puntos."
  },
  {
    id: 23,
    text: "A1 tiene el balón para un saque. A2 se mueve fuera de la pista para recibir el pase de A1 (hand-off fuera de banda).",
    options: [
      "Legal.",
      "Violación.",
      "Técnica.",
      "Repetir saque."
    ],
    correctIndex: 1,
    explanation: "Durante un saque (excepto tras canasta), ningún otro jugador puede tener ninguna parte de su cuerpo fuera de las líneas limítrofes."
  },
  {
    id: 24,
    text: "A1 lanza un tiro libre que no toca el aro y cae al suelo.",
    options: [
      "Juego sigue.",
      "Violación. Saque para B.",
      "Salto entre dos.",
      "Repetir tiro."
    ],
    correctIndex: 1,
    explanation: "El tiro libre debe tocar el aro. Si no lo toca, es violación y el balón pasa al rival."
  },
  {
    id: 25,
    text: "B1 comete una falta antideportiva sobre A1. Es la segunda antideportiva de B1 en el partido.",
    options: [
      "Tiros y sigue jugando.",
      "Descalificación (GD).",
      "5 faltas personales.",
      "Advertencia."
    ],
    correctIndex: 1,
    explanation: "Un jugador sancionado con 2 faltas antideportivas es automáticamente descalificado del partido."
  },
  {
    id: 26,
    text: "El equipo A anota. B1 coge el balón para sacar y corre lateralmente por la línea de fondo antes de pasar.",
    options: [
      "Legal.",
      "Pasos.",
      "Violación de saque.",
      "Falta."
    ],
    correctIndex: 0,
    explanation: "Tras una canasta de campo, el sacador tiene derecho a moverse libremente a lo largo de la línea de fondo."
  },
  {
    id: 27,
    text: "A1 recibe el balón en movimiento, da dos pasos y se detiene (ritmo 1-2). ¿Puede pivotar?",
    options: [
      "Sí, con cualquier pie.",
      "Sí, con el primero que apoyó.",
      "No, no tiene pie de pivote.",
      "Sí, con el segundo."
    ],
    correctIndex: 2,
    explanation: "Si un jugador se detiene en dos tiempos (ritmo 1-2) tras recibir en movimiento, no tiene pie de pivote disponible para rotar. Moverse es pasos."
  },
  {
    id: 28,
    text: "El balón toca a un oficial de mesa que está sentado dentro del terreno de juego por error.",
    options: [
      "Juego sigue.",
      "Balón muerto. Salto.",
      "Técnica a la mesa.",
      "Saque para el equipo con control."
    ],
    correctIndex: 1,
    explanation: "Cualquier persona u objeto extraño que interfiera en el juego causa balón muerto. Se administra según posesión o salto."
  },
  {
    id: 29,
    text: "A1 en su pista trasera pasa a A2 en pista delantera. El balón toca el suelo en pista delantera y vuelve a pista trasera donde A1 lo recupera.",
    options: [
      "Juego sigue.",
      "Campo atrás.",
      "8 segundos continúan.",
      "Salto."
    ],
    correctIndex: 1,
    explanation: "El balón adquirió estatus de pista delantera al tocar el suelo allí. Al volver a trasera y ser tocado por A1, es violación de campo atrás."
  },
  {
    id: 30,
    text: "Durante un tiro libre, A1 hace una finta de lanzamiento antes de soltar el balón.",
    options: [
      "Legal.",
      "Violación. Se anula el tiro.",
      "Técnica.",
      "Repetir."
    ],
    correctIndex: 1,
    explanation: "El lanzador de tiros libres no puede fintar el tiro. Es una violación y el balón pasa al rival (o siguiente tiro)."
  },
  {
    id: 31,
    text: "Un jugador defensor grita fuerte bajo el aro para distraer al tirador en un lanzamiento de campo.",
    options: [
      "Legal.",
      "Técnica.",
      "Advertencia.",
      "Interferencia."
    ],
    correctIndex: 1,
    explanation: "Gritar, patear el suelo o aplaudir fuerte para desconcentrar al tirador es una Falta Técnica."
  },
  {
    id: 32,
    text: "A1 salta para tirar, es taponado por B1 (manos en el balón), y A1 cae al suelo con el balón aún en sus manos.",
    options: [
      "Salto entre dos.",
      "Pasos de A1.",
      "Falta de B1.",
      "Juego sigue."
    ],
    correctIndex: 1,
    explanation: "Saltar con el balón y caer al suelo sin haberlo soltado es violación de pasos, incluso si fue taponado pero no perdió el control."
  },
  {
    id: 33,
    text: "El equipo A tarda 9 segundos en pasar de su pista trasera a la delantera.",
    options: [
      "Violación de 8 segundos.",
      "Legal.",
      "Reset a 24.",
      "Técnica al entrenador."
    ],
    correctIndex: 0,
    explanation: "El equipo debe hacer llegar el balón a pista delantera en 8 segundos. 9 es violación."
  },
  {
    id: 34,
    text: "B1 golpea el balón con el pie intencionadamente.",
    options: [
      "Juego sigue.",
      "Violación de pie.",
      "Técnica.",
      "Antideportiva."
    ],
    correctIndex: 1,
    explanation: "Golpear el balón deliberadamente con el pie o pierna es violación. Saque para el rival con 14 o 24 segundos según zona."
  },
  {
    id: 35,
    text: "A1 tira. El balón se queda encajado entre el aro y el tablero.",
    options: [
      "Saque de fondo A.",
      "Saque de fondo B.",
      "Posesión alterna.",
      "Técnica."
    ],
    correctIndex: 2,
    explanation: "Balón encajado es situación de salto (balón retenido). Se usa la flecha de posesión."
  },
  {
    id: 36,
    text: "El entrenador A solicita un Challenge (IRS) por una falta personal normal pitada.",
    options: [
      "Se concede.",
      "No se concede.",
      "Solo en últimos 2 min.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "El Challenge no se puede usar para revisar si una falta personal normal existió o no. Solo para upgradear/downgrade (UF/DQ) o goaltending."
  },
  {
    id: 37,
    text: "A1 realiza un pase que golpea al árbitro (dentro del campo) y le llega a A2.",
    options: [
      "Legal, juego sigue.",
      "Balón muerto.",
      "Salto.",
      "Fuera de banda."
    ],
    correctIndex: 0,
    explanation: "El árbitro es parte del terreno de juego. Si le pega y sigue dentro, el juego continúa."
  },
  {
    id: 38,
    text: "Jugador A1 lleva una camiseta de compresión negra debajo del uniforme blanco. Sus compañeros no llevan.",
    options: [
      "Legal.",
      "Ilegal.",
      "Legal si no se ve.",
      "Depende de la liga."
    ],
    correctIndex: 1,
    explanation: "La ropa de compresión visible debe ser del mismo color sólido (blanco, negro o dominante) para TODOS los miembros del equipo."
  },
  {
    id: 39,
    text: "Final del 4º periodo. Empate. ¿Cómo empieza la prórroga?",
    options: [
      "Saque de posesión.",
      "Salto entre dos.",
      "Saque de banda.",
      "Tiros libres."
    ],
    correctIndex: 1,
    explanation: "Todas las prórrogas comienzan con un salto entre dos en el círculo central."
  },
  {
    id: 40,
    text: "A1 comete falta en ataque. El equipo B está en bonus.",
    options: [
      "Saque banda B.",
      "2 Tiros Libres B.",
      "1 y 1.",
      "Salto."
    ],
    correctIndex: 0,
    explanation: "Las faltas del equipo con control de balón (ofensivas) NUNCA se penalizan con tiros libres, aunque haya bonus."
  },
  {
    id: 41,
    text: "A1 salta a por un rebote ofensivo, lo palmea hacia el aro y entra.",
    options: [
      "2 puntos.",
      "3 puntos.",
      "Interferencia.",
      "Anulada."
    ],
    correctIndex: 0,
    explanation: "Un palmeo cuenta como 2 puntos (a menos que sea claramente un intento de 3, lo cual es raro en rebote)."
  },
  {
    id: 42,
    text: "A1 en el aire pasa de pista trasera a delantera. Pasa a A2 que está en pista trasera.",
    options: [
      "Campo atrás.",
      "Legal.",
      "Fuera.",
      "Salto."
    ],
    correctIndex: 1,
    explanation: "A1 saltó de trasera, mantiene estatus de trasera. El balón nunca tocó delantera. Es un pase legal en zona de defensa."
  },
  {
    id: 43,
    text: "Tiempo muerto. El entrenador entra a la pista para hablar con su equipo.",
    options: [
      "Legal (cerca del banco).",
      "Técnica.",
      "Advertencia.",
      "Descalificante."
    ],
    correctIndex: 0,
    explanation: "Durante un tiempo muerto, el entrenador puede entrar a pista siempre que se quede cerca de su zona de banco."
  },
  {
    id: 44,
    text: "B1 toca el balón en trayectoria descendente hacia el aro y completamente por encima del nivel del aro.",
    options: [
      "Interposición (Gol).",
      "Tapón legal.",
      "Interferencia.",
      "Salto."
    ],
    correctIndex: 0,
    explanation: "Es una Interposición (Goaltending). La canasta es válida y se otorgan los puntos."
  },
  {
    id: 45,
    text: "El equipo A tiene 6 jugadores en pista y anota. El árbitro se da cuenta antes del saque.",
    options: [
      "Anular canasta + Técnica A.",
      "Vale canasta + Técnica A.",
      "Anular + Saque B.",
      "Advertencia."
    ],
    correctIndex: 0,
    explanation: "Si anotan con 6, la canasta se anula. La penalización es una falta Técnica al Entrenador (B)."
  },
  {
    id: 46,
    text: "A1 tira un 'airball' (no toca aro). A1 corre y coge su propio rebote.",
    options: [
      "Violación (pasos/dobles).",
      "Legal.",
      "Sigue juego.",
      "Salto."
    ],
    correctIndex: 0,
    explanation: "Si el balón no toca el aro, el lanzador no puede ser el primero en tocarlo. Se considera inicio de nuevo drible (dobles) o pasos."
  },
  {
    id: 47,
    text: "B1 comete falta sobre A1. En el acta, A1 tiene 5 faltas por error.",
    options: [
      "Corregir error, A1 tira.",
      "A1 eliminado, tira sustituto.",
      "Técnica a la mesa.",
      "Anular todo."
    ],
    correctIndex: 0,
    explanation: "Es un error corregible. Si A1 no tenía 5 faltas reales, puede seguir jugando y tirar sus libres."
  },
  {
    id: 48,
    text: "Un espectador entra y toca el balón vivo.",
    options: [
      "Balón muerto. Árbitro decide.",
      "Técnica local.",
      "Sigue juego.",
      "Canasta válida."
    ],
    correctIndex: 0,
    explanation: "El árbitro debe parar el juego (balón muerto). Se administra según quien tenía el control o salto si nadie lo tenía."
  },
  {
    id: 49,
    text: "Definición de Falta Descalificante:",
    options: [
      "Acción flagrante antideportiva.",
      "Contacto duro.",
      "2 técnicas.",
      "Insulto leve."
    ],
    correctIndex: 0,
    explanation: "Cualquier infracción flagrante antideportiva se considera descalificante."
  },
  {
    id: 50,
    text: "Falta técnica al entrenador A (C1). Luego otra técnica (C1).",
    options: [
      "Descalificado.",
      "Sigue entrenando.",
      "Solo tiros.",
      "Advertencia final."
    ],
    correctIndex: 0,
    explanation: "Dos faltas técnicas personales ('C') al entrenador conllevan su descalificación automática."
  },
  {
    id: 51,
    text: "El jugador A1, enfadado por una decisión arbitral, lanza el balón con fuerza contra el suelo, haciendo que este rebote muy alto por encima de los tableros. ¿Qué sanción corresponde?",
    options: [
      "Falta Técnica.",
      "Advertencia.",
      "Falta Antideportiva.",
      "Nada, el balón sigue vivo."
    ],
    correctIndex: 0,
    explanation: "Lanzar el balón con fuerza contra el suelo en señal de protesta o frustración es una falta de conducta (Técnica)."
  },
  {
    id: 52,
    text: "B1 comete una falta personal sobre A1. A1, frustrado, empuja levemente a B1 con el pecho después del silbato. El árbitro considera que no es violento pero sí antideportivo.",
    options: [
      "Falta Técnica a A1.",
      "Falta Antideportiva a A1.",
      "Falta Descalificante a A1.",
      "Advertencia a ambos."
    ],
    correctIndex: 0,
    explanation: "El contacto con balón muerto que es antideportivo pero no excesivo se sanciona como Falta Técnica."
  },
  {
    id: 53,
    text: "El entrenador A abandona su zona de banco y entra en la pista para protestar una decisión arbitral, interfiriendo con el juego vivo.",
    options: [
      "Falta Técnica al Entrenador A.",
      "Descalificante directa.",
      "Advertencia.",
      "Saque de banda para B."
    ],
    correctIndex: 0,
    explanation: "Entrar en pista sin permiso e interferir es falta Técnica."
  },
  {
    id: 54,
    text: "A1 intercepta un pase y se dirige solo a canasta. B1 corre tras él y, sin intentar jugar el balón, cruza su pierna para hacer tropezar a A1 desde atrás. (Criterio C1/C2).",
    options: [
      "Falta Antideportiva.",
      "Falta Personal.",
      "Falta Técnica.",
      "Violación."
    ],
    correctIndex: 0,
    explanation: "Hacer tropezar intencionadamente sin jugar balón es Antideportiva (C1) y puede ser C2 (duro)."
  },
  {
    id: 55,
    text: "El jugador A1 insulta racista o discriminatoriamente a un oponente B1.",
    options: [
      "Falta Descalificante.",
      "Falta Técnica.",
      "Falta Antideportiva.",
      "Advertencia."
    ],
    correctIndex: 0,
    explanation: "Los insultos racistas o discriminatorios son flagrantes y conllevan descalificación inmediata."
  },
  {
    id: 56,
    text: "A1 comete una falta normal. El árbitro pita. A1, en desacuerdo, le da la espalda al árbitro y hace un gesto de desprecio con la mano ('vete de aquí').",
    options: [
      "Falta Técnica.",
      "Advertencia.",
      "Nada.",
      "Antideportiva."
    ],
    correctIndex: 0,
    explanation: "Los gestos de desprecio hacia los oficiales son falta Técnica."
  },
  {
    id: 57,
    text: "B1 agarra la camiseta de A1 para detener su avance en medio campo, lejos de la canasta y sin opción de jugar el balón.",
    options: [
      "Falta Antideportiva (C1).",
      "Falta Personal.",
      "Falta Técnica.",
      "Advertencia."
    ],
    correctIndex: 0,
    explanation: "Agarrar la camiseta sin opción de jugar balón es Criterio C1."
  },
  {
    id: 58,
    text: "Durante un tiro libre, el jugador B1 aplaude fuertemente justo al lado del oído del lanzador A1 para asustarlo.",
    options: [
      "Falta Técnica.",
      "Violación.",
      "Legal.",
      "Antideportiva."
    ],
    correctIndex: 0,
    explanation: "Acción antideportiva para desconcentrar o asustar."
  },
  {
    id: 59,
    text: "El jugador A1, tras ser sustituido, se sienta en el banquillo y patea las sillas publicitarias, derribándolas.",
    options: [
      "Falta Técnica al Entrenador A (tipo 'B').",
      "Falta Técnica al Jugador A1.",
      "Advertencia.",
      "Descalificante."
    ],
    correctIndex: 0,
    explanation: "A1 es ahora personal de banco. Sus acciones técnicas se cargan al entrenador como 'B'."
  },
  {
    id: 60,
    text: "A1 salta para tirar. B1 se mete debajo de él (fase de aterrizaje) sin intención de jugar el balón, provocando su caída peligrosa.",
    options: [
      "Falta Antideportiva (C2/C3).",
      "Falta Personal.",
      "Falta Técnica.",
      "Nada."
    ],
    correctIndex: 0,
    explanation: "Invadir el cilindro de aterrizaje de un tirador es peligroso. Si es imprudente, es Antideportiva."
  },
  {
    id: 61,
    text: "Se sanciona falta técnica a A1. Antes del tiro libre, A1 empuja a B1 (balón muerto). Se pita antideportiva a A1. ¿Es descalificado?",
    options: [
      "Sí (1 T + 1 U = GD).",
      "No, solo son 2 faltas.",
      "No, porque el balón estaba muerto.",
      "Sí, por agresión."
    ],
    correctIndex: 0,
    explanation: "La combinación de una Técnica y una Antideportiva descalifica al jugador."
  },
  {
    id: 62,
    text: "El jugador A1 finge haber recibido un golpe en la cara (cabezazo hacia atrás) para engañar al árbitro. El juego se detiene para revisar IRS y se ve que no hubo contacto.",
    options: [
      "Falta Técnica por simulación (Fake).",
      "Advertencia.",
      "Nada.",
      "Antideportiva."
    ],
    correctIndex: 0,
    explanation: "Si el juego se detiene para revisar una simulación y se confirma, se sanciona Técnica."
  },
  {
    id: 63,
    text: "El entrenador A ya tiene una técnica 'B' (banco). Ahora recibe una técnica 'C' (personal). ¿Es descalificado?",
    options: [
      "No.",
      "Sí.",
      "Sí, la 'C' es más grave.",
      "Depende del comisario."
    ],
    correctIndex: 0,
    explanation: "Para ser descalificado por acumulación necesita: 2 'C' O 3 técnicas totales (si hay 'B'). Tiene 1B + 1C = 2 totales. Sigue."
  },
  {
    id: 64,
    text: "A1 comete falta antideportiva sobre B1. Ambos equipos entran en penalización (bonus) con esta falta. ¿Qué se tira?",
    options: [
      "2 Tiros y posesión.",
      "2 Tiros y rebote (por bonus).",
      "1 y 1.",
      "Saque."
    ],
    correctIndex: 0,
    explanation: "La penalización de la Antideportiva es fija (2 tiros + banda), independientemente del bonus de faltas."
  },
  {
    id: 65,
    text: "B1 golpea intencionadamente el tablero para que vibre mientras el balón está en el aire en un tiro de A1. El balón entra.",
    options: [
      "Canasta válida y falta técnica a B1.",
      "Solo canasta válida.",
      "Interferencia solamente.",
      "Se anula y técnica."
    ],
    correctIndex: 0,
    explanation: "Si la acción es intencional para disturbar pero el balón entra (no interferencia), se da la canasta y se sanciona la conducta (Técnica)."
  },
  {
    id: 66,
    text: "A1 en defensa. B1 le supera. A1 golpea suavemente la mano de B1 sin balón para detener el reloj táctico. Es un golpe 'normal' de baloncesto.",
    options: [
      "Falta Personal.",
      "Falta Antideportiva.",
      "Falta Técnica.",
      "Nada."
    ],
    correctIndex: 0,
    explanation: "Si es un contacto de baloncesto leve y táctico, es Personal (a menos que sea C1/C2/C3)."
  },
  {
    id: 67,
    text: "Un jugador suplente B10 entra a la pista ilegalmente (sexto jugador) y participa en el juego tocando el balón.",
    options: [
      "Falta Técnica al Entrenador B (Tipo 'B').",
      "Falta Técnica al jugador B10.",
      "Violación y saque.",
      "Advertencia."
    ],
    correctIndex: 0,
    explanation: "La entrada ilegal de un sustituto se penaliza con Técnica al banquillo (Entrenador)."
  },
  {
    id: 68,
    text: "A1 se escapa solo (Clear Path). B1 intenta llegar al balón lanzándose, pero contacta las piernas de A1 provocando su caída.",
    options: [
      "Falta Antideportiva.",
      "Falta Personal.",
      "Descalificante.",
      "Nada, tocó balón."
    ],
    correctIndex: 0,
    explanation: "Aunque intente jugar el balón, el contacto ilegal por detrás/lateral en situación de Clear Path (C4) es Antideportiva."
  },
  {
    id: 69,
    text: "El jugador A1, molesto, le quita el balón de las manos al árbitro bruscamente durante una pausa.",
    options: [
      "Falta Técnica.",
      "Advertencia.",
      "Descalificante.",
      "Nada."
    ],
    correctIndex: 0,
    explanation: "Contacto físico no accidental y agresivo con un oficial es Técnica."
  },
  {
    id: 70,
    text: "B1 comete falta antideportiva sobre A1. A1, en reacción inmediata, empuja a B1 (Antideportiva). ¿Quién tira libres?",
    options: [
      "Nadie. Se cancelan las faltas.",
      "Ambos tiran.",
      "Solo A1.",
      "Solo B1."
    ],
    correctIndex: 0,
    explanation: "Misma categoría (U vs U), mismas penas (2+banda). Se cancelan. Se reanuda según posesión."
  },
  {
    id: 71,
    text: "A1 comete falta técnica. B1 tira el libre y falla. A1 se ríe y aplaude. El árbitro le pita otra técnica.",
    options: [
      "A1 es descalificado. B tira otro libre y posesión.",
      "A1 sigue jugando.",
      "Se cancela la primera.",
      "Advertencia."
    ],
    correctIndex: 0,
    explanation: "2ª Técnica = Descalificación. Se administra el tiro de la 2ª técnica + posesión por la descalificación (si aplica sustitución de pena) o simplemente el tiro y saque de la T."
  },
  {
    id: 72,
    text: "Un jugador defensor usa lenguaje abusivo contra un jugador atacante mientras el balón está vivo.",
    options: [
      "Falta Técnica.",
      "Falta Personal.",
      "Advertencia.",
      "Falta Antideportiva."
    ],
    correctIndex: 0,
    explanation: "Abuso verbal es Técnica."
  },
  {
    id: 73,
    text: "A1 comete una falta violenta (Descalificante). El árbitro pita. Después del pito, B1 golpea a A1 (Descalificante).",
    options: [
      "Se descalifica a ambos. Las penas se cancelan.",
      "Tiros para B, luego para A.",
      "Solo se va A1.",
      "Técnica a ambos."
    ],
    correctIndex: 0,
    explanation: "Ambos GD. Penas iguales (2+banda). Se cancelan. Salto o posesión."
  },
  {
    id: 74,
    text: "El entrenador pide VAR (IRS) por un fuera de banda. El árbitro no lo concede.",
    options: [
      "Correcto, el HCC no cubre fueras de banda (salvo en últimos 2 min por árbitros).",
      "Incorrecto, puede pedirlo.",
      "Técnica por pedirlo.",
      "Depende de si tiene Tiempos Muertos."
    ],
    correctIndex: 0,
    explanation: "El Challenge de entrenador solo es para Faltas (U/D), Goaltending o Identificación. No para outs (hasta el final y por árbitro)."
  },
  {
    id: 75,
    text: "A1 comete falta. Es su 5ª. Se enfada y patea el balón.",
    options: [
      "Falta Técnica al Entrenador A ('B').",
      "Falta Técnica a A1 (se anota como falta de jugador aunque tenga 5).",
      "Descalificante.",
      "Nada, ya está fuera."
    ],
    correctIndex: 0,
    explanation: "Un jugador con 5 faltas es considerado excluido. Sus técnicas posteriores van al entrenador como 'B' (pero cuenta para su expulsión total GD si aplica)."
  },
  {
    id: 76,
    text: "A1 machaca y rompe el tablero por colgarse agresivamente.",
    options: [
      "Falta Técnica.",
      "Falta Personal.",
      "Legal si es mate.",
      "Descalificante."
    ],
    correctIndex: 0,
    explanation: "Dañar el equipamiento por acción innecesaria es Técnica."
  },
  {
    id: 77,
    text: "Un jugador A1 se niega a salir del partido tras ser descalificado.",
    options: [
      "Falta Técnica al Entrenador A.",
      "Otra descalificante.",
      "Se suspende el partido.",
      "Advertencia."
    ],
    correctIndex: 0,
    explanation: "El retraso provocado por un miembro del equipo sancionado se carga al entrenador."
  },
  {
    id: 78,
    text: "A1 comete falta sobre B1 (acción de tiro, entra canasta). La falta es muy dura. El árbitro pita Antideportiva.",
    options: [
      "Canasta vale. 1 Tiro Libre para B1 y posesión B.",
      "Canasta vale. 2 Tiros Libres y posesión.",
      "Canasta anulada.",
      "Canasta vale. 1 Tiro Libre y rebote."
    ],
    correctIndex: 0,
    explanation: "Canasta válida + 1 tiro (por ser U en tiro encestado) + posesión."
  },
  {
    id: 79,
    text: "El balón está vivo. A1 golpea a B1 (Descalificante). B1, sangrando, no puede tirar.",
    options: [
      "Sustituto de B1 tira los libres.",
      "Capitán B tira.",
      "Entrenador B elige.",
      "Se pierden los tiros."
    ],
    correctIndex: 0,
    explanation: "Lesión obliga a cambio, el sustituto tira."
  },
  {
    id: 80,
    text: "Un jugador en el banquillo usa un silbato para confundir a los jugadores.",
    options: [
      "Falta Técnica al Entrenador ('B').",
      "Advertencia.",
      "Repetir jugada.",
      "Descalificante."
    ],
    correctIndex: 0,
    explanation: "Interferencia desde el banco es técnica al entrenador."
  },
  {
    id: 81,
    text: "A1 comete falta técnica. B1 tira el libre. B1 comete violación al tirar (pisa línea).",
    options: [
      "Se anula el tiro. Saque para B desde línea de saque.",
      "Se anula el tiro. Saque para A (posesión de la técnica continúa/o alterna según momento).",
      "Se repite el tiro.",
      "Salto."
    ],
    correctIndex: 0,
    explanation: "El tiro se pierde. Pero la posesión tras técnica es para el equipo lanzador. B saca."
  },
  {
    id: 82,
    text: "A1 comete falta antideportiva. El árbitro no la pita. En la siguiente pausa, el entrenador B pide Challenge.",
    options: [
      "No se puede revisar una falta no pitada.",
      "Sí, si fue violenta.",
      "Sí, siempre.",
      "Depende del tiempo."
    ],
    correctIndex: 0,
    explanation: "El Challenge solo revisa faltas PITADAS (para upgrade/downgrade). No puede crear una falta donde no se pitó nada."
  },
  {
    id: 83,
    text: "B1 comete falta técnica. Se administra el tiro libre. ¿Quién saca después?",
    options: [
      "El equipo que tenía el control del balón al momento de la falta.",
      "El equipo que tiró el libre.",
      "Salto entre dos.",
      "Siempre equipo B."
    ],
    correctIndex: 0,
    explanation: "La falta técnica (sin contacto) no cambia la posesión si el equipo A tenía balón. Se tira el libre y A saca."
  },
  {
    id: 84,
    text: "A1 agarra el aro y se impulsa para bloquear un tiro (Goaltending defensivo asistido).",
    options: [
      "Interferencia (Puntos) + Técnica.",
      "Solo Interferencia.",
      "Solo Técnica.",
      "Legal."
    ],
    correctIndex: 0,
    explanation: "Violación de interferencia (puntos) y Técnica por uso ilegal del equipamiento."
  },
  {
    id: 85,
    text: "A1 comete falta sobre B1. B1 reacciona empujando. El árbitro pita Antideportiva a B1.",
    options: [
      "Se administran ambas: Personal de A1 (saque/tiros) + Antideportiva de B1.",
      "Se cancelan.",
      "Solo la Antideportiva cuenta.",
      "Doble falta."
    ],
    correctIndex: 0,
    explanation: "No se cancelan porque no son de la misma categoría/gravedad. Se ejecutan en orden."
  },
  {
    id: 86,
    text: "Un jugador se levanta la camiseta tapándose la cara por frustración.",
    options: [
      "Falta Técnica.",
      "Advertencia.",
      "Nada.",
      "Antideportiva."
    ],
    correctIndex: 0,
    explanation: "Conducta antideportiva (uniforme)."
  },
  {
    id: 87,
    text: "A1 comete falta descalificante. El equipo A se queda con 4 jugadores (tenía 5). ¿Puede seguir?",
    options: [
      "Sí.",
      "No, pierde por incomparecencia.",
      "Sí, pero el capitán decide.",
      "No."
    ],
    correctIndex: 0,
    explanation: "Se puede jugar hasta con 2 jugadores."
  },
  {
    id: 88,
    text: "Durante un tiro libre, A1 insulta a B1.",
    options: [
      "Falta Técnica A1. Se completa el tiro libre (si hay) y luego se administra la T.",
      "Se anula el tiro libre y técnica.",
      "Descalificante.",
      "Advertencia."
    ],
    correctIndex: 0,
    explanation: "El juego no para si el tiro está en proceso. Se sanciona después."
  },
  {
    id: 89,
    text: "A1 comete una falta antideportiva. ¿Cuenta para las faltas de equipo del cuarto?",
    options: [
      "Sí.",
      "No.",
      "Solo si hay tiros.",
      "Depende del minuto."
    ],
    correctIndex: 0,
    explanation: "Todas las faltas de jugador (P, U, D, T) suman al equipo."
  },
  {
    id: 90,
    text: "El entrenador es descalificado. ¿Quién actúa en su lugar?",
    options: [
      "El entrenador ayudante inscrito en acta. Si no hay, el capitán.",
      "El capitán siempre.",
      "Cualquier persona del banco.",
      "El delegado."
    ],
    correctIndex: 0,
    explanation: "Orden de sucesión: Ayudante -> Capitán."
  },
  {
    id: 91,
    text: "A1 comete falta antideportiva sobre B1. B1 responde con un puñetazo (Descalificante).",
    options: [
      "Se sanciona U a A1 y D a B1. Se cancelan si las penas son iguales (improbable aquí). Se ejecutan en orden.",
      "Tiros para B, luego tiros para A.",
      "Solo expulsión.",
      "Doble falta."
    ],
    correctIndex: 0,
    explanation: "U (2 tiros+banda). D (2 tiros+banda). Son penas iguales. Se cancelan. B1 expulsado."
  },
  {
    id: 92,
    text: "Un jugador sangra. El árbitro le ordena salir. El jugador se niega y discute.",
    options: [
      "Falta Técnica.",
      "Se le deja jugar.",
      "Tiempo muerto técnico.",
      "Descalificante."
    ],
    correctIndex: 0,
    explanation: "Desobediencia y retraso."
  },
  {
    id: 93,
    text: "A1 comete 5 faltas. Sigue jugando y anota canasta. Se dan cuenta.",
    options: [
      "Se anula canasta si se descubre antes de que bola muera. Técnica al banquillo B (error mesa) o A si sabían.",
      "Vale canasta.",
      "Técnica a A1.",
      "Nada."
    ],
    correctIndex: 0,
    explanation: "Jugador excluido influye ilegalmente. Sanción administrativa."
  },
  {
    id: 94,
    text: "B1 comete falta antideportiva sobre A1. A1 falla ambos tiros. ¿Quién saca?",
    options: [
      "Equipo A en línea de saque delantera.",
      "Rebote.",
      "Salto.",
      "Equipo B."
    ],
    correctIndex: 0,
    explanation: "La posesión se mantiene para A tras los tiros, metan o fallen."
  },
  {
    id: 95,
    text: "A1 protesta una decisión y recibe técnica. En el siguiente tiempo muerto, sigue protestando.",
    options: [
      "Segunda técnica y Descalificación.",
      "Advertencia.",
      "Nada, es tiempo muerto.",
      "Técnica al entrenador."
    ],
    correctIndex: 0,
    explanation: "Reincidencia en conducta."
  },
  {
    id: 96,
    text: "B1 comete falta sobre A1. A1 lanza el balón a la cabeza de B1.",
    options: [
      "Falta Descalificante A1. Se administra personal de B1 y luego sanción de D.",
      "Solo Descalificante A1.",
      "Doble falta.",
      "Técnica A1."
    ],
    correctIndex: 0,
    explanation: "Agresión física directa es D. Se pitan ambas."
  },
  {
    id: 97,
    text: "El entrenador A se niega a dar el quinteto inicial a tiempo.",
    options: [
      "Falta Técnica administrativa (Entrenador).",
      "Pérdida del partido.",
      "Advertencia.",
      "Se espera."
    ],
    correctIndex: 1,
    explanation: "20-0 si no presentan equipo."
  },
  {
    id: 98,
    text: "A1 comete falta antideportiva. Es su 5ª falta personal.",
    options: [
      "Se anota como U. A1 es excluido (5 faltas). Tira el sustituto si hay lesión o el sustituto designado.",
      "Solo cuenta como 5ª personal.",
      "Descalificado.",
      "Tira A1 antes de irse."
    ],
    correctIndex: 0,
    explanation: "Cuenta como 5ª y como U."
  },
  {
    id: 99,
    text: "B1 comete falta técnica. ¿Cuenta para el bonus de equipo?",
    options: [
      "Sí, las técnicas de jugador suman.",
      "No, solo personales.",
      "Solo en los últimos 2 min.",
      "No."
    ],
    correctIndex: 0,
    explanation: "Todas las faltas de jugador suman al equipo."
  },
  {
    id: 100,
    text: "Definición de Falta Antideportiva (Criterio C3).",
    options: [
      "Contacto innecesario causado por un defensor para detener la progresión del equipo atacante en transición.",
      "Contacto duro.",
      "No jugar balón.",
      "Clear path."
    ],
    correctIndex: 0,
    explanation: "Definición exacta C3."
  },
  {
    id: 101,
    text: "El anotador notifica a los árbitros que el jugador A4 ha cometido su 5ª falta. El jugador A4 se molesta y verbalmente insulta al anotador.",
    options: [
      "Falta Técnica a A4 (se anota como falta de jugador).",
      "Falta Técnica al banquillo A (tipo 'B').",
      "Falta Descalificante a A4.",
      "Advertencia."
    ],
    correctIndex: 2,
    explanation: "Como A4 ya tiene 5 faltas, técnicamente está excluido. Sin embargo, un insulto directo a un oficial de mesa se considera una falta Descalificante, que se anota en el acta al entrenador como 'B2' (aunque la sanción es la expulsión de A4)."
  },
  {
    id: 102,
    text: "Durante un tiro libre, el jugador B1 (en el pasillo de rebote) desconcierta al lanzador A1 agitando los brazos. El tiro libre entra.",
    options: [
      "Se anula el tiro y se repite.",
      "El tiro es válido y se ignora la violación.",
      "El tiro es válido y se sanciona técnica a B1.",
      "Se repite el tiro aunque haya entrado."
    ],
    correctIndex: 1,
    explanation: "Si la violación es cometida por un defensor y el tiro libre entra, la violación se ignora y el punto vale. Solo se repite si falla."
  },
  {
    id: 103,
    text: "Todo el equipo A lleva mangas de compresión blancas, excepto A5 que lleva una manga negra.",
    options: [
      "Legal.",
      "Ilegal, A5 debe quitársela.",
      "Técnica al entrenador A.",
      "Legal si no se ve mucho."
    ],
    correctIndex: 1,
    explanation: "Todos los accesorios de compresión de brazos y piernas del equipo deben ser del mismo color sólido."
  },
  {
    id: 104,
    text: "El operador del reloj de lanzamiento (24s) detiene el reloj por error cuando el equipo A está atacando. El juego se detiene.",
    options: [
      "Posesión alterna.",
      "Saque para el equipo A con nueva cuenta de 24.",
      "Saque para el equipo A con el tiempo restante de posesión.",
      "Técnica al operador."
    ],
    correctIndex: 2,
    explanation: "Si el juego se detiene por error de la mesa y no hay cambio de posesión, el equipo A mantiene el balón con el tiempo que restaba."
  },
  {
    id: 105,
    text: "A1 va a lanzar 2 tiros libres. Por error, el árbitro le concede 3. A1 anota los 3. El error se descubre antes de que el balón vuelva a estar vivo.",
    options: [
      "Se anulan los 3 puntos y se repiten 2 tiros.",
      "Se anula el último punto (el 3ro).",
      "Valen los 3 puntos.",
      "Se cancela todo."
    ],
    correctIndex: 1,
    explanation: "Es un error corregible. Se cancela el punto del tiro libre indebido (el último) y el juego se reanuda como si ese tiro no hubiera existido."
  },
  {
    id: 106,
    text: "El cronometrador hace sonar la señal de final de partido mientras A1 está en acción de tiro. El balón sale de las manos, entra, y luego se comete una falta sobre A1.",
    options: [
      "Canasta válida y la falta se ignora (salvo flagrante).",
      "Canasta válida y tiro libre adicional.",
      "Se anula la canasta.",
      "Prórroga."
    ],
    correctIndex: 0,
    explanation: "Si el tiempo expira, la falta personal ordinaria cometida *después* o simultáneamente a la señal se ignora, a menos que sea Antideportiva o Descalificante."
  },
  {
    id: 107,
    text: "A1 lleva el número 0 y A2 lleva el número 00. ¿Es legal?",
    options: [
      "No, deben elegir uno.",
      "Sí, son números distintos.",
      "Solo en ligas locales.",
      "No, el 00 no existe."
    ],
    correctIndex: 1,
    explanation: "En FIBA, el número '0' y el '00' son legales y se consideran números diferentes en el mismo equipo."
  },
  {
    id: 108,
    text: "Tiro libre de A1. El balón no toca el aro. La flecha de posesión alterna favorece al equipo A.",
    options: [
      "Saque para el equipo A (por la flecha).",
      "Saque para el equipo B (por la violación).",
      "Salto entre dos.",
      "Repetir tiro."
    ],
    correctIndex: 1,
    explanation: "Que el último tiro libre no toque el aro es una violación de tiro libre. La violación tiene prioridad sobre la situación de salto. El balón pasa al equipo B."
  },
  {
    id: 109,
    text: "El entrenador A pide sustitución. El balón muere por una falta sancionada al equipo B. El árbitro tarda en comunicar la falta.",
    options: [
      "La sustitución se concede.",
      "Ya es tarde para sustituir.",
      "Solo si el equipo B también cambia.",
      "Depende del cronometrador."
    ],
    correctIndex: 0,
    explanation: "La oportunidad de sustitución comienza cuando el balón está muerto y el reloj parado. Se concede."
  },
  {
    id: 110,
    text: "A1 está lanzando un tiro libre. A2 y B2 entran en la zona restringida simultáneamente antes de que el balón salga de las manos. El tiro no entra.",
    options: [
      "Saque para B.",
      "Saque para A.",
      "Salto entre dos.",
      "Se repite el tiro libre."
    ],
    correctIndex: 2,
    explanation: "Es una violación doble de tiro libre. La situación de salto se aplica y se usa la flecha de posesión alterna."
  },
  {
    id: 111,
    text: "El anotador comete un error y le da 2 puntos al equipo B en lugar de al A. El error se descubre en el descanso.",
    options: [
      "No se puede corregir, el acta está cerrada.",
      "Se corrige inmediatamente.",
      "El árbitro principal decide al final.",
      "Se juega la segunda mitad con el error."
    ],
    correctIndex: 1,
    explanation: "Los errores de tanteo y cronometraje pueden corregirse en cualquier momento antes de que el árbitro principal firme el acta al final del partido."
  },
  {
    id: 112,
    text: "Un jugador usa una camiseta interior que sobresale por debajo de la camiseta de juego.",
    options: [
      "Legal.",
      "Ilegal, debe ir por dentro.",
      "Técnica.",
      "Advertencia."
    ],
    correctIndex: 1,
    explanation: "La camiseta interior no debe sobresalir por debajo de la camiseta de juego."
  },
  {
    id: 113,
    text: "A1 va a sacar de banda. El árbitro le entrega el balón. A1 dice que no quiere sacar y le pide al árbitro que toque el balón de nuevo.",
    options: [
      "El árbitro accede.",
      "Cuenta de 5 segundos sigue corriendo.",
      "Advertencia por demora.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "La cuenta de 5 segundos comienza en cuanto el balón está a disposición del jugador. No se reinicia porque el jugador quiera cambiar o recolocarse."
  },
  {
    id: 114,
    text: "Tiro libre. El lanzador A1 tarda 6 segundos en lanzar.",
    options: [
      "Legal.",
      "Violación. Tiro anulado.",
      "Advertencia.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "El lanzador tiene 5 segundos para soltar el balón desde que está a su disposición."
  },
  {
    id: 115,
    text: "El cronometrador inicia el reloj cuando el balón toca al primer jugador en pista tras un salto entre dos. ¿Correcto?",
    options: [
      "Sí.",
      "No, debe ser cuando el árbitro lo lance.",
      "No, cuando lo toque el segundo jugador.",
      "Depende de quién gane el salto."
    ],
    correctIndex: 0,
    explanation: "El reloj de partido se inicia cuando el balón es tocado legalmente por un saltador."
  },
  {
    id: 116,
    text: "Equipo A pide tiempo muerto. Se concede. Al sonar la señal de fin de tiempo muerto (50s), el equipo A sigue en el banco.",
    options: [
      "Se espera a que salgan.",
      "El equipo A debe estar listo para jugar o se le sanciona.",
      "Se carga otro tiempo muerto.",
      "El capitán decide."
    ],
    correctIndex: 1,
    explanation: "Los equipos deben volver a la pista tras la señal de aviso. Retrasar el juego tras un TM puede ser sancionado (advertencia/técnica)."
  },
  {
    id: 117,
    text: "Jugador A1 lleva zapatillas de colores diferentes (una roja, una azul).",
    options: [
      "Ilegal.",
      "Legal.",
      "Técnica.",
      "Debe cambiarlas."
    ],
    correctIndex: 1,
    explanation: "Las reglas actuales de FIBA permiten cualquier combinación de colores en las zapatillas (izquierda/derecha pueden ser diferentes)."
  },
  {
    id: 118,
    text: "Durante un tiro libre de A1, B1 desconcierta verbalmente al tirador. A1 falla.",
    options: [
      "Técnica a B1 directamente.",
      "Se repite el tiro libre (tiro sustitutorio) y se advierte/sanciona a B1.",
      "Saque para A.",
      "Juego sigue."
    ],
    correctIndex: 1,
    explanation: "La violación causa que se repita el tiro. La conducta antideportiva verbal conlleva una Técnica adicional."
  },
  {
    id: 119,
    text: "El operador de 24s no resetea el reloj tras un tiro que toca el aro. El equipo B controla el rebote y el reloj sigue en 1s y suena.",
    options: [
      "Violación de B.",
      "Error de mesa. Se para, se corrige y posesión B.",
      "Salto entre dos.",
      "Sigue el juego."
    ],
    correctIndex: 1,
    explanation: "Es un error del operador. El árbitro debe parar el juego (si no hay desventaja), corregir el reloj y devolver el balón a B."
  },
  {
    id: 120,
    text: "A1 lanza el último tiro libre. El balón toca el aro y A1 corre y lo toca antes que nadie.",
    options: [
      "Legal.",
      "Violación de A1.",
      "Interferencia.",
      "Auto-rebote."
    ],
    correctIndex: 0,
    explanation: "El lanzador puede tocar el balón en cuanto ha tocado el aro. Es un rebote legal."
  },
  {
    id: 121,
    text: "El entrenador B pide Challenge para revisar si un fuera de banda tocó en A or en B. Quedan 5 minutos del 2º cuarto.",
    options: [
      "Se concede.",
      "No se concede (no revisable por HCC).",
      "Técnica.",
      "Se concede si es dudoso."
    ],
    correctIndex: 1,
    explanation: "El Head Coach Challenge NO se puede usar para revisar fueras de banda. Eso es competencia exclusiva de los árbitros en los últimos 2 minutos del 4º cuarto."
  },
  {
    id: 122,
    text: "El acta oficial se daña o es ilegible durante el partido.",
    options: [
      "Se suspende el partido.",
      "Se sustituye por una nueva y se intenta reconstruir.",
      "Se usa el marcador electrónico como oficial.",
      "El comisario decide el ganador."
    ],
    correctIndex: 1,
    explanation: "El primer árbitro debe decidir cómo proceder, normalmente transcribiendo a una nueva acta con ayuda del histórico."
  },
  {
    id: 123,
    text: "Un jugador lleva un protector de nariz (máscara) negro.",
    options: [
      "Legal.",
      "Ilegal, debe ser transparente.",
      "Ilegal, debe ser del color del uniforme.",
      "Solo con certificado médico."
    ],
    correctIndex: 1,
    explanation: "Las máscaras faciales deben ser transparentes. No se permiten de colores sólidos o negras."
  },
  {
    id: 124,
    text: "El equipo A encesta. El jugador A1 toca el balón intencionadamente para retrasar el saque de B1. Es la primera vez.",
    options: [
      "Falta Técnica.",
      "Advertencia de retraso de juego al equipo A.",
      "Advertencia al jugador A1.",
      "Nada."
    ],
    correctIndex: 1,
    explanation: "Interferir con el balón tras canasta es una violación de retraso de juego. Se da una advertencia al equipo. Si se repite, es Técnica."
  },
  {
    id: 125,
    text: "Tiro libre. A1 hace el gesto de tirar pero no suelta el balón (finta).",
    options: [
      "Legal.",
      "Violación. Se anula el tiro.",
      "Se repite.",
      "Advertencia."
    ],
    correctIndex: 1,
    explanation: "Fintar el tiro libre es una violación. El balón pasa al oponente."
  },
  {
    id: 126,
    text: "El balón se incrusta en el soporte de la canasta durante el juego. La flecha favorece al equipo que atacaba.",
    options: [
      "Saque de fondo con 24s.",
      "Saque de fondo con 14s.",
      "Saque de banda con 14s.",
      "Salto entre dos real."
    ],
    correctIndex: 1,
    explanation: "Si el equipo atacante mantiene la posesión por la flecha tras balón retenido, solo tiene 14 segundos (o el tiempo restante si es menor)."
  },
  {
    id: 127,
    text: "El ayudante de anotador maneja el marcador. Hay una discrepancia entre el marcador y el acta.",
    options: [
      "Vale el marcador.",
      "Vale el acta.",
      "Se juega de nuevo.",
      "Deciden los capitanes."
    ],
    correctIndex: 1,
    explanation: "El acta oficial (planilla) siempre prevalece sobre el marcador electrónico."
  },
  {
    id: 128,
    text: "A1 lleva muñequeras de tela. ¿Dónde debe llevarlas?",
    options: [
      "En cualquier parte del brazo.",
      "Solo en la muñeca.",
      "Cerca del codo.",
      "Prohibidas."
    ],
    correctIndex: 1,
    explanation: "Las muñequeras deben llevarse en la muñeca y deben ser de un máximo de 10cm de ancho."
  },
  {
    id: 129,
    text: "A1 va a tirar un libre. El árbitro le da el balón. A1 bota el balón 15 veces antes de tirar.",
    options: [
      "Violación de 5s (si supera el tiempo).",
      "Técnica por retraso.",
      "Legal siempre.",
      "Máximo 3 botes."
    ],
    correctIndex: 0,
    explanation: "No hay límite de botes, pero sí de tiempo (5 segundos). Si bota 15 veces, probablemente exceda los 5 segundos."
  },
  {
    id: 130,
    text: "El anotador levanta la paleta de faltas con el número 4. El jugador en realidad tiene 3.",
    options: [
      "Error corregible.",
      "Falta técnica a la mesa.",
      "Se queda con 4.",
      "El entrenador elige."
    ],
    correctIndex: 0,
    explanation: "Es un error de la mesa que debe corregirse en cuanto se descubra consultando el acta."
  },
  {
    id: 131,
    text: "Sustitución: A6 va a entrar por A1. A1 está lanzando tiros libres. A1 anota el último.",
    options: [
      "Cambio permitido.",
      "Cambio no permitido hasta que el reloj corra.",
      "Solo si B también cambia.",
      "Cambio permitido solo para el tirador."
    ],
    correctIndex: 0,
    explanation: "Se puede conceder la sustitución a cualquier equipo después de que el último tiro libre entra (balón muerto)."
  },
  {
    id: 132,
    text: "El equipo A solicita tiempo muerto. Se concede. El entrenador A decide que no lo quiere.",
    options: [
      "Se cancela.",
      "No se puede cancelar una vez concedido.",
      "Se carga medio tiempo.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "Una vez que el árbitro hace sonar el silbato y hace la señal de tiempo muerto, no se puede retirar la solicitud. El TM corre."
  },
  {
    id: 133,
    text: "A1 lleva el número 99. ¿Es legal?",
    options: [
      "No, máximo 00.",
      "Sí, del 1 al 99.",
      "Sí, del 0 al 99.",
      "No, máximo 15."
    ],
    correctIndex: 2,
    explanation: "FIBA permite los números 0, 00 y del 1 al 99."
  },
  {
    id: 134,
    text: "Error de reloj: El partido termina, pero el árbitro se da cuenta de que el reloj corrió 2 segundos extra tras un silbato.",
    options: [
      "El partido terminó.",
      "Los árbitros pueden corregir el tiempo y jugar esos 2 segundos.",
      "Solo si afecta al resultado.",
      "Técnica al cronometrador."
    ],
    correctIndex: 1,
    explanation: "El árbitro principal tiene autoridad para corregir el reloj de partido antes de firmar el acta."
  },
  {
    id: 135,
    text: "Tiro libre A1. El balón toca el aro y entra, pero A1 pisó la línea de tiros libres tras soltar el balón pero antes de que tocara el aro.",
    options: [
      "Punto válido.",
      "Violación, punto anulado.",
      "Repetir.",
      "Depende del rebote."
    ],
    correctIndex: 1,
    explanation: "El tirador no puede pisar la línea de tiros libres ni entrar en la zona restringida hasta que el balón toque el aro."
  },
  {
    id: 136,
    text: "El operador de 24s deja el reloj vacío (apagado) cuando quedan menos de 24s de partido y posesión nueva.",
    options: [
      "Correcto.",
      "Incorrecto, debe mostrar décimas.",
      "Incorrecto, debe mostrar 24.",
      "Da igual."
    ],
    correctIndex: 0,
    explanation: "Si el tiempo de juego restante es menor que el de posesión, el reloj de tiro debe apagarse."
  },
  {
    id: 137,
    text: "Un jugador sangra en el calentamiento. ¿Puede empezar el partido?",
    options: [
      "Sí, si se tapa.",
      "No, debe ser curado o sustituido en el quinteto inicial.",
      "Sí, pero con técnica.",
      "El partido se retrasa."
    ],
    correctIndex: 1,
    explanation: "Un jugador con sangre no puede empezar. Debe ser sustituido en el cinco inicial (sin sanción) o curado inmediatamente."
  },
  {
    id: 138,
    text: "El equipo A quiere cambiar al tirador de tiros libres A1 porque 'está cansado'.",
    options: [
      "Permitido.",
      "No permitido (salvo lesión).",
      "Permitido con Tiempo Muerto.",
      "Permitido si B acepta."
    ],
    correctIndex: 1,
    explanation: "El tirador de tiros libres no puede ser sustituido a menos que esté lesionado o descalificado."
  },
  {
    id: 139,
    text: "Mesa técnica: ¿Cuándo debe sonar la señal de falta de jugador?",
    options: [
      "Inmediatamente tras el pito.",
      "Después de que el árbitro reporte la falta.",
      "Nunca.",
      "Cuando el jugador levante la mano."
    ],
    correctIndex: 1,
    explanation: "El anotador levanta la paleta de faltas después de que el árbitro ha terminado de reportar la falta a la mesa."
  },
  {
    id: 140,
    text: "A1 lleva una camiseta con mangas cortas. ¿Es legal?",
    options: [
      "Sí, si termina por encima del codo.",
      "No, deben ser sin mangas (tirantes).",
      "Sí, si es ajustada.",
      "Depende del color."
    ],
    correctIndex: 1,
    explanation: "Las camisetas de juego deben ser sin mangas. No se permiten camisetas con mangas (estilo fútbol) a menos que sea ropa de compresión debajo."
  },
  {
    id: 141,
    text: "Error corregible: Se conceden 2 tiros a A1, pero eran para A2. A1 anota ambos. Se descubre después.",
    options: [
      "Se anulan y A2 tira.",
      "Se anulan y saque para B (posesión cancelada).",
      "Valen.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "Si tira el jugador equivocado, los puntos se cancelan y el balón se otorga a los oponentes (se pierde la posesión)."
  },
  {
    id: 142,
    text: "El árbitro pita falta. El reloj de partido sigue corriendo 3 segundos. El cronometrador no lo para.",
    options: [
      "El árbitro principal debe corregir el tiempo consumido.",
      "Se juega así.",
      "Tiempo muerto administrativo.",
      "Se resta al final."
    ],
    correctIndex: 0,
    explanation: "El árbitro debe hacer ajustar el reloj al momento exacto en que se pitó la falta."
  },
  {
    id: 143,
    text: "Último tiro libre. El balón no toca el aro. ¿Quién saca?",
    options: [
      "Saque de banda B (prolongación TL).",
      "Saque de fondo B.",
      "Salto.",
      "Saque de banda A."
    ],
    correctIndex: 0,
    explanation: "Es una violación. El balón se otorga a los oponentes para un saque de banda a la altura de la línea de tiros libres."
  },
  {
    id: 144,
    text: "El comisario observa un error de anotación. ¿Cuándo interviene?",
    options: [
      "Inmediatamente parando el juego.",
      "En la siguiente bola muerta.",
      "Al final del cuarto.",
      "Nunca."
    ],
    correctIndex: 1,
    explanation: "El comisario no debe interrumpir el juego vivo. Debe esperar a la primera bola muerta para corregir a la mesa."
  },
  {
    id: 145,
    text: "Jugador A1 se lesiona. El entrenador entra a atenderle. A1 se recupera en 30 segundos. ¿Puede seguir?",
    options: [
      "Sí.",
      "No, debe ser sustituido.",
      "Sí, si pide tiempo muerto.",
      "Sí, si el árbitro lo permite."
    ],
    correctIndex: 2,
    explanation: "Si el entrenador entra o el árbitro para el juego por lesión, el jugador debe ser sustituido, A MENOS que el equipo pida un Tiempo Muerto y se recupere en ese lapso."
  },
  {
    id: 146,
    text: "B1 mueve las manos delante de los ojos de A1 (face guarding) sin contacto.",
    options: [
      "Legal.",
      "Falta Técnica.",
      "Advertencia.",
      "Personal."
    ],
    correctIndex: 1,
    explanation: "Obstruir la visión del oponente agitando las manos cerca de los ojos es una Falta Técnica."
  },
  {
    id: 147,
    text: "Un jugador sale de la pista para evitar una pantalla y vuelve a entrar.",
    options: [
      "Legal.",
      "Violación (salir del campo).",
      "Técnica.",
      "Falta."
    ],
    correctIndex: 1,
    explanation: "Salir voluntariamente del terreno de juego para obtener ventaja es una violación."
  },
  {
    id: 148,
    text: "En un saque, A1 pasa el balón a A2 para que este se lo devuelva (pared) y A1 pisa dentro y fuera. ¿Legal?",
    options: [
      "Sí.",
      "No, A1 no puede ser el primero en tocarlo.",
      "Sí, si A2 está dentro.",
      "Depende."
    ],
    correctIndex: 2,
    explanation: "El sacador no puede tocar el balón en pista hasta que haya tocado a otro jugador. Si A2 lo toca, A1 ya puede recibirlo legalmente dentro."
  },
  {
    id: 149,
    text: "El equipo A anota. B1 coge el balón y lo pasa a B2 que está fuera de banda en la línea de fondo.",
    options: [
      "Violación.",
      "Legal.",
      "Técnica.",
      "5 segundos."
    ],
    correctIndex: 1,
    explanation: "Tras canasta, se permite pasar el balón entre compañeros que estén fuera de la línea de fondo antes de sacar."
  },
  {
    id: 150,
    text: "¿Quién es el responsable de firmar el acta al final del partido para validarlo?",
    options: [
      "El anotador.",
      "El comisario.",
      "El árbitro principal (Crew Chief).",
      "Todos los árbitros."
    ],
    correctIndex: 2,
    explanation: "La firma del Árbitro Principal (Crew Chief) es la que cierra y valida oficialmente el acta y el partido."
  },
  {
    id: 151,
    text: "El jugador A1 lleva una cinta en la cabeza (headband) de color rojo. Su compañero A2 lleva una muñequera de color negro. ¿Es legal esta combinación?",
    options: [
      "Sí, son accesorios diferentes.",
      "No, todos los accesorios de compresión y cabeza deben ser del mismo color sólido para todo el equipo.",
      "Sí, si el uniforme tiene ambos colores.",
      "Depende de la liga."
    ],
    correctIndex: 1,
    explanation: "Todos los accesorios del equipo (brazos, piernas, cabeza, muñecas) deben ser del mismo color sólido."
  },
  {
    id: 152,
    text: "El anotador se da cuenta de que el jugador A1 ha anotado una canasta, pero por error se la sumó al jugador A2. ¿Cuándo debe avisar a los árbitros?",
    options: [
      "Inmediatamente, haciendo sonar la bocina.",
      "En el siguiente tiempo muerto o intervalo de juego.",
      "Al final del partido.",
      "En la primera bola muerta en la que el reloj esté parado."
    ],
    correctIndex: 3,
    explanation: "El anotador debe esperar a la primera bola muerta con el reloj parado para llamar la atención de los árbitros y corregir el error."
  },
  {
    id: 153,
    text: "A1 dispone de 2 tiros libres. Lanza el primero y entra. Antes de que el árbitro le dé el balón para el segundo, B1 solicita una sustitución. ¿Se concede?",
    options: [
      "Sí, se concede a ambos equipos.",
      "No, debe esperar a que termine el último tiro.",
      "Solo si A1 anota el segundo.",
      "Solo se concede al equipo A."
    ],
    correctIndex: 1,
    explanation: "Se puede conceder sustitución a cualquiera de los equipos si se solicita antes de que el balón esté a disposición del lanzador para el último tiro libre (o después de que este entre)."
  },
  {
    id: 154,
    text: "Durante un tiro libre, el jugador B1 que ocupa el primer espacio de rebote desconcierta al lanzador A1 agitando los brazos. El tiro libre entra.",
    options: [
      "Se anula el tiro y se repite.",
      "El tiro es válido y se ignora la violación.",
      "El tiro es válido y se sanciona técnica a B1.",
      "Se repite el tiro aunque haya entrado."
    ],
    correctIndex: 2,
    explanation: "Si un defensor comete una violación durante un tiro libre y el tiro se falla, se concede un nuevo tiro libre al lanzador (tiro sustitutorio)."
  },
  {
    id: 155,
    text: "El operador de 24 segundos reinicia el reloj a 14 segundos por error cuando el equipo A mantiene el control en pista delantera tras una falta (sin saque). Debería haber seguido la cuenta. ¿Qué hacen los árbitros?",
    options: [
      "Paran el juego inmediatamente, corrigen el reloj y devuelven la posesión a A.",
      "Dejan seguir el juego si no hay desventaja para el rival.",
      "Técnica a la mesa.",
      "Salto entre dos."
    ],
    correctIndex: 0,
    explanation: "Si el reloj de tiro se reinicia por error, el árbitro debe detener el juego (si no pone en desventaja a nadie), corregir el tiempo y reanudar."
  },
  {
    id: 156,
    text: "El jugador A1 sangra por la nariz. El árbitro le ordena que se retire para ser atendido. El entrenador A pide un Tiempo Muerto. Al finalizar el tiempo muerto, A1 ya no sangra. ¿Puede seguir jugando?",
    options: [
      "No, debe ser sustituido obligatoriamente.",
      "Sí, puede continuar en el partido.",
      "Solo si el otro equipo está de acuerdo.",
      "Sí, pero con una advertencia."
    ],
    correctIndex: 1,
    explanation: "Si un jugador lesionado (o con sangre) se recupera durante un tiempo muerto solicitado por cualquiera de los equipos, puede continuar jugando."
  },
  {
    id: 157,
    text: "A1 lanza el último tiro libre. El balón golpea el aro y sale rebotado. Antes de que toque a nadie, A1 pisa la línea de tiros libres para ir al rebote.",
    options: [
      "Legal.",
      "Violación. El balón se otorga a B para saque de banda.",
      "Interferencia.",
      "Salto entre dos."
    ],
    correctIndex: 0,
    explanation: "El lanzador puede cruzar la línea de tiros libres en cuanto el balón ha tocado el aro."
  },
  {
    id: 158,
    text: "El equipo A se presenta al partido con camisetas de color gris claro y el equipo B con camisetas blancas. El árbitro principal considera que se confunden.",
    options: [
      "El equipo A (local) debe cambiarse.",
      "El equipo B (visitante) debe cambiarse.",
      "Se juega así si no tienen otras.",
      "Se suspende el partido."
    ],
    correctIndex: 0,
    explanation: "El equipo local (A) debe usar preferiblemente colores claros y el visitante (B) oscuros. Si hay conflicto, el equipo local debe cambiar su uniforme (en competiciones FIBA, el local suele tener prioridad de elección o la obligación de tener dos juegos)."
  },
  {
    id: 159,
    text: "Quedan 0.1 segundos para el final del partido. El equipo A saca de banda. A1 lanza un pase alto y A2, en el aire, desvía el balón (palmeo) hacia la canasta y entra. ¿Vale?",
    options: [
      "No, se necesitan 0.3 segundos.",
      "Sí, el palmeo es legal con cualquier tiempo restante.",
      "Depende de si lo agarró.",
      "Se anula."
    ],
    correctIndex: 1,
    explanation: "Con menos de 0.3 segundos, un palmeo (tocar el balón sin controlarlo/agarrarlo) es la única forma legal de anotar."
  },
  {
    id: 160,
    text: "El cronometrador no detiene el reloj de partido tras la señal del árbitro por una violación. Pasan 5 segundos. ¿Qué debe hacer el árbitro principal?",
    options: [
      "No se puede hacer nada.",
      "Debe corregir el tiempo de juego basándose en su conocimiento o consultando.",
      "Se juega una posesión extra al final.",
      "Técnica al cronometrador."
    ],
    correctIndex: 1,
    explanation: "El árbitro principal tiene la autoridad y el deber de corregir el reloj de partido si tiene evidencia del error (consumo de tiempo indebido)."
  },
  {
    id: 161,
    text: "A1 tiene el balón para un saque. B1 cruza la línea de banda con el brazo para interferir en el saque. Es la primera vez en el partido.",
    options: [
      "Falta Técnica a B1.",
      "Advertencia por retraso de juego a B1.",
      "Advertencia por retraso de juego al equipo B.",
      "Violación."
    ],
    correctIndex: 2,
    explanation: "Interferir el saque cruzando la línea con cualquier parte del cuerpo es una violación de retraso de juego, lo que conlleva una Advertencia al Entrenador/Equipo B."
  },
  {
    id: 162,
    text: "El equipo A anota. B1 coge el balón para sacar. El árbitro toca el balón (lo 'toca') sin necesidad. ¿Qué sucede con la cuenta de 5 segundos?",
    options: [
      "Continúa.",
      "Se reinicia la cuenta de 5 segundos.",
      "Es falta del árbitro.",
      "Se para el reloj."
    ],
    correctIndex: 1,
    explanation: "Si el árbitro toca el balón en un saque de fondo tras canasta (sin que hubiera falta o violación previa), interrumpe el flujo y debe iniciar una nueva cuenta visual."
  },
  {
    id: 163,
    text: "A1 lanza un tiro libre. El balón se queda atascado en el soporte del aro (entre el aro y el tablero). La flecha de posesión favorece a B.",
    options: [
      "Salto entre dos (posesión B).",
      "Saque para A.",
      "Repetir el tiro.",
      "Violación de A1, saque B."
    ],
    correctIndex: 0,
    explanation: "Es un balón retenido. Se aplica la flecha de posesión alterna (en este caso, saque para B)."
  },
  {
    id: 164,
    text: "El ayudante de anotador comete un error en la operación de la flecha de posesión alterna y la cambia antes de tiempo.",
    options: [
      "El error no se puede corregir.",
      "Se corrige inmediatamente y la flecha se vuelve a poner como estaba.",
      "Se ignora.",
      "Técnica a la mesa."
    ],
    correctIndex: 1,
    explanation: "Los errores en la flecha de posesión alterna deben corregirse inmediatamente sin penalizar a ningún equipo."
  },
  {
    id: 165,
    text: "Un jugador lleva las uñas muy largas y afiladas. El árbitro le pide que se las corte. El jugador se niega.",
    options: [
      "Se le permite jugar con precaución.",
      "No se le permite jugar.",
      "Falta técnica.",
      "Juega con guantes."
    ],
    correctIndex: 1,
    explanation: "Los árbitros deben inspeccionar a los jugadores. Si un jugador lleva algo peligroso (como uñas largas) y se niega a corregirlo, no puede participar."
  },
  {
    id: 166,
    text: "A1 lanza a canasta. El balón toca el aro. El reloj de tiro marca 1 segundo y la señal suena. B1 coge el rebote inmediatamente.",
    options: [
      "Violación de 24s. Balón para B.",
      "El juego continúa, la señal se ignora.",
      "Salto entre dos.",
      "Se repite la posesión de A."
    ],
    correctIndex: 1,
    explanation: "Si el balón toca el aro, el reloj de tiro debe resetearse. Si suena por error y el oponente controla el balón con clara ventaja, la señal se ignora."
  },
  {
    id: 167,
    text: "El equipo A solicita un tiempo muerto. El árbitro lo concede. El jugador A1, enfadado, le da un balonazo al árbitro antes de ir al banco.",
    options: [
      "Falta Técnica.",
      "Falta Descalificante.",
      "Se anula el tiempo muerto.",
      "Advertencia."
    ],
    correctIndex: 1,
    explanation: "Cualquier acto de violencia física intencionada (como lanzar el balón con fuerza a un oficial) es una Falta Descalificante."
  },
  {
    id: 168,
    text: "Durante el intervalo de medio tiempo, el jugador A1 y el jugador B1 se insultan gravemente en el túnel de vestuarios.",
    options: [
      "Faltas Técnicas a ambos.",
      "Faltas Descalificantes a ambos (se anotan en el acta).",
      "No hay jurisdicción arbitral.",
      "Advertencia a los capitanes."
    ],
    correctIndex: 1,
    explanation: "Los árbitros tienen jurisdicción durante los intervalos. Insultos graves o peleas se sancionan. Si es grave, Descalificante. Se anota y cuenta para la 2ª mitad."
  },
  {
    id: 169,
    text: "A1 tiene el balón para el último tiro libre. B1 entra en la zona restringida antes de tiempo. A1 ve la invasión, detiene su movimiento y no tira.",
    options: [
      "Nuevo tiro para A1.",
      "Violación de A1 (5 segundos o interrupción).",
      "Técnica a B1.",
      "Advertencia a ambos."
    ],
    correctIndex: 0,
    explanation: "B1 ha desconcertado al tirador. El árbitro debe conceder un tiro libre sustitutorio (repetir) debido a la violación defensiva que causó la interrupción."
  },
  {
    id: 170,
    text: "El anotador no registra una falta personal de B1 en el acta. B1 comete otra falta más tarde (sería la 5ª) pero la mesa dice que es la 4ª.",
    options: [
      "El error es incorregible si pasó mucho tiempo.",
      "El error es corregible en cualquier momento antes de la firma del acta.",
      "Se fía uno de la memoria del árbitro.",
      "Sigue jugando con 6 faltas."
    ],
    correctIndex: 1,
    explanation: "Los errores de anotación de faltas (número de faltas) son corregibles en cualquier momento antes del final del partido (firma del acta)."
  },
  {
    id: 171,
    text: "El equipo A se presenta con camisetas reversibles. ¿Es legal en competiciones oficiales FIBA de alto nivel?",
    options: [
      "Sí, es práctico.",
      "No, no están permitidas en competiciones oficiales.",
      "Sí, si tienen números en ambos lados.",
      "Depende del comisario."
    ],
    correctIndex: 1,
    explanation: "En competiciones oficiales de nivel 1 y 2, las camisetas reversibles no suelen estar permitidas debido a requisitos de uniformidad y calidad."
  },
  {
    id: 172,
    text: "Saque de banda. A1 lanza el balón para que A2 haga un 'alley-oop'. A2 salta, coge el balón y machaca. ¿Es legal?",
    options: [
      "Sí, es una jugada espectacular y legal.",
      "No, el balón no puede ser machacado en un saque.",
      "No, interferencia ofensiva.",
      "Solo si toca el aro primero."
    ],
    correctIndex: 0,
    explanation: "Es totalmente legal. El balón está vivo en cuanto toca a A2. A2 puede tirar o machacar."
  },
  {
    id: 173,
    text: "El reloj de partido muestra 0:00.0 pero el árbitro ha pitado una falta sobre A1 justo antes (según su juicio).",
    options: [
      "El partido terminó.",
      "El árbitro debe determinar cuánto tiempo quedaba y corregir el reloj.",
      "Se tiran los libres con el reloj a cero.",
      "Prórroga."
    ],
    correctIndex: 1,
    explanation: "Si el árbitro determina que la falta ocurrió antes del final, debe poner el tiempo exacto restante en el reloj (mínimo 0.1s)."
  },
  {
    id: 174,
    text: "A1 está tirando un libre. Finge el tiro (hace un amago) y luego tira y mete.",
    options: [
      "Punto válido.",
      "Violación. Punto anulado.",
      "Se repite.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "Fintar el tiro libre es una violación. El balón pasa a los oponentes."
  },
  {
    id: 175,
    text: "El cronometrador hace sonar la señal de final de posesión (24s) por error. El equipo A tiene el balón y se para el juego.",
    options: [
      "Saque para A con nueva cuenta de 24.",
      "Saque para A con el tiempo restante de posesión.",
      "Salto entre dos.",
      "Saque para B."
    ],
    correctIndex: 1,
    explanation: "Si se detiene el juego por error de señal y A tenía el control, se le devuelve el balón con el tiempo de posesión que le quedaba."
  },
  {
    id: 176,
    text: "Un jugador lleva gafas. ¿Qué requisito deben cumplir?",
    options: [
      "Ninguno.",
      "Deben ser de plástico o material seguro (no cristal) y estar sujetas.",
      "No se permiten gafas.",
      "Solo lentes de contacto."
    ],
    correctIndex: 1,
    explanation: "Se permiten gafas si son seguras (policarbonato), no tienen bordes afilados y están bien sujetas."
  },
  {
    id: 177,
    text: "A1 saca de fondo tras una canasta recibida. B1 toca el balón mientras A1 lo sostiene fuera de la pista.",
    options: [
      "Juego legal.",
      "Violación de B1. Advertencia de retraso o Técnica.",
      "Falta de B1.",
      "Saque repetido sin sanción."
    ],
    correctIndex: 1,
    explanation: "Es una interferencia ilegal con el saque. Se sanciona con una Advertencia por Retraso de Juego (si es la primera) o Técnica (si es reincidente)."
  },
  {
    id: 178,
    text: "El equipo A pide sustitución. El balón muere por fuera de banda. El árbitro hace la señal de sustitución.",
    options: [
      "A puede sustituir, B no.",
      "Ambos equipos pueden sustituir.",
      "Nadie puede sustituir.",
      "Solo B puede sustituir."
    ],
    correctIndex: 1,
    explanation: "Cuando se concede una oportunidad de sustitución a un equipo, el equipo contrario también tiene derecho a sustituir."
  },
  {
    id: 179,
    text: "Tiro libre A1. El balón rebota en el aro y sube. B1 lo toca mientras está en el cilindro imaginario sobre el aro.",
    options: [
      "Rebote legal.",
      "Interferencia defensiva. 1 punto para A.",
      "Violación.",
      "Salto."
    ],
    correctIndex: 1,
    explanation: "Tocar el balón dentro del cilindro sobre el aro durante un tiro libre es interferencia. Se concede 1 punto al lanzador (valor del tiro libre)."
  },
  {
    id: 180,
    text: "El anotador utiliza tinta roja para rellenar el acta.",
    options: [
      "Correcto.",
      "Incorrecto, debe usar azul o negra para los periodos 1-3 y roja para el 4.",
      "Incorrecto, siempre azul o negra.",
      "Da igual."
    ],
    correctIndex: 1,
    explanation: "Tradicionalmente, se usan dos colores (azul/negro para 1º/3º y rojo para 2º/4º) para distinguir los periodos en el acta física."
  },
  {
    id: 181,
    text: "A1 lanza un tiro libre. El balón no toca el aro. B1 invade la zona antes de tiempo (doble violación).",
    options: [
      "Se repite el tiro.",
      "Salto entre dos.",
      "Violación de A1 tiene prioridad (saque B).",
      "Saque A."
    ],
    correctIndex: 2,
    explanation: "La violación del tirador (no tocar aro) tiene prioridad sobre la invasión del carril. El balón pasa a B."
  },
  {
    id: 182,
    text: "El jugador A1 se cuelga del aro tras un mate. No hay nadie debajo. Lo hace para celebrar.",
    options: [
      "Legal.",
      "Falta Técnica.",
      "Advertencia.",
      "Violación."
    ],
    correctIndex: 1,
    explanation: "Colgarse del aro deliberadamente sin motivo de seguridad (evitar caer sobre alguien) es una Falta Técnica."
  },
  {
    id: 183,
    text: "Error corregible: Se olvidó conceder un tiro libre meritorio a A1. El juego ha continuado. Se descubre el error.",
    options: [
      "Se para el juego, se tira el libre sin rebote y se vuelve al punto de interrupción.",
      "Se anula todo lo sucedido y se tira.",
      "Ya no se puede corregir.",
      "Se tira con rebote."
    ],
    correctIndex: 0,
    explanation: "Si el error es corregible, se administra el tiro olvidado (sin rebote) y el juego se reanuda desde el punto donde se detuvo para corregir."
  },
  {
    id: 184,
    text: "El equipo A saca de banda en pista delantera. El reloj de posesión marca 18 segundos. ¿A cuánto se ajusta?",
    options: [
      "24 segundos.",
      "14 segundos.",
      "Se queda en 18 segundos.",
      "20 segundos."
    ],
    correctIndex: 2,
    explanation: "Si el saque es en pista delantera y el equipo ya tenía el control (por ejemplo, tras un fuera de banda defensivo) y quedaban más de 14s, el reloj NO se resetea."
  },
  {
    id: 185,
    text: "Un jugador lleva 'taping' (vendaje) en los dedos de color piel. Su equipo lleva accesorios blancos.",
    options: [
      "Ilegal.",
      "Legal.",
      "Debe pintarlo.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "El vendaje (taping) pequeño en dedos/manos no está sujeto a la regla estricta de color de los accesorios de compresión grandes."
  },
  {
    id: 186,
    text: "El cronometrador olvida parar el reloj tras el silbato del árbitro. Pasan 4 segundos.",
    options: [
      "Se juega así.",
      "El árbitro debe ordenar corregir el tiempo consumido.",
      "Se juega una posesión extra.",
      "Error de mesa, técnica."
    ],
    correctIndex: 1,
    explanation: "El árbitro principal debe verificar y corregir el tiempo de juego si se ha consumido tiempo con el balón muerto."
  },
  {
    id: 187,
    text: "A1 comete una falta. El árbitro la señala. A1 levanta la mano para reconocerla.",
    options: [
      "Falta Técnica (no debe hacerlo).",
      "Es un gesto permitido y deportivo.",
      "El árbitro le obliga a bajarla.",
      "Advertencia."
    ],
    correctIndex: 1,
    explanation: "Aunque ya no es obligatorio levantar la mano, hacerlo como gesto de reconocimiento es legal y deportivo."
  },
  {
    id: 188,
    text: "Durante un tiro libre, un jugador del equipo A que no es el tirador entra en la zona restringida antes de que el balón salga de las manos de A1.",
    options: [
      "Si encesta vale.",
      "Violación. Si encesta, se anula el punto. Saque B.",
      "Se repite.",
      "Técnica."
    ],
    correctIndex: 1,
    explanation: "Es una violación de un compañero del tirador. Si el tiro entra, se anula. Si falla, es violación igualmente. Saque para B."
  },
  {
    id: 189,
    text: "El balón queda muerto. El árbitro hace rotación. ¿Deben rotar también los oficiales de mesa?",
    options: [
      "Sí.",
      "No.",
      "Solo en tiempos muertos.",
      "Depende del pabellón."
    ],
    correctIndex: 1,
    explanation: "No, los oficiales de mesa (anotador, cronometrador, operador 24s) mantienen sus posiciones fijas todo el partido."
  },
  {
    id: 190,
    text: "A1 lanza un tiro libre. El balón toca el aro. B1 lo toca mientras está encima del aro (cilindro).",
    options: [
      "Rebote.",
      "Interferencia defensiva. 1 punto para A.",
      "Violación.",
      "Salto."
    ],
    correctIndex: 1,
    explanation: "Es interferencia defensiva. Se concede 1 punto al lanzador (valor del tiro libre)."
  },
  {
    id: 191,
    text: "El equipo A saca de fondo en pista delantera tras una falta antideportiva. ¿Cuánto tiempo de posesión tienen?",
    options: [
      "24 segundos.",
      "14 segundos.",
      "Lo que quedaba.",
      "30 segundos."
    ],
    correctIndex: 1,
    explanation: "Tras una falta antideportiva, el saque es en pista delantera con 14 segundos de posesión."
  },
  {
    id: 192,
    text: "El entrenador A solicita sustitución. El balón está vivo en manos de A1 para un primer tiro libre.",
    options: [
      "Se concede ahora.",
      "Se concede tras el último tiro libre (si entra).",
      "No se concede hasta la próxima falta.",
      "Se concede si B1 también cambia."
    ],
    correctIndex: 1,
    explanation: "Si el balón ya está vivo para el primer tiro, hay que esperar. La oportunidad llega si el último tiro entra o si hay rebote y luego bola muerta."
  },
  {
    id: 193,
    text: "A1 lleva el número 10. Se cambia la camiseta porque tiene sangre y se pone la número 25. ¿Puede jugar?",
    options: [
      "No, debe mantener el número.",
      "Sí, se anota el cambio de número en el acta sin sanción.",
      "Sí, con falta técnica.",
      "No, debe ser sustituido."
    ],
    correctIndex: 1,
    explanation: "Si es por causa de sangre/daño, se permite el cambio de camiseta y número, anotándolo en el acta. No hay sanción."
  },
  {
    id: 194,
    text: "El cronometrador hace sonar la señal de final de partido. Los árbitros pitan una falta simultáneamente.",
    options: [
      "El partido ha terminado, la falta se ignora.",
      "La falta se sanciona. Se pueden tirar libres con el reloj a 0:00.",
      "Se juega 1 segundo extra.",
      "Prórroga."
    ],
    correctIndex: 1,
    explanation: "Si la falta ocurre justo en el momento o antes de la señal, debe sancionarse. Los tiros libres se pueden ejecutar con el tiempo a cero."
  },
  {
    id: 195,
    text: "Tiro libre. B1 y B2 ocupan los dos primeros espacios de rebote. A2 y A3 quieren ocupar los siguientes. B3 quiere meterse entre ellos.",
    options: [
      "Permitido.",
      "No permitido. Los espacios están alternados y definidos.",
      "B3 tiene derecho.",
      "Decide el árbitro."
    ],
    correctIndex: 1,
    explanation: "Los espacios de rebote están asignados por regla (Defensa-Ataque-Defensa). B3 no puede meterse en el espacio reservado para el ataque o viceversa."
  },
  {
    id: 196,
    text: "A1 lanza un tiro. Suena la bocina de 24s. El balón no toca aro. El árbitro pita violación. ¿Qué hace el reloj de partido?",
    options: [
      "Se para al pitar.",
      "Se retrocede al momento de la señal de 24s.",
      "Sigue corriendo.",
      "Se añaden 2 segundos."
    ],
    correctIndex: 0,
    explanation: "El reloj de partido se para cuando el árbitro hace sonar su silbato por la violación. No se retrocede automáticamente a la señal de 24s salvo error evidente de retardo."
  },
  {
    id: 197,
    text: "El entrenador A está de pie en su zona de banco dando instrucciones. El asistente también se pone de pie.",
    options: [
      "Legal.",
      "Falta Técnica al banquillo (B).",
      "El árbitro les pide que se siente uno.",
      "Descalificante."
    ],
    correctIndex: 2,
    explanation: "Solo una persona (el entrenador principal) puede permanecer de pie en el área de banquillo. El árbitro debe ordenar al asistente que se siente."
  },
  {
    id: 198,
    text: "El anotador comete un error en la flecha de posesión. El árbitro se da cuenta en un salto entre dos.",
    options: [
      "Se corrige inmediatamente.",
      "Ya no se puede corregir.",
      "Se hace un sorteo.",
      "Posesión para el local."
    ],
    correctIndex: 0,
    explanation: "El error de la flecha es corregible. Se ajusta a la dirección correcta."
  },
  {
    id: 199,
    text: "A1 realiza un mate. El balón pasa por el aro pero la red, al estar rota, devuelve el balón hacia arriba (sale por arriba).",
    options: [
      "No es canasta.",
      "Es canasta válida.",
      "Salto entre dos.",
      "Repetir posesión."
    ],
    correctIndex: 1,
    explanation: "Si el balón pasa el aro completamente, es canasta, aunque una red defectuosa lo devuelva."
  },
  {
    id: 200,
    text: "El jugador A1 se lesiona. El árbitro detiene el juego. A1 es atendido en pista por menos de 15 segundos y está listo.",
    options: [
      "Puede seguir jugando.",
      "Debe ser sustituido obligatoriamente.",
      "Técnica por retraso.",
      "El rival decide."
    ],
    correctIndex: 1,
    explanation: "Si el árbitro detiene el juego por lesión, el jugador debe ser sustituido, salvo que se pida un tiempo muerto o la atención sea extremadamente breve y no retrase el juego (criterio estricto: si entra médico/entrenador, sale)."
  }
];
