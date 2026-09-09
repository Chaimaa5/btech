import { useState } from "react";
import Icon from "./Icon";

const points = [
  "30 minutes en visio, sur un compte de démonstration réel",
  "Nous partons de vos forfaits et de votre circuit de validation",
  "Une proposition chiffrée selon votre nombre de clients",
];

export default function CallToAction() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="section" id="demo">
      <div className="container">
        <div className="demo reveal">
          <div className="demo__aside">
            <span className="eyebrow">Démonstration</span>
            <h2>Voyez BSocial sur vos propres données</h2>
            <p className="demo__lead">
              Dites-nous comment votre agence travaille aujourd'hui — combien
              de comptes, quels forfaits, qui valide quoi. Nous vous montrons
              les écrans qui correspondent, sans argumentaire commercial.
            </p>

            <ul className="demo__points">
              {points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} />
                  {p}
                </li>
              ))}
            </ul>

            <p className="demo__note">
              Réponse sous 24 h ouvrées · Aucune carte bancaire demandée
            </p>
          </div>

          <div className="demo__panel">
            {sent ? (
              <div className="demo__success" role="status">
                <span className="demo__success-icon">
                  <Icon name="check" size={22} />
                </span>
                <h3>Demande bien reçue</h3>
                <p>
                  Merci {form.name || ""} — nous revenons vers vous à l'adresse{" "}
                  <strong>{form.email}</strong> sous 24 h ouvrées pour convenir
                  d'un créneau.
                </p>
              </div>
            ) : (
              <form
                className="demo__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h3 className="demo__form-title">Demander une démonstration</h3>

                <div className="field">
                  <label htmlFor="demo-name">Nom et prénom</label>
                  <input
                    id="demo-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Salma Idrissi"
                    value={form.name}
                    onChange={set("name")}
                  />
                </div>

                <div className="field">
                  <label htmlFor="demo-email">E-mail professionnel</label>
                  <input
                    id="demo-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="vous@agence.ma"
                    value={form.email}
                    onChange={set("email")}
                  />
                </div>

                <div className="field">
                  <label htmlFor="demo-company">Agence ou entreprise</label>
                  <input
                    id="demo-company"
                    name="company"
                    required
                    autoComplete="organization"
                    placeholder="Nom de votre agence"
                    value={form.company}
                    onChange={set("company")}
                  />
                </div>

                <div className="field">
                  <label htmlFor="demo-message">
                    Votre besoin <span className="field__opt">(facultatif)</span>
                  </label>
                  <textarea
                    id="demo-message"
                    name="message"
                    rows={3}
                    placeholder="Combien de clients gérez-vous ? Comment se passent les validations aujourd'hui ?"
                    value={form.message}
                    onChange={set("message")}
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--block btn--lg">
                  Envoyer ma demande
                  <Icon name="arrow" size={18} />
                </button>

                <p className="demo__legal">
                  En envoyant ce formulaire, vous acceptez d'être recontacté au
                  sujet de votre demande. Aucune newsletter.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
