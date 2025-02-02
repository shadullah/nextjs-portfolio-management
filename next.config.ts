import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["res.cloudinary.com"]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/projects/:path*",
  //       destination: "https://nestjs-crud-ruddy.vercel.app/projects/:path*", 
  //     },
  //   ];
  // },
};

export default nextConfig;
