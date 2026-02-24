import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import Portfolio from "../components/Portfolio";
import ProblemSection from "../components/ProblemSection";
import Process from "../components/Process";
import Services from "../components/Services";
import SolutionSection from "../components/SolutionSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionSeparator from "../components/SectionSeparator";
import Testimonials from "../components/Testimonials";
import VisualEffects from "../components/VisualEffects";

export const metadata = {
  title: "AlgoAura | Lead Generation and Automation Agency",
  description:
    "Lead generation, CRM automation, WhatsApp automation, and conversion systems that grow your business on autopilot.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <Hero />
      <div className="cv-auto">
        <SectionSeparator label="Diagnostics" />
        <ProblemSection />
      </div>
      <div className="cv-auto">
        <SectionSeparator label="Recovery" />
        <SolutionSection />
      </div>
      <div className="cv-auto">
        <SectionSeparator label="Modules" />
        <Services />
      </div>
      <div className="cv-auto">
        <SectionSeparator label="Protocol" />
        <Process />
      </div>
      <div className="cv-auto">
        <SectionSeparator label="Reports" />
        <Portfolio />
      </div>
      <div className="cv-auto">
        <SectionSeparator label="Logs" />
        <Testimonials />
      </div>
      <div className="cv-auto">
        <SectionSeparator label="Activation" />
        <CTA />
      </div>
      <div className="cv-auto">
        <SectionSeparator label="Access" />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
