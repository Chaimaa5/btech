export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    id: "scheduling",
    title: "Planification intelligente",
    description:
      "Programmez vos publications sur tous vos réseaux depuis un calendrier unique. BSocial recommande les créneaux où votre audience est la plus active.",
    icon: "calendar",
  },
  {
    id: "inbox",
    title: "Boîte de réception unifiée",
    description:
      "Commentaires, messages privés et mentions arrivent au même endroit. Répondez à toute votre communauté sans changer d'onglet.",
    icon: "inbox",
  },
  {
    id: "analytics",
    title: "Analytics en temps réel",
    description:
      "Suivez portée, engagement et croissance avec des tableaux de bord clairs. Exportez des rapports prêts à présenter en un clic.",
    icon: "chart",
  },
  {
    id: "ai",
    title: "Assistant IA de contenu",
    description:
      "Générez légendes, hashtags et variantes adaptées à chaque plateforme, dans le ton de votre marque.",
    icon: "sparkles",
  },
  {
    id: "team",
    title: "Collaboration d'équipe",
    description:
      "Rôles, workflows de validation et commentaires internes pour publier à plusieurs sans erreur.",
    icon: "users",
  },
  {
    id: "listening",
    title: "Veille & écoute sociale",
    description:
      "Surveillez votre marque, vos concurrents et vos mots-clés. Recevez une alerte dès qu'une conversation décolle.",
    icon: "radar",
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
    title: "Connectez vos comptes",
    description:
      "Instagram, Facebook, LinkedIn, X, TikTok et YouTube se relient en quelques secondes via OAuth sécurisé.",
  },
  {
    number: "02",
    title: "Créez et planifiez",
    description:
      "Composez une fois, adaptez automatiquement le format à chaque réseau, puis glissez-déposez dans le calendrier.",
  },
  {
    number: "03",
    title: "Mesurez et optimisez",
    description:
      "Analysez ce qui fonctionne, dupliquez vos meilleurs posts et laissez BSocial affiner vos horaires de publication.",
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
    title: "Toute l'activité en un coup d'œil",
    description:
      "Clients actifs, publications en attente de validation, chiffre d'affaires du mois et prochains tournages : l'essentiel de votre agence sur un seul écran.",
    image: "/screens/overview.png",
    alt: "Tableau de bord BSocial : indicateurs clés, statistiques Meta, publications et tournages à venir.",
  },
  {
    id: "calendar",
    label: "Calendrier éditorial",
    title: "Le planning de tous vos clients",
    description:
      "Un calendrier mensuel où chaque publication porte la couleur de son statut — de la préparation à la mise en ligne. Vous repérez instantanément ce qui bloque.",
    image: "/screens/posts-calendar.png",
    alt: "Calendrier éditorial BSocial affichant les publications du mois par statut et par client.",
  },
  {
    id: "shooting",
    label: "Tournages",
    title: "Vos séances photo et vidéo organisées",
    description:
      "Planifiez les shootings, assignez l'équipe, suivez les lieux et les durées. Les séances des trois prochains jours sont mises en avant automatiquement.",
    image: "/screens/shooting-calendar.png",
    alt: "Calendrier des tournages BSocial avec le détail d'une séance : client, horaire, lieu et participants.",
  },
  {
    id: "insights",
    label: "Statistiques Meta",
    title: "Les vraies données de vos comptes",
    description:
      "Portée, impressions, engagement et démographie de l'audience, directement depuis l'API Meta. Exportable en PDF pour vos rapports clients.",
    image: "/screens/meta-insights.jpg",
    alt: "Statistiques Meta dans BSocial : portée, engagement, démographie de l'audience et meilleures publications.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nous gérons 12 comptes clients depuis BSocial. Ce qui nous prenait deux jours par semaine se fait maintenant en une matinée.",
    name: "Leïla Bennani",
    role: "Directrice, Studio Mirage",
    initials: "LB",
  },
  {
    quote:
      "Les rapports automatiques ont changé nos réunions clients. Tout est clair, chiffré et prêt à envoyer le lundi matin.",
    name: "Thomas Régnier",
    role: "Social Media Manager, Novaé",
    initials: "TR",
  },
  {
    quote:
      "L'assistant IA écrit dans notre ton de marque. On garde le contrôle éditorial tout en publiant trois fois plus.",
    name: "Sofia Marchetti",
    role: "Responsable marketing, Kaora",
    initials: "SM",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "12k+", label: "Équipes actives" },
  { value: "4,2M", label: "Posts publiés" },
  { value: "38%", label: "Engagement moyen en hausse" },
  { value: "99,9%", label: "Disponibilité de service" },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Quels réseaux sociaux sont pris en charge ?",
    answer:
      "BSocial se connecte à Instagram, Facebook, LinkedIn, X, TikTok, YouTube et Pinterest. De nouvelles intégrations sont ajoutées chaque trimestre.",
  },
  {
    question: "Comment se passe la démonstration ?",
    answer:
      "Un échange de 30 minutes en visio, avec un compte de démonstration rempli de données réelles. Nous partons de votre organisation actuelle pour vous montrer les écrans qui vous concernent.",
  },
  {
    question: "Combien coûte BSocial ?",
    answer:
      "Le tarif dépend du nombre de clients gérés, d'utilisateurs et des modules activés. Nous établissons une proposition chiffrée après la démonstration, une fois votre besoin cadré.",
  },
  {
    question: "Mes données sont-elles hébergées en Europe ?",
    answer:
      "Toutes les données sont hébergées dans l'Union européenne, chiffrées au repos et en transit, et notre traitement est conforme au RGPD.",
  },
  {
    question: "Proposez-vous un accompagnement à la migration ?",
    answer:
      "Oui. Nous reprenons vos clients, vos plannings et votre historique depuis votre outil actuel, et nous formons votre équipe avant la mise en service.",
  },
];

export const socialNetworks = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "X",
  "TikTok",
  "YouTube",
];
