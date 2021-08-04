/*
 * Copyright Edgeless Team, UUP-Dump, and other contributors.
 * Open source under MPL-2.0 license
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export type NumberBoolean = 1 | 0;

export type IUUPDumpAxiosResponse<T extends IUUPDumpResponseContent> = AxiosResponse<T>;

export interface IUUPDumpResponseContent {
  apiVersion: string;
}

export interface IUUPDumpResponse<T extends IUUPDumpResponseContent> {
  response: T;
  jsonApiVersion: string;
}

export interface IUUPDumpVersion extends IUUPDumpResponseContent {}

export interface IUUPDumpListUpdateIdArguments {
  search?: string;
  sortByDate?: NumberBoolean;
}

export interface IUUPDumpListUpdateIdResult extends IUUPDumpResponseContent {
  builds: IUUPDumpUpdateIdListItem;
}

export type IUUPDumpUpdateIdList = IUUPDumpUpdateIdListItem[];

export interface IUUPDumpUpdateIdListItem {
  title: string;
  build: string;
  arch: string;
  create: number;
  uuid: string;
}

export interface IUUPDumpFetchUpdateArguments {
  arch?: string;
  ring?: string;
  flight?: string;
  build?: number;
  sku?: number;
  type?: string;
}

export interface IUUPDumpFetchUpdateResult extends IUUPDumpResponseContent {
  updateId: string;
  updateTitle: string;
  foundBuild: string;
  arch: string;
  fileWrite: string;
  updateArray: IUUPDumpFetchUpdateArrayItem[];
}

export interface IUUPDumpFetchUpdateArrayItem {
  updateId: string;
  updateTitle: string;
  foundBuild: string;
  arch: string;
  fileWrite: string;
}

export interface IUUPDumpGetUpdateArguments {
  id: string;
  lang?: string;
  edition?: string;
  noLinks?: NumberBoolean;
}

export interface IUUPDumpGetUpdateResult extends IUUPDumpResponseContent {
  updateName: string;
  arch: string;
  build: string;
  files: IUUPDumpDownloadSetFiles;
}

export type IUUPDumpDownloadSetFiles = Record<string, IUUPDumpDownloadSetFileMetadata>;

export interface IUUPDumpDownloadSetFileMetadata {
  sha1: string;
  size: string;
  url: string;
  uuid: string;
  expire: string;
  debug: string;
}

export interface IUUPDumpListLangsResult extends IUUPDumpResponseContent {
  langList: string[];
  langFancyNames: IUUPDumpLangFancyNameList;
}

export type IUUPDumpLangFancyNameList = Record<string, string>;

export interface IUUPDumpListEditionsArguments {
  id?: string;
  lang: string;
}

export interface IUUPDumpListEditionsResult extends IUUPDumpResponseContent {
  editionList: string[];
  editionFancyNames: IUUPDumpEditionFancyNameList;
}

export type IUUPDumpEditionFancyNameList = Record<string, string>;

export default class UUPDump {
  private _client: AxiosInstance;
  constructor(
    private _endpoint: string,
    private _axiosConfig: AxiosRequestConfig = {},
  ) {
    this._axiosConfig.baseURL = this._endpoint;
    this._client = axios.create(this._axiosConfig);
  }

  public async getVersion(): Promise<IUUPDumpAxiosResponse<IUUPDumpVersion>> {
    return this._client.get('/');
  }

  public async listUpdateId(
    params: IUUPDumpListUpdateIdArguments,
  ): Promise<IUUPDumpAxiosResponse<IUUPDumpListUpdateIdResult>> {
    return this._client.get('/listid.php', {
      params,
    });
  }

  public async fetchUpdate(
    params: IUUPDumpFetchUpdateArguments,
  ): Promise<IUUPDumpAxiosResponse<IUUPDumpFetchUpdateResult>> {
    return this._client.get('/fetchupd.php', {
      params,
    });
  }

  public async getUpdate(
    params: IUUPDumpGetUpdateArguments,
  ): Promise<IUUPDumpAxiosResponse<IUUPDumpGetUpdateResult>> {
    return this._client.get('/get.php', {
      params,
    });
  }

  public async listLangs(
    id?: string,
  ): Promise<IUUPDumpAxiosResponse<IUUPDumpListLangsResult>> {
    return this._client.get('/listlangs.php', {
      params: {
        id,
      },
    });
  }

  async listEditions(
    params: IUUPDumpListEditionsArguments,
  ): Promise<IUUPDumpAxiosResponse<IUUPDumpListEditionsResult>> {
    return this._client.get('/listeditions.php', {
      params,
    });
  }
}
