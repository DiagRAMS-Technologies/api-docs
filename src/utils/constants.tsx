export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;
export const ASSET_PREFIX = `${BASE_URL}${BASE_PATH || ""}`;
// For future use: https://stackoverflow.com/questions/76691710/custom-metadata-depending-on-the-language-in-next-js
export const LANGUAGE = "fr";
export const ORGANISATION_LEGAL_NAME = "DiagRAMS";
export const ORGANISATION_NAME = "DiagRAMS";
export const ORGANISATION_PRIMARY_COLOR = "#005eb8";
export const LOCALE = "fr-FR";
export const TIME_ZONE = "Europe/Paris";
export const PUBLISHER = "DiagRAMS";
export const DOMAIN_NAME = "docs.diagrams-technologies.com";
export const TWITTER_ACCOUNT = "diagrams_tech";
// The `BUILD_YEAR` env var is always set via NextJS config
export const BUILD_YEAR = parseInt(process.env.BUILD_YEAR as string, 10);
