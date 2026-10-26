# Simulateur freelance, version installable

Application web autonome : un seul fichier `index.html`, aucune base de données, aucun serveur, aucune requête vers d'autres sites.
Les données restent dans le navigateur de chaque utilisateur.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | l'application |
| `manifest.webmanifest` | nom, couleurs et icônes de l'application installée |
| `sw.js` | fonctionnement hors ligne |
| `icons/` | icônes (écran d'accueil, onglet, version adaptative) |
| `_headers` | réglages de cache pour Netlify et Cloudflare Pages (ignoré ailleurs) |
| `.nojekyll` | évite un traitement inutile sur GitHub Pages |

## Mettre en ligne gratuitement

Il faut une adresse en **https** (le mode hors ligne et l'installation l'exigent). Au choix, avec le dossier entier :

- **Netlify** : glisser-déposer le dossier sur la page « Netlify Drop », ou créer un site depuis un dépôt.
- **Cloudflare Pages** : créer un projet Pages et envoyer le dossier (« Direct Upload »).
- **GitHub Pages** : créer un dépôt, y envoyer les fichiers, puis Settings > Pages > Deploy from a branch (main, dossier racine).

Les conditions des offres gratuites changent : vérifie-les avant de publier.
L'application ne contient aucune donnée personnelle, seulement un scénario d'exemple.

## Installer sur iPhone

1. Ouvre l'adresse dans **Safari** (si tu as reçu le lien dans Messages ou Mail, copie-le dans Safari).
2. Touche **Partager**, puis **Sur l'écran d'accueil**, puis **Ajouter**.
3. Lance l'application depuis son icône : elle s'ouvre en plein écran et marche sans connexion après la première ouverture.

iOS 16.4 ou plus récent est recommandé.

## Tes données

- Elles sont stockées **sur l'appareil**, dans l'application installée. Supprimer l'icône les supprime.
- PC et iPhone ne se synchronisent pas. Pour passer de l'un à l'autre : Réglages > **Exporter toutes les données**, envoie le fichier (AirDrop, iCloud Drive, Mail), puis Réglages > **Importer un fichier** de l'autre côté.
- Exporte régulièrement : Réglages affiche la date de ta dernière sauvegarde.
- Sur iPhone, l'export ouvre la feuille de partage : choisis « Enregistrer dans Fichiers ».

## Mettre à jour l'application

1. Remplace `index.html` (et les autres fichiers modifiés) sur ton hébergement.
2. Dans `sw.js`, change `VERSION` (par exemple `"v2"`).
3. Les utilisateurs reçoivent la nouvelle version à l'ouverture suivante, avec une connexion. Parfois il faut ouvrir l'application deux fois.

## Confidentialité

Aucun suivi, aucun cookie, aucune police ni script externe. Une politique de sécurité intégrée à la page interdit toute requête vers un autre domaine.

## À savoir

Les calculs sont des estimations fondées sur les taux 2026, pas un conseil fiscal ni comptable. Les taux sont à mettre à jour chaque année.
