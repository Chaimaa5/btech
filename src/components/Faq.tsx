import { useState } from "react";
import Icon from "./Icon";
import { faqs } from "../data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container container--narrow">
        <div className="section-head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Questions fréquentes</h2>
        </div>

        <ul className="faq">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <li className={`faq__item reveal ${open ? "is-open" : ""}`} key={f.question}>
                <h3>
                  <button
                    type="button"
                    className="faq__trigger"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                  >
                    <span>{f.question}</span>
                    <Icon name="chevron" size={20} className="faq__chevron" />
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!open}
                >
                  <p>{f.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
