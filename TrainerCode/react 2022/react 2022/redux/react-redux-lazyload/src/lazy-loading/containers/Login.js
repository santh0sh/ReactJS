import React, { Component } from 'react'

import './Login.css'

class Login extends Component {
  state = {}
  handleFormInput = evt => {
    const { name, value } = evt.target
    this.setState({
      [name]: [value]
    })
  }

  render () {
    const { username = '', password = '' } = this.state
    const { handleLogin } = this.props
    return (
      <form className='Login' onSubmit={handleLogin}>
        <h1 className="text-center">Bank of America</h1>
        <div className="bg-success">
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          name='username'
          value={username}
          onChange={this.handleFormInput}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          password={password}
          onChange={this.handleFormInput}
          required
        />

        <button type='submit'> Login </button>
        </div>
      </form>
    )
  }
}

export default Login
