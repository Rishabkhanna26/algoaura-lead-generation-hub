import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const contactTitle = "Book a Free Website and Automation Consultation";
const contactDescription =
  "Book a free consultation for website development, CRM setup, WhatsApp automation, and lead workflows tailored to your business goals and growth stage.";
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
        <ContactForm
          title={
            <>
              Let&apos;s Build Your <span className="gradient-text">Growth System</span>
            </>
          }
          description="Tell us about your business and we will recommend the best website + automation setup."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
