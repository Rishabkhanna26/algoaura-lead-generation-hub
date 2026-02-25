import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";
import { BadgeCheck, BriefcaseBusiness, Cpu, UserRound } from "lucide-react";

const aboutTitle = "About AlgoAura - Web Development and Automation Partner";
const aboutDescription =
  "Meet the team behind AlgoAura. We build websites, CRM systems, and automation setups that help new and growing businesses scale.";
const aboutKeywords = [
  "about AlgoAura",
  "full stack developer automation",
  "crm and whatsapp automation specialist",
  "zoho calendly integration expert",
  "business growth automation partner",
  "website and crm setup expert",
];

export const metadata = buildPageMetadata({
  title: aboutTitle,
  description: aboutDescription,
  pathname: "/about",
  keywords: aboutKeywords,
});

const aboutSchema = buildWebPageSchema({
  title: aboutTitle,
  description: aboutDescription,
  pathname: "/about",
  keywords: aboutKeywords,
});

export default function AboutPage() {
  const skills = [
    "Full-stack website development with modern performance standards",
    "CRM setup and pipeline automation for lead management",
    "WhatsApp automation and follow-up workflows",
    "Calendly integration for zero-friction booking",
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <section className="section-padding">
          <div className="container-narrow">
            <div className="text-center mb-12 animate-fade-up">
              <span className="terminal-text text-primary text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2">
                <UserRound size={16} /> About AlgoAura
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mt-3">
                Your <span className="gradient-text">Business Growth Partner</span>
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="system-card p-7 md:p-8 animate-fade-up">
                <h2 className="text-2xl font-heading font-bold mb-3">Who We Are</h2>
                <p className="text-muted-foreground text-base">
                  We are full-stack developers and automation specialists focused on helping new
                  and growing businesses build a complete lead-generation system.
                </p>
              </div>
              <div className="system-card p-7 md:p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-2xl font-heading font-bold mb-3">Our Mission</h2>
                <p className="text-muted-foreground text-base">
                  Help businesses move from manual lead handling to a reliable growth system that
                  captures, follows up, and converts leads automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container-narrow">
            <div className="system-card p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 inline-flex items-center gap-2">
                <Cpu size={22} className="text-primary" /> What We Specialize In
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-start gap-2">
                    <BadgeCheck size={18} className="text-primary mt-0.5" />
                    <p className="text-muted-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="system-card p-7 md:p-8 mt-6">
              <h2 className="text-2xl font-heading font-bold mb-3 inline-flex items-center gap-2">
                <BriefcaseBusiness size={20} className="text-primary" /> Experience and Approach
              </h2>
              <p className="text-muted-foreground">
                We work with startups, new business owners, and offline businesses going online.
                Every project is built around one goal: generate better leads and convert them with
                less manual effort.
              </p>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
