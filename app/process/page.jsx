import Footer from "../../components/Footer";
import LongFormContentSection from "../../components/LongFormContentSection";
import Navbar from "../../components/Navbar";
import Process from "../../components/Process";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const processTitle = "Our Website and Automation Delivery Process";
const processDescription =
  "Learn our step-by-step process for planning, building, launching, and optimizing your website, CRM, WhatsApp automation, and booking funnel systems for growth.";
const processKeywords = [
  "automation deployment process",
  "growth system implementation",
  "crm setup process",
  "sales funnel deployment",
  "automation onboarding process",
  "lead generation workflow",
];

export const metadata = buildPageMetadata({
  title: processTitle,
  description: processDescription,
  pathname: "/process",
  keywords: processKeywords,
});

const processSchema = buildWebPageSchema({
  title: processTitle,
  description: processDescription,
  pathname: "/process",
  keywords: processKeywords,
});

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Delivery Process</h1>
        <Process />
        <LongFormContentSection pageKey="process" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
