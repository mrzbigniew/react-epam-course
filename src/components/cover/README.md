# Cover

### Usage

```js
import Cover from 'components/cover';
```

<!-- STORY -->

### Information's

Cover component is integrated with redux store component. Ypu will have top provide store with key spinner.

#### Show cover with spinner
```js
import store from '../myStore';
store.dispatch({
  action: SET_SPINNER_STATE,
  value: true
})
```

#### Hide cover with spinner
```js
import store from '../myStore';
store.dispatch({
  action: SET_SPINNER_STATE,
  value: false
})
```

### Properties

* `store` - redux store object

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| store     | object   |              | +          |

