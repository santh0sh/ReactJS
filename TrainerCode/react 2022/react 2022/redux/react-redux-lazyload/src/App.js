import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycle from './comp-life-cycle/session1/Lifecycle'
import ErrorBoundary from './comp-life-cycle/session1/ErrorBoundary'

import Main from './Main'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <h1>SPA in React by DSR Murthy</h1>
      </header>
            
       <section>
          <div>
            {
                <ErrorBoundary>
                   <Lifecycle></Lifecycle>
                </ErrorBoundary>
             }
            
       </div>
       </section>

      <footer>
        <h2>Copyright Reserved to Murthy</h2>
      </footer>
    </div>
  );
}

export default App;
