import logo from "../assets/logo.png";
import { CONTACT_EMAIL } from "../data/legal";

/* Every link here resolves to something real: an on-page section, a legal
   page, or a mail client. No placeholders for pages that don't exist. */
const columns = [
  {
    title: "Produit",
    links: [
      { label: "Le problème", href: "#probleme" },
      { label: "Comment ça marche", href: "#fonctionnement" },
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Aperçu des écrans", href: "#apercu" },
      { label: "Accès & traçabilité", href: "#acces" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Questions fréquentes", href: "#faq" },
      { label: "Demander une démonstration", href: "#demo" },
      { label: "Support", href: `mailto:${CONTACT_EMAIL}?subject=Support%20BSocial` },
      {
        label: "Signaler un problème de sécurité",
        href: `mailto:${CONTACT_EMAIL}?subject=S%C3%A9curit%C3%A9%20BSocial`,
      },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
      { label: "Devenir client", href: "#demo" },
      { label: "Se connecter", href: "#demo" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Politique de confidentialité", href: "#/confidentialite" },
      { label: "Conditions d'utilisation", href: "#/conditions" },
      { label: "RGPD & sécurité", href: "#/rgpd" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="BSocial" className="footer__logo" width={140} height={30} />
          <p>
            La couche opérationnelle entre une agence social media et ses
            clients : production, validation, livrables et résultats au même
            endroit.
          </p>
          <a className="footer__mail" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="footer__cols">
          {columns.map((c) => (
            <div key={c.title}>
              <h3>{c.title}</h3>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} BSocial. Tous droits réservés.</p>
        <p>Instagram, Facebook, TikTok, YouTube et LinkedIn sont des marques de leurs détenteurs respectifs.</p>
      </div>
    </footer>
  );
}
