import nextI18NextConfig from './next-i18next.config.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...nextI18NextConfig,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
