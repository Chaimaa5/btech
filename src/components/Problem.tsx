import { problems } from "../data/content";

export default function Problem() {
  return (
    <section className="section" id="probleme">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le problème</span>
          <h2>La production tourne. Le suivi, lui, tient dans un tableur.</h2>
          <p>
            Une agence qui gère quinze comptes produit des centaines de
            publications par mois. Ce n'est pas la création qui coince, c'est
            tout ce qui l'entoure.
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
      </div>
    </section>
  );
}
