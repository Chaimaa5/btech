import { useState } from "react";
import { screens } from "../data/content";

export default function Showcase() {
  const [active, setActive] = useState(0);
  const screen = screens[active];

  return (
    <section className="section section--soft" id="apercu">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Aperçu</span>
          <h2>La plateforme, écran par écran</h2>
          <p>
            Voici BSocial tel que votre équipe l'utilise au quotidien. Aucune
            image d'illustration : ce sont les écrans réels de la plateforme.
          </p>
        </div>

        <div className="showcase reveal">
          <div className="showcase__tabs" role="tablist" aria-label="Écrans de la plateforme">
            {screens.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`screen-tab-${s.id}`}
                aria-selected={i === active}
                aria-controls={`screen-panel-${s.id}`}
                tabIndex={i === active ? 0 : -1}
                className={`showcase__tab ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const next =
                      e.key === "ArrowRight"
                        ? (active + 1) % screens.length
                        : (active - 1 + screens.length) % screens.length;
                    setActive(next);
                    document.getElementById(`screen-tab-${screens[next].id}`)?.focus();
                  }
                }}
              >
                <span className="showcase__tab-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.label}
              </button>
            ))}
          </div>

          <div
            className="showcase__panel"
            role="tabpanel"
            id={`screen-panel-${screen.id}`}
            aria-labelledby={`screen-tab-${screen.id}`}
          >
            <div className="showcase__copy">
              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
            </div>

            <figure className="showcase__frame">
              <div className="showcase__chrome" aria-hidden="true">
                <span className="showcase__dot" />
                <span className="showcase__dot" />
                <span className="showcase__dot" />
                <span className="showcase__url">app.bsocial.ma</span>
              </div>
              <div className="showcase__viewport">
                <img
                  key={screen.id}
                  src={screen.image}
                  alt={screen.alt}
                  width={1800}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="showcase__hint">
                Faites glisser l'aperçu horizontalement pour explorer l'écran.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
