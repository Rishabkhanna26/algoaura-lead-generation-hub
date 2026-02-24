import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Process from "../../components/Process";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const protocolTitle = "Automation Deployment Protocol and Process";
const protocolDescription =
  "See the AlgoAura deployment process for planning, building, and optimizing lead generation systems, CRM setups, and funnel automation.";
const protocolKeywords = [
  "automation deployment process",
  "growth system implementation",
  "crm setup process",
  "sales funnel deployment",
  "automation onboarding process",
  "lead generation workflow",
];

export const metadata = buildPageMetadata({
  title: protocolTitle,
  description: protocolDescription,
  pathname: "/protocol",
  keywords: protocolKeywords,
});

const protocolSchema = buildWebPageSchema({
  title: protocolTitle,
  description: protocolDescription,
  pathname: "/protocol",
  keywords: protocolKeywords,
});

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Deployment Protocol</h1>
        <Process />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(protocolSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
