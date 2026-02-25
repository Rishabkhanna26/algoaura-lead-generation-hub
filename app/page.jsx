import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import Portfolio from "../components/Portfolio";
import ProblemSection from "../components/ProblemSection";
import Services from "../components/Services";
import SolutionSection from "../components/SolutionSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionSeparator from "../components/SectionSeparator";
import Testimonials from "../components/Testimonials";
import VisualEffects from "../components/VisualEffects";
import WhoThisIsFor from "../components/WhoThisIsFor";
import { buildPageMetadata, buildWebPageSchema } from "../lib/seo";

const homeTitle = "Lead Generation, CRM and WhatsApp Automation Agency";
const homeDescription =
  "Web development plus smart automation for growing businesses. We build modern websites with CRM, WhatsApp, booking, and lead automation.";
const homeKeywords = [
  "web development for businesses",
  "smart automation agency",
  "crm integration services",
  "whatsapp lead automation",
  "booking automation setup",
  "high converting websites",
  "lead tracking dashboard",
  "growth system for startups",
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
          <SectionSeparator label="Problem" />
          <ProblemSection />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Solution" />
          <SolutionSection />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Services" />
          <Services />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Audience" />
          <WhoThisIsFor />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Results" />
          <Portfolio />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Testimonials" />
          <Testimonials />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Get Started" />
          <ContactForm />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Final Step" />
          <CTA />
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
