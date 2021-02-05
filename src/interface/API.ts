import { State } from './State';

export interface API {
  state: State;
  get(key: string, defaultValue?: any): any;
  set(key: string, value: any): API;
  load(key: string, defaultValue?: any): API;
  save(key: string): API;
  loadForSession(key: string, defaultValue?: any): API;
  saveForSession(key: string): API;
}
