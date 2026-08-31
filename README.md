# Küchenregeln-Onboarding – Flur 1A

Kleine Webseite: neue Mitbewohner scannen den QR-Code, lesen die Küchenregeln,
machen einen kurzen Test und bekommen erst danach den Link zur WhatsApp-Gruppe.

## Dateien

| Datei | Wofür |
|---|---|
| `config.js` | **Hier änderst du alles**: Regeln, Testfragen, WhatsApp-Link |
| `index.html` | Die Seite selbst |
| `styles.css` | Aussehen (hell/dunkel automatisch) |
| `app.js` | Ablauf-Logik |
| `qr.html` | QR-Code + fertigen Aushang zum Ausdrucken erzeugen |

## Vorher testen

`index.html` doppelklicken – die Seite läuft komplett im Browser, ohne Server.
Zum Zurücksetzen (wenn du den Test schon bestanden hast): Seite im privaten Fenster öffnen.

---

## Schritt 1: WhatsApp-Link eintragen

In WhatsApp: Gruppe → Gruppeninfo → *Über Link einladen* → Link kopieren.

Diesen Link in `config.js` bei `whatsappLink` eintragen.

**Empfehlung:** den Link nicht im Klartext eintragen, sondern kodiert –
sonst kann man ihn im Quelltext der Seite finden, ohne den Test zu machen.
Dazu im Browser `F12` drücken → Reiter *Konsole* → eintippen:

```js
btoa("https://chat.whatsapp.com/DEIN-CODE")
```

Das Ergebnis (ohne Anführungszeichen) in `config.js` einsetzen. Die App erkennt beides automatisch.

> Ehrlich gesagt: Das ist eine Hürde, kein echter Schutz – wer sich auskennt, kommt an den Link.
> Für ein Wohnheim reicht das völlig. Falls doch mal jemand Unbefugtes reinkommt: In WhatsApp
> kannst du den Einladungslink jederzeit zurücksetzen (dann hier den neuen eintragen).

## Schritt 2: Regeln und Fragen eintragen

Alles in `config.js`, direkt darüber steht jeweils erklärt, wie es geht.
Bei den Fragen zählt `richtig: [0]` die Antwortmöglichkeiten ab **0** –
`[0]` ist also die erste Option. Mehrere Zahlen = Mehrfachauswahl.
Die Reihenfolge der Fragen und Antworten wird beim Anzeigen automatisch gemischt.

Mit `bestehensQuote: 1` müssen alle Fragen richtig sein. `0.8` = 80 % reichen.

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

`qr.html` doppelklicken (Internetverbindung nötig, die QR-Bibliothek wird geladen).

1. Die Adresse aus Schritt 3 eintragen
2. Überschrift und Unterzeile anpassen
3. *Aushang drucken / als PDF speichern* → fertiger Zettel für die Küchentür,
   oder *Nur QR-Code als SVG speichern*, wenn du ihn woanders einbauen willst

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
