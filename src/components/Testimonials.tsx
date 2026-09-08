import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="section" id="temoignages">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Témoignages</span>
          <h2>Adopté par les équipes qui publient chaque jour</h2>
        </div>

        <ul className="quotes">
          {testimonials.map((t, i) => (
            <li
              className="quote reveal"
              key={t.name}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <p className="quote__text">“{t.quote}”</p>
              <div className="quote__author">
                <span className="quote__avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.role}</em>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
