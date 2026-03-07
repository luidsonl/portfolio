/** @type {import('next').NextConfig} */

const nextConfig: import("next").NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
