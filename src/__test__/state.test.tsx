import { store } from '../state';

describe('state', () => {
  it('is defined', () => {
    expect(store).toBeDefined();
    expect(store.state).toBeDefined();
    expect(store.state).toEqual({});
    expect(store.set).toBeInstanceOf(Function);
    expect(store.get).toBeInstanceOf(Function);
    expect(store.load).toBeInstanceOf(Function);
    expect(store.save).toBeInstanceOf(Function);
    expect(store.loadForSession).toBeInstanceOf(Function);
    expect(store.saveForSession).toBeInstanceOf(Function);
  });

  it('stores a value in localStorage', () => {
    store.set('foo', { bar: 123 });
    store.save('foo');

    expect(JSON.parse(localStorage.getItem('foo') || '').bar).toEqual(123);
  });

  it('stores a value in sessionStorage', () => {
    store.set('foo2', { bar: 123 });
    store.saveForSession('foo2');

    expect(JSON.parse(sessionStorage.getItem('foo2') || '').bar).toEqual(123);
  });

  it('gets a value from sessionStorage', () => {
    store.loadForSession('foo2');

    expect(store.get('foo2').bar).toEqual(123);
  });

  it('gets a value from sessionStorage', () => {
    store.load('foo');

    expect(store.get('foo').bar).toEqual(123);
  });

  it('gets a value from sessionStorage that is not set', () => {
    store.loadForSession('foo3', { bar: 0 });

    expect(store.get('foo3').bar).toEqual(0);
  });

  it('gets a value from localStorage that is not set', () => {
    store.load('foo4', { bar: 0 });

    expect(store.get('foo4').bar).toEqual(0);
  });

  it('gets a value that is not set', () => {
    expect(store.get('foo5', 0)).toEqual(0);
  });
});
