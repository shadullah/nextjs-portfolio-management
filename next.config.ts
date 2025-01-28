import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["res.cloudinary.com"]
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8000/:path*", 
      },
    ];
  },
};

export default nextConfig;
