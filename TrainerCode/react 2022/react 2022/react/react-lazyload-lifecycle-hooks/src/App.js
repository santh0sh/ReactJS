import logo from './logo.svg';
import './App.css';
import LifeCycle from './comp-life-cycle/Lifecycle'
import ErrorBoundary from './comp-life-cycle/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
     
     <section>
          <ErrorBoundary>
          <LifeCycle/>
          </ErrorBoundary>
      
           
     </section>
   
    </div>
  );
}

export default App;
