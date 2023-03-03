# Window large lists with react-virtual

React is really optimized at updating the DOM during the commit phase.

Unfortunately, there's not much React can do if you simply need to make **huge**
updates to the DOM. And as fast as React is in the reconciliation phase, if it
has to do that for tens of thousands of elements that's going to take some time
("perf death by a thousand cuts"). 

In addition, our own code that runs during
the "render" phase may be fast, but if you have to do that tens of thousands of
times, you're going to have a hard time being fast on low-end devices.

There's no UI that reveals these problems more than dataviz, grids, tables, and
lists with lots of data. There's only so much you can do before we have to
conclude that we're simply running too much code (or running the same small
amount of code too many times).

But here's the trick. Often you don't need to actually display tens of thousands
of list items, table cells, or data points to users. So if that content isn't
displayed, then you can kinda cheat by doing some "lazy" just-in-time rendering.

So let's say you had a grid of data that rendered 100 columns and had 5000 rows.
Do you really need to render all 500000 cells for the user all at once? They
certainly won't see or be able to interact with all of that information at once.

You'll only display a "window" of 10 columns by 20 rows (so 200 cells for
example), and the rest you can delay rendering until the user starts scrolling
around the grid.

Maybe you can render a few cells outside the view just in case they're a really
fast scroller. In any case, you'll save yourself a LOT of computational power by
doing this "lazy" just-in-time rendering.

This is a concept called "windowing" and in some cases it can really speed up
your components that render lots of data. There are various libraries in the
React ecosystem for solving this problem. One is `react-virtual`. 

`react-virtual`'s `useVirtual` hook:

```jsx
// before
function MyListOfData({items}) {
  return (
    <ul style={{height: 300}}>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
```

```jsx
// after
function MyListOfData({items}) {
  const listRef = React.useRef()
  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    estimateSize: React.useCallback(() => 20, []),
    overscan: 10,
  })

  return (
    <ul ref={listRef} style={{display: 'relative', height: 300}}>
      <li style={{height: rowVirtualizer.totalSize}} />
      {rowVirtualizer.virtualItems.map(({index, size, start}) => {
        const item = items[index]
        return (
          <li
            key={item.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: size,
              transform: `translateY(${start}px)`,
            }}
          >
            {item.name}
          </li>
        )
      })}
    </ul>
  )
}
```

In summary, rather than iterating over all the items in your list, you simply
tell `useVirtual` how many rows are in your list, give it a callback that it can
use to determine what size they each should be, and then it will give you back
`virtualItems` and a `totalSize` which you can then use to only render the
items the user should be able to see within the window.

 Definitely give it a look to speed up your lists.


