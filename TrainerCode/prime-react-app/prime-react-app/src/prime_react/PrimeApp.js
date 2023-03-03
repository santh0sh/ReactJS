import { Card } from "primereact/card";
import ActivityCard from "./Acitivity";

import React from 'react'
import { Toast } from 'primereact/toast';


import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';

import './PrimeApp.css'
import ToastComp from "./ToastComp";
import SliderDemo from "./sliderDemo";
import TestComp from "./TestComp";
class PrimeApp extends React.Component {
render() {
  return (
    <div className="App">
        <ToastComp/>
      <SliderDemo/>
      <TestComp/>        
      </div>
  );
 }
}
export default PrimeApp;