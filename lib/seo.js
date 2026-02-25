const defaultSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://algoaura.vercel.app"
).replace(/\/+$/, "");

export const seoSiteUrl = defaultSiteUrl;
export const seoSiteName = "AlgoAura";
export const seoDefaultImage = "/algoaura_logo.webp";

export function absoluteUrl(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${seoSiteUrl}${normalizedPath}`;
}

export function buildPageMetadata({
  title,
  description,
  pathname,
  image = seoDefaultImage,
  noindex = false,
  type = "website",
}) {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type,
      url: absoluteUrl(pathname),
      siteName: seoSiteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${seoSiteName} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
          },
        },
  };
}

export function buildWebPageSchema({
  title,
  description,
  pathname,
  keywords = [],
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(pathname),
    isPartOf: {
      "@type": "WebSite",
      name: seoSiteName,
      url: absoluteUrl("/"),
    },
    inLanguage: "en",
    keywords: keywords.join(", "),
  };
}
