import React from 'react';
import TextInput from './TextInput';

export class SearchBar extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="col-md-3"></div>
				<br/><br/><br/>
				<div className="col-md-12">
					<form>
						<div>
							<TextInput className="form-control"/>
						</div>
					</form>
				</div>
				<div className="col-md-4"></div>
			</div>
		);
	}
}