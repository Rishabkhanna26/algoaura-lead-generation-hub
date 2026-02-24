import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Portfolio from "../../components/Portfolio";
import Testimonials from "../../components/Testimonials";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const portfolioTitle = "Lead Generation and Automation Case Studies";
const portfolioDescription =
  "Review AlgoAura client outcomes across lead generation, sales funnels, CRM automation, and business growth systems.";
const portfolioKeywords = [
  "lead generation case studies",
  "automation case studies",
  "crm automation results",
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
        <Testimonials />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
