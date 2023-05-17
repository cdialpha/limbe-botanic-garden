/** @type {import('next').NextConfig} */

const repo = "limbe-botanic-garden";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
