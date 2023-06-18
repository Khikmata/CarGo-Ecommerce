/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
