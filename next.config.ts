import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/:path*", // This should match the path used in the frontend.
        destination: "http://localhost:8000/projects/:path*", // This is your backend endpoint.
      },
    ];
  },
};

export default nextConfig;
