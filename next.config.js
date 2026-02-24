/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    deviceSizes: [320, 420, 640, 828, 1080],
    imageSizes: [96, 128, 192, 256, 384],
    qualities: [60, 75],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.algoaura.vercel.app" }],
        destination: "https://algoaura.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
