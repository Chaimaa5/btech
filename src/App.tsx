import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { useReveal } from "./components/useReveal";
import { useTheme } from "./components/useTheme";
import "./styles/sections.css";

export default function App() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu principal
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
