import Icon from "./Icon";
import { proofs } from "../data/content";

export default function Access() {
  return (
    <section className="section section--soft" id="acces">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Traçabilité</span>
          <h2>La preuve de ce qui a été validé, livré et payé</h2>
          <p>
            Un désaccord sur un livrable coûte plus cher qu'il n'y paraît :
            des heures perdues à chercher, et parfois un client qui part. BSocial
            conserve l'historique à votre place.
          </p>
        </div>

        <ul className="proofs">
          {proofs.map((p, i) => (
            <li
              className="proof reveal"
              key={p.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="proof__icon">
                <Icon name={p.icon} size={22} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
