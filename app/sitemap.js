import { absoluteUrl } from "../lib/seo";

const indexedRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/modules", priority: 0.8, changeFrequency: "weekly" },
  { path: "/protocol", priority: 0.7, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
  { path: "/reports", priority: 0.7, changeFrequency: "weekly" },
  { path: "/logs", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.9, changeFrequency: "weekly" },
  { path: "/access", priority: 0.8, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return indexedRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
