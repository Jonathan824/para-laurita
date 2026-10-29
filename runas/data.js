/* =====================================================================
   data.js — Base de datos de las cartas
   ---------------------------------------------------------------------
   Cada objeto del arreglo CARTAS representa una carta física sellada.
   El orden del arreglo no importa y la interfaz nunca muestra cuántas
   cartas existen.

   Campos:
   runa.nombre        → CONTRASEÑA de desbloqueo (lo que Laura escribe).
                        La comparación ignora mayúsculas, tildes y espacios
                        sobrantes: "algiz", "ALGIZ" o "  Álgiz " son válidos.
   runa.alias         → (Opcional) Otras grafías aceptadas.
   runa.simbolo       → Carácter Unicode de la runa.
   runa.significado   → Texto que aparece bajo el símbolo.
   sello.carta        → (Opcional) Nombre de la carta (Casa, Avión...).
   sello.palabra      → La palabra extranjera escrita en el sello.
   sello.idioma       → Idioma de origen de la palabra.
   sello.significado  → Qué significa esa palabra.
   sello.mensaje      → (Opcional) Un mensaje personal. "" para no mostrar nada.

   Referencia rápida de símbolos del Futhark antiguo:
   ᚠ Fehu   ᚢ Uruz    ᚦ Thurisaz  ᚨ Ansuz   ᚱ Raido   ᚲ Kenaz
   ᚷ Gebo   ᚹ Wunjo   ᚺ Hagalaz   ᚾ Nauthiz ᛁ Isa     ᛃ Jera
   ᛇ Eihwaz ᛈ Perthro ᛉ Algiz     ᛊ Sowilo  ᛏ Tiwaz   ᛒ Berkana
   ᛖ Ehwaz  ᛗ Mannaz  ᛚ Laguz     ᛜ Ingwaz  ᛞ Dagaz   ᛟ Othala
   ===================================================================== */

const CARTAS = [

  /* ---------- Casa ---------- */
  {
    runa: {
      nombre: "Algiz",
      alias: ["Elhaz"],
      simbolo: "ᛉ",
      significado:
        "Es la runa de la protección, el santuario y la conexión " +
        "espiritual. Históricamente, los nórdicos la invocaban en rituales " +
        "antes de abandonar sus hogares para asegurar que el viaje " +
        "estuviera resguardado. Simboliza dejar un refugio seguro para " +
        "enfrentar lo desconocido, pero yendo protegido."
    },
    sello: {
      carta: "Casa",
      palabra: "Resfeber",
      idioma: "Sueco",
      significado:
        "Es el latido inquieto y acelerado del corazón de un viajero " +
        "antes de que comience el viaje.",
      mensaje: ""
    }
  },

  /* ---------- Avión ---------- */
  {
    runa: {
      nombre: "Kenaz",
      alias: ["Kaunan", "Kano"],
      simbolo: "ᚲ",
      significado:
        "Es la runa de la antorcha y el fuego. Representa el impulso " +
        "vital y la responsabilidad de mantener la llama viva y ardiente " +
        "para que no sea consumida por la monotonía."
    },
    sello: {
      carta: "Avión",
      palabra: "Batticuore",
      idioma: "Italiano",
      significado:
        "Es el latido acelerado, descontrolado y palpitante del corazón " +
        "que surge por el enamoramiento, la adrenalina o los nervios ante " +
        "lo desconocido.",
      mensaje: ""
    }
  },

  /* ---------- Brasil ---------- */
  {
    runa: {
      nombre: "Berkana",
      alias: ["Berkano", "Bjarkan"],
      simbolo: "ᛒ",
      significado:
        "La runa del abedul. Representa los nuevos comienzos, la " +
        "fertilidad de las ideas y el crecimiento continuo e imparable."
    },
    sello: {
      carta: "Brasil",
      palabra: "Xodó",
      idioma: "Portugués",
      significado:
        "Significa un cariño muy intenso, profundo y especial hacia otra " +
        "persona. Una forma de decir “mi amor”.",
      mensaje: ""
    }
  },

  /* ---------- Hotel ---------- */
  {
    runa: {
      nombre: "Tiwaz",
      alias: ["Teiwaz", "Tyr"],
      simbolo: "ᛏ",
      significado:
        "Es la runa del dios guerrero Tyr. Es el símbolo definitivo del " +
        "honor, la lealtad profunda y la valentía de mantenerse fiel a un " +
        "juramento. Representa la fidelidad no como una regla impuesta, " +
        "sino como una elección consciente e inquebrantable de proteger " +
        "con tu propia vida el vínculo que los une."
    },
    sello: {
      carta: "Hotel",
      palabra: "Ya'aburnee",
      idioma: "Árabe · يقبرني",
      significado:
        "Se traduce literalmente como “que tú me entierres”. Es una " +
        "declaración de devoción profunda y cruda. Significa un vínculo " +
        "tan inquebrantable que la idea de vivir un solo día sin la otra " +
        "persona es insoportable. Es la lealtad absoluta de entregarle tu " +
        "existencia entera al otro.",
      mensaje: ""
    }
  },

  /* ---------- Amanecer ---------- */
  {
    runa: {
      nombre: "Ehwaz",
      alias: ["Eoh"],
      simbolo: "ᛖ",
      significado:
        "Significa literalmente “caballo”. Para los nórdicos, representaba " +
        "el progreso armónico, el trabajo en equipo y la confianza mutua " +
        "absoluta entre el jinete y su caballo para avanzar juntos."
    },
    sello: {
      carta: "Amanecer",
      palabra: "Geborgenheit",
      idioma: "Alemán",
      significado:
        "El sentimiento profundo e intraducible de estar completamente a " +
        "salvo, protegido y comprendido por alguien. Es la confianza " +
        "extrema de poder apagar todas tus alertas y dejarte caer, con la " +
        "certeza absoluta de que la otra persona te va a sostener.",
      mensaje: ""
    }
  },

  /* ---------- Noviazgo ---------- */
  {
    runa: {
      nombre: "Gebo",
      alias: ["Gyfu", "Gifu"],
      simbolo: "ᚷ",
      significado:
        "Significa “regalo” o “don”. Para los nórdicos, representaba el " +
        "equilibrio perfecto en un pacto entre dos partes. No es un " +
        "contrato de propiedad, es la entrega libre y voluntaria de uno " +
        "mismo al otro. Es la runa de las relaciones genuinas, el amor y " +
        "la unión de dos destinos."
    },
    sello: {
      carta: "Noviazgo",
      palabra: "Nunchi",
      idioma: "Coreano · 눈치",
      significado:
        "El arte sutil y silencioso de leer al otro. Esa conexión casi " +
        "telepática donde te mido con la mirada y sé exactamente qué " +
        "sientes, qué necesitas o qué estás pensando sin que tengas que " +
        "decir una sola palabra. Es la empatía profunda de entender tus " +
        "silencios. Y si tu cabeza lo recuerda… lo vimos juntos en la " +
        "feria del libro.",
      mensaje: ""
    }
  }

];
