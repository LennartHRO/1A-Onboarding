/* 8-Bit-Hintergrundmusik im Gameboy-Stil.
   Wird per Web Audio direkt im Browser erzeugt - keine Audiodatei noetig.
   Eigene Komposition, kein Original-Soundtrack.
   Alternativ eine eigene Datei: in config.js unter musik.datei eintragen. */

var Musik = (function () {
  "use strict";

  var BPM = 132;
  var ACHTEL = 60 / BPM / 2;

  /* Melodie und Bass als [MIDI-Note, Laenge in Achteln]. 0 = Pause.
     Achtteilige Takte ueber die Folge C - G - Am - F. */
  var MELODIE = [
    [67,1],[72,1],[76,1],[79,1],[76,1],[79,1],[72,2],
    [74,1],[71,1],[74,1],[79,1],[78,1],[74,1],[71,2],
    [72,1],[76,1],[81,1],[76,1],[72,1],[76,1],[69,2],
    [77,1],[81,1],[84,1],[81,1],[77,1],[72,1],[77,2],
    [76,2],[79,2],[84,2],[79,2],
    [74,2],[79,2],[83,2],[79,2],
    [69,1],[72,1],[76,1],[81,1],[79,1],[76,1],[72,2],
    [77,1],[79,1],[81,1],[83,1],[84,4]
  ];

  var BASS = [
    [48,2],[55,2],[48,2],[55,2],
    [43,2],[50,2],[43,2],[50,2],
    [45,2],[52,2],[45,2],[52,2],
    [41,2],[48,2],[41,2],[48,2],
    [48,2],[55,2],[48,2],[55,2],
    [43,2],[50,2],[43,2],[50,2],
    [45,2],[52,2],[45,2],[52,2],
    [41,2],[48,2],[43,2],[50,2]
  ];

  var ctx = null, master = null, timer = null, audio = null;
  var laeuft = false, naechsterLoop = 0;

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
  }

  function loopPlanen(start) {
    var t = start;
    MELODIE.forEach(function (n) {
      ton(n[0], t, n[1] * ACHTEL, "square", 0.2);
      t += n[1] * ACHTEL;
    });

    var b = start;
    BASS.forEach(function (n) {
      ton(n[0], b, n[1] * ACHTEL, "triangle", 0.32);
      b += n[1] * ACHTEL;
    });

    return t;
  }

  function nachplanen() {
    if (!laeuft) return;
    // immer rund zwei Sekunden Vorlauf einplanen
    var schutz = 0;
    while (naechsterLoop < ctx.currentTime + 2 && schutz++ < 5) {
      naechsterLoop = loopPlanen(Math.max(naechsterLoop, ctx.currentTime + 0.05));
    }
  }

  function eigeneDatei() {
    return CONFIG.musik && CONFIG.musik.datei;
  }

  return {
    verfuegbar: function () {
      if (!CONFIG.musik || CONFIG.musik.an === false) return false;
      return !!(eigeneDatei() || window.AudioContext || window.webkitAudioContext);
    },

    laeuft: function () { return laeuft; },

    start: function () {
      if (laeuft || !this.verfuegbar()) return;
      var vol = (CONFIG.musik && CONFIG.musik.lautstaerke) || 0.16;

      if (eigeneDatei()) {
        if (!audio) {
          audio = new Audio(CONFIG.musik.datei);
          audio.loop = true;
        }
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

    stop: function () {
      laeuft = false;
      if (audio) audio.pause();
      if (timer) { clearInterval(timer); timer = null; }
      if (ctx && master) {
        // sanft ausblenden, dann Kontext anhalten
        master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.05);
        var c = ctx;
        setTimeout(function () { if (!laeuft && c.state === "running") c.suspend(); }, 300);
      }
    }
  };
})();
