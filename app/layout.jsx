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
    default: "AlgoAura | Lead Generation and Automation Agency",
    template: "%s | AlgoAura",
  },
  description:
    "Lead generation, CRM automation, WhatsApp automation, and conversion systems that grow your business on autopilot.",
  keywords: [
    "lead generation",
    "business automation",
    "CRM automation",
    "sales funnels",
    "whatsapp automation",
    "web development",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AlgoAura",
    title: "AlgoAura | Lead Generation and Automation Agency",
    description:
      "Lead generation, CRM automation, WhatsApp automation, and conversion systems that grow your business on autopilot.",
    images: [
      {
        url: "/algoaura_logo.webp",
        width: 900,
        height: 600,
        alt: "AlgoAura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlgoAura | Lead Generation and Automation Agency",
    description:
      "Lead generation, CRM automation, WhatsApp automation, and conversion systems that grow your business on autopilot.",
    images: ["/algoaura_logo.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const schemaGraph = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AlgoAura",
    url: siteUrl,
    logo: `${siteUrl}/algoaura_logo.webp`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@algoaura.com",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AlgoAura",
    url: siteUrl,
    description:
      "Lead generation, CRM automation, WhatsApp automation, and conversion systems that grow your business on autopilot.",
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
                var loaded = false;
                var timeoutId = null;
                var events = ["pointerdown", "keydown", "touchstart", "scroll"];

                function cleanup() {
                  if (timeoutId) window.clearTimeout(timeoutId);
                  for (var i = 0; i < events.length; i += 1) {
                    window.removeEventListener(events[i], onInteraction);
                  }
                }

                function loadAnalytics() {
                  if (loaded) return;
                  loaded = true;
                  cleanup();

                  window.dataLayer = window.dataLayer || [];
                  window.gtag = window.gtag || function () {
                    window.dataLayer.push(arguments);
                  };

                  var script = document.createElement("script");
                  script.async = true;
                  script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZRH8WT8MTV";
                  script.onload = function () {
                    window.gtag("js", new Date());
                    window.gtag("config", "G-ZRH8WT8MTV");
                  };

                  document.head.appendChild(script);
                }

                function onInteraction() {
                  loadAnalytics();
                }

                for (var i = 0; i < events.length; i += 1) {
                  window.addEventListener(events[i], onInteraction, { passive: true });
                }

                timeoutId = window.setTimeout(loadAnalytics, 3500);
              })();
            `,
          }}
        />
        <LoaderGate>{children}</LoaderGate>
      </body>
    </html>
  );
}
