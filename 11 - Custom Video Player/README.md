# Video player
Implement a custom video player.

## Highlight
- [Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
  - The video element embeds a media player which supports video playback into the document.
  - `.paused` boolean represent whether it's playing
  - `.currentTime` 
  - `.duration` float. media's total length in seconds
  - event
    - `click`
    - `play`
    - `paused`
    - `timeupdate`
      - `progress` could be the same effect, but it doesn't work when I try this
- CSS style
  - `style.flexBasis` is referred to `flex-basis`
- What does the term 'scrub' mean:
  - quickly navigate an audio file, an interaction in which users drag a cursor or playhead across a segment of a waveform to hear it.

## TODO
- I found a bug that while in the fullscreen mode, the toggle play doesn't work when click on the video 
