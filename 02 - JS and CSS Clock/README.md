# JS & CSS Clock
Use CSS to do the rotation transfrom of the clock hand.

## Highlight
- Set the trnasform-origin: `transform-origin:100%`
  - The default roation centroid is the centroid of the element. When change to 100%, the origin has been changed to the rightmost.
- Set the transform rotate on the clock face: `transform: rotate(90deg)`
  - the 0 degree is begin at the left of main axis. By given a 90 degree rotate, the hand can start rotate from the up direction.
- `transition-timing-function`: control the animation timing. e.g. `ease`
- Temporarily set the transition to `'all 0s'` to fix the animation when the hand is rotated to the origin
