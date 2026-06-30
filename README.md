# CrossFit Generator PWA

Een installeerbare, offline bruikbare CrossFit-generator voor Monostructural, Gymnastic en Weightlifting cycli.

De app toont steeds 1 sessie tegelijk. Na het afronden klik je op `Finish` om de volgende sessie in de cyclus klaar te zetten. `Generate new cycle` verschijnt pas nadat de Hero is afgevinkt.

## Oude GitHub Pages cache oplossen

Deze PWA gebruikt een service worker. Als GitHub Pages na een upload nog een oude versie toont, open de app eenmalig met een cache-bust query:

```text
https://jouw-gebruikersnaam.github.io/jouw-repo/?v=9
```

Als dat niet genoeg is: open DevTools > Application > Service Workers > Unregister, en daarna Application > Storage > Clear site data. Herlaad daarna de pagina.

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

## Generatorlogica

- Shuffle bags per bewegingstype en intensiteit.
- Shuffle bag voor de willekeurige training-knop.
- Generated workouts krijgen een structuur op basis van het aantal bewegingen: Singlet, Doublet of Triplet.
- Chipper wordt niet gebruikt als ronde-template; dat is gereserveerd voor een eenmalige lijst oefeningen.
- Ranges worden als vaste aantallen getoond; `- Too hard` en `+ Too easy` schalen binnen de oorspronkelijke range.
- Geen exacte oefening direct twee sessies achter elkaar.
- Geen dubbele grip-dominante beweging binnen dezelfde gegenereerde sessie.
- Geen heavy hinge direct na hinge-dominante sessies.
- Geen inverted pressing direct na inverted pressing/HSPU-dominante sessies.
- Girls en Heroes worden niet kort achter elkaar herhaald.

## Lokaal testen

Start een simpele lokale server in deze map:

```bash
python -m http.server 8787
```

Open daarna:

```text
http://127.0.0.1:8787/index.html
```
