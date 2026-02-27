import Footer from "../../components/Footer";
import LongFormContentSection from "../../components/LongFormContentSection";
import Navbar from "../../components/Navbar";
import Portfolio from "../../components/Portfolio";
import ProjectShowcase from "../../components/ProjectShowcase";
import Testimonials from "../../components/Testimonials";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const portfolioTitle = "Website and Automation Case Studies with Results";
const portfolioDescription =
  "See real projects where AlgoAura improved lead generation using WordPress/Next.js websites, CRM workflows, AI-powered WhatsApp automation, and booking systems.";
const portfolioKeywords = [
  "lead generation case studies",
  "automation case studies",
  "crm automation results",
  "ai powered automation product case study",
  "whatsapp automation project portfolio",
  "wordpress development portfolio india",
  "nextjs business website portfolio",
  "sales funnel success stories",
  "client growth results",
  "conversion optimization portfolio",
];

export const metadata = buildPageMetadata({
  title: portfolioTitle,
  description: portfolioDescription,
  pathname: "/portfolio",
  keywords: portfolioKeywords,
});

const portfolioSchema = buildWebPageSchema({
  title: portfolioTitle,
  description: portfolioDescription,
  pathname: "/portfolio",
  keywords: portfolioKeywords,
});

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">Portfolio and Case Studies</h1>
        <Portfolio />
        <ProjectShowcase />
        <Testimonials />
        <LongFormContentSection pageKey="portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
