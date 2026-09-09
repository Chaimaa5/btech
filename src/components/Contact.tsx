import { useEffect, useState } from "react";
import Icon from "./Icon";
import { CONTACT_EMAIL } from "../data/legal";

const subjects = [
  { value: "support", label: "Support — j'ai un problème avec la plateforme" },
  { value: "securite", label: "Signaler un problème de sécurité" },
  { value: "commercial", label: "Question commerciale ou tarifaire" },
  { value: "facturation", label: "Facturation" },
  { value: "autre", label: "Autre demande" },
];

const priorities = [
  { value: "bloquant", label: "Bloquant", hint: "La plateforme est inutilisable" },
  { value: "gene", label: "Gênant", hint: "Contournable, mais pénalisant" },
  { value: "question", label: "Question", hint: "Sans urgence" },
];

export default function Contact({ initialSubject }: { initialSubject?: string }) {
  const known = subjects.some((s) => s.value === initialSubject);

  const [form, setForm] = useState({
    subject: known ? initialSubject! : "support",
    priority: "gene",
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact & support — BSocial";
    return () => {
      document.title = "BSocial — Logiciel de gestion pour agences social media";
    };
  }, []);

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const isSecurity = form.subject === "securite";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Reference shown to the user; the real number is assigned server-side
    // once this form is wired to a backend.
    const ref = `BS-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setTicket(ref);
    setSent(true);
  }

  return (
    <section className="section legal">
      <div className="container container--narrow">
        <a className="legal__back" href="#top">
          <Icon name="arrow" size={16} className="legal__back-icon" />
          Retour à l'accueil
        </a>

        <h1 className="legal__title">Contact &amp; support</h1>
        <p className="legal__intro">
          Ouvrez un ticket : nous répondons sous 24 h ouvrées. Pour une demande
          de démonstration, passez plutôt par{" "}
          <a className="legal__link" href="#demo">
            le formulaire de démonstration
          </a>
          .
        </p>

        {sent ? (
          <div className="ticket__success" role="status">
            <span className="ticket__success-icon">
              <Icon name="check" size={24} />
            </span>
            <h2>Ticket ouvert</h2>
            <p>
              Votre demande est enregistrée sous la référence{" "}
              <strong>{ticket}</strong>. Nous revenons vers vous à l'adresse{" "}
              <strong>{form.email}</strong> sous 24 h ouvrées. Conservez cette
              référence pour tout échange à ce sujet.
            </p>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                setSent(false);
                setForm((f) => ({ ...f, message: "" }));
              }}
            >
              Ouvrir un autre ticket
            </button>
          </div>
        ) : (
          <form className="ticket" onSubmit={submit}>
            <div className="field">
              <label htmlFor="t-subject">Objet de la demande</label>
              <select
                id="t-subject"
                required
                value={form.subject}
                onChange={set("subject")}
              >
                {subjects.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {isSecurity && (
              <p className="ticket__notice">
                <Icon name="shield" size={16} />
                Merci de ne pas divulguer publiquement une faille avant qu'un
                correctif soit déployé. Décrivez les étapes de reproduction et
                l'impact constaté ; nous vous tenons informé du traitement.
              </p>
            )}

            <fieldset className="ticket__priority">
              <legend>Niveau d'urgence</legend>
              <div className="ticket__radios">
                {priorities.map((p) => (
                  <label
                    key={p.value}
                    className={`ticket__radio ${
                      form.priority === p.value ? "is-active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="priority"
                      value={p.value}
                      checked={form.priority === p.value}
                      onChange={set("priority")}
                    />
                    <strong>{p.label}</strong>
                    <span>{p.hint}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="ticket__row">
              <div className="field">
                <label htmlFor="t-name">Nom et prénom</label>
                <input
                  id="t-name"
                  required
                  autoComplete="name"
                  placeholder="Salma Idrissi"
                  value={form.name}
                  onChange={set("name")}
                />
              </div>

              <div className="field">
                <label htmlFor="t-email">E-mail</label>
                <input
                  id="t-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="vous@agence.ma"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="t-company">
                Agence <span className="field__opt">(facultatif)</span>
              </label>
              <input
                id="t-company"
                autoComplete="organization"
                placeholder="Nom de votre agence"
                value={form.company}
                onChange={set("company")}
              />
            </div>

            <div className="field">
              <label htmlFor="t-message">Décrivez votre demande</label>
              <textarea
                id="t-message"
                required
                rows={6}
                placeholder="Ce que vous tentiez de faire, ce qui s'est passé, et sur quel écran."
                value={form.message}
                onChange={set("message")}
              />
            </div>

            <button type="submit" className="btn btn--primary btn--lg">
              Ouvrir le ticket
              <Icon name="arrow" size={18} />
            </button>

            <p className="ticket__legal">
              Vous pouvez aussi écrire directement à{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Les
              informations transmises servent uniquement au traitement de votre
              demande.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
