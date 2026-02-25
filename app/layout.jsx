import "./globals.css";
import { JetBrains_Mono, Manrope } from "next/font/google";
import LoaderGate from "../components/LoaderGate";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://algoaura.vercel.app"
).replace(/\/+$/, "");

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Web Development and Automation for Growing Businesses | AlgoAura",
    template: "%s | AlgoAura",
  },
  description:
    "Need a modern website that converts leads? AlgoAura builds SEO-friendly websites with CRM, WhatsApp, and booking automation to grow your business faster.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AlgoAura",
    title: "Web Development and Automation for Growing Businesses | AlgoAura",
    description:
      "Need a modern website that converts leads? AlgoAura builds SEO-friendly websites with CRM, WhatsApp, and booking automation to grow your business faster.",
    images: [
      {
        url: "/algoaura_logo.webp",
        width: 1200,
        height: 630,
        alt: "AlgoAura preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development and Automation for Growing Businesses | AlgoAura",
    description:
      "Need a modern website that converts leads? AlgoAura builds SEO-friendly websites with CRM, WhatsApp, and booking automation to grow your business faster.",
    images: ["/algoaura_logo.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const schemaGraph = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AlgoAura",
    url: siteUrl,
    logo: `${siteUrl}/algoaura_logo.webp`,
    sameAs: ["https://maps.app.goo.gl/AW5grbVnSfvEQB3f9"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "teamalgoaura@gmail.com",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AlgoAura",
    url: siteUrl,
    description:
      "Need a modern website that converts leads? AlgoAura builds SEO-friendly websites with CRM, WhatsApp, and booking automation to grow your business faster.",
  },
];

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable}`}
    >
      <body suppressHydrationWarning>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (window.localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.add('light');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <script
          id="ga4-deferred"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (window.__algoauraGaSetup) return;
                window.__algoauraGaSetup = true;

                var loaded = false;
                var gaId = "G-ZRH8WT8MTV";
                var events = ["scroll", "click", "mousemove", "touchstart", "keydown", "pointerdown"];

                function cleanup() {
                  for (var i = 0; i < events.length; i += 1) {
                    window.removeEventListener(events[i], onInteraction);
                  }
                }

                function loadAnalytics() {
                  if (loaded) return;
                  if (document.getElementById("ga4-script")) {
                    loaded = true;
                    cleanup();
                    return;
                  }
                  loaded = true;
                  cleanup();

                  window.dataLayer = window.dataLayer || [];
                  window.gtag = window.gtag || function () {
                    window.dataLayer.push(arguments);
                  };
                  window.gtag("js", new Date());
                  window.gtag("config", gaId);

                  var script = document.createElement("script");
                  script.id = "ga4-script";
                  script.async = true;
                  script.src = "https://www.googletagmanager.com/gtag/js?id=" + gaId;

                  document.head.appendChild(script);
                }

                function onInteraction() {
                  loadAnalytics();
                }

                for (var i = 0; i < events.length; i += 1) {
                  window.addEventListener(events[i], onInteraction, { passive: true, once: true });
                }
              })();
            `,
          }}
        />
        <LoaderGate>{children}</LoaderGate>
      </body>
    </html>
  );
}
