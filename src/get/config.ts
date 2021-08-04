export enum EBuildSourceYType {
  Keyword = 'keyword',
  Id = 'id',
  Fetch = 'fetch',
}

export interface IBuilderConfig {
  download_url: string;
  build_params: string[];
}

export interface IUserConfigItem {
  build: IBuilderConfig;
}

export type TUserConfig = IUserConfigItem[];
