import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";

export const metadata = {
  title: "Terms of Service",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
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
            For legal questions, contact us at hello@algoaura.com.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
