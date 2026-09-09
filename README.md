# BSocial — site vitrine

Site vitrine de **BSocial**, plateforme de gestion des réseaux sociaux.
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
    Hero.tsx          Accroche + maquette animée du tableau de bord
    Features.tsx      Grille des 6 fonctionnalités
    HowItWorks.tsx    Les 3 étapes
    Testimonials.tsx  Témoignages clients
    Pricing.tsx       3 formules + bascule mensuel/annuel
    Faq.tsx           Accordéon accessible
    CallToAction.tsx  Bloc de conversion final
    Footer.tsx        Pied de page
    Icon.tsx          Icônes SVG inline (pas de dépendance)
    useTheme.ts       Thème clair/sombre, persisté en localStorage
    useReveal.ts      Animations d'apparition au scroll
  data/content.ts   Tout le contenu éditorial (textes, tarifs, FAQ…)
  styles/sections.css  Styles des sections
  index.css         Tokens de design, reset, typographie, boutons
```

## Modifier le contenu

Les textes, tarifs, témoignages et questions de la FAQ sont centralisés dans
[`src/data/content.ts`](src/data/content.ts) — aucun besoin de toucher aux
composants pour les mettre à jour.

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
