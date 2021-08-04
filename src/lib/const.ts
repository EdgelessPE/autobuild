import { resolve } from 'path';

export const ROOT_PATH = resolve(__dirname, '..');
export const BIN_PATH = resolve(ROOT_PATH, 'bin');
export const CACHE_PATH = resolve(ROOT_PATH, 'cache');

export const UUPDUMP_ENDPOINT = 'https://api.uupdump.net/';
export const WB2_RELEASES_API = 'https://api.github.com/repos/slorelee/WimBuilder2/releases';

export const WB2_EDGELESS_SCRIPT_DIR = './Projects/WIN10XPE/zz-Edgeless/source';
export const WB2_DEST = resolve(CACHE_PATH, 'WimBuilder2');
export const WB2_DL_SAVE = resolve(CACHE_PATH, 'WimBuilder2.7z');
export const WB2_SCRIPTS_PATH = resolve(BIN_PATH, 'WimBuilder_Scripts');

export const LF2CRLF_CMDLINE = ['cmd.exe', '/c', resolve(BIN_PATH, 'LF2CRLF', 'LF2CRLF.cmd')];
export const UUP_CMDLINE = ['cmd.exe', '/c', resolve(BIN_PATH, 'UUPConverter', 'uup_download_windows.cmd')];
export const WB2_CMDLINE_ARGS = (source_wim: string) => [
  '--build',
  '--verbose',
  '--close-ui',
  '--wait',
  '--preset',
  'edgeless',
  '--source-wim',
  source_wim,
  '--source-index',
  1,
];
