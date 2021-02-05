<h1 align="center">SpringType: st-state</h1>

> Nano library for client-side state management and persistency

[![Gitter](https://badges.gitter.im/springtype-official/springtype.svg)](https://gitter.im/springtype-official/springtype?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

<h2 align="center">Purpose</h2>

This is an exremely tiny, yet powerful library for global state management. `st-state` can also save and load state from/to `sessionStorage` and `localStorage`.

<h2 align="center">Features</h2>

- ✅ Abstracts the HTML5 `local/sessionStorage` API
- ✅ Tiny: `202 bytes` (best, brotli) - `324 bytes` (worst, umd, gz)
- ✅ Zero dependencies
- ✅ First class TypeScript support
- ✅ 100% Unit Test coverage

<h2 align="center">How to</h2>

This is how using `st-state` looks like:

```tsx
import { tsx, render, Ref } from 'springtype';
import { $ } from 'st-query';
import { store } from 'st-state';

const RANDOM_NUMBERS = 'randomNumbers';

const RandomNumbersList = () => {
  return <fragment>
    {state.get(RANDOM_NUMBERS).map((randomNumber) => <p>{randomNumber}</p>)}
  </fragment>
}

const App = () => {

  const randomNumberListRef: Ref = {};

  // remember randomNumbers generated before
  const defaultRandomNumbers = store.load(RANDOM_NUMBERS, []);

  // current randomNumbers state, possibly initialized by remembered ones
  const randomNumbers: Array<number> = store.get(RANDOM_NUMBERS);

  const onGenerateRandomNumber = () => {

    // updating the state locally
    randomNumbers.push(Math.random());

    // setting the state gobally
    store.set(RANDOM_NUMBERS, randomNumbers);

    // also persisting the state for re-visits
    store.save(RANDOM_NUMBERS);

    // re-render the UI
    $(randomNumberListRef.current).html(<RandomNumbersList />);
  }

  return (
    <fragment>
      <h3>Random numbers:</h3>

      <div ref={randomNumberListRef}>
        <RandomNumbersList />
      </div>

      <button onClick={onGenerateRandomNumber}>
        Generate random number
      </button>
    </fragment>
  );
};
render(<App />);
```

<h2 align="center">API</h2>

The following contract is made between the webapp and `st-state`:

```typescript
export interface State {
  [key: string]: any;
}

export interface API {
  state: State;
  get(key: string, defaultValue?: any): any;
  set(key: string, value: any): API;
  load(key: string, defaultValue?: any): any;
  save(key: string): API;
  loadForSession(key: string, defaultValue?: any): any;
  saveForSession(key: string): API;
}
```

<h2 align="center">Backers</h2>

Thank you so much for supporting us financially! 🙏🏻😎🥳👍

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/17221813?v=4&s=150">
        </br>
        <a href="https://github.com/jsdevtom">Tom</a>
      </td>
    </tr>
  <tbody>
</table>

<h2 align="center">Maintainers</h2>

`st-state` is brought to you by:

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/454817?v=4&s=150">
        </br>
        <a href="https://github.com/kyr0">Aron Homberg</a>
      </td>
    </tr>
  <tbody>
</table>

<h2 align="center">Contributing</h2>

Please help out to make this project even better and see your name added to the list of our
[CONTRIBUTORS.md](./CONTRIBUTORS.md) :tada:
