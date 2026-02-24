import { seoSiteUrl } from "../lib/seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you"],
      },
    ],
    sitemap: `${seoSiteUrl}/sitemap.xml`,
    host: seoSiteUrl,
  };
}
