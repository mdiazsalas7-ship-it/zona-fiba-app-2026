
export interface Article {
  id: string;
  title: string;
  content: string;
  keywords: string[];
  pdfUrl?: string;
}

export interface RuleChapter {
  id: string;
  title: string;
  book: 'REGLAMENTO' | 'OBRI' | 'MANUAL';
  articles: Article[];
}

export const DATA_REGLAMENTO: RuleChapter[] = [ 
  {
    id: 'reg-rule-1',
    title: 'REGLA 1: EL JUEGO',
    book: 'REGLAMENTO',
    articles: [
      {
        id: 'art-1',
        title: 'Art. 1: Definiciones',
        keywords: ['juego', 'canasta', 'ganador'],
        content: `1.1 El juego del baloncesto.\nEl baloncesto lo juegan 2 equipos de 5 jugadores cada uno. El objetivo de cada equipo es encestar en la canasta del adversario e impedir que el equipo adversario enceste.\n1.2 Canasta: contraria/propia.\nLa canasta en la que ataca un equipo es la canasta de los adversarios y la canasta que defiende es su propia canasta.\n1.3 Vencedor de un partido.\nEl vencedor será el equipo que haya logrado mayor número de puntos de partido al final del tiempo de juego.`
      }
    ]
  },
  {
    id: 'reg-rule-2',
    title: 'REGLA 2: PISTA Y EQUIPAMIENTO',
    book: 'REGLAMENTO',
    articles: [
      {
          id: 'art-2',
          title: 'Art. 2: Terreno de juego',
          keywords: ['terreno', 'dimensiones', 'lineas', 'triple', 'banquillo', 'semicirculo'],
          content: `2.1 Terreno de juego\nEl terreno de juego será una superficie plana y dura, libre de obstáculos, con unas dimensiones de 28 metros de largo y 15 metros de ancho, medidas desde el borde interior de las líneas limítrofes.\n\n2.2 Superficie de juego\nLa superficie de juego incluye el terreno de juego y la línea limítrofe exterior, libre de obstáculos, con una dimensión mínima de 2 metros. Por tanto, la superficie de juego mínima será de 32 metros de largo y 19 metros de ancho.\n\n2.3 Pista trasera\nLa pista trasera de un equipo comprende su propia canasta, la parte del tablero que da al terreno de juego y aquella parte del terreno de juego delimitada por la línea de fondo que se encuentra detrás de su propia canasta, las líneas laterales y la línea central.\n\n2.4 Pista delantera\nLa pista delantera de un equipo comprende la canasta de los adversarios, la parte del tablero que da al terreno de juego y aquella parte del terreno de juego delimitada por la línea de fondo que se encuentra detrás de la canasta de los adversarios, las líneas laterales y el borde de la línea central más cercano a la canasta de los adversarios.\n\n2.5 Líneas\nTodas las líneas se dibujarán del mismo color, en blanco u otro color que contraste, de 5 centímetros de ancho y claramente visibles.\n\n2.5.1 Línea limítrofe\nEl terreno de juego estará delimitado por la línea limítrofe (líneas de fondo y laterales). Estas líneas no forman parte del terreno de juego. Cualquier obstáculo estará como mínimo a 2 metros del terreno.\n\n2.5.2 Línea central y círculo\nLa línea central se trazará paralela a las líneas de fondo. El círculo central tendrá un radio de 1,80 metros.\n\n2.5.3 Líneas de tiros libres y zonas restringidas\nLa línea de tiros libres se trazará paralela a cada línea de fondo. Su borde más alejado distará 5,80 metros del borde interior de la línea de fondo.\n\n2.5.4 Zona de canasta de 3 puntos\nEs todo el terreno de juego excepto el espacio cercano a la canasta de los oponentes, delimitada por un arco con un radio de 6,75 metros.\n\n2.5.5 Zonas de banquillo\nSe marcarán fuera del terreno de juego. Debe haber 16 asientos disponibles.\n\n2.5.6 Líneas de saque\nLas 2 líneas de 0,15 metros se trazarán en la línea lateral enfrente de la mesa de oficiales, con su borde exterior a 8,325 metros de la línea de fondo.\n\n2.5.7 Zonas del semicírculo de no-carga\nDelimitadas por un semicírculo de radio 1,30 metros bajo la canasta.`
        },
      {
        id: 'art-3',
        title: 'Art. 3: Equipamiento',
        keywords: ['balon', 'reloj', 'acta'],
        content: `Será necesario el siguiente equipamiento:\n• Unidades de contención, que consisten en:\n◦ Tableros\n◦ Canastas, compuestas por aros (abatibles) y redes\n◦ Soportes del tablero que incluyan protecciones\n• Balones de baloncesto\n• Reloj de partido\n• Marcador\n• Reloj de tiro\n• Cronómetro o dispositivo (visible) adecuado, que no sea el reloj de partido, para cronometrar los tiempos muertos.\n• 2 señales independientes, potentes y claramente diferentes, para:\n◦ el operador del reloj de tiro,\n◦ el cronometrador.\n• Acta del partido\n• Indicadores de faltas de jugadores\n• Indicadores de faltas de equipo\n• Flecha de posesión alterna\n• Superficie de juego\n• Terreno de juego\n• Iluminación adecuada.\nPara una descripción más detallada del equipamiento de baloncesto, ver el Apéndice de Equipamiento de Baloncesto.`
      }
    ]
  },
  {
    id: 'reg-rule-3',
    title: 'REGLA 3: LOS EQUIPOS',
    book: 'REGLAMENTO',
    articles: [
      {
        id: 'art-4',
        title: 'Art. 4: Equipos',
        keywords: ['equipos', 'jugadores', 'uniformes', 'numeros', 'accesorios', 'mangas', 'color'],
        content: `4.1 Definición\n4.1.1 Un miembro de equipo es apto para jugar cuando se le ha autorizado para jugar con un equipo de acuerdo a las normativas.\n\n4.1.3 Durante el tiempo de juego, un miembro de equipo es:\n• Jugador: cuando está en el terreno de juego y está facultado para jugar.\n• Sustituto: cuando no está en el terreno de juego pero está facultado para jugar.\n• Jugador excluido: cuando ha cometido 5 faltas y ya no está facultado para jugar.\n\n4.2 Regla\n4.2.1 Cada equipo se compone de:\n• Máximo 12 miembros facultados para jugar.\n• Un primer entrenador y un ayudante (opcional).\n• Máximo 7 acompañantes (delegado, médico, etc.).\n\n4.2.2 Durante el tiempo de juego 5 miembros de cada equipo estarán en el terreno de juego.\n\n4.3 Uniformes\n4.3.1 El uniforme constará de:\n• Camisetas del mismo color dominante delante y detrás. Deben ir por dentro del pantalón. No se permiten camisetas interiores debajo, salvo que sean de compresión.\n• Pantalones cortos del mismo color dominante que las camisetas.\n• Calcetines del mismo color dominante y visibles.\n\n4.3.2 Numeración:\n• Números en el frente y espalda, de color que contraste.\n• Altura mínima: 16 cm en espalda, 8 cm en frente. Ancho mínimo 2 cm.\n• Se permiten números 0, 00 y del 1 al 99.\n\n4.3.3 Color:\n• Local (primer equipo): Color claro (blanco).\n• Visitante (segundo equipo): Color oscuro.\n\n4.4 Otra indumentaria\n4.4.1 Toda indumentaria debe ser adecuada. No se permite nada para aumentar altura o salto.\n\n4.4.2 Objetos prohibidos:\n• Protecciones duras (dedos, manos, muñecas, codos, antebrazos, cascos) de cuero, plástico o metal, aunque estén acolchados.\n• Objetos que corten (uñas largas, joyas, accesorios de pelo).\n\nObjetos permitidos:\n• Protecciones acolchadas en hombros, brazos, muslos.\n• Prendas de compresión (mangas/piernas).\n• Recubrimiento de cabeza (sin cubrir cara).\n• Rodilleras, máscaras nasales, protectores bucales transparentes, gafas.\n• Muñequeras y cintas de cabeza (máx 10cm anchura).\n\nIMPORTANTE: Todos los jugadores del mismo equipo deben llevar sus accesorios (mangas, piernas, cintas) del mismo color sólido.`
      },
      {
        id: 'art-5',
        title: 'Art. 5: Jugadores: Lesión',
        keywords: ['lesion', 'sangre', 'asistencia', 'medico', 'sustitucion', '15 segundos'],
        content: `5.1 Los árbitros pueden detener el juego en caso de lesión de uno o varios jugadores.\n\n5.2 Si el balón está vivo cuando se produce una lesión, los árbitros no harán sonar su silbato hasta que el equipo con control del balón haya lanzado a canasta, haya perdido el control, se abstenga de jugarlo o el balón quede muerto. Si es necesario proteger a un jugador lesionado, los árbitros pueden detener el juego inmediatamente.\n\n5.3 Si el jugador lesionado no puede continuar jugando inmediatamente (aprox. 15 segundos) o si recibe asistencia del banco, deberá ser sustituido (a menos que su equipo se quede con menos de 5).\n\n5.4 El personal de banco puede entrar para atender a un jugador solo con permiso del árbitro.\n\n5.5 Un médico puede entrar sin permiso si el jugador precisa atención inmediata.\n\n5.6 Jugador con sangre o herida abierta: Deberá ser sustituido. Podrá volver cuando la hemorragia se detenga y la herida esté cubierta.\n\n5.7 Excepción Tiempo Muerto: Si el jugador se recupera durante un tiempo muerto (antes de la señal de sustitución del cronometrador), puede seguir jugando.\n\n5.8 Si un jugador inicial o un tirador de libres se lesiona, puede ser sustituido. El rival también tendrá derecho a sustituir al mismo número de jugadores.`
      },
      {
        id: 'art-6',
        title: 'Art. 6: Capitán: Obligaciones y derechos',
        keywords: ['capitan', 'derechos', 'protesta', 'firma', 'representante'],
        content: `6.1 El capitán (CAP) es un jugador designado por su primer entrenador para representar a su equipo en el terreno de juego. Puede dirigirse a los árbitros de manera educada durante el partido para obtener información solo cuando el balón esté muerto y el reloj de partido esté parado.\n\n6.2 El capitán informará al árbitro principal, como máximo 15 minutos después del final del partido, si su equipo protesta el resultado del partido, y firmará el acta del partido en el espacio designado “Firma del capitán en caso de protesta”.`
      },
      {
        id: 'art-7',
        title: 'Art. 7: Entrenadores: Obligaciones y derechos',
        keywords: ['entrenador', 'ayudante', 'banco', 'acta', 'capitan', 'tiros libres'],
        content: `7.1 Al menos 40 minutos antes de la hora programada para el inicio del partido, cada primer entrenador o su representante proporcionará al anotador una lista con los nombres y números correspondientes de los miembros de su equipo aptos para jugar, así como el nombre del capitán, primer entrenador y primer entrenador ayudante. Todos los miembros de un equipo cuyos nombres estén inscritos en el acta del partido están facultados para jugar, incluso si llegan después de que el partido haya comenzado.\n\n7.2 Al menos 10 minutos antes de la hora de inicio programada del partido, cada primer entrenador dará su aprobación a los nombres y números de los miembros de su equipo y a los nombres del primer entrenador y primer entrenador ayudante, mediante su firma en el acta del partido. Al mismo tiempo, el primer entrenador deberá indicar los 5 jugadores que comenzarán el partido. El primer entrenador del equipo A será quien facilite esta información en primer lugar.\n\n7.3 Los primeros entrenadores, primeros entrenadores ayudantes, sustitutos, jugadores excluidos y acompañantes de equipos son las únicas personas autorizadas a sentarse en los banquillos y a permanecer en las zonas de banquillo. Durante el tiempo de juego todos los sustitutos, jugadores excluidos y acompañantes de equipo permanecerán sentados.\n\n7.4 El primer entrenador o el primer entrenador ayudante pueden ir a la mesa de oficiales durante el partido para obtener información estadística solo cuando el balón quede muerto y el reloj de partido esté parado.\n\n7.5 El primer entrenador puede dirigirse a los árbitros de manera educada durante el partido para obtener información solo cuando el balón esté muerto y el reloj de partido esté parado.\n\n7.6 Tanto el primer entrenador como el primer entrenador ayudante, pero solo uno de ellos a la vez, están autorizados a permanecer de pie durante el partido. Podrán dirigirse verbalmente a sus jugadores durante el partido siempre que permanezcan dentro de sus zonas de banquillo. El primer entrenador ayudante no se comunicará con los árbitros.\n\n7.7 Si hay un primer entrenador ayudante, su nombre debe inscribirse en el acta del partido antes del inicio (no es necesario que firme). Asumirá todas las obligaciones y derechos del primer entrenador si, por cualquier razón, este no puede continuar ejerciéndolas.\n\n7.8 Si el capitán abandona el terreno de juego, el primer entrenador informará a uno de los árbitros del número del jugador que actuará como capitán en el terreno de juego.\n\n7.9 El capitán actuará como jugador-primer entrenador si no hay primer entrenador o si este no puede continuar y no hay primer entrenador ayudante inscrito en el acta del partido. Si el capitán tiene que abandonar el terreno de juego, puede continuar ejerciendo como jugador-primer entrenador (salvo por descalificante).\n\n7.10 El primer entrenador designará al lanzador de tiros libres de su equipo en todos los casos en que las reglas no lo determinen.`
      },
    ]
  },
  {
    id: 'reg-rule-4',
    title: 'REGLA 4: REGLAMENTACIÓN',
    book: 'REGLAMENTO',
    articles: [
      {
        id: 'art-8',
        title: 'Art. 8: Tiempo de juego, tanteo empatado y prórroga',
        keywords: ['tiempo', 'cuartos', 'prorroga', 'empate', 'intervalo', 'descanso', '10 minutos'],
        content: `8.1 El partido constará de 4 cuartos de 10 minutos cada uno.\n\n8.2 Habrá un intervalo de juego de 20 minutos antes de la hora programada para el inicio del partido.\n\n8.3 Habrá un intervalo de juego de 2 minutos entre el primer y segundo cuarto (primera parte), entre el tercer y cuarto cuarto (segunda parte) y antes de cada prórroga.\n\n8.4 Habrá un intervalo de juego en la mitad del partido de 15 minutos.\n\n8.5 Un intervalo de juego comienza:\n• 20 minutos antes de la hora programada para el inicio del partido.\n• Cuando suena la señal del reloj de partido indicando el final del cuarto o de la prórroga.\n\n8.6 Un intervalo de juego finaliza:\n• Al comienzo del primer cuarto, cuando el balón sale de la(s) mano(s) del árbitro principal en el lanzamiento del salto entre dos.\n• Al comienzo de todos los demás cuartos y prórrogas, cuando el balón está a disposición del jugador que va a efectuar el saque.\n\n8.7 Si el tanteo está empatado al final del cuarto cuarto, el partido continuará con tantas prórrogas de 5 minutos como sean necesarias para deshacer el empate.\n\n8.8 Si se comete una falta cerca del final de un cuarto o de la prórroga, el árbitro determinará el tiempo de juego restante. Se mostrará un mínimo de 0.1 (una décima de segundo) en el reloj de juego.\n\n8.9 Si se sanciona una falta técnica, antideportiva o descalificante durante un intervalo de juego, cualquier tiro libre resultante se administrará antes del inicio del siguiente cuarto o prórroga.`
      },
      {
        id: 'art-9',
        title: 'Art. 9: Comienzo y final',
        keywords: ['inicio', 'final', 'salto', 'saque', 'banquillo', '5 jugadores', 'calentamiento'],
        content: `9.1 El primer cuarto comienza cuando el balón sale de la(s) mano(s) del árbitro principal en el lanzamiento del salto entre dos.\n\n9.2 Los demás cuartos o prórrogas comienzan cuando el balón está a disposición del jugador que va a efectuar el saque.\n\n9.3 El partido no puede comenzar si uno de los equipos no está en el terreno de juego con 5 jugadores preparados para jugar.\n\n9.4 El equipo local tendrá su banquillo a la izquierda de la mesa de oficiales y calentará en ese lado. Si ambos equipos están de acuerdo, podrán intercambiarlos.\n\n9.5 Los equipos intercambiarán la pista de calentamiento y la canasta para la segunda mitad.\n\n9.6 En todas las prórrogas, los equipos continuarán atacando las mismas canastas que en el cuarto cuarto.\n\n9.7 Un cuarto, una prórroga o un partido finalizarán cuando suene la señal del reloj de partido. Si el tablero tiene luces rojas, estas tienen prioridad sobre el sonido.`
      },
      {
        id: 'art-10',
        title: 'Art. 10: Estado del balón',
        keywords: ['balon vivo', 'balon muerto', 'silbato', 'canasta valida'],
        content: `10.1 El balón puede estar vivo o muerto.\n\n10.2 El balón pasa a estar vivo cuando:\n• Durante el salto entre dos, el balón abandona la(s) mano(s) del árbitro principal.\n• Durante un tiro libre, el balón está a disposición del lanzador.\n• Durante un saque, el balón está a disposición del jugador que lo efectúa.\n\n10.3 El balón queda muerto cuando:\n• Se convierte cualquier tiro de campo o tiro libre.\n• Un árbitro hace sonar su silbato estando el balón vivo.\n• Resulta evidente que el balón no entrará en el cesto durante un tiro libre que debe ser seguido por otra penalización.\n• Suena la señal del reloj de partido (final de cuarto/prórroga) o del reloj de tiro.\n• Un jugador toca el balón en el aire en un tiro a canasta después de que suene el silbato o la señal de reloj.\n\n10.4 El balón NO queda muerto (canasta válida) si:\n• El balón está en el aire en un tiro a canasta cuando suena el silbato o las señales de reloj.\n• El balón está en el aire en un tiro libre y el árbitro silba una infracción no cometida por el lanzador.\n• Un jugador está en movimiento continuo de tiro que comenzó antes de que se sancionara una falta del equipo oponente.\n\nEsta disposición no se aplica si, tras sonar el silbato, el jugador realiza una acción de tiro completamente nueva.`
      },
      {
        id: 'art-11',
        title: 'Art. 11: Posición de un jugador y de un árbitro',
        keywords: ['posicion', 'ubicacion', 'aire', 'suelo', 'contacto arbitro'],
        content: `11.1 La posición de un jugador se determina por el lugar que está tocando sobre la superficie de juego.\n\nCuando se encuentra en el aire, mantiene la misma posición que tenía cuando tocó la superficie de juego por última vez. Esto incluye las líneas limítrofes, la línea central, la línea de 3 puntos, la línea de tiros libres, las líneas que delimitan las zonas restringidas y las líneas que delimitan las zonas del semicírculo de no-carga.\n\n11.2 La posición de un árbitro se determina de la misma manera que la de un jugador. Cuando el balón toca a un árbitro es como si tocara la superficie de juego en la posición en que se encuentra el árbitro.`
      },
      {
        id: 'art-12',
        title: 'Art. 12: Salto entre dos y posesión alterna',
        keywords: ['salto', 'lucha', 'flecha', 'posesion alterna', 'balon retenido', 'salto inicial'],
        content: `12.1 Definiciones\n12.1.1 Salto entre dos: El árbitro lanza el balón en el círculo central entre 2 adversarios.\n12.1.2 Balón retenido (Lucha): Uno o más jugadores rivales tienen las manos firmemente sobre el balón.\n\n12.2 Procedimiento\n• Los saltadores deben tener los pies dentro del semicírculo más próximo a su canasta.\n• El balón debe palmarse después de que alcance su altura máxima.\n• Ningún saltador puede coger el balón ni palmearlo más de 2 veces hasta que toque a un no-saltador o al suelo.\n\n12.4 Situaciones de salto\nSe produce situación de salto (se aplica flecha) cuando:\n• Se señala balón retenido.\n• El balón sale fuera y los árbitros dudan.\n• Balón vivo se encaja entre el aro y el tablero (salvo tiros libres).\n• El balón queda muerto y ningún equipo tiene el control.\n• Comienzo de cualquier cuarto (excepto el 1º) o prórrogas.\n\n12.5 Posesión alterna\nEs el método para que el balón pase a estar vivo mediante un saque en lugar de un salto entre dos.\n\n12.6 Procedimiento de posesión alterna\n12.6.2 El equipo que NO obtenga el primer control del balón tras el salto inicial tendrá derecho al primer saque de la flecha.\n12.6.4 La flecha apunta a la canasta oponente del equipo que tiene el derecho. Se cambia la dirección en cuanto finaliza el saque.\n12.6.5 Si el equipo comete violación en su saque de posesión alterna, pierde el derecho y la flecha cambia inmediatamente.`
      },
      {
        id: 'art-13',
        title: 'Art. 13: Cómo se juega el balón',
        keywords: ['manos', 'pie', 'pierna', 'puño', 'intencionado', 'accidental'],
        content: `13.1 Definición\nDurante el partido, el balón solo se juega con la(s) mano(s) y puede pasarse, lanzarse, palmearse, rodarse o botarse en cualquier dirección, sujeto a las restricciones de estas reglas.\n\n13.2 Regla\nUn jugador no correrá con el balón, ni lo golpeará con el pie ni lo bloqueará con cualquier parte de la pierna intencionadamente, ni lo golpeará con el puño.\n\nNo obstante, contactar o tocar el balón con cualquier parte de la pierna de manera accidental no es una violación.\n\nUna infracción del Art. 13.2 es una violación.\n\n13.3 Penalización\nSe concederá un saque a los oponentes desde el lugar más cercano a la infracción, excepto directamente detrás del tablero.`
      },
      {
        id: 'art-14',
        title: 'Art. 14: Control del balón',
        keywords: ['control', 'equipo', 'balon vivo', 'posesion'],
        content: `14.1 Definición\n14.1.1 El control por parte de un equipo comienza cuando un jugador de ese equipo tiene el control de un balón vivo sosteniéndolo o botándolo o tiene un balón vivo a su disposición.\n\n14.1.2 El control por parte de ese equipo continúa cuando:\n• Un jugador de ese equipo tiene el control de un balón vivo.\n• Miembros de ese equipo se están pasando el balón.\n\n14.1.3 El control por parte de ese equipo finaliza cuando:\n• Un oponente obtiene el control.\n• El balón queda muerto.\n• El balón ha abandonado la(s) mano(s) del jugador en un tiro a canasta o un tiro libre.`
      },
      {
        id: 'art-15',
        title: 'Art. 15: Jugador en acción de tiro',
        keywords: ['tiro', 'acto de tiro', 'palmeo', 'mate', 'continuo', 'entrada', 'lanzamiento'],
        content: `15.1 Definición\n15.1.1 Un tiro a canasta, palmeo o mate se produce cuando un jugador dirige el balón hacia la canasta de sus oponentes.\n\n15.1.2 La acción de tiro (Tiro normal):\n• Empieza: cuando el jugador comienza a mover el balón hacia arriba hacia la canasta.\n• Finaliza: cuando el balón ha abandonado la(s) mano(s) y, en tiros en suspensión, cuando ambos pies regresan al suelo.\n\n15.1.3 Acción de tiro en movimiento (Entrada):\n• Empieza: cuando el balón descansa en la(s) mano(s) tras acabar un regate o recibirlo en el aire y el jugador inicia el movimiento que precede al lanzamiento.\n• Finaliza: cuando el balón abandona la(s) mano(s) o se realiza otra acción, y ambos pies regresan al suelo.\n\n15.1.4 No existe relación entre el número de pasos legales realizados y la acción de tiro.\n\n15.1.5 Si durante la acción de tiro el jugador es agarrado por un oponente impidiéndole soltar el balón, se considera igualmente falta en acción de tiro.\n\n15.1.6 Si un jugador en acción de tiro recibe una falta y luego pasa el balón, ya NO se considera que estuviese en acción de tiro.`
      },
      {
        id: 'art-16',
        title: 'Art. 16: Canasta: Cuándo se marca y su valor',
        keywords: ['puntos', 'valor', 'propia canasta', '0.3 segundos', 'triple', 'tiro libre'],
        content: `16.1 Definición\n16.1.1 Se convierte una canasta cuando un balón vivo entra en el cesto por arriba y permanece en él o lo atraviesa por completo.\n\n16.2 Regla (Valor de los puntos)\n• Tiro libre: 1 punto.\n• Zona de 2 puntos: 2 puntos.\n• Zona de 3 puntos: 3 puntos.\n• Si tras un último tiro libre el balón toca el aro y un jugador (atacante o defensor) lo toca legalmente antes de entrar: 2 puntos.\n\n16.2.2 Propia canasta (Accidental): Vale 2 puntos y se anota al capitán en pista del equipo contrario.\n16.2.3 Propia canasta (Intencional): Violación. La canasta no es válida.\n16.2.4 Balón por debajo: Es violación si un jugador provoca que el balón entre completamente por debajo de la canasta.\n\n16.2.5 Regla de los 0.3 segundos:\n• Debe haber al menos 0.3 en el reloj para que un jugador pueda obtener el control y lanzar a canasta.\n• Con 0.2 o 0.1 segundos, el único tiro válido es un palmeo o un mate directo, siempre que el jugador no esté en contacto con el balón cuando el reloj llegue a 0.0.`
      },
      {
        id: 'art-17',
        title: 'Art. 17: Saque',
        keywords: ['saque', 'linea de banda', 'linea de fondo', '5 segundos', '2 minutos', 'violacion'],
        content: `17.1 Definición\nUn saque comienza cuando el balón está a disposición del jugador y finaliza cuando toca o es tocado legalmente en pista, o el equipo comete violación.\n\n17.2 Procedimiento\n• 17.2.3 Inicio de cuartos (salvo 1º): Saque desde la prolongación de la línea central, frente a la mesa. El jugador puede pasar a cualquier lugar de la pista.\n• 17.2.4 Últimos 2 min (4Q o Prórroga): Tras tiempo muerto en pista trasera, el entrenador decide si sacar desde su pista o desde la línea de saque en pista delantera.\n• 17.2.7 Tras falta antideportiva/descalificante: Saque desde la línea de saque en pista delantera.\n• 17.2.10 Tras canasta/tiro libre convertido: Saque desde cualquier lugar tras la línea de fondo. El jugador puede moverse lateralmente o pasar a un compañero tras la línea, pero la cuenta de 5 segundos es continua.\n\n17.3 Regla (Jugador que saca)\n• No tardar más de 5 segundos.\n• No pisar el terreno mientras tenga el balón.\n• No tocar el balón en pista antes de que toque a otro jugador.\n• No meter canasta directa.\n• No moverse lateralmente más de 1 metro (hacia atrás sí puede).\n\n17.3.2 Otros jugadores\n• No tener partes del cuerpo sobre la línea antes de que pase el balón.\n• Si hay menos de 2m de espacio exterior, los defensores no pueden estar a menos de 1m del sacador.\n\n17.3.3 Últimos 2 min (Aviso):\nSi un defensor interfiere sobre la línea limítrofe en un saque, es violación y conlleva Falta Técnica.`
      },
      {
        id: 'art-18',
        title: 'Art. 18: Tiempo muerto',
        keywords: ['tiempo muerto', 'timeout', 'minuto', 'oportunidad', '2 minutos', 'entrenador'],
        content: `18.1 Definición\nInterrupción del partido solicitada por el primer entrenador o su ayudante.\n\n18.2 Regla\n• Cada tiempo muerto dura 1 minuto.\n• Se concede durante una oportunidad de tiempo muerto.\n\n18.2.3 Oportunidad de tiempo muerto (Comienzo):\n• Balón muerto, reloj parado y el árbitro finaliza comunicación con la mesa.\n• Balón muerto tras último tiro libre convertido.\n• Para el equipo que recibe canasta (tras conversión).\n\n18.2.4 Finalización: Cuando el balón está a disposición del jugador para saque o primer tiro libre.\n\n18.2.5 Cantidad de tiempos muertos:\n• 2 en la primera parte (1Q y 2Q).\n• 3 en la segunda parte (3Q y 4Q). ¡IMPORTANTE!: Máximo 2 de estos pueden usarse en los últimos 2:00 minutos del último cuarto.\n• 1 por cada prórroga.\n\n18.2.8 Restricción final: No se concede tiempo muerto al equipo que anota cuando el reloj se detiene tras canasta en los últimos 2:00 min (4Q y Prórrogas), salvo que un árbitro interrumpa el juego.\n\n18.3 Procedimiento\n• Solo solicitan primer entrenador o ayudante mediante contacto visual/señal a la mesa.\n• Durante el tiempo muerto, los jugadores pueden sentarse en el banquillo y el personal de banco puede entrar a pista (cerca de su zona).\n• Tras tiros libres: Si se solicita tras estar el balón a disposición del tirador, solo se concede si se convierte el último libre, hay un saque posterior o se pita una falta/violación entre o tras los libres.`
      },
      {
        id: 'art-19',
        title: 'Art. 19: Sustituciones',
        keywords: ['sustitucion', 'cambio', 'oportunidad', 'tiros libres', '5 faltas', 'lesion'],
        content: `19.1 Definición\nInterrupción del partido solicitada por el sustituto para convertirse en jugador.\n\n19.2 Regla\n• Una oportunidad de sustitución comienza cuando el balón queda muerto, el reloj parado y el árbitro finaliza la comunicación con la mesa.\n• También comienza si se convierte el último tiro libre o si el equipo que recibe una canasta la encaja en los últimos 2:00 minutos del 4Q o prórroga.\n\n19.2.4 Restricción de regreso:\nUn jugador sustituido (y el sustituto que entró) no pueden volver a entrar ni salir, respectivamente, hasta que el reloj haya estado en marcha en una fase de juego (salvo que el equipo quede con menos de 5 o por corrección de error).\n\n19.2.5 Restricción últimos 2 min:\nNo se concede sustitución al equipo que anota cuando el reloj se detiene tras canasta en los últimos 2:00 min del 4Q o prórrogas, a menos que un árbitro detenga el juego.\n\n19.3 Procedimiento\n• Solo el sustituto solicita el cambio acudiendo a la mesa (no el entrenador). Debe estar preparado para entrar de inmediato.\n• El jugador sustituido puede ir directo al banquillo sin avisar.\n• Plazos: Un jugador con 5 faltas o descalificado debe ser sustituido en menos de 30 segundos. El retraso inesperado puede costar un tiempo muerto o una falta técnica 'B' al entrenador.\n\n19.3.8 Sustitución del tirador:\nSi el tirador se lesiona, comete su 5ª falta o es descalificado, su sustituto debe lanzar los tiros libres y no puede ser cambiado hasta que el reloj haya estado en marcha en una fase de juego.\n\n19.3.9 Tras tiros libres:\nSi se solicita tras estar el balón a disposición del tirador, solo se concede si el último libre entra, hay un saque posterior o ocurre una infracción entre/tras los tiros.`
      },
      {
        id: 'art-20',
        title: 'Art. 20: Partido perdido por incomparecencia',
        keywords: ['forfeit', 'incomparecencia', '20-0', '15 minutos', 'clasificacion'],
        content: `20.1 Regla\nUn equipo perderá el partido por incomparecencia si:\n• No se presenta o no tiene 5 jugadores preparados 15 minutos después de la hora programada.\n• Sus acciones impiden que se juegue el partido.\n• Se niega a jugar después de ser requerido por el árbitro principal.\n\n20.2 Penalización\n20.2.1 El resultado será de 20 a 0 a favor del equipo contrario. El equipo que no comparezca recibirá 0 puntos en la clasificación.\n\n20.2.2 Series (Ida y Vuelta / Play-Offs a 3): El equipo que no comparezca perderá la serie completa por "incomparecencia". (No aplica para Play-Offs al mejor de 5 o 7 partidos).\n\n20.2.3 Reincidencia: Si un equipo pierde un segundo partido por incomparecencia en un mismo torneo, será descalificado y se anularán todos sus resultados previos.`
      },
      {
        id: 'art-21',
        title: 'Art. 21: Partido perdido por inferioridad',
        keywords: ['inferioridad', '2 jugadores', '2-0', 'puntos clasificacion'],
        content: `21.1 Regla\nUn equipo perderá el partido por inferioridad si, durante el mismo, el número de jugadores de ese equipo preparados para jugar sobre el terreno de juego es inferior a 2.\n\n21.2 Penalización\n21.2.1 Tanteo final:\n• Si el equipo ganador va por delante en el marcador: Se mantiene el tanteo del momento de la interrupción.\n• Si el equipo ganador NO va por delante: Se registrará un resultado de 2 a 0 a su favor.\n\nEl equipo que pierde por inferioridad recibirá 1 punto de clasificación.\n\n21.2.2 Series de 2 partidos (Ida y vuelta): El equipo que quede en inferioridad en cualquiera de los dos partidos perderá la serie completa.`
      },
    ]
  },
  {
    id: 'reg-rule-5',
    title: 'REGLA 5: VIOLACIONES',
    book: 'REGLAMENTO',
    articles: [
      {
        id: 'art-22',
        title: 'Art. 22: Violaciones',
        keywords: ['violacion', 'infraccion', 'penalizacion', 'saque'],
        content: `22.1 Definición\nUna violación es una infracción de las reglas.\n\n22.2 Penalización\nSe concederá un saque a los adversarios desde el punto más cercano al de la infracción, excepto directamente detrás del tablero, a menos que se especifique lo contrario en estas reglas.`
      },
      {
        id: 'art-23',
        title: 'Art. 23: Jugador y balón fuera del terreno',
        keywords: ['fuera', 'lineas limítrofes', 'soporte', 'tablero', 'responsable'],
        content: `23.1 Definición\n23.1.1 Jugador fuera: Cuando cualquier parte de su cuerpo toca el suelo o cualquier objeto (que no sea un jugador) que esté sobre, encima o fuera de las líneas limítrofes.\n\n23.1.2 Balón fuera: Cuando toca:\n• A un jugador o persona que esté fuera del terreno.\n• El suelo o cualquier objeto sobre o fuera de la línea.\n• Los soportes del tablero, la parte posterior de los tableros o cualquier objeto encima del terreno.\n\n23.2 Regla\n23.2.1 El responsable es el último jugador en tocar el balón antes de que salga, incluso si sale por tocar algo que no sea un jugador.\n\n23.2.2 Si el balón sale por tocar a un jugador que ya está sobre o fuera de la línea, ese jugador es el responsable.\n\n23.2.3 Si un jugador sale fuera o pasa a pista trasera durante un balón retenido (lucha), se produce una situación de salto.`
      },
      {
        id: 'art-24',
        title: 'Art. 24: Regate',
        keywords: ['regate', 'dribbling', 'dobles', 'fumble', 'manejo defectuoso', 'control'],
        content: `24.1 Definición\n24.1.1 Un regate es el movimiento de un balón vivo causado por un jugador que lo lanza, palmea, rueda o bota.\n\n24.1.2 Comienzo y Final:\n• Comienza: Cuando el jugador, con control, lo bota y vuelve a tocar antes de que toque a otro jugador.\n• Durante el regate: No se puede poner la mano debajo del balón (acompañamiento).\n• Finaliza: Cuando el jugador toca el balón con ambas manos a la vez o permite que descanse en una o ambas manos.\n\n24.1.3 Fumble (Manejo defectuoso):\nEs cuando un jugador pierde accidentalmente el control del balón y lo vuelve a recuperar. No se considera inicio de regate.\n\n24.1.4 NO son regates:\n• Tiros sucesivos a canasta.\n• Un "fumble" al inicio o final de un regate.\n• Palmear el balón para quitarlo a otro o desviar un pase.\n• Lanzar el balón contra el tablero y recuperar el control.\n\n24.2 Regla (Segunda serie de regate - Dobles):\nUn jugador no debe realizar un segundo regate tras concluir el primero, a menos que haya perdido el control por:\n• Un tiro a canasta.\n• Un toque del balón por parte de un oponente.\n• Un pase o "fumble" donde el balón haya tocado o sido tocado por otro jugador.`
      },
      {
        id: 'art-25',
        title: 'Art. 25: Avance ilegal (Pasos)',
        keywords: ['pasos', 'avance ilegal', 'pivote', 'pie de pivote', 'caer al suelo'],
        content: `25.1 Definición\n25.1.1 Avance ilegal (pasos): Es el movimiento ilegal de uno o ambos pies mientras se sostiene un balón vivo.\n\n25.1.2 Pivote: Movimiento legal en el que un pie (pivote) permanece en el mismo punto mientras el otro da pasos.\n\n25.2 Regla\n25.2.1 Establecimiento del pie de pivote:\n• Jugador parado: Al levantar un pie, el otro es el pivote.\n• Para iniciar regate: El balón debe salir de la(s) mano(s) ANTES de levantar el pie de pivote.\n• Para pasar o tirar: Puede saltar con el pivote, pero el balón debe salir antes de volver a tocar el suelo.\n\nRegla de los dos pasos (jugador en movimiento):\n• 1er Paso: Cuando un pie (o ambos) toca el suelo tras ganar el control.\n• 2º Paso: Cuando el otro pie toca el suelo tras el primero.\n• Para iniciar regate: Debe soltar el balón antes del segundo paso.\n• Si cae con ambos pies a la vez en el 2º paso: No puede pivotar con ninguno.\n\n25.2.2 Jugador en el suelo:\n• Es legal: Caerse y resbalar sosteniendo el balón, u obtener el control estando tumbado/sentado.\n• Es violación: Rodar o intentar levantarse mientras se sostiene el balón.`
      },
      {
        id: 'art-26',
        title: 'Art. 26: 3 segundos',
        keywords: ['3 segundos', 'zona restringida', 'pintura', 'pista delantera', 'violacion'],
        content: `26.1 Regla\n26.1.1 Un jugador no permanecerá más de 3 segundos consecutivos en la zona restringida de los adversarios mientras su equipo tenga el control de un balón vivo en su pista delantera y el reloj de partido esté en marcha.\n\n26.1.2 Excepciones (Se permite si):\n• El jugador intenta abandonar la zona restringida.\n• El jugador o un compañero está en acción de tiro y el balón sale o acaba de salir de las manos.\n• Realiza un regate para tirar a canasta dentro de la zona tras haber permanecido en ella menos de 3 segundos.\n\n26.1.3 Estar fuera de la zona:\nPara que un jugador se considere fuera de la zona restringida, ambos pies deben estar en el terreno de juego fuera de las líneas que delimitan dicha zona.`
      },
      {
        id: 'art-27',
        title: 'Art. 27: Jugador defendido estrechamente',
        keywords: ['estrechamente marcado', '5 segundos', 'defensa activa', '1 metro'],
        content: `27.1 Definición\nUn jugador que sostiene un balón vivo en el terreno de juego está defendido estrechamente cuando un adversario establece una posición legal de defensa activa a una distancia inferior a 1 metro.\n\n27.2 Regla\nUn jugador defendido estrechamente debe pasar, tirar a canasta o botar el balón en menos de 5 segundos.`
      },
      {
        id: 'art-28',
        title: 'Art. 28: 8 segundos',
        keywords: ['8 segundos', 'pista trasera', 'pista delantera', 'violacion', 'cuenta'],
        content: `28.1 Regla\n28.1.1 Un equipo que obtiene el control de un balón vivo en su pista trasera (o tras un saque que toca a un jugador en pista trasera) dispone de 8 segundos para que el balón pase a su pista delantera.\n\n28.1.2 El balón pasa a pista delantera cuando:\n• El balón (sin control) toca la pista delantera.\n• Un atacante con ambos pies en pista delantera toca el balón.\n• Un defensor con parte del cuerpo en su pista trasera toca el balón.\n• Un árbitro con parte del cuerpo en pista delantera toca el balón.\n• Durante un regate: El balón y AMBOS PIES del jugador están por completo en la pista delantera.\n\n28.1.3 Continuidad de la cuenta:\nLa cuenta de 8 segundos NO se reinicia (continúa con el tiempo que restaba) si el saque en pista trasera es por:\n• Balón que sale fuera.\n• Jugador del mismo equipo lesionado.\n• Falta técnica del mismo equipo.\n• Situación de salto.\n• Doble falta o cancelación de penalizaciones iguales.`
      },
      {
        id: 'art-24-sec',
        title: 'Art. 29: 24 segundos',
        keywords: ['24 segundos', '14 segundos', 'reloj de tiro', 'shot clock', 'reinicio', 'aro'],
        content: `29.1 Regla\nUn equipo dispone de 24 segundos para tirar a canasta. El balón debe abandonar la(s) mano(s) antes de la señal y tocar el aro o entrar.\n\n29.1.2 Balón en el aire y suena la señal:\n• Si entra: Canasta válida.\n• Si toca aro y no entra: El juego continúa.\n• Si NO toca aro: Violación (salvo si el rival gana control inmediato).\n\n29.2 Procedimiento: Reinicio del reloj\n\n29.2.2 Si el juego se detiene por falta/violación del NO poseedor:\n• En Pista Trasera: 24 segundos.\n• En Pista Delantera: \n  - Si quedaban 14 o más: Se mantiene el tiempo.\n  - Si quedaban 13 o menos: 14 segundos.\n\n29.2.3 Cambio de posesión (por falta/violación del atacante o posesión alterna):\n• En Pista Trasera: 24 segundos.\n• En Pista Delantera: 14 segundos.\n\n29.2.5 Últimos 2:00 min (Tras tiempo muerto en pista trasera):\nSi el entrenador decide sacar en Pista Delantera:\n• Por balón fuera: 13s o menos (se mantiene), 14s o más (baja a 14s).\n• Por falta/violación: 14 segundos.\n• Si es nuevo control: 14 segundos.\n\n29.2.7 Después de tocar el aro:\n• 24 segundos: Si el equipo oponente obtiene el control.\n• 14 segundos: Si el mismo equipo recupera el control (rebote ofensivo).\n\n29.2.8 Error de señal: Si suena por error, se ignora. Si hay desventaja, se detiene para corregir y se devuelve la posesión.`
      },
      {
        id: 'art-30',
        title: 'Art. 30: Balón devuelto a pista trasera',
        keywords: ['campo atras', 'pista trasera', 'pista delantera', 'violacion', 'retorno'],
        content: `30.1 Definición\nUn equipo controla el balón en pista delantera cuando un jugador tiene ambos pies en contacto con ella mientras sostiene o bota el balón, o cuando se pasan el balón en dicha zona.\n\n30.1.2 Balón devuelto ilegalmente:\nOcurre cuando un equipo con control en pista delantera es el último en tocar el balón allí y, después, el primero en tocarlo es un jugador del mismo equipo que:\n• Tiene parte de su cuerpo en contacto con su pista trasera.\n• Toca el balón después de que este haya tocado la pista trasera.\n\nEsta regla aplica también a los saques en pista delantera.\n\nExcepción:\nNo se aplica cuando un jugador salta desde su pista delantera, establece un NUEVO control de balón para su equipo estando en el aire y luego cae en su pista trasera.\n\n30.2 Regla\nUn equipo con control en pista delantera no puede hacer que el balón vuelva ilegalmente a su pista trasera.\n\n30.3 Penalización\nSaque para los oponentes desde SU pista delantera (lugar más cercano a la infracción).`
      },
      {
        id: 'art-31',
        title: 'Art. 31: Interposición e Interferencia',
        keywords: ['interposicion', 'interferencia', 'tapon ilegal', 'descendente', 'tablero', 'vibracion'],
        content: `31.1 Definición\nUn tiro termina cuando el balón entra, ya no tiene posibilidad de entrar, toca el aro, toca el suelo o queda muerto.\n\n31.2 Regla\n31.2.1 Interposición (Tiro de campo): Cuando un jugador toca el balón por encima del nivel del aro y está en trayectoria descendente o ha tocado el tablero.\n31.2.2 Interposición (Tiro libre): Tocar el balón en trayectoria a canasta antes de que toque el aro.\n\n31.2.4 Interferencia (Cuándo ocurre):\n• Tocar canasta o tablero mientras el balón toca el aro.\n• Meter la mano por debajo de la canasta y tocar el balón.\n• Un defensor toca el balón o canasta cuando el balón está dentro.\n• Hacer vibrar la canasta o agarrarla para influir en que el balón entre o no.\n\n31.3 Penalización\n31.3.1 Si la comete el ATACANTE: No se conceden puntos. Saque para oponentes desde la prolongación de la línea de tiros libres.\n\n31.3.2 Si la comete el DEFENSOR: Se conceden puntos como si hubiera entrado:\n• 1 punto (Tiro libre).\n• 2 puntos (Zona de 2).\n• 3 puntos (Zona de 3).\n\n31.3.3 Especial: Si el defensor comete interposición en el último tiro libre, se concede 1 punto y se sanciona una Falta Técnica al defensor.`
      },
    ]
  },
  {
    id: 'reg-rule-6',
    title: 'REGLA 6: FALTAS',
    book: 'REGLAMENTO',
    articles: [
      {
        id: 'art-32',
        title: 'Art. 32: Faltas',
        keywords: ['falta', 'contacto', 'antideportivo', 'penalizacion', 'acta'],
        content: `32.1 Definición\n32.1.1 Una falta es una infracción de las reglas que implica un contacto personal ilegal con un adversario y/o un comportamiento antideportivo.\n\n32.1.2 Registro:\nSe puede sancionar cualquier número de faltas. Cada falta se anotará en el acta al jugador infractor y se penalizará según las reglas.\n\n32.1.3 Faltas con balón muerto:\nSi una falta ocurre después de que el balón quede muerto (por señal de final de cuarto o por una infracción previa), la falta se ignorará, A MENOS que sea:\n• Falta técnica.\n• Falta antideportiva.\n• Falta descalificante.`
      },
      {
        id: 'art-33',
        title: 'Art. 33: Contacto: principios generales',
        keywords: ['cilindro', 'verticalidad', 'PLD', 'carga', 'bloqueo', 'pantalla', 'no-carga', 'tacteo', 'simulacion'],
        content: `33.1 Principio del cilindro: Espacio imaginario ocupado por un jugador. Delantero: palmas de manos. Trasero: nalgas. Laterales: exterior de brazos y piernas. El atacante con balón debe tener espacio para acciones de baloncesto (regate, pivotar, tirar, pasar).\n\n33.2 Principio de verticalidad: Cada jugador tiene derecho a ocupar cualquier posición (cilindro) no ocupada. Si abandona su verticalidad y hay contacto, es responsable.\n\n33.3 Posición legal de defensa: El defensor encara al adversario y tiene ambos pies en el suelo. Se extiende verticalmente (cilindro).\n\n33.4 Defensa a un jugador con control de balón: No se aplican elementos de tiempo y distancia. El defensor debe establecer la PLD sin contacto inicial.\n\n33.5 Defensa a un jugador sin control de balón: SE APLICAN tiempo y distancia (mínimo 1 paso normal).\n\n33.6 Jugador en el aire: Derecho a caer en el mismo lugar o en otro si estaba libre al saltar. Prohibido situarse bajo un saltador (Falta Antideportiva).\n\n33.7 Pantalla legal e ilegal: Legal si está inmóvil y con ambos pies en el suelo. Ilegal si está en movimiento o no respeta tiempo/distancia (1-2 pasos).\n\n33.8 Carga: Contacto personal ilegal provocado al chocar contra el torso.\n\n33.9 Bloqueo: Contacto que impide el avance del adversario.\n\n33.10 Zonas del semicírculo de no-carga: No se sanciona carga del atacante en el aire si el defensor pisa el semicírculo bajo el aro.\n\n33.11 Tacteo: Tocar no es siempre falta. Es falta si restringe la libertad de movimiento o es reiterado.\n\n33.12 Juego de poste: Aplica verticalidad. Prohibido empujar con hombro o cadera.\n\n33.13 Defensa ilegal por la espalda: El contacto por detrás es responsabilidad del defensor.\n\n33.14 Agarrar: Contacto que interfiere la libertad de movimiento.\n\n33.15 Empujar: Desplazar por la fuerza al adversario.\n\n33.16 Simulación: Acción teatral para engañar al árbitro (Flopping).`
      },
      {
        id: 'art-34',
        title: 'Art. 34: Falta personal',
        keywords: ['falta personal', 'contacto ilegal', 'tiros libres', 'falta de saque', 'ultimo minuto'],
        content: `34.1 Definición\n34.1.1 Una falta personal es un contacto ilegal con un oponente, con balón vivo o muerto. Incluye agarrar, bloquear, empujar, cargar, zancadillear o impedir el avance fuera del cilindro, así como el juego brusco.\n\n34.1.2 Falta de saque: Es una falta personal cometida por un defensor sobre un oponente en pista cuando el reloj indica 2:00 minutos o menos (4Q y prórrogas), mientras el balón está en manos del árbitro o a disposición del sacador.\n\n34.2 Penalización\nSe anotará una falta personal al infractor.\n\n34.2.1 Si el jugador NO está en acción de tiro:\n• Saque para el equipo no infractor en el punto más cercano.\n• Si el equipo está en penalización (bonus), se aplicará el Art. 41 (tiros libres).\n\n34.2.2 Si el jugador ESTÁ en acción de tiro:\n• Si el tiro se convierte: Canasta válida + 1 tiro libre.\n• Si el tiro (2 pts) no se convierte: 2 tiros libres.\n• Si el tiro (3 pts) no se convierte: 3 tiros libres.\n\n34.2.3 Si es una falta de saque:\n• Se concede 1 tiro libre al jugador que recibió la falta (sin importar bonus).\n• El juego se reanuda con un saque del equipo no infractor en el punto más cercano a la infracción.`
      },
      {
        id: 'art-35',
        title: 'Art. 35: Falta doble',
        keywords: ['falta doble', 'contacto', 'doble personal', 'mismo tiempo', 'reanudacion'],
        content: `35.1 Definición\n35.1.1 Una falta doble es una situación en la que 2 adversarios cometen faltas personales o antideportivas/descalificantes, uno contra otro, aproximadamente al mismo tiempo.\n\n35.1.2 Condiciones necesarias:\n• Ambas son faltas del jugador.\n• Ambas implican contacto físico.\n• Se producen entre los mismos 2 oponentes que se hacen falta mutuamente.\n• Ambas son personales o ambas son una combinación de antideportiva/descalificante.\n\n35.2 Penalización\nSe anotará la falta correspondiente a cada jugador. No se concederán tiros libres. El juego se reanudará así:\n\n• Si se convierte tiro de campo o último tiro libre: Saque para el equipo que recibió la canasta desde la línea de fondo.\n• Si un equipo tenía control o derecho al balón: Saque para ese equipo desde el punto más cercano a la infracción.\n• Si ningún equipo tenía control ni derecho: Situación de salto (se aplica flecha de posesión alterna).`
      },
      {
        id: 'art-36',
        title: 'Art. 36: Falta técnica',
        keywords: ['falta tecnica', 'conducta', 'descalificacion', 'entrenador', 'tiro libre', 'comportamiento'],
        content: `36.1 Reglas de conducta\n36.1.1 Exige cooperación leal de jugadores, entrenadores y acompañantes con los árbitros y oficiales de mesa.\n36.1.4 Los árbitros pueden evitar técnicas con avisos previos en infracciones menores.\n36.1.5 Si se descubre una infracción con balón vivo, se pita en ese momento y lo ocurrido antes es válido.\n\n36.2 Definición\n36.2.1 Falta de jugador sin contacto de carácter conductual. Incluye:\n• Ignorar advertencias de árbitros.\n• Trato irrespetuoso a oficiales, oponentes o banquillo.\n• Lenguaje o gestos ofensivos.\n• Provocar o burlarse.\n• Obstruir la visión agitando manos en los ojos.\n• Excesivo movimiento de codos.\n• Retrasar el juego tocando el balón tras canasta.\n• Simular falta (flopping).\n• Colgarse del aro (salvo para evitar lesión).\n• Interposición defensiva en el último tiro libre.\n\n36.2.3 Descalificación de jugador:\nUn jugador será descalificado por:\n- 2 faltas técnicas.\n- 2 faltas antideportivas.\n- 1 técnica + 1 antideportiva.\n\n36.2.4 Descalificación del entrenador:\n- 2 técnicas personales ('C').\n- 3 técnicas acumuladas ('B') por comportamiento del banquillo.\n\n36.3 Penalización\n36.3.1 Registro:\n• Si es a un jugador: cuenta como falta de jugador y de equipo.\n• Si es al banquillo: se anota al primer entrenador y NO cuenta para faltas de equipo.\n\n36.3.2 Reanudación:\n• Se concede 1 tiro libre a los oponentes.\n• Tras el tiro, el juego se reanuda desde el lugar donde se detuvo por el equipo que tenía el control o derecho al balón.\n• Si se anotó canasta justo antes: Saque de fondo.\n• Si no había control: Situación de salto.\n• Si es antes de empezar el 1Q: Salto entre dos inicial.`
      },
      {
        id: 'art-37',
        title: 'Art. 37: Falta antideportiva',
        keywords: ['antideportiva', 'criterios', 'transicion', 'ultimo hombre', 'tiros libres', 'descalificacion'],
        content: `37.1 Definición\n37.1.1 Es un contacto de jugador que, a juicio del árbitro, es:\n• Contacto sin intento legítimo de jugar directamente el balón.\n• Contacto excesivo y duro sobre el balón o el oponente.\n• Contacto innecesario del defensor para detener una transición (hasta que el atacante inicia el tiro).\n• Contacto ilegal por la espalda o lateral sobre un oponente que progresa hacia canasta sin defensores entre él y el aro, siempre que:\n  - Tenga control del balón.\n  - Intente ganar el control.\n  - El balón haya sido soltado en un pase hacia él.\n  (Aplica hasta que inicia la acción de tiro).\n\n37.1.2 El árbitro debe juzgar solo la acción de manera coherente.\n\n37.2 Penalización\n37.2.1 Se anotará una falta antideportiva al infractor.\n\n37.2.2 Tiros libres y posesión:\nSe concederán tiros libres al jugador que recibió la falta, seguidos de:\n• Un saque desde la línea de saque en la pista delantera del equipo.\n• Un salto entre dos en el círculo central si es para iniciar el 1er cuarto.\n\nNúmero de tiros libres:\n• Si NO está en acción de tiro: 2 tiros libres.\n• Si ESTÁ en acción de tiro y encesta: Canasta válida + 1 tiro libre.\n• Si ESTÁ en acción de tiro y NO encesta: 2 o 3 tiros libres (según la zona).\n\n37.2.3 Descalificación:\nUn jugador es descalificado por:\n- 2 faltas antideportivas.\n- 2 faltas técnicas.\n- 1 técnica + 1 antideportiva.\n\n37.2.4 Si se descalifica bajo el art. 37.2.3, solo se penaliza la antideportiva (no hay penalización extra por la descalificación).`
      },
      {
        id: 'art-38',
        title: 'Art. 38: Falta descalificante',
        keywords: ['descalificante', 'violencia', 'expulsion', 'flagrante', 'agresion', 'tiros libres'],
        content: `38.1 Definición\n38.1.1 Una falta descalificante es cualquier infracción antideportiva flagrante cometida por jugadores, sustitutos, entrenadores o acompañantes.\n38.1.2 Si el primer entrenador es descalificado, lo sustituye el ayudante en acta; si no hay, el capitán (CAP).\n\n38.2 Violencia\n38.2.1/38.2.3 Los actos de agresión flagrantes deben atajarse de inmediato. Cualquier persona responsable de agresión contra adversarios o árbitros debe ser descalificada. El árbitro principal informará al organismo responsable.\n38.2.4 Fuerzas del orden: Solo intervienen a petición de los árbitros, salvo invasión de pista por espectadores.\n38.2.6 Equipamiento: No se permiten acciones que deterioren el equipamiento. Reincidencia tras aviso conlleva técnica o descalificante.\n\n38.3 Penalización\n38.3.1 Registro: Se anota al infractor.\n38.3.2 El descalificado debe ir al vestuario o abandonar las instalaciones.\n\n38.3.3 Ejecución de tiros libres:\n• Si NO hay contacto: Los lanza cualquier oponente designado por su entrenador.\n• Si HAY contacto: Los lanza el jugador objeto de la falta.\n• Seguidos de: Saque desde la línea de saque en pista delantera (o salto inicial en el 1Q).\n\n38.3.4 Número de tiros libres:\n• Falta sin contacto: 2 tiros libres.\n• Jugador NO en acción de tiro: 2 tiros libres.\n• Jugador EN acción de tiro: Si encesta (Canasta + 1 TL); si NO encesta (2 o 3 TL).\n• Descalificación del primer entrenador: 2 tiros libres.\n• Descalificación de personal de banquillo (ayudante, sustituto, acompañante): Se anota al entrenador como técnica ('B'): 2 tiros libres.\n\nCasos de enfrentamiento (pelea):\n• Por cada falta descalificante de asistente, sustituto o jugador excluido por participación activa: 2 tiros libres (anotada al infractor).\n• Por cada falta descalificante de acompañante: 2 tiros libres (anotada al primer entrenador).\n\nLas penalizaciones se ejecutarán salvo que existan penalizaciones iguales en contra, que se cancelarán.`
      },
      {
        id: 'art-39',
        title: 'Art. 39: Enfrentamientos',
        keywords: ['enfrentamiento', 'pelea', 'banquillo', 'descalificacion', 'orden', 'pelea'],
        content: `39.1 Definición\nUn enfrentamiento es una interacción física mutua entre 2 o más oponentes y personas autorizadas a estar en el banquillo. Aplica a quienes abandonan la zona de banquillo durante el conflicto.\n\n39.2 Regla\n39.2.1 Serán descalificados los sustitutos, jugadores excluidos o acompañantes que abandonen la zona de banquillo.\n\n39.2.2 Excepción: El primer entrenador y el ayudante pueden salir ÚNICAMENTE para ayudar a los árbitros a restaurar el orden. En este caso, no serán descalificados.\n\n39.2.3 Si el entrenador o ayudante salen y NO ayudan a restaurar el orden, serán descalificados.\n\n39.3 Penalización\n39.3.1 Independientemente del número de personas que salgan del banquillo, solo se sancionará una falta técnica ('B') al primer entrenador.\n\n39.3.2 Reanudación (si se descalifica a gente de ambos equipos y no hay más penalizaciones):\n• Si hubo canasta válida: Saque de fondo para el equipo que la recibió.\n• Si un equipo tenía control del balón: Saque para ese equipo desde donde comenzó el conflicto.\n• Si no había control: Situación de salto.\n\n39.3.3 Registro: Las faltas descalificantes se anotan en el acta (B.8.3) y NO cuentan como faltas de equipo.\n\n39.3.4/39.3.5 Los jugadores en pista implicados se rigen por el Art. 42. El personal de banquillo implicado ACTIVAMENTE en la pelea se penaliza según el Art. 38.3.4 (2 tiros libres por cada falta descalificante).`
      },
    ]
  },
  {
    id: 'reg-rule-7',
    title: 'REGLA 7: DISPOSICIONES GENERALES',
    book: 'REGLAMENTO',
    articles: [
      {
        id: 'art-40',
        title: 'Art. 40: 5 faltas de jugador',
        keywords: ['5 faltas', 'sustitucion', 'excluido', '30 segundos', 'jugador excluido'],
        content: `40.1 Regla\nUn jugador que haya cometido 5 faltas será informado por el árbitro y deberá abandonar el partido de inmediato. Debe ser sustituido en un tiempo máximo de 30 segundos.\n\n40.2 Faltas tras la 5ª\nLas faltas cometidas por un jugador que ya haya cometido 5 faltas anteriormente se consideran faltas de jugador excluido. Estas se cargarán y anotarán en el acta al primer entrenador ('B').`
      },
      {
        id: 'art-41',
        title: 'Art. 41: Faltas de equipo: Penalización',
        keywords: ['faltas de equipo', 'bonus', 'penalización', 'tiros libres', 'cuarto', 'prórroga'],
        content: `41.1 Definición\n41.1.1 Un equipo está en situación de penalización (bonus) tras cometer 4 faltas en un cuarto.\n\n41.1.2 Intervalos: Las faltas cometidas durante un intervalo de juego se consideran parte del cuarto o prórroga siguiente.\n\n41.1.3 Prórrogas: Todas las faltas cometidas en las prórrogas se consideran parte del cuarto cuarto (4Q) a efectos de penalización.\n\n41.2 Regla\n41.2.1 Cuando un equipo está en bonus, las faltas personales sobre un jugador que NO esté en acción de tiro se penalizarán con 2 tiros libres (lanzados por quien recibió la falta).\n\n41.2.2 Excepción (Falta en ataque): Si la falta la comete un jugador del equipo que tiene el control del balón (o derecho a él), no se conceden tiros libres; se penaliza con un saque para los adversarios.`
      },
      {
        id: 'art-42',
        title: 'Art. 42: Situaciones especiales',
        keywords: ['situaciones especiales', 'compensación', 'cancelación', 'penalizaciones', 'orden de faltas'],
        content: `42.1 Definición\nSurgen cuando se cometen infracciones adicionales durante el mismo período de reloj parado tras una infracción inicial.\n\n42.2 Procedimiento\n42.2.1 Se anotarán todas las faltas y se identificarán sus penalizaciones.\n42.2.2 Se determinará el orden exacto en que se cometieron.\n42.2.3 Cancelación: Se cancelarán todas las penalizaciones iguales contra ambos equipos (ej. 2 tiros libres contra 2 tiros libres) y las faltas dobles en su orden de sanción. Una vez compensadas, se consideran como no ocurridas.\n\n42.2.4 Falta Técnica: Su penalización se administra PRIMERO, antes que cualquier otra, independientemente del orden de las faltas (salvo si la técnica es al entrenador por descalificación de personal de banquillo, que sigue el orden cronológico).\n\n42.2.5 Posesión: El derecho a posesión de la ÚLTIMA penalización a administrar cancela cualquier derecho a posesión anterior.\n\n42.2.6 Balón vivo: Una vez el balón esté vivo (1er tiro libre o saque), esa penalización ya no puede usarse para compensar ninguna otra restante.\n\n42.2.8 Reanudación (Si no quedan penalizaciones tras compensar):\n• Si hubo canasta válida: Saque de fondo para el equipo que la recibió.\n• Si un equipo tenía control: Saque para ese equipo desde el punto más cercano a la primera infracción.\n• Si no había control: Situación de salto.`
      },
      {
        id: 'art-43',
        title: 'Art. 43: Tiros libres',
        keywords: ['tiros libres', 'pasillo', 'violacion tiro libre', 'lanzador', 'sustitucion'],
        content: `43.1 Definición\n43.1.1 Oportunidad de conseguir 1 punto sin oposición desde detrás de la línea de tiros libres.\n43.1.2 Una serie incluye todos los tiros libres y la posible posesión resultante de una única penalización.\n\n43.2 Regla\n43.2.1 Designación del tirador (Faltas con contacto):\n• El jugador objeto de la falta debe lanzarlos.\n• Si es sustituido, debe lanzar antes de salir.\n• Si sale por lesión, 5 faltas o descalificación, su sustituto los lanza. Si no hay sustituto, un compañero designado por el entrenador.\n\n43.2.2 Faltas Técnicas o Descalificantes sin contacto: Los lanza cualquier oponente designado por el entrenador.\n\n43.2.3 El tirador:\n• Debe lanzar antes de 5 segundos.\n• No puede tocar la línea ni entrar en la zona hasta que el balón toque el aro.\n• No puede amagar el tiro.\n\n43.2.4 Jugadores en el pasillo:\n• Máximo 3 defensores y 2 atacantes.\n• No pueden entrar en la zona hasta que el balón SALGA de las manos del tirador.\n• No pueden desconcertar al tirador.\n\n43.3 Penalización\n43.3.1 Violación del tirador: El punto no vale. Saque para el rival desde la prolongación de la línea de tiros libres.\n\n43.3.2 Violación de otro jugador (Si entra): El punto vale y la violación se ignora.\n\n43.3.3 Violación si NO entra:\n• Si es el tirador o compañero: Saque rival.\n• Si es un adversario: Se repite el tiro (nuevo tiro libre).\n• Si son ambos equipos (en el último tiro): Situación de salto.`
      },
      {
        id: 'art-44',
        title: 'Art. 44: Errores corregibles',
        keywords: ['error corregible', 'tiros libres', 'jugador equivocado', 'anotacion', 'corregir'],
        content: `44.1 Definición\nLos árbitros pueden corregir un error si se ha ignorado involuntariamente una regla únicamente en:\n• Conceder/no conceder tiros libres merecidos.\n• Conceder o anular puntos por error.\n• Permitir que lance los tiros libres el jugador equivocado.\n\n44.2 Procedimiento general\n44.2.1 Plazo: El error debe descubrirse antes de que el balón esté VIVO tras el primer balón MUERTO después de que el reloj se haya puesto en marcha tras el error.\n44.2.3 Validez: Todo lo ocurrido antes de descubrir el error (puntos, faltas, tiempo) es válido.\n44.2.4 Reanudación: Tras la corrección, el juego sigue desde donde se detuvo para corregir (salvo que las reglas indiquen otra cosa).\n44.2.5 Jugadores: Si el implicado está en el banquillo, debe volver a pista para la corrección. Si fue por 5 faltas o lesión, lo hace su sustituto.\n44.2.6 Otros errores: Errores de acta, tiempo o reloj de tiro pueden corregirse hasta antes de que el árbitro principal firme el acta.\n\n44.3 Procedimientos especiales\n44.3.1 Tiros libres no merecidos: Se cancelan los tiros. Si el reloj no se movió, saque lateral. Si se movió, depende de quién tenga el control (control del mismo equipo = saque; cambio de equipo = situación de salto).\n\n44.3.2 Tiros libres no concedidos: \n• Si la posesión no ha cambiado: se lanzan y se sigue normal.\n• Si el equipo anotó tras el saque erróneo: se ignora el error.\n\n44.3.3 Jugador equivocado: Se cancelan los tiros libres y la posesión (si la había). Saque para los oponentes en la prolongación de la línea de tiros libres.`
      }
    ]
  },
  {
    id: 'reg-rule-8',
    title: 'REGLA 8: ÁRBITROS',
    book: 'REGLAMENTO',
    articles: [
      {
        id: 'art-45',
        title: 'Art. 45: Árbitros, oficiales de mesa y comisario',
        keywords: ['arbitros', 'oficiales de mesa', 'comisario', 'anotador', 'cronometrador', 'uniforme'],
        content: `45.1 Equipo arbitral: Compuesto por 1 árbitro principal y 1 o 2 auxiliares, asistidos por oficiales de mesa y un comisario (si lo hay).\n\n45.2 Oficiales de mesa: Serán un anotador, un ayudante de anotador, un cronometrador y un operador del reloj de tiro.\n\n45.3 El Comisario: Se ubica entre el anotador y el cronometrador. Supervisa el trabajo de la mesa y asiste a los árbitros en el desarrollo del partido.\n\n45.4 Independencia: Los árbitros no deben tener relación con los equipos participantes.\n\n45.5 Autoridad: Deben dirigir según las reglas y NO tienen autoridad para modificarlas.\n\n45.6/45.7 Uniformidad: \n• Árbitros: Camiseta oficial, pantalón largo negro, calcetines y zapatillas negras.\n• Oficiales de mesa: También deben estar uniformados.`
      },
      {
        id: 'art-46',
        title: 'Art. 46: Árbitro principal: Obligaciones y Facultades',
        keywords: ['arbitro principal', 'facultades', 'firma acta', 'autoridad', 'balon', 'decisión final'],
        content: `El árbitro principal:\n\n46.1 al 46.3 Inspeccionará el equipamiento, designará los relojes oficiales y elegirá el balón de juego (entre al menos 2 balones usados proporcionados por el local).\n\n46.4 Seguridad: No permitirá que los jugadores usen objetos que puedan causar lesiones.\n\n46.5 Inicio del juego: Administrará el salto inicial (1Q) y los saques de posesión alterna (demás periodos).\n\n46.7/46.14 Autoridad total: Puede detener el partido, determinar incomparecencias y decidir sobre cualquier aspecto no contemplado expresamente en estas reglas.\n\n46.9 Jurisdicción y Acta:\n• Su autoridad comienza 20 minutos antes del inicio programado.\n• Finaliza al sonar la señal de conclusión aprobada por él.\n• Concluye su vinculación al firmar el acta al final del partido.\n\n46.10 Informes: Hará constar en el reverso del acta cualquier falta descalificante, incomparecencia o conducta antideportiva ocurrida antes de los 20 min previos o tras el final del juego antes de firmar.\n\n46.11 Decisión final: Tomará la decisión definitiva en caso de desacuerdo entre árbitros, pudiendo consultar a auxiliares, mesa o comisario.\n\n46.13 Avisos de tiempo: Hará sonar el silbato cuando resten 3 min y 1.5 min para el 1Q y 3Q, y 30 segundos para el 2Q, 4Q y prórrogas.`
      },
      {
        id: 'art-47',
        title: 'Art. 47: Árbitros: Obligaciones y Derechos',
        keywords: ['arbitros', 'silbato', 'ventaja', 'desventaja', 'lesion arbitro', 'protesta'],
        content: `47.1 Alcance: Los árbitros tienen autoridad sobre infracciones dentro y fuera de las líneas limítrofes, incluyendo mesa, banquillos e inmediaciones.\n\n47.2 Uso del silbato: Se usará ante infracciones, final de periodos o para detener el juego. NO sonará tras canasta válida o cuando el balón pase a estar vivo.\n\n47.3 Criterio de juicio (Principios fundamentales):\n• Mantener la integridad del juego y el espíritu de las reglas.\n• Ventaja/Desventaja: No pitar contactos incidentales que no afecten el juego.\n• Sentido común: Adaptarse al nivel y actitud de los jugadores.\n• Fluidez: Mantener el equilibrio entre el control y la continuidad del juego.\n\n47.4 Protestas: Si hay una protesta formal, el árbitro principal debe informar por escrito a los organizadores.\n\n47.5 Lesión de un árbitro: Si un árbitro no puede continuar, el partido se reanuda tras un máximo de 5 minutos. El/los restante(s) arbitrarán hasta el final, salvo que se pueda sustituir por otro cualificado.\n\n47.7 Independencia: Cada árbitro tiene autoridad propia y no puede cuestionar las decisiones adoptadas por sus compañeros.\n\n47.8 Carácter definitivo: Las decisiones arbitrales son finales y no pueden ser refutadas, excepto en casos de protesta formal (Anexo C).`
      },
      {
        id: 'art-48',
        title: 'Art. 48: El anotador y el ayudante de anotador: Obligaciones',
        keywords: ['anotador', 'ayudante', 'acta', 'tanteo', 'faltas', 'posesion alterna', 'marcador'],
        content: `48.1 Obligaciones del anotador: Dispondrá del acta oficial y llevará registro de:\n• Equipos: Nombres, números y quintetos iniciales. Avisará al árbitro de cualquier infracción en sustituciones.\n• Tanteo: Registro arrastrado de canastas y tiros libres.\n• Faltas: Control individual de faltas. Debe avisar al árbitro cuando un jugador deba salir por 5 faltas o ser descalificado (2 técnicas, 2 antideportivas o combinación).\n• Tiempos muertos: Notificar cuando un equipo agote sus tiempos muertos.\n• Posesión alterna: Manejar la flecha y cambiar su dirección tras la primera parte.\n• Coach's Challenge: Registrar el uso del "challenge" y avisar si se solicita uno adicional erróneamente.\n\n48.2 El ayudante de anotador: Manejará el marcador y apoyará a la mesa. En caso de discrepancia, el ACTA tiene prioridad sobre el marcador.\n\n48.3 Errores de anotación:\n• Durante el partido: Avisar en el primer balón muerto.\n• Antes de la firma del árbitro principal: El error DEBE corregirse, incluso si cambia el resultado final.\n• Después de la firma: El error ya no se puede corregir. Se requiere un informe detallado a la organización.`
      },
      {
        id: 'art-49',
        title: 'Art. 49: El cronometrador: Obligaciones',
        keywords: ['cronometrador', 'reloj de partido', 'tiempo muerto', 'intervalo', '5 faltas', 'poner en marcha'],
        content: `49.1 Obligaciones generales:\n• Medir el tiempo de juego, tiempos muertos e intervalos.\n• Asegurar que la señal suene automáticamente al final de cada periodo.\n• Indicar el número de faltas de cada jugador levantando el indicador visible para los entrenadores.\n• Avisar inmediatamente al árbitro cuando un jugador cometa su 5ª falta.\n• Manejar las señales de faltas de equipo (poner en rojo tras la 4ª falta).\n• Notificar sustituciones y tiempos muertos.\n\n49.2 Medición del tiempo de juego:\n- Poner en marcha el reloj cuando:\n  • En un salto, el balón es tocado legalmente.\n  • Tras tiro libre fallido (si sigue vivo), el balón toca a un jugador en pista.\n  • En un saque, el balón toca a un jugador en pista.\n- Detener el reloj cuando:\n  • Finaliza el tiempo del cuarto/prórroga.\n  • El árbitro hace sonar su silbato con balón vivo.\n  • Se anota canasta contra el equipo que pidió tiempo muerto.\n  • Se anota canasta en los últimos 2:00 minutos (4Q y prórrogas).\n  • Suena la señal del reloj de tiro con equipo en control.\n\n49.3 Gestión de Tiempos Muertos:\n• Iniciar cronómetro con la señal del árbitro.\n• Avisar con señal a los 50 segundos y al finalizar el tiempo (60s).\n\n49.4 Gestión de Intervalos:\n• Iniciar al finalizar un periodo.\n• Avisar a los árbitros a los 3 min y 1.5 min antes del 1Q y 3Q.\n• Avisar 30 segundos antes del inicio del 2Q, 4Q y prórrogas.`
      },
      {
        id: 'art-50',
        title: 'Art. 50: Operador del reloj de tiro: Obligaciones',
        keywords: ['reloj de tiro', '24 segundos', '14 segundos', 'posesion', 'reinicio', 'aro'],
        content: `50.1 Iniciar o continuar la cuenta:\n• Cuando un equipo obtenga el control de un balón vivo en pista.\n• En un saque, cuando el balón toca o es tocado legalmente por cualquier jugador en pista.\n\n50.2 Detener y mantener el tiempo restante (Sin reiniciar):\n• Balón sale fuera.\n• Jugador del mismo equipo lesionado.\n• Falta técnica del equipo en control.\n• Situación de salto o doble falta (si mantiene la posesión el mismo equipo).\n• En pista delantera tras falta/violación si el reloj muestra 14 segundos o más.\n\n50.3 Reiniciar a 24 segundos (y apagar cifra):\n• El balón entra legalmente en la canasta.\n• El balón toca el aro rival y es controlado por el equipo que NO tenía el control previamente.\n• Saque desde pista trasera por falta, violación o situación de salto a favor del equipo que no tenía el control.\n• Se conceden tiros libres.\n\n50.4 Reiniciar a 14 segundos:\n• Saque en pista delantera si el mismo equipo mantiene control tras falta/violación y el reloj marcaba 13 segundos o menos.\n• Equipo obtiene control en pista delantera tras falta, violación o salto del rival.\n• Saque tras falta antideportiva o descalificante (desde línea de saque en pista delantera).\n• El balón toca el aro y el mismo equipo que lanzó recupera el control.\n• En los últimos 2:00 (4Q/prórroga), tras tiempo muerto, el entrenador elige sacar en pista delantera y el reloj mostraba 14s o más.\n\n50.5 Apagar el dispositivo:\n• Cuando un equipo obtenga un nuevo control y queden menos de 14 segundos en el reloj de partido (al final de un cuarto).\n\nNota: La señal del reloj de tiro solo detiene el juego si un equipo tiene el control del balón.`
      },
      {
        id: 'apendice-a',
        title: 'Apéndice A: Señales de los árbitros',
        keywords: ['señales', 'gestos', 'arbitros', 'tanteo', 'reloj', 'faltas', 'violaciones'],
        content: `A.1 Las señales de los manos ilustradas en las reglas son las únicas señales oficiales. Deben ser utilizadas por todos los árbitros en todos los partidos.\n\nA.2 Es importante que los oficiales de mesa también se familiaricen con estas señales. \n\nCategorías de señales:\n• Tanteo (1, 2, 3 puntos).\n• Reloj (Parar reloj, parar por falta, reanudar).\n• Administrativas (Sustitución, tiempo muerto, balón al aire).\n• Violaciones (Pasos, dobles, 3 segundos, etc.).\n• Comunicación de faltas a la mesa (Número de jugador, tipo de falta, número de tiros/dirección).\n• Administración de tiros libres.\n\nNota: El árbitro principal puede usar señales adicionales para aclarar decisiones verbalmente.`
      },
      {
        id: 'apendice-b',
        title: 'Apéndice B: El Acta del Partido',
        keywords: ['acta', 'anotador', 'rellenar acta', 'encabezado', 'equipos', 'firmas', 'protesta', 'forma 21'],
        content: `B.1 El acta oficial es el documento legal del partido (Forma 21 en muchos torneos).\n\nB.2 Preparación (Al menos 20 min antes):\n• Encabezado: Nombres de equipos, fecha, hora, lugar, árbitros.\n• Lista de equipos: Jugadores con número de licencia y dorsal. Los 5 iniciales se marcan con una 'X' pequeña (luego círculo).\n• Entrenadores: Nombres y licencias.\n\nB.3 Durante el partido:\n• Tanteo arrastrado: Se tacha la puntuación acumulada y se escribe el número del jugador que anotó.\n• Faltas:\n  - P: Personal.\n  - T: Técnica.\n  - U: Antideportiva.\n  - D: Descalificante.\n  - F: Descalificante por pelea (banquillo).\n  - C: Técnica al entrenador.\n  - B: Técnica al banquillo (anotada al entrenador).\n\nB.4 Final del partido:\n• Cerrar el tanteo con doble línea gruesa.\n• Anotar el tanteo final de cada cuarto y el final del partido.\n• Nombre del equipo ganador.\n• Firmas: Cronometrador, 24", anotador, comisario y árbitros.\n\nB.5 Firma del capitán (Protesta): Debe firmar en el espacio "Firma del capitán en caso de protesta" INMEDIATAMENTE al acabar el partido.`
      },
      {
        id: 'apendice-c',
        title: 'Apéndice C: Procedimiento de protesta',
        keywords: ['protesta', 'reclamacion', 'capitan', '20 minutos', 'resultado', 'error'],
        content: `C.1 Un equipo puede protestar si cree que sus intereses fueron afectados por:\n• Error en la anotación, tiempo o reloj de tiro no corregido.\n• Decisión de incomparecencia.\n• Violación de las reglas de elegibilidad.\n\nC.2 Procedimiento:\n1. El Capitán (CAP) debe firmar el acta en el espacio reservado "Firma del capitán en caso de protesta" INMEDIATAMENTE al finalizar el partido.\n2. El equipo tiene 20 minutos tras el final para presentar la confirmación escrita.\n3. Depósito: Se debe abonar una fianza (según normativa local/FIBA, habitualmente 1.500 CHF o equivalente).\n\nC.3 Decisión: El árbitro principal debe informar por escrito. La decisión final corresponde al Juez Único o Comité de Competición.`
      },
      {
        id: 'apendice-d',
        title: 'Apéndice D: Clasificación de los equipos',
        keywords: ['clasificacion', 'empate', 'average', 'puntos', 'grupos', 'triple empate'],
        content: `D.1 Sistema de puntos:\n• Ganado: 2 puntos.\n• Perdido: 1 punto.\n• Perdido por incomparecencia (20-0): 0 puntos.\n• Perdido por inferioridad (menos de 2 jugadores): 1 punto.\n\nD.2 Empate entre 2 equipos:\nSe decide por el resultado del partido jugado entre ellos (basket-average particular).\n\nD.3 Empate entre más de 2 equipos:\nSe forma una "liguilla" solo con los partidos jugados entre los equipos empatados.\nCriterios de desempate (en orden):\n1. Puntos de clasificación en la liguilla (victorias/derrotas).\n2. Diferencia de puntos (basket-average) en la liguilla.\n3. Mayor número de puntos anotados en la liguilla.\n4. Si persiste, diferencia de puntos en TODOS los partidos del grupo.\n5. Mayor número de puntos anotados en TODOS los partidos.\n6. Sorteo.`
      },
      {
        id: 'apendice-e',
        title: 'Apéndice E: Tiempos muertos para medios de comunicación',
        keywords: ['television', 'tiempos muertos', 'medios', 'publicidad'],
        content: `(Solo aplicable si la competición lo decide)\n\nE.1 Definición: Tiempo muerto obligatorio de 60, 75, 90 o 100 segundos para publicidad.\n\nE.2 Regla habitual (ejemplo): \nSi no se ha pedido tiempo muerto en los primeros 5 minutos del cuarto, se concede en el primer balón muerto con reloj parado después de que el reloj marque 5:00. Se carga al equipo que no lo haya pedido o al local si ninguno lo hizo.`
      },
      {
        id: 'apendice-f',
        title: 'Apéndice F: Sistema de Instant Replay (IRS)',
        keywords: ['irs', 'replay', 'video', 'monitor', 'revision', 'challenge'],
        content: `F.1 Uso del vídeo: Los árbitros pueden revisar situaciones específicas para confirmar o anular una decisión.\n\nF.2 Situaciones revisables (Ejemplos):\n• Al final del cuarto/partido: Si el tiro entró a tiempo o no.\n• Reloj de partido: Cuánto tiempo debe quedar.\n• Faltas: Identificar al infractor, corregir tipo de falta (U, D, T) o pelea.\n• Violaciones: Si un tiro es de 2 o 3 puntos.\n• Últimos 2 minutos: Quién tocó el balón antes de salir fuera, interferencias.\n\nF.3 Head Coach Challenge (HCC):\n• El entrenador puede solicitar 1 revisión por partido ("Challenge") de situaciones revisables.\n• Debe indicarlo inmediatamente y hacer la señal con el dedo índice girando.\n• Si la revisión le da la razón, mantiene el Challenge (en algunas competiciones) o simplemente se corrige; si no, pierde un tiempo muerto.`
      },
    ]
  }
];
export const DATA_OBRI: RuleChapter[] = [
  {
    id: 'obri-chap-1',
    title: 'OBRI: INTERPRETACIONES',
    book: 'OBRI',
    articles: [
      {
        id: 'obri-art-4',
        title: 'OBRI Art. 4: Equipos (Interpretaciones)',
        keywords: ['uniformes', 'accesorios', 'mangas', 'pierneras', 'color', 'camisetas', 'calcetines', 'zapatillas'],
        content: `4-1. Uniformes y Accesorios\n\n4.2.1 Camisetas interiores (T-shirts):\n• NO se permite usar camisetas con manga corta o larga debajo de la camiseta de juego.\n• SÍ se permite ropa de compresión (mangas/pierneras), pero debe ser del mismo color dominante sólido que las camisetas (para brazos) o pantalones (para piernas).\n\n4.4.2 Colores de accesorios de compresión:\nTodos los jugadores del equipo deben llevar los accesorios de compresión (mangas, pierneras, cintas de cabeza, muñequeras) del MISMO COLOR SÓLIDO.\nLos colores permitidos son:\n• Blanco.\n• Negro.\n• El color dominante de la camiseta (para brazos/cabeza) o del pantalón (para piernas).\n\nCASOS PRÁCTICOS:\n\n• ¿Pueden unos jugadores llevar mangas negras y otros blancas? NO. Todo el equipo debe ir igual (o no llevar nada).\n\n• ¿Calcetines? Los calcetines NO están regulados por la regla de "mismo color para todo el equipo" en las interpretaciones FIBA generales (aunque algunas ligas nacionales sí lo exigen), pero deben ser visibles.\n\n• Zapatillas: Pueden ser de cualquier combinación de colores. No tienen que coincidir entre jugadores. Se permiten zapatillas con luces intermitentes NO reflectantes.\n\n• Protectores nasales/faciales: Deben ser de material duro, transparente o del color del uniforme, y no deben tener bordes afilados.\n\n• Peinado/Pelo: Si un jugador tiene el pelo largo (rastas, trenzas) que oscurece el número, debe recogérselo. Las gomas o cintas para el pelo deben cumplir la regla de color de accesorios.`
      },
      {
        id: 'obri-art-5',
        title: 'OBRI Art. 5: Lesión y asistencia (Interpretaciones)',
        keywords: ['lesion', 'asistencia', 'medico', 'sangre', 'recuperacion', 'sustitucion obligatoria'],
        content: `5-1. Jugadores: Lesión y asistencia\n\nRegla General:\nSi un jugador se lesiona, los árbitros pueden detener el juego. Si el jugador no se recupera inmediatamente (aprox. 15 segundos) o recibe asistencia, debe ser sustituido.\n\nCASOS PRÁCTICOS:\n\n5-1 ¿Cuándo es OBLIGATORIA la sustitución?\nEl jugador lesionado DEBE ser sustituido si:\n• El entrenador, ayudante o acompañante entra en el terreno de juego (con o sin permiso) para atenderle.\n• El médico entra en el terreno de juego (con o sin permiso) para atenderle.\n• El jugador no se recupera en 15 segundos.\n• El jugador necesita asistencia para salir del campo.\n\nExcepción (Puede quedarse):\n• Si el médico o entrenador entran SOLO para atender a un oponente, el jugador propio no tiene por qué salir.\n• Si el equipo tiene solo 5 jugadores (para no quedarse con 4).\n• Si el jugador se recupera rápido (<15s) y NADIE ha entrado a atenderle.\n• Si el entrenador pide tiempo muerto y, al finalizarlo, el jugador ya está recuperado (y el árbitro verifica que puede jugar).\n\n5-3 Sangre:\nCualquier jugador con una herida que sangre o con sangre en el uniforme debe ser sustituido. Solo puede volver si el sangrado se detiene y la herida/equipo se cubre/limpia de forma segura.\n\n5-4 Asistencia a un jugador con tiros libres:\nSi un jugador recibe una falta de tiro y se lesiona:\n• Si debe ser sustituido (ver arriba), su sustituto lanzará los tiros libres.\n• El sustituto no puede ser sustituido hasta que haya jugado una fase de reloj en marcha.\n• Si el equipo tiene solo 5 jugadores, el jugador lesionado podría lanzar (si puede) o el equipo jugará con 4 (y los tiros los lanza el capitán si el lesionado sale).`
      },
      {
        id: 'obri-art-7',
        title: 'OBRI Art. 7: Entrenadores (Interpretaciones)',
        keywords: ['entrenador', 'lista de equipo', 'cinco inicial', 'capitan', 'lesion entrenador', 'ayudante', 'banquillo'],
        content: `7-1. Entrenadores: Obligaciones y derechos\n\n7.1 Lista de equipo y Cinco inicial:\n• Al menos 40 minutos antes del partido: El entrenador debe dar la lista con los nombres y números de los miembros del equipo.\n• Al menos 10 minutos antes del partido: El entrenador debe indicar los 5 jugadores iniciales y firmar el acta. El entrenador del equipo 'A' (primero en el programa) debe hacerlo primero.\n\nCASOS PRÁCTICOS:\n\n7-1 ¿Qué pasa si un equipo presenta la lista tarde?\nEs una violación del procedimiento, pero el partido no debe suspenderse por esto. El comisario o árbitro principal advertirá al entrenador. No hay sanción de falta técnica inmediata por retraso administrativo, salvo que se use para retrasar el inicio del juego adrede.\n\n7-4/7-5 Entrenador que no puede continuar (Lesión/Descalificación):\nSi el primer entrenador no puede continuar y NO hay entrenador ayudante inscrito en el acta (o este también es descalificado):\n• El Capitán (CAP) asumirá las funciones de entrenador.\n• Si el Capitán debe salir por 5 faltas o lesión, puede seguir actuando como entrenador desde el banquillo.\n• Si el Capitán es descalificado o debe salir por herida sangrante (y no puede quedarse), debe designar a otro jugador como nuevo Capitán, quien asumirá también el rol de entrenador.\n\n7-6 ¿Puede el "Capitán-Entrenador" permanecer de pie?\n• Si el Capitán actúa como entrenador y está en el banquillo (porque fue sustituido o expulsado por 5 faltas), SÍ puede permanecer de pie dirigiendo.\n• Si el Capitán está jugando en pista, NO puede actuar como entrenador "de pie" (obviamente está jugando).\n\n7-8 head Coach Challenge (HCC):\nEl entrenador es el único autorizado para solicitar el Challenge (ver Apéndice F). Si el entrenador no está presente, lo puede pedir el ayudante (si está inscrito) o el capitán.`
      },
      {
        id: 'obri-art-8',
        title: 'OBRI Art. 8: Tiempo de juego (Interpretaciones)',
        keywords: ['tiempo de juego', 'final de cuarto', 'bocina', 'falta sobre la bocina', 'tiro sobre la bocina', 'intervalo', 'irs'],
        content: `8-1. Tiempo de juego\n\nEl intervalo comienza:\n• 20 minutos antes del inicio programado.\n• Cuando suena la señal del reloj (bocina) de final de cuarto.\n• Si hay revisión de IRS al final del cuarto: el intervalo comienza solo después de que el árbitro comunique la decisión final.\n\nCASOS PRÁCTICOS (Faltas al final del periodo):\n\n8-2 Falta cerca del final del cuarto:\nB1 comete falta sobre A1 (en acción de tiro o no) aproximadamente al mismo tiempo que suena la señal de final de cuarto.\n\n• Interpretación: Los árbitros deben decidir si la falta ocurrió ANTES o DESPUÉS de la señal.\n\n  - Si fue ANTES: La falta es válida. Se lanzan tiros libres si corresponden. El reloj se ajusta al tiempo restante cuando ocurrió la falta.\n\n  - Si fue DESPUÉS: La falta se IGNORA (salvo que sea Antideportiva o Descalificante). La canasta, si entra, no vale (a menos que el balón ya estuviera en el aire antes de la señal).\n\n8-3 Falta tras la señal con balón en el aire:\nA1 tira a canasta y el balón está en el aire cuando suena la señal de final de partido. Después de la señal, B1 comete falta sobre A1 (aún en el aire).\n• El balón entra: La canasta vale (2 o 3 puntos).\n• La falta de B1 se IGNORA (porque ocurrió con tiempo expirado), salvo que sea Antideportiva o Descalificante.`
      },
      {
        id: 'obri-art-9',
        title: 'OBRI Art. 9: Comienzo y final (Interpretaciones)',
        keywords: ['comienzo partido', '5 jugadores', 'salto inicial', 'intervalo', 'falta antes del inicio', 'balon vivo'],
        content: `9-1. Comienzo del partido (5 jugadores)\n\nRegla General:\nEl partido no puede comenzar si uno de los equipos no tiene 5 jugadores en el terreno de juego preparados para jugar.\n\nCASOS PRÁCTICOS:\n\n9-1 Menos de 5 jugadores a la hora de inicio:\nA la hora programada, el equipo A tiene menos de 5 jugadores listos en el campo.\n• El árbitro NO debe iniciar el partido.\n• Si el equipo A se presenta con 5 jugadores dentro de los 15 minutos siguientes, el partido comenzará (sin sanción).\n• Si pasan 15 minutos y no tienen 5 jugadores, el equipo A pierde por incomparecencia (20-0).\n\n9-3/9-4 Faltas durante el intervalo de juego (antes del salto inicial):\nSi se comete una falta (técnica, antideportiva o descalificante) ANTES de que el balón salga de las manos del árbitro principal en el salto inicial:\n• Es una falta cometida "durante un intervalo de juego".\n• Se sanciona y los tiros libres (si los hay) se administran ANTES del salto inicial.\n• El partido NO comienza con los tiros libres, sino que, tras administrarlos, se realiza el salto entre dos o saque según corresponda (generalmente se mantiene el salto entre dos salvo que la falta conlleve posesión, como una antideportiva).\n\n9-6 ¿Cuándo comienza exactamente el partido?\nEl partido comienza oficialmente cuando el balón sale de las manos del árbitro principal en el lanzamiento del salto entre dos.\n(Nota para la mesa: El reloj de partido y de tiro NO se encienden ahí, sino cuando el balón es tocado legalmente por un saltador).`
      },
      {
        id: 'obri-art-10',
        title: 'OBRI Art. 10: Estado del balón (Interpretaciones)',
        keywords: ['balon vivo', 'balon muerto', 'canasta valida', 'falta durante tiro', 'movimiento continuo'],
        content: `10-1. Estado del balón\n\nRegla General (Balón no muerto):\nEl balón NO queda muerto y la canasta SÍ vale si un jugador está en acción de tiro (movimiento continuo) y un defensor comete una falta (sobre cualquier oponente) o una técnica después de que haya comenzado dicho movimiento.\n\nCASOS PRÁCTICOS:\n\n10-2 Falta de la defensa lejos del balón:\nA1 está tirando. B2 comete falta sobre A2 (lejos del balón). A1 finaliza el tiro y entra.\n• La canasta ES VÁLIDA.\n• Si el equipo B no está en bonus: Saque para el equipo A desde donde fue la falta.\n• Si el equipo B está en bonus (5ª falta): A2 lanzará 2 tiros libres. (El partido sigue tras el último tiro libre).\n\n10-3 Falta del equipo en ataque (Control de balón):\nA1 está tirando. A2 comete falta sobre B2 (falta en ataque/control). A1 finaliza el tiro y entra.\n• El balón queda MUERTO inmediatamente cuando A2 comete la falta.\n• La canasta NO ES VÁLIDA (incluso si el balón ya había salido de la mano).\n• Saque para el equipo B.`
      },
      {
        id: 'obri-art-12',
        title: 'OBRI Art. 12: Salto entre dos y posesión alterna (Interpretaciones)',
        keywords: ['salto entre dos', 'flecha', 'posesion alterna', 'saque alterna', 'error flecha', 'violacion saque'],
        content: `12-1. Salto entre dos y posesión alterna\n\n12-1 El equipo que gana el salto inicial:\nEl equipo que NO obtiene el control del balón tras el salto inicial tendrá derecho a la primera posesión alterna (la flecha apuntará hacia su canasta de ataque).\n\n12-3 Saque de posesión alterna y faltas:\nSi durante un saque de posesión alterna:\n• El equipo que realiza el saque comete una VIOLACIÓN (ej. 5 segundos, pisar línea): Pierde el saque Y la flecha se gira inmediatamente hacia el oponente.\n• Se comete una FALTA (de cualquiera de los dos equipos) antes de que el balón toque a un jugador en pista: El saque NO pierde su condición de "alterna". La flecha NO se gira (a menos que la penalización de la falta conlleve cambio de posesión, pero el procedimiento de alterna original se mantiene pendiente para la siguiente ocasión).\n\nCASOS PRÁCTICOS:\n\n12-4 Saque de posesión alterna y violación:\nEl equipo A realiza el saque por la flecha. A1 tarda más de 5 segundos.\n• Violación. Balón para el equipo B.\n• La flecha se gira inmediatamente (el equipo A "gastó" su turno de alterna con la violación).\n\n12-5 Saque de posesión alterna y falta:\nEl equipo A realiza el saque por la flecha. Antes de que el balón toque a nadie en pista, A2 empuja a B2 (Falta de equipo en control).\n• Es falta de A2.\n• El equipo A pierde la posesión (saque para B), PERO la flecha NO se gira. El equipo A mantiene el derecho al próximo saque de alterna porque el saque anterior no finalizó legalmente (no se tocó el balón).\n\n12-7 Error en la flecha:\nSi los árbitros o la mesa cometen un error y no giran la flecha (o la giran mal) y se descubre durante el partido:\n• El error debe corregirse inmediatamente.\n• Si el juego se detuvo por el error, el balón se devuelve al equipo que tenía derecho real.\n• Si el error no se puede corregir sin anular canastas o tiempos jugados, la posesión alterna se mantiene como está y se corrige la flecha para la siguiente situación.`
      },
      {
        id: 'obri-art-13',
        title: 'OBRI Art. 13: Jugar el balón (Interpretaciones)',
        keywords: ['jugar el balon', 'pie', 'pierna', 'puño', 'contacto accidental', 'interposicion'],
        content: `13-1. Jugar el balón\n\nRegla General:\nJugar el balón con el pie o la pierna es una violación SOLO si es INTENCIONADO. Golpear el balón con el puño es SIEMPRE una violación.\n\nCASOS PRÁCTICOS:\n\n13-1 Contacto accidental vs. Intencionado:\nA1 pasa el balón a A2. El balón toca en la pierna de B1.\n• Si B1 movió la pierna intencionadamente para interceptar el pase: VIOLACIÓN de B1. (El reloj de tiro se reinicia a 14 o 24 según control).\n• Si B1 no movió la pierna y el balón le golpeó accidentalmente (o intentaba moverse y no pudo evitarlo): NO ES VIOLACIÓN. El juego continúa.\n\n13-2 Puño:\nA1 dribla o pasa el balón y B1 lo golpea con el puño.\n• SIEMPRE es violación de B1. (No existe el "puño accidental" en la interpretación práctica para cortar un pase).\n\n13-3 Saque de banda y pie:\nA1 realiza un saque. B1 pone el pie intencionadamente en la trayectoria antes de que nadie lo toque.\n• Violación de B1.\n• Advertencia: Si esto ocurre en los últimos 2 minutos del 4º cuarto o prórroga, podría ser una falta técnica por retrasar el juego (si ya hubo aviso previo) o incluso antideportiva si corta una situación clara.`
      },
      {
        id: 'obri-art-14',
        title: 'OBRI Art. 14: Control del balón (Interpretaciones)',
        keywords: ['control de balon', 'equipo con control', 'falta en ataque', 'balon en el aire', 'saque'],
        content: `14-1. Control del balón\n\nRegla General:\nEl control del equipo comienza cuando un jugador de ese equipo tiene el control de un balón vivo (lo sostiene o lo bota) o el balón se pasa entre compañeros.\n\nEl control del equipo CONTINÚA cuando:\n• Un jugador del mismo equipo pierde el balón accidentalmente (fumble).\n• El balón es palmeado por un oponente.\n• El balón está a disposición del jugador para un saque (importante para faltas).\n\nEl control del equipo FINALIZA cuando:\n• Un oponente obtiene el control.\n• El balón queda muerto.\n• El balón ha salido de las manos del jugador en un lanzamiento a canasta o tiro libre.\n\nCASOS PRÁCTICOS (La regla de oro para la Mesa):\n\n14-1 Falta durante un lanzamiento (Balón en el aire):\nA1 lanza a canasta. Mientras el balón está en el aire, A2 comete una falta sobre B2.\n• ¿Tiene el equipo A control del balón? NO (finalizó al salir el balón de las manos).\n• ¿Es falta en ataque (control de equipo)? NO.\n• Consecuencia: Si el equipo B está en penalización (bonus), B2 lanzará 2 tiros libres. Si no, saque para B.\n\n14-2 Falta durante un saque:\nA1 tiene el balón para un saque. A2 empuja a B2 en la pista.\n• ¿Tiene el equipo A control del balón? SÍ.\n• ¿Es falta en ataque (control de equipo)? SÍ.\n• Consecuencia: NUNCA se lanzan tiros libres por esta falta, aunque el equipo B esté en bonus. Saque para B.`
      },
      {
        id: 'obri-art-15',
        title: 'OBRI Art. 15: Jugador en acción de tiro (Interpretaciones)',
        keywords: ['accion de tiro', 'movimiento continuo', 'continuacion', 'entrada', 'fumble', 'pase', 'pasos'],
        content: `15-1. Jugador en acción de tiro\n\nRegla General:\nLa acción de tiro comienza cuando el jugador empieza, a juicio del árbitro, a mover el balón hacia arriba hacia la canasta. En una entrada (drive), comienza cuando el balón descansa en las manos del jugador y este empieza el movimiento de tiro (habitualmente tras finalizar el regate).\n\nCASOS PRÁCTICOS:\n\n15-4 Falta en entrada (Movimiento continuo):\nA1 finaliza el regate y comienza el movimiento de tiro. B1 le hace falta. A1 continúa y lanza.\n• Es falta sobre acción de tiro.\n• Si entra, vale la canasta + 1 tiro libre.\n• Si no entra, 2 tiros libres.\n\n15-5 Jugador en el aire:\nA1 salta y lanza un triple. B1 le hace falta antes de que A1 vuelva a tocar el suelo.\n• A1 sigue en "acción de tiro" hasta que ambos pies tocan el suelo.\n• Son 3 tiros libres.\n\n15-7 Pérdida momentánea del balón (Fumble):\nB1 hace falta a A1 en la entrada. Por el contacto, el balón se le escapa momentáneamente a A1 de las manos, pero lo recupera y encesta en el mismo movimiento.\n• La canasta VALE.\n• La acción de tiro no se interrumpió por la pérdida momentánea si era parte del movimiento continuo.\n\n15-9 Pasar el balón:\nB1 hace falta a A1, que parecía tirar. Después de la falta, A1 decide pasar el balón a A2.\n• Al pasar, A1 deja de estar en acción de tiro.\n• No hay tiros libres (salvo bonus). Saque de banda.\n\n15-11 Falta y pasos:\nA1 recibe falta de B1 en la entrada. Inmediatamente después, A1 da un paso extra (pasos) y encesta.\n• La canasta NO vale (violación de pasos).\n• A1 lanzará 2 tiros libres porque la falta fue en acción de tiro, pero los puntos se anulan por la violación posterior.`
      },
      {
        id: 'obri-art-16',
        title: 'OBRI Art. 16: Canasta y valor (Interpretaciones)',
        keywords: ['valor canasta', '3 puntos', 'propia meta', 'pase entra', 'tocar suelo', '0.3 segundos', 'reloj', 'tap'],
        content: `16-1. Canasta y valor\n\nRegla General:\nEl valor se define por el lugar desde donde se efectuó el tiro. Si el tirador está en zona de 3, vale 3 aunque el balón sea tocado en zona de 2.\n\nCASOS PRÁCTICOS:\n\n16-4 Pase desde zona de 3 puntos:\nA1 pasa el balón desde zona de 3. El balón entra en la canasta (directamente o tocando a alguien).\n• Valor: 3 PUNTOS (porque el pase salió de zona de 3).\n\n16-8 Tiro que toca el suelo:\nA1 tira de 3. El balón toca el suelo en la zona de 2 y luego entra.\n• Valor: 3 PUNTOS (el toque en el suelo no anula el tiro ni cambia su valor).\n• Excepción: Si suena la bocina o hay falta ANTES de que toque el suelo, el balón queda muerto al tocar el suelo y la canasta NO vale.\n\n16-10 Canasta tras saque de banda:\nEl sacador pasa el balón. Un compañero lo toca en zona de 3 y entra.\n• Valor: 2 PUNTOS (un saque no es un tiro; el valor de 3 solo es para tiros o pases desde el terreno de juego).\n\n16-12 La Regla del Reloj (0.3 segundos):\n• 0.3 segundos o más: El jugador puede recibir y tirar.\n• 0.2 o 0.1 segundos: El jugador SOLO puede palmear o hundir el balón directamente. Si lo controla o agarra para tirar, no le dará tiempo y la canasta no valdrá.\n\n16-3 Canasta en propia meta:\nSi un jugador encesta en su propia canasta por accidente, valen 2 puntos para el Capitán del equipo contrario.`
      },
      {
        id: 'obri-art-17',
        title: 'OBRI Art. 17: Saque (Interpretaciones)',
        keywords: ['saque', 'linea limitrofe', 'ultimos 2 minutos', 'interferencia saque', 'avanzar balon', 'mano a mano', 'tablero'],
        content: `17-1. Saque\n\n17-1/17-3 Interferencia del defensor:\nEl defensor no puede romper el plano de la línea limítrofe con ninguna parte de su cuerpo para interferir el saque.\n• Si lo hace: Violación por retrasar el juego. Se da un AVISO al jugador y al entrenador (para todo el equipo). Si se repite, falta TÉCNICA.\n• Si las manos del sacador cruzan la línea (con el balón) hacia la pista: El defensor NO puede tocar el balón. Si lo toca, es violación (retraso/aviso/técnica).\n\n17-4 Últimos 2 minutos (4Q o Prórroga):\nSi el defensor cruza la línea antes de que el balón sea lanzado:\n• Si el árbitro ya había hecho la señal de advertencia ("Invasión ilegal"): Falta TÉCNICA inmediata (sin aviso previo).\n• Si el árbitro no había advertido: Se detiene el juego, se advierte y se repite el saque.\n\n17-8 Saque mano a mano:\nEl sacador NO puede poner el balón en las manos de un compañero en pista (hand-off). El balón debe ser PASADO (lanzado). Si se lo da en mano: Violación de saque.\n\n17-11 Moverse por la línea de fondo:\nTras canasta o último tiro libre convertido, el sacador puede moverse lateralmente y pasar a compañeros que también estén fuera. La cuenta de 5 segundos sigue activa desde el inicio.\n\n17-12 Avanzar el balón (Tiempo muerto últimos 2 min):\nSi el entrenador decide avanzar a pista delantera:\n• Saque desde la línea de saque (enfrente de la mesa).\n• Reloj de tiro: 14 segundos.\n• La decisión es IRREVERSIBLE una vez comunicada al árbitro.\n\n17-30 Balón encajado en el soporte:\nSi el sacador pasa el balón y se queda encajado entre el aro y el tablero:\n• Situación de salto (flecha de posesión).\n\n17-32 Botar antes de sacar:\nEl sacador puede botar el balón fuera de la pista. Si el balón bota DENTRO de la pista y el sacador lo vuelve a coger antes de que toque a otro jugador: Violación de saque (dobles/toque ilegal).`
      },
      {
        id: 'obri-art-18',
        title: 'OBRI Art. 18: Tiempo muerto (Interpretaciones)',
        keywords: ['tiempo muerto', 'oportunidad', 'tiros libres', 'ultimos 2 minutos', 'perder tiempo muerto', 'entrenador'],
        content: `18-1. Tiempo muerto\n\nRegla General:\nEl tiempo muerto se concede cuando el partido está detenido y el balón muerto. NO se puede conceder antes de que empiece el partido ni después de que termine.\n\nCASOS PRÁCTICOS:\n\n18-4 Canasta tras bocina de 24s:\nSuena la bocina de 24s con el balón en el aire. El balón entra (canasta válida).\n• Es oportunidad de tiempo muerto SOLO para el equipo que recibió la canasta (Equipo B).\n• Si el Equipo B pide tiempo muerto, entonces el Equipo A también puede pedirlo.\n\n18-6 Entre tiros libres:\nSe conceden 2 tiros libres a A1. Se pide tiempo muerto.\n• El tiempo muerto se concede ANTES del primer tiro libre o DESPUÉS del último (si es convertido o hay rebote/saque).\n• NUNCA entre el primer y el segundo tiro libre (salvo que un árbitro detenga el juego por lesión o haya una falta técnica entre medio).\n\n18-18 Duración y Retraso:\nEl tiempo muerto dura 1 minuto. Si un equipo tarda más en volver, se le avisa. Si insiste, se le carga OTRO tiempo muerto. Si no le quedan, es falta técnica al entrenador (B1) por retrasar el juego.\n\n18-21 Regla de los 2:00 minutos (2ª Parte):\nSi un equipo no ha usado ningún tiempo muerto en la segunda parte antes de que el reloj marque 2:00 en el 4º cuarto, PIERDE uno de sus 3 tiempos. El anotador debe tacharlo en el acta (dos rayas horizontales en la primera casilla) y avisar.`
      },
      {
        id: 'obri-art-19',
        title: 'OBRI Art. 19: Sustituciones (Interpretaciones)',
        keywords: ['sustitucion', 'cambio', 'oportunidad', 'tiros libres', 'jugador excluido', '5 faltas', 'sangre'],
        content: `19-1. Sustituciones\n\nRegla General:\nLa oportunidad de sustitución termina cuando el balón está a disposición de un jugador para un saque o para el primer tiro libre.\n\nCASOS PRÁCTICOS:\n\n19-4 Sustitución tras canasta (últimos 2 min):\nEn los últimos 2:00 del 4º cuarto o prórroga, si el Equipo A anota canasta:\n• El Equipo B (que recibe la canasta) puede pedir sustitución.\n• Si el Equipo B pide sustitución, entonces el Equipo A también puede pedirla.\n• Si el Equipo B NO pide, el Equipo A NO puede pedir cambio (no pueden interrumpir el saque rápido del rival).\n\n19-10/19-12 Sustitución y Tiros Libres:\nSi un jugador (A1) debe tirar tiros libres y pide el cambio:\n• Debe tirar los tiros libres y luego ser sustituido (si el último entra o hay balón muerto).\n• EXCEPCIÓN: Si A1 se lesiona o es descalificado/eliminado (5 faltas), su sustituto DEBE tirar los tiros libres.\n• Importante: El sustituto que entra para tirar los libres por lesión/descalificación NO puede ser sustituido de nuevo hasta que haya corrido el reloj de partido (no puede entrar, tirar e irse).\n\n19-15 Jugador que acaba de entrar:\nUn sustituto que entra al partido no puede volver a salir hasta que el reloj de partido haya corrido (fase de reloj en marcha). Si entra y hay una falta antes de que el reloj se mueva, tiene que quedarse (salvo que se lesione o cometa 5 faltas).`
      },
      {
        id: 'obri-art-23',
        title: 'OBRI Art. 23: Fuera de banda (Interpretaciones)',
        keywords: ['fuera de banda', 'linea', 'jugador fuera', 'balon fuera', 'banquillo', 'sustituto', 'causar fuera'],
        content: `23-1. Fuera de banda\n\nRegla General:\nSi el balón toca a un jugador que está fuera del terreno de juego (pisando la línea o fuera), ese jugador es el responsable de que el balón salga fuera.\n\nCASOS PRÁCTICOS:\n\n23-2 Contacto corporal con jugador fuera:\nA1 tiene el balón en las manos cerca de la banda. A1 toca con su cuerpo a B1, que tiene un pie fuera.\n• Es legal. El juego continúa.\n• Un jugador está fuera solo si su cuerpo toca el suelo u objeto fuera. Tocar a otro jugador que está fuera NO te hace estar fuera a ti.\n\n23-3 Contacto del balón con jugador fuera (La regla "tocar con el balón"):\nA1 tiene el balón y toca con el balón a B1, que tiene un pie fuera.\n• El balón está fuera.\n• El responsable es B1 (el jugador que estaba fuera).\n• Saque para el equipo A (el de A1).\n\n23-4 Balón golpea a alguien en el banquillo:\nA1 regatea y el balón bota alto y golpea la rodilla de B6 (sustituto sentado en el banquillo).\n• El balón está fuera.\n• El responsable es A1 (el último jugador en tocarlo dentro).\n• Saque para el equipo B.\n• Diferencia clave: B6 se considera parte del entorno "fuera de banda" (como una silla o la mesa), a diferencia de B1 en el caso anterior que es un jugador en pista participando activamente.`
      },
      {
        id: 'obri-art-24',
        title: 'OBRI Art. 24: Regate (Interpretaciones)',
        keywords: ['regate', 'dobles', 'tablero', 'autopase', 'fumble', 'pie de pivote', 'perder equilibrio'],
        content: `24-1. Regate\n\nRegla General:\nLanzar el balón intencionadamente contra el tablero (propio o del rival) NO es un regate. Es un recurso legal.\n\nCASOS PRÁCTICOS:\n\n24-2 Autopase contra el tablero (Sin haber regateado):\nA1 está quieto (aún no ha botado). Lanza el balón contra el tablero y lo vuelve a coger.\n• Es LEGAL.\n• Después de cogerlo, A1 puede tirar, pasar O comenzar un regate.\n\n24-3 Autopase contra el tablero (Después de regatear):\nA1 finaliza su regate y lanza el balón contra el tablero. Lo vuelve a coger.\n• Es LEGAL cogerlo.\n• Después de cogerlo, A1 puede tirar o pasar, pero NO puede comenzar un nuevo regate (serían dobles).\n\n24-4 Tiro que no toca aro (Airball recuperado):\nA1 tira y no toca aro. A1 coge su propio rebote.\n• Es LEGAL.\n• A1 puede tirar, pasar o comenzar un regate (se considera que hubo un cambio de estatus por el intento de tiro, aunque no tocara aro, si el árbitro juzga que fue un tiro).\n\n24-5 Pérdida de equilibrio:\nA1 termina el regate y se detiene. Pierde el equilibrio y, sin mover el pie de pivote, toca el suelo con el balón una o dos veces (para apoyarse) mientras lo sostiene.\n• Es LEGAL (no es un nuevo regate).\n\n24-6 Autopase largo (Bote de velocidad):\nA1 lanza el balón por encima de su defensor (o varios metros por delante), el balón toca el suelo y A1 corre a cogerlo para seguir botando.\n• Es LEGAL siempre que el balón toque el suelo antes de que A1 lo vuelva a tocar.\n\n24-7 Lanzar balón contra las piernas del rival:\nA1 termina el regate. Lanza el balón deliberadamente contra las piernas de B1, lo recupera y vuelve a botar.\n• Violación de DOBLES. El regate de A1 ya había terminado. Provocar el rebote en el rival no reinicia la cuenta de regates permitidos.`
      },
      {
        id: 'obri-art-25',
        title: 'OBRI Art. 25: Avance ilegal / Pasos (Interpretaciones)',
        keywords: ['pasos', 'avance ilegal', 'caer al suelo', 'rodar', 'levantarse', 'resbalar', 'paso cero'],
        content: `25-1. Avance ilegal (Pasos)\n\nRegla General:\nEs legal caer al suelo sosteniendo el balón o resbalar mientras se sostiene el balón. Lo que es ILEGAL es rodar o intentar levantarse con el balón.\n\nCASOS PRÁCTICOS:\n\n25-1 Caer al suelo:\nA1 sostiene el balón, pierde el equilibrio y cae al suelo.\n• Es LEGAL (si no rueda).\n\n25-2 Resbalar:\nA1 se lanza a por un balón suelto, lo controla en el suelo y resbala varios metros por la inercia.\n• Es LEGAL.\n\n25-3 Rodar o Levantarse:\nA1 cae al suelo con el balón (o lo recupera estando en el suelo). Luego, rueda sobre sí mismo o intenta levantarse manteniendo el control del balón.\n• Es VIOLACIÓN DE PASOS.\n• Para levantarse legalmente, debe soltar el balón (botar o pasar) antes de levantar el pie de pivote (o el cuerpo).\n\n25-4 Final de regate (Paso 0-1-2):\nSi un jugador recibe el balón o finaliza el regate en movimiento (con un pie en el suelo o ninguno), el siguiente apoyo se considera el "Paso 1" (el pie de pivote). Esto permite el famoso "Paso Cero" (recoger el balón) + 2 apoyos.`
      },
      {
        id: 'obri-art-26',
        title: 'OBRI Art. 26: 3 segundos (Interpretaciones)',
        keywords: ['3 segundos', 'zona', 'restringida', 'pintura', 'ambos pies', 'salir de la zona'],
        content: `26-1. 3 segundos\n\nRegla General:\nPara que se pite la violación, el jugador debe estar en la zona restringida rival más de 3 segundos mientras su equipo tiene control en pista delantera y el reloj está en marcha.\n\nCASOS PRÁCTICOS:\n\n26-2 Salir de la zona:\nPara "reiniciar" la cuenta o considerarse fuera, el jugador debe poner AMBOS pies fuera de la zona restringida (pintura).\n\n26-3 Tolerancia:\nSe debe permitir (no pitar) si el jugador:\n• Intenta salir de la zona.\n• Está en la zona y él o un compañero están en acción de tiro (el balón sale de las manos).\n• Dribla hacia canasta para tirar (aunque lleve más de 3s dentro).\n\nImportante para la mesa: La cuenta se detiene cuando se lanza a canasta.`
      },
      {
        id: 'obri-art-27',
        title: 'OBRI Art. 27: Jugador estrechamente marcado (Interpretaciones)',
        keywords: ['estrechamente marcado', '5 segundos', 'defensa', 'un metro', 'conteo'],
        content: `27-1. Jugador estrechamente marcado\n\nRegla General:\nUn jugador que sostiene un balón vivo (sin botar o botando) está estrechamente marcado cuando un adversario está en posición legal de defensa a no más de 1 metro.\n\nCASOS PRÁCTICOS:\n\n27-1 Conteo de 5 segundos:\n• El árbitro iniciará una cuenta visible de 5 segundos.\n• Si el jugador no pasa, tira o bota (si no estaba botando) antes de 5 segundos: VIOLACIÓN.\n• Si el jugador se aleja a más de 1 metro: La cuenta termina.\n• Si el jugador cambia de sostener a botar: La cuenta termina y empieza una nueva (si sigue marcado).`
      },
      {
        id: 'obri-art-28',
        title: 'OBRI Art. 28: 8 segundos (Interpretaciones)',
        keywords: ['8 segundos', 'pista trasera', 'pasar medio campo', 'cuenta continua', 'saque'],
        content: `28-1. 8 segundos\n\nRegla General:\nEl equipo debe hacer que el balón pase a su pista delantera en menos de 8 segundos. La cuenta comienza cuando un jugador controla el balón en pista trasera.\n\nCASOS PRÁCTICOS:\n\n28-2 ¿Cuándo pasa el balón a pista delantera?\nEl balón se considera en pista delantera SOLO cuando:\n• Toca la pista delantera.\n• Toca a un jugador o árbitro que tiene parte de su cuerpo en contacto con la pista delantera.\n• IMPORTANTE (Driblador): Durante un regate, el balón pasa a pista delantera solo cuando los DOS pies del driblador Y el balón están en pista delantera.\n\n28-3 Cuenta continua (No reinicio):\nEl equipo A tiene el balón en pista trasera durante 4 segundos. El balón sale fuera por un pase desviado por B1.\n• Saque para A en pista trasera.\n• El árbitro comunica a la mesa que quedan 4 segundos de cuenta (la cuenta NO se reinicia a 8, continúa desde donde estaba porque la posesión sigue siendo del mismo equipo en su pista trasera).\n\n28-5 Lesión:\nA1 cae lesionado en pista trasera con 3 segundos jugados. El árbitro para el juego.\n• Al reanudar, al equipo A le quedan 5 segundos para pasar medio campo.`
      },
      {
        id: 'obri-art-29',
        title: 'OBRI Art. 29: 24 segundos (Interpretaciones)',
        keywords: ['24 segundos', 'reloj de tiro', 'tocar aro', 'señal', 'balon en el aire', 'oposicion'],
        content: `29-1. 24 segundos\n\nRegla General:\nDebe sonar la señal si el balón no entra o toca el aro antes de que acabe el tiempo.\n\nCASOS PRÁCTICOS:\n\n29-3 Balón en el aire y señal:\nA1 lanza. El balón está en el aire cuando suena la señal de 24s. El balón NO toca el aro.\n• VIOLACIÓN. Balón para el equipo B.\n\n29-4 Balón toca aro y señal:\nA1 lanza. El balón está en el aire cuando suena la señal. El balón toca el aro.\n• La señal debe ignorarse. El juego continúa (si hay rebote) o vale la canasta (si entra).\n\n29-5 Tocar el balón en defensa:\nA1 lanza. B1 toca el balón en el aire. Luego suena la señal y el balón no toca aro.\n• VIOLACIÓN de 24s del equipo A. El toque del defensor no reinicia la cuenta ni anula la violación (salvo que el toque haga que sea una interposición clara).\n\n29-9 Balón encajado:\nA1 lanza. El balón se queda encajado entre el aro y el tablero. La flecha de posesión favorece al equipo A.\n• Saque para A con 14 segundos en el reloj de tiro.`
      },
      {
        id: 'obri-art-30',
        title: 'OBRI Art. 30: Balón devuelto a pista trasera (Interpretaciones)',
        keywords: ['campo atras', 'pista trasera', 'retorno de balon', 'medio campo', 'en el aire', 'intercepcion'],
        content: `30-1. Balón devuelto a pista trasera (Campo atrás)\n\nRegla General:\nPara que sea violación deben cumplirse 3 condiciones:\n1. El equipo tenía CONTROL del balón en pista delantera.\n2. Un jugador de ese equipo es el ÚLTIMO en tocar el balón en pista delantera.\n3. Un jugador de ese equipo es el PRIMERO en tocarlo en pista trasera.\n\nCASOS PRÁCTICOS:\n\n30-2 Jugador en el aire (Salto desde pista delantera):\nA1 salta desde su pista delantera, atrapa el balón en el aire y cae en su pista trasera.\n• VIOLACIÓN (Campo atrás). A1 tenía estatus de pista delantera al saltar.\n\n30-3 La Excepción de la Intercepción (Defensa):\nA1 (atacante) está en pista delantera y pasa a A2. B1 (defensor) salta desde su pista delantera (zona de ataque de B), intercepta el pase en el aire y cae en su pista trasera (zona de defensa de B).\n• LEGAL. No es campo atrás. Es una excepción para permitir la defensa activa.\n\n30-6 Saque de banda y campo atrás:\nA1 saca de banda desde pista delantera (a la altura de la línea central). Pasa el balón a A2 que está en pista trasera.\n• VIOLACIÓN. Si sacas desde pista delantera, no puedes pasar a pista trasera (a menos que sea en los últimos 2 minutos del 4Q tras tiempo muerto y el entrenador haya decidido sacar en pista delantera para reanudar).`
      },
      {
        id: 'obri-art-31',
        title: 'OBRI Art. 31: Interposiciones e Interferencias (Interpretaciones)',
        keywords: ['interferencia', 'barrido', 'tocar red', 'tocar aro', 'vibrar tablero', 'balon dentro', 'mano por debajo'],
        content: `31-1. Interposiciones e Interferencias\n\nRegla General:\nEs interferencia si un jugador toca el balón, la canasta o el tablero cuando el balón está en contacto con el aro o tiene posibilidad de entrar, o si introduce la mano por debajo de la canasta.\n\nCASOS PRÁCTICOS:\n\n31-1 Mano por debajo:\nEs interferencia si un jugador introduce la mano por debajo de la canasta y toca el balón (mientras está por encima del nivel del aro) en un tiro, pase o rebote.\n\n31-6 Palmear tiro libre fallado:\nTras el último tiro libre, el balón toca el aro y rebota. B1 intenta palmearlo fuera pero lo mete en su propia canasta.\n• VALE 2 PUNTOS para el capitán del equipo A (atacante).\n• Es legal palmear el balón en su propia canasta (no es interferencia ofensiva si ya tocó aro).\n\n31-12 Final de cuarto/partido:\nSuena la bocina de final de cuarto. El balón ha tocado el aro y rebota verticalmente. Mientras tiene posibilidad de entrar:\n• Si cualquier jugador lo toca: INTERFERENCIA.\n• Si es defensor: Canasta válida.\n• Si es atacante: Canasta anulada.\n• Importante: Tras la bocina, el balón queda muerto AUTOMÁTICAMENTE si alguien lo toca.\n\n31-18 Vibración del tablero/aro:\nEs interferencia si un jugador hace vibrar el tablero o el aro de tal forma que, a juicio del árbitro, impide que el balón entre o causa que entre.\n\n31-25 Balón dentro de la canasta:\nEs interferencia si un defensor toca el balón mientras está DENTRO de la canasta (se considera dentro si cualquier parte del balón está por debajo del nivel del aro).`
      },
      {
        id: 'obri-art-33',
        title: 'OBRI Art. 33: Contacto y Semicírculo (Interpretaciones)',
        keywords: ['contacto', 'semicirculo', 'no carga', 'carga', 'cilindro', 'falta en ataque', 'paso cero'],
        content: `33-1. Contacto: Principios generales\n\n33-3 Regla del Semicírculo de No-Carga:\nEl propósito es no premiar al defensor que se planta debajo del aro. Para que se aplique (y NO sea falta en ataque por carga), deben cumplirse:\n1. El defensor tiene uno o ambos pies EN CONTACTO con la zona del semicírculo.\n2. El atacante entra a canasta en el aire.\n\nCASOS PRÁCTICOS (Semicírculo):\n\n33-4 Salto exterior:\nA1 salta desde FUERA del semicírculo y carga contra B1 que está DENTRO.\n• NO es falta en ataque (Regla de no-carga se aplica). El juego sigue o es falta del defensor si se mueve.\n\n33-5 Entrada por línea de fondo:\nA1 entra por la línea de fondo (detrás del tablero) y choca contra B1 que está en el semicírculo.\n• ES FALTA EN ATAQUE. La regla del semicírculo NO se aplica si el atacante entra desde el área "detrás" del tablero.\n\n33-8 Pasar el balón:\nA1 salta, choca contra B1 (en el semicírculo) y pasa el balón a la esquina.\n• LEGAL (No hay falta). La regla protege al atacante que tira O pasa, siempre que esté en el aire.\n\n33-9 Uso ilegal de manos:\nA1 salta y choca contra B1 (en el semicírculo), pero A1 usa su brazo para apartar a B1.\n• FALTA EN ATAQUE. La regla del semicírculo protege del contacto del cuerpo (carga), pero no permite usar los brazos para empujar.`
      },
      {
        id: 'obri-art-34',
        title: 'OBRI Art. 34: Falta personal (Interpretaciones)',
        keywords: ['falta personal', 'falta de saque', 'ultimos 2 minutos', 'antideportiva', 'saque'],
        content: `34-1. Falta personal y Falta de Saque\n\n34-1 Falta de saque (Últimos 2 min):\nSi en los últimos 2:00 del 4º cuarto o prórroga, con el balón a disposición del sacador (o en manos del árbitro para dárselo), un defensor comete una falta sobre un atacante en pista:\n• Es FALTA DE SAQUE (salvo que sea antideportiva por su naturaleza).\n• Penalización: 1 TIRO LIBRE para el jugador que recibe la falta + SAQUE para su equipo desde el punto de la infracción .\n• El tiro libre se lanza independientemente de si el equipo defensor estaba en bonus o no.\n\n34-9 Excepción (Balón lanzado):\nSi el balón YA ha salido de las manos del sacador cuando ocurre la falta:\n• NO es falta de saque (es falta personal normal). Se penaliza según bonus o si es acción de tiro.\n\n34-7 Falta del equipo en ataque durante el saque:\nSi el sacador tiene el balón y un compañero en pista comete falta (pantalla ilegal, empujón):\n• Es falta del equipo en control.\n• No hay tiros libres. Saque para el rival.`
      },
      {
        id: 'obri-art-35',
        title: 'OBRI Art. 35: Doble falta (Interpretaciones)',
        keywords: ['doble falta', 'misma categoria', 'cancelar', 'no tiros libres', 'falta tecnica'],
        content: `35-1. Doble falta\n\nRegla General:\nPara que sea doble falta, las faltas deben ser de la MISMA CATEGORÍA (Personal con Personal, o Antideportiva/Descalificante con Antideportiva/Descalificante).\n\n35-1 Penas:\n• Las penalizaciones se cancelan. NO SE LANZAN TIROS LIBRES (aunque haya bonus).\n• El juego se reanuda con el equipo que tenía control del balón (o saque por posesión alterna si nadie lo tenía).\n\nCASOS PRÁCTICOS:\n\n35-7 Personal vs Antideportiva:\nA1 empuja a B1 (Personal). Casi a la vez, B1 golpea a A1 (Antideportiva).\n• NO es doble falta (categorías distintas).\n• Se sancionan ambas. Primero la personal (se ignora el saque de la personal porque hay otra pena). Luego se administran los tiros de la antideportiva + saque para el equipo de A1.\n\n35-3 Doble falta durante el tiro:\nA1 tira. En el aire, A1 y B1 cometen falta personal mutua.\n• Si entra: VALE la canasta. Saque de fondo para el equipo que recibió los puntos.\n• Si falla: Situación de salto (flecha).`
      },
      {
        id: 'obri-art-36',
        title: 'OBRI Art. 36: Falta técnica (Interpretaciones)',
        keywords: ['falta tecnica', 'flopping', 'simulacion', 'advertencia', 'descalificacion', 'colgarse del aro', 'distraer'],
        content: `36-1. Falta técnica\n\n36-3 Distraer al tirador:\nSi un defensor grita, aplaude fuerte o pisa fuerte para distraer al tirador:\n• Si el tiro entra: La canasta vale. Se da un AVISO al defensor (y a su entrenador). Si ya estaba avisado, es Técnica.\n• Si el tiro falla: Falta TÉCNICA inmediata.\n\n36-12 Simulación (Flopping):\nProcedimiento:\n1. Primera vez: El árbitro hace la señal de "levantar el antebrazo" dos veces (sin parar el juego si no es necesario). En el siguiente balón muerto, se avisa al entrenador.\n2. Segunda vez (cualquier jugador del mismo equipo): Falta TÉCNICA.\nNota: Si la simulación es excesiva o sin contacto alguno, se puede pitar Técnica directa sin aviso previo.\n\n36-5 Exceso de jugadores (6 en pista):\nSi se descubre que un equipo tiene 6 jugadores:\n• Se sanciona falta TÉCNICA al Entrenador (B1).\n• Se retira al jugador sobrante. Si el equipo rival tenía el balón o acababa de anotar, se mantiene su ventaja o puntos.\n\n36-22 Combinación para Descalificación (GD):\nUn jugador es descalificado automáticamente si comete:\n• 2 Técnicas.\n• 2 Antideportivas.\n• 1 Técnica + 1 Antideportiva.`
      },
      {
        id: 'obri-art-37',
        title: 'OBRI Art. 37: Falta Antideportiva (Interpretaciones)',
        keywords: ['antideportiva', 'criterios', 'transicion', 'ultimo hombre', 'clear path', 'jugar balon', 'excesivo'],
        content: `37-1. Falta Antideportiva\n\nLos árbitros juzgarán la falta antideportiva según 4 criterios principales (C1-C4):\n\nC1. Sin intento legítimo de jugar el balón:\nEl defensor no hace ningún esfuerzo por alcanzar el balón y contacta con el oponente (ej. agarrón de camiseta, empujón sin mirar el balón).\n\nC2. Contacto excesivo y duro:\nAunque intente jugar el balón, el contacto es demasiado violento (ej. golpe fuerte en el aire, hachazo).\n\nC3. Transición (Contacto innecesario):\nFalta cometida por un defensor para detener la progresión del equipo atacante en transición.\n• Aplica HASTA que el atacante comienza la acción de tiro.\n• Si el atacante ya está en acción de tiro (ej. entrada final): Se juzga como falta normal (o antideportiva si es C1/C2), pero ya no aplica el criterio automático de "cortar transición".\n\nC4. Clear Path (Último hombre):\nContacto por la espalda o lateral cuando el atacante va hacia el aro sin nadie delante.\nRequisitos:\n1. Balón controlado por el atacante o pase dirigido a él.\n2. Ningún defensor entre el atacante y la canasta.\n3. Contacto por detrás o lateral.\n\nCASOS PRÁCTICOS:\n\n37-4 Falta sobre el "último hombre" en el acto de tiro:\nA1 se escapa solo (Clear Path). Entra a canasta (acción de tiro) y B1 le hace falta por detrás.\n• Decisión: FALTA NORMAL (o Antideportiva si es dura C2). El criterio C4 (Clear Path) solo aplica ANTES del acto de tiro. Al estar tirando, se protege el tiro, no el avance.\n\n37-12 Saque de banda y Clear Path:\nB1 roba el balón y se va solo. A1 le hace falta antideportiva (C4). El balón entra.\n• La canasta vale.\n• Se concede 1 TIRO LIBRE adicional + Saque para B.`
      },
      {
        id: 'obri-art-38',
        title: 'OBRI Art. 38: Falta Descalificante (Interpretaciones)',
        keywords: ['descalificante', 'violence', 'agression', 'golpe cabeza', 'cuello', 'conducta'],
        content: `38-1. Falta Descalificante\n\nRegla General:\nCualquier acción de violencia flagrante o conducta antideportiva grave. El jugador es expulsado del partido y debe irse al vestuario.\n\nCASOS PRÁCTICOS:\n\n38-1 Golpes en la cabeza/cuello:\nCualquier contacto violento por encima de los hombros debe ser revisado. Si se considera flagrante y con riesgo de lesión grave -> Descalificante.\n\n38-3 Entrenador descalificado:\nSi un entrenador es descalificado (ej. entra a la pista y agrede a un árbitro o rival), su ayudante asumirá el cargo. Si no hay ayudante, el capitán.\n\n38-4 Violencia sin contacto (Intento):\nSi un jugador lanza un puñetazo y falla:\n• Se sanciona FALTA TÉCNICA (por conducta).\n• Si la acción es extremadamente violenta o amenazante, puede ser DESCALIFICANTE incluso sin contacto.`
      },
      {
        id: 'obri-art-39',
        title: 'OBRI Art. 39: Enfrentamientos (Interpretaciones)',
        keywords: ['enfrentamiento', 'pelea', 'banquillo', 'invasion', 'sustitutos', 'asistentes', 'expulsion'],
        content: `39-1. Enfrentamientos (Peleas)\n\nRegla General:\nCualquier persona del banquillo (sustitutos, excluidos o acompañantes) que abandone el área de banco durante un enfrentamiento será DESCALIFICADA automáticamente.\n\nExcepción (Solo Entrenadores):\nEl Entrenador y el Ayudante SÍ pueden entrar a la pista, pero SOLO para ayudar a los árbitros a detener o apaciguar el conflicto. Si entran para pelear, también serán descalificados.\n\nCASOS PRÁCTICOS:\n\n39-2 Invasión masiva:\nSe produce una pelea. Los jugadores A11, A12 (sustitutos) entran a mirar o separar.\n• A11 y A12 son DESCALIFICADOS (Falta 'D'). No importa su intención; si eres sustituto, no puedes entrar.\n\n39-6 Número de tiros libres:\nSi se descalifica a varios sustitutos de ambos equipos por entrar:\n• Las faltas se compensan entre sí.\n• No se tiran tiros libres por estas descalificaciones (salvo que quede alguna sin compensar).\n• El juego se reanuda según quién tenía el balón o la falta original que causó la pelea.`
      },
      {
        id: 'obri-art-42',
        title: 'OBRI Art. 42: Situaciones especiales (Interpretaciones)',
        keywords: ['situaciones especiales', 'cancelacion', 'multiples faltas', 'orden de faltas', 'penalizaciones iguales'],
        content: `42-1. Situaciones Especiales (Múltiples faltas)\n\nRegla General:\nCuando ocurren varias faltas en el mismo periodo de reloj parado:\n1. Se identifican todas las faltas.\n2. Se determina qué penalizaciones son IGUALES contra ambos equipos (ej. 2 tiros vs 2 tiros) y se CANCELAN entre sí.\n3. Las penalizaciones restantes se administran en el orden en que se cometieron las faltas.\n\nCASOS PRÁCTICOS:\n\n42-2 Cancelación simple:\nA1 recibe falta de B1 (2 tiros). Después, A1 comete técnica (1 tiro). Después B1 comete técnica (1 tiro).\n• Las técnicas de A1 y B1 son iguales (1 tiro cada una). Se cancelan.\n• Se administran solo los 2 tiros libres de A1 (falta original).\n\n42-3 Orden de ocurrencia:\nA1 recibe falta antideportiva de B1 (2 tiros + banda). Inmediatamente, A1 agrede a B1 (Descalificante: 2 tiros + banda).\n• No se cancelan porque las penalizaciones no son "iguales" en gravedad/categoría para la cancelación directa en algunas ligas, pero según FIBA estricto:\n• Si las penas son iguales (2 tiros + posesión vs 2 tiros + posesión), se cancelan y se reanuda con salto entre dos o posesión alterna (si nadie tenía control).\n• Si no se cancelan, se ejecutan en orden. Primero la de B1, luego la de A1 (el partido se reanudaría con el saque de la última penalización administrada).`
      },
      {
        id: 'obri-art-43',
        title: 'OBRI Art. 43: Tiros libres (Interpretaciones)',
        keywords: ['tiros libres', 'violacion', 'invasion', 'pisar linea', 'distraccion', '5 segundos'],
        content: `43-1. Tiros libres\n\nRegla General:\n• El tirador tiene 5 segundos para lanzar.\n• No puede pisar la línea hasta que el balón entre o toque el aro.\n• Los jugadores en el pasillo no pueden entrar (pisar la zona restringida) hasta que el balón salga de las manos del tirador.\n\nCASOS PRÁCTICOS:\n\n43-5 Violaciones simultáneas:\nEl tirador lanza el último tiro libre. B1 (defensor) entra antes de tiempo. A2 (atacante) entra antes de tiempo.\n• Es una violación doble.\n• Si el tiro entra: La canasta se ANULA (por la violación del atacante).\n• Se sanciona situación de salto (posesión alterna).\n\n43-6 Distracción:\nA1 tira. B1 grita o agita las manos en el pasillo para distraer.\n• Si entra: Vale y se ignora la violación.\n• Si falla: Se repite el tiro. (Y se puede sancionar técnica si es reiterado).\n\n43-9 Lesión del tirador:\nSi A1 recibe falta de tiro y se lesiona, debe ser sustituido. Su sustituto DEBE tirar los libres. Si el equipo no tiene sustitutos, los tira el Capitán.`
      },
      {
        id: 'obri-art-44',
        title: 'OBRI Art. 44: Errores rectificables (Interpretaciones)',
        keywords: ['errores rectificables', 'corregir', 'tiempo limite', 'jugador equivocado', 'puntos erroneos', 'tiros olvidados'],
        content: `44-1. Errores Rectificables (Los 5 Casos)\n\nSolo se pueden corregir estos 5 errores:\n1. Conceder tiros libres a quien no los merecía.\n2. No conceder tiros libres a quien sí los merecía.\n3. Conceder o anular puntos por error (ej. dar 3 puntos en vez de 2, o error de suma).\n4. Permitir lanzar al jugador equivocado.\n5. Error en el reloj/tiempo (corrección arbitral).\n\nTIEMPO LÍMITE (Regla de Oro para la Mesa):\nEl error debe ser descubierto y corregido ANTES de que el balón pase a estar vivo después del PRIMER balón muerto tras el reinicio del reloj.\nExplicación: Si ocurre el error -> El juego sigue -> Balón muerto (1) -> Juego sigue -> Balón muerto (2). Aquí YA ES TARDE.\n\nCASOS PRÁCTICOS:\n\n44-1 Jugador equivocado:\nA1 recibe falta (2 tiros). Por error, va a la línea A2 y encesta ambos.\n• Error descubierto antes del límite: Se anulan los puntos de A2. Si el juego no se había reanudado, tira A1. Si ya se había jugado, se anulan los puntos y se da saque al equipo contrario (B) como penalización por el error de A.\n\n44-4 Tiros libres olvidados:\nSe pita falta a B1 (estaba en bonus) pero la mesa no pone la señal y sacan de banda. A1 anota canasta de campo. Luego se dan cuenta.\n• Si estamos en tiempo: Se debe corregir. PERO si el equipo A anotó después del error, la canasta vale y se cancela el error (no se tiran los libres olvidados) para no dar doble ventaja, a menos que fuera falta antideportiva (que siempre se tira).`
      },
      {
        id: 'obri-apendice-b',
        title: 'OBRI Apéndice B: El Acta (Interpretaciones)',
        keywords: ['acta', 'anotador', 'firmas', 'error', 'clasificacion', 'rellenar'],
        content: `B-1. El Acta del Partido\n\nCasos Prácticos:\n\nB.1 Errores de Anotación (Art. 44):\nSi se descubre un error de anotación (ej. sumar mal los puntos):\n• Debe corregirse en cualquier momento antes de que el árbitro principal firme el acta al final del partido.\n• Si el error cambia el ganador del partido, se corrige y se otorga la victoria al equipo correcto (incluso si la bocina ya sonó).\n\nB.2 Firmas bajo protesta:\nSi un capitán firma en "protesta" (Capitán firma en caso de protesta), el árbitro principal debe informar inmediatamente al representante del equipo que tienen 20 minutos para presentar el informe escrito, pero NO debe impedir la firma ni juzgar la validez de la protesta en ese momento.`
      },
      {
        id: 'obri-apendice-d',
        title: 'OBRI Apéndice D: Clasificación (Interpretaciones)',
        keywords: ['clasificacion', 'empate', 'triple empate', 'average', 'forfeit', 'incomparecencia', 'puntos', 'grupos'],
        content: `D-1. Clasificación de los Equipos\n\nRegla General:\nLa clasificación se basa en Puntos de Clasificación (2 por victoria, 1 por derrota, 0 por incomparecencia).\n\nCASOS PRÁCTICOS:\n\nD.1 Empates Múltiples (3 o más equipos):\nSi tres equipos (A, B, C) empatan a puntos:\n1. Se crea un "subgrupo" solo con los partidos jugados entre ellos.\n2. Si siguen empatados a victorias en ese subgrupo, se mira la DIFERENCIA de puntos (Basket Average) solo de los partidos del subgrupo.\n3. Si sigue el empate, se miran los PUNTOS A FAVOR (mayor anotación) en el subgrupo.\n4. Si persiste, se usa el average general de todo el grupo.\n\nD.3 Incomparecencia (20-0):\nSi un equipo pierde por incomparecencia (no se presenta o se queda con menos de 2 jugadores):\n• Se le otorgan 0 puntos de clasificación.\n• El resultado se registra como 20-0.\n• Si un equipo se retira del torneo (segunda incomparecencia), todos sus resultados previos se anulan para la clasificación del resto.`
      },
      {
        id: 'obri-apendice-f',
        title: 'OBRI Apéndice F: IRS y Head Coach Challenge (Interpretaciones)',
        keywords: ['irs', 'video', 'challenge', 'entrenador', 'revision', 'monitor', 'reloj', 'falta', 'ultimo toque'],
        content: `F-1. Sistema de Instant Replay (IRS)\n\nEl IRS se usa para revisar situaciones específicas. La decisión inicial del árbitro se mantiene a menos que la evidencia visual sea CLARA y CONCLUYENTE para cambiarla.\n\nF-3. Head Coach Challenge (HCC) - El "Ojo de Halcón" del Entrenador:\n\n• ¿Cuántos? El entrenador tiene 1 Challenge por partido (independientemente del resultado del mismo).\n• ¿Cuándo pedirlo? Inmediatamente después de que ocurra la situación o suene el silbato. El entrenador debe hacer la señal (dedo índice girando) y decir "Challenge".\n• ¿Qué se puede revisar con el Challenge?\n  1. Si un tiro es de 2 o 3 puntos.\n  2. A quién se debe cargar una falta (identidad).\n  3. Si el reloj de partido/tiro debe corregirse.\n  4. Situaciones de interferencia o interposición (Goaltending).\n  5. En los últimos 2 minutos (4Q/Prórroga): Quién tocó el balón antes de salir fuera (fuera de banda).\n  6. Si una falta debe ser elevada de grado (Personal -> Antideportiva/Descalificante) o rebajada (Antideportiva -> Personal).\n\nProcedimiento:\n• Si el Challenge es EXITOSO (la decisión cambia a favor de lo que pedía el entrenador): Se corrige la decisión. El entrenador NO recupera el Challenge (se gasta igual).\n• Si el Challenge FALLA (la decisión se mantiene): Se carga un TIEMPO MUERTO al equipo. Si no le quedan tiempos muertos, se sanciona Falta TÉCNICA al entrenador.\n\nF-4. Situaciones automáticas (Sin Challenge):\nLos árbitros pueden ir al monitor por decisión propia (sin que lo pida el entrenador) para:\n• Final de cuarto: Confirmar si el tiro entró a tiempo.\n• Reloj: Ajustar el tiempo tras una avería o error.\n• Violencia: Analizar peleas o faltas descalificantes.`
      },
    ]
  }
];

