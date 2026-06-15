@echo off
:: Startet einen lokalen HTTP-Server im Projektordner und öffnet den Browser
pushd "%~dp0"
:: Öffnet einen neuen Terminal, in dem der Server läuft (bleibt sichtbar)
start "Halle41 Server" cmd /k "python -m http.server 8000"
timeout /t 1 >nul
:: Öffnet die Standardseite im Browser
start "" "http://localhost:8000"
popd
