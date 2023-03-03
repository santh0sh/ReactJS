import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Murthy's Calculator</h1>
      </header>
      <Home/>
      <Clock/>
      
    </div>
  );
}

export default App;
