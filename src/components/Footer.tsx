import logo from "../assets/logo.png";

const columns = [
  {
    title: "Produit",
    links: ["Fonctionnalités", "Aperçu", "Intégrations", "Nouveautés", "Feuille de route"],
  },
  {
    title: "Ressources",
    links: ["Blog", "Guides", "Centre d'aide", "Webinaires", "API développeurs"],
  },
  {
    title: "Entreprise",
    links: ["À propos", "Carrières", "Partenaires", "Presse", "Contact"],
  },
  {
    title: "Légal",
    links: ["Confidentialité", "Conditions d'utilisation", "RGPD", "Cookies", "Sécurité"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="BSocial" className="footer__logo" width={140} height={30} />
          <p>
            La plateforme de gestion des réseaux sociaux pensée pour les équipes
            qui veulent aller vite, ensemble.
          </p>
        </div>

        <div className="footer__cols">
          {columns.map((c) => (
            <div key={c.title}>
              <h3>{c.title}</h3>
              <ul>
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#top">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} BSocial. Tous droits réservés.</p>
        <p>Conçu et hébergé en Europe.</p>
      </div>
    </footer>
  );
}
