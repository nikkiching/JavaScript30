# Playing with CSS variables with JS
Define CSS variables, and use JS to dinamically alter the values.

## Highlight
- style.[setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)
  - to set a new value for a property on a style object
  - usage: `style.setProperty(name, value)`
  - a.k.a `style.name = "value"`
- element.`dataset`: object of the values of `data-*` attributes
- [Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
  - declare global variables in `:root`
    The root element of a tree. It represent the `<html>` element in HTML
  - Use `var()` function to use custom property
```
//define a variable 'x' in style
:root {
  --x: 10px;
}
// using var(--x) in style
.hl {
  padding: var(--x);
}
```
