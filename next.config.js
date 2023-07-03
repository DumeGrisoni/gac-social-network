/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnb.artstation.com',
      },
    ],
  },
};

module.exports = nextConfig;