export const DATA_MANUAL: RuleChapter[] = [
  {
    id: 'man-chap-tec',
    title: 'TÉCNICA INDIVIDUAL (IOT)',
    book: 'MANUAL',
    articles: [
      {
        id: 'man-iot-1',
        title: 'Fundamentos: El Silbato y Señalización',
        keywords: ['silbato', 'señales', 'parar reloj', 'protocolo', 'iot'],
        content: `1. EL SILBATO\n• Tu herramienta principal. Debe sonar FUERTE, CORTO y DECISIVO.\n• "Escupe" el silbato si no lo usas para evitar pitar por accidente en un contacto físico.\n\n2. PROTOCOLO DE DECISIÓN (La Secuencia)\nCada vez que tomas una decisión (Falta o Violación):\n1. Silbato + Señal de Parar Reloj (Puño cerrado para falta, Palma abierta para violación). \n2. Señalar la naturaleza de la infracción (ej. Pasos, Agarrón, Empujón). \n3. Indicar la dirección del juego o penalización.\n4. Correr a la posición correcta para reanudar.`,
        pdfUrl: 'https://www.basketref.com/documents/fiba_materials_2025/FIBA_Referee_Manual_IOT_v2_5_Dec2024_en.pdf'
      },
      {
        id: 'man-iot-2',
        title: 'Reportar a la Mesa',
        keywords: ['mesa', 'reportar', 'numero', 'tiros libres'],
        content: `3. REPORTAR A LA MESA (Vital)\n• Sitúate en un lugar visible (libre de jugadores), párate y respira.\n• Señala el NÚMERO del jugador con claridad (Mano derecha decenas, izquierda unidades según FIBA). \n• Señala el TIPO de falta.\n• Señala la PENALIZACIÓN (1, 2, 3 tiros o Banda).\n• Corre a tu nueva posición sin dar la espalda a la pista.`,
        pdfUrl: 'https://www.basketref.com/documents/fiba_materials_2025/FIBA_Referee_Manual_IOT_v2_5_Dec2024_en.pdf'
      }
    ]
  },
  {
    id: 'man-chap-mec',
    title: 'MECÁNICA DE ARBITRAJE (2PO y 3PO)',
    book: 'MANUAL',
    articles: [
      {
        id: 'man-2po',
        title: 'Mecánica de 2 Árbitros (2PO)',
        keywords: ['mecanica', '2po', 'lead', 'trail', 'cabeza', 'cola', 'responsabilidades'],
        content: `CONCEPTOS BÁSICOS (MIA - FEB):\nEl arbitraje se divide en dos posiciones que rotan constantemente:\n\n1. ÁRBITRO DE CABEZA (LEAD) \n• Posición: En la línea de fondo, buscando el "ángulo abierto".\n• Responsabilidad Principal: Juego en la zona (pintura), línea de fondo y juego sin balón en el lado débil.\n• Movimiento: Debe "penetrar" hacia la canasta cuando el balón está en el lado opuesto para ver los espacios entre jugadores ("Open Angle").\n\n2. ÁRBITRO DE COLA (TRAIL) \n• Posición: Ligeramente retrasado respecto al balón, cerca de la línea de banda (aprox. a la altura de 3 puntos extendida).\n• Responsabilidad Principal: Juego perimetral, tiros de 3 puntos, interferencias (goaltending) y seguir la transición (contraataque).\n\n3. ÁREAS DE RESPONSABILIDAD (La Caja)\n• Lead: Cuida los contactos debajo del aro, bloqueos bajos y penetraciones.\n• Trail: Cuida los tiros exteriores, bloqueos altos y el inicio de la jugada.\n• Regla de Oro: "Mira donde NO está tu compañero".`,
        pdfUrl: 'https://ligacordobesadebasquetbol.com/wp-content/uploads/2022/08/MIA_La-mecanica-de-arbitraje-2PO.pdf'
      },
      {
        id: 'man-3po',
        title: 'Mecánica de 3 Árbitros (3PO)',
        keywords: ['mecanica', '3po', 'central', 'center', 'rotacion'],
        content: `POSICIONES BÁSICAS:\n\n1. CENTRAL (CENTER - C)\n• Posición: Lado opuesto a la mesa, altura de tiro libre. \n• Función: Es el árbitro que conecta el juego. Vigila el lado débil y la zona desde el lado opuesto al balón.\n\n2. CABEZA (LEAD - L)\n• Posición: Línea de fondo.\n• Función: Similar al 2PO pero con menos terreno que cubrir. Se centra intensamente en el poste bajo y rotaciones.\n\n3. COLA (TRAIL - T)\n• Posición: Cerca de la mesa, altura de 3 puntos (28 pies).\n• Función: Vigila el balón en el perímetro y el lado fuerte alto.\n\nROTACIONES:\nEl principio clave del 3PO es que los árbitros rotan cuando el balón cambia de lado para asegurar que siempre haya dos árbitros en el "lado fuerte" (donde está el balón). El Lead inicia la rotación cruzando la pintura.`,
        pdfUrl: 'https://www.basketref.com/documents/fiba_materials_2025/FIBA_Referee_Manual_Basic_3PO_v2_5_Dec2024_en.pdf'
      }
    ]
  },
  {
    id: 'man-chap-ges',
    title: 'GESTIÓN Y VOCABULARIO',
    book: 'MANUAL',
    articles: [
      {
        id: 'man-pre',
        title: 'Charla Pre-Partido (Pre-Game)',
        keywords: ['prepartido', 'charla', 'criterio', 'cobertura'],
        content: `Antes de cada partido, la pareja arbitral debe repasar:\n\n1. SITUACIONES ESPECIALES:\n• ¿Quién administra el salto inicial?\n• ¿Quién vigila el reloj en los últimos segundos? (Ojo avizor).\n• ¿Cómo nos comunicamos en tiros libres? (Miradas, pulgar arriba).\n\n2. CRITERIO:\n• "Empezar fuerte": Marcar el tono en los primeros 2 minutos (contactos ilegales, uso de manos, pantallas móviles).\n• Faltas Antideportivas: Recordar los criterios C1 (sin balón), C2 (duro), C3 (transición) y C4 (último hombre).\n\n3. COBERTURA (MECÁNICA):\n• Ayudas en fueras de banda difíciles.\n• Quién pita las faltas en transición (Trail suele llevar la jugada, Lead espera en fondo).`
      },
      {
        id: 'man-glo',
        title: 'Glosario de Términos (FIBA)',
        keywords: ['glosario', 'ingles', 'terminos', 'act of shooting', 'charge', 'block'],
        content: `• ACT OF SHOOTING (AOS): Acción de tiro.\n• BACKCOURT: Pista trasera (Defensa).\n• FRONTCOURT: Pista delantera (Ataque).\n• CHARGE: Falta en ataque (carga).\n• BLOCK: Falta en defensa (bloqueo) o Tapón.\n• CREW CHIEF: Árbitro principal.\n• UMPIRE: Árbitro auxiliar.\n• FAKE / FLOP: Simulación.\n• SCREEN: Pantalla / Bloqueo indirecto.\n• THROW-IN: Saque de banda/fondo.\n• TRAVELLING: Pasos.\n• UNSPORTSMANLIKE: Falta Antideportiva.\n• DISQUALIFYING: Falta Descalificante.`,
        pdfUrl: 'https://www.bnsw.com.au/wp-content/uploads/2024/01/FIBA-Basic-Basketball-Officiating-Glossary-v2.1.pdf'
      }
    ]
  }
];

export const FIBA_RULEBOOK = [...DATA_REGLAMENTO, ...DATA_OBRI, ...DATA_MANUAL];
