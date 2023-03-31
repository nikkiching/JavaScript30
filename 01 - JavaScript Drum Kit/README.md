# Drum Kit
Use keyboard or simply click on the button and play your own music!

## Highlight
- Demonstrate key `keydown` event and event listener.
- Register transition event `transitionend`
- Select element by `data-key`
  - noted the `data-` attribute in html
- How to add/remove tag to class
  - `element.classList.add('xxx')`
  - `element.classList.remove('xxx')`

## Misc
- audio element
  - reset time: `audio.currentTime = 0`
- css
  - [flexBox](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)
    - `justify-content:center` horizontally aligned (main axis)
    - `align-items:center` vertically aligned (cross axis)
  ```
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  ```
  - [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition): specify " property name | duration | timing function | delay "
    - `transition: all .07s ease;`
