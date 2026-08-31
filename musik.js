/* 8-Bit-Hintergrundmusik, per Web Audio direkt im Browser erzeugt.
   Zwei Stuecke: "normal" laeuft ueberall, "episch" waehrend der Fragen.
   Eigene Komposition, kein Original-Soundtrack.
   Alternativ eigene Dateien: in config.js unter musik.datei / musik.dateiTest. */

var Musik = (function () {
  "use strict";

  /* Noten als [MIDI-Note, Laenge in Achteln]. 0 = Pause. */
  var STUECKE = {

    /* Freundlich, ueber die Folge C - G - Am - F */
    normal: {
      bpm: 132,
      melodieTyp: "square", bassTyp: "triangle",
      melodieVol: 0.2, bassVol: 0.32, oktave: false,
      melodie: [
        [67,1],[72,1],[76,1],[79,1],[76,1],[79,1],[72,2],
        [74,1],[71,1],[74,1],[79,1],[78,1],[74,1],[71,2],
        [72,1],[76,1],[81,1],[76,1],[72,1],[76,1],[69,2],
        [77,1],[81,1],[84,1],[81,1],[77,1],[72,1],[77,2],
        [76,2],[79,2],[84,2],[79,2],
        [74,2],[79,2],[83,2],[79,2],
        [69,1],[72,1],[76,1],[81,1],[79,1],[76,1],[72,2],
        [77,1],[79,1],[81,1],[83,1],[84,4]
      ],
      bass: [
        [48,2],[55,2],[48,2],[55,2],
        [43,2],[50,2],[43,2],[50,2],
        [45,2],[52,2],[45,2],[52,2],
        [41,2],[48,2],[41,2],[48,2],
        [48,2],[55,2],[48,2],[55,2],
        [43,2],[50,2],[43,2],[50,2],
        [45,2],[52,2],[45,2],[52,2],
        [41,2],[48,2],[43,2],[50,2]
      ]
    },

    /* Treibend und dramatisch, Moll ueber Am - F - C - G,
       durchlaufende Achtel im Bass, Melodie zusaetzlich eine Oktave tiefer verdoppelt */
    episch: {
      bpm: 152,
      melodieTyp: "sawtooth", bassTyp: "square",
      melodieVol: 0.15, bassVol: 0.28, oktave: true,
      melodie: [
        [69,2],[76,2],[81,2],[76,2],
        [77,2],[81,2],[84,2],[81,2],
        [79,2],[84,2],[88,1],[86,1],[84,2],
        [74,2],[79,2],[83,4],
        [81,1],[83,1],[84,2],[81,2],[76,2],
        [84,1],[86,1],[88,2],[84,2],[81,2],
        [86,2],[84,2],[79,2],[76,2],
        [80,2],[83,2],[81,4]
      ],
      bass: [
        [45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],
        [41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],
        [48,1],[48,1],[48,1],[48,1],[48,1],[48,1],[48,1],[48,1],
        [43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],
        [45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],
        [41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],
        [48,1],[48,1],[48,1],[48,1],[48,1],[48,1],[48,1],[48,1],
        [40,1],[40,1],[40,1],[40,1],[43,1],[43,1],[43,1],[43,1]
      ]
    }
  };

  var ctx = null, master = null, timer = null, audio = null, audioDatei = "";
  var laeuft = false, naechsterLoop = 0, aktuell = "normal";
  var geplant = [];                       // laufende Oszillatoren, fuer den Stueckwechsel

  function frequenz(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  function ton(midi, start, dauer, typ, lautstaerke) {
    if (!midi) return;
    var osc = ctx.createOscillator();
    var huelle = ctx.createGain();

    osc.type = typ;
    osc.frequency.setValueAtTime(frequenz(midi), start);

    huelle.gain.setValueAtTime(0.0001, start);
    huelle.gain.exponentialRampToValueAtTime(lautstaerke, start + 0.012);
    huelle.gain.exponentialRampToValueAtTime(0.0001, start + Math.max(dauer * 0.85, 0.05));

    osc.connect(huelle);
    huelle.connect(master);
    osc.start(start);
    osc.stop(start + dauer + 0.05);
    geplant.push(osc);
  }

  function loopPlanen(start) {
    var st = STUECKE[aktuell] || STUECKE.normal;
    var achtel = 60 / st.bpm / 2;

    var t = start;
    st.melodie.forEach(function (n) {
      ton(n[0], t, n[1] * achtel, st.melodieTyp, st.melodieVol);
      if (st.oktave && n[0]) ton(n[0] - 12, t, n[1] * achtel, st.melodieTyp, st.melodieVol * 0.55);
      t += n[1] * achtel;
    });

    var b = start;
    st.bass.forEach(function (n) {
      ton(n[0], b, n[1] * achtel, st.bassTyp, st.bassVol);
      b += n[1] * achtel;
    });

    return t;
  }

  function nachplanen() {
    if (!laeuft || !ctx) return;
    var schutz = 0;
    while (naechsterLoop < ctx.currentTime + 2 && schutz++ < 5) {
      naechsterLoop = loopPlanen(Math.max(naechsterLoop, ctx.currentTime + 0.05));
    }
    // aufgebrauchte Oszillatoren vergessen, damit die Liste nicht endlos waechst
    if (geplant.length > 400) geplant = geplant.slice(-200);
  }

  function alleStoppen(zeit) {
    geplant.forEach(function (osc) {
      try { osc.stop(zeit); } catch (e) { /* lief schon aus */ }
    });
    geplant = [];
  }

  function datei(stueck) {
    if (!CONFIG.musik) return "";
    return (stueck === "episch" && CONFIG.musik.dateiTest) || CONFIG.musik.datei || "";
  }

  return {
    verfuegbar: function () {
      if (!CONFIG.musik || CONFIG.musik.an === false) return false;
      return !!(datei("normal") || window.AudioContext || window.webkitAudioContext);
    },

    laeuft: function () { return laeuft; },
    stueck: function () { return aktuell; },

    start: function (stueck) {
      if (laeuft || !this.verfuegbar()) return;
      if (stueck && STUECKE[stueck]) aktuell = stueck;
      var vol = (CONFIG.musik && CONFIG.musik.lautstaerke) || 0.16;

      if (datei(aktuell)) {
        if (!audio) audio = new Audio();
        if (audioDatei !== datei(aktuell)) {
          audioDatei = datei(aktuell);
          audio.src = audioDatei;
        }
        audio.loop = true;
        audio.volume = vol;
        var p = audio.play();
        if (p && p.catch) p.catch(function () { laeuft = false; });
        laeuft = true;
        return;
      }

      if (!ctx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        ctx = new AC();
        master = ctx.createGain();
        master.connect(ctx.destination);
      }
      if (ctx.state === "suspended") ctx.resume();

      master.gain.setValueAtTime(vol, ctx.currentTime);
      laeuft = true;
      naechsterLoop = ctx.currentTime + 0.08;
      nachplanen();
      timer = setInterval(nachplanen, 1500);
    },

    /* Wechselt das Stueck, ohne die Musik anzuhalten. */
    wechsle: function (stueck) {
      if (!STUECKE[stueck] || stueck === aktuell) return;
      aktuell = stueck;
      if (!laeuft) return;

      if (datei(stueck)) {
        if (audio) {
          audio.pause();
          audioDatei = datei(stueck);
          audio.src = audioDatei;
          audio.loop = true;
          audio.play();
        }
        return;
      }
      if (!ctx) return;

      alleStoppen(ctx.currentTime + 0.12);      // laufende Toene kurz ausklingen lassen
      naechsterLoop = ctx.currentTime + 0.12;
      nachplanen();
    },

    stop: function () {
      laeuft = false;
      if (audio) audio.pause();
      if (timer) { clearInterval(timer); timer = null; }
      if (ctx && master) {
        alleStoppen(ctx.currentTime + 0.3);
        master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.05);
        var c = ctx;
        setTimeout(function () { if (!laeuft && c.state === "running") c.suspend(); }, 400);
      }
    }
  };
})();
