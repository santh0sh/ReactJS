import React, { Component } from 'react'
import ThemeContext from './theme'
import DemoButton from './Button'

class DemoComponent extends Component {
  state = {
    theme: 'dark',
    themes: ['light', 'dark'],
  }
  handleChange(event) {
    this.setState({ theme: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <h1>usage of context api</h1>
        <h3>current theme:{this.state.theme}</h3>
        <select
          value={this.state.theme}
          onChange={this.handleChange.bind(this)}
        >
          {this.state.themes.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <ThemeContext.Provider value={this.state.theme}>
                <DemoButton theme={this.state.theme} />
        </ThemeContext.Provider>
      </React.Fragment>
    )
  }
}

export default DemoComponent
