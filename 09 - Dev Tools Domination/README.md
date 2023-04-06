# Practice Dev Tools

- Console
  - use `%c` to output with css style 
    - `console.log('%c message', 'font-size:50px;background:red');`
  - `.warn`
  - `.error`
  - `.assert(condition, 'warning message shows when assertion failed')`
  - `.clear` clear console
  - When viewing dom element, `.dir` vs. `.log` 
    - `.dir` output the list of properties
    - `.log` output the object in string representation
  - `.count` count the output and its printed frequency
  - calculate timing for something with tag 'xxx'
    - `.time('xxx')`
    - `.timeEnd('xxx')`
  - grouping messages with tag 'xxx'
    - `.groupCollapsed('xxx')`
    - `.groupEnd('xxx')`
  - `.table(lists)`
