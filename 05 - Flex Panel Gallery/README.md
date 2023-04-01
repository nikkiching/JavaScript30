# Flex Panel Gallery
Explore the concept of flex box and CSS to make a panel gallery.

## Highlight
- `display:flex` Create a flex container
  - for the child items, `flex: 1` means item size take 1 factor of free space
  - can specify `display:flex` on flex items and make it be a nested container
- alignment: `flex-direction: column`, `justify-content: center`, `align-items: center`
- `.panel > *`: direct children of elements matched by `.panel`
  - see [Child_combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator) for reference
  - `.panel > *:first-child`
  - `.panel > *:last-child`
