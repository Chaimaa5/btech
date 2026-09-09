import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Access from "./components/Access";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import LegalPage from "./components/LegalPage";
import { useReveal } from "./components/useReveal";
import { useTheme } from "./components/useTheme";
import { useRoute } from "./components/useRoute";
import { legalPages } from "./data/legal";
import "./styles/sections.css";

export default function App() {
  const { theme, toggle } = useTheme();
  const route = useRoute();
  const page = legalPages.find((p) => p.slug === route);

  useReveal([route]);

  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu principal
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} minimal={Boolean(page)} />
      <main id="main">
        {page ? (
          <LegalPage page={page} />
        ) : (
          <>
            <Hero />
            <Problem />
            <HowItWorks />
            <Features />
            <Showcase />
            <Access />
            <Faq />
            <CallToAction />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
