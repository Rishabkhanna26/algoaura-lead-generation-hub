import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import VisualEffects from "../../components/VisualEffects";
import { buildPageMetadata, buildWebPageSchema } from "../../lib/seo";

const solutionsTitle = "Business Solutions for Website and Lead Automation";
const solutionsDescription =
  "Review the core solutions we deliver: conversion-ready websites, CRM pipelines, WhatsApp follow-ups, booking workflows, and lead tracking dashboards.";
const solutionsKeywords = [
  "business solutions",
  "automation solutions",
  "crm integration services",
  "funnel optimization",
  "website growth systems",
  "lead automation services",
  "ai powered business solutions",
  "whatsapp automation solutions india",
  "wordpress and crm solutions",
  "best wordpress developer in punjab",
];

export const metadata = buildPageMetadata({
  title: solutionsTitle,
  description: solutionsDescription,
  pathname: "/solutions",
  keywords: solutionsKeywords,
});

const solutionsSchema = buildWebPageSchema({
  title: solutionsTitle,
  description: solutionsDescription,
  pathname: "/solutions",
  keywords: solutionsKeywords,
});

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <main className="pt-32 md:pt-36">
        <h1 className="sr-only">AlgoAura Business Solutions</h1>
        <Services />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }}
        />
      </main>
      <Footer />
    </div>
  );
}
