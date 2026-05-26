/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  async rewrites() {
    const apiTarget = process.env.API_PROXY_TARGET || "http://localhost:5001";

    return [
      {
        source: "/api/:path*",
        destination: `${apiTarget}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;