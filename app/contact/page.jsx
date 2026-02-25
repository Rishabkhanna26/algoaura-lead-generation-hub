import ContactForm from "../../components/ContactForm";
import FaqAccordion from "../../components/FaqAccordion";
import Footer from "../../components/Footer";
import LocationSection from "../../components/LocationSection";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { absoluteUrl, buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

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

const contactLocationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AlgoAura",
  url: absoluteUrl("/contact"),
  image: absoluteUrl("/algoaura_logo.webp"),
  map: "https://maps.app.goo.gl/AW5grbVnSfvEQB3f9",
  email: "teamalgoaura@gmail.com",
  areaServed: "Worldwide",
};

const contactFaqItems = [
  {
    question: "What happens after I submit the form?",
    answer:
      "We review your business details, map opportunities, and contact you with a practical strategy and implementation plan.",
  },
  {
    question: "Can I get support if I am just starting out?",
    answer:
      "Yes. We work with early-stage businesses and help build a scalable foundation from website to CRM and automation.",
  },
  {
    question: "Do you offer only consultation or full execution too?",
    answer:
      "We offer both. You can start with strategy and move into complete execution with our team.",
  },
];

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
        <section className="section-padding pt-0">
          <div className="container-narrow">
            <div className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">What Happens Next</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "We review your current setup and goals",
                  "We prepare a custom growth system strategy",
                  "We connect and launch your execution roadmap",
                ].map((step, index) => (
                  <div key={step} className="glass-card p-4 rounded-xl">
                    <p className="terminal-text text-xs text-primary mb-2">Step {index + 1}</p>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <LocationSection compact />
        <FaqAccordion
          title="Contact and Consultation FAQ"
          subtitle="Quick answers before you book your strategy call."
          items={contactFaqItems}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLocationSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
