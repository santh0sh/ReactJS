import React, { Component } from "react";
class ErrorBoundary extends Component {
  state = { hasError: false };

  /*
Whenever an error is thrown in a descendant component, this method is called first, 
and the error thrown passed as an argument
  */
  static getDerivedStateFromError(error) {
    console.log(`Error log from getDerivedStateFromError: ${error}`);
    return { hasError: true };
  }
/*
The componentDidCatch method is also called after an error in a 
descendant component is thrown. Apart from the error thrown, it is passed 
one more argument which represents more information about the error:
*/

  componentDidCatch(error, info) {
    console.log(`Error log from componentDidCatch: ${error}`);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

