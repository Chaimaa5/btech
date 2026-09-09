import { useEffect } from "react";
import Icon from "./Icon";
import type { LegalPage as Page } from "../data/legal";

/* Placeholders are rendered as marked text so an unfilled value is impossible
   to miss on the published page. */
function withPlaceholders(text: string) {
  return text.split(/(\[À COMPLÉTER[^\]]*\])/g).map((part, i) =>
    part.startsWith("[À COMPLÉTER") ? (
      <mark className="todo" key={i}>
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export default function LegalPage({ page }: { page: Page }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${page.title} — BSocial`;
    return () => {
      document.title = "BSocial — La plateforme des agences social media";
    };
  }, [page]);

  return (
    <section className="section legal">
      <div className="container container--narrow">
        <a className="legal__back" href="#top">
          <Icon name="arrow" size={16} className="legal__back-icon" />
          Retour à l'accueil
        </a>

        <h1 className="legal__title">{page.title}</h1>
        <p className="legal__intro">{page.intro}</p>

        {page.sections.map((s) => (
          <section className="legal__section" key={s.heading}>
            <h2>{s.heading}</h2>
            {s.blocks.map((b, i) =>
              b.kind === "p" ? (
                <p key={i}>{withPlaceholders(b.text)}</p>
              ) : (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{withPlaceholders(it)}</li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}

        <p className="legal__updated">
          Dernière mise à jour :{" "}
          {new Date().toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
          })}
        </p>
      </div>
    </section>
  );
}
