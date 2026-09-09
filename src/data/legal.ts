/* Company identity is deliberately left as visible placeholders: these must be
   filled in before the site goes live. They render highlighted on the page. */
export const TODO = {
  entity: "[À COMPLÉTER — raison sociale]",
  address: "[À COMPLÉTER — siège social]",
  registry: "[À COMPLÉTER — RC / ICE]",
  host: "[À COMPLÉTER — hébergeur et pays d'hébergement]",
  dpo: "[À COMPLÉTER — responsable de la protection des données]",
};

export const CONTACT_EMAIL = "contact@bsocial.ma";

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

export type LegalPage = {
  slug: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "confidentialite",
    title: "Politique de confidentialité",
    intro:
      "Cette politique décrit les données que BSocial traite, pourquoi, et les droits dont disposent les personnes concernées.",
    sections: [
      {
        heading: "Responsable du traitement",
        blocks: [
          {
            kind: "p",
            text: `La plateforme BSocial est éditée par ${TODO.entity}, dont le siège est situé ${TODO.address}, immatriculée sous ${TODO.registry}. Pour toute question relative aux données personnelles : ${CONTACT_EMAIL} — ${TODO.dpo}.`,
          },
        ],
      },
      {
        heading: "Données traitées",
        blocks: [
          {
            kind: "p",
            text: "BSocial est un outil professionnel utilisé par des agences et leurs clients. Les données traitées sont les suivantes :",
          },
          {
            kind: "list",
            items: [
              "Données de compte : nom, adresse e-mail, rôle, agence ou client de rattachement.",
              "Données d'usage : contenus préparés, statuts de validation, commentaires de refus, plannings de tournage, prestations et objectifs de chiffre d'affaires saisis par l'agence.",
              "Journal d'audit : actions effectuées sur la plateforme, avec auteur et horodatage.",
              "Données issues des réseaux sociaux connectés : statistiques d'audience et de performance des comptes Instagram et Facebook reliés via la Graph API Meta, ainsi que les jetons d'accès correspondants.",
              "Données techniques : journaux de connexion nécessaires à la sécurité du service.",
            ],
          },
          {
            kind: "p",
            text: "BSocial ne collecte pas de données de navigation à des fins publicitaires et n'utilise pas de traceurs marketing tiers.",
          },
        ],
      },
      {
        heading: "Finalités et bases légales",
        blocks: [
          {
            kind: "list",
            items: [
              "Fourniture du service, sur la base du contrat conclu avec l'agence cliente.",
              "Sécurité, prévention des abus et traçabilité des décisions, au titre de l'intérêt légitime de l'éditeur et de ses clients.",
              "Respect des obligations légales et comptables applicables.",
            ],
          },
        ],
      },
      {
        heading: "Comptes sociaux connectés",
        blocks: [
          {
            kind: "p",
            text: "Lorsqu'une agence relie un compte Instagram ou Facebook, BSocial accède aux statistiques de ce compte via l'API officielle de Meta, dans la limite des autorisations accordées lors de la connexion. Ces données servent uniquement à alimenter les tableaux de bord et les rapports du client concerné. Elles ne sont ni revendues, ni utilisées pour un autre compte. La connexion peut être révoquée à tout moment depuis la plateforme ou depuis les paramètres du compte Meta.",
          },
        ],
      },
      {
        heading: "Destinataires",
        blocks: [
          {
            kind: "p",
            text: "Les données sont accessibles aux seuls utilisateurs habilités selon leur rôle : un client n'accède qu'à ses propres contenus, un manager qu'aux comptes qui lui sont assignés. Elles sont hébergées chez " + TODO.host + ". Aucune donnée n'est cédée à des tiers à des fins commerciales.",
          },
        ],
      },
      {
        heading: "Durée de conservation",
        blocks: [
          {
            kind: "p",
            text: "Les données de compte et de production sont conservées pendant la durée de la relation contractuelle, puis archivées ou supprimées conformément aux obligations légales applicables. Les journaux d'audit sont conservés pour une durée permettant de justifier des livrables et des validations.",
          },
        ],
      },
      {
        heading: "Vos droits",
        blocks: [
          {
            kind: "p",
            text: `Toute personne concernée dispose d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition, ainsi que d'un droit à la portabilité. Ces demandes s'exercent auprès de ${CONTACT_EMAIL}. Lorsque les données sont saisies par une agence pour le compte de son client, la demande est transmise à l'agence responsable.`,
          },
        ],
      },
      {
        heading: "Sécurité",
        blocks: [
          {
            kind: "p",
            text: "Les accès sont authentifiés et cloisonnés par rôle, les échanges sont chiffrés en transit, et les actions sensibles sont journalisées. Les incidents de sécurité affectant des données personnelles font l'objet d'une notification dans les conditions prévues par la réglementation applicable.",
          },
        ],
      },
    ],
  },
  {
    slug: "conditions",
    title: "Conditions d'utilisation",
    intro:
      "Les présentes conditions régissent l'accès à la plateforme BSocial et son utilisation.",
    sections: [
      {
        heading: "Objet",
        blocks: [
          {
            kind: "p",
            text: `BSocial est une plateforme de gestion de production éditoriale destinée aux agences de communication et à leurs clients. Elle est éditée par ${TODO.entity}, ${TODO.address}, ${TODO.registry}.`,
          },
        ],
      },
      {
        heading: "Accès au service",
        blocks: [
          {
            kind: "p",
            text: "L'accès est réservé aux utilisateurs disposant d'un compte créé par l'agence titulaire de l'abonnement. Chaque utilisateur est responsable de la confidentialité de ses identifiants et des actions effectuées depuis son compte. Les comptes ne sont pas destinés à être partagés entre plusieurs personnes.",
          },
        ],
      },
      {
        heading: "Rôles et responsabilités",
        blocks: [
          {
            kind: "p",
            text: "L'agence détermine les rôles attribués à ses collaborateurs et à ses clients. Elle demeure responsable des contenus qu'elle produit et publie pour le compte de ses clients, ainsi que de l'exactitude des informations saisies dans la plateforme, notamment les prestations et les objectifs financiers.",
          },
        ],
      },
      {
        heading: "Contenus",
        blocks: [
          {
            kind: "p",
            text: "Les contenus déposés sur la plateforme restent la propriété de l'agence ou de son client, selon les accords qui les lient. L'éditeur n'acquiert aucun droit sur ces contenus, hormis ceux strictement nécessaires à l'hébergement et à l'affichage du service. L'utilisateur s'engage à ne pas déposer de contenus illicites ou portant atteinte aux droits de tiers.",
          },
        ],
      },
      {
        heading: "Comptes tiers",
        blocks: [
          {
            kind: "p",
            text: "La connexion de comptes sociaux passe par les interfaces officielles des plateformes concernées et reste soumise à leurs propres conditions. L'éditeur ne peut être tenu responsable d'une modification, d'une restriction ou d'une interruption décidée par ces plateformes.",
          },
        ],
      },
      {
        heading: "Disponibilité et évolutions",
        blocks: [
          {
            kind: "p",
            text: "L'éditeur met en œuvre les moyens raisonnables pour assurer la disponibilité du service et peut le faire évoluer. Des interruptions pour maintenance peuvent survenir ; celles qui sont planifiées sont annoncées à l'avance lorsque cela est possible.",
          },
        ],
      },
      {
        heading: "Résiliation",
        blocks: [
          {
            kind: "p",
            text: `L'abonnement peut être résilié dans les conditions convenues au contrat. À l'issue de la relation, l'agence peut demander l'export de ses données avant leur suppression, en écrivant à ${CONTACT_EMAIL}.`,
          },
        ],
      },
      {
        heading: "Droit applicable",
        blocks: [
          {
            kind: "p",
            text: "Les présentes conditions sont régies par le droit applicable au siège de l'éditeur. Tout différend fera l'objet d'une recherche de solution amiable avant toute action contentieuse.",
          },
        ],
      },
    ],
  },
  {
    slug: "rgpd",
    title: "RGPD & sécurité",
    intro:
      "Comment BSocial traite les données pour le compte des agences, et les mesures qui protègent ces données.",
    sections: [
      {
        heading: "Rôles des parties",
        blocks: [
          {
            kind: "p",
            text: "Dans la plupart des usages, l'agence cliente est responsable de traitement pour les données qu'elle saisit au sujet de ses propres clients, et l'éditeur de BSocial agit en qualité de sous-traitant. L'éditeur traite ces données uniquement sur instruction de l'agence et pour les besoins du service.",
          },
        ],
      },
      {
        heading: "Engagements du sous-traitant",
        blocks: [
          {
            kind: "list",
            items: [
              "Traiter les données uniquement pour fournir le service convenu.",
              "Garantir la confidentialité par un cloisonnement strict des accès selon les rôles.",
              "Assister l'agence dans le traitement des demandes d'exercice de droits.",
              "Notifier sans délai toute violation de données constatée.",
              "Restituer ou supprimer les données au terme de la relation contractuelle.",
            ],
          },
        ],
      },
      {
        heading: "Mesures de sécurité",
        blocks: [
          {
            kind: "list",
            items: [
              "Authentification individuelle et autorisations vérifiées à chaque requête.",
              "Cloisonnement des données par client : un compte client n'accède qu'à ses propres contenus.",
              "Chiffrement des échanges en transit.",
              "Journalisation des créations, modifications, validations, refus et publications.",
              "Traçabilité des consultations effectuées par un administrateur depuis la vue client.",
              "Stockage des jetons d'accès aux API sociales séparé des données applicatives courantes.",
            ],
          },
        ],
      },
      {
        heading: "Hébergement et sous-traitants",
        blocks: [
          {
            kind: "p",
            text: `Les données sont hébergées chez ${TODO.host}. Les sous-traitants ultérieurs éventuels sont communiqués sur demande à ${CONTACT_EMAIL}, ainsi que les garanties encadrant tout transfert hors de la zone d'hébergement principale.`,
          },
        ],
      },
      {
        heading: "Signaler un problème de sécurité",
        blocks: [
          {
            kind: "p",
            text: `Toute vulnérabilité présumée peut être signalée à ${CONTACT_EMAIL}. Les signalements sont examinés et l'auteur est tenu informé du traitement de sa remontée. Nous demandons de ne pas divulguer publiquement une faille avant qu'un correctif ait été déployé.`,
          },
        ],
      },
    ],
  },
];
