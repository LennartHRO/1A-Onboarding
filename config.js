/* =============================================================
   INHALTE — hier änderst du alles, ohne Code anfassen zu müssen.
   Nach dem Bearbeiten: speichern, committen, pushen. Fertig.
   ============================================================= */

const CONFIG = {

  /* --- Kopfzeile ------------------------------------------- */
  seitentitel: "Stockwerksregeln",
  flur: "Flur 1A",
  untertitel: "Willkommen auf dem Stockwerk!",

  /* --- WhatsApp-Gruppenlink --------------------------------
     Steht hier Base64-kodiert, damit er nicht im Klartext im
     Quelltext der Seite (und im öffentlichen Repo) auftaucht.
     Neuen Link kodieren: Browser -> F12 -> Konsole -> eintippen:
         btoa("https://chat.whatsapp.com/DEIN-CODE")
     Ergebnis ohne Anführungszeichen hier einsetzen.
     Ein Link im Klartext (https://...) funktioniert auch.
     ---------------------------------------------------------- */
  whatsappLink: "aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9IMFZWclJpTUh3M0NOclVTVFJkUHJC",

  /* --- Bestehensgrenze --------------------------------------
     1   = alle Fragen müssen richtig sein
     0.8 = 80 % reichen
     ---------------------------------------------------------- */
  bestehensQuote: 0.8,

  /* --- Hintergrundmusik -------------------------------------
     Eingebaut ist eine selbst erzeugte 8-Bit-Melodie im Gameboy-Stil,
     die per Web Audio direkt im Browser gespielt wird - also kein
     Original-Soundtrack und keine Audiodatei noetig.
     Es gibt zwei Stuecke: ein ruhiges fuer Startseite und Regeln,
     ein treibendes waehrend der Fragen - der Wechsel passiert von selbst.
     Eigene Dateien stattdessen: Dateinamen eintragen und die Dateien in
     denselben Ordner legen. dateiTest laeuft dann bei den Fragen; laesst
     du es leer, spielt datei durchgehend.
     an: false schaltet die Musik komplett ab.
     ---------------------------------------------------------- */
  musik: {
    an: true,
    datei: "",
    dateiTest: "",
    lautstaerke: 0.16
  },

  /* --- Die Regeln, gegliedert in Abschnitte -----------------
     Beliebig viele Abschnitte, beliebig viele Regeln pro Abschnitt.
     "einleitung" ist optional, "bild" ebenfalls.
     ---------------------------------------------------------- */
  abschnitte: [
    {
      titel: "Grundsätzliches",
      einleitung: "Bei uns wohnen 16 Leute auf dem Stockwerk. Damit das funktioniert, gibt es ein paar Absprachen und drei Dienste, die reihum wandern.",
      regeln: [
        {
          icon: "🤝",
          titel: "Nett und respektvoll miteinander",
          text: "Wir gehen freundlich und respektvoll miteinander um. Das ist die Grundlage für alles Weitere – auch dann, wenn mal etwas nicht rundläuft."
        },
        {
          icon: "🔁",
          titel: "Drei Dienste pro Periode",
          text: "Jeder übernimmt pro Periode je einmal den Küchendienst, den Mülldienst und den Wohnzimmerdienst. Alle drei lassen sich auch gleichzeitig in derselben Woche absolvieren."
        },
        {
          icon: "✍️",
          titel: "Selbst in die Liste eintragen",
          text: "Zu Beginn jeder Periode trägst du dich selbst in die Liste ein, die in der Küche hängt. Die aktuelle Liste ist voll – die neue hängen wir im Oktober aus und kündigen das nochmal in der Gruppe an."
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
        },
        {
          icon: "💸",
          titel: "Splitwise beitreten",
          text: "Alle Gemeinschaftsausgaben tragen wir in Splitwise ein – da musst du beitreten. Den Link gibt es in Kürze in der Gruppe."
        }
      ]
    },

    {
      titel: "In der Küche gilt immer",
      einleitung: "Unabhängig davon, wer gerade Dienst hat – das hier gilt für alle, jeden Tag.",
      regeln: [
        {
          icon: "🧼",
          titel: "Immer direkt spülen",
          text: "Dein Geschirr spülst du sofort nach dem Kochen und Essen ab. Nichts zum Trocknen stehen lassen – auch nicht kurz und auch nicht bis später."
        },
        {
          icon: "🧴",
          titel: "Flächen und Tische abwischen",
          text: "Tische und Arbeitsflächen wischst du nach der Benutzung ab. Jedes Mal, nicht nur dann, wenn etwas danebengegangen ist."
        },
        {
          icon: "🚰",
          titel: "Spüle sauber hinterlassen",
          text: "Die Spüle bleibt sauber zurück – ohne Essensreste im Abfluss."
        },
        {
          icon: "🪝",
          titel: "Küchenhandtücher an die Haken",
          text: "Feuchte Küchenhandtücher müssen trocknen – und zwar an den dafür vorgesehenen Haken. Auf keinen Fall über eine Stuhllehne legen."
        },
        {
          icon: "🧽",
          titel: "Spülmittel holst du im Keller",
          text: "Spülmittel gibt es im Keller. Es ist konzentriert und muss vor dem Benutzen mit Wasser verdünnt werden."
        },
        {
          icon: "🛒",
          titel: "Das sollte immer da sein",
          text: "Küchenpapier, Bio-Müllbeutel, Schwämme, Lappen und Backpapier sollten immer verfügbar sein. Wenn etwas davon zur Neige geht, sag rechtzeitig in der Gruppe Bescheid."
        }
      ]
    },

    {
      titel: "Bad und Toilette",
      regeln: [
        {
          icon: "🚻",
          titel: "Links Mädchen, rechts Jungs",
          text: "Die linke Toilette ist für die Mädchen, die rechte für die Jungs. Wer sich in dieser Einteilung nicht wiederfindet, nimmt die, die passt."
        },
        {
          icon: "🚦",
          titel: "Die goldene Regel",
          text: "Ist eine der beiden Toiletten schon besetzt, darf die andere nicht benutzt werden – auch wenn sie frei ist. Dann heißt es warten, oder du gehst auf das Klo im Gang."
        },
        {
          icon: "🚽",
          titel: "Nicht im Stehen pinkeln",
          text: "Gepinkelt wird im Sitzen. Immer."
        }
      ]
    },

    {
      titel: "Mülldienst",
      einleitung: "Der wichtigste der drei Dienste – wenn der ausfällt, merkt es das ganze Stockwerk.",
      regeln: [
        {
          icon: "♻️",
          titel: "Jede Woche frühzeitig entleeren",
          text: "Plastikmüll, Papiermüll, Biomüll und Glasmüll. Aluminiummüll kommt in dieselbe Tonne wie der Plastikmüll."
        },
        {
          icon: "📅",
          titel: "Die Montagsregel",
          text: "Am Montag sind alle Behälter erneut zu entleeren – egal, wie sehr sie gefüllt sind – und leer an den darauffolgenden Mülldienst zu übergeben. Sonntag ist übrigens Ruhetag: Da bleibt der Müll stehen, sonst reagiert so mancher Nachbar allergisch."
        },
        {
          icon: "🚫",
          titel: "Die große Restmülltonne ist nicht dein Job",
          text: "Die große Restmülltonne leeren die Putzkräfte. Das gehört ausdrücklich nicht zum Mülldienst."
        },
        {
          icon: "📍",
          titel: "Wo die Tonnen stehen",
          text: "Glas sowie Plastik & Alu stehen nordöstlich der Kreuzung. Biomüll, Papiermüll und Restmüll findest du südwestlich davon. Das Wertstoffmobil kommt donnerstags morgens an die Hiltenspergerstraße.",
          bild: "karte-loesung.png",
          bildAlt: "Karte mit den Standorten der Mülltonnen rund um die Kreuzung Clemensstraße / Hiltenspergerstraße"
        }
      ]
    },

    {
      titel: "Küchendienst",
      regeln: [
        {
          icon: "👀",
          titel: "Überwachung der Küchenordnung",
          text: "Der Küchendienst achtet darauf, dass alle die Küchenregeln einhalten. Bei Verstößen weist er die Person darauf hin oder macht in der Gruppe darauf aufmerksam. Es ist NICHT seine Aufgabe, den Mitbewohnern hinterherzuräumen – er behält den Überblick und spült nur im Notfall selbst."
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
          text: "Der Wasserkocher wird regelmäßig mit einem geeigneten Reinigungsmittel entkalkt. Geht das Mittel zur Neige, sag rechtzeitig Bescheid."
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
          icon: "🙋",
          titel: "Geschirrhandtücher – dafür suchen wir noch jemanden",
          text: "Das Wechseln und Waschen der Geschirrhandtücher gehört nicht mehr zum Küchendienst. Wir suchen dafür eine Person, die sich dauerhaft darum kümmert und im Gegenzug von allen drei Diensten komplett befreit ist. Interesse? Meld dich in der Gruppe."
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
          text: "Der Boden wird einmal die Woche gestaubsaugt."
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
          icon: "🧳",
          titel: "Staubsaugerbeutel kontrollieren",
          text: "Prüf, ob der Beutel im Staubsauger seine maximale Füllhöhe erreicht hat, und wechsle ihn rechtzeitig. Es muss immer ein frischer Beutel auf Vorrat da sein – neue holst du kostenlos bei der Verwaltung, gekauft werden müssen sie nicht."
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
      erklaerung: "Jeder übernimmt pro Periode alle drei Dienste je einmal. Die können auch alle gleichzeitig in derselben Woche absolviert werden. Das gilt für alle auf dem Stockwerk, auch für Feriengäste."
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
      erklaerung: "Zu Beginn jeder Periode trägt sich jeder selbst in die Liste ein, die in der Küche hängt. Wann die neue Liste aushängt, kündigen wir nochmal in der Gruppe an."
    },
    {
      frage: "Du hast gekocht und gegessen. Wann spülst du dein Geschirr?",
      optionen: [
        "Sofort – und zwar komplett, nichts bleibt zum Trocknen stehen",
        "Ich stelle es zum Trocknen und räume es später weg",
        "Spätestens am nächsten Morgen",
        "Wenn kein sauberes Geschirr mehr da ist"
      ],
      richtig: [0],
      erklaerung: "Immer direkt spülen und nichts zum Trocknen stehen lassen. Dazu gehört auch: Flächen abwischen und die Spüle ohne Reste im Abfluss hinterlassen."
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
      erklaerung: "Es ist ausdrücklich NICHT Aufgabe des Küchendienstes, den Mitbewohnern hinterherzuräumen. Du behältst den Überblick, sprichst Verstöße an – und spülst nur im Notfall selbst."
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
      erklaerung: "Am Montag sind alle Behälter erneut zu entleeren, egal wie sehr sie gefüllt sind, und leer an den darauffolgenden Mülldienst zu übergeben. Fun Fact: Sonntag ist Ruhetag – so mancher Nachbar reagiert darauf tatsächlich allergisch. ;)"
    },
    {
      frage: "Beim Müll rausbringen: Wohin kommt der Aluminiummüll?",
      optionen: [
        "In dieselbe Tonne wie der Plastikmüll",
        "In den Biomüll",
        "In einen eigenen Behälter im Keller"
      ],
      richtig: [0],
      erklaerung: "Aluminiummüll ist eigentlich die gleiche Tonne wie der Plastikmüll. Wöchentlich entleert werden Plastik-, Papier-, Bio- und Glasmüll – die große Restmülltonne übernehmen die Putzkräfte."
    },
    {
      frage: "Welche dieser Sachen sollten bei uns immer verfügbar sein?",
      optionen: [
        "Küchenpapier",
        "Backpapier",
        "Schwämme",
        "Milch",
        "Kaffee"
      ],
      richtig: [0, 1, 2],
      erklaerung: "Immer verfügbar sein sollten: Küchenpapier, Bio-Müllbeutel, Schwämme, Lappen und Backpapier. Lebensmittel wie Milch oder Kaffee kauft jeder selbst."
    },
    {
      frage: "Auf einer der beiden Toiletten ist gerade jemand. Was machst du?",
      optionen: [
        "Warten oder auf das Klo im Gang gehen",
        "Die andere benutzen, die ist ja frei",
        "Die andere benutzen, solange es die für mein Geschlecht ist",
        "Anklopfen und fragen, ob es noch lange dauert"
      ],
      richtig: [0],
      erklaerung: "Die goldene Regel: Ist eine der beiden Toiletten besetzt, bleibt die andere frei. Dann wartest du – oder gehst auf das Klo im Gang. Ansonsten gilt: links die Mädchen, rechts die Jungs. Und gepinkelt wird im Sitzen."
    },
    {
      frage: "Das Küchenhandtuch ist feucht. Wohin damit?",
      optionen: [
        "Zum Trocknen an die dafür vorgesehenen Haken",
        "Über eine Stuhllehne",
        "Über die Sofalehne im Wohnzimmer",
        "Zusammengelegt auf die Arbeitsfläche"
      ],
      richtig: [0],
      erklaerung: "Küchenhandtücher müssen trocknen – aber ausschließlich an den dafür vorgesehenen Haken. Über eine Stuhllehne gehören sie auf keinen Fall."
    }
  ],

  /* --- Aufgabe auf der Karte --------------------------------
     Im Test wird zufällig EINE dieser Tonnen abgefragt. Man tippt
     die Stelle auf der leeren Karte an.

     x und y sind Anteile der Bildbreite bzw. -höhe (0 bis 1),
     gemessen aus src/Karte_Lösung.png. Oben links = 0/0.

     "toleranz" ist der erlaubte Abstand, gemessen in Bildbreiten.
     0.15 entspricht etwa 15 % der Kartenbreite – auf einem Handy rund
     50 Pixel Radius, also gut mit dem Daumen zu treffen.

     Zur Orientierung die Abstände zwischen den Tonnen. Alles, was
     kleiner ist als die Toleranz, gilt als derselbe Ort:
         Glas / Plastik & Alu    0.053  (stehen ohnehin nebeneinander)
         Papiermüll / Restmüll   0.094
         Biomüll / Papiermüll    0.127
         Biomüll / Restmüll      0.218
         ... zur anderen Straßenecke   ab 0.670
     Mit 0.15 muss man die richtige Straßenecke und ungefähr die
     richtige Stelle treffen; die drei Tonnen unten links sind
     untereinander austauschbar. Kleinerer Wert = strenger:
     mit 0.07 muss man jede Tonne einzeln treffen.
     ---------------------------------------------------------- */
  karte: {
    bild: "karte.png",
    bildAlt: "Leere Karte der Kreuzung Clemensstraße / Hiltenspergerstraße",
    toleranz: 0.15,
    tonnen: [
      {
        name: "Glas",
        x: 0.651, y: 0.166,
        hinweis: "Der Glascontainer steht nordöstlich der Kreuzung, oben rechts – direkt über Plastik & Alu."
      },
      {
        name: "Plastik & Alu",
        x: 0.651, y: 0.227,
        hinweis: "Plastik & Alu stehen nordöstlich der Kreuzung, oben rechts – direkt unter dem Glascontainer. Aluminium kommt in dieselbe Tonne wie Plastik."
      },
      {
        name: "Biomüll",
        x: 0.022, y: 0.781,
        hinweis: "Die braune Biotonne steht ganz im Westen, links am Bildrand – ein Stück abseits von Papier- und Restmüll."
      },
      {
        name: "Papiermüll",
        x: 0.141, y: 0.832,
        hinweis: "Die blaue Papiertonne steht südwestlich der Kreuzung, unten links – zwischen Biomüll und Restmüll."
      },
      {
        name: "Restmüll",
        x: 0.235, y: 0.832,
        hinweis: "Die schwarze Restmülltonne steht südwestlich der Kreuzung, unten links – direkt rechts neben der blauen Papiertonne."
      }
    ]
  },

  /* --- Text auf der Abschluss-Seite -------------------------- */
  abschlussText: "Du kennst jetzt die Stockwerksregeln. Willkommen auf dem Flur!"
};
