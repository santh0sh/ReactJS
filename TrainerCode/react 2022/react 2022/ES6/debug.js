import { _ } from 'lodash';

let print = i => {
  debugger;
  console.log(i);
}

_.times(5, i => print(i));

print("done");

// npm install lodash --save
// npm install -g babel-node-debug
// npm install -g babel-cli 


//install babel-node and $ babel-node debug debug.js

// babel-node-debug main.js --presets es2015
