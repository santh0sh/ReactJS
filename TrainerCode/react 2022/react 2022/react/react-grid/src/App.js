import logo from './logo.svg';
import './App.css';

import Grid1 from './Grid1'
import Grid2 from './Grid2'
import Grid3 from './Grid3'
import createRowData from "./createRowData";
import Grid4 from './Grid4'
import Grid5 from './Grid5'

function App() {
  const ROW_COUNT = 50;
  return (
    <div className="bg-dark">
      <header className="text-center">
        <img src={logo} className="App-logo" alt="logo" height="75" width="75"/>        
        <h2 class="bg-warning">React 17.x Grid Demo by Murthy</h2>
      </header>
      <section className="bg-light">
        <Grid1/>
        <Grid2/>
        <Grid3 initialRows={createRowData(50)} />
        <Grid4 rows={createRowData(50)}/>
        <Grid5 rows={createRowData(50)} />
      </section>
    <footer className="bg-success text-center">
      <h3>Copyright reserved to DSR Murthy</h3>
    </footer>

    </div>
  );
}

export default App;
