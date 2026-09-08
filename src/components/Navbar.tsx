import { useEffect, useState } from "react";
import Icon from "./Icon";
import logo from "../assets/logo.png";

const links = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#fonctionnement", label: "Comment ça marche" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
];

type Props = { theme: "light" | "dark"; onToggleTheme: () => void };

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="BSocial — accueil">
          <img src={logo} alt="BSocial" className="nav__logo" width={132} height={28} />
        </a>

        <nav className="nav__links" aria-label="Navigation principale">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
          </button>
          <a href="#contact" className="nav__signin">
            Connexion
          </a>
          <a href="#contact" className="btn btn--primary nav__cta">
            Essai gratuit
          </a>
          <button
            type="button"
            className="nav__icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav__mobile">
          <nav aria-label="Navigation mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="btn btn--primary btn--block"
            onClick={() => setOpen(false)}
          >
            Essai gratuit
          </a>
        </div>
      )}
    </header>
  );
}
