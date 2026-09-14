export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

/* Ordered by what actually differentiates BSocial: the client-facing
   approval loop first, admin/reporting after. */
export const features: Feature[] = [
  {
    id: "validation",
    title: "Validation client",
    description:
      "Le client ouvre sa propre session, voit les publications préparées et approuve ou refuse. Un refus exige un commentaire écrit, transmis à l'agence par e-mail et rattaché au post. Plus d'accord perdu dans une conversation WhatsApp.",
    icon: "check-circle",
  },
  {
    id: "calendar",
    title: "Calendrier éditorial",
    description:
      "Toutes les publications programmées, tous clients et tous canaux confondus — Instagram, Facebook, TikTok, YouTube, LinkedIn. Posts, reels et stories, avec le lien publié pour chaque canal.",
    icon: "calendar",
  },
  {
    id: "shooting",
    title: "Calendrier de tournage",
    description:
      "Les séances de production avec lieu, durée, participants et statut. Invitation, confirmation, report, retard et annulation déclenchent automatiquement un e-mail aux personnes concernées.",
    icon: "video",
  },
  {
    id: "prestations",
    title: "Suivi des prestations",
    description:
      "Par client et par mois : posts et reels prévus contre livrés, tournages réalisés, et ce qu'il reste à produire. La réponse chiffrée à « qu'avons-nous livré ce mois-ci ? ».",
    icon: "clipboard",
  },
  {
    id: "revenue",
    title: "Suivi du chiffre d'affaires",
    description:
      "Objectif contre réalisé par client, au mois et au trimestre, avec l'écart, le pourcentage atteint et un statut automatique : dépassement, dans les clous, en retard ou critique.",
    icon: "trending",
  },
  {
    id: "insights",
    title: "Statistiques Meta en direct",
    description:
      "Vos vrais comptes Instagram et Facebook via la Graph API : abonnés, portée, vues, visites de profil, clics sortants, engagement, meilleures publications et démographie. Rien n'est saisi à la main.",
    icon: "chart",
  },
  {
    id: "reports",
    title: "Rapports PDF en un clic",
    description:
      "Un rapport mensuel à vos couleurs, par client, qui réunit le contenu livré, les performances et le chiffre d'affaires. La journée que vous passiez à l'assembler à la main.",
    icon: "document",
  },
  {
    id: "roles",
    title: "Accès cloisonnés",
    description:
      "Chaque personne accède à ce qui la concerne : un annonceur à son seul compte, un chef de projet à ses clients, un producteur aux tournages sans voir la facturation. Vous ouvrez un espace client sans jamais exposer les autres comptes.",
    icon: "users",
  },
  {
    id: "audit",
    title: "Preuve horodatée",
    description:
      "Qui a approuvé, quand, sur quelle version. Le jour où un client conteste un visuel publié, la réponse tient en une capture d'écran au lieu d'une semaine de recherche dans les conversations.",
    icon: "shield",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "L'agence prépare",
    description:
      "Vous créez les publications du mois dans le calendrier éditorial, vous planifiez les tournages, vous fixez l'objectif de chiffre d'affaires par client. Le contenu passe en préparation, puis en relecture.",
  },
  {
    number: "02",
    title: "Le client valide",
    description:
      "Il se connecte à son espace, parcourt ce qui l'attend et tranche : approuvé, ou refusé avec un commentaire obligatoire. Le retour arrive à l'agence par e-mail et reste attaché à la publication.",
  },
  {
    number: "03",
    title: "Les chiffres remontent seuls",
    description:
      "Une fois publié, BSocial récupère les performances réelles depuis l'API Meta et les rapproche des prestations prévues et du CA. Le rapport mensuel se génère en un clic.",
  },
];

export type Problem = { title: string; description: string };

export const problems: Problem[] = [
  {
    title: "Les validations se perdent",
    description:
      "Un accord donné dans une conversation WhatsApp, un refus par e-mail, une correction en commentaire vocal. Trois semaines plus tard, personne ne sait qui a validé quoi.",
  },
  {
    title: "Personne ne sait ce qui a été livré",
    description:
      "Le forfait prévoit douze posts et deux tournages. À la fin du mois, ni l'agence ni le client ne peuvent le vérifier sans repartir dans un tableur.",
  },
  {
    title: "Le reporting se fait à la main",
    description:
      "Une journée par mois et par client : exporter les statistiques, recopier les chiffres, mettre en forme. Un travail refait à l'identique tous les trente jours.",
  },
  {
    title: "Le client demande où ça en est",
    description:
      "Chaque question de statut oblige quelqu'un à interrompre son travail pour aller chercher la réponse dans un outil que le client ne voit pas.",
  },
];

