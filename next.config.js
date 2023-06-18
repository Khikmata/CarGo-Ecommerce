/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio'],
    formats: ['image/webp', 'image/avif']
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
