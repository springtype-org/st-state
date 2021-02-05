import { API } from './interface/API';

export const persist = (key: string, api: Storage, store: API) => {
  api.setItem(key, JSON.stringify(store.state[key]));
  return store;
};
