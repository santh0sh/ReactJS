import logo from './logo.svg';
import './App.css';
//import Demo from './lazy-load/demo'
//import Demo from './memo-hook/demo'
import Demo1 from './context/demo'
//import Demo from './monitor/demo'


function App() {
  return (
    <div className="bg-dark">
      <header className="text-center">
        <img src={logo} className="App-logo" alt="logo" height="75" width="75"/>        
        <h2 class="bg-warning">React 17.x Performance App   by Murthy</h2>
      </header>
      <section className="bg-light">
        <Demo1></Demo1>

      </section>
    <footer className="bg-success text-center">
      <h3>Copyright reserved to DSR Murthy</h3>
    </footer>

    </div>
  );
}

export default App;
