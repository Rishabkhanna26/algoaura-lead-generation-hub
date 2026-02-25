import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Testimonials from "../../components/Testimonials";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const resultsTitle = "Client Results for Website and Automation Projects";
const resultsDescription =
  "Read verified client feedback on website development, CRM integration, WhatsApp automation, and lead systems delivered by the AlgoAura team with real outcomes.";
const resultsKeywords = [
  "client testimonials",
  "automation reviews",
  "lead generation testimonials",
  "crm automation feedback",
  "business growth success stories",
  "AlgoAura reviews",
];

export const metadata = buildPageMetadata({
  title: resultsTitle,
  description: resultsDescription,
  pathname: "/client-results",
  keywords: resultsKeywords,
});

const resultsSchema = buildWebPageSchema({
  title: resultsTitle,
  description: resultsDescription,
  pathname: "/client-results",
  keywords: resultsKeywords,
});

export default function ClientResultsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Client Results and Testimonials</h1>
        <Testimonials />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
