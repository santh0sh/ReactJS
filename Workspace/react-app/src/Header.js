import React from "react";
//Stateful class comp
//containser : children - Family

export default class Header extends React.Component{
 
    constructor(props){//initilaize state
        super(props);
        this.state = {userName:'Sandy'};
    }

    render(){
        return(
            <div>
                <h1 className="bg-warning text-center text danger">
                    SinglePageApplication for {this.props.company} by {this.state.userName}
                </h1>
            </div>
        )
    }
}

Header.defaultProps={
    company:"Default company name"
}