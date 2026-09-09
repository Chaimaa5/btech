import { steps } from "../data/content";

export default function HowItWorks() {
  return (
    <section className="section section--soft" id="fonctionnement">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Comment ça marche</span>
          <h2>Le mois se déroule tout seul</h2>
          <p>
            Trois temps, le même pour chaque client. Vous préparez une fois, le
            reste s'enchaîne sans relance et sans ressaisie.
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
