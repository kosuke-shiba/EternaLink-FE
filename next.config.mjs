//import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  output: 'standalone',
  
  env: {
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE,
  },
};

export default nextConfig;
