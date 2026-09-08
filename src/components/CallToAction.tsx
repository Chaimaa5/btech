import { useState } from "react";
import Icon from "./Icon";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta reveal">
          <div className="cta__glow" aria-hidden="true" />
          <span className="eyebrow cta__eyebrow">Commencer</span>
          <h2>Prêt à reprendre le contrôle de vos réseaux ?</h2>
          <p>
            Rejoignez les milliers d'équipes qui publient plus vite et plus juste
            avec BSocial. Essai de 14 jours, sans carte bancaire.
          </p>

          {sent ? (
            <p className="cta__success" role="status">
              <Icon name="check" size={18} />
              Merci ! Nous vous envoyons votre accès à {email}.
            </p>
          ) : (
            <form
              className="cta__form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="sr-only" htmlFor="cta-email">
                Adresse e-mail professionnelle
              </label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="vous@entreprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn--primary">
                Créer mon compte
                <Icon name="arrow" size={18} />
              </button>
            </form>
          )}

          <p className="cta__note">
            Déjà 12 000 équipes nous font confiance · Données hébergées en Europe
          </p>
        </div>
      </div>
    </section>
  );
}
