import React from 'react'
import './CompoundApp.css'
import Expandable from './components/Expandable'

function CompoundApp () {
  return (
    <div className='App'>
      {/* ==================
     uncomment the next lines to see first example
     ================== */}

      {/* <Expandable>
        <Expandable.Header>React hooks</Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>Hooks are awesome</Expandable.Body>
      </Expandable> */}

      <Expandable>
        <Expandable.Header style={{ color: 'red', border: '1px solid teal' }}>
          Reintroducing React
        </Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>
          <img
            src='https://i.imgur.com/qpj4Y7N.png'
            style={{ width: '250px' }}
            alt='reintroducing react book cover'
          />
          <p style={{ opacity: 0.7 }}>
            This book is so f*cking amazing! <br />
            <a
              href='https://leanpub.com/reintroducing-react'
              target='_blank'
              rel='noopener noreferrer'
            >
              Go get it now.
            </a>
          </p>
        </Expandable.Body>
      </Expandable>
    </div>
  )
}

export default CompoundApp
