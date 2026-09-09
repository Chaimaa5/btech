import Icon from "./Icon";
import { socialNetworks } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Logiciel de gestion pour agences social media
          </span>

          <h1>
            Faites valider, livrez, prouvez.
            <span className="hero__highlight"> Sans y passer vos journées.</span>
          </h1>

          <div className="hero__band">
            <p className="hero__lead">
              BSocial est le logiciel de gestion des agences social media :
              validation des publications par le client, calendrier éditorial et
              tournages, suivi des prestations et du chiffre d'affaires,
              statistiques Instagram et Facebook en direct, et rapport client
              généré en un clic.
            </p>

            <div>
              <div className="hero__actions">
                <a href="#demo" className="btn btn--primary btn--lg">
                  Demander une démonstration
                  <Icon name="arrow" size={18} />
                </a>
                <a href="#apercu" className="btn btn--ghost btn--lg">
                  Voir la plateforme
                </a>
              </div>

              <p className="hero__note">
                Démonstration personnalisée · Sans engagement · Réponse sous 24 h
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__marquee">
        <p>Publication et statistiques sur</p>
        <ul>
          {socialNetworks.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
