# Halle41-Dashboard

Kurzes, lokales Dashboard-Projekt für Halle 41.

Schnellstart

1. Öffne `index.html` im Browser (Doppelklick oder Live-Server).
2. `styles.css` und `app.js` sind zusätzlich vorhanden für Erweiterungen.

Schnell starten (empfohlen)

- Per Batch (Windows): Doppelklick auf `start-server.bat` im Projektordner — öffnet ein Terminal mit einem lokalen HTTP-Server auf Port `8000` und startet den Browser.
- Per Terminal:

```bash
cd "c:\Users\LaurinHofmann\Desktop\Halle41-Dashboard"
python -m http.server 8000
```

- Per VS Code: Öffne die Kommando-Palette → `Tasks: Run Task` → `Start Dashboard Server`.

Hinweis: Die Login-Logik verwendet Web Crypto; das Laden über `file://` kann in manchen Browsern Einschränkungen haben. Verwende daher vorzugsweise einen lokalen Server (Live Server oder Python HTTP-Server).

Nächste Schritte

- Externalisieren der Inline-Styles aus `index.html` in `styles.css`.
- Widgets (Charts, Tabellen, Filter) in `app.js` modular implementieren.
- Optional: Setup mit `npm` und Bundler, falls komplexe Abhängigkeiten benötigt werden.