export type Outcome = { stat: string; label: string; detail: string };

/* Deliberately capability statements, not performance claims: nothing here
   asserts a result we cannot back up. */
export const outcomes: Outcome[] = [
  {
    stat: "1 espace",
    label: "par client",
    detail:
      "L'annonceur valide, commente et consulte ses résultats sans passer par vous.",
  },
  {
    stat: "0 ressaisie",
    label: "pour le reporting",
    detail:
      "Les statistiques Meta et les prestations livrées alimentent le rapport directement.",
  },
  {
    stat: "100 %",
    label: "des décisions tracées",
    detail:
      "Chaque validation, refus et publication est horodatée et attribuée à son auteur.",
  },
];

export type Screen = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const screens: Screen[] = [
  {
    id: "overview",
    label: "Tableau de bord",
    title: "Toute l'agence en un coup d'œil",
    description:
      "Clients actifs, publications en attente de validation, chiffre d'affaires du mois et prochains tournages. Ce qui demande une décision aujourd'hui est visible immédiatement.",
    image: "/screens/overview.png",
    alt: "Tableau de bord BSocial : indicateurs clés, publications par statut, types d'abonnement, publications et tournages à venir.",
  },
  {
    id: "calendar",
    label: "Calendrier éditorial",
    title: "Le planning de tous vos clients",
    description:
      "Un mois, tous les comptes, chaque publication colorée selon son statut — de la préparation à la mise en ligne. Ce qui bloque se repère sans ouvrir un seul post.",
    image: "/screens/posts-calendar.png",
    alt: "Calendrier éditorial BSocial affichant les publications du mois par statut et par client.",
  },
  {
    id: "shooting",
    label: "Tournages",
    title: "La production, planifiée et confirmée",
    description:
      "Lieux, horaires, durées et participants. Les séances des trois prochains jours sont signalées, et chaque changement déclenche un e-mail aux personnes concernées.",
    image: "/screens/shooting-calendar.png",
    alt: "Calendrier des tournages BSocial avec le détail d'une séance : client, horaire, lieu et participants.",
  },
  {
    id: "insights",
    label: "Statistiques Meta",
    title: "Les données réelles de vos comptes",
    description:
      "Portée, impressions, engagement, démographie et meilleures publications, tirées directement de la Graph API Meta. Exportable en PDF pour le rapport client.",
    image: "/screens/meta-insights.jpg",
    alt: "Statistiques Meta dans BSocial : portée, engagement, démographie de l'audience et meilleures publications.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "En quoi est-ce différent d'un outil de programmation classique ?",
    answer:
      "Les outils de programmation publient. BSocial gère la relation entre l'agence et son client : la validation avec commentaire obligatoire, le suivi de ce qui a été promis et livré, le chiffre d'affaires par compte et le rapport mensuel. La publication n'est qu'une étape du cycle.",
  },
  {
    question: "Le client doit-il installer quelque chose ?",
    answer:
      "Non. Il reçoit une invitation par e-mail, définit son mot de passe et accède à son espace depuis un navigateur. Il ne voit que ses propres contenus, jamais ceux des autres clients de l'agence.",
  },
  {
    question: "Quels réseaux sociaux sont pris en charge ?",
    answer:
      "Le calendrier couvre Instagram, Facebook, TikTok, YouTube et LinkedIn, avec les formats post, reel et story. Les statistiques en direct proviennent aujourd'hui de la Graph API Meta, pour Instagram et Facebook.",
  },
  {
    question: "Comment se passe la démonstration ?",
    answer:
      "Un échange de 30 minutes en visio, sur un compte de démonstration rempli de données réelles. Nous partons de votre organisation actuelle — nombre de clients, forfaits, circuit de validation — pour vous montrer les écrans qui vous concernent.",
  },
  {
    question: "Combien coûte BSocial ?",
    answer:
      "Le tarif dépend du nombre de clients gérés, d'utilisateurs et des modules activés. Nous établissons une proposition chiffrée après la démonstration, une fois votre besoin cadré.",
  },
  {
    question: "Pouvons-nous reprendre notre historique ?",
    answer:
      "Oui. Nous reprenons vos clients, vos plannings et votre historique depuis votre outil ou vos tableurs actuels, et nous formons votre équipe avant la mise en service.",
  },
];

export const socialNetworks = [
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "LinkedIn",
];
