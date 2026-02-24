import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const accessTitle = "Request Access to Your Growth Automation System";
const accessDescription =
  "Submit an access request to start your custom lead generation, CRM automation, and WhatsApp automation system with AlgoAura.";
const accessKeywords = [
  "request system access",
  "automation onboarding form",
  "lead generation setup request",
  "crm automation contact form",
  "whatsapp automation inquiry",
  "growth system consultation",
];

export const metadata = buildPageMetadata({
  title: accessTitle,
  description: accessDescription,
  pathname: "/access",
  keywords: accessKeywords,
});

const accessSchema = buildWebPageSchema({
  title: accessTitle,
  description: accessDescription,
  pathname: "/access",
  keywords: accessKeywords,
});

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">Request Access</h1>
        <ContactForm />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(accessSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
