import React, { Component } from "react";

//Higher Order Component - HOC
export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };//null

        componentDidMount() {
            if (!this.state.Component) {
                // importing the module dynamically  here with callback
                getComponent().then(Component => {
                    
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }

    return AsyncComponent;
}

// customised react.lazy

