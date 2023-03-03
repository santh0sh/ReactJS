import React, {useRef} from 'react';

import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function ToastComp() {

  const myToast = useRef(null);

  const showToast = (severityValue, summaryValue, detailValue) => {   
    myToast.current.show(
        {severity: severityValue, summary: summaryValue, detail: detailValue});   
  }

  return (
    <div className="App">
      <h1>Toast Demo by Murthy</h1>    
      <Toast ref={myToast} /> 
      
      <button onClick={() => 
        showToast('success','Success Message','The task was executed successfully.')}>
            Show message</button>
    </div>
  );
}
export default ToastComp