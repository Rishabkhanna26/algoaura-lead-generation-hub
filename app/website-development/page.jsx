import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const websiteDevTitle = "High-Converting Website Development Services";
const websiteDevDescription =
  "Get a fast, SEO-ready website built for lead generation. We design conversion-focused pages, clear funnels, and scalable architecture for growing businesses.";
const websiteDevKeywords = [
  "website development services",
  "high converting website design",
  "seo friendly web development",
  "nextjs business website",
  "lead generation website development",
];

export const metadata = buildPageMetadata({
  title: websiteDevTitle,
  description: websiteDevDescription,
  pathname: "/website-development",
  keywords: websiteDevKeywords,
});

const websiteDevSchema = buildWebPageSchema({
  title: websiteDevTitle,
  description: websiteDevDescription,
  pathname: "/website-development",
  keywords: websiteDevKeywords,
});

const websiteFaqItems = [
  {
    question: "Do you only build new websites or also improve existing ones?",
    answer:
      "We do both. We can rebuild from scratch or optimize your current site for speed, SEO structure, and conversion flow.",
  },
  {
    question: "Will the website be optimized for mobile users?",
    answer:
      "Yes. Every page is built mobile-first with responsive layouts, clean spacing, and conversion-focused UX.",
  },
  {
    question: "Do you include SEO-friendly structure in development?",
    answer:
      "Yes. We implement semantic headings, crawlable architecture, technical metadata, internal links, and performance optimization.",
  },
  {
    question: "How is this connected to lead generation?",
    answer:
      "We build your pages around clear user paths, offer clarity, strong CTAs, and integration-ready forms connected to CRM and automation.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <section className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-balance">
              Website Development That <span className="gradient-text">Drives Conversions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-5">
              We build modern websites designed for growth, not just design. Every section is
              structured to improve clarity, trust, and lead action rate.
            </p>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container-narrow grid lg:grid-cols-2 gap-6">
            <article className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                What We Build Into Every Website
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>Conversion-focused hero and offer sections</li>
                <li>Lead capture forms aligned to user intent</li>
                <li>Clear service explanation and trust signals</li>
                <li>SEO-friendly page structure and metadata</li>
                <li>Fast loading architecture with clean performance standards</li>
              </ul>
            </article>

            <article className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Technical Foundation
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We use a modern stack for speed, maintainability, and long-term SEO readiness.
                  The architecture is designed for scalable content and connected automation.
                </p>
                <p>
                  Every build includes semantic HTML, clean heading hierarchy, proper metadata,
                  canonical consistency, and mobile-first implementation.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow">
            <div className="system-card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
                Website-to-Lead Execution Flow
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "Traffic lands on offer-focused pages",
                  "Visitors submit forms or CTA actions",
                  "Leads are passed to CRM and tagged",
                  "Automation starts follow-up instantly",
                ].map((item, index) => (
                  <div key={item} className="glass-card p-4 rounded-xl">
                    <p className="terminal-text text-xs text-primary mb-2">Phase {index + 1}</p>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqAccordion
          title="Website Development FAQ"
          subtitle="Important points to know before starting your website project."
          items={websiteFaqItems}
        />

        <section className="section-padding pt-0">
          <div className="container-narrow">
            <div className="system-card text-center py-12 px-6 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance">
                Need a Website That Generates <span className="gradient-text">Better Leads?</span>
              </h2>
              <a href="/contact" className="gradient-btn inline-flex mt-7 px-8 py-3.5 rounded-xl text-base">
                Book Free Consultation
              </a>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteDevSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
