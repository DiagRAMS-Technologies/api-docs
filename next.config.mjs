/** @type {import('next').NextConfig} */

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://docs.diagrams-technologies.com/"
    : "http://docs.diagrams.localhost:3000";
const basePath = '';
const assetPrefix = `${baseURL}${basePath}`;

const config = {
  output: 'export',
  trailingSlash: false,
  distDir: 'out',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  publicRuntimeConfig: {
    environment: process.env.NODE_ENV,
    baseURL,
    basePath,
    assetPrefix,
  },
  assetPrefix,
  basePath,
};

export default config;
