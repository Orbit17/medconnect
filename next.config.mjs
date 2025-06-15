/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // or true if you want to bypass ESLint build errors
  },
  images: {
    domains: ['your-image-domain.com'], // optional, remove if unused
  },
  // other config options here
};

export default nextConfig;
