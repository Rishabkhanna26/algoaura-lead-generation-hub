import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const privacyTitle = "Privacy Policy for Website and Lead Data";
const privacyDescription =
  "Read how AlgoAura collects, stores, and protects contact and business data submitted through our website forms, consultations, and automation workflows.";
const privacyKeywords = [
  "privacy policy",
  "data protection policy",
  "lead form privacy",
  "website privacy policy",
  "AlgoAura privacy",
];

export const metadata = buildPageMetadata({
  title: privacyTitle,
  description: privacyDescription,
  pathname: "/privacy",
  keywords: privacyKeywords,
});

const privacySchema = buildWebPageSchema({
  title: privacyTitle,
  description: privacyDescription,
  pathname: "/privacy",
  keywords: privacyKeywords,
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main>
        <section className="pt-32 md:pt-36 section-padding">
          <div className="container-narrow system-card p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-4">
              AlgoAura respects your privacy and protects your data. We only collect information
              needed to deliver our services and improve your experience.
            </p>
            <p className="text-muted-foreground mb-4">
              Information submitted through forms may include contact details and business context.
              We use this information to respond to inquiries, deliver requested services, and
              provide support.
            </p>
            <p className="text-muted-foreground mb-4">
              We do not sell personal information. We may use trusted third-party tools for
              analytics, communication, and infrastructure.
            </p>
            <p className="text-muted-foreground">
              For privacy questions, contact us at teamalgoaura@gmail.com.
            </p>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
