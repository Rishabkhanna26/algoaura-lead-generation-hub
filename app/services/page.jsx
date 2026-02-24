import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const servicesTitle =
  "Lead Generation, CRM, Funnel and WhatsApp Automation Services";
const servicesDescription =
  "Explore AlgoAura services including custom web development, CRM automation, WhatsApp automation, AI workflows, and funnel optimization.";
const servicesKeywords = [
  "lead generation services",
  "crm automation service",
  "whatsapp automation services",
  "sales funnel optimization services",
  "ai chatbot automation services",
  "custom web development services",
  "business process automation",
];

export const metadata = buildPageMetadata({
  title: servicesTitle,
  description: servicesDescription,
  pathname: "/services",
  keywords: servicesKeywords,
});

const servicesSchema = buildWebPageSchema({
  title: servicesTitle,
  description: servicesDescription,
  pathname: "/services",
  keywords: servicesKeywords,
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Services</h1>
        <Services />
        <CTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
