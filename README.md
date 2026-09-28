# TOMDRONETECHNIK — Site vitrine

Site vitrine de **Thomas LOYER — TOMDRONETECHNIK**, télépilote de drone professionnel.
Réalisé par **HETECH**. Site statique (HTML/CSS/JS), thème sombre chaleureux (nuit + orange).

## Structure
```
index.html              # accueil : hero, à propos, 8 prestations, atouts, réalisations, zone, contact
css/style.css           # thème partagé (accueil + pages prestations)
js/main.js              # nav mobile, apparition au scroll, année, formulaire (mailto)
services/               # une page par prestation (contenu de départ + placeholders)
  ├─ evenementiel-sportif.html   ├─ montage-4k.html
  ├─ immobilier.html             ├─ suivi-chantier.html
  ├─ btp.html                    ├─ photos-360.html
  └─ particuliers.html           └─ livraison-rush.html
assets/images/          # à remplir avec les vraies photos/vidéos
```

## Lancer en local
Les liens relatifs exigent un serveur (pas d'ouverture en `file://`) :
```bash
cd D:/TomDroneTechnik && python -m http.server 8770
```
Puis ouvrir http://localhost:8770

## À compléter (Hugo / Thomas)
- **Photos & vidéos** : remplacer les blocs marqués **« À MODIFIER »** (hero, portrait, galeries, vignettes).
- **E-mail** : `tomdronetechnik@facebook.fr` est un **placeholder** (domaine invalide) — mettre la vraie adresse
  dans `index.html` (section contact + footer + attribut `data-email` du formulaire) et dans les pages `services/`.
- **YouTube** : vérifier l'URL `https://www.youtube.com/@tomdronetechnik`.
- **Zone d'intervention**, **conformité/assurance** : préciser les textes marqués « à préciser ».
- **Textes prestations** : chaque page `services/` a un contenu de départ à affiner.

## Déploiement
Chemins relatifs → déployable tel quel (GitHub Pages, racine ou sous-dossier).

*Coordonnées : Thomas LOYER · 06 03 70 64 32 · YouTube @tomdronetechnik*
