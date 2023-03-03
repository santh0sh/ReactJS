# Code splitting

Code splitting acts on the principle that loading less code will speed up 
app. when we are building complex dashboard application that
includes the venerable d3 library for graphing data. Users start
complaining because it takes too long to load the login screen.

So, assuming that performance problems can be resolved by less code, how can we
solve this one? 

We could load that on-demand called a dynamic import and the syntax looks like this:

```javascript
import('/some-module.js').then(
  module => {
    // do stuff with the module's exports
  },
  error => {
    // there was some error loading the module...
  },
)
```
React has built-in support for loading modules as React
components. The module must have a React component as the default export, and
you have to use the `<React.Suspense />` component to render a fallback value
while the user waits for the module to be loaded.

```javascript
// smiley-face.js
import * as React from 'react'

function SmileyFace() {
  return <div>😃</div>
}

export default SmileyFace

// app.js
import * as React from 'react'

const SmileyFace = React.lazy(() => import('./smiley-face'))

function App() {
  return (
    <div>
      <React.Suspense fallback={<div>loading...</div>}>
        <SmileyFace />
      </React.Suspense>
    </div>
  )
}
```

## Exercise

Our app has a neat Globe component that shows the user where they are on the
globe. 



### 2. 💯 webpack magic comments

If you're using webpack to bundle your application, then you can use webpack
[magic comments](https://webpack.js.org/api/module-methods/#magic-comments) to
have webpack instruct the browser to prefetch dynamic imports:

```javascript
import(/* webpackPrefetch: true */ './some-module.js')
```

When webpack sees this comment, it adds this to document's `head`:

```javascript
<link rel="prefetch" as="script" href="/static/js/1.chunk.js">
```

With this, the browser will automatically load this JavaScript file into the
browser cache so it's ready ahead of time.

The change itself is minimal, but pull up the DevTools to make sure it's loading
properly (you'll need to uncheck the "Disable cache" button to observe any
changes).

## Notes

Another thing which we won't cover in this workshop, but you should look into
later, is using the `webpackChunkName` magic comment which will allow webpack to
place common modules in the same chunk. This is good for components which you
want loaded together in the same chunk (to reduce multiple requests for multiple
modules which will likely be needed together).


