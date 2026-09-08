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

export type Plan = {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  tagline: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    priceMonthly: 19,
    priceYearly: 15,
    tagline: "Pour les créateurs et indépendants qui démarrent.",
    cta: "Commencer gratuitement",
    features: [
      "3 comptes sociaux",
      "30 publications programmées",
      "Analytics de base",
      "1 utilisateur",
      "Support par e-mail",
    ],
  },
  {
    name: "Pro",
    priceMonthly: 49,
    priceYearly: 39,
    tagline: "Pour les PME et agences en croissance.",
    cta: "Essai 14 jours offert",
    featured: true,
    features: [
      "15 comptes sociaux",
      "Publications illimitées",
      "Analytics avancés + rapports",
      "5 utilisateurs & validations",
      "Assistant IA de contenu",
      "Boîte de réception unifiée",
    ],
  },
  {
    name: "Business",
    priceMonthly: 129,
    priceYearly: 99,
    tagline: "Pour les équipes marketing structurées.",
    cta: "Parler à un expert",
    features: [
      "Comptes sociaux illimités",
      "Utilisateurs illimités",
      "Veille & écoute sociale",
      "API et intégrations sur mesure",
      "SSO & journal d'audit",
      "Accompagnement dédié",
    ],
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
    question: "Ai-je besoin d'une carte bancaire pour l'essai ?",
    answer:
      "Non. L'essai de 14 jours sur le plan Pro est accessible sans carte bancaire, et sans engagement à l'issue de la période.",
  },
  {
    question: "Puis-je changer de formule à tout moment ?",
    answer:
      "Oui. Vous pouvez passer d'une formule à l'autre depuis votre espace de facturation, la différence est calculée au prorata.",
  },
  {
    question: "Mes données sont-elles hébergées en Europe ?",
    answer:
      "Toutes les données sont hébergées dans l'Union européenne, chiffrées au repos et en transit, et notre traitement est conforme au RGPD.",
  },
  {
    question: "Proposez-vous un accompagnement à la migration ?",
    answer:
      "Les formules Business incluent une migration assistée depuis votre outil actuel ainsi qu'une session de formation pour votre équipe.",
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
