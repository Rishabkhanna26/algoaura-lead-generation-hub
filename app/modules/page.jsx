import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const modulesTitle = "Growth Modules for Lead and CRM Automation";
const modulesDescription =
  "Discover the AlgoAura growth modules including web systems, automation core, lead acquisition layers, and AI-powered workflows.";
const modulesKeywords = [
  "growth modules",
  "automation modules",
  "crm integration module",
  "funnel optimization module",
  "ai intelligence module",
  "website engine module",
];

export const metadata = buildPageMetadata({
  title: modulesTitle,
  description: modulesDescription,
  pathname: "/modules",
  keywords: modulesKeywords,
});

const modulesSchema = buildWebPageSchema({
  title: modulesTitle,
  description: modulesDescription,
  pathname: "/modules",
  keywords: modulesKeywords,
});

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Growth Modules</h1>
        <Services />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(modulesSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
