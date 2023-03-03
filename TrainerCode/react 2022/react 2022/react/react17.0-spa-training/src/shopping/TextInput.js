import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component{
	constructor(props,context){
		super(props,context)
		this.state={inputText:''}
	}
	handleChange(event){
		this.setState({
			inputText:event.target.value
		})
	}
	render(){
	return	(
		<div>
			<div>Search for a Product</div>
			<input type="text" className="form-control" 
			placeholder="Search for a product here"
			value={this.state.inputText}
			onChange={this.handleChange.bind(this)}	/>
			<TextDisplay text={this.state.inputText}/>
		</div>
		)	
	}
}
export default TextInput