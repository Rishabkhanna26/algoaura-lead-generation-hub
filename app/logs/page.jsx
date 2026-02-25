import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Testimonials from "../../components/Testimonials";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const logsTitle = "Client Testimonials for Automation Projects";
const logsDescription =
  "Read verified client feedback on website development, CRM integration, WhatsApp automation, and lead systems delivered by the AlgoAura team with real outcomes.";
const logsKeywords = [
  "client testimonials",
  "automation reviews",
  "lead generation testimonials",
  "crm automation feedback",
  "business growth success stories",
  "AlgoAura reviews",
];

export const metadata = buildPageMetadata({
  title: logsTitle,
  description: logsDescription,
  pathname: "/logs",
  keywords: logsKeywords,
});

const logsSchema = buildWebPageSchema({
  title: logsTitle,
  description: logsDescription,
  pathname: "/logs",
  keywords: logsKeywords,
});

export default function LogsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Client Logs and Testimonials</h1>
        <Testimonials />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(logsSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
