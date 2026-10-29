/* =====================================================================
   app.js — Lógica de interacción
   ---------------------------------------------------------------------
   Flujo:
   1. Laura escribe el nombre de la runa y pulsa "Descifrar" (o Enter).
   2. El texto se normaliza (minúsculas, sin tildes, sin espacios extra)
      y se busca en un índice construido a partir de CARTAS (data.js).
   3. Si coincide → el portal se desvanece y la tarjeta de revelación
      aparece deslizándose hacia arriba.
   4. Si no coincide → un mensaje discreto bajo el campo de texto.
   5. "Cerrar pergamino" invierte la transición y limpia el formulario.
   ===================================================================== */

(function () {
  'use strict';

  /* ---------- Referencias al DOM ---------- */
  const portal       = document.getElementById('portal');
  const revelacion   = document.getElementById('revelacion');
  const form         = document.getElementById('form-runa');
  const input        = document.getElementById('input-runa');
  const mensajeError = document.getElementById('mensaje-error');
  const btnCerrar    = document.getElementById('btn-cerrar');

  const campos = {
    runaSimbolo:      document.getElementById('runa-simbolo'),
    runaNombre:       document.getElementById('runa-nombre'),
    runaSignificado:  document.getElementById('runa-significado'),
    selloRotulo:      document.getElementById('sello-rotulo'),
    selloPalabra:     document.getElementById('sello-palabra'),
    selloIdioma:      document.getElementById('sello-idioma'),
    selloSignificado: document.getElementById('sello-significado'),
    selloMensaje:     document.getElementById('sello-mensaje')
  };

  /* ---------- Textos de error (discretos, sin alert) ---------- */
  const FRASES_SILENCIO = [
    'Esa runa aún permanece en silencio…',
    'El pergamino no reconoce ese nombre…',
    'Las runas no responden a esa palabra… inténtalo de nuevo.'
  ];
  const FRASE_VACIA = 'El pergamino espera que escribas un nombre…';

  /* ---------- Utilidades ---------- */

  /**
   * Limpia el texto para compararlo con tolerancia a errores:
   * - NFD + eliminación de diacríticos → ignora tildes ("Kénaz" = "Kenaz")
   * - minúsculas, trim y espacios internos colapsados
   */
  function normalizar(texto) {
    return String(texto)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ');
  }

  function fraseAleatoria(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }

  /* ---------- Índice de búsqueda ----------
     Map: nombre normalizado (y alias) → objeto carta.
     Se construye una sola vez al cargar. */
  const indice = new Map();

  if (typeof CARTAS !== 'undefined' && Array.isArray(CARTAS)) {
    CARTAS.forEach(function (carta) {
      const claves = [carta.runa.nombre].concat(carta.runa.alias || []);
      claves.forEach(function (clave) {
        indice.set(normalizar(clave), carta);
      });
    });
  } else {
    console.error('[sello-de-runas] No se encontró CARTAS. ¿Se cargó data.js antes que app.js?');
  }

  /* ---------- Control de transiciones ---------- */
  let enTransicion = false;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Ejecuta `callback` cuando termina la animación CSS de `elemento`.
   * Incluye un temporizador de seguridad por si `animationend` nunca se
   * dispara (movimiento reducido, pestaña en segundo plano, etc.).
   */
  function alTerminarAnimacion(elemento, callback) {
    if (reduceMotion) { callback(); return; }

    let hecho = false;
    const finalizar = function () {
      if (hecho) return;
      hecho = true;
      elemento.removeEventListener('animationend', finalizar);
      callback();
    };
    elemento.addEventListener('animationend', finalizar);
    setTimeout(finalizar, 1200);
  }

  function irArriba() {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  /* ---------- Render de la tarjeta ---------- */
  function renderizarCarta(carta) {
    campos.runaSimbolo.textContent      = carta.runa.simbolo;
    campos.runaNombre.textContent       = carta.runa.nombre;
    campos.runaSignificado.textContent  = carta.runa.significado;
    // Rótulo del bloque: "La palabra · Casa" si la carta tiene nombre
    const nombreCarta = (carta.sello.carta || '').trim();
    campos.selloRotulo.textContent      = nombreCarta ? 'La palabra · ' + nombreCarta : 'La palabra';
    campos.selloPalabra.textContent     = carta.sello.palabra;
    campos.selloIdioma.textContent      = carta.sello.idioma;
    campos.selloSignificado.textContent = carta.sello.significado;

    // El mensaje personal es opcional: se oculta si está vacío
    const mensaje = (carta.sello.mensaje || '').trim();
    campos.selloMensaje.textContent = mensaje;
    campos.selloMensaje.hidden = mensaje === '';
  }

  /* ---------- Errores ---------- */
  function mostrarError(texto) {
    mensajeError.textContent = texto;
    // Reinicia la animación de "sacudida" aunque ya estuviera aplicada
    input.classList.remove('is-shaking');
    void input.offsetWidth;
    input.classList.add('is-shaking');
    input.focus();
  }

  function limpiarError() {
    if (mensajeError.textContent) mensajeError.textContent = '';
  }

  /* ---------- Transición: portal → revelación ---------- */
  function revelar(carta) {
    enTransicion = true;
    input.blur(); // cierra el teclado del celular

    portal.classList.add('is-leaving');
    alTerminarAnimacion(portal, function () {
      portal.classList.remove('is-leaving');
      portal.hidden = true;

      renderizarCarta(carta);
      revelacion.hidden = false;
      revelacion.classList.add('is-entering');
      irArriba();
      revelacion.focus({ preventScroll: true });

      alTerminarAnimacion(revelacion, function () {
        revelacion.classList.remove('is-entering');
        enTransicion = false;
      });
    });
  }

  /* ---------- Transición: revelación → portal ---------- */
  function cerrarPergamino() {
    if (enTransicion) return;
    enTransicion = true;

    revelacion.classList.add('is-leaving');
    alTerminarAnimacion(revelacion, function () {
      revelacion.classList.remove('is-leaving');
      revelacion.hidden = true;

      form.reset();
      limpiarError();
      portal.hidden = false;
      portal.classList.add('is-entering');
      irArriba();

      alTerminarAnimacion(portal, function () {
        portal.classList.remove('is-entering');
        enTransicion = false;
      });
    });
  }

  /* ---------- Eventos ---------- */
  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (enTransicion) return;

    const clave = normalizar(input.value);

    if (!clave) {
      mostrarError(FRASE_VACIA);
      return;
    }

    const carta = indice.get(clave);
    if (!carta) {
      mostrarError(fraseAleatoria(FRASES_SILENCIO));
      return;
    }

    limpiarError();
    revelar(carta);
  });

  // El error desaparece en cuanto vuelve a escribir
  input.addEventListener('input', limpiarError);

  btnCerrar.addEventListener('click', cerrarPergamino);

})();
