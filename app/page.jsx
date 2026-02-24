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
      <SectionSeparator label="Diagnostics" />
      <ProblemSection />
      <SectionSeparator label="Recovery" />
      <SolutionSection />
      <SectionSeparator label="Modules" />
      <Services />
      <SectionSeparator label="Protocol" />
      <Process />
      <SectionSeparator label="Reports" />
      <Portfolio />
      <SectionSeparator label="Logs" />
      <Testimonials />
      <SectionSeparator label="Activation" />
      <CTA />
      <SectionSeparator label="Access" />
      <ContactForm />
      <Footer />
    </div>
  );
}
