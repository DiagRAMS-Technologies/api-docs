/** @type {import('next').NextConfig} */

const buildPrefix = process.env.NODE_ENV === "production" ? "" : "";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://docs.diagrams-technologies.com"
    : "http://docs.diagrams.localhost:3000";

const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  publicRuntimeConfig: {
    environment: process.env.NODE_ENV,
    buildPrefix,
    baseURL,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  basePath: process.env.NODE_ENV === "production" ? "" : "",
};

export default config;
