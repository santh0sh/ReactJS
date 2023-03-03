import * as React from 'react';

interface IHelloFormProps {
	name: string;
	handleChange(event: any): void;
}

export default class HelloForm extends React.Component<IHelloFormProps, any> {
    constructor(props: IHelloFormProps) {
        super(props);
    }

	public render() {
		return (
            <div>
               Name :  <input 
                    value={ this.props.name }
                    onChange={this.props.handleChange}/>
            </div>
        );
	}
}