import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import LegalPage from "./components/LegalPage";
import Contact from "./components/Contact";
import { useReveal } from "./components/useReveal";
import { useTheme } from "./components/useTheme";
import { useRoute } from "./components/useRoute";
import { legalPages } from "./data/legal";
import "./styles/sections.css";

export default function App() {
  const { theme, toggle } = useTheme();
  const { path, query } = useRoute();

  const legal = legalPages.find((p) => p.slug === path);
  const isContact = path === "contact";
  const isPage = Boolean(legal) || isContact;

  useReveal([path]);

  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu principal
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} minimal={isPage} />
      <main id="main">
        {isContact ? (
          <Contact initialSubject={query.get("sujet") ?? undefined} />
        ) : legal ? (
          <LegalPage page={legal} />
        ) : (
          <>
            <Hero />
            <Showcase />
            <Problem />
            <HowItWorks />
            <Features />
            <Faq />
            <CallToAction />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
