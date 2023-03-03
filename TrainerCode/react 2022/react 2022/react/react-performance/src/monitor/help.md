# Production performance monitoring

## Background

We should always ship fast experiences to our users, but sometimes something
slips through our PR review process and our users start having a slow
experience. Unless they complain to us, we have no way of knowing that things
are going so slow for them. User complaints is not a great policy for quality
control.

Because we can't make every user install the React DevTools and profile the app
for us as they interact with it, it would be nice if we could somehow track some
of the render times and get that information sent to our servers for us to
monitor.

Well, the React team has created an API specifically for this. It doesn't give
us quite as much information as the React DevTools do, but it does give us some
useful information.

📜 Read up on the capabilities of the `<React.Profiler />` component here:
https://reactjs.org/docs/profiler.html

Here's a basic usage example:

```jsx
<App>
  <Profiler id="Navigation" onRender={onRenderCallback}>
    <Navigation {...props} />
  </Profiler>
  <Main {...props} />
</App>
```

The callback is called with the following arguments

```javascript
function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions, // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
}
```

**It's important to note** that unless you build your app using
`react-dom/profiling` and `scheduler/tracing-profiling` this component won't do
anything.



## Extra Credit

### 1. 💯 use the experimental trace API



The `interactions` argument that our `onRenderCallback` accepts are for tracing
specific interactions. Interactions like button clicks or HTTP responses, etc.
Using this helps us answer more specific questions about what's causing things
to be slow.

Here's a basic example of how to use this API:

```javascript
// ...
import {unstable_trace as trace} from 'scheduler/tracing'
// ...

function Greeting() {
  const [greeting, setGreeting] = React.useState()

  function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    trace('form submitted', performance.now(), () => {
      setGreeting(`Hello ${name}`)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" />
      </form>
      <div>{greeting}</div>
    </div>
  )
}
```

If you render that component within a `<React.Profiler />` then when the form is
submitted, that interaction will be included.




