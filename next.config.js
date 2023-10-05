/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true
  },
  publicRuntimeConfig: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
