import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const accessTitle = "Request Your Website and Automation Strategy";
const accessDescription =
  "Submit your details to request a custom website and automation strategy. We map CRM, WhatsApp, booking, and lead workflows to match your business goals.";
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
        <ContactForm
          title={
            <>
              Request <span className="gradient-text">System Access</span>
            </>
          }
          description="Share your business details and we will contact you with the right growth automation plan."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(accessSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
