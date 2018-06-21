# Results item

## Usage

```js
import ResultsItem from 'components/results-item';

render() {
    return (
        <ResultItem poster_path={poster_path} title={title} release_year={release_year} genre={genre} onClick={onClick}></ResultsItem>
    )
}
```

<!-- STORY -->

### Properties

* `poster_path` - path for movie thumb image
* `title` - movie tittle
* `release_year` - movie release year
* `genre` - movie genre
* `onClick` - click handler

| propName      | propType | defaultValue | isRequired |
| ---------     | -------- | ------------ | ---------- |
| poster_path   | func     | -            | +          |
| title         | string   | -            | +          |
| genre         | string   | -            | +          |
| onClick       | func     | -            | -          |
| genre         | string   | -            | +          |
