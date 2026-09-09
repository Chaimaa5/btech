import { problems, outcomes } from "../data/content";

export default function Problem() {
  return (
    <section className="section" id="probleme">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le problème</span>
          <h2>Ce qui vous coûte cher n'est pas la création</h2>
          <p>
            Une agence qui gère quinze comptes produit des centaines de
            publications par mois. La création tourne. C'est tout ce qui
            l'entoure qui déborde — et qui se paie en heures non facturables.
          </p>
        </div>

        <ul className="problems">
          {problems.map((p, i) => (
            <li
              className="problem reveal"
              key={p.title}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </li>
          ))}
        </ul>

        <p className="problems__turn reveal">
          Le changement tient en une phrase : <strong>le client obtient un
          accès, pas une conversation de groupe.</strong> Validations, retours,
          livrables et résultats au même endroit, avec un historique
          consultable.
        </p>

        <ul className="outcomes reveal">
          {outcomes.map((o) => (
            <li key={o.label}>
              <p className="outcomes__stat">
                {o.stat} <span>{o.label}</span>
              </p>
              <p className="outcomes__detail">{o.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
