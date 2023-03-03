import React from 'react'
import ThemeContext from './theme'

const DemoButton = (props) => (
  <React.Fragment>
    <ThemeContext.Consumer>
      {(theme) => (
        <div>
          <button className={props.theme} {...props}>
            Submit :{props.theme}
          </button>
          <div
            className={props.theme}
            style={{ height: '300px', width: '300px' }}
          >
            test
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  </React.Fragment>
)

export default DemoButton
