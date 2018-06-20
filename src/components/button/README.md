# Button

### Usage

```js
import Button from 'components/button';
```

<!-- STORY -->

### Properties

* `onClick` - click callback
* `label` - button text
* `className` - button class name. I suggest to use bootstrap btn-[x] names

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| onClick   | func     | -            | -          |
| label     | string   | -            | -          |
| className | string   | btn-default  | -          |

### Roadmap

```js
import Button from 'components/button';
import styles from 'bootstrap/dist/css/bootstrap.min.css';

render() {
    const click = () => {
        // do somthing
    };
    const label = 'Button label'
  return (
    <Button className={styles.btnDanger} onClick={click}>{label}</Button>
  );
}
```
