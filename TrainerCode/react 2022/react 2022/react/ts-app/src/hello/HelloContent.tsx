import * as React from 'react';

interface IHelloContentProps {
	name: string;
}

export default class HelloContent extends 
           React.Component<IHelloContentProps, any> {
    constructor(props: IHelloContentProps) {
        super(props);
    }

	public render() {
		return (
            <div className="result">
                Hello { this.props.name }!
            </div>
        );
	}
}