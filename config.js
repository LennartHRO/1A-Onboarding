/* =============================================================
   INHALTE — hier änderst du alles, ohne Code anfassen zu müssen.
   Nach dem Bearbeiten: speichern, committen, pushen. Fertig.
   ============================================================= */

const CONFIG = {

  /* --- Kopfzeile ------------------------------------------- */
  seitentitel: "Dienste & Regeln",
  flur: "Flur 1A",
  untertitel: "Willkommen auf dem Stockwerk!",

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
     1   = alle Fragen müssen richtig sein
     0.8 = 80 % reichen
     ---------------------------------------------------------- */
  bestehensQuote: 1,

  /* --- Die Regeln, gegliedert in Abschnitte -----------------
     Beliebig viele Abschnitte, beliebig viele Regeln pro Abschnitt.
     "einleitung" ist optional.
     ---------------------------------------------------------- */
  abschnitte: [
    {
      titel: "Grundsätzliches",
      einleitung: "Bei uns wohnen 16 Leute auf dem Stockwerk. Damit das funktioniert, gibt es drei Dienste, die reihum wandern.",
      regeln: [
        {
          icon: "🔁",
          titel: "Drei Dienste pro Periode",
          text: "Jeder übernimmt pro Periode je einmal den Küchendienst, den Mülldienst und den Wohnzimmerdienst. Meistens lässt sich alles gleichzeitig in derselben Woche erledigen."
        },
        {
          icon: "✍️",
          titel: "Selbst in die Liste eintragen",
          text: "Zu Beginn jeder Periode trägst du dich selbst in die Liste ein, die in der Küche hängt. Die aktuelle Liste ist voll – die neue hängen wir im Oktober aus."
        },
        {
          icon: "👥",
          titel: "Gilt für alle",
          text: "Jeder Bewohner der Stockwerksgemeinschaft ist verpflichtet, die Dienste im wöchentlich rotierenden Rhythmus zu übernehmen – einschließlich Feriengäste."
        },
        {
          icon: "✅",
          titel: "Abnahme durch einen Mitbewohner",
          text: "Die ordnungsgemäße Durchführung wird durch einen Mitbewohner abgenommen. Bei mangelhafter Ausführung wird die Person öffentlich angeprangert, bloßgestellt und getadelt!"
        }
      ]
    },

    {
      titel: "Küchendienst",
      regeln: [
        {
          icon: "👀",
          titel: "Überwachung der Küchenordnung",
          text: "Der Küchendienst achtet darauf, dass alle die Küchenregeln einhalten. Bei Verstößen weist er die Person darauf hin oder macht in der Gruppe darauf aufmerksam. Es ist NICHT seine Aufgabe, den Mitbewohnern hinterherzuräumen – er behält den Überblick und greift bei Bedarf ein."
        },
        {
          icon: "💬",
          titel: "Hinweise nicht persönlich nehmen",
          text: "Hinweise des Küchendienstes dürfen in direkter Sprache formuliert werden und sollten nicht persönlich aufgefasst werden. Ohne klar beauftragte Person, die regelwidriges Verhalten anspricht, wirkt so ein Hinweis schnell wie ein persönlicher Angriff."
        },
        {
          icon: "🧺",
          titel: "Herrenlose Sachen und Flächen",
          text: "In seltenen Fällen lassen sich herumstehende Gegenstände oder ungereinigtes Geschirr keiner Person mehr zuordnen. Dann räumt der Küchendienst sie weg. Dasselbe gilt für verunreinigte Flächen: Findet sich kein Verantwortlicher, bringt er Tisch-, Arbeits- und Wandflächen in einen ordnungsgemäßen Zustand."
        },
        {
          icon: "💧",
          titel: "Wasserkocher entkalken",
          text: "Der Wasserkocher wird regelmäßig mit einem geeigneten Reinigungsmittel entkalkt. Geht das Mittel zur Neige, kommt es auf die Einkaufsliste."
        },
        {
          icon: "🔌",
          titel: "Küchengeräte reinigen",
          text: "Von außen und gegebenenfalls auch von innen: Toaster, Airfryer, Brotschneidemaschine, Mikrowelle (innen und außen) und Backofen (innen und außen)."
        },
        {
          icon: "🍴",
          titel: "Besteck sortieren",
          text: "Das Besteck wird ordentlich in die dafür vorgesehenen Behälter einsortiert. Fehlplatzierungen werden korrigiert."
        },
        {
          icon: "🚰",
          titel: "Fach unter der Spüle",
          text: "Das Fach unter der Spüle ist in einem ordentlichen und sauberen Zustand zu halten."
        },
        {
          icon: "🧻",
          titel: "Geschirrhandtücher wechseln",
          text: "Der Zustand der Geschirrhandtücher wird regelmäßig geprüft, bei Bedarf werden sie ausgetauscht – lieber früher als später."
        }
      ]
    },

    {
      titel: "Wohnzimmerdienst",
      regeln: [
        {
          icon: "🧹",
          titel: "Aufräumen",
          text: "Das Wohnzimmer wird in einem ordentlichen Zustand gehalten. Bei herumliegenden Sachen weist du den Verantwortlichen darauf hin – oder kümmerst dich im Zweifel selbst darum."
        },
        {
          icon: "🍽️",
          titel: "Geschirr-Regal aufräumen",
          text: "Das Regal hinter der Tür wird so sortiert, wie es auf den Klebern steht. Teller und Tassen gleicher Form kommen an denselben Ort."
        },
        {
          icon: "🧽",
          titel: "Boden staubsaugen",
          text: "Der Boden wird einmal die Woche gestaubsaugt, auch der Teppich."
        },
        {
          icon: "🪑",
          titel: "Tisch wischen",
          text: "Der Esstisch wird sauber gehalten. Findet sich für Verschmutzungen kein Verantwortlicher, reinigt ihn der Wohnzimmerdienst."
        },
        {
          icon: "🛋️",
          titel: "Decken und Kissen",
          text: "Decken und Kissen kommen in den Schrank oder werden ordentlich auf das Sofa gelegt."
        },
        {
          icon: "🪴",
          titel: "Pflanzen gießen",
          text: "Alle Pflanzen im Wohnzimmer werden einmal gewässert, wenn nötig."
        },
        {
          icon: "🛒",
          titel: "Einkaufsliste pflegen",
          text: "Immer verfügbar sein sollten: Küchenpapier, Bio-Müllbeutel, Schwämme, Lappen, Backpapier und Zwiebeln. Ist absehbar, dass etwas davon zur Neige geht, trägst du es frühzeitig in die Einkaufsliste ein. Was auf der Liste steht, wird einmal pro Woche besorgt."
        },
        {
          icon: "🧳",
          titel: "Staubsaugerbeutel kontrollieren",
          text: "Es wird geprüft, ob der Beutel im Staubsauger seine maximale Füllhöhe erreicht hat. Gegebenenfalls wird ein neuer besorgt."
        }
      ]
    },

    {
      titel: "Mülldienst",
      regeln: [
        {
          icon: "♻️",
          titel: "Jede Woche frühzeitig entleeren",
          text: "Plastikmüll, Papiermüll, Biomüll und Glasmüll. Aluminiummüll kommt in dieselbe Tonne wie der Plastikmüll."
        },
        {
          icon: "📅",
          titel: "Die Montagsregel",
          text: "Am Montag sind alle Behälter erneut zu entleeren – egal, wie sehr sie gefüllt sind – und leer an den darauffolgenden Mülldienst zu übergeben."
        }
      ]
    }
  ],

  /* --- Der Test ---------------------------------------------
     "optionen": alle Antwortmöglichkeiten.
     "richtig":  Index der richtigen Antwort(en), beginnend bei 0.
                 Mehrere Zahlen = Mehrfachauswahl.
     "erklaerung": erscheint, wenn falsch geantwortet wurde.
     ---------------------------------------------------------- */
  fragen: [
    {
      frage: "Welche Dienste übernimmt jeder Bewohner pro Periode?",
      optionen: [
        "Je einmal Küchendienst, Mülldienst und Wohnzimmerdienst",
        "Nur den Küchendienst",
        "Einen der drei Dienste, den man sich aussuchen darf",
        "Alle drei, aber nur wer länger als ein Semester bleibt"
      ],
      richtig: [0],
      erklaerung: "Jeder übernimmt pro Periode alle drei Dienste je einmal – meistens lässt sich das in derselben Woche gleichzeitig erledigen. Das gilt für alle auf dem Stockwerk, auch für Feriengäste."
    },
    {
      frage: "Wie kommst du zu deinen Dienstwochen?",
      optionen: [
        "Ich trage mich zu Beginn der Periode selbst in die Liste in der Küche ein",
        "Die Wochen werden in der WhatsApp-Gruppe zugeteilt",
        "Wer neu einzieht, bekommt automatisch die nächste freie Woche",
        "Man meldet sich beim Hausmeister"
      ],
      richtig: [0],
      erklaerung: "Zu Beginn jeder Periode trägt sich jeder selbst in die Liste ein, die in der Küche hängt."
    },
    {
      frage: "Du hast Küchendienst und siehst das dreckige Geschirr eines Mitbewohners. Was ist deine Aufgabe?",
      optionen: [
        "Ihn darauf hinweisen oder in der Gruppe darauf aufmerksam machen",
        "Das Geschirr abwaschen – dafür ist der Küchendienst da",
        "Das Geschirr in sein Zimmer stellen",
        "Nichts – wer Küchendienst hat, putzt nur am Ende der Woche"
      ],
      richtig: [0],
      erklaerung: "Es ist ausdrücklich NICHT Aufgabe des Küchendienstes, den Mitbewohnern hinterherzuräumen. Er behält den Überblick, spricht Verstöße an und greift nur bei Bedarf ein."
    },
    {
      frage: "In der Küche steht ungereinigtes Geschirr, das sich niemandem mehr zuordnen lässt. Und was ist mit den Flächen?",
      optionen: [
        "Der Küchendienst räumt es weg und bringt auch Tisch-, Arbeits- und Wandflächen in Ordnung",
        "Es bleibt stehen, bis sich jemand meldet",
        "Es wird entsorgt",
        "Der Wohnzimmerdienst übernimmt das"
      ],
      richtig: [0],
      erklaerung: "Lässt sich kein Verantwortlicher finden, wird der Küchendienst selbst tätig – für herrenlose Gegenstände genauso wie für Tisch-, Arbeits- und Wandflächen."
    },
    {
      frage: "Bei welchen Küchengeräten muss ausdrücklich auch das Innere gereinigt werden?",
      optionen: [
        "Mikrowelle",
        "Backofen",
        "Toaster",
        "Brotschneidemaschine"
      ],
      richtig: [0, 1],
      erklaerung: "Bei Mikrowelle und Backofen steht ausdrücklich innen und außen. Toaster, Airfryer und Brotschneidemaschine werden von außen und gegebenenfalls innen gereinigt."
    },
    {
      frage: "Das Entkalkungsmittel für den Wasserkocher geht zur Neige. Was tust du?",
      optionen: [
        "Ich setze es auf die Einkaufsliste",
        "Ich kaufe es selbst und teile die Kosten in der Gruppe auf",
        "Ich frage in der Gruppe, wer noch welches hat",
        "Nichts – der nächste Küchendienst wird es schon merken"
      ],
      richtig: [0],
      erklaerung: "Geht das Reinigungsmittel zur Neige, kommt es auf die Einkaufsliste. Was dort steht, wird einmal pro Woche besorgt."
    },
    {
      frage: "Was gilt beim Mülldienst am Montag?",
      optionen: [
        "Alle Behälter werden geleert – egal wie voll – und leer an den nächsten Mülldienst übergeben",
        "Nur die Behälter, die mehr als halb voll sind",
        "Montags ist Ruhetag, geleert wird am Dienstag",
        "Der neue Mülldienst entscheidet selbst, was nötig ist"
      ],
      richtig: [0],
      erklaerung: "Am Montag sind alle Behälter erneut zu entleeren, egal wie sehr sie gefüllt sind, und leer an den darauffolgenden Mülldienst zu übergeben."
    },
    {
      frage: "Wohin kommt der Aluminiummüll?",
      optionen: [
        "In dieselbe Tonne wie der Plastikmüll",
        "Zum Glasmüll",
        "In den Biomüll",
        "In einen eigenen Behälter im Keller"
      ],
      richtig: [0],
      erklaerung: "Aluminiummüll ist eigentlich die gleiche Tonne wie der Plastikmüll. Wöchentlich entleert werden Plastik-, Papier-, Bio- und Glasmüll."
    },
    {
      frage: "Wie oft wird beim Wohnzimmerdienst gesaugt?",
      optionen: [
        "Einmal die Woche, der Teppich inbegriffen",
        "Einmal die Woche, den Teppich aber nur bei sichtbarem Schmutz",
        "Jeden zweiten Tag",
        "Nur wenn es sichtbar dreckig ist"
      ],
      richtig: [0],
      erklaerung: "Der Boden wird einmal die Woche gestaubsaugt, auch auf dem Teppich. Außerdem wird geprüft, ob der Staubsaugerbeutel voll ist."
    },
    {
      frage: "Welche dieser Sachen sollten laut Einkaufsliste immer verfügbar sein?",
      optionen: [
        "Küchenpapier",
        "Backpapier",
        "Zwiebeln",
        "Milch",
        "Kaffee"
      ],
      richtig: [0, 1, 2],
      erklaerung: "Immer verfügbar sein sollten: Küchenpapier, Bio-Müllbeutel, Schwämme, Lappen, Backpapier und Zwiebeln. Lebensmittel wie Milch oder Kaffee kauft jeder selbst."
    }
  ],

  /* --- Text auf der Abschluss-Seite -------------------------- */
  abschlussText: "Du kennst jetzt die Dienste und Regeln. Willkommen auf dem Flur!"
};
