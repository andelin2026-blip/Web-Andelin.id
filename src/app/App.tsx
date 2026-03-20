import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { PricingSection } from "./components/PricingSection";
import { QuickHelp } from "./components/QuickHelp";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <PricingSection />
        <QuickHelp />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}