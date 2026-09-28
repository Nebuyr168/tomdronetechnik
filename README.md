# TOMDRONETECHNIK — Site vitrine

Site vitrine de **Thomas LOYER — TOMDRONETECHNIK**, télépilote de drone professionnel.
Réalisé par **HETECH**. Site statique (HTML/CSS/JS), sans dépendance ni build.

## Direction visuelle : « carte de vol »
Le vocabulaire vient des cartes aéronautiques et du plan de vol : papier de carte clair,
encre navy, magenta d'espace aérien comme unique accent, courbes de niveau, route avec
waypoints, cercles de portée, zones hachurées pour les médias à venir.
Une seule famille de caractères, **Archivo** (variable, axe de chasse) : titres élargis,
corps normal, relevés condensés.

Tokens de couleur dans `css/style.css` (`:root`) :
`--paper #F2F3EE` · `--ink #101C33` · `--air #C2187A` · `--water #2F6F94` · `--relief #DCDFD3`.

## Structure
```
index.html              # accueil : hero (carte + route), prestations, pilote, réalisations, zone, contact
css/style.css           # feuille partagée (tokens, composants, responsive, reduced-motion)
js/main.js              # menu mobile, année, formulaire (mailto)
services/               # une page par prestation (fiche de mission + galerie)
  ├─ evenementiel-sportif.html   ├─ montage-4k.html
  ├─ immobilier.html             ├─ suivi-chantier.html
  ├─ btp.html                    ├─ photos-360.html
  └─ particuliers.html           └─ livraison-rush.html
tools/serve.ps1         # serveur statique local (PowerShell, sans Python ni Node)
assets/images/          # à créer et remplir avec les vraies photos/vidéos
```

## Lancer en local
```powershell
powershell -ExecutionPolicy Bypass -File tools\serve.ps1
```
Puis ouvrir http://localhost:8770 (port modifiable : `-Port 8080`).

## À compléter (Hugo / Thomas)
Les emplacements sont repérés dans le HTML par des commentaires `<!-- À MODIFIER : … -->`,
`<!-- À CONFIRMER : … -->` et `<!-- À PRÉCISER : … -->`.
- **Photos et vidéos** : remplacer les zones hachurées « à venir » (hero, portrait, vidéos, galeries).
- **E-mail** : `tomdronetechnik@facebook.fr` est un placeholder (domaine invalide). À remplacer dans
  `index.html` (contact, footer, attribut `data-email` du formulaire) et dans les pages `services/`.
- **YouTube** : vérifier l'URL `https://www.youtube.com/@tomdronetechnik`.
- **Fiches de mission** (pages `services/`) : publics, livrables et délais indicatifs à valider avec Thomas.
- **Zone d'intervention**, **conformité et assurance** : textes marqués « à préciser ».

## Déploiement
Chemins relatifs, déployable tel quel (GitHub Pages, racine ou sous-dossier).
En ligne : https://nebuyr168.github.io/tomdronetechnik/ (dépôt https://github.com/Nebuyr168/tomdronetechnik, branche `master`, Pages à la racine).
Ajouter `<link rel="canonical">` une fois le domaine connu.

*Coordonnées : Thomas LOYER · 06 03 70 64 32 · YouTube @tomdronetechnik*
