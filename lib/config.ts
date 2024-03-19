import YError from "yerror";

export const APP_ENVS = ["local", "staging", "production"] as const;
export type AppEnv = (typeof APP_ENVS)[number];
export type AppConfig = {
  apiURL: string;
  staticFolder: string;
  applicationVersion: string;
  contentSecurityPolicy: string;
};

const applicationEnv: AppEnv =
  (process.env.NEXT_PUBLIC_APP_ENV as AppEnv) || "production";

if (!APP_ENVS.includes(applicationEnv)) {
  throw new YError("E_BAD_APP_ENV", applicationEnv, APP_ENVS);
}

const applicationVersion = process.env.NEXT_PUBLIC_APP_VERSION || "unknown";
// TODO: For security matters, we must check this issue resolution
// https://github.com/vercel/next.js/pull/4943
const configs: Record<AppEnv, AppConfig> = {
  local: {
    apiURL: "http://api.diagrams.localhost:8000/v0",
    staticFolder: "",
    applicationVersion,
    contentSecurityPolicy: `default-src 'self' http://api.diagrams.localhost:8000; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-eval'; img-src 'self' http://api.diagrams.localhost:8000 blob:;`,
  },
  staging: {
    apiURL: "https://api.diagrams-technologies.dev/v0",
    staticFolder: "",
    applicationVersion,
    contentSecurityPolicy: `default-src 'self' https://api.diagrams-technologies.dev; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-eval'; img-src 'self' https://diagrams-pictures-staging.s3.eu-west-3.amazonaws.com blob:;`,
  },
  production: {
    apiURL: "https://api.diagrams-technologies.com/v0",
    staticFolder: "",
    applicationVersion,
    contentSecurityPolicy: `default-src 'self' https://api.diagrams-technologies.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-eval'; img-src 'self' https://diagrams-pictures-production.s3.eu-west-3.amazonaws.com blob:;`,
  },
};

export default configs[applicationEnv] as AppConfig;
