import CTA from "../components/CTA";
import AutomationRoadmap from "../components/AutomationRoadmap";
import ContactForm from "../components/ContactForm";
import FaqAccordion from "../components/FaqAccordion";
import GrowthEstimator from "../components/GrowthEstimator";
import IntegrationMatrix from "../components/IntegrationMatrix";
import LocationSection from "../components/LocationSection";
import LongFormContentSection from "../components/LongFormContentSection";
import Portfolio from "../components/Portfolio";
import ProblemSection from "../components/ProblemSection";
import Services from "../components/Services";
import SolutionSection from "../components/SolutionSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import HoliOfferSection from "../components/HoliOfferSection";
import Navbar from "../components/Navbar";
import SectionSeparator from "../components/SectionSeparator";
import Testimonials from "../components/Testimonials";
import VisualEffects from "../components/VisualEffects";
import WhoThisIsFor from "../components/WhoThisIsFor";
import { buildPageMetadata, buildWebPageSchema } from "../lib/seo";

const homeTitle = "Web Development and Automation for Growing Businesses";
const homeDescription =
  "Need WordPress or Next.js web development plus AI-powered automation? We build SEO-ready websites with CRM, WhatsApp, and booking systems to capture and convert more leads.";
const homeKeywords = [
  "web development for businesses",
  "smart automation agency",
  "crm integration services",
  "whatsapp lead automation",
  "ai powered whatsapp automation",
  "ai powered business automation",
  "ai powered product development",
  "best wordpress developer in punjab",
  "best wordpress developer in india",
  "wordpress website developer punjab",
  "wordpress development company india",
  "next js developer india",
  "lead automation agency india",
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

const homeFaqItems = [
  {
    question: "How quickly can we launch a complete website and automation setup?",
    answer:
      "Most projects launch an initial working version in 2-4 weeks depending on pages, integrations, and workflow complexity.",
  },
  {
    question: "Can you work with our existing website and CRM tools?",
    answer:
      "Yes. We can improve your current setup, integrate CRM and WhatsApp flows, and add tracking without rebuilding everything from scratch.",
  },
  {
    question: "Do you handle only websites or complete lead systems?",
    answer:
      "We handle complete systems: website, funnel flow, CRM pipeline, WhatsApp automation, booking workflows, and reporting.",
  },
  {
    question: "How do you ensure SEO is not harmed by design changes?",
    answer:
      "We keep semantic structure, clean headings, crawl-friendly markup, and performance-focused implementation while adding new sections.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main>
        <Hero />
        {/* <div className="cv-auto">
          <SectionSeparator label="Holi Offer" />
          <HoliOfferSection />
        </div> */}
        <div className="cv-auto">
          <SectionSeparator label="Problem" />
          <ProblemSection />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Solution" />
          <SolutionSection />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Roadmap" />
          <AutomationRoadmap />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Services" />
          <Services />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Integrations" />
          <IntegrationMatrix />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Audience" />
          <WhoThisIsFor />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Projection" />
          <GrowthEstimator />
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
          <SectionSeparator label="FAQ" />
          <FaqAccordion
            title="Questions Before You Start"
            subtitle="Clear answers on timelines, integrations, and how our system-driven execution works."
            items={homeFaqItems}
          />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Location" />
          <LocationSection />
        </div>
        <div className="cv-auto">
          <SectionSeparator label="Insights" />
          <LongFormContentSection pageKey="home" />
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
