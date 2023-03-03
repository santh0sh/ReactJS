import React, { Component } from 'react'
import withIncrement from './withIncrement'
class HoverComponent extends Component {
  render() {
    return (
      <div>
          const {count,increment}=this.props
          <h2 onMouseOver={increment}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default  withIncrement( HoverComponent)

/*

class ButtonComponent extends Component {
    render() {
        return (
            <div>
                const {count, increment}=this.props
                <button onClick={increment}>clicked {count} times</button>
            </div>
        )
    }
}

export default withIncrement(ButtonComponent)
*/