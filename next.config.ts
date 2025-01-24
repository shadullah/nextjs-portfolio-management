import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["res.cloudinary.com"]
  },
  async rewrites() {
    return [
      {
        source: "/projects/:path*",
        destination: "http://localhost:8000/projects/:path*", 
      },
    ];
  },
};

export default nextConfig;
