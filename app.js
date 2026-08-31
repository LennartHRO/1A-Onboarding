/* Kuechenregeln-Onboarding
   Reines Frontend, keine Abhaengigkeiten, laeuft auch per Doppelklick (file://). */

(function () {
  "use strict";

  var SPEICHER_KEY = "kuechenregeln-bestanden-v1";

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- Screens ---------- */
  var screens = ["screen-start", "screen-rules", "screen-quiz", "screen-fail", "screen-done"];

  function zeige(id) {
    screens.forEach(function (s) { $(s).hidden = (s !== id); });
    window.scrollTo(0, 0);
    // waehrend der Fragen laeuft das treibende Stueck, sonst das ruhige
    if (typeof Musik !== "undefined" && Musik.laeuft()) Musik.wechsle(stueckZumBildschirm());
  }

  function stueckZumBildschirm() {
    return $("screen-quiz").hidden ? "normal" : "episch";
  }

  /* ---------- WhatsApp-Link auslesen (Klartext oder Base64) ---------- */
  function whatsappUrl() {
    var wert = (CONFIG.whatsappLink || "").trim();
    if (/^https?:\/\//i.test(wert)) return wert;
    try {
      var dekodiert = atob(wert);
      if (/^https?:\/\//i.test(dekodiert)) return dekodiert;
    } catch (e) { /* kein gueltiges Base64 */ }
    return wert;
  }

  /* ---------- Kopfzeilen fuellen ---------- */
  $("hero-flur").textContent = CONFIG.flur;
  $("hero-untertitel").textContent = CONFIG.untertitel;
  $("foot-flur").textContent = CONFIG.flur;
  $("done-text").textContent = CONFIG.abschlussText;
  document.title = CONFIG.seitentitel + " – " + CONFIG.flur;

  /* ---------- Regeln rendern ---------- */
  (function renderRegeln() {
    var ziel = $("rules-list");

    CONFIG.abschnitte.forEach(function (abschnitt) {
      var kopf = document.createElement("h3");
      kopf.className = "abschnitt";
      kopf.textContent = abschnitt.titel;
      ziel.appendChild(kopf);

      if (abschnitt.einleitung) {
        var intro = document.createElement("p");
        intro.className = "abschnitt-intro";
        intro.textContent = abschnitt.einleitung;
        ziel.appendChild(intro);
      }

      abschnitt.regeln.forEach(function (r) {
        var karte = document.createElement("div");
        karte.className = "rule";

        var icon = document.createElement("div");
        icon.className = "rule-icon";
        icon.textContent = r.icon || "•";

        var box = document.createElement("div");
        var titel = document.createElement("p");
        titel.className = "rule-title";
        titel.textContent = r.titel;
        var text = document.createElement("p");
        text.className = "rule-text";
        text.textContent = r.text;

        box.appendChild(titel);
        box.appendChild(text);

        if (r.bild) {
          var link = document.createElement("a");
          link.className = "rule-bild";
          link.href = r.bild;
          link.target = "_blank";
          link.rel = "noopener";

          var bild = document.createElement("img");
          bild.src = r.bild;
          bild.alt = r.bildAlt || r.titel;
          bild.loading = "lazy";

          link.appendChild(bild);
          box.appendChild(link);

          var lupe = document.createElement("p");
          lupe.className = "rule-bild-hinweis";
          lupe.textContent = "Zum Vergrößern antippen";
          box.appendChild(lupe);
        }

        karte.appendChild(icon);
        karte.appendChild(box);
        ziel.appendChild(karte);
      });
    });
  })();

  /* ---------- Weiter-Button erst freigeben, wenn durchgescrollt ---------- */
  var regelnGelesen = false;

  function regelnFreigeben() {
    regelnGelesen = true;
    $("btn-to-quiz").disabled = false;
    $("rules-hint").hidden = true;
  }

  if ("IntersectionObserver" in window) {
    var beobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) { if (e.isIntersecting) regelnFreigeben(); });
    }, { rootMargin: "0px 0px -60px 0px" });
    beobachter.observe($("rules-sentinel"));
  } else {
    regelnFreigeben();
  }

  // Sicherheitsnetz: nach 45 Sekunden auf dem Regel-Screen auf jeden Fall freigeben
  setTimeout(function () {
    if (!$("screen-rules").hidden) regelnFreigeben();
  }, 45000);

  /* ---------- Quiz ---------- */
  var nurNachlesen = false;

  var quiz = { fragen: [], index: 0, richtigCount: 0, fehler: [], geprueft: false, kartenAntwort: null };

  function mische(liste) {
    var a = liste.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function quizAufbauen() {
    var aufgaben = CONFIG.fragen.map(function (f) {
      var optionen = f.optionen.map(function (text, i) {
        return { text: text, richtig: f.richtig.indexOf(i) !== -1 };
      });
      return {
        typ: "auswahl",
        frage: f.frage,
        optionen: mische(optionen),
        erklaerung: f.erklaerung || "",
        mehrfach: f.richtig.length > 1
      };
    });

    // Kartenaufgabe: pro Durchlauf wird zufaellig genau eine Tonne abgefragt
    if (CONFIG.karte && CONFIG.karte.tonnen && CONFIG.karte.tonnen.length) {
      var tonnen = CONFIG.karte.tonnen;
      var t = tonnen[Math.floor(Math.random() * tonnen.length)];
      aufgaben.push({
        typ: "karte",
        tonne: t,
        frage: "Wo steht die Tonne für " + t.name + "?",
        erklaerung: t.hinweis || ""
      });
    }

    quiz.fragen = mische(aufgaben);
    quiz.index = 0;
    quiz.richtigCount = 0;
    quiz.fehler = [];
  }

  function frageAnzeigen() {
    var f = quiz.fragen[quiz.index];
    quiz.geprueft = false;
    quiz.kartenAntwort = null;

    $("quiz-counter").textContent = "Frage " + (quiz.index + 1) + " von " + quiz.fragen.length;
    $("quiz-progress").style.width = (quiz.index / quiz.fragen.length * 100) + "%";
    $("quiz-question").textContent = f.frage;
    $("quiz-feedback").hidden = true;
    $("btn-check").hidden = false;
    $("btn-check").disabled = true;
    $("btn-next").hidden = true;

    var box = $("quiz-options");
    box.innerHTML = "";

    if (f.typ === "karte") {
      $("quiz-multi-hint").hidden = false;
      $("quiz-multi-hint").textContent =
        "Tippe die Stelle auf der Karte an. Der Ort muss nur ungefähr stimmen.";
      karteAufbauen(box);
      return;
    }

    $("quiz-multi-hint").hidden = !f.mehrfach;
    $("quiz-multi-hint").textContent = "Mehrere Antworten sind richtig.";

    f.optionen.forEach(function (opt, i) {
      var label = document.createElement("label");
      label.className = "opt";

      var input = document.createElement("input");
      input.type = f.mehrfach ? "checkbox" : "radio";
      input.name = "antwort";
      input.value = String(i);
      input.addEventListener("change", function () {
        $("btn-check").disabled = box.querySelectorAll("input:checked").length === 0;
      });

      var span = document.createElement("span");
      span.textContent = opt.text;

      label.appendChild(input);
      label.appendChild(span);
      box.appendChild(label);
    });
  }

  function zeichen(t) {
    var s = document.createElement("span");
    s.className = "opt-mark";
    s.textContent = t;
    return s;
  }

  /* ---------- Kartenaufgabe ---------- */
  function karteAufbauen(box) {
    var wrap = document.createElement("div");
    wrap.className = "karte-wrap";
    wrap.id = "karte-wrap";

    var bild = document.createElement("img");
    bild.src = CONFIG.karte.bild;
    bild.alt = CONFIG.karte.bildAlt || "Karte";
    wrap.appendChild(bild);

    wrap.addEventListener("click", function (e) {
      if (quiz.geprueft) return;
      var r = bild.getBoundingClientRect();
      if (!r.width || !r.height) return;

      var x = (e.clientX - r.left) / r.width;
      var y = (e.clientY - r.top) / r.height;
      if (x < 0 || x > 1 || y < 0 || y > 1) return;

      quiz.kartenAntwort = { x: x, y: y };
      markerSetzen(wrap, "marker-eigen", x, y, "");
      $("btn-check").disabled = false;
    });

    box.appendChild(wrap);
  }

  function markerSetzen(wrap, klasse, x, y, beschriftung) {
    var vorher = wrap.querySelector("." + klasse);
    if (vorher) vorher.parentNode.removeChild(vorher);

    var m = document.createElement("div");
    m.className = "marker " + klasse;
    m.style.left = (x * 100) + "%";
    m.style.top = (y * 100) + "%";

    if (beschriftung) {
      var l = document.createElement("span");
      l.className = "marker-label";
      l.textContent = beschriftung;
      // Label nach innen klappen, wenn der Marker am rechten Rand sitzt
      if (x > 0.6) l.classList.add("links");
      m.appendChild(l);
    }

    wrap.appendChild(m);
    return m;
  }

  function kartenAntwortPruefen(f) {
    var a = quiz.kartenAntwort;
    if (!a) return;
    quiz.geprueft = true;

    var wrap = $("karte-wrap");
    var bild = wrap.querySelector("img");

    // x und y sind auf Breite bzw. Hoehe normiert - y auf die Breite umrechnen,
    // damit der Abstand nicht vom Seitenverhaeltnis verzerrt wird
    var verhaeltnis = (bild.naturalWidth && bild.naturalHeight)
      ? bild.naturalHeight / bild.naturalWidth
      : 1;

    var dx = a.x - f.tonne.x;
    var dy = (a.y - f.tonne.y) * verhaeltnis;
    var abstand = Math.sqrt(dx * dx + dy * dy);

    var toleranz = (CONFIG.karte && typeof CONFIG.karte.toleranz === "number")
      ? CONFIG.karte.toleranz : 0.1;
    var richtig = abstand <= toleranz;

    wrap.classList.add("locked");
    markerSetzen(wrap, "marker-eigen", a.x, a.y, "")
      .classList.add(richtig ? "treffer" : "daneben");
    markerSetzen(wrap, "marker-loesung", f.tonne.x, f.tonne.y, f.tonne.name);

    ergebnisAnzeigen(richtig, f.tonne.hinweis || "", f);
  }

  /* ---------- Auswertung einer Frage ---------- */
  function ergebnisAnzeigen(richtig, text, f) {
    var fb = $("quiz-feedback");
    fb.innerHTML = "";
    fb.hidden = false;
    fb.className = "feedback " + (richtig ? "ok" : "no");

    var kopf = document.createElement("strong");
    kopf.textContent = richtig ? "Richtig!" : "Leider nicht ganz.";
    fb.appendChild(kopf);
    if (text) fb.appendChild(document.createTextNode(text));

    if (richtig) {
      quiz.richtigCount++;
    } else {
      quiz.fehler.push(f);
    }

    $("btn-check").hidden = true;
    $("btn-next").hidden = false;
    $("btn-next").textContent =
      (quiz.index + 1 < quiz.fragen.length) ? "Weiter" : "Ergebnis ansehen";
  }

  function antwortPruefen() {
    if (quiz.geprueft) return;

    var f = quiz.fragen[quiz.index];
    if (f.typ === "karte") {
      kartenAntwortPruefen(f);
      return;
    }
    quiz.geprueft = true;
    var labels = $("quiz-options").querySelectorAll(".opt");
    var allesRichtig = true;

    Array.prototype.forEach.call(labels, function (label, i) {
      var input = label.querySelector("input");
      var gewaehlt = input.checked;
      var korrekt = f.optionen[i].richtig;

      input.disabled = true;
      label.classList.add("locked");

      if (korrekt) {
        label.classList.add("is-correct");
        label.appendChild(zeichen("✓"));
      } else if (gewaehlt) {
        label.classList.add("is-wrong");
        label.appendChild(zeichen("✕"));
      }
      if (gewaehlt !== korrekt) allesRichtig = false;
    });

    ergebnisAnzeigen(allesRichtig, allesRichtig ? "" : f.erklaerung, f);
  }

  function naechsteFrage() {
    quiz.index++;
    if (quiz.index < quiz.fragen.length) {
      frageAnzeigen();
    } else {
      auswerten();
    }
  }

  function auswerten() {
    $("quiz-progress").style.width = "100%";
    var quote = quiz.richtigCount / quiz.fragen.length;
    var noetig = typeof CONFIG.bestehensQuote === "number" ? CONFIG.bestehensQuote : 1;

    if (quote + 1e-9 >= noetig) {
      try { localStorage.setItem(SPEICHER_KEY, "1"); } catch (e) {}
      zeige("screen-done");
      return;
    }

    $("fail-score").textContent =
      quiz.richtigCount + " von " + quiz.fragen.length + " Fragen richtig.";
    var liste = $("fail-list");
    liste.innerHTML = "";
    quiz.fehler.forEach(function (f) {
      var d = document.createElement("div");
      d.textContent = "❌ " + f.frage + (f.erklaerung ? " - " + f.erklaerung : "");
      liste.appendChild(d);
    });
    zeige("screen-fail");
  }

  /* ---------- Navigation ---------- */
  $("btn-start").addEventListener("click", function () {
    musikAnwerfen();
    zeige("screen-rules");
  });

  $("btn-to-quiz").addEventListener("click", function () {
    if (!regelnGelesen) return;
    if (nurNachlesen) { zeige("screen-done"); return; }
    if (quiz.fragen.length === 0 || quiz.index >= quiz.fragen.length) {
      quizAufbauen();
      frageAnzeigen();
    }
    zeige("screen-quiz");
  });

  $("btn-back-to-rules").addEventListener("click", function () {
    regelnFreigeben();
    zeige("screen-rules");
  });

  $("btn-check").addEventListener("click", antwortPruefen);
  $("btn-next").addEventListener("click", naechsteFrage);

  $("btn-retry-rules").addEventListener("click", function () {
    nurNachlesen = false;
    quizAufbauen();
    frageAnzeigen();
    regelnFreigeben();
    zeige("screen-rules");
  });

  $("btn-retry-quiz").addEventListener("click", function () {
    quizAufbauen();
    frageAnzeigen();
    zeige("screen-quiz");
  });

  $("btn-reread").addEventListener("click", function () {
    nurNachlesen = true;
    regelnFreigeben();
    $("btn-to-quiz").textContent = "Zurück";
    zeige("screen-rules");
  });

  /* ---------- Hintergrundmusik ---------- */
  var MUSIK_KEY = "kuechenregeln-musik-aus";
  var musikBtn = $("btn-musik");

  function musikGewuenscht() {
    try { return localStorage.getItem(MUSIK_KEY) !== "1"; } catch (e) { return true; }
  }

  function musikSymbolSetzen() {
    var an = Musik.laeuft();
    musikBtn.textContent = an ? "🔊" : "🔇";
    musikBtn.setAttribute("aria-pressed", an ? "true" : "false");
    musikBtn.title = an ? "Musik ausschalten" : "Musik einschalten";
  }

  // Browser erlauben Ton erst nach einer Nutzeraktion - daher beim ersten Klick starten
  function musikAnwerfen() {
    if (!Musik.verfuegbar() || !musikGewuenscht() || Musik.laeuft()) return;
    Musik.start(stueckZumBildschirm());
    musikSymbolSetzen();
  }

  if (Musik.verfuegbar()) {
    musikBtn.hidden = false;
    musikSymbolSetzen();
    musikBtn.addEventListener("click", function () {
      if (Musik.laeuft()) {
        Musik.stop();
        try { localStorage.setItem(MUSIK_KEY, "1"); } catch (e) {}
      } else {
        try { localStorage.removeItem(MUSIK_KEY); } catch (e) {}
        Musik.start(stueckZumBildschirm());
      }
      musikSymbolSetzen();
    });
  }

  /* ---------- Start ---------- */
  $("btn-whatsapp").href = whatsappUrl();

  var schonBestanden = false;
  try { schonBestanden = localStorage.getItem(SPEICHER_KEY) === "1"; } catch (e) {}

  if (schonBestanden) {
    nurNachlesen = true;
    $("btn-to-quiz").textContent = "Zurück";
    regelnFreigeben();
    zeige("screen-done");
  } else {
    zeige("screen-start");
  }
})();
