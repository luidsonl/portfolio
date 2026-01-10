/** @type {import('next').NextConfig} */


const basePath = '/portfolio';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: `${basePath}/`,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
