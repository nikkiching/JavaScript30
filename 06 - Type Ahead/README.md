# Ajax and Search Cities

## Highlight
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) api
  - return a Promise with `Response` Object
  - `response.json()` also return a Pormise
- `RegExp`
  - `new RegExp(pattern, 'gi)`
    - `g` global
    - `i` case insensitive

- Format numbers with comma
  - In the lecture, regex is used: `x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');`
  - I use number's built-in `toLocaleString` method to do the work: `parseInt(population).toLocaleString('en-US');`
