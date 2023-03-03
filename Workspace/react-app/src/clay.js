import React from "react";
import "@clayui/css/lib/css/atlas.css";

import {Text} from '@clayui/core';//yarn add @clayui/core

function Clay() {

  return (
    <div className="container bg-light">
      <div className="sheet">
        <div className="sheet-header">
          <h1 className="sheet-title bg-info text-white">
          <div>
             <Text size={11}>Clay UI Demonstration in React</Text>
             <Text as="p" color="muted">By DSR Murthy</Text>
           </div>
            </h1>
          <div className="sheet-text">
          Clay is an extensive Component Library<br/>
            Learn more from clayui.com <br/>
            Clay is modeled after Lexicon's experience language
            </div>
        
        </div>       
       
                
        <div className="sheet-section"><Footer/></div>
      </div>
    </div>
  );
}

const Footer=()=>{
    return (
    <h3 className="bg-primary text-white">Copyright reserved to Sandy</h3>
    )
}

export default Clay