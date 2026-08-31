# Küchenregeln-Onboarding – Flur 1A

Kleine Webseite: neue Mitbewohner scannen den QR-Code, lesen die Küchenregeln,
machen einen kurzen Test und bekommen erst danach den Link zur WhatsApp-Gruppe.

## Dateien

| Datei | Wofür |
|---|---|
| `config.js` | **Hier änderst du alles**: Regeln, Testfragen, WhatsApp-Link |
| `src/` | Quellen: Original-PDF und die beiden Karten-Originale |
| `index.html` | Die Seite selbst |
| `styles.css` | Aussehen (hell/dunkel automatisch) |
| `app.js` | Ablauf-Logik |
| `musik.js` | 8-Bit-Hintergrundmusik (wird im Browser erzeugt) |
| `qr.html` | QR-Code + Aushang neu erzeugen, falls sich die Adresse ändert |
| `aushang.pdf` | **Fertiger A4-Aushang zum Ausdrucken** (QR-Code + Anleitung) |
| `qr-code.png` | Der QR-Code einzeln, 1400 x 1400 px |
| `karte.png` | Leere Karte für die Aufgabe im Test |
| `karte-loesung.png` | Karte mit den Tonnen-Standorten, wird in den Regeln gezeigt |

## Vorher testen

`index.html` doppelklicken – die Seite läuft komplett im Browser, ohne Server.
Zum Zurücksetzen (wenn du den Test schon bestanden hast): Seite im privaten Fenster öffnen.

---

## Schritt 1: WhatsApp-Link — erledigt

Der Gruppenlink ist eingetragen, und zwar Base64-kodiert, damit er nicht im Klartext
im öffentlichen Repo steht. Neuen Link setzen: Browser `F12` → *Konsole* → eintippen

```js
btoa("https://chat.whatsapp.com/DEIN-NEUER-CODE")
```

und das Ergebnis in `config.js` bei `whatsappLink` einsetzen. Klartext funktioniert auch.

> Das ist eine Hürde, kein echter Schutz – wer sich auskennt, kommt an den Link.
> Falls doch mal jemand Unbefugtes reinkommt: In WhatsApp kannst du den Einladungslink
> jederzeit zurücksetzen und hier den neuen eintragen.

## Schritt 2: Regeln und Fragen pflegen

Inhalte stehen komplett in `config.js`:

- **`abschnitte`** – die Regeln, gegliedert nach *Grundsätzliches*, *Küchendienst*,
  *Wohnzimmerdienst* und *Mülldienst*. Jeder Abschnitt hat einen `titel`, optional eine
  `einleitung` und beliebig viele `regeln` aus `icon`, `titel` und `text`.
- **`fragen`** – der Test. `richtig: [0]` zählt die Antwortmöglichkeiten ab **0**,
  `[0]` ist also die erste Option. Mehrere Zahlen (`[0, 1]`) ergeben automatisch eine
  Mehrfachauswahl. `erklaerung` erscheint nur, wenn falsch geantwortet wurde.
- Reihenfolge von Fragen und Antworten wird beim Anzeigen automatisch gemischt.
- `bestehensQuote: 1` heißt: alle Fragen müssen richtig sein. `0.8` = 80 % reichen.

Aktuell: **30 Regeln, 7 Fragen + 1 Kartenaufgabe**, Bestehensgrenze **80 %**
(bei 8 Aufgaben heißt das: ein Fehler ist erlaubt, zwei nicht), Inhalt aus `src/Küchendienst 1A.pdf`.

### Die Kartenaufgabe

Im Test wird **zufällig genau eine** Mülltonne abgefragt: Man tippt die Stelle auf der
leeren Karte an, danach erscheinen der eigene Tipp und die richtige Stelle nebeneinander.
Gelernt wird das vorher im Abschnitt *Mülldienst*, wo die Karte mit allen Standorten steht.

Konfiguriert wird das unter `karte` in `config.js`:

- `tonnen` – Name, Position und Hinweistext je Tonne. `x` und `y` sind Anteile der
  Bildbreite bzw. -höhe (0 bis 1), oben links ist 0/0. Die aktuellen Werte sind aus
  `src/Karte_Lösung.png` ausgemessen.
- `toleranz` – wie grob der Tipp stimmen muss, gemessen in Bildbreiten. Steht auf `0.07`.
  Das ist bewusst kleiner als der Abstand zwischen Papier- und Restmülltonne (0.094),
  damit man wirklich die richtige Tonne treffen muss und nicht nur die richtige Ecke.
  Glas und Plastik & Alu (Abstand 0.053) bleiben untereinander austauschbar – die stehen
  ohnehin direkt nebeneinander.

Eine Tonne rausnehmen: den Eintrag aus `tonnen` löschen. Neue Position bestimmen: im Test
irgendwo hintippen, prüfen – die richtige Stelle wird danach angezeigt.

