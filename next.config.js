/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/pruthivithejan/siparana@master/public/content/**",
      },
    ],
  },
};

module.exports = nextConfig;
