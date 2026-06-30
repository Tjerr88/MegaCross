# CrossFit Generator PWA

Een installeerbare, offline bruikbare CrossFit-generator voor Monostructural, Gymnastic en Weightlifting cycli.

## Publiceren via GitHub Pages

1. Maak een nieuwe GitHub repository.
2. Upload alle bestanden uit deze map naar de root van die repository.
3. Ga in GitHub naar `Settings` > `Pages`.
4. Kies `Deploy from a branch`.
5. Selecteer `main` en `/root`.
6. Open de GitHub Pages URL zodra de deployment klaar is.

De app is een statische PWA. Er is geen npm-install, build command of backend nodig.

## Bestanden

- `index.html`: app shell
- `styles.css`: interface styling
- `app.js`: generatorlogica, workouts, Girls en Heroes
- `manifest.webmanifest`: PWA metadata
- `sw.js`: offline cache
- `icon.svg`, `icon-192.png`, `icon-512.png`, `maskable.svg`, `maskable-512.png`: app iconen

## Lokaal testen

Start een simpele lokale server in deze map:

```bash
python -m http.server 8787
```

Open daarna:

```text
http://127.0.0.1:8787/index.html
```
