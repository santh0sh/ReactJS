// npm install react-loadable 
//react.lazy
//customised

import React from 'react'
import Loadable from 'react-loadable';

 const LoadableComponent = Loadable({
  loader: () => import('./profile/Profile'),
  loading: () => <div>Loading Profile component..........Please wait</div>,
});

export  const  Dynamic = () => (
  <LoadableComponent/>
);

