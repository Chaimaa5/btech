# BSocial — site vitrine

Site vitrine de **BSocial**, la couche opérationnelle entre une agence social
media et ses clients : l'agence planifie le contenu, le client le valide depuis
son propre espace, et les livrables comme les résultats se rapportent seuls.

Construit avec **React 19 + TypeScript + Vite**, sans framework CSS externe.

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
npm run lint     # oxlint
```

## Structure

```
src/
  components/       Sections de la page (une par fichier)
    Navbar.tsx        En-tête fixe, menu mobile, bascule de thème
    Hero.tsx          Accroche + maquette de l'écran de validation client
    Problem.tsx       Le problème opérationnel, puis le basculement
    HowItWorks.tsx    Les 3 temps du cycle mensuel
    Features.tsx      Les 9 fonctionnalités réellement en production
    Showcase.tsx      Captures réelles de la plateforme, en onglets
    Access.tsx        Traçabilité : preuve des validations et des livrables
    Faq.tsx           Accordéon accessible
    CallToAction.tsx  Formulaire de demande de démonstration
    Footer.tsx        Pied de page (tous les liens résolvent)
    LegalPage.tsx     Rendu des pages légales
    Icon.tsx          Icônes SVG inline (pas de dépendance)
    useTheme.ts       Thème clair/sombre, persisté en localStorage
    useReveal.ts      Animations d'apparition au scroll
    useRoute.ts       Routage par hash (#/slug) pour les pages légales
  data/content.ts   Contenu éditorial de la page (textes, FAQ…)
  data/legal.ts     Pages légales + coordonnées de l'entreprise
  styles/sections.css  Styles des sections
  index.css         Tokens de design, reset, typographie, boutons
```

## Modifier le contenu

Les textes de la page et les questions de la FAQ sont centralisés dans
[`src/data/content.ts`](src/data/content.ts) ; les pages légales dans
[`src/data/legal.ts`](src/data/legal.ts). Aucun besoin de toucher aux composants
pour les mettre à jour.

## ⚠️ À compléter avant la mise en ligne

1. **Coordonnées légales.** `src/data/legal.ts` contient des marqueurs
   `[À COMPLÉTER — …]` pour la raison sociale, le siège, le RC/ICE, l'hébergeur
   et le responsable des données. Ils s'affichent **surlignés en jaune** sur les
   pages légales tant qu'ils ne sont pas remplis. `CONTACT_EMAIL` doit également
   pointer vers une adresse réellement relevée.
2. **Formulaire de démonstration.** `CallToAction.tsx` affiche une confirmation
   côté navigateur mais **n'envoie rien**. Il faut le brancher à un back-end ou à
   un service de formulaire, sinon les demandes sont perdues.

## SEO & prérendu

Le site est une SPA : servi tel quel, un robot sans JavaScript ne verrait qu'un
`<div>` vide. Le build ajoute donc une passe de **prérendu** qui injecte le HTML
réel dans `dist/index.html` (~29 kB de markup, ~10 000 caractères de texte),
puis React s'hydrate par-dessus au chargement.

```
npm run build
  1. tsc -b                                  vérification des types
  2. vite build                              bundle client
  3. vite build --config vite.ssr.config.ts  bundle Node (dist-ssr/)
  4. node prerender.js                       injecte le HTML + le JSON-LD
```

Également en place :

- **JSON-LD** — `SoftwareApplication`, `Organization` et `FAQPage`, générés
  depuis `src/data/content.ts` par `prerender.js` : le balisage ne peut pas
  décrire autre chose que ce que la page affiche.
- **`robots.txt` et `sitemap.xml`** dans `public/`.
- **Canonical, Open Graph et Twitter Card** complets dans `index.html`.
- **Animations d'apparition** : le contenu est visible par défaut ; le script
  ajoute `js-reveal` sur `<html>` pour activer l'animation. Sans JavaScript, rien
  n'est masqué — du texte en `opacity: 0` serait interprété comme du camouflage.

⚠️ Le domaine `https://bsocial.ma` est codé dans `index.html`, `prerender.js`,
`public/robots.txt` et `public/sitemap.xml`. À corriger si le domaine diffère.

⚠️ Les pages légales utilisent un routage par hash (`#/confidentialite`), que les
moteurs traitent comme la même URL que l'accueil : elles ne sont pas indexées
séparément. Si cela devient nécessaire, il faudra passer à de vraies URL et
générer un fichier HTML par page dans le build.

## Pages légales

Trois pages sont servies par un routage par hash, sans dépendance :
`#/confidentialite`, `#/conditions` et `#/rgpd`. Une route inconnue retombe sur
la page d'accueil. Sur ces pages, l'en-tête masque les liens de section, qui ne
mèneraient nulle part.

## Captures de la plateforme

Les captures affichées dans la section « Aperçu » vivent dans `public/screens/`
et sont référencées depuis `screens` dans `src/data/content.ts`. Elles sont
redimensionnées à 1800 px de large ; une capture riche en photos est enregistrée
en JPEG plutôt qu'en PNG pour le poids.

## Charte graphique

Direction artistique inspirée de [brando.ma](https://www.brando.ma) :
typographie éditoriale surdimensionnée, aplats sans ombres, filets fins,
et le jaune employé comme accent franc.

| Rôle | Valeur |
| --- | --- |
| Jaune (accent, aplats) | `#fddb06` |
| Encre (texte, footer) | `#181818` |

| Usage | Police |
| --- | --- |
| Titres, chiffres, boutons | Plus Jakarta Sans (graisse 500) |
| Texte courant | DM Sans (16 px) |

Principes repris de la référence :

- titres très grands en graisse légère, interlettrage `-0.02em` ;
- sections séparées par des filets, pas de cartes ombrées ;
- libellés de section en pastilles contournées, en majuscules ;
- boutons rectangulaires (rayon 6 px), jaune plein ou contour encre ;
- blocs à fort contraste (offre mise en avant, bloc CTA, footer) ;
- respiration verticale généreuse entre les sections.

Les valeurs sont déclarées comme variables CSS dans `src/index.css`
(`--brand-*`, `--ink-*`, `--font-display`). Changer ces valeurs suffit à
re-décliner tout le site.

## Thème sombre

Le thème suit les préférences système et peut être basculé depuis l'en-tête ;
le choix est conservé dans `localStorage`. Le logo étant noir, il est inversé
en thème sombre via un filtre CSS.

## Accessibilité

- Navigation au clavier et styles `:focus-visible` sur tous les éléments interactifs
- Lien d'évitement vers le contenu principal
- Accordéon FAQ câblé en `aria-expanded` / `aria-controls`
- Respect de `prefers-reduced-motion` (animations désactivées)
- Repères sémantiques (`header`, `main`, `nav`, `footer`) et libellés ARIA

## Remplacer le logo

Le logo est utilisé à deux endroits : `src/assets/logo.png` (en-tête et pied de
page) et `public/logo.png` (favicon). Remplacez les deux fichiers en conservant
un fond transparent et des marges réduites.
