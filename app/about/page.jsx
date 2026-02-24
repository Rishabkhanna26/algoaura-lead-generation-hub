import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProblemSection from "../../components/ProblemSection";
import Process from "../../components/Process";
import SectionSeparator from "../../components/SectionSeparator";
import SolutionSection from "../../components/SolutionSection";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const aboutTitle = "About AlgoAura Lead Generation and Automation Agency";
const aboutDescription =
  "Learn how AlgoAura designs lead generation, CRM automation, and funnel systems that help businesses scale with predictable growth.";
const aboutKeywords = [
  "about AlgoAura",
  "lead generation experts",
  "crm automation specialists",
  "automation agency team",
  "growth system architects",
  "digital automation consultants",
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
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">About AlgoAura</h1>
        <ProblemSection />
        <SectionSeparator label="Recovery" />
        <SolutionSection />
        <SectionSeparator label="Protocol" />
        <Process />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
