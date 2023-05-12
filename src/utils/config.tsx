import getConfig from 'next/config';

export type GlobalConfig = {
  publicRuntimeConfig: {
    environment: string;
    assetPrefix: string;
    baseURL: string;
    basePath: string;
  };
};

const config = getConfig() || {};

const { publicRuntimeConfig } = config as GlobalConfig;

export { publicRuntimeConfig };
export default config;