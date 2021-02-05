import { API } from './interface/API';
import { persist } from './persist';
import { restore } from './restore';

export const store: API = {
  state: {},
  get: (key: string, defaultValue?: any) => (typeof store.state[key] === 'undefined' ? defaultValue : store.state[key]),
  set: (key: string, value) => {
    store.state[key] = value;
    return store;
  },
  load: (key: string, defaultValue?: any) => {
    restore(key, store, localStorage, defaultValue);
    return store;
  },
  save: (key: string) => persist(key, localStorage, store),
  loadForSession: (key: string, defaultValue?: any) => {
    restore(key, store, sessionStorage, defaultValue);
    return store;
  },
  saveForSession: (key: string) => persist(key, sessionStorage, store),
};
