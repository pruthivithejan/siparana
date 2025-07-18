/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remove CDN patterns since we're using static imports
    // This allows Next.js to optimize local images at build time
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      // Keep CDN as fallback only
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/pruthivithejan/siparana@master/public/content/**",
      },
    ],
  },
};

module.exports = nextConfig;
