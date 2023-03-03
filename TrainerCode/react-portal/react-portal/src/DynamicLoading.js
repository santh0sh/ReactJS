import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'


class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const PageOne = (props) => (
  <DynamicImport load={() => import('./PageOne')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const PageTwo = (props) => (
  <DynamicImport load={() => import('./PageTwo')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const PageThree = (props) => (
  <DynamicImport load={() => import('./PageThree')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

class DynamicLoading extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Page One</Link></li>
            <li><Link to='/PageTwo'>Page Two</Link></li>
            <li><Link to='/PageThree'>PageThree</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={PageOne} />
          <Route path='/PageTwo' component={PageTwo} />
          <Route path='/PageThree' component={PageThree} />
        </div>
      </Router>
    )
  }
}

export default DynamicLoading