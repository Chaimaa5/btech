import Icon from "./Icon";
import { socialNetworks, stats } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Nouveau — Assistant IA de contenu
          </span>

          <h1>
            Tous vos réseaux sociaux,
            <span className="hero__highlight"> pilotés d'un seul endroit</span>
          </h1>

          <p className="hero__lead">
            BSocial réunit la planification, la publication, les conversations et
            les statistiques de toutes vos plateformes dans une interface unique.
            Passez moins de temps à jongler entre les onglets, plus de temps à
            créer.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Démarrer l'essai gratuit
              <Icon name="arrow" size={18} />
            </a>
            <a href="#fonctionnalites" className="btn btn--ghost btn--lg">
              Découvrir les fonctionnalités
            </a>
          </div>

          <p className="hero__note">
            14 jours d'essai · Sans carte bancaire · Annulable à tout moment
          </p>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <Dashboard />
        </div>
      </div>

      <div className="hero__marquee">
        <p>Compatible avec vos plateformes</p>
        <ul>
          {socialNetworks.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Stylised product preview — pure CSS/SVG, no screenshot needed. */
function Dashboard() {
  const bars = [42, 68, 55, 88, 72, 96, 61];
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <div className="dash" role="img" aria-label="Aperçu du tableau de bord BSocial">
      <div className="dash__bar">
        <span className="dash__dot" />
        <span className="dash__dot" />
        <span className="dash__dot" />
        <span className="dash__url">app.bsocial.com</span>
      </div>

      <div className="dash__body">
        <aside className="dash__side">
          <span className="dash__side-item dash__side-item--active" />
          <span className="dash__side-item" />
          <span className="dash__side-item" />
          <span className="dash__side-item" />
          <span className="dash__side-item" />
        </aside>

        <div className="dash__main">
          <div className="dash__row">
            <div>
              <p className="dash__label">Engagement cette semaine</p>
              <p className="dash__value">
                24 812 <span className="dash__delta">+18%</span>
              </p>
            </div>
            <span className="dash__pill">7 jours</span>
          </div>

          <div className="dash__chart">
            {bars.map((h, i) => (
              <div className="dash__col" key={i}>
                <div
                  className="dash__barfill"
                  style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                />
                <span>{days[i]}</span>
              </div>
            ))}
          </div>

          <div className="dash__cards">
            <div className="dash__card">
              <p className="dash__label">Publications planifiées</p>
              <p className="dash__value dash__value--sm">36</p>
            </div>
            <div className="dash__card">
              <p className="dash__label">Messages en attente</p>
              <p className="dash__value dash__value--sm">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dash__float dash__float--a">
        <Icon name="check" size={15} />
        <span>Post publié sur LinkedIn</span>
      </div>
      <div className="dash__float dash__float--b">
        <Icon name="sparkles" size={15} />
        <span>3 légendes générées</span>
      </div>
    </div>
  );
}
