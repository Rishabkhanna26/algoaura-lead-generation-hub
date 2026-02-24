import CTA from "../../components/CTA";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const contactTitle = "Contact AlgoAura for Lead Generation Automation";
const contactDescription =
  "Talk with AlgoAura about CRM automation, lead generation funnels, WhatsApp automation, and conversion-focused growth systems.";
const contactKeywords = [
  "contact AlgoAura",
  "book automation strategy call",
  "lead generation consultation",
  "crm automation consultation",
  "whatsapp automation consultation",
  "business growth audit",
];

export const metadata = buildPageMetadata({
  title: contactTitle,
  description: contactDescription,
  pathname: "/contact",
  keywords: contactKeywords,
});

const contactSchema = buildWebPageSchema({
  title: contactTitle,
  description: contactDescription,
  pathname: "/contact",
  keywords: contactKeywords,
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">Contact AlgoAura</h1>
        <ContactForm />
        <CTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
