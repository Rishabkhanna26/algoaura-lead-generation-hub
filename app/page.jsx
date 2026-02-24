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
import { buildPageMetadata, buildWebPageSchema } from "../lib/seo";

const homeTitle = "Lead Generation, CRM and WhatsApp Automation Agency";
const homeDescription =
  "AlgoAura builds lead generation systems, CRM automation, WhatsApp automation, and high-converting funnels for startups and growing businesses.";
const homeKeywords = [
  "lead generation agency",
  "crm automation services",
  "whatsapp automation agency",
  "sales funnel automation",
  "conversion optimization services",
  "custom website development",
  "business automation company",
  "startup growth systems",
  "ai chatbot automation",
  "AlgoAura",
];

export const metadata = buildPageMetadata({
  title: homeTitle,
  description: homeDescription,
  pathname: "/",
  keywords: homeKeywords,
});

const homeSchema = buildWebPageSchema({
  title: homeTitle,
  description: homeDescription,
  pathname: "/",
  keywords: homeKeywords,
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        />
      </main>
    </div>
  );
}
