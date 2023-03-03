# Optimize context value

## Background

The way that context works is that whenever the provided value changes from one
render to another, it triggers a re-render of all the consuming components
(which will re-render whether or not they're memoized).



```jsx
const CountContext = React.createContext()

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider value={value} {...props} />
}
```

Every time the `<CountProvider />` is re-rendered, the `value` is brand new, so
even though the `count` value itself may stay the same, all component consumers
will be re-rendered.

This can be problematic in certain scenarios. 

The quick and easy solution to this problem is to memoize the value that you
provide to the context provider:

```jsx
const CountContext = React.createContext()

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = React.useMemo(() => [count, setCount], [count])
  return <CountContext.Provider value={value} {...props} />
}
```

