import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const termsTitle = "Terms of Service";
const termsDescription =
  "Read the service terms for working with AlgoAura, including project scope, responsibilities, and delivery agreements.";
const termsKeywords = [
  "terms of service",
  "service agreement terms",
  "automation services terms",
  "project delivery terms",
  "AlgoAura terms",
];

export const metadata = buildPageMetadata({
  title: termsTitle,
  description: termsDescription,
  pathname: "/terms",
  keywords: termsKeywords,
});

const termsSchema = buildWebPageSchema({
  title: termsTitle,
  description: termsDescription,
  pathname: "/terms",
  keywords: termsKeywords,
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main>
        <section className="pt-32 md:pt-36 section-padding">
          <div className="container-narrow system-card p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-muted-foreground mb-4">
              By using AlgoAura services, you agree to these terms. Service timelines, scope, and
              deliverables are defined in project agreements.
            </p>
            <p className="text-muted-foreground mb-4">
              Clients are responsible for providing accurate information, required access, and timely
              communication for project execution.
            </p>
            <p className="text-muted-foreground mb-4">
              All intellectual property and usage rights are handled as per the signed agreement for
              each project.
            </p>
            <p className="text-muted-foreground">
              For legal questions, contact us at teamalgoaura@gmail.com.
            </p>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
