/* =============================================================
   INHALTE — hier änderst du alles, ohne Code anfassen zu müssen.
   Nach dem Bearbeiten: Datei speichern, neu deployen, fertig.
   ============================================================= */

const CONFIG = {

  /* --- Kopfzeile ------------------------------------------- */
  flur: "Flur 1A",
  untertitel: "Willkommen im Wohnheim!",

  /* --- WhatsApp-Gruppenlink --------------------------------
     Du kannst den Link direkt hier eintragen (beginnend mit https://).
     Empfehlung: den Link Base64-kodiert eintragen, dann steht er
     nicht im Klartext im Quelltext der Seite.
     Kodieren: Browser öffnen -> F12 -> Konsole -> eintippen:
         btoa("https://chat.whatsapp.com/DEIN-CODE")
     Das Ergebnis (ohne Anführungszeichen) hier einsetzen.
     ---------------------------------------------------------- */
  whatsappLink: "https://chat.whatsapp.com/BEISPIEL-LINK-HIER-EINSETZEN",

  /* --- Bestehensgrenze --------------------------------------
     1 = alle Fragen müssen richtig sein.
     0.8 = 80 % reichen.
     ---------------------------------------------------------- */
  bestehensQuote: 1,

  /* --- Die Küchenregeln -------------------------------------
     Beliebig viele Einträge. icon = ein Emoji.
     (Aktuell Platzhalter — wird durch eure echten Regeln ersetzt.)
     ---------------------------------------------------------- */
  regeln: [
    {
      icon: "🍽️",
      titel: "Abwasch sofort erledigen",
      text: "Dein Geschirr wäschst du direkt nach dem Kochen ab — nicht „später“. Über Nacht stehen bleiben darf nichts."
    },
    {
      icon: "🔥",
      titel: "Herd und Backofen sauber hinterlassen",
      text: "Übergekochtes und Fettspritzer wischt du weg, solange sie noch warm sind. Auch das Ceranfeld und die Dunstabzugshaube gehören dazu."
    },
    {
      icon: "🧊",
      titel: "Kühlschrank: nur dein Fach",
      text: "Jeder hat ein festes Fach. Was dir nicht gehört, fasst du nicht an. Abgelaufenes räumst du selbst raus."
    },
    {
      icon: "🗑️",
      titel: "Volle Mülleimer rausbringen",
      text: "Wer sieht, dass der Müll voll ist, bringt ihn raus — und zieht einen neuen Beutel ein. Getrennt wird nach Restmüll, Papier, Verpackung und Bio."
    },
    {
      icon: "🧽",
      titel: "Putzplan einhalten",
      text: "Der Putzplan hängt in der Küche aus. Wer dran ist, macht es in der Woche fertig. Wenn du nicht kannst, tauschst du selbstständig."
    },
    {
      icon: "🔇",
      titel: "Ab 22 Uhr Rücksicht",
      text: "Nachts wird in der Küche leise gekocht und keine Musik laut gehört. Die Zimmer nebenan hören alles."
    }
  ],

  /* --- Der Test ---------------------------------------------
     "optionen": alle Antwortmöglichkeiten.
     "richtig":  Index der richtigen Antwort(en), beginnend bei 0.
                 Mehrere Zahlen = Mehrfachauswahl.
     "erklaerung": erscheint, wenn falsch geantwortet wurde.
     (Aktuell 2 Beispielfragen — Inhalt kommt später.)
     ---------------------------------------------------------- */
  fragen: [
    {
      frage: "Du hast gekocht und gegessen. Wann wäschst du dein Geschirr ab?",
      optionen: [
        "Direkt danach",
        "Spätestens am nächsten Morgen",
        "Wenn kein sauberer Teller mehr da ist",
        "Wenn jemand meckert"
      ],
      richtig: [0],
      erklaerung: "Geschirr wird sofort nach dem Kochen abgewaschen — über Nacht bleibt nichts stehen."
    },
    {
      frage: "Der Restmülleimer ist voll und du bist nicht mit Putzen dran. Was machst du?",
      optionen: [
        "Müll rausbringen und neuen Beutel einziehen",
        "Nichts, ist nicht meine Woche",
        "Den Müll daneben stellen",
        "In der Gruppe schreiben, dass jemand ran muss"
      ],
      richtig: [0],
      erklaerung: "Wer den vollen Eimer sieht, bringt ihn raus — unabhängig vom Putzplan."
    }
  ],

  /* --- Text auf der Abschluss-Seite -------------------------- */
  abschlussText: "Du kennst jetzt die Küchenregeln. Willkommen auf dem Flur!"
};
