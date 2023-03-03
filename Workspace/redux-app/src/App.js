import logo from './logo.svg';
import './App.css';
import Calculator from './calc/containers/Calculator';
import Clock from './calc/containers/Clock';
import UseReducerDemo from './components/UseReducerDemo';
import BankApp from './bank/BankApp';

function App() {
  return (
    <div className="App">
      <h1 className='bg-warning text-danger text-center'>React-Redux Case Study</h1>
      {/* <Calculator/> */}
      <BankApp/>
      <Clock/>
      <UseReducerDemo/>
    </div>
  );
}

export default App;
