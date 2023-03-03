
import PrimeApp from './prime_react/PrimeApp'
import TestComp from './prime_react/TestComp'
import ToastComp from './prime_react/ToastComp'
function App(){
  return(
    <div className="container">
      <h1 className="bg-warning text-center text-danger">
        React 17.x  SPA case study for Benz
      
     <TestComp/>
     <ToastComp/>
       
      </h1>

    </div>
  ) 
  
}
export default App