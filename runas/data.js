/* =====================================================================
   data.js — Base de datos de las cartas
   ---------------------------------------------------------------------
   Cada objeto del arreglo CARTAS representa una carta física sellada.
   Para añadir una carta nueva, copia uno de los bloques de ejemplo y
   reemplaza los textos. El orden del arreglo no importa y la interfaz
   nunca muestra cuántas cartas existen.

   Campos:
   runa.nombre        → CONTRASEÑA de desbloqueo (lo que Laura escribe).
                        La comparación ignora mayúsculas, tildes y espacios
                        sobrantes: "kenaz", "KENAZ" o "  Kénaz " son válidos.
   runa.alias         → (Opcional) Otras grafías aceptadas, ej. "Kaunan".
   runa.simbolo       → Carácter Unicode de la runa (bloque Runic U+16A0–U+16FF).
   runa.significado   → Texto místico que aparece bajo el símbolo.
   sello.palabra      → La palabra extranjera escrita en el sello.
   sello.idioma       → Idioma de origen de la palabra.
   sello.significado  → Qué significa esa palabra.
   sello.mensaje      → (Opcional) Tu mensaje personal. Déjalo como "" si
                        no quieres mostrar nada en esa carta.

   Referencia rápida de símbolos del Futhark antiguo:
   ᚠ Fehu   ᚢ Uruz    ᚦ Thurisaz  ᚨ Ansuz   ᚱ Raido   ᚲ Kenaz
   ᚷ Gebo   ᚹ Wunjo   ᚺ Hagalaz   ᚾ Nauthiz ᛁ Isa     ᛃ Jera
   ᛇ Eihwaz ᛈ Perthro ᛉ Algiz     ᛊ Sowilo  ᛏ Tiwaz   ᛒ Berkano
   ᛖ Ehwaz  ᛗ Mannaz  ᛚ Laguz     ᛜ Ingwaz  ᛞ Dagaz   ᛟ Othala
   ===================================================================== */

const CARTAS = [

  /* ---------- EJEMPLO 1 ---------- */
  {
    runa: {
      nombre: "Kenaz",
      alias: ["Kaunan", "Kano"],
      simbolo: "ᚲ",
      significado:
        "La antorcha que arde en la oscuridad. Kenaz es la chispa del " +
        "conocimiento, el fuego que no destruye sino que revela: aquello " +
        "que estaba oculto se vuelve visible cuando alguien decide " +
        "sostener la luz."
    },
    sello: {
      palabra: "Hiraeth",
      idioma: "Galés",
      significado:
        "Una nostalgia profunda por un hogar al que no se puede volver, " +
        "o que tal vez nunca existió. La añoranza de un lugar, un tiempo " +
        "o una persona que ya forma parte de uno mismo.",
      mensaje:
        "Contigo descubrí que el hogar no es un lugar: es la luz que " +
        "alguien enciende para esperarte."
    }
  },

  /* ---------- EJEMPLO 2 (sin mensaje personal) ---------- */
  {
    runa: {
      nombre: "Algiz",
      alias: ["Elhaz"],
      simbolo: "ᛉ",
      significado:
        "El alce con los cuernos alzados hacia el cielo. Algiz es la runa " +
        "de la protección y del instinto que vela: una mano abierta que " +
        "resguarda sin encerrar, un refugio que no pide nada a cambio."
    },
    sello: {
      palabra: "Komorebi",
      idioma: "Japonés",
      significado:
        "La luz del sol filtrándose entre las hojas de los árboles. El " +
        "juego de claridad y sombra que ocurre cuando algo luminoso " +
        "atraviesa aquello que lo cubre.",
      mensaje: ""
    }
  }

];
