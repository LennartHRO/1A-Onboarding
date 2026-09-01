# Onboarding

Statische Web-App für ein Onboarding: Neue Mitglieder lesen ein Regelwerk, beantworten
anschließend eine kurze Wissensabfrage und erhalten erst danach den Zugangslink.

Kein Backend, kein Build-Schritt, keine Abhängigkeiten. Die Anwendung besteht aus einer
Handvoll statischer Dateien und lässt sich auf jedem beliebigen Webspace oder kostenlos
über GitHub Pages ausliefern.

## Ablauf

1. **Startseite** mit einer Übersicht der drei Schritte
2. **Inhalte** – nach Themen gegliedert; der Weiter-Button gibt erst frei, wenn die Liste
   vollständig durchgescrollt wurde
3. **Wissensabfrage** – Einfach- und Mehrfachauswahl sowie eine interaktive Kartenaufgabe.
   Eine Antwort muss geprüft werden, bevor es weitergeht; bei Fehlern erscheint eine
   Erläuterung. Beliebig viele Wiederholungen sind möglich.
4. **Freigabe** des Zugangslinks ab einer konfigurierbaren Bestehensquote

## Merkmale

- Sämtliche Inhalte liegen in `config.js` und lassen sich ohne Eingriff in den Code pflegen
- Fragen und Antwortoptionen werden bei jedem Durchlauf neu gemischt
- Kartenaufgabe: Eine Position wird auf einer Karte angetippt und gegen eine konfigurierbare
  Toleranz ausgewertet; abgefragt wird pro Durchlauf ein zufällig gewähltes Ziel
- Bestandene Abfragen werden lokal gespeichert (`localStorage`)
- Optionale Hintergrundmusik, zur Laufzeit per Web Audio erzeugt – zwei Stücke, abschaltbar,
  die Einstellung wird gemerkt
- Für Mobilgeräte ausgelegt, automatische Hell-/Dunkeldarstellung
- Druckfertige A4-Vorlage mit QR-Code liegt bei

## Projektstruktur

| Datei | Inhalt |
|---|---|
| `index.html` | Seitengerüst aller Ansichten |
| `config.js` | **Alle Inhalte und Einstellungen** |
| `app.js` | Ablaufsteuerung, Auswertung, Kartenaufgabe |
| `musik.js` | Hintergrundmusik (Web Audio) |
| `styles.css` | Gestaltung, hell und dunkel |
| `qr.html` | Werkzeug: QR-Code und Aushang neu erzeugen |
| `aushang.pdf` | Druckfertige A4-Vorlage mit QR-Code |
| `qr-code.png` | QR-Code einzeln, 1400 × 1400 px |
| `karte.png`, `karte-loesung.png` | Bildmaterial der Kartenaufgabe |
| `src/` | Quelldokumente der Inhalte |

## Konfiguration

Alles Folgende steht in `config.js`, jeweils mit erläuterndem Kommentar:

| Schlüssel | Bedeutung |
|---|---|
| `seitentitel`, `flur`, `untertitel` | Beschriftung der Kopfzeile |
| `zugangsLink` | Ziel, das nach bestandener Abfrage freigegeben wird |
| `bestehensQuote` | Anteil richtiger Antworten zum Bestehen (`1` = alle, `0.8` = 80 %) |
| `musik` | Ein/Aus, Lautstärke, optional eigene Audiodateien |
| `abschnitte` | Die Inhalte, gegliedert in Kapitel mit Einträgen aus Symbol, Titel, Text und optionalem Bild |
| `fragen` | Die Wissensabfrage. `richtig` zählt die Optionen ab 0; mehrere Werte ergeben eine Mehrfachauswahl |
| `karte` | Bild, Trefferpunkte und Toleranz der Kartenaufgabe |
| `abschlussHinweis` | Optionaler Kasten auf der Abschlussseite |

Der Zugangslink wird sowohl im Klartext (`https://…`) als auch Base64-kodiert akzeptiert.
Kodieren lässt er sich in der Browser-Konsole mit `btoa("https://…")`.

## Lokal ausprobieren

`index.html` im Browser öffnen – es wird keine Toolchain und kein lokaler Server benötigt.
Um einen bereits bestandenen Durchlauf zurückzusetzen, genügt ein privates Fenster.

## Veröffentlichen

Die Anwendung ist rein statisch und benötigt keinen Build-Schritt.

- **GitHub Pages** – *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
  Jeder Push aktualisiert die Seite anschließend automatisch.
- **Netlify oder Cloudflare Pages** – Repository verbinden, Build-Befehl leer lassen,
  Publish-Verzeichnis `.`

## QR-Code und Aushang

`aushang.pdf` und `qr-code.png` sind fertig erzeugt. Ändert sich die Adresse, lassen sich
beide über `qr.html` neu erstellen: Adresse eintragen, Vorschau prüfen, als PDF speichern
oder den Code einzeln als SVG sichern.

## Hinweis zum Zugangslink

Die Base64-Kodierung erschwert das Auffinden im Quelltext, ist aber **kein Zugriffsschutz**.
Eine rein statische Seite kann Inhalte technisch nicht zurückhalten – wer den Link ohne
Abfrage möchte, kommt an ihn heran. Für echten Schutz wäre eine serverseitige Prüfung nötig.
Für den vorgesehenen Zweck ist die Hürde bewusst als solche gewählt.
