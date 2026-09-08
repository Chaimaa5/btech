import { useState } from "react";
import Icon from "./Icon";
import { plans } from "../data/content";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="section section--soft" id="tarifs">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Tarifs</span>
          <h2>Une formule pour chaque étape de croissance</h2>
          <p>Changez ou annulez à tout moment. Tous les prix sont hors taxes.</p>
        </div>

        <div className="billing reveal">
          <span className={!yearly ? "is-active" : ""}>Mensuel</span>
          <button
            type="button"
            className={`billing__switch ${yearly ? "is-yearly" : ""}`}
            onClick={() => setYearly((y) => !y)}
            role="switch"
            aria-checked={yearly}
            aria-label="Basculer la facturation annuelle"
          >
            <span className="billing__knob" />
          </button>
          <span className={yearly ? "is-active" : ""}>
            Annuel <em className="billing__save">−20%</em>
          </span>
        </div>

        <ul className="plans">
          {plans.map((p, i) => (
            <li
              className={`plan reveal ${p.featured ? "plan--featured" : ""}`}
              key={p.name}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {p.featured && <span className="plan__tag">Le plus choisi</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__tagline">{p.tagline}</p>

              <p className="plan__price">
                <span className="plan__amount">
                  {yearly ? p.priceYearly : p.priceMonthly}€
                </span>
                <span className="plan__period">/ mois</span>
              </p>
              <p className="plan__billed">
                {yearly ? "facturé annuellement" : "facturé mensuellement"}
              </p>

              <a
                href="#contact"
                className={`btn btn--block ${p.featured ? "btn--primary" : "btn--ghost"}`}
              >
                {p.cta}
              </a>

              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