> Die Biotonne sitzt sehr nah am linken Kartenrand (`x: 0.022`). Trefferbereich ist dort
> nur die rechte Hälfte des Kreises – reicht, ist aber knapper als bei den anderen.
> Falls das stört: Karte mit etwas mehr Rand links neu erstellen und die x-Werte anpassen.

> Zeitabhängige Stelle: Im Abschnitt *Grundsätzliches* steht bei „Selbst in die Liste
> eintragen", dass die aktuelle Liste voll ist und die neue im Oktober aushängt.
> Das gehört angepasst, sobald die neue Liste hängt.

## Schritt 3: Ins Netz stellen (kostenlos)

> Diese `README.md` wird beim Hochladen mitgenommen und wäre unter
> `deine-adresse/README.md` lesbar. Unkritisch – wenn es dich stört, lösche sie
> vor dem Hochladen oder verschiebe sie aus dem Ordner.

### Variante A – Netlify Drop (am schnellsten, ~2 Minuten)

1. [app.netlify.com/drop](https://app.netlify.com/drop) öffnen
2. Den kompletten Ordner `1A Test` ins Browserfenster ziehen
3. Fertig – du bekommst sofort eine Adresse wie `https://zufallsname-123.netlify.app`
4. Kostenlos anmelden (GitHub- oder E-Mail-Login), damit die Seite dauerhaft bleibt
5. Unter *Site configuration → Change site name* eine schönere Adresse setzen,
   z. B. `kuechenregeln-1a.netlify.app`

Kosten: 0 €. Das Gratis-Kontingent (100 GB Traffic im Monat) reicht für ein Wohnheim
etwa millionenfach. Änderungen später: Ordner erneut auf *Deploys* ziehen.

### Variante B – GitHub Pages (praktischer, wenn du öfter Regeln änderst)

1. Auf [github.com](https://github.com) anmelden, neues **öffentliches** Repository anlegen
2. Die Dateien hochladen (*Add file → Upload files*)
3. *Settings → Pages → Source: Deploy from a branch → main / (root)* → Save
4. Nach ~1 Minute läuft die Seite unter `https://DEINNAME.github.io/REPONAME/`

Änderungen gehen später direkt im Browser: Datei anklicken → Stift-Symbol → speichern.
Achtung: Das Repository ist öffentlich, der Quelltext also für alle einsehbar
(siehe Hinweis zum WhatsApp-Link oben).

### Variante C – Cloudflare Pages

[pages.cloudflare.com](https://pages.cloudflare.com) → *Create → Upload assets* → Ordner hochladen.
Ebenfalls kostenlos und ohne Traffic-Limit.

**Empfehlung:** Variante A zum Starten. Wenn ihr die Regeln oft anpasst, Variante B.

## Schritt 4: QR-Code und Aushang

Beides liegt fertig im Ordner und zeigt auf `https://lennarthro.github.io/1A-Onboarding/`:

- **`aushang.pdf`** – A4, randlos gesetzt, einfach ausdrucken und an die Küchentür hängen.
  Enthält den QR-Code, die drei Schritte und die Adresse zum Abtippen.
- **`qr-code.png`** – nur der Code, 1400 x 1400 Pixel. Für Aushänge, die du selbst gestaltest,
  oder zum Verschicken.

Der Code wurde nach dem Erzeugen maschinell zurückgelesen und enthält exakt die Live-Adresse.

**Wenn sich die Adresse mal ändert** (anderer Hoster, eigene Domain): `qr.html` doppelklicken,
neue Adresse eintragen, dann *Aushang drucken / als PDF speichern* oder den Code als SVG sichern.
Danach `aushang.pdf` und `qr-code.png` im Ordner ersetzen.

Vor dem Aufhängen einmal selbst mit dem Handy scannen und den Ablauf durchklicken.

---

## Wichtig zu wissen

- **Alles läuft im Browser des Besuchers**, es gibt keinen Server und keine Datenbank.
  Du siehst also nicht, wer den Test gemacht hat. Wenn du das brauchst, sag Bescheid –
  das ginge z. B. über ein kostenloses Google-Formular als Zwischenschritt.
- **Bestanden wird lokal gespeichert.** Wer den Test einmal geschafft hat, landet beim
  nächsten Öffnen direkt auf der Seite mit dem Gruppenlink.
- **Der „Weiter zum Test"-Button** wird erst aktiv, wenn man bis ans Ende der Regeln
  gescrollt hat (spätestens nach 45 Sekunden).
- **Überspringen geht nicht:** Nach dem Auswählen muss erst geprüft werden, den
  Weiter-Button gibt es vorher gar nicht.
- **Musik:** Die 8-Bit-Melodie ist selbst erzeugt (Web Audio), keine Audiodatei und kein
  fremder Soundtrack. Sie startet erst beim Klick auf „Los geht's" – vorher lassen Browser
  ohnehin keinen Ton zu – und lässt sich oben rechts abschalten; das wird gemerkt.
  Eigene Musik: Datei in den Ordner legen und in `config.js` unter `musik.datei`
  eintragen (dann bitte auf die Rechte an der Datei achten). `musik.an: false` schaltet
  alles ab.
