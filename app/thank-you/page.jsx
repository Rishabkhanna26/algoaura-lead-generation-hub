import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import WhatsAppLogo from "../../components/WhatsAppLogo";

export const metadata = {
  title: "Thank You",
  description: "Thank you for contacting AlgoAura. We will reach out within 12-24 hours.",
  alternates: {
    canonical: "/thank-you",
  },
};

function parseName(value) {
  const single = Array.isArray(value) ? value[0] : value;
  const cleaned = String(single || "")
    .trim()
    .replace(/[^a-zA-Z0-9 .'-]/g, "")
    .slice(0, 60);

  return cleaned || "There";
}

const whatsappHref =
  "https://wa.me/918059649659?text=Hi%20AlgoAura,%20I%20just%20submitted%20a%20form.";
const calendlyHref = "https://calendly.com/teamalgoaura/30min";

export default async function ThankYouPage({ searchParams }) {
  const params = await searchParams;
  const name = parseName(params?.name);

  const steps = [
    "We review your requirements",
    "We prepare a strategy",
    "We contact you",
    "We build your automation system",
  ];

  const benefits = [
    "Custom automation systems aligned with your exact lead flow",
    "Fast response and clear implementation roadmap",
    "Growth-first execution with measurable outcomes",
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />

      <main className="pt-32 md:pt-36 pb-16 px-4 md:px-8">
        <div className="container-narrow max-w-5xl mx-auto space-y-8">
          <section className="system-card rounded-3xl p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[hsl(142,70%,45%)]/15 text-[hsl(142,70%,45%)] mb-5">
              <BadgeCheck size={30} />
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              ✅ Thank You, <span className="gradient-text">{name}</span>!
            </h1>
            <p className="terminal-text text-base md:text-lg text-muted-foreground mt-4">
              Your request has been received.
            </p>
            <p className="terminal-text text-base md:text-lg text-muted-foreground mt-1 inline-flex items-center gap-2">
              <Clock3 size={16} className="text-primary" />
              We&apos;ll contact you within 12-24 hours.
            </p>
          </section>

          <section className="grid lg:grid-cols-2 gap-6">
            <div className="system-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">What Happens Next</h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="mt-0.5 w-7 h-7 rounded-full bg-primary/15 text-primary text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="system-card rounded-3xl p-7 md:p-8 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">Continue The Conversation</h2>
              <p className="text-muted-foreground terminal-text">
                If you want to speed things up, message us directly now.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base"
              >
                <WhatsAppLogo className="w-[18px] h-[18px]" />
                Chat on WhatsApp Now
              </a>
              <a
                href={calendlyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base hover:border-primary/30 transition-colors"
              >
                <PhoneCall size={18} />
                Book a Free Strategy Call
              </a>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="system-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">
                Why Choose <span className="gradient-text">AlgoAura</span>
              </h2>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-[hsl(142,70%,45%)] mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-border bg-secondary/25 p-4">
                <p className="text-sm terminal-text text-foreground">
                  &quot;AlgoAura built our full lead flow and follow-up automation. Our conversions
                  improved within weeks.&quot;
                </p>
                <p className="text-xs text-muted-foreground mt-2">- Growth Client</p>
              </div>
            </div>

            <div className="system-card rounded-3xl p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-5">Contact Backup</h2>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-secondary/25 p-4">
                  <p className="text-xs terminal-text uppercase tracking-wide text-muted-foreground mb-1">
                    Phone
                  </p>
                  <a href="tel:+918059649659" className="text-lg font-semibold hover:text-primary">
                    +91 87087 67499
                  </a>
                </div>
                <div className="rounded-xl border border-border bg-secondary/25 p-4">
                  <p className="text-xs terminal-text uppercase tracking-wide text-muted-foreground mb-1">
                    Email
                  </p>
                  <a href="mailto:hello@algoaura.com" className="text-lg font-semibold hover:text-primary">
                    hello@algoaura.com
                  </a>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-muted-foreground terminal-text text-sm">
                <ShieldCheck size={16} className="text-primary" />
                In case WhatsApp does not open, use phone or email above.
              </div>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground terminal-text text-sm">
                <Sparkles size={16} className="text-primary" />
                One goal: move quickly from form to real conversation.
              </div>
            </div>
          </section>

          <div className="text-center">
            <a
              href="/"
              className="terminal-text text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
