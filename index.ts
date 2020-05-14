export interface LessifyReactI18nextConfig {
  space: SpaceConfig;
}

export interface SpaceConfig {
  spaceId: string;
  environment: string;
  apiKey: string;
  beta?: boolean;
}

export function LessifyReactI18next(config: LessifyReactI18nextConfig): any {
  if (config.space.spaceId == null || config.space.spaceId === '') {
    throw new Error('Lessify Configuration Space can\'t be empty');
  }
  if (config.space.environment == null || config.space.environment === '') {
    throw new Error('Lessify Configuration Environment can\'t be empty');
  }
  if (config.space.apiKey == null || config.space.apiKey === '') {
    throw new Error('Lessify Configuration API Key can\'t be empty');
  }
  const url = (config.space.beta == null || config.space.beta === false) ? 'https://api.lessify.io' : 'https://dev-api.lessify.io';
  return {
    loadPath: `${url}/v1/spaces/${config.space.spaceId}/environments/${config.space.environment}/translations.{{lng}}.json`,
    crossDomain: true,
    withCredentials: true,
    customHeaders: {
      authorization: `Bearer ${config.space.apiKey}`,
    },
  }

}
