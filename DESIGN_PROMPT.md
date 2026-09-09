# Prompt — appliquer le design system BSocial à l'application

> Copiez tout le bloc ci-dessous et envoyez-le à l'agent IA qui travaille sur
> la plateforme.

---

Applique le design system suivant à toute l'interface de l'application BSocial.
C'est le même système que le site vitrine : garde-le strictement cohérent.

## 1. Fondations

Déclare ces tokens en variables CSS globales et **utilise-les partout** — aucune
couleur, aucun rayon, aucune ombre codés en dur dans les composants.

```css
:root {
  /* Accent */
  --brand-400: #fddb06;   /* jaune principal : CTA, états actifs, accents */
  --brand-500: #fddb06;
  --brand-600: #eabd00;   /* survol / liens sur fond clair */
  --brand-700: #c39d00;

  /* Encre */
  --ink-900: #181818;     /* texte principal, blocs contrastés */
  --ink-800: #202020;
  --ink-700: #303030;
  --ink-600: #444444;
  --ink-400: #6f6f6f;     /* texte secondaire */
  --ink-300: #9b9b9b;
  --ink-200: #c4c4c4;
  --ink-100: #e6e6e6;
  --ink-50:  #f5f5f5;     /* fonds alternés */
  --white:   #ffffff;

  /* Sémantique — thème clair */
  --bg: var(--white);
  --bg-soft: var(--ink-50);
  --surface: var(--white);
  --border: rgba(24, 24, 24, 0.13);
  --border-strong: #181818;
  --text: var(--ink-900);
  --text-muted: var(--ink-400);

  /* Rayons — angles peu arrondis */
  --radius-sm: 6px;    /* boutons, champs */
  --radius: 10px;      /* panneaux, cartes */
  --radius-lg: 16px;   /* grands blocs */
  --radius-full: 999px;/* pastilles, avatars uniquement */

  /* Aucune ombre : la profondeur passe par les filets et le contraste */
  --shadow-sm: none;
  --shadow: none;
  --shadow-lg: none;

  --ring: 0 0 0 3px rgba(253, 219, 6, 0.6);  /* focus visible */

  /* Typographie */
  --font-display: "Plus Jakarta Sans", system-ui, sans-serif; /* titres, chiffres, boutons */
  --font-sans: "DM Sans", system-ui, sans-serif;              /* texte courant */
}

:root[data-theme="dark"] {
  --bg: #101010;
  --bg-soft: #181818;
  --surface: #181818;
  --border: rgba(255, 255, 255, 0.14);
  --border-strong: rgba(255, 255, 255, 0.55);
  --text: #f5f5f7;
  --text-muted: var(--ink-300);
}
```

Polices à charger :
`https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap`

## 2. Règles non négociables

1. **Aucune ombre portée.** La hiérarchie se construit avec des filets 1px
   (`--border`), des aplats et des contrastes — jamais avec du `box-shadow`.
2. **Pas de dégradés** sur les surfaces ni les boutons. Le jaune est un aplat.
3. **Titres** : `--font-display`, graisse **500** (jamais 700+), interlignage
   serré (`line-height: 1.06–1.1`), interlettrage `-0.02em`. Les titres sont
   volontairement grands.
4. **Texte courant** : `--font-sans`, 16 px, `line-height: 1.7`, couleur
   `--text-muted` pour le secondaire.
5. **Angles peu arrondis** (6–16 px). Les formes en pilule sont réservées aux
   pastilles de statut et aux avatars.
6. **Le jaune s'utilise avec parcimonie** : action principale, état actif,
   point d'accent. Jamais en fond de grande zone de lecture.
7. **Toujours du texte encre `#181818` sur le jaune**, jamais du blanc
   (contraste insuffisant).
8. **Alignement à gauche** pour les en-têtes de section et les titres de page ;
   pas de centrage systématique.

## 3. Composants

**Boutons** — rayon 6 px, `--font-display`, graisse 600, 0.9 rem,
padding `15px 30px` :

```css
.btn--primary { background: var(--brand-400); color: var(--ink-900); border: 1px solid transparent; }
.btn--primary:hover { background: var(--ink-900); color: var(--white); }

.btn--ghost { background: transparent; color: var(--text); border: 1px solid var(--text); }
.btn--ghost:hover { background: var(--text); color: var(--bg); }

.btn--dark { background: var(--ink-900); color: var(--white); }
.btn--dark:hover { background: var(--brand-400); color: var(--ink-900); }
```

**Champs de formulaire** — rayon 6 px, bordure 1px `--border`, fond
`--surface`, focus `box-shadow: var(--ring)` (pas de `outline` par défaut).

**Cartes / panneaux** — fond `--surface`, bordure 1px `--border`, rayon 10 px,
**sans ombre**. Au survol : `border-color: var(--text)`.

**Tableaux et listes** — séparateurs par filets 1px `--border` uniquement ;
en-têtes en `--font-display`, 0.78 rem, majuscules, `letter-spacing: 0.08em`,
couleur `--text-muted`. Ligne survolée : fond `--bg-soft`.

**Étiquettes de section** — pastille contournée :
`padding: 7px 17px; border: 1px solid var(--text); border-radius: 999px;`
`font-family: var(--font-display); font-size: 0.7rem; font-weight: 600;`
`letter-spacing: 0.05em; text-transform: uppercase;`

**Navigation latérale** — élément actif : fond `--brand-400` + texte
`--ink-900`, ou barre d'accent jaune 3 px à gauche. Pas d'ombre, pas de
dégradé.

**Chiffres et KPI** — `--font-display`, graisse 500, grande taille,
`letter-spacing: -0.03em`. Les statistiques doivent être imposantes.

**Blocs à fort contraste** — pour mettre en avant un élément (offre
recommandée, encart promotionnel, pied de page) : fond `--ink-900`,
texte blanc, accents `--brand-400`.

## 4. Densité

C'est une application, pas une page marketing : garde la respiration du site
vitrine **mais réduite**. Espacements sur une échelle de 4 px
(4/8/12/16/24/32/48). Les titres restent grands, les marges internes non.

## 5. Accessibilité

- `:focus-visible` sur tous les éléments interactifs avec `var(--ring)`.
- Respecter `prefers-reduced-motion` (désactiver transitions et animations).
- Le thème sombre suit `data-theme="dark"` sur `<html>` et doit être testé sur
  chaque écran.
- Ne jamais transmettre une information par la seule couleur.

## 6. Livrable

Commence par créer le fichier de tokens et un jeu de primitives (Button, Input,
Card, Badge, Table), puis migre les écrans existants dessus. Ne réécris pas la
logique métier : uniquement la couche de présentation.
