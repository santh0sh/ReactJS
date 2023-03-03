import React, { Component } from 'react'

import TextDisplay  from './TextDisplay'

export default class TextInput extends Component {
    constructor(props) {
        super(props)
        this.state = { inputText: 'Murthy' }

    }

    handleChange(event) {
        this.setState({ inputText: event.target.value })
    }
    render() {
        return (
            <div>
                Company: <input type="text" id="text" />
                <br>
                </br>
                data : <input type="text" value="Bank of America" />
                <br />
                Enter userName:
                <input type="text" value={this.state.inputText}
                    onChange={(event) => this.handleChange(event)} />

                {this.state.inputText ? console.log("Valid") : console.log("Invalid Data")}
                
                {this.state.inputText
                    ? <TextDisplay text={this.state.inputText} /> :
                       <TextDisplay text="Enter User name please...." />
                }
            </div>
        )
    }
}
