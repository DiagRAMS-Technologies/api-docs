import { type NextConfig } from "next";
import { env } from "node:process";

export const LOCALE = "fr-FR";
export const TIME_ZONE = "Europe/Paris";

const baseURL = env.NEXT_PUBLIC_BASE_URL;
const basePath = env.NEXT_PUBLIC_BASE_PATH || "";
const assetPrefix = `${baseURL}${basePath}`;
const allowedDevOrigins = baseURL
  ? [baseURL.replace(/^https?:\/\/(.*)(:[0-9]+)$/, "$1")]
  : [];
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  distDir: "out",
  reactStrictMode: true,
  assetPrefix,
  basePath,
  allowedDevOrigins,
  images: { unoptimized: true },
  env: {
    // Avoid dynamic years
    BUILD_YEAR: new Intl.DateTimeFormat(LOCALE, {
      timeZone: TIME_ZONE,
      year: "numeric",
    }).format(),
  },
};

export default nextConfig;
