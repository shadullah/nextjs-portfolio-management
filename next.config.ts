import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["res.cloudinary.com"]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "https://nestjs-crud-ruddy.vercel.app/:path*", 
  //     },
  //   ];
  // },
};

export default nextConfig;
