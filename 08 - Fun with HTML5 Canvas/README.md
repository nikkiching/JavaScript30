# Canvas

## Highlight
[Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- `canvas.getContext('2d')` get 2D render context
- `ctx.lineJoin`
- `ctx.lineCap`
- `ctx.strokeStyle`
- `ctx.lineWidth`
- Draw a line
  - `ctx.beginPath()`
  - Begin `ctx.moveTo(x1,y1)`
  - End at `ctx.lineTo(x2,y2)`
  - Draw `ctx.stroke()`
- Blend mode `ctx.globalCompositeOperation = 'multiply'`

HSL
- color, saturation, lightness
  - `hsl(${hue}, 100%, 50%)`;

Mouse Event
- `mousemove`
- `mousedown`
- `mouseup`
- `mouseout`
