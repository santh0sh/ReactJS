import React, { Component } from 'react'
import './Lifecycle.css'

class Chats extends Component {
  render () {
    return (
      <React.Fragment>
        {this.props.chatList.map((chat, i) => {
          if (i === 4) {
            // Simulate an error
            throw new Error('I crashed! - Murthy')
          }
          return (
            <li key={i} className='chat-bubble'>
              {chat}
            </li>
          )
        })}
      </React.Fragment>
    )
  }
}

class Lifecycle extends Component {
  chatThreadRef = React.createRef()

/*
  - return an object to update the state of the component
  - this method is called (or invoked) before the 
   component is rendered to the DOM on initial mount.
*/
  static getDerivedStateFromProps (props, state) {
    return {
      points: 1000
    }
  }
  
  // initialize state  without constructor when no props are there
  state = {
    points: 10,
    chatList: ['Murthy Joined', 'Kiran Joined', 'Rama Joined']
  }

  _handleAddChat = () => {
    this.setState(prevState => ({
      chatList: [...prevState.chatList, 'Hello!!!']
    }))
  }

  /*
     right after the render method is called, 
     the getSnapshotBeforeUpdate lifecycle method is called next.

     Use this when you need to grab some information from the DOM
      just after an update is made. i.e. value just before DOM is updated.

      The getSnapshotBeforeUpdate lifecycle method doesn't work on its own.
       It is meant to be used in conjunction with the componentDidUpdate
        lifecycle method.

  */
  getSnapshotBeforeUpdate (prevProps, prevState) {
    if (this.state.chatList > prevState.chatList) {
      const chatThreadRef = this.chatThreadRef.current
      return chatThreadRef.scrollHeight - chatThreadRef.scrollTop
    }
    return null
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const chatThreadRef = this.chatThreadRef.current
      chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot
    }
  }

  render () {
    return (
       <div>
         <p>You've scored {this.state.points} points.</p>
        <section className='App-chat'>
          <p className='chat-header'>
            Football Chat{' '}
            <button className='chat-btn' onClick={this._handleAddChat}>
              Add Chat
            </button>
          </p>
          <ul className='chat-thread' ref={this.chatThreadRef}>
            <Chats chatList={this.state.chatList} />
          </ul>
        </section>
      </div>
    )
  }
}

export default Lifecycle
