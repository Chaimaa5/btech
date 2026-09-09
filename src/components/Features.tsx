import Icon from "./Icon";
import { features } from "../data/content";

export default function Features() {
  return (
    <section className="section" id="fonctionnalites">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Fonctionnalités</span>
          <h2>Ce que la plateforme fait déjà</h2>
          <p>
            Chaque brique ci-dessous est en production aujourd'hui, pas sur une
            feuille de route.
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
