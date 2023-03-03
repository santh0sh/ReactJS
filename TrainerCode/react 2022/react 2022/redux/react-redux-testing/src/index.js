import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {store} from './store'
import App from './App'

const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
  		<App/>
	</Provider>
	, app);


	/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Hello from './components/hello';

import Clock from './components/clock';


import store from './store';

const component = (
  <div className="network">
    <div className="greeter">
      <Hello.Container />
      <Clock />
    </div>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    {component}
  </Provider>,
  document.getElementById('container'),
);


	*/