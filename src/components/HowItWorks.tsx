import { steps } from "../data/content";

export default function HowItWorks() {
  return (
    <section className="section section--soft" id="fonctionnement">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Comment ça marche</span>
          <h2>Opérationnel en moins de dix minutes</h2>
          <p>
            Aucune installation, aucune configuration complexe. Connectez vos
            comptes et publiez dans la foulée.
          </p>
        </div>

        <ol className="steps">
          {steps.map((s, i) => (
            <li
              className="step reveal"
              key={s.number}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <span className="step__num">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
