import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import Heading from './components/Heading';
import StatefulApp from './components/propsstates/StatefulApp';
import TextInput from './components/propsstates/TextInput'
import ChildParentInvoke from './components/intercomp/ChildParentInvoke';
import UsingRefs from './components/intercomp/UsingRefs';
import CompLifeCycle from './components/lifecycle/CompLifeCycle';
import WeatherComponent from './components/lifecycle/WeatherComponent';
import Buttton from './components/hooks/Buttton';
import DataLoader from './components/hooks/DataLoader';
import TestuseFetch from './components/hooks/TestuseFetch';
import { getDefaultNormalizer } from '@testing-library/react';
import UseReducerDemo from './components/hooks/UseReducerDemo';


//presentation
function App() {
  return (
    <div>
      <Heading company="Bank of America"/>      
      <section className="container">
    
      <UseReducerDemo/>

      </section>      
      <Footer/>    
    </div>
  );
}

export default App;


//dsrmurthysoftware@gmail.com