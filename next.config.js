/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  // Image Optimization Configuration
  images: {
    // Enable automatic image optimization
    unoptimized: false,

    // Configure image formats (modern formats for better compression)
    formats: ["image/avif", "image/webp"],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Domains allowed for remote images
    domains: ["images.unsplash.com", "source.unsplash.com"],

    // Cache optimized images for 60 days (in production)
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },

  // Webpack configuration for image handling
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
