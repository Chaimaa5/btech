import Icon from "./Icon";
import { features } from "../data/content";

export default function Features() {
  return (
    <section className="section" id="fonctionnalites">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Fonctionnalités</span>
          <h2>Tout ce que votre agence gère, dans un seul outil</h2>
          <p>
Neuf modules, tous en production aujourd'hui — pas sur une feuille
            de route. De la validation client au rapport mensuel.
          </p>
        </div>

        <ul className="features">
          {features.map((f, i) => (
            <li
              className="feature reveal"
              key={f.id}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="feature__icon">
                <Icon name={f.icon} size={22} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
