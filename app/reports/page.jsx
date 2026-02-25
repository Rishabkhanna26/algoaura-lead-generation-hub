import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Portfolio from "../../components/Portfolio";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const reportsTitle = "Performance Reports for Automation Projects";
const reportsDescription =
  "Analyze project results across web development and automation, including lead quality, response time, funnel conversion, and workflow performance metrics.";
const reportsKeywords = [
  "performance reports",
  "lead generation metrics",
  "funnel performance dashboard",
  "automation roi report",
  "conversion analytics case studies",
  "business growth data",
];

export const metadata = buildPageMetadata({
  title: reportsTitle,
  description: reportsDescription,
  pathname: "/reports",
  keywords: reportsKeywords,
});

const reportsSchema = buildWebPageSchema({
  title: reportsTitle,
  description: reportsDescription,
  pathname: "/reports",
  keywords: reportsKeywords,
});

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Performance Reports</h1>
        <Portfolio />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reportsSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
