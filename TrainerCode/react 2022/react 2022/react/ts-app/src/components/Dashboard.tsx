/// reference interface.d.ts
import * as React from 'react';
import HelloWorld from '../hello/HelloWorld'


export default class Dashboard extends React.Component<any, any> {
 
  	public render() {
		return (
            <div className="container">
              
                <HelloWorld defaultName="Enter name"/>
            </div>
        );
	}
}
