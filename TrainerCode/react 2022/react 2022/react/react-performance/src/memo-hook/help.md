# useMemo for expensive calculations

## Background

React hooks are amazing. Being able to put all the logic and state management
within a function component (the "render method" equivalent for a class) allows
for mind blowing composability.

This power comes with an unfortunate limitation that calculations performed
within render will be performed every single render, regardless of whether the
inputs for the calculations change. For example:

```jsx
function Distance({x, y}) {
  const distance = calculateDistance(x, y)
  return (
    <div>
      The distance between {x} and {y} is {distance}.
    </div>
  )
}
```

If that component's parent re-renders, or if we add some unrelated state to the
component and trigger a re-render, we'll be calling `calculateDistance` every
render which could lead to a performance bottleneck.

This is why we have the `useMemo` hook from React:

```jsx
function Distance({x, y}) {
  const distance = React.useMemo(() => calculateDistance(x, y), [x, y])
  return (
    <div>
      The distance between {x} and {y} is {distance}.
    </div>
  )
}
```

This allows us to put that calculation behind a function which is only called
when the result actually needs to be re-evaluated (when the dependencies
change). In the example above the array `[x, y]` are called "dependencies" and
React knows that so long as those do not change, the result of our function will
be the same as the last time the function was called.

`useMemo` (and its sibling `useCallback`) is nuanced and should not be applied
in all cases. Read more about this in
[When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)



### 2. 💯 Put getItems into a Web Worker


It's awesome that we reduced how often we have to call `getItems`,
unfortunately, on low-powered devices, `getItems` is still quite slow when it
actually _does_ need to run and we'd like to speed it up. So the product manager
👨‍💼 decided that we need to ditch `match-sorter` in favor of a simple string
`includes` because the experience is not fast enough (even though `match-sorter`
does provide a much superior UX). "No!" You argue. "We must have the better UX!"
There may be ways to optimize `match-sorter` itself, but let's try throwing this
all into a web worker instead...

Since you've got some extra time, update the import from
`import {getItems} from '../filter-cities'` to
`import {getItems} from '../workerized-filter-cities'` and then you need to
handle the fact that getItems is asynchronous. (💰 You don't need to make many
changes, and _all_ of your changes will be in your exercise file).

Because working with web workers is asynchronous, you'll probably want to use
the `useAsync` utility found in `src/utils.js` (💰 take a peak. It has an
example for how to use it).




