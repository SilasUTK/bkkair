/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  async rewrites() {
    const apiTarget = process.env.API_PROXY_TARGET || "http://localhost:5001";

    return [
      {
        source: "/api/bookings/:path*",
        destination: `${apiTarget}/api/bookings/:path*`,
      },
      {
        source: "/api/admin/:path*",
        destination: `${apiTarget}/api/admin/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
