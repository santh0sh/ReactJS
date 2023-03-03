
import './App.css';
import Button from './components/hooks/Button';
import DataLoader from './components/hooks/DataLoader';
import ButtonComponent from './components/hooks/hoc/ButtonComponent';
import HoverComponent from './components/hooks/hoc/HoverComponent';
import TestHook from './components/hooks/TestHook';
import CompLifeCycle from './components/lifecycle/CompLifeCycle';
import ChildParentInvoke from './components/props_states/ChildParentInvoke';
import StatefulApp from './components/props_states/StatefulApp';
import TextInput from './components/props_states/TextInput';
import { Footer } from './Footer';
import Header from './Header';
import SpaApp from './spa/SpaApp';


function App() {
  const company = "BOA";
  return (
    <div className="App">
      <h1 className='bg-primary text-white'>Welcome to React</h1>
      <Header company={company}/>
  
      {/* <StatefulApp/> */}
      
      {/* <ChildParentInvoke/> */}
      {/* <CompLifeCycle/> */}
      {/* <TextInput/> */}
      {/* <Button/> */}
      {/* <DataLoader/> */}
      {/* <TestHook/> */}
     
      {/* <ButtonComponent/> */}
   
      {/* <HoverComponent/> */}
      <SpaApp/>
      <Footer/>
    </div>
  );
}

export default App;
