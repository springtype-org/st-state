import { API } from './interface/API';

export const restore = (key: string, store: API, api: Storage, defaultValue?: any) => {
  store.set(key, JSON.parse(api.getItem(key) || '""') || defaultValue);
};
